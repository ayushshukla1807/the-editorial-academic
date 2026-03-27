import { createClient } from '@supabase/supabase-js'
import * as dotenv from 'dotenv'

dotenv.config({ path: '.env.local' })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

if (!supabaseUrl || !supabaseAnonKey || supabaseUrl === 'YOUR_SUPABASE_URL') {
  console.error('Please provide valid NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseAnonKey)

const properties = [
  {
    title: "Heritage PG Elite",
    description: "Premium PG for NST students. 2 mins walking from main gate.",
    price: 12500,
    type: "PG",
    location_name: "Lohegaon, Pune",
    lat: 18.6186,
    lng: 73.9168,
    images: ["https://images.unsplash.com/photo-1555854817-2b22603c7603?auto=format&fit=crop&w=800&q=80"],
    amenities: ["Wi-Fi", "Food", "AC", "Laundry"],
    is_featured: true,
  },
  {
    title: "The Tech Suite",
    description: "Modern 1BHK set up for remote work and study.",
    price: 22000,
    type: "1BHK",
    location_name: "DY Patil Road, Lohegaon",
    lat: 18.6190,
    lng: 73.9175,
    images: ["https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80"],
    amenities: ["Workspace", "Power Backup", "Gym"],
    is_featured: false,
  },
  {
    title: "Unity Student Co-Living",
    description: "Affordable and social PG for freshman and sophomores.",
    price: 9500,
    type: "PG",
    location_name: "Santosh Nagar, Lohegaon",
    lat: 18.6170,
    lng: 73.9160,
    images: ["https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=80"],
    amenities: ["Social Lounge", "Meal Plan", "Security"],
    is_featured: false,
  }
]

async function seedData() {
  console.log('Seeding properties...')
  const { data, error } = await supabase
    .from('properties')
    .insert(properties)

  if (error) {
    console.error('Error seeding properties:', error)
  } else {
    console.log('Successfully seeded properties:', data)
  }
}

seedData()
