// B4Fire Technology — bilingual copy (English / Afrikaans)
// Single source of truth for every user-facing string on the site.
// `af` is typed as `Copy` (typeof en) so missing translations fail the build.

export type Lang = "en" | "af";

const en = {
  nav: {
    labels: {
      "#services": "Services",
      "#compliance": "Compliance",
      "#portfolio": "Portfolio",
      "#about": "About",
      "#contact": "Contact",
    },
    skip: "Skip to main content",
    whatsapp: "WhatsApp",
    whatsappAria: "Chat with us on WhatsApp",
    emergency: "24/7 Emergency",
    emergencyTitle: "24/7 Emergency — Phillip",
    quote: "Instant Quote",
    openMenu: "Open navigation menu",
    mobileQuote: "Get an Instant Quote",
    mobileWhatsapp: "WhatsApp Us",
    mobileOffice: "Office · ",
    langAria: "Change language",
  },
  hero: {
    badge: "PSIRA Registered · SAQCC Fire Certified",
    h1a: "Certified",
    h1b: "Fire & Security",
    h1c: "Protection for Business and Home.",
    subPre:
      "SANS & SAQCC compliant fire detection, gas suppression, access control, and maintenance for ",
    subHL: "Cape Town & the Western Cape",
    subPost: " — one accountable contractor for fire and electronic security.",
    chipsAria: "Key assurances",
    chips: [
      "No call-out fee on signed SLAs",
      "Free compliance survey",
      "COC & sign-off included",
    ],
    ctaPrimary: "Get an Instant Quote",
    ctaEmergency: "Emergency Response",
    addressSuffix: " — mobile units across the Western Cape",
    statsAria: "Company key statistics",
    stats: [
      "Emergency support",
      "SANS compliant installs",
      "Years protecting the Cape",
      "Sites serviced annually",
    ],
    explore: "Explore our services",
    exploreAria: "Scroll down to services",
  },
  services: {
    eyebrow: "What we do",
    heading: "One contractor. Every layer of protection.",
    sub: "From the first wisp of smoke to the last line of your compliance file — B4Fire designs, installs, certifies and maintains the systems that keep your people and assets safe.",
    filterAria: "Filter services by category",
    cats: {
      all: "All Services",
      "fire-detection": "Fire Detection",
      suppression: "Gas Suppression",
      equipment: "Equipment & Maintenance",
      passive: "Passive Fire",
      security: "Electronic Security",
      safety: "Safety Supplies",
    },
    quoteThis: "Quote this service",
    quoteAriaPre: "Request a quote for ",
    nudge: "Every install is commissioned against its governing SANS standard and handed over with documentation your insurer will accept.",
    byKey: {
      detection: {
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
      },
      suppression: {
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
      },
      evacuation: {
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
      },
      alarms: {
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
      },
      cctv: {
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
      },
      access: {
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
      },
      "boom-gates": {
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
      },
      perimeter: {
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
      },
      stopping: {
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
      },
      "fire-doors": {
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
      },
      equipment: {
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
      },
      signage: {
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
      },
      "first-aid": {
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
      },
      ppe: {
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
      },
    } as Record<string, { title: string; blurb: string; items: string[] }>,
  },
  compliance: {
    eyebrow: "Regulatory & compliance",
    hPre: "Certificates on the wall. ",
    hHL: "Proof in the paperwork.",
    p1: "Anyone can claim to be compliant — insurers, auditors and municipal fire marshals only accept documented compliance. Every B4Fire installation and service visit is executed by registered technicians against the governing national standard, and handed over with the certificates, registers and reports that stand up to scrutiny.",
    p2: "We also carry public liability cover and issue certificates of conformity (COC) for electric fencing and system sign-offs, so your building stays audit-ready all year — not just on the day of inspection.",
    facts: [
      { k: "Registered", v: "PSIRA security provider" },
      { k: "Certified", v: "SAQCC Fire technicians" },
      { k: "Documented", v: "SANS test & commissioning reports" },
      { k: "Insured", v: "Public liability cover" },
    ],
    listAria: "Compliance registrations and standards",
    standardsTitle: "Standards we work to",
    standardsAria: "SANS standards list",
    byAbbr: {
      PSIRA: {
        name: "Private Security Industry Regulatory Authority",
        detail:
          "Registered security service provider. All security personnel and installations operate under PSIRA registration.",
      },
      "SAQCC Fire": {
        name: "South African Qualification & Certification Committee — Fire",
        detail:
          "Technicians registered for the design, installation, commissioning and servicing of fire protection systems.",
      },
      "SANS 10139": {
        name: "Fire Detection & Alarm Systems — Code of Practice",
        detail:
          "Detection systems designed, installed, commissioned and maintained to the national code of practice.",
      },
      "SANS 1475": {
        name: "Recharging & Servicing of Portable Fire Equipment",
        detail:
          "Extinguishers and hose reels serviced, pressure-tested and tagged at registered service centres.",
      },
    },
  },
  portfolio: {
    eyebrow: "Recent work",
    hPre: "Installed. Commissioned. ",
    hHL: "Signed off.",
    sub: "A snapshot of projects across the Cape — every one delivered with full documentation, from detection upgrades to clean-agent suppression.",
    filterAria: "Filter projects by client type",
    types: {
      all: "All Projects",
      commercial: "Commercial Offices",
      industrial: "Industrial Warehouses",
      "server-room": "Server Rooms",
      retail: "Retail",
    },
    projectWord: "project",
    inWord: "in",
    scopeAria: "Project scope",
    plan: "Plan a similar project",
    planAriaPre: "Plan a similar project: ",
    empty:
      "No projects in this category yet — but we're installing weekly. Ask us for references.",
    note: "Site names withheld under client security policy — full references available on request.",
    byKey: {
      p1: {
        title: "Addressable Detection Upgrade — 4-Storey Office Block",
        location: "Bellville, Cape Town",
        scope: ["Addressable fire detection", "Voice evacuation sounders", "Access control integration"],
      },
      p2: {
        title: "Warehouse Detection & Extinguisher Fleet",
        location: "Kuils River, Cape Town",
        scope: ["Linear & point detection", "Hose reels & extinguisher fleet", "Annual SANS 1475 servicing"],
      },
      p3: {
        title: "Clean-Agent Gas Suppression — Co-Location Server Room",
        location: "Paarl, Western Cape",
        scope: ["FM-200 style clean agent", "Room integrity testing", "Pre-alarm & abort controls"],
      },
      p4: {
        title: "Mall-Wide Detection, Signage & Emergency Lighting",
        location: "Brackenfell, Cape Town",
        scope: ["Zoned conventional detection", "Emergency & exit lighting", "Evacuation signage audit"],
      },
      p5: {
        title: "Biometric Access Control — Head Office Fit-Out",
        location: "Tygerberg, Cape Town",
        scope: ["Fingerprint + card MFA", "Turnstile & intercom integration", "Time & attendance sync"],
      },
      p6: {
        title: "Perimeter Electric Fencing & CCTV — Distribution Yard",
        location: "Epping, Cape Town",
        scope: ["Wall-top electric fencing + COC", "IP CCTV with analytics", "24/7 alarm signalling"],
      },
    } as Record<string, { title: string; location: string; scope: string[] }>,
  },
  testimonials: {
    eyebrow: "Client feedback",
    heading: "The Cape's facilities teams trust B4Fire.",
    sub: "Unedited feedback from the people who manage the buildings, budgets and audits we support every day.",
    starsAria: (n: number) => `${n} out of 5 stars`,
    byKey: {
      "Renate V.": {
        quote:
          "B4Fire re-did our detection after another contractor left us non-compliant before an audit. Panel, zoning and signage were sorted in under two weeks — and the audit passed without a single finding.",
        role: "Facilities Manager",
        org: "Commercial property group, Bellville",
      },
      "Dawid K.": {
        quote:
          "Our server room could not risk water or mess. Their clean-agent design came with an integrity report and clear handover docs. Professional from survey to sign-off.",
        role: "IT Infrastructure Lead",
        org: "Logistics firm, Paarl",
      },
      "Ayesha M.": {
        quote:
          "They service all eleven sites' extinguishers on one annual schedule with an asset register we can hand straight to insurers. The reminder system alone is worth it.",
        role: "SHEQ Officer",
        org: "Manufacturing, Epping",
      },
      "Johan S.": {
        quote:
          "Access control, electric fencing and the alarm monitoring all talk to one platform now. When the fence was hit at 2am, their monitoring phoned us before the dogs started barking.",
        role: "Operations Director",
        org: "Distribution centre, Kuils River",
      },
    } as Record<string, { quote: string; role: string; org: string }>,
  },
  about: {
    eyebrow: "About us",
    hPre: "Local crew. National standards. ",
    hHL: "No shortcuts.",
    p1a: "B4Fire Technology was founded in Kuils River in ",
    p1b: " by technicians who were tired of watching buildings fail audits over preventable basics — expired extinguishers, uncommissioned panels, fencing without a COC. We set out to build a company where the paperwork is as solid as the installation.",
    p2: "Today our teams protect office blocks, warehouses, server rooms and retail spaces across the Western Cape. Fire detection, suppression, passive containment, access control and perimeter security sit under one roof — so you deal with one accountable contractor instead of five.",
    p3: "When you call, a certified human answers. When we quote, the numbers hold. And when something beeps at 2am, we come out — that's what 24/7 means.",
    feats: [
      { k: "One accountable team", v: "Fire + security combined" },
      { k: "Audit-ready files", v: "Registers, COCs, reports" },
      { k: "Certified humans", v: "SAQCC & PSIRA registered" },
    ],
    hoursTitle: "Operating hours",
    checking: "Checking hours…",
    openNow: "Open now — office hours",
    closedNow: "Closed — 24/7 emergency line active",
    tableAria: "Weekly operating hours in SAST",
    tableCaption: "Office hours by day, South African time. Emergencies handled 24/7.",
    dayCol: "Day",
    hoursCol: "Office hours",
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    sundayClosed: "Closed — emergency line active",
    emergTitle: "Emergencies: 24 hours, 7 days",
    emergBody:
      "Panel faults, activations, gas discharge or perimeter breaches — call the emergency line and a technician is dispatched, day or night.",
    callPre: "Call ",
    mobileUnitsPre: " · Mobile units: ",
    cta: "Book a free compliance survey",
  },
  contact: {
    eyebrow: "Contact",
    heading: "Talk to a certified technician today.",
    sub: "Request a quote, book a survey, or raise a service call. For life-safety emergencies, always phone the 24/7 line directly.",
    emergencyLabel: "24/7 Emergency line",
    whatsappLabel: "WhatsApp",
    whatsappSub: "Send photos of your site for a faster quote",
    officeHours: "Office hours",
    hoursL1: "Mon–Fri 08:00–17:00",
    hoursL2: "Sat 08:00–13:00 (SAST)",
    emailLabel: "Email",
    baseLabel: "Base of operations",
    formTitle: "Request a callback",
    formSub: "Average response time: under 2 business hours.",
    fName: "Full name",
    fMobile: "Mobile",
    fSuburb: "Suburb",
    fEmail: "Email",
    fService: "Service needed",
    fMessage: "How can we assist?",
    msgPlaceholder: "Tell us about your property, what you need, and any deadlines…",
    selectPlaceholder: "Select a service",
    otherService: "Something else",
    sending: "Sending…",
    submit: "Request Callback",
    successTitle: "We've got your request",
    successBody:
      "A certified technician will contact you within one business day. Need it faster? The 24/7 line is always open.",
    sendAnother: "Send another request",
    toastTitle: "Message sent",
    toastDesc: (ref: string) => `Reference ${ref} — we'll call you back within one business day.`,
    errSubmit: "Submission failed. Please try again.",
    errGeneric: "Something went wrong. Please try again.",
    preferCall: (num: string) => `Prefer to talk now? Call ${num} — a human answers 24/7.`,
  },
  quote: {
    title: "Instant Quote Calculator",
    desc: "Indicative budget range in 60 seconds — a SANS-compliant survey confirms the final price.",
    stepWord: "Step",
    ofWord: "of",
    steps: ["Services", "Property & timing", "Your details"],
    done: "Done",
    progressAria: "Quote wizard progress",
    legendSr: "Select the services you need quoted",
    needQuoted: "What do you need quoted?",
    baseLabels: {
      detection: "Fire detection system",
      suppression: "Gas suppression system",
      evacuation: "Evacuation & public address",
      alarms: "Alarm systems",
      cctv: "CCTV / video surveillance",
      access: "Access control",
      "boom-gates": "Boom gates & vehicle control",
      perimeter: "Electric fencing & perimeter",
      stopping: "Fire stopping & containment",
      "fire-doors": "Fire doors",
      equipment: "Fire equipment & servicing",
      signage: "Safety signage",
      "first-aid": "First aid kits & supplies",
      ppe: "PPE supply",
    } as Record<string, string>,
    propertyLabel: "Property type",
    property: {
      office: "Office / Commercial",
      warehouse: "Warehouse / Industrial",
      server: "Server Room / Data",
      retail: "Retail / Hospitality",
      residential: "Residential Estate",
    } as Record<string, string>,
    areaPre: "Approximate area: ",
    areaAria: "Approximate area in square metres",
    sizeMin: "50 m²",
    sizeMax: "5 000+ m²",
    urgencyTitle: "How soon do you need it?",
    urgencyAria: "Urgency",
    urgency: {
      planning: { label: "Planning ahead", note: "Standard scheduling — best pricing" },
      urgent: { label: "Within 30 days", note: "Prioritised survey slot" },
      emergency: { label: "Emergency / audit deadline", note: "Same-week response team" },
    } as Record<string, { label: string; note: string }>,
    estimateLabel: "Indicative budget range",
    estimateNote: "Excl. VAT. Final quote confirmed after a free on-site survey.",
    successTitle: "Request received!",
    successA: (first: string) => `Thanks ${first} — your reference is `,
    successB: ". A certified technician will call you on ",
    timingEmergency: "within 2 working hours",
    timingNormal: "within one business day",
    savedRange: "Saved budget range",
    customScope: "Custom scope",
    doneBtn: "Done",
    reach: "Where can we reach you?",
    qName: "Full name *",
    qPhone: "Mobile number *",
    qEmail: "Email",
    qCompany: "Company (optional)",
    back: "Back",
    submit: "Get My Free Quote",
    sending: "Sending…",
    noSpam: "No spam. Your details are only used to prepare your quote.",
    continueBtn: "Continue",
    selectOne: "Select at least one service to continue",
    errSubmit: "Submission failed. Please try again.",
    errGeneric: "Something went wrong. Please try again.",
  },
  footer: {
    tagline:
      "The number one Maintenance and Installation Company in the Fire and Security Market",
    blurbPre:
      "Registered, documented, and answering the phone 24/7 — from our base in ",
    explore: "Explore",
    services: "Services",
    quoteLink: "Get an Instant Quote",
    followUs: "Follow us",
    hoursLine: "Mon–Fri 08:00–17:00 · Sat 08:00–13:00 · Emergencies 24/7",
    rights: "All rights reserved. PSIRA-registered security service provider.",
    credit: "Demo built with passion by ",
  },
  float: {
    whatsapp: "WhatsApp Us",
    whatsappAria: "Chat with B4Fire on WhatsApp",
    topAria: "Back to top",
  },
  logo: {
    tagline: "Fire · Security · Compliance",
  },
};

