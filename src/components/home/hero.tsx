"use client";
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { SearchBar } from "@/components/home/search-bar"
import { AnimatedCounter } from "@/components/ui/animated-counter"
import { GraduationCap, ArrowRight, BrainCircuit, Sparkles } from "lucide-react"

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Deep Space Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 blur-[120px] rounded-full -z-10 opacity-50" />
      <div className="absolute top-0 right-0 -z-10 w-1/3 h-full bg-secondary/20 rounded-l-[100px] hidden lg:block backdrop-blur-3xl" />
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/80 text-primary text-xs font-semibold mb-6 border border-white/5 backdrop-blur-md shadow-2xl"
            >
              <BrainCircuit className="w-3.5 h-3.5" />
              <span>Semantic Vector Search Engine v2.0</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6"
            >
              Intelligent <br />
              <span className="text-gradient">Housing.</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-muted-foreground mb-10 max-w-lg leading-relaxed"
            >
              The first AI-native real estate platform for students. Our vector models parse your preferences to autonomously syndicate and negotiate hyper-local housing around your campus.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative rounded-2xl glass-panel p-2"
            >
              <SearchBar />
            </motion.div>
            
            <div className="mt-12 flex items-center gap-8 border-t border-white/10 pt-8">
              <div>
                <div className="text-3xl font-black text-white">
                  <AnimatedCounter value={99.1} decimals={1} />%
                </div>
                <div className="text-xs text-muted-foreground tracking-widest uppercase mt-1">Match Accuracy</div>
              </div>
              <div>
                <div className="text-3xl font-black text-white">
                  &lt;<AnimatedCounter value={40} />ms
                </div>
                <div className="text-xs text-muted-foreground tracking-widest uppercase mt-1">Redis Latency</div>
              </div>
              <div>
                <div className="text-3xl font-black text-white">
                  <AnimatedCounter value={315} />+
                </div>
                <div className="text-xs text-muted-foreground tracking-widest uppercase mt-1">Active Nodes</div>
              </div>
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative aspect-[4/5] rounded-3xl overflow-hidden glass-panel border border-white/10 p-2"
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden">
               <Image 
                 src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                 alt="Premium Student Housing"
                 fill
                 className="object-cover"
                 priority
               />
               <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
               <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-background/60 backdrop-blur-xl border border-white/10">
                 <div className="flex justify-between items-center text-white">
                   <div>
                     <div className="flex items-center gap-2 mb-1">
                       <Sparkles className="w-3.5 h-3.5 text-primary" />
                       <span className="text-[10px] uppercase tracking-wider font-semibold text-primary">98% Compatibility</span>
                     </div>
                     <h3 className="font-bold text-lg">The Tech Suite</h3>
                     <p className="text-xs text-muted-foreground">Lohegaon, Pune • 2 BHK</p>
                   </div>
                   <Button size="icon" className="rounded-full bg-white text-black hover:bg-neutral-200">
                     <ArrowRight className="w-4 h-4" />
                   </Button>
                 </div>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
