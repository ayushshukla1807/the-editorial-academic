import { Navbar } from "@/components/layout/navbar";
import { Button } from "@/components/ui/button";
import { User, Heart, Users, Settings, LogOut, Bell, Search, Star, MessageSquare } from "lucide-react";
import Image from "next/image";

export default function DashboardPage() {
  const savedListings = [
    { id: 1, title: "Heritage PG Elite", price: 12500, type: "PG", image: "https://images.unsplash.com/photo-1555854817-2b22603c7603?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    { id: 2, title: "The Tech Suite", price: 22000, type: "1BHK", image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" }
  ]

  const roommateMatches = [
    { name: "Aryan Sharma", college: "NST - 2nd Year", match: 98, bio: "CS student, quiet at night, loves trekking.", avatar: "https://i.pravatar.cc/150?u=aryan" },
    { name: "Sanya Verma", college: "NST - 2nd Year", match: 86, bio: "Early bird, vegetarian, loves to keep things neat.", avatar: "https://i.pravatar.cc/150?u=sanya" }
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container py-24">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-8">
            <div className="p-8 rounded-[40px] bg-card border border-border">
              <div className="flex flex-col items-center text-center mb-8">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-primary/20 mb-4">
                  <Image src="https://i.pravatar.cc/150?u=ayush" alt="User" width={96} height={96} />
                </div>
                <h2 className="font-bold text-xl">Ayush Shukla</h2>
                <p className="text-sm text-muted-foreground">NST Section A (2024-28)</p>
              </div>
              
              <nav className="space-y-2">
                <Button variant="ghost" className="w-full justify-start gap-3 rounded-2xl h-14 bg-primary/10 text-primary">
                  <User className="w-5 h-5" />
                  <span className="font-bold">My Profile</span>
                </Button>
                <Button variant="ghost" className="w-full justify-start gap-3 rounded-2xl h-14 text-muted-foreground">
                  <Heart className="w-5 h-5" />
                  <span className="font-bold">Saved Listings</span>
                </Button>
                <Button variant="ghost" className="w-full justify-start gap-3 rounded-2xl h-14 text-muted-foreground">
                  <Users className="w-5 h-5" />
                  <span className="font-bold">Roommate Matcher</span>
                </Button>
                <Button variant="ghost" className="w-full justify-start gap-3 rounded-2xl h-14 text-muted-foreground">
                  <Settings className="w-5 h-5" />
                  <span className="font-bold">Settings</span>
                </Button>
                <div className="pt-8 border-t border-border mt-8">
                  <Button variant="ghost" className="w-full justify-start gap-3 rounded-2xl h-14 text-red-500 hover:text-red-600 hover:bg-red-50">
                    <LogOut className="w-5 h-5" />
                    <span className="font-bold">Logout</span>
                  </Button>
                </div>
              </nav>
            </div>

            <div className="p-8 rounded-[40px] bg-primary text-primary-foreground">
               <h3 className="font-bold mb-4">NST Pro Support</h3>
               <p className="text-sm opacity-80 mb-6">Need help with contracts? Our team of student advisors is here for you.</p>
               <Button className="w-full bg-white text-primary font-bold rounded-2xl">Talk to Advisor</Button>
            </div>
          </aside>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-12">
            <section>
              <div className="flex justify-between items-end mb-8">
                <div>
                  <h1 className="text-3xl font-extrabold mb-2">Welcome back, Ayush</h1>
                  <p className="text-muted-foreground">You have 2 new property matches based on your preferences.</p>
                </div>
                <div className="flex gap-4">
                  <Button size="icon" variant="outline" className="rounded-full relative">
                    <Bell className="w-5 h-5" />
                    <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-primary rounded-full border-2 border-background" />
                  </Button>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-8 rounded-[32px] bg-secondary/30 border border-border flex items-center gap-6">
                   <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center">
                      <Search className="w-8 h-8 text-primary" />
                   </div>
                   <div>
                      <h4 className="font-bold text-lg">Active Searches</h4>
                      <p className="text-sm text-muted-foreground">Lohegaon, 2BHK, &lt;₹20k</p>
                   </div>
                </div>
                <div className="p-8 rounded-[32px] bg-secondary/30 border border-border flex items-center gap-6">
                   <div className="w-16 h-16 rounded-2xl bg-green-500/10 flex items-center justify-center">
                      <Users className="w-8 h-8 text-green-600" />
                   </div>
                   <div>
                      <h4 className="font-bold text-lg">Roommate Status</h4>
                      <p className="text-sm text-muted-foreground">Looking for 1 more person</p>
                   </div>
                </div>
              </div>
            </section>

            {/* Saved Listings */}
            <section>
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold">Saved for Later</h2>
                <Button variant="link" className="text-primary font-bold">View All</Button>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {savedListings.map((listing) => (
                  <div key={listing.id} className="flex gap-4 p-4 rounded-3xl bg-card border border-border hover:shadow-lg transition-all group cursor-pointer">
                    <div className="w-32 h-32 rounded-2xl overflow-hidden relative shrink-0">
                      <Image src={listing.image} alt={listing.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div className="flex flex-col justify-between py-2">
                       <div>
                         <h4 className="font-bold leading-tight mb-1">{listing.title}</h4>
                         <span className="text-xs bg-secondary px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">{listing.type}</span>
                       </div>
                       <div className="font-bold text-primary">₹{listing.price.toLocaleString()}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Roommate Matcher Preview */}
            <section>
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold">Recommended Roommates</h2>
                <Button variant="link" className="text-primary font-bold">More Potential Matches</Button>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {roommateMatches.map((match) => (
                   <div key={match.name} className="p-8 rounded-[32px] bg-card border border-border hover:shadow-xl transition-all relative overflow-hidden">
                      <div className="absolute top-6 right-6 flex items-center gap-1 bg-green-500/10 text-green-600 px-3 py-1 rounded-full text-[10px] font-bold">
                         <Star className="w-3 h-3 fill-current" />
                         {match.match}% Match
                      </div>
                      <div className="flex items-center gap-4 mb-6">
                         <div className="w-12 h-12 rounded-full overflow-hidden">
                            <Image src={match.avatar} alt={match.name} width={48} height={48} />
                         </div>
                         <div>
                            <h4 className="font-bold">{match.name}</h4>
                            <p className="text-xs text-muted-foreground">{match.college}</p>
                         </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-8 line-clamp-2">{match.bio}</p>
                      <div className="flex gap-4">
                         <Button className="flex-1 rounded-2xl font-bold gap-2">
                            <MessageSquare className="w-4 h-4" /> Say Hi
                         </Button>
                         <Button variant="outline" className="rounded-2xl font-bold">Details</Button>
                      </div>
                   </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
