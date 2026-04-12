# 🏠 The Editorial Academic — Student Real Estate Hub

> A premium, student-focused housing marketplace specifically designed for Newton School of Technology (NST) students in Lohegaon, Pune.

[![Next.js](https://img.shields.io/badge/Framework-Next.js_14-000000?logo=next.js)](https://nextjs.org)
[![Supabase](https://img.shields.io/badge/Backend-Supabase-3ECF8E?logo=supabase)](https://supabase.com)
[![Stripe](https://img.shields.io/badge/Payments-Stripe-635BFF?logo=stripe)](https://stripe.com)
[![Tailwind CSS](https://img.shields.io/badge/Styling-Tailwind_CSS-38B2AC?logo=tailwind-css)](https://tailwindcss.com)

---

## 🎓 Technical Alignment (Industry Ready)

This platform provides a **Hands-on Learning** experience in building secure, real-time student marketplaces:

- **Secure Authentication**: Implements a robust user authentication system similar to Google using **Supabase MFA & RLS**.
- **Real-time Marketplace**: Architected as a platform like **eBay**, enabling verified property interactions and real-time state synchronization.
- **Enterprise Payments**: Integrated **Stripe API** for secure booking transactions and premium student services.
- **UI/UX Foundations**: Modern, fully functional responsive design with a focus on ease-of-use for the NST community.

---

## 🏫 Mission

The Editorial Academic solves the critical housing challenge for university students. We provide verified, high-quality, and community-centric living spaces within walking distance of the NST campus.

---

## ✨ Key Features

| Feature | Description |
|---|---|
| 🏘️ **Verified Listings** | Curated property listings with high-fidelity images, detailed amenities, and direct landlord contact. |
| 💳 **Secure Payments** | Integrated Stripe gateway for booking deposits and premium housing services. |
| 🤝 **Roommate Matching** | Algorithmic roommate preference matcher specifically for students within the same university. |
| 📊 **Student Dashboard** | Centralized portal for managing saved listings, inquiry status, and housing preferences. |
| ✍️ **Landlord Portal** | Rich-text editorial workflow (via TipTap) for landlords to list and manage student properties. |
| 📍 **Location Optimized** | Targeted focus on the Lohegaon/Pune area around the university campus. |

---

## 🛠️ Technical Implementation

- **Frontend:** Next.js 14 (App Router), React, TypeScript
- **State Management:** React Server Components & Hooks
- **Styling:** Tailwind CSS with Framer Motion for smooth transitions
- **Backend-as-a-Service:** Supabase (Auth, PostgreSQL, Storage, RLS)
- **Payments:** Stripe Checkout and Webhook integration
- **Workflow Tools:** TipTap (Rich Text Editor), Lucide Icons, Radix UI

---

## 📂 Architecture

```bash
src/
├── app/                # Next.js App Router (Dashboard, Listings, Auth, Property)
├── components/         # Atomic UI components, Layout, and Feature sections
├── lib/                # Supabase client, Matching logic, and Utility functions
├── types/              # TypeScript interfaces for Supabase and Stripe
└── public/             # Optimized property assets and brand identity
```

---

## 🚀 Development Quickstart

1.  **Environment Setup:**
    Create a `.env.local` with your Supabase and Stripe keys.
2.  **Install & Run:**
    ```bash
    npm install
    npm run dev
    ```

---

## 👨‍💻 Author
**Ayush Shukla** — [github.com/ayushshukla1807](https://github.com/ayushshukla1807)

---

## 📄 License
MIT License
