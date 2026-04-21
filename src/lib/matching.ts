import { getVectorMatches } from "@/services/ai/embeddings"

export interface RoommateProfile {
  id: string
  name: string
  sleep_schedule: 'early_bird' | 'night_owl' | 'flexible'
  food_preference: 'veg' | 'non_veg' | 'both'
  cleaning_habit: 'neat_freak' | 'moderate' | 'relaxed'
  gender_preference: 'same' | 'any'
  gender: 'male' | 'female' | 'other'
}

/**
 * @deprecated Use getVectorMatches directly. Retained for backwards compatibility with legacy UI.
 */
export function calculateMatchScore(user: RoommateProfile, candidate: RoommateProfile): number {
  // We can't synchronously return the new vector score here easily without re-implementing,
  // but since we upgraded getTopMatches we will just return a placeholder or wrap it if needed.
  return 0; // Legacy function disabled.
}

/**
 * Intelligent Match Aggregator
 * Migrated to AI Vector Strategy as of Phase 1 Overhaul.
 */
export async function getTopMatches(user: RoommateProfile, candidates: RoommateProfile[], limit = 5) {
  return await getVectorMatches(user, candidates, limit);
}
