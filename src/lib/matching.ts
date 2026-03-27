export interface RoommateProfile {
  id: string
  name: string
  sleep_schedule: 'early_bird' | 'night_owl' | 'flexible'
  food_preference: 'veg' | 'non_veg' | 'both'
  cleaning_habit: 'neat_freak' | 'moderate' | 'relaxed'
  gender_preference: 'same' | 'any'
  gender: 'male' | 'female' | 'other'
}

export function calculateMatchScore(user: RoommateProfile, candidate: RoommateProfile): number {
  let score = 0
  const maxScore = 100

  // 1. Gender Preference Check (Must match if 'same' is preferred)
  if (user.gender_preference === 'same' && user.gender !== candidate.gender) return 0
  if (candidate.gender_preference === 'same' && candidate.gender !== user.gender) return 0
  score += 20 // Base points for passing gender check

  // 2. Sleep Schedule (30 points)
  if (user.sleep_schedule === candidate.sleep_schedule) {
    score += 30
  } else if (user.sleep_schedule === 'flexible' || candidate.sleep_schedule === 'flexible') {
    score += 15
  }

  // 3. Food Preference (25 points)
  if (user.food_preference === candidate.food_preference || user.food_preference === 'both' || candidate.food_preference === 'both') {
    score += 25
  }

  // 4. Cleaning Habit (25 points)
  if (user.cleaning_habit === candidate.cleaning_habit) {
    score += 25
  } else if (
    (user.cleaning_habit === 'moderate' && (candidate.cleaning_habit === 'neat_freak' || candidate.cleaning_habit === 'relaxed')) ||
    (candidate.cleaning_habit === 'moderate' && (user.cleaning_habit === 'neat_freak' || user.cleaning_habit === 'relaxed'))
  ) {
    score += 15
  }

  return Math.min(score, maxScore)
}

export function getTopMatches(user: RoommateProfile, candidates: RoommateProfile[], limit = 5) {
  return candidates
    .map(candidate => ({
      ...candidate,
      matchPercentage: calculateMatchScore(user, candidate)
    }))
    .filter(match => match.matchPercentage > 50) // Only show good matches
    .sort((a, b) => b.matchPercentage - a.matchPercentage)
    .slice(0, limit)
}
