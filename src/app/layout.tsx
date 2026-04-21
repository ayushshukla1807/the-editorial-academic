import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { CommandMenu } from "@/components/ui/command-menu";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Editorial Academic | Real Estate Intelligence",
  description: "AI-powered student real estate hub. Find verified, matching housing near NST seamlessly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <CommandMenu />
        {children}
      </body>
    </html>
  );
}
