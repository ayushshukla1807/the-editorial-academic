"use client"

import { useState } from "react"
import { Search, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SearchBar() {
  return (
    <div className="w-full max-w-xl">
      <div className="flex gap-2 items-center mb-3">
        <Sparkles className="w-4 h-4 text-primary" />
        <span className="text-xs font-semibold text-primary/80 uppercase tracking-widest">Semantic Prompt Search</span>
      </div>
      
      <div className="relative group">
        <div className="absolute -inset-0.5 bg-primary/20 rounded-2xl blur opacity-30 group-focus-within:opacity-100 transition duration-500" />
        <div className="relative flex items-center bg-background/50 backdrop-blur-xl border border-white/10 rounded-2xl p-2 shadow-2xl focus-within:shadow-primary/20 transition-all">
          <div className="flex items-center gap-3 flex-1 px-4">
            <Search className="w-4 h-4 text-muted-foreground" />
            <input 
              type="text" 
              placeholder="e.g., 'Quiet 2BHK for a night owl vegetarian near NST'"
              className="bg-transparent border-none focus:ring-0 text-sm w-full outline-none text-foreground placeholder:text-muted-foreground/50"
            />
          </div>
          <Button size="sm" className="rounded-xl px-6 py-5 gap-2 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20">
            <span className="font-semibold tracking-wide">Generate Matches</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
