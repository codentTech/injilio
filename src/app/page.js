"use client";

import Navbar from "@/components/landing-page/navbar";
import Hero from "@/components/landing-page/hero";
import Features from "@/components/landing-page/features";
import CTA from "@/components/landing-page/cta";
import Footer from "@/components/landing-page/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <CTA />
      <Footer />
    </div>
  );
}
