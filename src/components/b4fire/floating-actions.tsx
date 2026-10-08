"use client";

import { useEffect, useState } from "react";
import { COMPANY } from "@/lib/b4fire-data";
import { cn } from "@/lib/utils";
import { MessageCircle, ArrowUp } from "lucide-react";

export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="pointer-events-none fixed bottom-4 right-4 z-40 flex flex-col items-end gap-2.5 sm:bottom-6 sm:right-6">
      {/* back to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className={cn(
          "pointer-events-auto inline-flex h-11 w-11 items-center justify-center rounded-full border border-navy-700 bg-navy-800/90 text-slate-300 shadow-lg backdrop-blur transition-all hover:bg-navy-700 hover:text-white",
          showTop ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
        )}
      >
        <ArrowUp className="h-5 w-5" aria-hidden="true" />
      </button>

      {/* WhatsApp float */}
      <a
        href={COMPANY.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with B4Fire on WhatsApp"
        className="pointer-events-auto group inline-flex h-14 items-center gap-2 rounded-full bg-[#25D366] pl-3.5 pr-4 font-bold text-white shadow-[0_10px_30px_-8px_rgba(37,211,102,0.7)] transition-transform hover:scale-[1.04] focus-visible:outline-2 focus-visible:outline-emerald-300"
      >
        <MessageCircle className="h-6 w-6" aria-hidden="true" />
        <span className="hidden text-sm sm:inline">WhatsApp Us</span>
      </a>
    </div>
  );
}
