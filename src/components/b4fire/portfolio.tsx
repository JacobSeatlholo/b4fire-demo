"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { PROJECTS, CLIENT_TYPES, type ClientType } from "@/lib/b4fire-data";
import { useQuote } from "@/components/b4fire/quote-context";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { MapPin, CalendarDays, ArrowRight, HardHat } from "lucide-react";

export default function Portfolio() {
  const [filter, setFilter] = useState<ClientType | "all">("all");
  const { openQuote } = useQuote();

  const visible = useMemo(
    () => (filter === "all" ? PROJECTS : PROJECTS.filter((p) => p.clientType === filter)),
    [filter]
  );

  return (
    <section id="portfolio" className="relative bg-navy-950 py-20 sm:py-24" aria-labelledby="portfolio-heading">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-flame">
              Recent work
            </p>
            <h2 id="portfolio-heading" className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Installed. Commissioned. <span className="text-flame-gradient">Signed off.</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-400">
              A snapshot of projects across the Cape — every one delivered with full
              documentation, from detection upgrades to clean-agent suppression.
            </p>
          </div>

          {/* client type filter */}
          <div
            className="nice-scroll flex gap-2 overflow-x-auto pb-2 md:justify-end md:pb-0"
            role="tablist"
            aria-label="Filter projects by client type"
          >
            {CLIENT_TYPES.map((t) => (
              <button
                key={t.key}
                role="tab"
                aria-selected={filter === t.key}
                onClick={() => setFilter(t.key)}
                className={cn(
                  "shrink-0 rounded-full border px-3.5 py-1.5 text-xs font-bold transition-all focus-visible:outline-2 focus-visible:outline-flame",
                  filter === t.key
                    ? "border-flame bg-flame text-white"
                    : "border-navy-700 bg-navy-900 text-slate-400 hover:border-slate-500 hover:text-white"
                )}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* gallery */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((p) => (
            <article
              key={p.title}
              className="card-lift group overflow-hidden rounded-2xl border border-navy-700/80 bg-navy-900"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={p.image}
                  alt={`${p.title} — ${p.clientLabel.toLowerCase()} project in ${p.location}`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent"
                />
                {/* client type tag */}
                <span className="absolute left-3 top-3 rounded-full bg-flame px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-white shadow-lg">
                  {p.clientLabel}
                </span>
                <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 text-xs font-semibold text-slate-200">
                  <MapPin className="h-3.5 w-3.5 text-flame" aria-hidden="true" />
                  {p.location}
                </span>
              </div>

              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-base font-extrabold leading-snug tracking-tight text-white">
                    {p.title}
                  </h3>
                  <span className="mt-0.5 inline-flex shrink-0 items-center gap-1 font-mono text-xs text-slate-500">
                    <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
                    {p.year}
                  </span>
                </div>
                <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Project scope">
                  {p.scope.map((s) => (
                    <li
                      key={s}
                      className="rounded-md border border-navy-700 bg-navy-800 px-2.5 py-1 text-[11px] font-semibold text-slate-300"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
                <Button
                  variant="ghost"
                  onClick={() => openQuote()}
                  className="mt-4 inline-flex items-center gap-1.5 px-0 text-sm font-bold text-flame hover:bg-transparent hover:text-orange-300"
                  aria-label={`Plan a similar project: ${p.title}`}
                >
                  Plan a similar project
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Button>
              </div>
            </article>
          ))}
        </div>

        {visible.length === 0 && (
          <p className="mt-10 text-center text-sm text-slate-500">
            No projects in this category yet — but we&apos;re installing weekly. Ask us for references.
          </p>
        )}

        <p className="mt-8 flex items-center justify-center gap-2 text-center text-sm text-slate-500">
          <HardHat className="h-4 w-4 text-flame" aria-hidden="true" />
          Site names withheld under client security policy — full references available on request.
        </p>
      </div>
    </section>
  );
}
