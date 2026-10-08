"use client";

import { COMPLIANCE_BADGES } from "@/lib/b4fire-data";
import { Badge } from "@/components/ui/badge";
import { ShieldCheck, Landmark, FileCheck2, ClipboardCheck } from "lucide-react";

const ICONS = [Landmark, ShieldCheck, FileCheck2, ClipboardCheck];

export default function Compliance() {
  return (
    <section
      id="compliance"
      className="bg-slate-50 py-20 text-navy-900 sm:py-24"
      aria-labelledby="compliance-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-14">
          {/* left: heading + explanation */}
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-flame-dark">
              Regulatory &amp; compliance
            </p>
            <h2 id="compliance-heading" className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Certificates on the wall. <span className="text-flame-dark">Proof in the paperwork.</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Anyone can claim to be compliant — insurers, auditors and municipal fire marshals only
              accept <em>documented</em> compliance. Every B4Fire installation and service visit is
              executed by registered technicians against the governing national standard, and
              handed over with the certificates, registers and reports that stand up to scrutiny.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              We also carry public liability cover and issue certificates of conformity (COC) for
              electric fencing and system sign-offs, so your building stays audit-ready all year —
              not just on the day of inspection.
            </p>

            <dl className="mt-8 grid grid-cols-2 gap-4">
              {[
                { k: "Registered", v: "PSIRA security provider" },
                { k: "Certified", v: "SAQCC Fire technicians" },
                { k: "Documented", v: "SANS test & commissioning reports" },
                { k: "Insured", v: "Public liability cover" },
              ].map((item) => (
                <div key={item.k} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                  <dt className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-flame-dark">
                    {item.k}
                  </dt>
                  <dd className="mt-1 text-sm font-semibold text-navy-900">{item.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* right: badge cards */}
          <ul className="grid content-start gap-4 sm:grid-cols-2" aria-label="Compliance registrations and standards">
            {COMPLIANCE_BADGES.map((b, i) => {
              const Icon = ICONS[i % ICONS.length];
              return (
                <li
                  key={b.abbr}
                  className="card-lift group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div
                    aria-hidden="true"
                    className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br from-flame/10 to-alert/10 transition-transform duration-300 group-hover:scale-150"
                  />
                  <div className="relative">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-navy-900 text-flame">
                        <Icon className="h-5.5 w-5.5" aria-hidden="true" />
                      </span>
                      <Badge className="bg-flame/15 font-mono text-xs font-bold text-flame-dark hover:bg-flame/15">
                        {b.abbr}
                      </Badge>
                    </div>
                    <h3 className="mt-4 text-sm font-extrabold leading-snug text-navy-900">
                      {b.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{b.detail}</p>
                  </div>
                </li>
              );
            })}

            {/* standards strip card */}
            <li className="rounded-2xl border border-navy-900 bg-navy-900 p-6 sm:col-span-2">
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-flame">
                Standards we work to
              </p>
              <ul className="mt-3 flex flex-wrap gap-2" aria-label="SANS standards list">
                {[
                  "SANS 10139",
                  "SANS 1475",
                  "SANS 10400-T",
                  "SANS 14520",
                  "SANS 10222-3",
                  "SANS 10105",
                ].map((s) => (
                  <li
                    key={s}
                    className="rounded-md border border-navy-700 bg-navy-800 px-3 py-1.5 font-mono text-xs font-semibold text-slate-200"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
