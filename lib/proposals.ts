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
    title: "Six capabilities. One unified team.",
    body: "Toggle what’s in-scope for the client. Everything below is available; include only what the engagement needs. Copy lives on thinkswell.com if you want the long version.",
    items: [
      {
        capabilityId: "strategy",
        included: true,
        notes: "Kickoff research, positioning, campaign architecture, and the KPI board we’ll run the engagement on.",
      },
      {
        capabilityId: "paid",
        included: true,
        notes: "Always-on and calendar-led campaigns across Meta, Google, TikTok, and programmatic as the brief requires.",
      },
      {
        capabilityId: "brand",
        included: true,
        notes: "Identity, messaging, and guidelines — or a sharpening pass if the brand already has a system.",
      },
      {
        capabilityId: "web",
        included: true,
        notes: "Site, landing experiences, and conversion work tied to the campaigns we’re running.",
      },
      {
        capabilityId: "music",
        included: false,
        notes: "Turn on for artists, tours, labels, and live-music events.",
      },
      {
        capabilityId: "social",
        included: true,
        notes: "Content system, community, and amplification so organic and paid pull in the same direction.",
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
        body: "Campaign planning, paid strategy, reporting, content, and creative on the named 2026 releases — not a pile of ads without a plan.",
      },
      {
        kicker: "In the retainer",
        title: "Strategic social",
        body: "Direction and campaign content for each release. We set the system and the quality bar, then ship with the teams already around the artist.",
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
    title: "The job is the Fractional CMO job — aimed at this 2026 slate.",
    body: "This retainer is all-in for campaign planning, reporting, content, and creative. Digital marketing support and strategic social direction sit on the named remaining-2026 releases. Execution that already lives with an artist’s team or The Orchard stays there until Black River wants it to move.",
    items: [
      {
        title: "2026 priority-release slate",
        icon: "disc",
        included: true,
        notes:
          "John Cooper Albright (1 single), Matt Stell (2–3 singles), MaRynn Taylor (1 single + 1 EP), and a TBA male artist as discussed. Digital and social are built around these campaigns for the balance of 2026.",
      },
      {
        title: "Roster marketing leadership",
        icon: "users",
        included: true,
        notes:
          "A point of view for Albright, Stell, Taylor, and the TBA male artist. Priorities, resourcing, and a quality bar that shows up for every priority release — not only the ones with the most infrastructure.",
      },
      {
        title: "Artist brand & positioning",
        icon: "sparkles",
        included: true,
        notes:
          "Who each artist is in the market, who they’re for, and how that holds up between campaigns — not just the week of a single.",
      },
      {
        title: "Release campaign architecture",
        icon: "disc",
        included: true,
        notes:
          "Singles, EPs, and the story between them on this 2026 slate. The plan, the sequence, and the reason it exists — before anything spends.",
      },
      {
        title: "Marketing calendar & sequencing",
        icon: "calendar",
        included: true,
        notes:
          "Timing across the 2026 priority slate so campaigns don’t cannibalize each other. What’s coming, what waits, and what needs a dedicated push.",
      },
      {
        title: "Cross-functional alignment",
        icon: "waypoints",
        included: true,
        notes:
          "One marketing plan that A&R, publicity, radio, digital, sales, touring, and management can actually work from.",
      },
      {
        title: "Audience development",
        icon: "heart",
        included: true,
        notes:
          "Fanbase growth and conversion — from awareness to stream, follow, ticket, and buy. Built for country and the audiences around it.",
      },
      {
        title: "Digital marketing support",
        icon: "audio",
        included: true,
        notes:
          "How digital supports radio and live on each priority release: DSP posture, content, conversion, and the brief for the teams already running the channels.",
      },
      {
        title: "Strategic social media direction",
        icon: "share",
        included: true,
        notes:
          "Strategic social for each 2026 priority release — the system, the brief, and campaign content. We set the quality bar, then work with existing content teams rather than replacing them. Day-to-day community can stay where it already lives.",
      },
      {
        title: "Paid media strategy",
        icon: "megaphone",
        included: true,
        notes:
          "Mix, testing, and budget recommendations. The Orchard currently advises and admins paid media; Black River is open to shifting that in the coming months. Strategy is in this retainer now. Buying and trafficking can move to Thinkswell when you’re ready.",
      },
      {
        title: "Creative direction",
        icon: "palette",
        included: true,
        notes:
          "Campaign content and creative is in the all-in retainer — planning through deliverables for these releases. Existing partners and in-house teams can still make work; Thinkswell can too. A full identity rebuild is a separate project.",
      },
      {
        title: "Brand partnerships & collaborations",
        icon: "handshake",
        included: true,
        notes:
          "Marketing collaborations, brand partnerships, and synch-adjacent opportunities that actually serve the artist — not just a logo on a post.",
      },
      {
        title: "Touring & live marketing",
        icon: "ticket",
        included: true,
        notes:
          "Coordination with touring, management, and promoters so onsales, routing, and content support the same story as the release.",
      },
      {
        title: "Budget planning & allocation",
        icon: "dollar",
        included: true,
        notes:
          "Where the money goes across the 2026 slate and inside a campaign. Recommendations, tradeoffs, and a clear record of what we spent against.",
      },
      {
        title: "Team & vendor oversight",
        icon: "usercog",
        included: true,
        notes:
          "Working with managers, publicists, digital, The Orchard, creative, and freelancers already on the artist. We don’t add a parallel org chart.",
      },
      {
        title: "Measurement, reporting & insight",
        icon: "chart",
        included: true,
        notes:
          "What moved streams, audience, tickets, and why — per release, not a vanity dashboard. Reporting is in the all-in retainer.",
      },
      {
        title: "Competitive & market intelligence",
        icon: "radar",
        included: true,
        notes:
          "What’s working in country and adjacent formats, and what it means for Black River’s next move — not a research binder that sits in a drawer.",
      },
      {
        capabilityId: "paid",
        included: false,
        notes:
          "The Orchard currently advises and admins paid. When Black River wants to make that shift, Thinkswell can take buying, trafficking, and always-on — written as a separate SOW or folded into the retainer.",
      },
      {
        capabilityId: "social",
        included: false,
        notes:
          "Strategic direction and campaign content are in the retainer. Day-to-day community management can be added when a client doesn’t already have that team.",
      },
      {
        capabilityId: "brand",
        included: false,
        notes:
          "Brand strategy and creative direction are in the retainer. A full identity system or guidelines rebuild is a separate project.",
      },
      {
        capabilityId: "web",
        included: false,
        notes:
          "Not in this retainer. Artist sites, landing pages, and conversion work can be scoped when a campaign needs them.",
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
