import { capabilities } from "./brand";

export type ProposalStatus = "template" | "draft" | "sent" | "accepted";
export type SectionStatus = "ready" | "soon";
export type SectionIcon =
  | "sparkles"
  | "compass"
  | "layers"
  | "map"
  | "calendar"
  | "investment"
  | "check";

export type ProposalSection = {
  id: string;
  title: string;
  status: SectionStatus;
  icon: SectionIcon;
};

export type ScopeDutyIcon =
  | "users"
  | "sparkles"
  | "disc"
  | "calendar"
  | "waypoints"
  | "heart"
  | "audio"
  | "share"
  | "megaphone"
  | "palette"
  | "handshake"
  | "ticket"
  | "dollar"
  | "usercog"
  | "chart"
  | "radar";

export type ScopeItem = {
  capabilityId?: (typeof capabilities)[number]["id"];
  title?: string;
  icon?: ScopeDutyIcon;
  included: boolean;
  notes: string;
  /** Concrete work inside this service. Falls back to the capability includes list. */
  includes?: string[];
};

export type ProposalVisual = {
  stats?: { value: string; label: string }[];
  tags?: { label: string; items: string[] };
  releases?: {
    label: string;
    items: { artist: string; slate: string }[];
  };
  modes?: { kicker: string; title: string; body: string }[];
  modesConnector?: string;
};

export type TimelinePhase = {
  name: string;
  window: string;
  detail: string;
};

export type InvestmentModel = {
  name: string;
  amount?: string;
  bestFor: string;
  howWeScope: string;
};

export type InvestmentHighlight = {
  label: string;
  amount: string;
  cadence: string;
  detail: string;
  secondary?: { amount: string; label: string };
};

export type Proposal = {
  slug: string;
  clientName: string;
  clientUrl?: string;
  clientIndustry: string;
  summary: string;
  preparedFor: string;
  preparedDate: string;
  validUntil?: string;
  status: ProposalStatus;
  isTemplate?: boolean;
  heroEyebrow: string;
  heroTitle: string;
  heroAccent: string;
  intro: string;
  visual?: ProposalVisual;
  opportunity: {
    title: string;
    body: string;
    bullets: string[];
  };
  why: {
    title: string;
    body: string;
    points: { title: string; body: string }[];
  };
  approach: {
    title: string;
    body: string;
    steps: { number: string; title: string; body: string }[];
  };
  scope: {
    title: string;
    body: string;
    items: ScopeItem[];
  };
  timeline: {
    title: string;
    body: string;
    phases: TimelinePhase[];
  };
  investment: {
    title: string;
    body: string;
    highlight?: InvestmentHighlight;
    models: InvestmentModel[];
    note: string;
  };
  success: {
    title: string;
    body: string;
    metrics: string[];
  };
  nextSteps: {
    title: string;
    body: string;
    steps: string[];
  };
  sections: ProposalSection[];
};

export const DEFAULT_SECTIONS: ProposalSection[] = [
  { id: "opportunity", title: "The Opportunity", status: "ready", icon: "sparkles" },
  { id: "why", title: "Why Thinkswell", status: "ready", icon: "compass" },
  { id: "approach", title: "How We Work", status: "ready", icon: "layers" },
  { id: "scope", title: "Scope of Work", status: "ready", icon: "map" },
  { id: "timeline", title: "Timeline", status: "ready", icon: "calendar" },
  { id: "investment", title: "Investment", status: "ready", icon: "investment" },
  { id: "next", title: "Next Steps", status: "ready", icon: "check" },
];

/**
 * Duplicate this object (or call `createProposal`) to add a client proposal.
 * Register it in `proposals` below — the hub and /p/[slug] pick it up automatically.
 */
export function createProposal(
  input: Omit<Proposal, "sections"> & { sections?: ProposalSection[] },
): Proposal {
  return {
    ...input,
    sections: input.sections ?? DEFAULT_SECTIONS,
  };
}

