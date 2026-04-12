import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MapPin, School, TrainFront } from "lucide-react"

export function LocationSection() {
  return (
    <section className="py-24">
      <div className="container overflow-hidden rounded-[48px] bg-primary relative min-h-[500px] flex items-center">
        {/* Background Pattern/Image */}
        <Image 
          src="https://images.unsplash.com/photo-1524813686514-a57563d77965?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Location context"
          fill
          className="opacity-10 mix-blend-overlay grayscale object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent" />
        
        <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center px-8 md:px-16">
          <div className="text-primary-foreground max-w-xl py-12">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">
              Location is <br />
              <span className="italic text-primary-foreground/80 font-serif">Everything.</span>
            </h2>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center shrink-0">
                  <School className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Newton School of Technology</h4>
                  <p className="opacity-70">Walking distance (8-12 minutes). No more rushing for morning lectures.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
               <div className="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center shrink-0">
                  <TrainFront className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Direct Connectivity</h4>
                  <p className="opacity-70">Shuttle services to Lohegaon central & Airport Road. Fast access to Pune City.</p>
                </div>
              </div>
            </div>
            
            <Button size="lg" variant="secondary" className="rounded-full shadow-xl hover:shadow-2xl transition-all font-bold">
              Take a Tour on Map
            </Button>
          </div>
          
          <div className="relative aspect-square w-full hidden lg:block">
            <div className="absolute inset-0 bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/10 shadow-2xl p-6">
              <div className="w-full h-full bg-slate-950 rounded-2xl relative overflow-hidden border border-white/5">
                {/* Fake Map implementation */}
                <div className={`absolute inset-0 bg-cover opacity-40 grayscale`} style={{ backgroundImage: `url('https://api.mapbox.com/styles/v1/mapbox/dark-v11/static/73.9168,18.6186,14,0/800x800?access_token=${process.env.NEXT_PUBLIC_MAPBOX_TOKEN || "YOUR_MAPBOX_TOKEN_HERE"}')` }} />
                
                {/* Marker */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group">
                   <div className="w-8 h-8 bg-primary rounded-full animate-ping absolute -inset-0 opacity-20" />
                   <div className="w-8 h-8 bg-primary rounded-full relative flex items-center justify-center border-4 border-white/20 shadow-[0_0_30px_rgba(var(--primary),0.6)] group-hover:scale-125 transition-transform">
                      <MapPin className="w-4 h-4 text-white" />
                   </div>
                   <div className="absolute -top-16 -translate-x-1/3 whitespace-nowrap bg-background text-foreground px-4 py-2 rounded-2xl text-[10px] font-bold shadow-2xl border border-border">
                      <div className="flex items-center gap-2">
                         <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                         NST Campus (ADYPU)
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
