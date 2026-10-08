// Central content source for the B4Fire Technology demo site.
// Single source of truth so copy can be tuned without touching components.

import {
  Flame,
  Wind,
  FireExtinguisher,
  BrickWallFire,
  Fingerprint,
  Fence,
  type LucideIcon,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* Company constants                                                   */
/* ------------------------------------------------------------------ */

export const COMPANY = {
  name: "B4Fire Technology",
  tagline: "Certified Fire Protection & Electronic Security Solutions",
  phoneDisplay: "061 686 0234",
  phoneIntl: "+27616860234",
  whatsapp:
    "https://wa.me/27616860234?text=" +
    encodeURIComponent(
      "Hi B4Fire Technology, I'd like to request a quote for fire protection / security services."
    ),
  email: "info@b4fire.co.za",
  address: "Kuils River, Cape Town, 7580",
  serviceArea: "Cape Town • Boland • West Coast • Overberg — Western Cape & beyond",
  founded: 2016,
} as const;

export const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#compliance", label: "Compliance" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
] as const;

/* ------------------------------------------------------------------ */
/* Services                                                            */
/* ------------------------------------------------------------------ */

export type ServiceCategory =
  | "fire-detection"
  | "suppression"
  | "equipment"
  | "passive"
  | "security";

export type Service = {
  key: string;
  category: ServiceCategory;
  icon: LucideIcon;
  title: string;
  blurb: string;
  items: string[];
  standard: string;
  accent: "flame" | "alert";
};

export const SERVICE_CATEGORIES: {
  key: ServiceCategory | "all";
  label: string;
}[] = [
  { key: "all", label: "All Services" },
  { key: "fire-detection", label: "Fire Detection" },
  { key: "suppression", label: "Gas Suppression" },
  { key: "equipment", label: "Equipment & Maintenance" },
  { key: "passive", label: "Passive Fire" },
  { key: "security", label: "Electronic Security" },
];

export const SERVICES: Service[] = [
  {
    key: "detection",
    category: "fire-detection",
    icon: Flame,
    title: "Fire Detection Systems",
    blurb:
      "Early-warning detection engineered, installed and commissioned to SANS 10139. From single-panel retail to networked addressable campus systems.",
    items: [
      "Addressable intelligent panels & loops",
      "Conventional zoned systems",
      "Standalone smoke / heat detectors",
      "Voice evacuation & sounder design",
      "24/7 monitoring & alarm signalling",
    ],
    standard: "SANS 10139",
    accent: "flame",
  },
  {
    key: "suppression",
    category: "suppression",
    icon: Wind,
    title: "Gas Fire Suppression",
    blurb:
      "Clean-agent and inert gas systems that knock down fires in seconds without damaging sensitive electronics or irreplaceable assets.",
    items: [
      "Server rooms & data centres",
      "Electrical enclosures & switch rooms",
      "FM-200 / Novec-style clean agents",
      "CO2 & inert gas (IG-55 / IG-541)",
      "Room integrity testing & signage",
    ],
    standard: "SANS 14520 / ISO 14520",
    accent: "alert",
  },
  {
    key: "equipment",
    category: "equipment",
    icon: FireExtinguisher,
    title: "Fire Equipment & Maintenance",
    blurb:
      "SAQCC-registered servicing that keeps your extinguishers, hose reels and hydrants compliant, tagged and inspection-ready all year.",
    items: [
      "Extinguisher supply & refill",
      "SANS 1475 pressure testing & servicing",
      "Hose reels, hydrants & landing valves",
      "Fire blankets & signage",
      "Annual compliance audits & asset registers",
    ],
    standard: "SANS 1475 / SANS 10105",
    accent: "flame",
  },
  {
    key: "stopping",
    category: "passive",
    icon: BrickWallFire,
    title: "Fire Stopping & Structural Containment",
    blurb:
      "Passive protection that compartments fire and smoke — protecting escape routes and limiting loss when active systems do their job.",
    items: [
      "Cable tray & pipe penetration sealing",
      "Fire-rated doors, dampers & closures",
      "Cavity barriers & compartmentation",
      "Intumescent coatings & boarding",
      "Substantiation reports & sign-off",
    ],
    standard: "SANS 10400-T",
    accent: "alert",
  },
  {
    key: "access",
    category: "security",
    icon: Fingerprint,
    title: "Access Control & Biometrics",
    blurb:
      "Know exactly who is on site and when. Scalable access control from a single office door to multi-tenant industrial campuses.",
    items: [
      "Biometric (fingerprint / facial) readers",
      "PIN, card & multi-factor combinations",
      "Turnstiles, boom gates & intercoms",
      "Time & attendance integration",
      "Audit trails & visitor management",
    ],
    standard: "PSIRA registered installation",
    accent: "flame",
  },
  {
    key: "perimeter",
    category: "security",
    icon: Fence,
    title: "Electric Fencing & Perimeter Security",
    blurb:
      "Certified high-voltage deterrents and detection on walls, fences and gates — with monitoring that triggers response before entry happens.",
    items: [
      "Wall-top & free-standing electric fencing",
      "Gate motors & entry automation",
      "Perimeter beams & outdoor detection",
      "CCTV / IP surveillance integration",
      "Electric fence COC compliance",
    ],
    standard: "SANS 10222-3 / COC",
    accent: "alert",
  },
];

