/*
 * BEZINO AGENCY — HOME PAGE
 * Design: "Brutalist Precision" — Dark Brutalism meets High-Performance SaaS
 * Sections: Navbar → Hero → Marquee → Work → Services → Process → Testimonials → Quote → FAQ → ContactCTA → Footer
 */

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import TrustBar from "@/components/TrustBar";
import Work from "@/components/Work";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Quote from "@/components/Quote";
import FAQ from "@/components/FAQ";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[oklch(0.07_0.004_264)]">
      <Navbar />
      <Hero />
      <TrustBar />
      <Marquee />
      <Work />
      <Services />
      <Process />
      <Testimonials />
      <Quote />
      <FAQ />
      <ContactCTA />
      <Footer />
    </div>
  );
}