export type Copy = typeof en;

const af: Copy = {
  nav: {
    labels: {
      "#services": "Dienste",
      "#compliance": "Nakoming",
      "#portfolio": "Portefeulje",
      "#about": "Oor Ons",
      "#contact": "Kontak",
    },
    skip: "Slaan oor na hoofinhoud",
    whatsapp: "WhatsApp",
    whatsappAria: "Gesels met ons op WhatsApp",
    emergency: "24/7 Noodlyn",
    emergencyTitle: "24/7 Noodlyn — Phillip",
    quote: "Dadelike Kwotasie",
    openMenu: "Maak navigasiekieslys oop",
    mobileQuote: "Kry 'n Dadelike Kwotasie",
    mobileWhatsapp: "WhatsApp Ons",
    mobileOffice: "Kantoor · ",
    langAria: "Verander taal",
  },
  hero: {
    badge: "PSIRA Geregistreer · SAQCC Brand-gesertifiseer",
    h1a: "Gesertifiseerde",
    h1b: "Brand & Sekuriteit",
    h1c: "beskerming vir besigheid en huis.",
    subPre:
      "SANS- en SAQCC-voldoende brandverklikking, gasonderdrukking, toegangsbeheer en instandhouding vir ",
    subHL: "Kaapstad & die Wes-Kaap",
    subPost: " — een verantwoordelike kontrakteur vir brand en elektroniese sekuriteit.",
    chipsAria: "Sleutelversekerings",
    chips: [
      "Geen uitryfooi op getekende SLA-ooreenkomste",
      "Gratis nakomingsopname",
      "COC & aftekening ingesluit",
    ],
    ctaPrimary: "Kry 'n Dadelike Kwotasie",
    ctaEmergency: "Noodreaksie",
    addressSuffix: " — mobiele eenhede regoor die Wes-Kaap",
    statsAria: "Maatskappy se sleutelstatistiek",
    stats: [
      "Noodbystand",
      "SANS-voldoende installasies",
      "Jare lank beskerming vir die Kaap",
      "Terreine jaarliks gediens",
    ],
    explore: "Verken ons dienste",
    exploreAria: "Rol af na dienste",
  },
  services: {
    eyebrow: "Wat ons doen",
    heading: "Een kontrakteur. Elke laag beskerming.",
    sub: "Van die eerste rookwolkjie tot die laaste reël van jou nakomingslêer — B4Fire ontwerp, installeer, sertifiseer en onderhou die stelsels wat jou mense en bates veilig hou.",
    filterAria: "Filtreer dienste volgens kategorie",
    cats: {
      all: "Alle Dienste",
      "fire-detection": "Brandverklikking",
      suppression: "Gasblusstelsels",
      equipment: "Toerusting & Instandhouding",
      passive: "Passiewe Brandbeskerming",
      security: "Elektroniese Sekuriteit",
      safety: "Veiligheidsvoorrade",
    },
    quoteThis: "Kwoteer hierdie diens",
    quoteAriaPre: "Versoek 'n kwotasie vir ",
    nudge: "Elke installasie word teen die toepaslike SANS-standaard in bedryf gestel en met dokumentasie oorhandig wat jou versekeraar sal aanvaar.",
    byKey: {
      detection: {
        title: "Brandverklikkingstelsels",
        blurb:
          "'n Brandverklikkingstelsel monitor die teenwoordigheid van brand om te waarsku en beheeraksies handmatig of outomaties te laat plaasvind. Ons installeer adresseerbare, konvensionele en selfstandige stelsels.",
        items: [
          "Adresseerbare intelligente panele & lusse",
          "Konvensionele gesoneerde stelsels",
          "Selfstandige rook-/hitteverklikkers",
          "Stemonttruiming & sirene-ontwerp",
          "24/7-monitering & alarmseinvoering",
        ],
      },
      suppression: {
        title: "Gas-brandonderdrukkingstelsels",
        blurb:
          "Gas-brandonderdrukkingstelsels word gebruik om elektriese brande te blus deur 'n konstrasie gas binne 'n spesifieke kamer vrystel. Ons installeer verskeie tipes gas-brandonderdrukkingstelsels.",
        items: [
          "Bedienerkamers & datasentrums",
          "Elektriese omkasting & skakelkamers",
          "FM-200 / Novec-styl skoonmiddels",
          "CO2 & inerte gasse (IG-55 / IG-541)",
          "Kamerintegriteitstoetse & seinbording",
        ],
      },
      evacuation: {
        title: "Ontruiming & Openbare Aanspreekstelsels",
        blurb:
          "Ontruimings- en openbare aanspreekstelsels maak veilige, beheerde gebouontruiming moontlik in 'n noodgeval. Duidelike stemboodskappe kan vanaf die stelsel geïnisieer word om gebouontruiming te vergemaklik.",
        items: [
          "Stemalarm & openbare aanspreekluidsprekers",
          "Gesoneerde ontruimingsboodskappe",
          "Noodstemkommunikasie",
          "Integrasie met brandverklikkerpanele",
          "Hoorbaarheids- & verstaanbaarheidsontwerp",
        ],
      },
      alarms: {
        title: "Alarmstelsels",
        blurb:
          "Ontwerp om te bespeur wanneer iets nie reg is nie, die potensiële dreigement af te skrik en die reg owerhede in te lig sodat hulle vinnig en doeltreffend kan reageer. Alarme kan ook brand, koolstofmonoksied en omgewingsgevare bespeur — tuis of by die besigheid.",
        items: [
          "Inbreker- & perimeter-alarmpanele",
          "Binnenshuise / buiteverklikkingstoestelle",
          "Panieknoppies & druk-kodes",
          "Seinvoering na gewapende reaksie",
          "Brand- & KO-integrasieopsies",
        ],
      },
      cctv: {
        title: "CCTV / Videomonitering",
        blurb:
          "CCTV-stelsels word tipies gebruik om die aktiwiteit van 'n gebou of huis, sowel as die omgewing, te monitor en op te neem. Hierdie stelsels word veral gebruik om misdaad soos diefstal of vandalisme te bekamp — ook bekend as videosurveillance.",
        items: [
          "IP & HD-analoog kamerasisteme",
          "ANPR & analitika-opsies",
          "Afstandmonitering & wolkberging",
          "Kleinhandel-, erf- & pakhuisdekking",
          "Bewysgehalte-opneemopstellings",
        ],
      },
      access: {
        title: "Toegangsbeheer",
        blurb:
          "Toegangsbeheer identifiseer gebruikers deur verskeie aanmeldbewyse te verifieer, wat gebruikersname en wagwoorde, PIN-kodes, biometriese skanderings en sekuriteitstokens kan insluit. Baie stelsels sluit ook multifaktor-verifikasie (MFA) in om 'n gebruiker se identiteit te bevestig.",
        items: [
          "Biometriese (vingerafdruk / gesig) lesers",
          "PIN-, kaart- & multifaktor-kombinasies",
          "Draaie, boome & interkomme",
          "Tyd- & bywoningintegrasie",
          "Ouditpaaie & besoekersbestuur",
        ],
      },
      "boom-gates": {
        title: "Boome",
        blurb:
          "Boome is nie net vir sekuriteit nie; hulle fasiliteer ook die gladde vloei van verkeer. In besige omgewings soos parkeerterreine, tolhekke en beheerde woonareas reguleer boome voertuigtoegang en -uitgang, wat ophoping minimaliseer en ordelike beweging verseker.",
        items: [
          "Voertuigboome & toegangsbeheer",
          "Verkeerversperrings & padblokkeerders",
          "Kaartjie / etiket / afstandbeheer",
          "Beheerde woonareas & parkeerterreine",
          "Langafstand-RFID & ANPR-opsies",
        ],
      },
      perimeter: {
        title: "Elektriese Heinings",
        blurb:
          "'n Elektriese heining is 'n versperring wat elektriese skokke gebruik om mense en/of diere te weerhou om 'n grens oor te steek — met monitering wat reaksie uitlok voordat toegang verkry word.",
        items: [
          "Muurtop- & vrystaande elektriese heinings",
          "Hekmotors & toegangsoutomatisering",
          "Perimeterstrale & buiteverklikking",
          "CCTV / alarmintegrasie",
          "Elektriese-heining-COC-voldoening",
        ],
      },
      stopping: {
        title: "Brandstop",
        blurb:
          "Brandstop help geboue om hul strukturele integriteit te handhaaf en die verspreiding van brand binne 'n gebou te vertraag — dit beskerm vlugroetes en beperk verlies wanneer aktiewe stelsels hul werk doen.",
        items: [
          "Seëling van kabelgote & pypdeurdringings",
          "Brandgegradeerde kleppe & sluitings",
          "Holteversperrings & kompartementering",
          "Intumescerende bedekkings & plate",
          "Substansiasieverslae & aftekening",
        ],
      },
      "fire-doors": {
        title: "Branddeure",
        blurb:
          "Branddeure is 'n integrale deel van 'n gebou se passiewe brandveiligheidsplan. Hulle word gebruik vir brandkompartmentering — fisiese versperrings wat op strategiese plekke rondom 'n gebou geplaas word om die verspreiding van vlamme en rook tydens 'n brand te vertraag.",
        items: [
          "SABS-goedgekeurde branddeurstelle",
          "Rame, seëls & ysterware",
          "Gesertifiseerde installasies & etikette",
          "Uitgange & paniekysterware",
          "Inspeksie- & instandhoudingsplanne",
        ],
      },
      equipment: {
        title: "Brandtoerusting",
        blurb:
          "Brandbestrydingstoerusting is 'n reeks gereedskap en toestelle, in geboue en kantore, wat ontwerp is om brande te blus. Wanneer dit korrek gebruik word, beskerm hierdie toerusting die operateur teen skade.",
        items: [
          "Blusseraanbod & hervul",
          "SANS 1475-druktoetse & diens",
          "Slangtrommels, hidrante & landingkleppe",
          "Brandkomberse & toerustingsomhulsels",
          "Jaarlikse nakomingsouditte & bateregisters",
        ],
      },
      signage: {
        title: "Seinbording",
        blurb:
          "Veiligheidseinbording dien verskeie algemene doeleindes: om te bevorder, identifiseer, inlig, rigting te gee of veiligheidsbewustheid te verhoog oor jou hele terrein.",
        items: [
          "Fotoluminiserende vlugroeteseine",
          "Brandtoerusting-ligasieseine",
          "Regulerings- & waarskuwingseinbording",
          "SABS 1186-voldoende tekens",
          "Seine-ouditte & plaseringsplanne",
        ],
      },
      "first-aid": {
        title: "Eerste Hulp",
        blurb:
          "Eerste hulp sluit in die skoonmaak van klein snye, skrape of krapplekke; die behandel van 'n klein brand; die aanbring van verbande en dekzeuge; die gebruik van oor-die-toonbank medisyne; en meer — hou jou werkplek voorbereid en gereguleer.",
        items: [
          "Regulasie 3-eerstehulpkitte",
          "Kit-inspeksie & aanvulskedules",
          "Brandversorging & oogspoelstasies",
          "Voertuig- & reisstelle",
          "Eerstehulpkamervoorraad",
        ],
      },
      ppe: {
        title: "PPE",
        blurb:
          "Persoonlike beskermende toerusting, algemeen bekend as PPE, is toerusting wat gedra word om blootstelling aan gevare te minimaliseer wat ernstige werkplekbeserings en siektes kan veroorsaak.",
        items: [
          "Kop-, oog-, gehoor- & asemhalingsbeskerming",
          "Vlamvertragende & helder klere",
          "Handskoene, stewels & valbeskerming",
          "Terrein-spesifieke PPE-pakke",
          "Massavoorraad & bestuurde vlakke",
        ],
      },
    },
  },
  compliance: {
    eyebrow: "Regulasie & nakoming",
    hPre: "Sertifikate aan die muur. ",
    hHL: "Bewys in die papierwerk.",
    p1: "Enigiemand kan beweer dat hulle voldoende is — versekeraars, ouditeure en munisipale brandinspekteurs aanvaar slegs gedokumenteerde nakoming. Elke B4Fire-installasie en diensbesoek word deur geregistreerde tegnici teen die tersaaklike nasionale standaard uitgevoer en oorhandig met die sertifikate, registers en verslae wat aan streng ondersoek kan deurstaan.",
    p2: "Ons dra ook openbare aanspreeklikheidsdekking en reik nakomingsertifikate (COC's) uit vir elektriese heinings en stelselaftekenings, sodat jou gebou die hele jaar ouditgereed bly — nie net op die dag van die inspeksie nie.",
    facts: [
      { k: "Geregistreer", v: "PSIRA-sekuriteitsverskaffer" },
      { k: "Gesertifiseer", v: "SAQCC Brand-tegnici" },
      { k: "Gedokumenteer", v: "SANS-toets- & inbedryfstellingsverslae" },
      { k: "Verseker", v: "Openbare aanspreeklikheidsdekking" },
    ],
    listAria: "Nakomingsregistrasies en standaarde",
    standardsTitle: "Standarde waarvolgens ons werk",
    standardsAria: "Lys van SANS-standaarde",
    byAbbr: {
      PSIRA: {
        name: "Private Security Industry Regulatory Authority",
        detail:
          "Geregistreerde sekuriteitsdiensverskaffer. Alle sekuriteitspersoneel en installasies opereer onder PSIRA-registrasie.",
      },
      "SAQCC Fire": {
        name: "South African Qualification & Certification Committee — Fire",
        detail:
          "Tegnici geregistreer vir die ontwerp, installasie, inbedryfstelling en diens van brandbeskermingstelsels.",
      },
      "SANS 10139": {
        name: "Brandverklikking- & alarmstelsels — kode van praktyk",
        detail:
          "Verklikkingstelsels word volgens die nasionale kode van praktyk ontwerp, geïnstalleer, in bedryf gestel en onderhou.",
      },
      "SANS 1475": {
        name: "Herlaai & diens van draagbare brandtoerusting",
        detail:
          "Blussers en slangtrommels word by geregistreerde dienssentrums gedien, druktoets en gemerk.",
      },
    },
  },
  portfolio: {
    eyebrow: "Onlangse werk",
    hPre: "Geïnstalleer. In bedryf gestel. ",
    hHL: "Afgeteken.",
    sub: "'n Oorsig van projekte regoor die Kaap — elkeen afgehandel met volledige dokumentasie, van verklikkingopgraderings tot skoonmiddelonderdrukking.",
    filterAria: "Filtreer projekte volgens kliëntetipe",
    types: {
      all: "Alle Projekte",
      commercial: "Kommersiële Kantore",
      industrial: "Industriële Pakhuise",
      "server-room": "Bedienerkamers",
      retail: "Kleinhandel",
    },
    projectWord: "projek",
    inWord: "in",
    scopeAria: "Projekomvang",
    plan: "Beplan 'n soortgelyke projek",
    planAriaPre: "Beplan 'n soortgelyke projek: ",
    empty:
      "Nog geen projekte in hierdie kategorie nie — maar ons installeer weekliks. Vra ons vir verwysings.",
    note: "Terreinname word kragtens kliëntesekuriteitsbeleid weerhou — volledige verwysings op aanvraag beskikbaar.",
    byKey: {
      p1: {
        title: "Adresseerbare Verklikkingopgradering — 4-verdieping Kantoorblok",
        location: "Bellville, Kaapstad",
        scope: ["Adresseerbare brandverklikking", "Stemonttruimingsirene", "Toegangsbeheerintegrasie"],
      },
      p2: {
        title: "Pakhuisverklikking & Blusservloot",
        location: "Kuils River, Kaapstad",
        scope: ["Lineêre & puntverklikking", "Slangtrommels & blusservloot", "Jaarlikse SANS 1475-diens"],
      },
      p3: {
        title: "Skoonmiddel-gasonderdrukking — Ko-lokasie Bedienerkamer",
        location: "Paarl, Wes-Kaap",
        scope: ["FM-200-styl skoonmiddel", "Kamerintegriteitstoets", "Vooralarm & afbreekkontroles"],
      },
      p4: {
        title: "Winkelsentrum-wye Verklikking, Seinbording & Noodligging",
        location: "Brackenfell, Kaapstad",
        scope: ["Gesoneerde konvensionele verklikking", "Nood- & uitgangsbeligting", "Ontruimingsseine-oudit"],
      },
      p5: {
        title: "Biometriese Toegangsbeheer — Hoofkantoor-uitbou",
        location: "Tygerberg, Kaapstad",
        scope: ["Vingerafdruk + kaart-MFA", "Draai- & interkomintegrasie", "Tyd- & bywoningsinkoppeling"],
      },
      p6: {
        title: "Perimeter Elektriese Heining & CCTV — Verspreidingsplaas",
        location: "Epping, Kaapstad",
        scope: ["Muurtop-elektriese heining + COC", "IP-CCTV met analitika", "24/7 alarmseinvoering"],
      },
    },
  },
  testimonials: {
    eyebrow: "Kliënteterugvoer",
    heading: "Die Kaap se fasiliteitesspanne vertrou B4Fire.",
    sub: "Onveranderde terugvoer van die mense wat die geboue, begrotings en ouditte bestuur wat ons elke dag ondersteun.",
    starsAria: (n: number) => `${n} uit 5 sterre`,
    byKey: {
      "Renate V.": {
        quote:
          "B4Fire het ons verklikking oorgedoen nadat 'n ander kontrakteur ons nie-voldoende gelaat het voor 'n oudit. Paneel, sonering en seinbording was binne twee weke reg — en die oudit is sonder 'n enkele bevinding geslaag.",
        role: "Fasiliteitsbestuurder",
        org: "Kommersiële eiendomsgroep, Bellville",
      },
      "Dawid K.": {
        quote:
          "Ons bedienerkamer kon nie water of gemors risikeer nie. Hul skoonmiddelontwerp het met 'n integriteitsverslag en duidelike oorhandigingsdokumente gekom. Professioneel van opname tot aftekening.",
        role: "IT-infrastruktuurhoof",
        org: "Logistiekemaatskappy, Paarl",
      },
      "Ayesha M.": {
        quote:
          "Hulle diens al elf terreine se blussers op een jaarlikse skedule, met 'n bateregister wat ons direk aan versekeraars kan oorhandig. Die herinneringstelsel alleen is dit werd.",
        role: "SHEQ-beampte",
        org: "Vervaardiging, Epping",
      },
      "Johan S.": {
        quote:
          "Toegangsbeheer, elektriese heining en die alarmmonitering praat nou op een platform. Toe die heining om 02:00 getref is, het hul monitering ons geskakel voordat die honde begin blaf het.",
        role: "Operasiesdirekteur",
        org: "Verspreidingsentrum, Kuils River",
      },
    },
  },
  about: {
    eyebrow: "Oor ons",
    hPre: "Plaaslike span. Nasionale standarde. ",
    hHL: "Geen kortpaaie.",
    p1a: "B4Fire Technology is in ",
    p1b: " in Kuils River gestig deur tegnici wat moeg was om te sien hoe geboue weens voorkombare basiese sake — vervalste blussers, ongekonstateerde panele, heinings sonder 'n COC — nie ouditte slaag nie. Ons het onderneem om 'n maatskappy te bou waar die papierwerk so solied soos die installasie is.",
    p2: "Vandag beskerm ons spanne kantoorblokke, pakhuise, bedienerkamers en kleinhandelsruimtes regoor die Wes-Kaap. Brandverklikking, onderdrukking, passiewe beheersing, toegangsbeheer en perimetersekuriteit val onder een dak — so hanteer jy een verantwoordelike kontrakteur in plaas van vyf.",
    p3: "Wanneer jy skakel, antwoord 'n gesertifiseerde mens. Wanneer ons kwoteer, hou die syfers. En wanneer iets om 02:00 piep, kom ons uit — dit is wat 24/7 beteken.",
    feats: [
      { k: "Een verantwoordelike span", v: "Brand + sekuriteit gekombineer" },
      { k: "Ouditgereed lêers", v: "Registers, COC's, verslae" },
      { k: "Gesertifiseerde mense", v: "SAQCC & PSIRA geregistreer" },
    ],
    hoursTitle: "Bedryfsure",
    checking: "Kontroleer ure…",
    openNow: "Nou oop — kantoorure",
    closedNow: "Gesluit — 24/7-noodlyn is aktief",
    tableAria: "Weeklikse bedryfsure in SAST",
    tableCaption: "Kantoorure per dag, Suid-Afrikaanse tyd. Noodgevalle word 24/7 hanteer.",
    dayCol: "Dag",
    hoursCol: "Kantoorure",
    days: ["Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrydag", "Saterdag", "Sondag"],
    sundayClosed: "Gesluit — noodlyn is aktief",
    emergTitle: "Noodgevalle: 24 uur, 7 dae",
    emergBody:
      "Paneelfoute, aktiverings, gasvrystelling of perimeterdeurbringe — skakel die noodlyn en 'n tegnikus word gestuur, dag of nag.",
    callPre: "Skakel ",
    mobileUnitsPre: " · Mobiele eenhede: ",
    cta: "Bespreek 'n gratis nakomingsopname",
  },
  contact: {
    eyebrow: "Kontak",
    heading: "Praat vandag met 'n gesertifiseerde tegnikus.",
    sub: "Versoek 'n kwotasie, bespreek 'n opname, of rapporteer 'n diensversoek. Vir lewensveiligheidsnoodgevalle, skakel altyd direk die 24/7-lyn.",
    emergencyLabel: "24/7-noodlyn",
    whatsappLabel: "WhatsApp",
    whatsappSub: "Stuur foto's van jou terrein vir 'n vinniger kwotasie",
    officeHours: "Kantoorure",
    hoursL1: "Ma–Vr 08:00–17:00",
    hoursL2: "Sa 08:00–13:00 (SAST)",
    emailLabel: "E-pos",
    baseLabel: "Basis van bedrywighede",
    formTitle: "Versoek 'n terugbel",
    formSub: "Gemiddelde reaksietyd: binne 2 werksure.",
    fName: "Volle naam",
    fMobile: "Selfoon",
    fSuburb: "Voorstad",
    fEmail: "E-pos",
    fService: "Diens benodig",
    fMessage: "Hoe kan ons help?",
    msgPlaceholder: "Vertel ons van jou eiendom, wat jy nodig het, en enige sperdatums…",
    selectPlaceholder: "Kies 'n diens",
    otherService: "Iets anders",
    sending: "Stuur tans…",
    submit: "Versoek Terugbel",
    successTitle: "Ons het jou versoek ontvang",
    successBody:
      "'n Gesertifiseerde tegnikus sal binne een werksdag met jou skakel. Benodig dit vinniger? Die 24/7-lyn is altyd oop.",
    sendAnother: "Stuur nog 'n versoek",
    toastTitle: "Boodskap gestuur",
    toastDesc: (ref: string) => `Verwysing ${ref} — ons skakel jou binne een werksdag terug.`,
    errSubmit: "Indiening misluk. Probeer asseblief weer.",
    errGeneric: "Iets het verkeerd gegaan. Probeer asseblief weer.",
    preferCall: (num: string) => `Verkies jy om nou te skakel? Bel ${num} — 'n mens antwoord 24/7.`,
  },
  quote: {
    title: "Dadelike Kwotasie-berekenaar",
    desc: "Aanduidende begrotingsomvang binne 60 sekondes — 'n SANS-voldoende opname bevestig die finale prys.",
    stepWord: "Stap",
    ofWord: "van",
    steps: ["Dienste", "Eiendom & tydsberekening", "Jou besonderhede"],
    done: "Klaar",
    progressAria: "Kwotasiewizard-vordering",
    legendSr: "Kies die dienste waarvoor jy 'n kwotasie wil hê",
    needQuoted: "Wat moet ons kwoteer?",
    baseLabels: {
      detection: "Brandverklikkingstelsel",
      suppression: "Gas-onderdrukkingstelsel",
      evacuation: "Ontruiming & openbare aanspreek",
      alarms: "Alarmstelsels",
      cctv: "CCTV / videomonitering",
      access: "Toegangsbeheer",
      "boom-gates": "Boome & voertuigbeheer",
      perimeter: "Elektriese heining & perimeter",
      stopping: "Brandstop & beheersing",
      "fire-doors": "Branddeure",
      equipment: "Brandtoerusting & diens",
      signage: "Veiligheidseinbording",
      "first-aid": "Eerstehulpkitte & voorrade",
      ppe: "PPE-verskaffing",
    },
    propertyLabel: "Eiendomstipe",
    property: {
      office: "Kantoor / Kommersieel",
      warehouse: "Pakhuis / Industrieel",
      server: "Bedienerkamer / Data",
      retail: "Kleinhandel / Gasvryheid",
      residential: "Residensiële kompleks",
    },
    areaPre: "Benaderde oppervlakte: ",
    areaAria: "Benaderde oppervlakte in vierkante meter",
    sizeMin: "50 m²",
    sizeMax: "5 000+ m²",
    urgencyTitle: "Hoe gou het jy dit nodig?",
    urgencyAria: "Dringendheid",
    urgency: {
      planning: { label: "Beplan vooruit", note: "Standaard skedulering — beste pryse" },
      urgent: { label: "Binne 30 dae", note: "Geprioriteerde opnamegleuf" },
      emergency: { label: "Noodgeval / ouditsperdatum", note: "Selfde-week reaksiespan" },
    },
    estimateLabel: "Aanduidende begrotingsomvang",
    estimateNote: "Uitsluitend BTW. Finale kwotasie bevestig na 'n gratis terreinopname.",
    successTitle: "Versoek ontvang!",
    successA: (first: string) => `Dankie ${first} — jou verwysing is `,
    successB: ". 'n Gesertifiseerde tegnikus sal jou skakel op ",
    timingEmergency: "binne 2 werksure",
    timingNormal: "binne een werksdag",
    savedRange: "Bewaarde begrotingsomvang",
    customScope: "Gepasmaakte omvang",
    doneBtn: "Klaar",
    reach: "Waar kan ons jou bereik?",
    qName: "Volle naam *",
    qPhone: "Selfoonnommer *",
    qEmail: "E-pos",
    qCompany: "Maatskappy (opsioneel)",
    back: "Terug",
    submit: "Kry My Gratis Kwotasie",
    sending: "Stuur tans…",
    noSpam: "Geen strooipos nie. Jou besonderhede word slegs gebruik om jou kwotasie voor te berei.",
    continueBtn: "Gaan voort",
    selectOne: "Kies ten minste een diens om voort te gaan",
    errSubmit: "Indiening misluk. Probeer asseblief weer.",
    errGeneric: "Iets het verkeerd gegaan. Probeer asseblief weer.",
  },
  footer: {
    tagline:
      "Die nommer een Instandhoudings- en Installasiemaatskappy in die Brand- en Sekuriteitsmark",
    blurbPre:
      "Geregistreer, gedokumenteer, en ons antwoord die telefoon 24/7 — vanaf ons basis in ",
    explore: "Verken",
    services: "Dienste",
    quoteLink: "Kry 'n Dadelike Kwotasie",
    followUs: "Volg ons",
    hoursLine: "Ma–Vr 08:00–17:00 · Sa 08:00–13:00 · Noodgevalle 24/7",
    rights: "Alle regte voorbehou. PSIRA-geregistreerde sekuriteitsdiensverskaffer.",
    credit: "Demo gebou met passie deur ",
  },
  float: {
    whatsapp: "WhatsApp Ons",
    whatsappAria: "Gesels met B4Fire op WhatsApp",
    topAria: "Terug na bo",
  },
  logo: {
    tagline: "Brand · Sekuriteit · Nakoming",
  },
};

export const COPY: Record<Lang, Copy> = { en, af };

export function isLang(v: unknown): v is Lang {
  return v === "en" || v === "af";
}