/* ------------------------------------------------------------------ */
/* Compliance / trust                                                  */
/* ------------------------------------------------------------------ */

export const COMPLIANCE_BADGES = [
  {
    abbr: "PSIRA",
    name: "Private Security Industry Regulatory Authority",
    detail:
      "Registered security service provider. All security personnel and installations operate under PSIRA registration.",
  },
  {
    abbr: "SAQCC Fire",
    name: "South African Qualification & Certification Committee — Fire",
    detail:
      "Technicians registered for the design, installation, commissioning and servicing of fire protection systems.",
  },
  {
    abbr: "SANS 10139",
    name: "Fire Detection & Alarm Systems — Code of Practice",
    detail:
      "Detection systems designed, installed, commissioned and maintained to the national code of practice.",
  },
  {
    abbr: "SANS 1475",
    name: "Recharging & Servicing of Portable Fire Equipment",
    detail:
      "Extinguishers and hose reels serviced, pressure-tested and tagged at registered service centres.",
  },
] as const;

/* ------------------------------------------------------------------ */
/* Portfolio                                                           */
/* ------------------------------------------------------------------ */

export type ClientType = "commercial" | "industrial" | "server-room" | "retail";

export const CLIENT_TYPES: { key: ClientType | "all"; label: string }[] = [
  { key: "all", label: "All Projects" },
  { key: "commercial", label: "Commercial Offices" },
  { key: "industrial", label: "Industrial Warehouses" },
  { key: "server-room", label: "Server Rooms" },
  { key: "retail", label: "Retail" },
];

export type Project = {
  title: string;
  clientType: ClientType;
  clientLabel: string;
  location: string;
  image: string;
  scope: string[];
  year: string;
};

export const PROJECTS: Project[] = [
  {
    title: "Addressable Detection Upgrade — 4-Storey Office Block",
    clientType: "commercial",
    clientLabel: "Commercial Offices",
    location: "Bellville, Cape Town",
    image: "/images/portfolio-office.jpg",
    scope: [
      "Addressable fire detection",
      "Voice evacuation sounders",
      "Access control integration",
    ],
    year: "2024",
  },
  {
    title: "Warehouse Sprinkler-Compliant Detection & Extinguishers",
    clientType: "industrial",
    clientLabel: "Industrial Warehouses",
    location: "Kuils River, Cape Town",
    image: "/images/portfolio-warehouse.jpg",
    scope: [
      "Linear & point detection",
      "Hose reels & extinguisher fleet",
      "Annual SANS 1475 servicing",
    ],
    year: "2023",
  },
  {
    title: "Clean-Agent Gas Suppression — Co-Location Server Room",
    clientType: "server-room",
    clientLabel: "Server Rooms",
    location: "Paarl, Western Cape",
    image: "/images/portfolio-server.jpg",
    scope: [
      "FM-200 style clean agent",
      "Room integrity testing",
      "Pre-alarm & abort controls",
    ],
    year: "2024",
  },
  {
    title: "Mall-Wide Detection, Signage & Emergency Lighting",
    clientType: "retail",
    clientLabel: "Retail",
    location: "Brackenfell, Cape Town",
    image: "/images/portfolio-retail.jpg",
    scope: [
      "Zoned conventional detection",
      "Emergency & exit lighting",
      "Evacuation signage audit",
    ],
    year: "2023",
  },
  {
    title: "Biometric Access Control — Head Office Fit-Out",
    clientType: "commercial",
    clientLabel: "Commercial Offices",
    location: "Tygerberg, Cape Town",
    image: "/images/portfolio-access.jpg",
    scope: [
      "Fingerprint + card MFA",
      "Turnstile & intercom integration",
      "Time & attendance sync",
    ],
    year: "2025",
  },
  {
    title: "Perimeter Electric Fencing & CCTV — Distribution Yard",
    clientType: "industrial",
    clientLabel: "Industrial Warehouses",
    location: "Epping, Cape Town",
    image: "/images/portfolio-perimeter.jpg",
    scope: [
      "Wall-top electric fencing + COC",
      "IP CCTV with analytics",
      "24/7 alarm signalling",
    ],
    year: "2024",
  },
];

