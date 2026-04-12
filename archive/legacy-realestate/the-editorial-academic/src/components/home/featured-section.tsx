import Image from "next/image"
import { Button } from "@/components/ui/button"

export function FeaturedSection() {
  const properties = [
    {
      id: 1,
      title: "Heritage PG Elite",
      description: "2 mins from main gate, fully serviced, meals included.",
      price: "₹12,500",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      tag: "Just Listed"
    },
    {
      id: 2,
      title: "The Tech Suite",
      description: "Designed for programmers. Acoustic treated study areas.",
      price: "₹22,000",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      tag: "Verified Host"
    },
    {
      id: 3,
      title: "Unity Student Co-Living",
      description: "Shared living for collaborative learning. Gym access included.",
      price: "₹9,500",
      image: "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      tag: "Best Value"
    }
  ]

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-4">Featured near Newton School</h2>
            <p className="text-muted-foreground text-lg max-w-2xl">Premium living spaces within a 2km radius of ADYPU Campus. Tailored for student excellence and vibrant student life.</p>
          </div>
          <Button variant="outline" className="rounded-full">View All near Campus</Button>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div key={property.id} className="group bg-card rounded-[32px] overflow-hidden border border-border shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image 
                  src={property.image} 
                  alt={property.title} 
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-6 right-6 bg-background/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-bold shadow-xl border border-white/20">
                  {property.tag}
                </div>
              </div>
              <div className="p-8">
                <h3 className="font-bold text-xl mb-3">{property.title}</h3>
                <p className="text-sm text-muted-foreground mb-6 line-clamp-2">{property.description}</p>
                <div className="flex justify-between items-center pt-6 border-t border-border">
                  <div>
                    <span className="text-xl font-bold text-primary">{property.price}</span>
                    <span className="text-xs text-muted-foreground font-normal ml-1">/ month</span>
                  </div>
                  <Button variant="ghost" size="sm" className="font-bold text-xs tracking-wider uppercase opacity-70 hover:opacity-100">
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
