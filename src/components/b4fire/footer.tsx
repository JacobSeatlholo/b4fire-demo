"use client";

import Link from "next/link";
import { B4FireLogo } from "@/components/b4fire/logo";
import { useQuote } from "@/components/b4fire/quote-context";
import { useLanguage } from "@/components/b4fire/language-context";
import { COMPANY, NAV_LINKS, COMPLIANCE_BADGES, SERVICES } from "@/lib/b4fire-data";
import {
  ShieldCheck,
  Phone,
  Facebook,
  MapPin,
  Mail,
  Clock,
  MessageCircle,
  Heart,
} from "lucide-react";

export default function Footer() {
  // Always the current year — fixes the stale © 2024 problem on b4fire.co.za
  const year = new Date().getFullYear();
  const { openQuote } = useQuote();
  const { t } = useLanguage();

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
              {t.footer.tagline}. {t.footer.blurbPre}
              {COMPANY.addressShort}.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-2">
              <a
                href={`tel:${COMPANY.emergencyIntl}`}
                className="inline-flex items-center gap-2 rounded-full bg-alert px-4 py-2 text-sm font-extrabold text-white transition-colors hover:bg-alert-dark"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                24/7: {COMPANY.emergencyDisplay}
              </a>
              <a
                href={COMPANY.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-navy-700 bg-navy-800 px-4 py-2 text-sm font-bold text-slate-200 transition-colors hover:border-blue-500 hover:text-blue-400"
                aria-label="B4Fire Technology on Facebook"
              >
                <Facebook className="h-4 w-4" aria-hidden="true" />
                {t.footer.followUs}
              </a>
            </div>
          </div>

          {/* nav */}
          <nav aria-label="Footer">
            <h2 className="text-xs font-extrabold uppercase tracking-[0.2em] text-slate-500">
              {t.footer.explore}
            </h2>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm font-semibold transition-colors hover:text-flame">
                    {t.nav.labels[l.href]}
                  </Link>
                </li>
              ))}
              <li>
                <button
                  onClick={() => openQuote()}
                  className="text-sm font-semibold text-flame transition-colors hover:text-orange-300"
                >
                  {t.footer.quoteLink}
                </button>
              </li>
            </ul>
          </nav>

          {/* services + contact */}
          <div>
            <h2 className="text-xs font-extrabold uppercase tracking-[0.2em] text-slate-500">
              {t.footer.services}
            </h2>
            <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
              {SERVICES.map((s) => (
                <li key={s.key}>
                  <Link href="#services" className="text-sm font-semibold transition-colors hover:text-flame">
                    {t.services.byKey[s.key].title}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-6 space-y-1 text-sm">
              <span className="block font-semibold text-slate-300">{COMPANY.address}</span>
              <span className="mt-0.5 block">
                Tel: {COMPANY.phoneDisplay} / {COMPANY.phoneAltDisplay}
              </span>
              <span className="mt-0.5 block">WhatsApp: {COMPANY.whatsappDisplay}</span>
              <a
                href={`mailto:${COMPANY.email}`}
                className="mt-0.5 block transition-colors hover:text-flame"
              >
                {COMPANY.email}
              </a>
              <span className="mt-0.5 block">
                {t.footer.hoursLine}
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* legal bar — dynamic year */}
      <div className="border-t border-navy-700/60">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 pt-5 pb-36 text-xs text-slate-500 sm:flex-row sm:px-6 sm:pb-32 lg:px-8">
          <p>
            © {year} {COMPANY.name}. {t.footer.rights}
          </p>
          <p className="inline-flex items-center gap-1.5 font-mono">
            <Heart
              className="h-3 w-3 fill-flame text-flame"
              aria-hidden="true"
            />
            {t.footer.credit}
            <a
              href="https://www.businesshustle.co.za"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-flame underline-offset-2 transition-colors hover:text-orange-300 hover:underline"
            >
              BusinessHustle
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
