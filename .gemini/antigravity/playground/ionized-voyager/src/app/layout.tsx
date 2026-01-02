import type { Metadata } from "next";
import { Syne, Outfit } from "next/font/google"; // Syne for Art/Display, Outfit for clean geometric body
import "./globals.css";

const syne = Syne({ subsets: ["latin"], variable: "--font-display" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: "SPITI EXPEDITION | The Dark Horizon",
  description: "A neo-brutalist journey through the rugged terrains of Spiti Valley.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${outfit.variable}`}>
      <body className="antialiased bg-deep-space text-white selection:bg-neon-lime selection:text-black font-body">
        {children}
      </body>
    </html>
  );
}