export const thinkswellPartnership = createProposal({
  slug: "thinkswell-partnership",
  clientName: "Thinkswell Partnership",
  clientUrl: "https://thinkswell.com",
  clientIndustry: "Entertainment & hospitality",
  summary:
    "The standard Thinkswell engagement template — strategy, paid media, brand, web, music, and social — scoped for entertainment and hospitality brands.",
  preparedFor: "A Thinkswell partner",
  preparedDate: "2026-08-20",
  validUntil: "2026-09-19",
  status: "template",
  isTemplate: true,
  heroEyebrow: "Partnership proposal",
  heroTitle: "A marketing partner built for the brands that make Nashville run.",
  heroAccent: "Think smart.",
  intro:
    "This is Thinkswell’s standard partnership proposal. Duplicate it for a client, fill in the brand-specific opportunity and investment, and send a shareable link from proposal.thinkswell.com.",
  opportunity: {
    title: "The brands that fill rooms, move tickets, and build fans deserve more than a generic shop.",
    body: "Entertainment and hospitality marketing is a different sport. The calendar is live. The product is a night, a tour, a table, a stream. The audience is emotional, local, and impatient. Thinkswell exists for that work — a full-service Nashville agency that treats strategy, media, brand, and web as one system, not a stack of vendors.",
    bullets: [
      "You need a playbook, not a pile of ads — audience, offer, creative, and measurement in one line of sight.",
      "You need media that respects the calendar — onsales, residencies, festival weekends, and slow Tuesdays.",
      "You need a brand that still means something when the campaign ends — identity, site, and social that hold up.",
    ],
  },
  why: {
    title: "Nashville isn’t just where we work. It’s in the work.",
    body: "Thinkswell is a full-service marketing agency in Nashville built for entertainment and hospitality brands. We work with a select group of clients — which means every brand gets full attention, full network, and full creative energy. Strategy, paid media, brand development, and web, under one roof.",
    points: [
      {
        title: "Select clients. Full send.",
        body: "We hyper-focus on a small roster so every initiative gets senior attention — not a junior bench rotating through a giant account list.",
      },
      {
        title: "Entertainment DNA.",
        body: "Artists, venues, live events, and hospitality brands. We know what moves tickets, fills seats, and turns a good night into a lasting brand.",
      },
      {
        title: "One team, six capabilities.",
        body: "Strategy, paid, brand, web, music, and social sit together. No handoff tax. No strategy deck that never gets built.",
      },
    ],
  },
  approach: {
    title: "Three steps. Zero fluff.",
    body: "Every engagement starts the same way — with clarity, moves with purpose, and ends with proof.",
    steps: [
      {
        number: "01",
        title: "We start with why.",
        body: "Before we spend a dollar or design a pixel, we dig into the brand, the audience, and the goals. We build a roadmap that connects the story to the people who need to hear it. No guesswork. No generic playbooks.",
      },
      {
        number: "02",
        title: "Then we move.",
        body: "Strategy without action is just a document. The team executes across paid media, creative, web, and social — fast, intentional, and built to perform. Every asset, every ad, every post is made to move something real.",
      },
      {
        number: "03",
        title: "And we deliver.",
        body: "We measure what matters — ticket sales, streams, bookings, revenue. You’ll always know what’s working and why. We don’t hide behind vanity metrics. We show up with numbers and keep optimizing until they move.",
      },
    ],
  },
  scope: {
    title: "Six services. One team. Here’s what each one actually includes.",
    body: "Toggle what’s in-scope for the client. Everything below is available; include only what the engagement needs. Each service lists the concrete work, not a slogan.",
    items: [
      {
        capabilityId: "strategy",
        included: true,
        notes:
          "The playbook the rest of the engagement runs on — audience, offer, architecture, and the KPI board. Nothing launches until this is honest.",
      },
      {
        capabilityId: "paid",
        included: true,
        notes:
          "Always-on and calendar-led campaigns across Meta, Google, TikTok, and programmatic as the brief requires. Media spend sits with the client; we recommend and run it.",
      },
      {
        capabilityId: "brand",
        included: true,
        notes:
          "Identity, messaging, and guidelines — or a sharpening pass if the brand already has a system. Built to still mean something when the campaign ends.",
      },
      {
        capabilityId: "web",
        included: true,
        notes:
          "Site, landing experiences, and conversion work tied to the campaigns we’re running — tickets, covers, lists, merch, bookings.",
      },
      {
        capabilityId: "music",
        included: false,
        notes:
          "Turn on for artists, tours, labels, and live-music events. Release campaigns, DSP posture, fanbase, and onsale support.",
      },
      {
        capabilityId: "social",
        included: true,
        notes:
          "Content system, community, and amplification so organic and paid pull in the same direction. Calendar matches the live calendar.",
      },
    ],
  },
  timeline: {
    title: "A first 90 days with a point of view.",
    body: "Exact dates move with the client’s calendar. This is the default partnership rhythm — swap in onsales, residencies, or opening night as needed.",
    phases: [
      {
        name: "Days 1–14 · Discovery",
        window: "Weeks 1–2",
        detail:
          "Stakeholder interviews, audience and competitive read, channel audit, and a written roadmap. Nothing launches until we agree on the why.",
      },
      {
        name: "Days 15–45 · Build",
        window: "Weeks 3–6",
        detail:
          "Creative system, tracking, site or landing work, and media structure. First campaigns and content calendar go live with a clear test plan.",
      },
      {
        name: "Days 46–90 · Prove",
        window: "Weeks 7–12",
        detail:
          "Optimize against the KPIs we set in discovery. Monthly readout, creative iteration, and a recommendation for the next quarter.",
      },
    ],
  },
  investment: {
    title: "Scoped to the work — not a menu of packages.",
    body: "Fill in numbers before you send this to a client. The models below are how Thinkswell typically structures an engagement. Discovery is how we land the right one.",
    models: [
      {
        name: "Partnership retainer",
        bestFor: "Ongoing growth for a venue, hospitality group, or artist brand",
        howWeScope: "Monthly after a 30-day discovery. Scope covers strategy plus the in-scope capabilities above.",
      },
      {
        name: "Campaign sprint",
        bestFor: "Tours, festival weekends, openings, and launches with a hard date",
        howWeScope: "Fixed scope, typically 4–8 weeks. Media budget sits with the client; we recommend and run it.",
      },
      {
        name: "Build project",
        bestFor: "Brand systems, websites, and identity work with a defined finish line",
        howWeScope: "Milestone-based. Discovery, design, build, launch — invoiced against deliverables.",
      },
    ],
    note: "Media spend is separate from Thinkswell fees. Replace this note with the actual investment, payment schedule, and what’s out of scope before sharing.",
  },
  success: {
    title: "We measure what fills rooms and grows brands.",
    body: "Vanity metrics stay in the appendix. The scoreboard is the business.",
    metrics: [
      "Tickets, covers, bookings, and revenue influenced",
      "Cost per result on the campaigns we actually run",
      "Owned-channel growth that still matters after the flight",
      "Creative and landing performance — what the audience responded to, and what we kill",
    ],
  },
  nextSteps: {
    title: "If this is the work, here’s how we start.",
    body: "We respond within one business day. No spam, ever.",
    steps: [
      "Reply with the dates that matter — onsale, opening, tour, or the quarter you want to own.",
      "We schedule a working session (not a pitch theater) to pressure-test goals and constraints.",
      "Thinkswell returns a scoped version of this proposal with investment, timeline, and in-scope capabilities locked.",
      "Kickoff begins with discovery. Nothing launches until we agree on the why.",
    ],
  },
});

