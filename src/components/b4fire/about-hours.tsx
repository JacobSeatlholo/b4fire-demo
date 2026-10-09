"use client";

import { useEffect, useState } from "react";
import { COMPANY, HOURS } from "@/lib/b4fire-data";
import { useQuote } from "@/components/b4fire/quote-context";
import { useLanguage } from "@/components/b4fire/language-context";
import type { Copy } from "@/lib/b4fire-i18n";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Clock, CalendarCheck, Flame, ShieldCheck, Users, MapPin } from "lucide-react";

/** Current time in Africa/Johannesburg (SAST, UTC+2, no DST). */
function useSastNow() {
  const [now, setNow] = useState<{ dayIdx: number; hours: number; minutes: number } | null>(null);
  useEffect(() => {
    const compute = () => {
      // Intl gives us the wall-clock time in SAST regardless of viewer timezone
      const parts = new Intl.DateTimeFormat("en-ZA", {
        timeZone: "Africa/Johannesburg",
        weekday: "short",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }).formatToParts(new Date());
      const get = (t: string) => parts.find((p) => p.type === t)?.value ?? "";
      const weekdayMap: Record<string, number> = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
      setNow({
        dayIdx: weekdayMap[get("weekday")] ?? 0,
        hours: parseInt(get("hour"), 10) || 0,
        minutes: parseInt(get("minute"), 10) || 0,
      });
    };
    compute();
    const id = setInterval(compute, 60_000);
    return () => clearInterval(id);
  }, []);
  return now;
}

function OpenStatus({ now, t }: { now: ReturnType<typeof useSastNow>; t: Copy }) {
  if (!now) {
    return (
      <Badge variant="outline" className="border-navy-700 bg-navy-800 text-xs text-slate-400">
        <Clock className="mr-1 h-3 w-3" aria-hidden="true" /> {t.about.checking}
      </Badge>
    );
  }
  const today = HOURS[now.dayIdx];
  const time = now.hours + now.minutes / 60;
  const isOpen = today.open !== null && today.close !== null && time >= today.open && time < today.close;
  return (
    <Badge
      className={cn(
        "text-xs font-bold",
        isOpen ? "bg-emerald-500/15 text-emerald-400 hover:bg-emerald-500/15" : "bg-alert/15 text-red-400 hover:bg-alert/15"
      )}
      aria-live="polite"
    >
      <span className="relative mr-1.5 flex h-2 w-2" aria-hidden="true">
        <span className={cn("h-2 w-2 rounded-full", isOpen ? "bg-emerald-400 animate-pulse-dot" : "bg-red-400")} />
      </span>
      {isOpen ? t.about.openNow : t.about.closedNow}
      <span className="ml-1.5 font-normal text-slate-400">· SAST</span>
    </Badge>
  );
}

export default function AboutHours() {
  const { openQuote } = useQuote();
  const { t } = useLanguage();
  const now = useSastNow();
  return (
    <section id="about" className="relative bg-navy-900 py-20 sm:py-24" aria-labelledby="about-heading">
      <div className="absolute inset-0 bg-blueprint" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* story */}
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-flame">{t.about.eyebrow}</p>
            <h2 id="about-heading" className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              {t.about.hPre}
              <span className="text-flame-gradient">{t.about.hHL}</span>
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-slate-400">
              <p>
                {t.about.p1a}
                {COMPANY.founded}
                {t.about.p1b}
              </p>
              <p>{t.about.p2}</p>
              <p>{t.about.p3}</p>
            </div>

            <ul className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                { icon: Flame, k: t.about.feats[0].k, v: t.about.feats[0].v },
                { icon: ShieldCheck, k: t.about.feats[1].k, v: t.about.feats[1].v },
                { icon: Users, k: t.about.feats[2].k, v: t.about.feats[2].v },
              ].map((f) => (
                <li key={f.k} className="rounded-xl border border-navy-700 bg-navy-800/70 p-4">
                  <f.icon className="h-5 w-5 text-flame" aria-hidden="true" />
                  <p className="mt-2 text-sm font-extrabold text-white">{f.k}</p>
                  <p className="mt-0.5 text-xs text-slate-400">{f.v}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* hours card */}
          <div className="lg:pl-6">
            <div className="overflow-hidden rounded-2xl border border-navy-700 bg-navy-800/70 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.55)]">
              <div className="bg-hazard h-2" aria-hidden="true" />
              <div className="p-6 sm:p-7">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="inline-flex items-center gap-2 text-lg font-extrabold text-white">
                    <CalendarCheck className="h-5 w-5 text-flame" aria-hidden="true" />
                    {t.about.hoursTitle}
                  </h3>
                  <OpenStatus now={now} t={t} />
                </div>

                <table className="mt-5 w-full text-sm" aria-label={t.about.tableAria}>
                  <caption className="sr-only">
                    {t.about.tableCaption}
                  </caption>
                  <thead>
                    <tr className="text-left text-[11px] uppercase tracking-wider text-slate-500">
                      <th scope="col" className="pb-2 font-bold">{t.about.dayCol}</th>
                      <th scope="col" className="pb-2 text-right font-bold">{t.about.hoursCol}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-navy-700/70">
                    {HOURS.map((h, i) => (
                      <tr key={h.day} className={cn(now && i === now.dayIdx && "bg-flame/5")}>
                        <th scope="row" className="py-2.5 text-left font-semibold text-slate-200">
                          {t.about.days[i]}
                        </th>
                        <td className="py-2.5 text-right">
                          <span className={cn("font-mono", h.open === null ? "text-slate-500" : "text-slate-300")}>
                            {h.open === null ? t.about.sundayClosed : h.label}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div className="mt-5 rounded-xl border border-alert/30 bg-alert/10 p-4">
                  <p className="text-sm font-extrabold text-red-300">{t.about.emergTitle}</p>
                  <p className="mt-1 text-xs leading-relaxed text-slate-400">
                    {t.about.emergBody}
                  </p>
                  <a
                    href={`tel:${COMPANY.phoneIntl}`}
                    className="mt-3 inline-flex items-center gap-2 rounded-lg bg-alert px-4 py-2 text-sm font-extrabold text-white transition-colors hover:bg-alert-dark"
                  >
                    {t.about.callPre}
                    {COMPANY.phoneDisplay}
                  </a>
                </div>

                <p className="mt-5 inline-flex items-start gap-1.5 text-xs leading-relaxed text-slate-500">
                  <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-flame" aria-hidden="true" />
                  {COMPANY.address}
                  {t.about.mobileUnitsPre}
                  {COMPANY.serviceArea}
                </p>

                <Button
                  onClick={() => openQuote()}
                  className="mt-6 w-full bg-flame font-bold text-white hover:bg-flame-dark"
                >
                  {t.about.cta}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