/* ------------------------------------------------------------------ */
/* Testimonials                                                        */
/* ------------------------------------------------------------------ */

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
  org: string;
  rating: number;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "B4Fire re-did our detection after another contractor left us non-compliant before an audit. Panel, zoning and signage were sorted in under two weeks — and the audit passed without a single finding.",
    author: "Renate V.",
    role: "Facilities Manager",
    org: "Commercial property group, Bellville",
    rating: 5,
  },
  {
    quote:
      "Our server room could not risk water or mess. Their clean-agent design came with an integrity report and clear handover docs. Professional from survey to sign-off.",
    author: "Dawid K.",
    role: "IT Infrastructure Lead",
    org: "Logistics firm, Paarl",
    rating: 5,
  },
  {
    quote:
      "They service all eleven sites' extinguishers on one annual schedule with an asset register we can hand straight to insurers. The reminder system alone is worth it.",
    author: "Ayesha M.",
    role: "SHEQ Officer",
    org: "Manufacturing, Epping",
    rating: 5,
  },
  {
    quote:
      "Access control, electric fencing and the alarm monitoring all talk to one platform now. When the fence was hit at 2am, their monitoring phoned us before the dogs started barking.",
    author: "Johan S.",
    role: "Operations Director",
    org: "Distribution centre, Kuils River",
    rating: 5,
  },
];

/* ------------------------------------------------------------------ */
/* Operating hours (Africa/Johannesburg)                               */
/* ------------------------------------------------------------------ */

export type DaySchedule = { day: string; open: number | null; close: number | null; label: string };

// hours are decimal (8.5 = 08:30); null = closed
export const HOURS: DaySchedule[] = [
  { day: "Monday", open: 8, close: 17, label: "08:00 – 17:00" },
  { day: "Tuesday", open: 8, close: 17, label: "08:00 – 17:00" },
  { day: "Wednesday", open: 8, close: 17, label: "08:00 – 17:00" },
  { day: "Thursday", open: 8, close: 17, label: "08:00 – 17:00" },
  { day: "Friday", open: 8, close: 17, label: "08:00 – 17:00" },
  { day: "Saturday", open: 8, close: 13, label: "08:00 – 13:00" },
  { day: "Sunday", open: null, close: null, label: "Closed — emergency line active" },
];

export const HERO_STATS = [
  { value: 24, suffix: "/7", label: "Emergency support" },
  { value: 100, suffix: "%", label: "SANS compliant installs" },
  { value: 9, suffix: "+", label: "Years protecting the Cape" },
  { value: 350, suffix: "+", label: "Sites serviced annually" },
] as const;

/* ------------------------------------------------------------------ */
/* Quote calculator pricing basis (indicative ZAR)                     */
/* ------------------------------------------------------------------ */

export const QUOTE_BASE: Record<string, { min: number; max: number; label: string }> = {
  detection: { min: 8500, max: 68000, label: "Fire detection system" },
  suppression: { min: 42000, max: 210000, label: "Gas suppression system" },
  equipment: { min: 1200, max: 14500, label: "Equipment supply & servicing" },
  stopping: { min: 9500, max: 85000, label: "Fire stopping & containment" },
  access: { min: 7500, max: 62000, label: "Access control & biometrics" },
  perimeter: { min: 15000, max: 98000, label: "Electric fencing & perimeter" },
};

export const PROPERTY_FACTORS: Record<string, { label: string; factor: number }> = {
  office: { label: "Office / Commercial", factor: 1 },
  warehouse: { label: "Warehouse / Industrial", factor: 1.35 },
  server: { label: "Server Room / Data", factor: 1.6 },
  retail: { label: "Retail / Hospitality", factor: 1.15 },
  residential: { label: "Residential Estate", factor: 0.9 },
};

export const URGENCY_FACTORS: Record<string, { label: string; factor: number; note: string }> = {
  planning: { label: "Planning ahead", factor: 1, note: "Standard scheduling — best pricing" },
  urgent: { label: "Within 30 days", factor: 1.1, note: "Prioritised survey slot" },
  emergency: { label: "Emergency / audit deadline", factor: 1.25, note: "Same-week response team" },
};