export const blackRiverEntertainment = createProposal({
  slug: "black-river-entertainment",
  clientName: "Black River Entertainment",
  clientUrl: "https://www.blackriverent.com",
  clientIndustry: "Record label · Music",
  summary:
    "Fractional CMO for Black River’s remaining 2026 priority releases — digital marketing support and strategic social direction, all-in for campaign planning, reporting, content, and creative.",
  preparedFor: "Black River Entertainment",
  preparedDate: "2026-08-21",
  validUntil: "2026-09-19",
  status: "draft",
  heroEyebrow: "Partnership proposal",
  heroTitle:
    "A Fractional CMO on the 2026 priority slate — digital marketing and strategic social, with the teams already in the building.",
  heroAccent: "Think smart.",
  intro:
    "Black River asked for digital marketing support and strategic social media direction on the remaining 2026 priority releases: John Cooper Albright, Matt Stell, MaRynn Taylor, and a TBA male artist. Thinkswell will sit in the Fractional CMO seat for that slate — campaign planning, reporting, content, and creative, all-in. The Orchard currently advises and admins paid media; we can take that when you’re ready to shift.",
  visual: {
    stats: [
      { value: "$12,500", label: "All-in monthly" },
      { value: "Rest of 2026", label: "Priority slate" },
      { value: "4 artists", label: "Digital + social" },
    ],
    releases: {
      label: "2026 priority releases",
      items: [
        { artist: "John Cooper Albright", slate: "1 single" },
        { artist: "Matt Stell", slate: "2–3 singles" },
        { artist: "MaRynn Taylor", slate: "1 single + 1 EP" },
        { artist: "TBA male artist", slate: "TBD, as discussed" },
      ],
    },
    modesConnector: "All-in",
    modes: [
      {
        kicker: "In the retainer",
        title: "Digital marketing",
        body: "Written plan, paid strategy, DSP posture, conversion, budget recs, and a readout after each named 2026 release — not a pile of ads without a plan.",
      },
      {
        kicker: "In the retainer",
        title: "Strategic social",
        body: "System, briefs, campaign content, and a quality bar per artist. We set the direction, then ship with the teams already around them.",
      },
    ],
  },
  opportunity: {
    title: "The rest of 2026 has a slate. It needs a digital and social plan — not another vendor on one single.",
    body: "Black River named the work: digital marketing support and strategic social media direction on the priority releases still on the board this year. John Cooper Albright has a single. Matt Stell has two, maybe three. MaRynn Taylor has a single and an EP. A TBA male artist is in conversation. The Orchard currently advises and admins paid media — and Grace flagged that Black River is open to shifting that in the coming months. Thinkswell will sit in the Fractional CMO chair for this slate: a point of view per release, a calendar that holds, and a partner who can work with management, publicity, radio, digital, The Orchard, and creative without stepping on them.",
    bullets: [
      "Digital marketing and strategic social built around the named 2026 releases — Albright, Stell, Taylor, and the TBA male artist.",
      "All-in for campaign planning, reporting, content, and creative. Not a strategy deck that someone else has to finish.",
      "Paid can stay with The Orchard until Black River wants to move it. We plan for that shift; we don’t force it.",
    ],
  },
  why: {
    title: "Nashville isn’t just where we work. It’s in the work.",
    body: "Thinkswell is a full-service marketing agency in Nashville built for entertainment brands. We hyper-focus on a small roster of clients — which means Black River gets senior attention, not a junior bench rotating through a giant account list. Music marketing is native here: artists, tours, live events, and the unglamorous work of making a campaign actually hold.",
    points: [
      {
        title: "Select clients. Full send.",
        body: "We don’t run a factory of retainers. Black River gets senior people on the 2026 slate — strategy, judgment, content, and follow-through.",
      },
      {
        title: "Entertainment DNA.",
        body: "Twenty-plus years marketing country artists, tours, and live events in this town. We know how label, management, radio, digital, and touring actually fit together.",
      },
      {
        title: "Leadership, not a takeover.",
        body: "We work alongside the teams each artist already has — including The Orchard on paid until you want that to move. We don’t replace publicity, radio, or a manager. We make sure digital and social have a point of view and a plan.",
      },
    ],
  },
  approach: {
    title: "One Fractional CMO seat. Digital and social, all-in.",
    body: "Thinkswell functions as Black River’s Fractional CMO for the remaining 2026 priority releases — digital marketing support and strategic social direction, with campaign planning, reporting, content, and creative in the retainer.",
    steps: [
      {
        number: "01",
        title: "Lock the slate.",
        body: "Confirm dates and assets for Albright, Stell, Taylor, and the TBA male artist. Map what’s already in motion with label staff, each artist’s team, and The Orchard. Nothing useful starts until that’s honest.",
      },
      {
        number: "02",
        title: "Install the campaign cadence.",
        body: "A written plan per priority release: digital, social, content, creative, and reporting. Working rhythm with label staff and each artist’s team. Campaigns get a plan before they spend.",
      },
      {
        number: "03",
        title: "Run the rest of 2026. Stand ready on paid.",
        body: "Ship digital and social on each release. Report what moved. The Orchard stays on paid until Black River wants to shift — then Thinkswell can take buying without ripping up the rest of the engagement.",
      },
    ],
  },
  scope: {
    title: "Two services on the slate — with the all-in work named underneath.",
    body: "Black River asked for digital marketing support and strategic social direction on the remaining 2026 priority releases. The $12,500 retainer is all-in for campaign planning, reporting, content, and creative. Buying stays with The Orchard until you move it. Day-to-day community, a full identity rebuild, and artist sites are available — they are not in this retainer.",
    items: [
      {
        title: "2026 priority-release slate",
        icon: "disc",
        included: true,
        notes:
          "Digital and social are built around these campaigns for the balance of 2026 — not a generic roster retainer. Dates and assets lock in kickoff.",
        includes: [
          "John Cooper Albright — 1 single",
          "Matt Stell — 2–3 singles",
          "MaRynn Taylor — 1 single + 1 EP",
          "TBA male artist — TBD, as discussed",
        ],
      },
      {
        title: "Digital marketing support",
        icon: "audio",
        included: true,
        notes:
          "How digital supports radio and live on each priority release. We write the plan, the conversion path, and the brief for the teams already running the channels. The Orchard still buys until Black River shifts it.",
        includes: [
          "Written digital plan per priority release before anything spends",
          "Campaign architecture: singles, EPs, and the story between them",
          "Paid mix, testing plan, and budget recommendations (The Orchard still buys)",
          "DSP posture and conversion so a hear becomes a save, follow, or ticket",
          "Audience path from awareness to stream, follow, ticket, and buy",
          "Budget allocation across the slate and inside each campaign",
          "Briefs for label digital, The Orchard, and any artist-side digital lead",
          "Competitive read on country and adjacent formats that changes the next move",
          "Coordination with touring, management, and promoters on onsales and routing",
          "One marketing plan A&R, publicity, radio, digital, sales, and management can work from",
        ],
      },
      {
        title: "Strategic social direction",
        icon: "share",
        included: true,
        notes:
          "The system, the brief, and campaign content for each named release. We set the quality bar and work with existing content teams rather than replacing them. Day-to-day community stays where it already lives.",
        includes: [
          "Social system and quality bar per artist — not one playbook for the roster",
          "Artist positioning that holds between campaigns, not only the week of a single",
          "Campaign content for each named 2026 release",
          "Content calendar and sequencing so the four campaigns don’t cannibalize each other",
          "Briefs for the teams already making content",
          "Platform-native direction (Reels, TikTok, YouTube, Stories, community posts)",
          "Brand partnerships and collaborations that serve the artist — not a logo on a post",
          "Voice and community guidelines the existing team can actually run",
        ],
      },
      {
        title: "Campaign planning",
        icon: "calendar",
        included: true,
        notes:
          "All-in. A written plan per priority release: digital, social, content, creative, and reporting. Campaigns get a plan before they spend.",
        includes: [
          "Kickoff to lock dates, assets, and goals for Albright, Stell, Taylor, and the TBA artist",
          "Map of what’s already in motion with label staff, each artist’s team, and The Orchard",
          "Written campaign brief per release — objective, audience, offer, channels, KPIs",
          "Shared marketing calendar across the 2026 slate",
          "Working rhythm with Grace, label staff, and each artist’s team",
          "Asset checklist and deadlines so creative isn’t the bottleneck",
          "Priorities and resourcing so every priority release gets a real plan — not only the ones with the most infrastructure",
        ],
      },
      {
        title: "Content & creative",
        icon: "palette",
        included: true,
        notes:
          "All-in. Campaign content and creative from concept through deliverables for these releases. Existing partners and in-house teams can still make work; Thinkswell can too. A full identity rebuild is a separate project.",
        includes: [
          "Campaign concept and art direction for each priority release",
          "Social and digital assets needed to run the campaign (static, short-form, covers, ads)",
          "Copy and messaging aligned to each artist’s voice",
          "Templates and a quality bar existing teams can produce against",
          "Production of campaign content when the artist doesn’t already have a maker",
          "Review and polish of work coming from management or in-house",
          "Not photography crews, video production days, or a full brand-identity rebuild",
        ],
      },
      {
        title: "Reporting",
        icon: "chart",
        included: true,
        notes:
          "All-in. What moved streams, audience, tickets, and why — per release, not a vanity dashboard. The label should be able to use the readout in a marketing meeting.",
        includes: [
          "Measurement plan at kickoff — what we count, where the data lives, what we ignore",
          "Per-release readout the label can actually walk through",
          "Monthly view of what’s working, what’s not, and where recommended spend went",
          "Creative notes — what the audience responded to, and what we kill",
          "Stream, audience, and live-support movement where marketing has a lever",
          "Recommendation for the next campaign before the last one goes cold",
        ],
      },
      {
        capabilityId: "paid",
        included: false,
        notes:
          "The Orchard currently advises and admins paid. Strategy is in this retainer. When Black River wants to shift buying, Thinkswell can take it as a separate SOW or fold it into the retainer.",
        includes: [
          "Buying and trafficking on Meta, Google, TikTok, YouTube, and programmatic as needed",
          "Always-on plus release flights",
          "In-platform creative testing and pacing",
          "Weekly spend-vs-plan reporting",
        ],
      },
      {
        capabilityId: "social",
        included: false,
        notes:
          "Strategic direction and campaign content are in the retainer. Day-to-day community management can be added when an artist doesn’t already have that team.",
        includes: [
          "Daily community management and voice in comments/DMs",
          "Always-on posting between campaigns",
          "Creator/community programs beyond a single release",
        ],
      },
      {
        capabilityId: "brand",
        included: false,
        notes:
          "Positioning and campaign creative direction are in the retainer. A full identity system or guidelines rebuild is a separate project.",
        includes: [
          "Visual identity system (logo, type, color, art direction)",
          "Messaging framework and voice guidelines",
          "Brand guidelines the rest of the team can actually use",
        ],
      },
      {
        capabilityId: "web",
        included: false,
        notes:
          "Not in this retainer. Artist sites, landing pages, and conversion work can be scoped when a campaign needs them.",
        includes: [
          "Artist or campaign landing pages",
          "Site design, build, and launch",
          "Conversion and tracking tied to the release",
        ],
      },
    ],
  },
  timeline: {
    title: "The balance of 2026, mapped to the releases you named.",
    body: "Exact dates move with Black River’s calendar. The point of the rest of this year is to plan and ship digital and social on Albright, Stell, Taylor, and the TBA male artist — and to be ready if paid moves off The Orchard.",
    phases: [
      {
        name: "Now · Lock the slate",
        window: "Weeks 1–2",
        detail:
          "Confirm dates and assets for John Cooper Albright, Matt Stell, MaRynn Taylor, and the TBA male artist. Map what’s already in motion with label staff, each artist’s team, and The Orchard.",
      },
      {
        name: "Through Q4 · Run the 2026 slate",
        window: "Balance of 2026",
        detail:
          "Digital marketing and strategic social on each priority release. Campaign planning, content, creative, and reporting — all-in. Hands-on where the campaign needs it.",
      },
      {
        name: "When you’re ready · Paid shift",
        window: "Coming months",
        detail:
          "The Orchard stays on paid until Black River wants to move. Thinkswell can take buying and trafficking without ripping up the rest of the engagement.",
      },
    ],
  },
  investment: {
    title: "One monthly retainer. All-in for planning, reporting, content, and creative.",
    body: "The $12,500 monthly retainer is all-in for campaign planning, reporting, content, and creative — digital marketing support and strategic social direction on the 2026 priority slate. Media spend stays with Black River. The Orchard currently advises and admins paid; Thinkswell can take that when you want to shift.",
    highlight: {
      label: "Proposed retainer",
      amount: "$12,500",
      cadence: "per month, all-in",
      detail:
        "Campaign planning, reporting, content, and creative across the remaining 2026 priority releases. Starting figure — we can lock it on kickoff.",
      secondary: { amount: "$150,000", label: "annualized" },
    },
    models: [
      {
        name: "Monthly retainer",
        amount: "$12,500",
        bestFor: "Digital marketing and strategic social on the 2026 priority slate",
        howWeScope:
          "All-in for campaign planning, reporting, content, and creative. Fractional CMO seat aimed at Albright, Stell, Taylor, and the TBA male artist.",
      },
      {
        name: "Paid media takeover",
        amount: "When you shift",
        bestFor: "If and when paid moves off The Orchard",
        howWeScope:
          "Buying, trafficking, and always-on. Written as a separate SOW or folded into the retainer. Not assumed on day one.",
      },
    ],
    note: "Proposed starting retainer: $12,500 per month, all-in for campaign planning, reporting, content, and creative ($150,000 annualized). Media spend, photography, video production, influencers, and radio promo buys sit with Black River or the artist. The Orchard continues to advise and admin paid until Black River wants that to move. Term and notice to be confirmed at kickoff.",
  },
  success: {
    title: "We measure whether each priority release had a plan — and whether it moved something.",
    body: "Vanity metrics stay in the appendix. The scoreboard is the 2026 slate.",
    metrics: [
      "Albright, Stell, Taylor, and the TBA male artist each have a written digital and social plan",
      "Campaigns have a strategy before they spend",
      "Content and creative ship on the campaign calendar, not as an afterthought",
      "A readout the label can actually use after each release",
      "The Orchard relationship is clear — stay, or a written plan to shift paid",
      "Movement on streams, audience, and live support where marketing has a lever",
    ],
  },
  nextSteps: {
    title: "If this is the seat, here’s how we start.",
    body: "We respond within one business day. No spam, ever.",
    steps: [
      "Walk the remaining 2026 slate together — Albright, Stell, Taylor, and the TBA male artist.",
      "Map what’s already in motion with The Orchard, Grace, and each artist’s team.",
      "Confirm the $12,500 all-in monthly retainer and a start date.",
      "Kickoff begins with the first priority release. Nothing launches until we agree on the why.",
    ],
  },
  sections: DEFAULT_SECTIONS.map((section) =>
    section.id === "investment" ? { ...section, title: "Budget" } : section,
  ),
});

export const proposals: Proposal[] = [
  blackRiverEntertainment,
  thinkswellPartnership,
];

export function getProposal(slug: string) {
  return proposals.find((proposal) => proposal.slug === slug);
}

export function listProposals() {
  return proposals;
}

export function sectionProgress(proposal: Proposal) {
  const ready = proposal.sections.filter((section) => section.status === "ready").length;
  return { ready, total: proposal.sections.length };
}
