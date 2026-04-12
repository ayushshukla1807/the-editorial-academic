"use client"

import { useState } from "react"
import { Search, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

const PROPERTY_TYPES = ["1RK", "1BHK", "2BHK", "Rentals/PG"]

export function SearchBar() {
  const [activeType, setActiveType] = useState("1BHK")

  return (
    <div className="w-full max-w-xl">
      <div className="flex gap-2 mb-4">
        {PROPERTY_TYPES.map((type) => (
          <button
            key={type}
            onClick={() => setActiveType(type)}
            className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
              activeType === type
                ? "bg-primary text-primary-foreground shadow-md"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/70"
            }`}
          >
            {type}
          </button>
        ))}
      </div>
      
      <div className="relative group">
        <div className="absolute -inset-0.5 bg-primary/20 rounded-2xl blur opacity-0 group-focus-within:opacity-100 transition duration-500" />
        <div className="relative flex items-center bg-background border rounded-2xl p-2 shadow-sm focus-within:shadow-md transition-shadow">
          <div className="flex items-center gap-3 flex-1 px-4">
            <MapPin className="w-4 h-4 text-muted-foreground" />
            <input 
              type="text" 
              placeholder="Search near Newton School, Lohegaon..."
              className="bg-transparent border-none focus:ring-0 text-sm w-full outline-none"
            />
          </div>
          <Button size="sm" className="rounded-xl px-5 gap-2">
            <Search className="w-4 h-4" />
            <span>Search</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
