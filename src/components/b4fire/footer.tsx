"use client";

import Link from "next/link";
import { B4FireLogo } from "@/components/b4fire/logo";
import { useQuote } from "@/components/b4fire/quote-context";
import { COMPANY, NAV_LINKS, SERVICES, COMPLIANCE_BADGES } from "@/lib/b4fire-data";
import { ShieldCheck, Phone } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear(); // always current — fixes the stale "2024" problem
  const { openQuote } = useQuote();

  return (
    <footer className="mt-auto border-t border-navy-700/60 bg-navy-950 text-slate-400">
      {/* compliance strip */}
      <div className="border-b border-navy-700/60">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-4 py-5 sm:px-6 lg:px-8">
          {COMPLIANCE_BADGES.map((b) => (
            <span
              key={b.abbr}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500"
              title={b.name}
            >
              <ShieldCheck className="h-4 w-4 text-flame" aria-hidden="true" />
              {b.abbr}
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)_minmax(0,1.4fr)]">
          {/* brand + blurb */}
          <div>
            <B4FireLogo full />
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              Certified fire protection and electronic security for Cape Town and the Western
              Cape. Registered, documented, and answering the phone 24/7.
            </p>
            <a
              href={`tel:${COMPANY.phoneIntl}`}
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-alert px-4 py-2 text-sm font-extrabold text-white transition-colors hover:bg-alert-dark"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              24/7: {COMPANY.phoneDisplay}
            </a>
          </div>

          {/* nav */}
          <nav aria-label="Footer">
            <h2 className="text-xs font-extrabold uppercase tracking-[0.2em] text-slate-500">
              Explore
            </h2>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm font-semibold transition-colors hover:text-flame">
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <button
                  onClick={() => openQuote()}
                  className="text-sm font-semibold text-flame transition-colors hover:text-orange-300"
                >
                  Get an Instant Quote
                </button>
              </li>
            </ul>
          </nav>

          {/* services */}
          <div>
            <h2 className="text-xs font-extrabold uppercase tracking-[0.2em] text-slate-500">
              Services
            </h2>
            <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
              {SERVICES.map((s) => (
                <li key={s.key}>
                  <Link href="#services" className="text-sm font-semibold transition-colors hover:text-flame">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm">
              <span className="block font-semibold text-slate-300">{COMPANY.address}</span>
              <span className="mt-0.5 block">{COMPANY.email}</span>
              <span className="mt-0.5 block">Mon–Fri 08:00–17:00 · Sat 08:00–13:00 · Emergencies 24/7</span>
            </p>
          </div>
        </div>
      </div>

      {/* legal bar — dynamic year */}
      <div className="border-t border-navy-700/60">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-slate-500 sm:flex-row sm:px-6 lg:px-8">
          <p>
            © {year} {COMPANY.name}. All rights reserved. PSIRA-registered security service
            provider.
          </p>
          <p className="font-mono">
            Demo site — b4fire.co.za redesign concept · Built with Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
