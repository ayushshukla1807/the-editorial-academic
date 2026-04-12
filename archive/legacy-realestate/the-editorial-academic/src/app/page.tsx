import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/home/hero";
import { FeaturedSection } from "@/components/home/featured-section";
import { LocationSection } from "@/components/home/location-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <FeaturedSection />
      <LocationSection />
      
      {/* Footer placeholder */}
      <footer className="py-20 border-t">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
              <div className="flex items-center gap-2 font-bold text-xl mb-6">
                <div className="bg-primary p-1.5 rounded-lg text-primary-foreground text-sm tracking-tight">🏫</div>
                <span>The Editorial academic</span>
              </div>
              <p className="text-muted-foreground max-w-sm">Dedicated housing solution for Newton School of Technology. Providing premium, verified, and student-focused living spaces in Lohegaon, Pune.</p>
            </div>
            <div>
              <h4 className="font-bold mb-6">Resources</h4>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Student Dashboard</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">University Partners</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Roommate Matcher</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Housing Guide</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6">Contact</h4>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li>NST Campus, Lohegaon</li>
                <li>support@editorialacademic.com</li>
                <li>+91 98765 43210</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t text-xs text-muted-foreground">
            <p>© 2024 The Editorial Academic. All rights reserved.</p>
            <div className="flex gap-8">
               <a href="#" className="hover:text-foreground">Privacy Policy</a>
               <a href="#" className="hover:text-foreground">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
