"use client"

import { useState } from "react"
import { supabase } from "@/lib/supabase"
import { Button } from "@/components/ui/button"
import { GraduationCap, Mail, Loader2 } from "lucide-react"

export function AuthForm() {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage(null)

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/dashboard`,
      },
    })

    if (error) {
      setMessage({ type: 'error', text: error.message })
    } else {
      setMessage({ type: 'success', text: "Check your email for the login link!" })
    }
    setLoading(false)
  }

  return (
    <div className="w-full max-w-md mx-auto p-8 rounded-[40px] bg-card border border-border shadow-2xl">
      <div className="flex flex-col items-center text-center mb-8">
        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
          <GraduationCap className="w-8 h-8 text-primary" />
        </div>
        <h2 className="text-3xl font-extrabold tracking-tight">Student Login</h2>
        <p className="text-muted-foreground mt-2">Enter your NST email to receive a magic link.</p>
      </div>

      <form onSubmit={handleLogin} className="space-y-6">
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-widest opacity-70 ml-1">Email Address</label>
          <div className="relative group">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
            <input 
              type="email" 
              placeholder="vibrant.learner@ajeenkya.edu.in" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-14 pl-12 pr-4 rounded-2xl bg-secondary/30 border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            />
          </div>
        </div>

        {message && (
          <div className={`p-4 rounded-2xl text-sm font-medium ${
            message.type === 'success' ? 'bg-green-500/10 text-green-600' : 'bg-red-500/10 text-red-600'
          }`}>
            {message.text}
          </div>
        )}

        <Button 
          type="submit" 
          disabled={loading}
          className="w-full h-14 rounded-2xl bg-primary text-primary-foreground font-bold text-lg shadow-xl shadow-primary/20 hover:scale-[1.02] transition-transform active:scale-[0.98]"
        >
          {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : "Send Magic Link"}
        </Button>
      </form>

      <div className="mt-8 pt-8 border-t border-border text-center">
        <p className="text-xs text-muted-foreground">
          Don't have an account? <span className="text-primary font-bold cursor-pointer hover:underline">Request Access</span>
        </p>
      </div>
    </div>
  )
}
