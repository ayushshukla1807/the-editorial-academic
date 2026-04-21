import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ListingCard } from "@/components/listings/listing-card"

export function FeaturedSection() {
  const properties = [
    {
      id: "1",
      title: "Heritage PG Elite",
      price: 12500,
      location: "Lohegaon, Pune (2 mins from NST)",
      type: "PG",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      aiInsights: ["98% Safety Score", "Hyper-local"],
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
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      aiInsights: ["Gigabit Ready", "Quiet Zone"],
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
      image: "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      aiInsights: ["Best Value", "Social Hub"],
      beds: 3,
      baths: 2,
      sqft: 320
    }
  ]

  return (
    <section className="py-24 bg-secondary/30 relative">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <div className="animate-in-fade">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Featured near Newton School</h2>
            <p className="text-muted-foreground text-lg max-w-2xl text-pretty">Premium living spaces within a 2km radius of ADYPU Campus. Tailored for student excellence and vibrant student life.</p>
          </div>
          <Link href="/listings">
            <Button variant="outline" className="rounded-full px-8 py-6 border-white/10 hover:border-primary/50 transition-all font-bold">
              View All near Campus
            </Button>
          </Link>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {properties.map((property) => (
            <ListingCard key={property.id} {...property} />
          ))}
        </div>
      </div>
    </section>
  )
}
