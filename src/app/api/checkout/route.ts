import { NextResponse } from "next/server"
import Stripe from "stripe"

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  if (!process.env.STRIPE_SECRET_KEY || process.env.STRIPE_SECRET_KEY.includes("placeholder")) {
    return NextResponse.json({ 
      error: "Portfolio Mode: Stripe is currently in bypass mode. Payment actions are disabled.",
      url: "#" 
    })
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
    apiVersion: "2023-10-16" as any,
  })
  
  try {
    const { propertyId } = await req.json()
    // Mocking a successful session creation for the portfolio walkthrough
    return NextResponse.json({ url: "/checkout-success-mock" })
  } catch (error) {
    console.error("Stripe Error:", error)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}
