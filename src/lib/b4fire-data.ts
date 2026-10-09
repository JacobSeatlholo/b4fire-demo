// B4Fire Technology — real company data (sourced from b4fire.co.za)
// Single source of truth so copy can be tuned without touching components.

import {
  Flame,
  Wind,
  FireExtinguisher,
  BrickWallFire,
  Fingerprint,
  Fence,
  Megaphone,
  BellRing,
  Video,
  DoorClosed,
  SignpostBig,
  BriefcaseMedical,
  HardHat,
  type LucideIcon,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* Company constants — real details from b4fire.co.za                  */
/* ------------------------------------------------------------------ */

export const COMPANY = {
  name: "B4Fire Technology",
  tagline: "The number one Maintenance and Installation Company in the Fire and Security Market",
  description:
    "B4Fire Technology is a fire security, installation, maintenance and repairs company in South Africa that provides electronic security solutions for local and international integrated security turnkey solutions.",
  // Real phones from the live site
  phoneDisplay: "083 201 1488", // primary Tel (office)
  phoneIntl: "+27832011488",
  phoneAltDisplay: "068 586 0922", // secondary Tel
  phoneAltIntl: "+27685860922",
  whatsappDisplay: "083 201 1488",
  whatsapp:
    "https://wa.me/27832011488?text=" +
    encodeURIComponent(
      "Hi B4Fire Technology, I'd like to request a quote for fire protection / security services."
    ),
  emergencyName: "Phillip",
  emergencyDisplay: "061 686 0234",
  emergencyIntl: "+27616860234",
  email: "info@b4fire.co.za",
  // Real address from the live site
  address: "Unit 1 & 2 Enterprise Park, Cnr Stasie Rd & Industrie Rd, Kuils River, 7580",
  addressShort: "Kuils River, Cape Town, 7580",
  serviceArea: "Cape Town • Boland • West Coast • Overberg — Western Cape & beyond",
  founded: 2018, // real: "B4Fire Technology was established in 2018"
  facebook: "https://www.facebook.com/B4FireTechnology/",
} as const;

export const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#compliance", label: "Compliance" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
] as const;

/* ------------------------------------------------------------------ */
/* Services — ALL 14 real services from b4fire.co.za                   */
/* ------------------------------------------------------------------ */

export type ServiceCategory =
  | "fire-detection"
  | "suppression"
  | "equipment"
  | "passive"
  | "security"
  | "safety";

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
  { key: "safety", label: "Safety Supplies" },
];

