"use client";
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MapPin, Maximize2, Bed, Bath, Sparkles, Users } from "lucide-react"
import { motion } from "framer-motion"
import { useRealtimeActivity } from "@/hooks/use-realtime-activity"

interface ListingCardProps {
  id: string
  title: string
  price: number
  location: string
  type: string
  image: string
  beds?: number
  baths?: number
  sqft?: number
  isFeatured?: boolean
  aiInsights?: string[]
}

export function ListingCard({
  title,
  price,
  location,
  type,
  image,
  beds = 1,
  baths = 1,
  sqft = 250,
  isFeatured = false,
  aiInsights = ["Eco-friendly", "Premium Finishes"],
}: ListingCardProps) {
  const { viewers, lastActivity } = useRealtimeActivity();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className="group bg-card rounded-[32px] overflow-hidden border border-border shadow-sm hover:shadow-2xl transition-all duration-500"
    >
      <div className="aspect-[4/3] relative overflow-hidden">
        <Image 
          src={image} 
          alt={title} 
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute top-6 left-6 flex flex-col gap-2">
          {isFeatured && (
            <div className="bg-primary/90 backdrop-blur-md text-primary-foreground px-4 py-1.5 rounded-full text-[10px] font-bold shadow-xl">
              Featured
            </div>
          )}
          <div className="bg-orange-500/90 backdrop-blur-md text-white px-3 py-1.5 rounded-full text-[10px] font-bold shadow-xl flex items-center gap-1.5">
            <Users className="w-3 h-3" />
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            {viewers} students viewing
          </div>
        </div>
        <div className="absolute top-6 right-6 bg-background/90 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] font-bold shadow-lg border border-white/20">
          {type}
        </div>
        
        {/* AI Insight Overlay */}
        <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
          {aiInsights.slice(0, 2).map((insight, i) => (
            <div key={i} className="bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-[10px] text-white font-medium flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-primary" />
              {insight}
            </div>
          ))}
        </div>
      </div>
      
      <div className="p-8">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-xl tracking-tight line-clamp-1">{title}</h3>
          <span className="text-xl font-bold text-primary">₹{price.toLocaleString()}<span className="text-xs text-muted-foreground font-normal ml-0.5">/m</span></span>
        </div>
        
        <div className="flex items-center gap-2 text-[10px] font-bold text-orange-500 uppercase tracking-widest mb-4">
          <span>{lastActivity}</span>
        </div>

        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <MapPin className="w-4 h-4 text-primary/60" />
          <span className="line-clamp-1">{location}</span>
        </div>
        
        <div className="grid grid-cols-3 gap-4 py-6 border-t border-border mt-auto">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <Bed className="w-3.5 h-3.5" />
              <span className="text-[10px] font-bold uppercase tracking-wider">Beds</span>
            </div>
            <span className="font-bold text-sm">{beds}</span>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <Bath className="w-3.5 h-3.5" />
              <span className="text-[10px] font-bold uppercase tracking-wider">Baths</span>
            </div>
            <span className="font-bold text-sm">{baths}</span>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <Maximize2 className="w-3.5 h-3.5" />
              <span className="text-[10px] font-bold uppercase tracking-wider">Sqft</span>
            </div>
            <span className="font-bold text-sm">{sqft}</span>
          </div>
        </div>
        
        <Button className="w-full mt-4 rounded-2xl font-bold text-sm py-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors" variant="outline">
          View Details
        </Button>
      </div>
    </motion.div>
  )
}
