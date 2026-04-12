export const dynamic = "force-dynamic";
import { Navbar } from "@/components/layout/navbar";
import { ListingCard } from "@/components/listings/listing-card";
import { Filters } from "@/components/listings/filters";

export default function ListingsPage() {
  // Mock data for initial UI
  const listings = [
    {
      id: "1",
      title: "Heritage PG Elite",
      price: 12500,
      location: "Lohegaon, Pune (2 mins from NST)",
      type: "PG",
      image: "https://images.unsplash.com/photo-1555854817-2b22603c7603?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      isFeatured: true,
      beds: 2,
      baths: 1,
      sqft: 180
    },
    {
      id: "2",
      title: "The Tech Suite",
      price: 22000,
      location: "DY Patil Road, Lohegaon",
      type: "1BHK",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      beds: 1,
      baths: 1,
      sqft: 450
    },
    {
      id: "3",
      title: "Unity Student Co-Living",
      price: 9500,
      location: "Santosh Nagar, Lohegaon",
      type: "PG",
      image: "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      beds: 3,
      baths: 2,
      sqft: 320
    },
    {
      id: "4",
      title: "Royal Residency",
      price: 18000,
      location: "Airport Road, Lohegaon",
      type: "2BHK",
      image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      beds: 2,
      baths: 2,
      sqft: 850
    },
    {
      id: "5",
      title: "Newton Scholars Home",
      price: 15000,
      location: "Near Main Gate, ADYPU",
      type: "1RK",
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      beds: 1,
      baths: 1,
      sqft: 280
    },
    {
      id: "6",
      title: "Zolo Stays Lohegaon",
      price: 11000,
      location: "Lohegaon Central",
      type: "PG",
      image: "https://images.unsplash.com/photo-1556912177-c54030639a03?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      beds: 2,
      baths: 1,
      sqft: 200
    }
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container py-24">
        <header className="mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Curated Student Living</h1>
          <p className="text-muted-foreground text-lg max-w-2xl">Discover hand-picked residences near Newton School of Technology. Verified, premium, and designed for academic excellence.</p>
        </header>
        
        <Filters />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {listings.map((listing) => (
            <ListingCard key={listing.id} {...listing} />
          ))}
        </div>
        
        <div className="mt-24 p-12 rounded-[48px] bg-secondary/30 border border-border flex flex-col items-center text-center">
          <h2 className="text-2xl font-bold mb-4">Can&apos;t find what you&apos;re looking for?</h2>
          <p className="text-muted-foreground mb-8 max-w-lg">Our student housing experts are here to help you find the perfect stay near campus. We add new listings every week.</p>
          <div className="flex gap-4">
             <button className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-transform">Get in Touch</button>
             <button className="bg-background border border-border px-8 py-3 rounded-full font-bold hover:bg-secondary/50 transition-colors">Request a Listing</button>
          </div>
        </div>
      </div>
    </main>
  );
}
