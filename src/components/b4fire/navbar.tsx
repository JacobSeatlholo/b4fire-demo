"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { B4FireLogo } from "@/components/b4fire/logo";
import { useQuote } from "@/components/b4fire/quote-context";
import { useLanguage, LanguageToggle } from "@/components/b4fire/language-context";
import { COMPANY, NAV_LINKS } from "@/lib/b4fire-data";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Phone,
  Menu,
  MessageCircle,
  Zap,
} from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const { openQuote } = useQuote();
  const { t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    // safety net: scroll-lock release (e.g. closing a dialog) can move the page
    // without emitting a scroll event — poll cheaply to stay in sync
    const id = window.setInterval(onScroll, 800);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.clearInterval(id);
    };
  }, []);

  // highlight the section currently in view
  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-navy-700/70 bg-navy-950/90 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.6)] backdrop-blur-md"
          : "bg-gradient-to-b from-navy-950/80 to-transparent"
      )}
    >
      {/* a11y skip link */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-flame focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-white"
      >
        {t.nav.skip}
      </a>

      <div className="mx-auto flex h-[72px] max-w-7xl items-center gap-4 px-4 sm:px-6 lg:px-8">
        {/* brand */}
        <Link href="#top" className="shrink-0 rounded-md focus-visible:outline-2 focus-visible:outline-flame" aria-label="B4Fire Technology — back to top">
          <B4FireLogo />
        </Link>

        {/* desktop nav */}
        <nav aria-label="Primary" className="ml-4 hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={active === link.href ? "true" : undefined}
              className={cn(
                "rounded-md px-2.5 py-2 text-[13px] font-semibold whitespace-nowrap transition-colors xl:px-3 xl:text-sm focus-visible:outline-2 focus-visible:outline-flame",
                active === link.href
                  ? "text-flame"
                  : "text-slate-300 hover:bg-white/5 hover:text-white"
              )}
            >
              {t.nav.labels[link.href]}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2 sm:gap-2.5">
          {/* Language toggle — EN / AFR */}
          <LanguageToggle className="hidden sm:flex" />

          {/* WhatsApp */}
          <a
            href={COMPANY.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden h-10 items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3.5 text-sm font-bold text-emerald-400 transition-colors hover:bg-emerald-500/20 focus-visible:outline-2 focus-visible:outline-emerald-400 xl:inline-flex"
            aria-label={t.nav.whatsappAria}
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            {t.nav.whatsapp}
          </a>

          {/* Emergency pill — Phillip's real 24/7 line from b4fire.co.za */}
          <a
            href={`tel:${COMPANY.emergencyIntl}`}
            className="group inline-flex h-10 shrink-0 items-center gap-2 whitespace-nowrap rounded-full bg-alert px-3.5 text-sm font-bold text-white shadow-[0_4px_20px_-4px_rgba(220,38,38,0.6)] transition-all hover:bg-alert-dark focus-visible:outline-2 focus-visible:outline-red-400 sm:px-4"
            aria-label={`${t.nav.emergency} — ${COMPANY.emergencyName}: ${COMPANY.emergencyDisplay}`}
            title={t.nav.emergencyTitle}
          >
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-white" />
            </span>
            <Phone className="h-4 w-4 transition-transform group-hover:rotate-12" aria-hidden="true" />
            <span className="hidden xl:inline">{t.nav.emergency}</span>
            <span className="font-mono tracking-tight">{COMPANY.emergencyDisplay}</span>
          </a>

          {/* Quote CTA */}
          <Button
            onClick={() => openQuote()}
            className="hidden h-10 shrink-0 bg-flame px-3.5 text-sm font-bold text-white hover:bg-flame-dark focus-visible:outline-2 focus-visible:outline-orange-400 lg:inline-flex"
          >
            <Zap className="mr-1.5 h-4 w-4" aria-hidden="true" />
            {t.nav.quote}
          </Button>

          {/* Mobile menu */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <button
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-navy-700 bg-navy-800/80 text-slate-200 transition-colors hover:bg-navy-700 lg:hidden"
                aria-label={t.nav.openMenu}
              >
                <Menu className="h-5 w-5" aria-hidden="true" />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[86vw] max-w-sm border-navy-700 bg-navy-950 p-0"
            >
              <SheetHeader className="border-b border-navy-700 px-5 py-4 text-left">
                <SheetTitle asChild>
                  <div>
                    <B4FireLogo full />
                  </div>
                </SheetTitle>
              </SheetHeader>
              <nav aria-label="Mobile" className="flex flex-col gap-1 px-3 py-4">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-lg px-3 py-3 text-base font-semibold text-slate-200 transition-colors hover:bg-white/5 hover:text-flame"
                  >
                    {t.nav.labels[link.href]}
                  </Link>
                ))}
              </nav>
              <div className="border-t border-navy-700 px-5 pt-4">
                <LanguageToggle />
              </div>
              <div className="space-y-2.5 px-5 pb-8">
                <Button
                  onClick={() => {
                    setMobileOpen(false);
                    openQuote();
                  }}
                  className="w-full bg-flame font-bold text-white hover:bg-flame-dark"
                >
                  <Zap className="mr-2 h-4 w-4" aria-hidden="true" />
                  {t.nav.mobileQuote}
                </Button>
                <a
                  href={COMPANY.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-full items-center justify-center gap-2 rounded-md border border-emerald-500/40 bg-emerald-500/10 text-sm font-bold text-emerald-400"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  {t.nav.mobileWhatsapp}
                </a>
                <a
                  href={`tel:${COMPANY.emergencyIntl}`}
                  className="flex h-11 w-full items-center justify-center gap-2 rounded-md bg-alert text-sm font-bold text-white"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  {t.nav.emergency} · {COMPANY.emergencyDisplay}
                </a>
                <a
                  href={`tel:${COMPANY.phoneIntl}`}
                  className="flex h-11 w-full items-center justify-center gap-2 rounded-md border border-navy-700 bg-navy-800 text-sm font-bold text-slate-200"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  {t.nav.mobileOffice}
                  {COMPANY.phoneDisplay}
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
