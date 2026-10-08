# B4Fire Technology — Demo Website

A modern, high-converting single-page demo for **B4Fire Technology** — a fire safety, gas
suppression and electronic security company based in Kuils River, Cape Town.

This redesign replaces the dated brochure site with a premium, industrial, mobile-first
experience focused on trust signals and instant lead capture.

---

## What's inside

| Section | Highlights |
|---|---|
| Sticky navigation | Flame/shield brand mark, 24/7 Emergency pill (`061 686 0234`), WhatsApp quick action, scroll-aware active links, mobile sheet menu |
| Hero | Certified headline, Instant Quote CTA, emergency response CTA, animated key-stats bar (24/7, 100% SANS compliant, …) |
| Instant Quote Calculator | 2-step interactive wizard: services → property type, area slider, urgency → **live ZAR budget estimate** → lead capture with reference number (persisted via API) |
| Services grid | 6 filterable service categories (Fire Detection, Gas Suppression, Equipment & Maintenance, Passive Fire, Access Control, Perimeter Security) with per-service "quote this" preselection |
| Compliance banner | PSIRA, SAQCC Fire, SANS 10139 & SANS 1475 trust cards + standards strip |
| Portfolio | Filterable project gallery (Commercial / Industrial / Server Rooms / Retail) with client-type tags, scope chips, AI-generated project imagery |
| Testimonials | Client feedback cards with ratings |
| About & Hours | Company story, weekly operating hours table with **live "Open now / Closed" status in SAST (Africa/Johannesburg)**, 24/7 emergency call card |
| Contact | Lead-capture form (persisted to SQLite via Prisma) with toast feedback and reference numbers |
| Footer | Compliance strip, dynamic copyright year, sitemap links |

### Problems from the original site that this demo fixes

1. ✅ Visible industry trust badges & compliance signals (PSIRA, SAQCC Fire, SANS standards)
2. ✅ Dynamic copyright year (no more stale "2024")
3. ✅ Client testimonials, project portfolio gallery, and clear operating hours
4. ✅ Interactive instant-quote calculator + lead capture instead of generic CTAs

## Tech stack

- **Next.js 16** (App Router) + **TypeScript**
- **Tailwind CSS 4** with a custom brand token system (navy `#0f172a`, flame `#f97316`, alert `#dc2626`)
- **shadcn/ui** components (New York) + Lucide icons
- **Prisma + SQLite** for lead storage (`/api/leads`)
- Mobile-first, fully responsive, keyboard-accessible, reduced-motion aware

## Getting started

```bash
bun install            # or npm install
cp .env.example .env   # DATABASE_URL=file:./db/custom.db
bun run db:push        # create SQLite schema
bun run dev            # http://localhost:3000
```

## Project structure

```
src/
  app/
    page.tsx              # single-page composition
    api/leads/route.ts    # lead capture API (quote modal + contact form)
  components/b4fire/      # site sections (navbar, hero, services, …)
  lib/b4fire-data.ts      # single source of truth for all site content
prisma/schema.prisma      # Lead model
public/images/            # AI-generated brand imagery
```

## Notes

- All copy, services, projects and testimonials are demo content for the redesign concept.
- The quote estimator is indicative only — real pricing requires an on-site survey.
- Site imagery was AI-generated for the concept; replace with real project photos when available.
