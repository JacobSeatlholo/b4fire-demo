import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export const dynamic = "force-dynamic";

function makeRef() {
  // e.g. B4F-7K2QX — short, readable, collision-safe enough for demo volume
  const alphabet = "ABCDEFGHJKMNPQRSTUVWXYZ23456789";
  let code = "";
  for (let i = 0; i < 5; i++) {
    code += alphabet[Math.floor(Math.random() * alphabet.length)];
  }
  return `B4F-${code}`;
}

type LeadPayload = {
  name?: string;
  phone?: string;
  email?: string;
  company?: string;
  suburb?: string; // real field on b4fire.co.za contact form
  services?: string[];
  propertyType?: string;
  sizeSqm?: number;
  urgency?: string;
  message?: string;
  source?: string;
};

export async function POST(req: Request) {
  try {
    const body: LeadPayload = await req.json();

    const name = body.name?.trim();
    const phone = body.phone?.trim();
    const services = Array.isArray(body.services) ? body.services.filter(Boolean) : [];

    if (!name || name.length < 2) {
      return NextResponse.json({ error: "Please provide your name." }, { status: 400 });
    }
    if (!phone || phone.replace(/\D/g, "").length < 9) {
      return NextResponse.json(
        { error: "Please provide a valid mobile number so we can call you back." },
        { status: 400 }
      );
    }
    if (body.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
      return NextResponse.json({ error: "That email address looks invalid." }, { status: 400 });
    }

    // indicative estimate (ZAR) for quote-modal submissions — matches QUOTE_BASE in lib/b4fire-data
    const RATES: Record<string, [number, number]> = {
      detection: [8500, 68000],
      suppression: [42000, 210000],
      evacuation: [9500, 78000],
      alarms: [3800, 42000],
      cctv: [6500, 85000],
      access: [7500, 62000],
      "boom-gates": [8500, 58000],
      perimeter: [15000, 98000],
      stopping: [9500, 85000],
      "fire-doors": [6500, 54000],
      equipment: [1200, 14500],
      signage: [850, 9800],
      "first-aid": [650, 7800],
      ppe: [950, 12500],
    };
    const PROPERTY: Record<string, number> = {
      office: 1,
      warehouse: 1.35,
      server: 1.6,
      retail: 1.15,
      residential: 0.9,
    };
    const URGENCY: Record<string, number> = { planning: 1, urgent: 1.1, emergency: 1.25 };

    let estimateMin: number | null = null;
    let estimateMax: number | null = null;
    if (services.length > 0) {
      const pf = PROPERTY[body.propertyType ?? "office"] ?? 1;
      const uf = URGENCY[body.urgency ?? "planning"] ?? 1;
      const size = Number.isFinite(body.sizeSqm) ? Math.max(50, Math.min(5000, body.sizeSqm!)) : 250;
      const sizeFactor = Math.max(0.6, Math.min(3, size / 250));
      let min = 0;
      let max = 0;
      for (const s of services) {
        const r = RATES[s];
        if (!r) continue;
        min += r[0];
        max += r[1];
      }
      if (min > 0) {
        estimateMin = Math.round((min * pf * uf * Math.min(sizeFactor, 1.8)) / 500) * 500;
        estimateMax = Math.round((max * pf * uf * sizeFactor) / 500) * 500;
      }
    }

    const lead = await db.lead.create({
      data: {
        ref: makeRef(),
        name,
        phone,
        email: body.email || null,
        company: body.company || null,
        suburb: body.suburb?.trim() || null,
        services: services.join(","),
        propertyType: body.propertyType || null,
        sizeSqm: Number.isFinite(body.sizeSqm) ? Math.round(body.sizeSqm!) : null,
        urgency: body.urgency || null,
        message: body.message || null,
        source: body.source === "contact_form" ? "contact_form" : "quote_modal",
        estimateMin,
        estimateMax,
      },
    });

    return NextResponse.json({
      ok: true,
      ref: lead.ref,
      estimateMin: lead.estimateMin,
      estimateMax: lead.estimateMax,
    });
  } catch (e) {
    console.error("Lead capture failed:", e);
    return NextResponse.json(
      { error: "We couldn't save your request. Please phone 061 686 0234 and we'll sort it out." },
      { status: 500 }
    );
  }
}

export async function GET() {
  // simple health/count endpoint (no PII exposed) — useful for the demo
  const count = await db.lead.count();
  return NextResponse.json({ ok: true, totalLeads: count });
}
