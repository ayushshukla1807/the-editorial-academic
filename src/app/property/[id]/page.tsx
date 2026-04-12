import { Navbar } from "@/components/layout/navbar";
import { Button } from "@/components/ui/button";
import { MapPin, Bed, Bath, Maximize2, CheckCircle2, Share2, Heart, ShieldCheck } from "lucide-react";
import Image from "next/image";

export default function PropertyDetailPage({ params }: { params: { id: string } }) {
  // Mock data for a single property
  const property = {
    id: params.id,
    title: "Heritage PG Elite",
    price: 12500,
    location: "Lohegaon, Pune (2 mins from NST)",
    type: "PG",
    description: "Heritage PG Elite offers a premium living experience tailored for students of Newton School of Technology. Located just a 2-minute walk from the main gate, this fully-serviced PG provides an ideal environment for academic focus and community living. All rooms are equipped with study desks, high-speed Wi-Fi, and ergonomic chairs.",
    images: [
      "https://images.unsplash.com/photo-1555854817-2b22603c7603?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
    amenities: ["High-speed Wi-Fi", "Daily Cleaning", "3 Meals Included", "AC Rooms", "24/7 Security", "Power Backup", "Gym Access", "Laundry"],
    beds: 2,
    baths: 1,
    sqft: 180,
    isFeatured: true,
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container py-24">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
               <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">{property.type}</span>
               <div className="flex items-center gap-1.5 text-primary text-xs font-bold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Verified Host</span>
               </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">{property.title}</h1>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-5 h-5 text-primary/60" />
              <span className="text-lg">{property.location}</span>
            </div>
          </div>
          
          <div className="flex flex-col items-end gap-4 min-w-[240px]">
            <div className="text-right">
               <span className="text-4xl font-extrabold text-primary">₹{property.price.toLocaleString()}</span>
               <span className="text-muted-foreground ml-1">/ month</span>
            </div>
            <div className="flex gap-4">
               <Button variant="outline" size="icon" className="rounded-full"><Share2 className="w-5 h-5" /></Button>
               <Button variant="outline" size="icon" className="rounded-full"><Heart className="w-5 h-5" /></Button>
               <Button className="rounded-full px-10 font-bold shadow-xl shadow-primary/20">Book a Visit</Button>
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[600px] mb-16 rounded-[48px] overflow-hidden">
           <div className="md:col-span-2 md:row-span-2 relative">
              <Image src={property.images[0]} alt={property.title} fill className="object-cover" />
           </div>
           <div className="md:col-span-2 relative">
              <Image src={property.images[1]} alt={property.title} fill className="object-cover" />
           </div>
           <div className="md:col-span-1 relative">
              <Image src={property.images[2]} alt={property.title} fill className="object-cover" />
           </div>
           <div className="relative bg-secondary/30 flex items-center justify-center cursor-pointer hover:bg-secondary/50 transition-colors">
              <span className="font-bold text-lg">+12 Photos</span>
           </div>
        </div>

        {/* Info Grid */}
        <div className="grid lg:grid-cols-3 gap-16">
           <div className="lg:col-span-2 space-y-16">
              {/* Key Specs */}
              <div className="grid grid-cols-3 gap-8 p-10 bg-secondary/20 rounded-[40px] border border-border">
                 <div className="flex flex-col items-center gap-2 text-center">
                    <Bed className="w-8 h-8 text-primary/60 mb-2" />
                    <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Bedrooms</span>
                    <span className="text-xl font-bold">{property.beds} Rooms</span>
                 </div>
                 <div className="flex flex-col items-center gap-2 text-center border-x border-border">
                    <Bath className="w-8 h-8 text-primary/60 mb-2" />
                    <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Bathrooms</span>
                    <span className="text-xl font-bold">{property.baths} Private</span>
                 </div>
                 <div className="flex flex-col items-center gap-2 text-center">
                    <Maximize2 className="w-8 h-8 text-primary/60 mb-2" />
                    <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Area Size</span>
                    <span className="text-xl font-bold">{property.sqft} sq ft</span>
                 </div>
              </div>

              {/* Description */}
              <section>
                 <h2 className="text-2xl font-bold mb-6">About this Residence</h2>
                 <p className="text-sm text-muted-foreground">Don&apos;t have an account? It will be created automatically.</p>
              </section>

              {/* Amenities */}
              <section>
                 <h2 className="text-2xl font-bold mb-8">What&apos;s included</h2>
                 <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {property.description || "Finding your perfect home shouldn&apos;t be hard. This verified property offers all the essentials for a comfortable student life."}
                    {property.amenities.map((amenity) => (
                       <div key={amenity} className="flex items-center gap-4 p-4 rounded-2xl bg-card border border-border shadow-sm">
                          <CheckCircle2 className="w-5 h-5 text-green-500" />
                          <span className="font-semibold">{amenity}</span>
                       </div>
                    ))}
                 </div>
              </section>
           </div>

           {/* Sidebar */}
           <div className="space-y-8">
              <div className="p-8 rounded-[40px] bg-primary text-primary-foreground shadow-2xl shadow-primary/20 sticky top-24">
                 <h3 className="text-xl font-bold mb-8">Quick Inquiry</h3>
                 <form className="space-y-6">
                    <div className="space-y-2">
                       <label className="text-xs font-bold uppercase tracking-widest opacity-70">Schedule a Date</label>
                       <input type="date" className="w-full bg-white/10 border border-white/20 rounded-2xl p-4 text-white focus:outline-none focus:ring-2 focus:ring-white/30" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-xs font-bold uppercase tracking-widest opacity-70">Your message</label>
                       <textarea placeholder="Hi, I'm a 2nd year student and interested..." className="w-full bg-white/10 border border-white/20 rounded-2xl p-4 text-white placeholder:text-white/40 h-32 focus:outline-none focus:ring-2 focus:ring-white/30" />
                    </div>
                    <Button className="w-full py-8 rounded-[24px] bg-white text-primary font-extrabold text-lg hover:bg-white/90">
                       Send Message
                    </Button>
                    <p className="text-[10px] text-center opacity-60 px-4">By clicking, you agree to share your Newton School profile with the owner.</p>
                 </form>
              </div>
           </div>
        </div>
      </div>
    </main>
  );
}
