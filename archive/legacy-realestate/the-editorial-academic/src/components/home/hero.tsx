import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { SearchBar } from "@/components/home/search-bar"
import { GraduationCap, ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-secondary/50 rounded-l-[100px] hidden lg:block" />
      
      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-6 border border-primary/20"
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Dedicated for Newton School of Technology</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6"
            >
              The Curated <br />
              <span className="text-primary">Campus Life.</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-muted-foreground mb-10 max-w-lg leading-relaxed"
            >
              Exclusively curated housing for the innovators of Newton School of Technology. Discover flats and PGs in Lohegaon designed for focus, and collaboration.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <SearchBar />
            </motion.div>
            
            <div className="mt-12 flex items-center gap-8 border-t border-border pt-8">
              <div>
                <div className="text-2xl font-bold">98%</div>
                <div className="text-sm text-muted-foreground">Student Satisfaction</div>
              </div>
              <div>
                <div className="text-2xl font-bold">315+</div>
                <div className="text-sm text-muted-foreground">Active Members</div>
              </div>
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image 
              src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Premium Student Housing"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 glass p-6 rounded-2xl">
              <div className="flex justify-between items-center text-white">
                <div>
                  <h3 className="font-bold">The Tech Suite</h3>
                  <p className="text-xs opacity-80">Lohegaon, Pune • 2 BHK</p>
                </div>
                <Button size="sm" variant="secondary" className="rounded-full h-8 px-4">
                  View Details
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
