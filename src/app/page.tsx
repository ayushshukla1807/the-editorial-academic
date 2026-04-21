import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/home/hero";
import { FeaturedSection } from "@/components/home/featured-section";
import { LocationSection } from "@/components/home/location-section";
import { AICopilot } from "@/components/workspace/ai-copilot";

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative selection:bg-primary/30 selection:text-primary">
      <Navbar />
      <Hero />
      <FeaturedSection />
      <LocationSection />
      
      <AICopilot />

      {/* Footer placeholder */}
      <footer className="py-20 border-t border-white/5 relative z-10 bg-background/80 backdrop-blur-md">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
              <div className="flex items-center gap-2 font-bold text-xl mb-6">
                <div className="bg-primary/20 border border-primary/30 p-1.5 rounded-lg text-primary text-sm tracking-tight">🏢</div>
                <span className="text-gradient">The Editorial Academic Intelligence</span>
              </div>
              <p className="text-muted-foreground max-w-sm text-sm leading-relaxed">Enterprise-grade housing solution powered by semantic vector search. Delivering unparalleled matching accuracy for technical students in Pune.</p>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-primary">Intelligence</h4>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Vector Search API</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Distributed Caching</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">AI Matcher</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-primary">System</h4>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li>Architecture Docs</li>
                <li>Engineering Blog</li>
                <li>System Status API</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-white/5 text-xs text-muted-foreground">
            <p>© 2024 The Editorial Academic. MIT License.</p>
            <div className="flex gap-8">
               <a href="#" className="hover:text-primary transition-colors">Privacy</a>
               <a href="#" className="hover:text-primary transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
