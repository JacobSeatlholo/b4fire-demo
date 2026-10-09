"use client";

import { useMemo, useState } from "react";
import { SERVICES, SERVICE_CATEGORIES, type ServiceCategory } from "@/lib/b4fire-data";
import { useQuote } from "@/components/b4fire/quote-context";
import { useLanguage } from "@/components/b4fire/language-context";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, ArrowUpRight, BadgeCheck } from "lucide-react";

export default function Services() {
  const [filter, setFilter] = useState<ServiceCategory | "all">("all");
  const { openQuote } = useQuote();
  const { t } = useLanguage();

  const visible = useMemo(
    () => (filter === "all" ? SERVICES : SERVICES.filter((s) => s.category === filter)),
    [filter]
  );

  return (
    <section id="services" className="relative bg-navy-900 py-20 sm:py-24" aria-labelledby="services-heading">
      <div className="absolute inset-0 bg-blueprint" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-flame">
            {t.services.eyebrow}
          </p>
          <h2 id="services-heading" className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            {t.services.heading}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-400">
            {t.services.sub}
          </p>
        </div>

        {/* filter tabs */}
        <div
          className="nice-scroll mt-10 flex gap-2 overflow-x-auto pb-2 sm:justify-center sm:pb-0"
          role="tablist"
          aria-label={t.services.filterAria}
        >
          {SERVICE_CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              role="tab"
              aria-selected={filter === cat.key}
              onClick={() => setFilter(cat.key)}
              className={cn(
                "shrink-0 rounded-full border px-4 py-2 text-sm font-bold transition-all focus-visible:outline-2 focus-visible:outline-flame",
                filter === cat.key
                  ? "border-flame bg-flame text-white shadow-[0_6px_24px_-6px_rgba(249,115,22,0.6)]"
                  : "border-navy-700 bg-navy-800/70 text-slate-300 hover:border-slate-500 hover:text-white"
              )}
            >
              {t.services.cats[cat.key]}
            </button>
          ))}
        </div>

        {/* cards */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((s) => {
            const Icon = s.icon;
            const isFlame = s.accent === "flame";
            const copy = t.services.byKey[s.key];
            return (
              <article
                key={s.key}
                className={cn(
                  "card-lift group relative flex flex-col overflow-hidden rounded-2xl border bg-navy-800/80 p-6",
                  isFlame ? "border-navy-700 hover:border-flame/60" : "border-navy-700 hover:border-alert/60"
                )}
              >
                {/* corner accent */}
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute inset-x-0 top-0 h-1 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100",
                    isFlame ? "bg-gradient-to-r from-flame to-alert" : "bg-alert"
                  )}
                />

                <div className="flex items-start justify-between gap-3">
                  <span
                    className={cn(
                      "inline-flex h-12 w-12 items-center justify-center rounded-xl",
                      isFlame ? "bg-flame/15 text-flame" : "bg-alert/15 text-red-400"
                    )}
                  >
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <Badge
                    variant="outline"
                    className="border-navy-700 bg-navy-900/80 font-mono text-[10px] font-semibold tracking-wide text-slate-400"
                  >
                    {s.standard}
                  </Badge>
                </div>

                <h3 className="mt-4 text-lg font-extrabold tracking-tight text-white">
                  {copy.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{copy.blurb}</p>

                <ul className="mt-4 space-y-2">
                  {copy.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-300">
                      <Check
                        className={cn("mt-0.5 h-4 w-4 shrink-0", isFlame ? "text-flame" : "text-red-400")}
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-5">
                  <Button
                    variant="ghost"
                    onClick={() => openQuote({ services: [s.key] })}
                    className={cn(
                      "inline-flex items-center gap-1.5 px-0 text-sm font-bold hover:bg-transparent",
                      isFlame ? "text-flame hover:text-orange-300" : "text-red-400 hover:text-red-300"
                    )}
                    aria-label={`${t.services.quoteAriaPre}${copy.title}`}
                  >
                    {t.services.quoteThis}
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                  </Button>
                </div>
              </article>
            );
          })}
        </div>

        {/* compliance nudge */}
        <p className="mt-8 flex flex-wrap items-center justify-center gap-2 text-center text-sm text-slate-500">
          <BadgeCheck className="h-4 w-4 text-emerald-400" aria-hidden="true" />
          {t.services.nudge}
        </p>
      </div>
    </section>
  );
}