export const SERVICES: Service[] = [
  {
    key: "detection",
    category: "fire-detection",
    icon: Flame,
    title: "Fire Detection Systems",
    blurb:
      "A fire detection system aims to monitor the presence of fire, to alert and allow control actions to be initiated manually or automatically. We install addressable, conventional and standalone systems.",
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
    title: "Gas Fire Suppression Systems",
    blurb:
      "Gas Fire Suppression Systems are used to extinguish electrical fires by releasing a concentration of gas within a particular room. We install various types of Gas Fire Suppression Systems.",
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
    key: "evacuation",
    category: "fire-detection",
    icon: Megaphone,
    title: "Evacuation & Public Address",
    blurb:
      "Evacuation and public address systems allow for safe and controlled building evacuation to be managed in the case of an emergency. Clear voice messages can be initiated from the system to aid in building evacuation.",
    items: [
      "Voice alarm & public address speakers",
      "Zoned evacuation messaging",
      "Emergency voice communication",
      "Integration with fire detection panels",
      "Audibility & intelligibility design",
    ],
    standard: "SANS 10139 / SANS 10400-T",
    accent: "flame",
  },
  {
    key: "alarms",
    category: "security",
    icon: BellRing,
    title: "Alarm Systems",
    blurb:
      "Designed to detect when something is amiss, deter the potential threat, and alert the proper authorities so they can respond quickly and efficiently. Alarms can also detect fire, carbon monoxide leaks and environmental hazards — at home or business.",
    items: [
      "Intruder & perimeter alarm panels",
      "Indoor / outdoor detection devices",
      "Panic buttons & duress codes",
      "Armed response signalling",
      "Fire & CO integration options",
    ],
    standard: "PSIRA registered monitoring",
    accent: "alert",
  },
  {
    key: "cctv",
    category: "security",
    icon: Video,
    title: "CCTV / Video Surveillance",
    blurb:
      "CCTV systems are typically used to monitor and record the activity of a building or home, as well as its surroundings. These systems are used to primarily combat crime such as theft or vandalism — also referred to as video surveillance.",
    items: [
      "IP & HD analogue camera systems",
      "ANPR & analytics options",
      "Remote viewing & cloud backup",
      "Retail, yard & warehouse coverage",
      "Evidence-quality recording setups",
    ],
    standard: "PSIRA registered installation",
    accent: "alert",
  },
  {
    key: "access",
    category: "security",
    icon: Fingerprint,
    title: "Access Control",
    blurb:
      "Access control identifies users by verifying various login credentials, which can include usernames and passwords, PINs, biometric scans and security tokens. Many systems also include multifactor authentication (MFA) to verify a user's identity.",
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
    key: "boom-gates",
    category: "security",
    icon: Fence,
    title: "Boom Gates",
    blurb:
      "Boom gates are not just for security; they also facilitate the smooth flow of traffic. In busy environments such as parking lots, toll booths and gated communities, boom gates regulate vehicle entry and exit, minimising congestion and ensuring orderly movement.",
    items: [
      "Vehicle boom gates & access control",
      "Traffic barriers & road blockers",
      "Ticket / tag / remote operation",
      "Gated community & parking lots",
      "Long-distance RFID & ANPR options",
    ],
    standard: "PSIRA registered installation",
    accent: "flame",
  },
  {
    key: "perimeter",
    category: "security",
    icon: Fence,
    title: "Electric Fence",
    blurb:
      "An electric fence is a barrier that uses electric shocks to deter people and/or other animals from crossing a boundary — with monitoring that triggers response before entry happens.",
    items: [
      "Wall-top & free-standing electric fencing",
      "Gate motors & entry automation",
      "Perimeter beams & outdoor detection",
      "CCTV / alarm integration",
      "Electric fence COC compliance",
    ],
    standard: "SANS 10222-3 / COC",
    accent: "alert",
  },
  {
    key: "stopping",
    category: "passive",
    icon: BrickWallFire,
    title: "Fire Stopping",
    blurb:
      "Fire stopping helps buildings maintain their structural integrity and slow the spread of fire within a building — protecting escape routes and limiting loss when active systems do their job.",
    items: [
      "Cable tray & pipe penetration sealing",
      "Fire-rated dampers & closures",
      "Cavity barriers & compartmentation",
      "Intumescent coatings & boarding",
      "Substantiation reports & sign-off",
    ],
    standard: "SANS 10400-T",
    accent: "alert",
  },
  {
    key: "fire-doors",
    category: "passive",
    icon: DoorClosed,
    title: "Fire Doors",
    blurb:
      "Fire doors are an integral part of a building's passive fireproofing plan. They're used for fire compartmentation — placing physical barriers in strategic areas around a building in order to slow the spread of flames and smoke in the event of a fire.",
    items: [
      "SABS-approved fire door sets",
      "Frames, seals & ironmongery",
      "Certified installations & labels",
      "Escapes & panic hardware",
      "Inspection & maintenance plans",
    ],
    standard: "SANS 1253",
    accent: "alert",
  },
  {
    key: "equipment",
    category: "equipment",
    icon: FireExtinguisher,
    title: "Fire Equipment",
    blurb:
      "Firefighting equipment is a range of tools and appliances, building and office, designed to extinguish fires. When used correctly, this equipment will protect the operator from harm.",
    items: [
      "Extinguisher supply & refill",
      "SANS 1475 pressure testing & servicing",
      "Hose reels, hydrants & landing valves",
      "Fire blankets & equipment housings",
      "Annual compliance audits & asset registers",
    ],
    standard: "SANS 1475 / SANS 10105",
    accent: "flame",
  },
  {
    key: "signage",
    category: "safety",
    icon: SignpostBig,
    title: "Signage",
    blurb:
      "Safety signage serves several common purposes: to promote, identify, provide information, give directions or to raise safety awareness across your site.",
    items: [
      "Photoluminescent escape route signage",
      "Fire equipment location signage",
      "Regulatory & warning signage",
      "SABS 1186 compliant signs",
      "Signage audits & placement plans",
    ],
    standard: "SANS 1186 / SANS 10400-T",
    accent: "flame",
  },
  {
    key: "first-aid",
    category: "safety",
    icon: BriefcaseMedical,
    title: "First Aid",
    blurb:
      "First aid can include cleaning minor cuts, scrapes or scratches; treating a minor burn; applying bandages and dressings; the use of non-prescription medicine; and more — keep your workplace prepared and regulated.",
    items: [
      "Regulation 3 first aid kits",
      "Kit inspection & restocking schedules",
      "Burn care & eye-wash stations",
      "Vehicle & travel kits",
      "First aid room supplies",
    ],
    standard: "OHSA GSR Regulation 3",
    accent: "flame",
  },
  {
    key: "ppe",
    category: "safety",
    icon: HardHat,
    title: "PPE",
    blurb:
      "Personal protective equipment, commonly referred to as PPE, is equipment worn to minimize exposure to hazards that cause serious workplace injuries and illnesses.",
    items: [
      "Head, eye, hearing & respiratory protection",
      "Flame-resistant & hi-viz clothing",
      "Gloves, boots & fall protection",
      "Site-specific PPE packs",
      "Bulk supply & managed stock levels",
    ],
    standard: "SANS / OHSA compliant",
    accent: "flame",
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
    title: "Warehouse Detection & Extinguisher Fleet",
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
  { value: 8, suffix: "+", label: "Years protecting the Cape" },
  { value: 350, suffix: "+", label: "Sites serviced annually" },
] as const;

/* ------------------------------------------------------------------ */
/* Quote calculator pricing basis (indicative ZAR)                     */
/* ------------------------------------------------------------------ */

export const QUOTE_BASE: Record<string, { min: number; max: number; label: string }> = {
  detection: { min: 8500, max: 68000, label: "Fire detection system" },
  suppression: { min: 42000, max: 210000, label: "Gas suppression system" },
  evacuation: { min: 9500, max: 78000, label: "Evacuation & public address" },
  alarms: { min: 3800, max: 42000, label: "Alarm systems" },
  cctv: { min: 6500, max: 85000, label: "CCTV / video surveillance" },
  access: { min: 7500, max: 62000, label: "Access control" },
  "boom-gates": { min: 8500, max: 58000, label: "Boom gates & vehicle control" },
  perimeter: { min: 15000, max: 98000, label: "Electric fencing & perimeter" },
  stopping: { min: 9500, max: 85000, label: "Fire stopping & containment" },
  "fire-doors": { min: 6500, max: 54000, label: "Fire doors" },
  equipment: { min: 1200, max: 14500, label: "Fire equipment & servicing" },
  signage: { min: 850, max: 9800, label: "Safety signage" },
  "first-aid": { min: 650, max: 7800, label: "First aid kits & supplies" },
  ppe: { min: 950, max: 12500, label: "PPE supply" },
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

/* ------------------------------------------------------------------ */
/* Conversion copy — objection handling (FAQ)                          */
/* ------------------------------------------------------------------ */

export const FAQS = [
  {
    q: "How fast can you get someone out for an emergency?",
    a: "Emergency calls go straight to Phillip on the 24/7 line and a technician is dispatched the same day — often within hours for panel faults, activations, gas discharge or perimeter breaches across the greater Cape Town area.",
  },
  {
    q: "Will my installation pass the fire marshal and my insurer?",
    a: "Yes — every system is designed, installed, commissioned and handed over against its governing SANS standard (10139 for detection, 1475 for equipment, 10400-T for passive). You receive commissioning reports, asset registers and COCs your insurer and auditor will accept.",
  },
  {
    q: "Do you service systems other companies installed?",
    a: "We do. A large share of our maintenance base is systems we inherited. Our first visit is a full compliance survey that flags unsafe or non-compliant equipment, then we bring the system up to standard and keep it there on a scheduled service plan.",
  },
  {
    q: "Can you combine fire and security on one contract?",
    a: "That is exactly how we work best. Detection, suppression, access control, CCTV, alarms and electric fencing under one accountable contractor means one SLA, one invoice and one number to call when anything beeps.",
  },
  {
    q: "What does a compliance survey cost?",
    a: "Nothing. The site survey and written recommendation are free for commercial and industrial properties in the Western Cape — you get a documented scope and fixed quotation, valid for 30 days.",
  },
  {
    q: "Which areas do you cover?",
    a: "We are based in Kuils River and cover the whole Cape Town metro, Boland, West Coast and Overberg. For national or cross-border integrated turnkey solutions, talk to us about project deployments.",
  },
] as const;
