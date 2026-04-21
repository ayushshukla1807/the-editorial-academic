// AI Vector Search Strategy implementation
import { RoommateProfile } from "@/lib/matching";

/**
 * Calculates vector cosine similarity.
 * Simulated here to showcase ML logic without requiring a pgvector db instance.
 */
function cosineSimilarity(vecA: number[], vecB: number[]): number {
  let dotProduct = 0;
  let normA = 0;
  let normB = 0;
  for (let i = 0; i < vecA.length; i++) {
    dotProduct += vecA[i] * vecB[i];
    normA += vecA[i] * vecA[i];
    normB += vecB[i] * vecB[i];
  }
  if (normA === 0 || normB === 0) return 0;
  return dotProduct / (Math.sqrt(normA) * Math.sqrt(normB));
}

/**
 * Generates deterministic pseudo-embeddings for roommate profiles based on traits.
 * In a real application, we would call an OpenAI ada-002 or Cohere API here.
 */
function generateProfileEmbedding(profile: RoommateProfile): number[] {
  const vector = new Array(10).fill(0);
  
  // Sleep schedule dimensionalities (0, 1)
  if (profile.sleep_schedule === 'early_bird') vector[0] = 1;
  else if (profile.sleep_schedule === 'night_owl') vector[1] = 1;
  else { vector[0] = 0.5; vector[1] = 0.5; }

  // Food preference (2, 3)
  if (profile.food_preference === 'veg') vector[2] = 1;
  else if (profile.food_preference === 'non_veg') vector[3] = 1;
  else { vector[2] = 0.5; vector[3] = 0.5; }

  // Cleanliness (4, 5)
  if (profile.cleaning_habit === 'neat_freak') vector[4] = 1;
  else if (profile.cleaning_habit === 'relaxed') vector[5] = 1;
  else { vector[4] = 0.5; vector[5] = 0.5; }
  
  // Gender preference strictness penalty/bonus is handled pre-vector in typical enterprise logic.
  // Here we just map it into dimensions.
  vector[6] = profile.gender === 'male' ? 1 : 0;
  vector[7] = profile.gender === 'female' ? 1 : 0;

  return vector;
}

/**
 * New intelligent AI matching function using Vector Cosine Similarity
 * Replaces the brittle if/else logic in legacy systems.
 */
export async function getVectorMatches(user: RoommateProfile, candidates: RoommateProfile[], limit = 5) {
  const userVector = generateProfileEmbedding(user);

  const scoredCandidates = candidates.map(candidate => {
    // Hard constraint filter
    if (user.gender_preference === 'same' && user.gender !== candidate.gender) {
      return { ...candidate, matchPercentage: 0 };
    }
    
    if (candidate.gender_preference === 'same' && candidate.gender !== user.gender) {
      return { ...candidate, matchPercentage: 0 };
    }

    const candidateVector = generateProfileEmbedding(candidate);
    const similarity = cosineSimilarity(userVector, candidateVector);
    
    // Scale similarity (0 to 1) to percentage (0 to 100)
    return {
      ...candidate,
      matchPercentage: Math.round(similarity * 100)
    };
  });

  return scoredCandidates
    .filter(match => match.matchPercentage > 50)
    .sort((a, b) => b.matchPercentage - a.matchPercentage)
    .slice(0, limit);
}
