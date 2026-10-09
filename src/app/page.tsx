"use client";

import { QuoteProvider } from "@/components/b4fire/quote-context";
import { LanguageProvider } from "@/components/b4fire/language-context";
import Navbar from "@/components/b4fire/navbar";
import Hero from "@/components/b4fire/hero";
import Services from "@/components/b4fire/services";
import Compliance from "@/components/b4fire/compliance";
import Portfolio from "@/components/b4fire/portfolio";
import Testimonials from "@/components/b4fire/testimonials";
import AboutHours from "@/components/b4fire/about-hours";
import Contact from "@/components/b4fire/contact";
import Footer from "@/components/b4fire/footer";
import FloatingActions from "@/components/b4fire/floating-actions";

export default function Home() {
  return (
    <LanguageProvider>
      <QuoteProvider>
        <div className="flex min-h-screen flex-col bg-navy-900">
          <Navbar />
          <main id="main" className="flex-1">
            <Hero />
            <Services />
            <Compliance />
            <Portfolio />
            <Testimonials />
            <AboutHours />
            <Contact />
          </main>
          <Footer />
          <FloatingActions />
        </div>
      </QuoteProvider>
    </LanguageProvider>
  );
}
