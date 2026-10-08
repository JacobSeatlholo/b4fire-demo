"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useQuote } from "@/components/b4fire/quote-context";
import { COMPANY, HERO_STATS } from "@/lib/b4fire-data";
import { Button } from "@/components/ui/button";
import { Flame, Siren, ShieldCheck, MapPin, ChevronDown } from "lucide-react";

/* Count-up hook — animates numbers when scrolled into view */
function useCountUp(target: number, start: boolean, duration = 1400) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      // skip animation entirely — land on the final value via rAF (no sync setState)
      const id = requestAnimationFrame(() => setValue(target));
      return () => cancelAnimationFrame(id);
    }
    let raf = 0;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, target, duration]);
  return value;
}

function StatItem({ value, suffix, label, started }: { value: number; suffix: string; label: string; started: boolean }) {
  const current = useCountUp(value, started);
  return (
    <div className="flex flex-col items-center gap-1 px-4 py-4 text-center sm:py-5">
      <span className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl" aria-label={`${value}${suffix}`}>
        {current}
        <span className="text-flame">{suffix}</span>
      </span>
      <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400 sm:text-xs">
        {label}
      </span>
    </div>
  );
}

export default function Hero() {
  const { openQuote } = useQuote();
  const [statsStarted, setStatsStarted] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsStarted(true);
          obs.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="top" className="relative overflow-hidden bg-navy-950" aria-labelledby="hero-heading">
      {/* backdrop image + navy wash */}
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="/images/hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[70%_center] opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/88 to-navy-950/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/70" />
        <div className="absolute inset-0 bg-blueprint" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-36 sm:px-6 sm:pt-40 lg:px-8 lg:pb-20 lg:pt-48">
        <div className="max-w-2xl">
          {/* compliance eyebrow */}
          <p className="mb-5 inline-flex flex-wrap items-center gap-2 rounded-full border border-flame/30 bg-flame/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-flame">
            <Flame className="h-3.5 w-3.5 animate-flame" aria-hidden="true" />
            PSIRA Registered · SAQCC Fire Certified
          </p>

          <h1
            id="hero-heading"
            className="text-4xl font-extrabold leading-[1.06] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]"
          >
            Certified <span className="text-flame-gradient">Fire Protection</span> &amp; Electronic
            Security Solutions.
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
            SANS &amp; SAQCC compliant fire detection, gas suppression, access control, and
            maintenance for <span className="font-semibold text-slate-100">Cape Town &amp; beyond</span>.
          </p>

          {/* trust chips */}
          <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-300" aria-label="Key assurances">
            {["No call-out fee on signed SLAs", "Free compliance survey", "COC & sign-off included"].map((t) => (
              <li key={t} className="inline-flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-flame" aria-hidden="true" />
                {t}
              </li>
            ))}
          </ul>

          {/* CTAs */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              onClick={() => openQuote()}
              size="lg"
              className="glow-flame h-13 bg-flame px-7 text-base font-extrabold text-white transition-transform hover:scale-[1.02] hover:bg-flame-dark focus-visible:outline-2 focus-visible:outline-orange-300"
            >
              Get an Instant Quote
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-13 border-alert/50 bg-alert/10 px-7 text-base font-bold text-red-300 backdrop-blur transition-colors hover:bg-alert hover:text-white focus-visible:outline-2 focus-visible:outline-red-400"
            >
              <a href={`tel:${COMPANY.phoneIntl}`}>
                <Siren className="mr-2 h-5 w-5 animate-pulse-dot" aria-hidden="true" />
                Emergency Response
              </a>
            </Button>
          </div>

          <p className="mt-4 inline-flex items-center gap-1.5 text-xs text-slate-400">
            <MapPin className="h-3.5 w-3.5 text-flame" aria-hidden="true" />
            {COMPANY.address} — mobile units across the Western Cape
          </p>
        </div>

        {/* Key stats bar */}
        <div
          ref={statsRef}
          className="mt-14 grid grid-cols-2 divide-navy-700/80 rounded-2xl border border-navy-700/70 bg-navy-900/70 backdrop-blur-md sm:grid-cols-4 sm:divide-x"
          role="group"
          aria-label="Company key statistics"
        >
          {HERO_STATS.map((s) => (
            <StatItem key={s.label} value={s.value} suffix={s.suffix} label={s.label} started={statsStarted} />
          ))}
        </div>

        <Link
          href="#services"
          className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-slate-400 transition-colors hover:text-flame"
          aria-label="Scroll down to services"
        >
          Explore our services
          <ChevronDown className="h-4 w-4 animate-bounce" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
