import { AuthForm } from "@/components/auth/auth-form";
import { Navbar } from "@/components/layout/navbar";

export default function AuthPage() {
  return (
    <main className="min-h-screen bg-background relative flex flex-col">
      <Navbar />
      
      {/* Abstract Background Shapes */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2" />

      <div className="flex-1 flex items-center justify-center container py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="hidden lg:block">
            <h1 className="text-6xl font-extrabold tracking-tighter mb-8 leading-[1.1]">
               Your Student<br />
               <span className="italic text-primary/80 font-serif">Journey</span> Starts<br />
               With a Home.
            </h1>
            <p className="text-xl text-muted-foreground max-w-md leading-relaxed">
              Join 315+ students from Newton School of Technology finding premium, verified, and collaborative living spaces in Lohegaon.
            </p>
            
            <div className="mt-12 flex gap-8">
               <div className="flex flex-col gap-1">
                  <span className="text-3xl font-bold">120+</span>
                  <span className="text-xs font-bold uppercase tracking-widest opacity-60">Verified PGs</span>
               </div>
               <div className="flex flex-col gap-1">
                  <span className="text-3xl font-bold">2.4k</span>
                  <span className="text-xs font-bold uppercase tracking-widest opacity-60">Student Matches</span>
               </div>
               <div className="flex flex-col gap-1">
                  <span className="text-3xl font-bold">4.9/5</span>
                  <span className="text-xs font-bold uppercase tracking-widest opacity-60">Avg. Rating</span>
               </div>
            </div>
          </div>
          
          <AuthForm />
        </div>
      </div>
      
      <footer className="py-12 border-t text-center text-xs text-muted-foreground">
         <div className="container">
            © 2024 The Editorial Academic. Dedicated Housing for NST Students.
         </div>
      </footer>
    </main>
  );
}
