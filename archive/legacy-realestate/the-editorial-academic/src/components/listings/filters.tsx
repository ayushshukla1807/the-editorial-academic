"use client"

import { Button } from "@/components/ui/button"
import { Search, SlidersHorizontal, MapPin } from "lucide-react"

export function Filters() {
  const categories = ["All", "1RK", "1BHK", "2BHK", "PG", "Hostel"]
  
  return (
    <div className="flex flex-col gap-8 mb-16">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative group">
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
          <input 
            type="text" 
            placeholder="Search by area, PG name or street..." 
            className="w-full h-16 pl-16 pr-6 rounded-[24px] bg-card border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-lg shadow-sm"
          />
        </div>
        <Button className="h-16 px-8 rounded-[24px] bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg shadow-xl shadow-primary/20">
          Find Housing
        </Button>
      </div>
      
      <div className="flex flex-wrap items-center justify-between gap-6">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button 
              key={category}
              className={`px-8 py-3 rounded-full text-sm font-bold transition-all border ${
                category === "All" 
                  ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20" 
                  : "bg-background text-muted-foreground border-border hover:border-primary/40 hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="rounded-full gap-2 font-bold text-muted-foreground hover:text-foreground">
            <MapPin className="w-4 h-4" />
            <span>Map View</span>
          </Button>
          <div className="w-[1px] h-6 bg-border" />
          <Button variant="ghost" className="rounded-full gap-2 font-bold text-muted-foreground hover:text-foreground">
            <SlidersHorizontal className="w-4 h-4" />
            <span>Advanced Filters</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
