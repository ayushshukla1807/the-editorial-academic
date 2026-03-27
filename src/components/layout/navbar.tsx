import Link from "next/link"
import { Button } from "@/components/ui/button"
import { GraduationCap } from "lucide-react"

export function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight">
          <div className="bg-primary p-1.5 rounded-lg">
            <GraduationCap className="w-5 h-5 text-primary-foreground" />
          </div>
          <span>The Editorial academic</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <Link href="/listings" className="hover:text-foreground transition-colors">Listings</Link>
          <Link href="/universities" className="hover:text-foreground transition-colors">University Partners</Link>
          <Link href="/student-life" className="hover:text-foreground transition-colors">Student Life</Link>
          <Link href="/dashboard" className="hover:text-foreground transition-colors">Dashboard</Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="hidden sm:inline-flex">Sign In</Button>
          <Button>Apply Now</Button>
        </div>
      </div>
    </header>
  )
}
