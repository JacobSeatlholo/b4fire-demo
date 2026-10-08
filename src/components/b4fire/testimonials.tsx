"use client";

import { TESTIMONIALS } from "@/lib/b4fire-data";
import { Star, Quote } from "lucide-react";

function Stars({ count }: { count: number }) {
  return (
    <span className="inline-flex gap-0.5" role="img" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={i < count ? "h-4 w-4 fill-amber-400 text-amber-400" : "h-4 w-4 text-slate-300"}
          aria-hidden="true"
        />
      ))}
    </span>
  );
}

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-white py-20 text-navy-900 sm:py-24"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-flame-dark">
            Client feedback
          </p>
          <h2 id="testimonials-heading" className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            The Cape&apos;s facilities teams trust B4Fire.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Unedited feedback from the people who manage the buildings, budgets and audits we
            support every day.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.author}
              className="card-lift relative flex flex-col rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm"
            >
              <Quote
                className="absolute right-5 top-5 h-8 w-8 text-flame/15"
                aria-hidden="true"
              />
              <Stars count={t.rating} />
              <blockquote className="mt-3 flex-1 text-[15px] leading-relaxed text-slate-700">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-slate-200 pt-4">
                <span
                  aria-hidden="true"
                  className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy-900 text-sm font-extrabold text-flame"
                >
                  {t.author.charAt(0)}
                </span>
                <span>
                  <span className="block text-sm font-extrabold text-navy-900">{t.author}</span>
                  <span className="block text-xs text-slate-500">
                    {t.role} · {t.org}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
