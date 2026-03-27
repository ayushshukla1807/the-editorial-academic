export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      properties: {
        Row: {
          id: string
          title: string
          description: string | null
          price: number
          type: '1BHK' | '2BHK' | '3BHK' | '1RK' | 'PG'
          location_name: string
          lat: number | null
          lng: number | null
          images: string[]
          amenities: string[]
          is_featured: boolean
          owner_id: string | null
          created_at: string
        }
        Insert: {
          id?: string
          title: string
          description?: string | null
          price: number
          type: '1BHK' | '2BHK' | '3BHK' | '1RK' | 'PG'
          location_name: string
          lat?: number | null
          lng?: number | null
          images?: string[]
          amenities?: string[]
          is_featured?: boolean
          owner_id?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          title?: string
          description?: string | null
          price?: number
          type?: '1BHK' | '2BHK' | '3BHK' | '1RK' | 'PG'
          location_name?: string
          lat?: number | null
          lng?: number | null
          images?: string[]
          amenities?: string[]
          is_featured?: boolean
          owner_id?: string | null
          created_at?: string
        }
      }
      profiles: {
        Row: {
          id: string
          full_name: string | null
          avatar_url: string | null
          role: 'student' | 'owner' | 'admin'
          saved_listings: string[]
          created_at: string
        }
        Insert: {
          id: string
          full_name?: string | null
          avatar_url?: string | null
          role?: 'student' | 'owner' | 'admin'
          saved_listings?: string[]
          created_at?: string
        }
        Update: {
          id?: string
          full_name?: string | null
          avatar_url?: string | null
          role?: 'student' | 'owner' | 'admin'
          saved_listings?: string[]
          created_at?: string
        }
      }
      roommate_profiles: {
        Row: {
          id: string
          profile_id: string
          bio: string | null
          sleep_schedule: 'early_bird' | 'night_owl' | 'flexible'
          food_preference: 'veg' | 'non_veg' | 'both'
          cleaning_habit: 'neat_freak' | 'moderate' | 'relaxed'
          gender_preference: 'same' | 'any'
          created_at: string
        }
        Insert: {
          id?: string
          profile_id: string
          bio?: string | null
          sleep_schedule: 'early_bird' | 'night_owl' | 'flexible'
          food_preference: 'veg' | 'non_veg' | 'both'
          cleaning_habit: 'neat_freak' | 'moderate' | 'relaxed'
          gender_preference: 'same' | 'any'
          created_at?: string
        }
        Update: {
          id?: string
          profile_id?: string
          bio?: string | null
          sleep_schedule?: 'early_bird' | 'night_owl' | 'flexible'
          food_preference?: 'veg' | 'non_veg' | 'both'
          cleaning_habit?: 'neat_freak' | 'moderate' | 'relaxed'
          gender_preference?: 'same' | 'any'
          created_at?: string
        }
      }
    }
  }
}
