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
  modes?: { kicker: string; title: string; body: string }[];
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
    "Fractional VP of Marketing for the Black River roster — strategy across every client, working alongside existing artist teams, with deeper involvement where it’s needed.",
  preparedFor: "Black River Entertainment",
  preparedDate: "2026-08-20",
  validUntil: "2026-09-19",
  status: "draft",
  heroEyebrow: "Partnership proposal",
  heroTitle:
    "A VP of Marketing for the Black River roster — working with the teams already in the building.",
  heroAccent: "Think smart.",
  intro:
    "Black River needs someone who can sit in the VP of Marketing seat: set the strategy for the roster, raise the floor for every campaign, and go deeper with the artists who need a hands-on partner. Thinkswell will be that person — not a vendor dropping into one release, and not a replacement for the teams already around those artists.",
  visual: {
    stats: [
      { value: "$12,500", label: "Monthly retainer" },
      { value: "Full roster", label: "Every Black River client" },
      { value: "Two speeds", label: "Hands-on or oversight" },
    ],
    tags: {
      label: "In the room",
      items: [
        "Kelsea Ballerini",
        "Chris Young",
        "MaRynn Taylor",
        "Developing roster",
      ],
    },
    modes: [
      {
        kicker: "Speed one",
        title: "Hands-on",
        body: "Priority campaigns and clients that need Thinkswell in the working sessions — the plan, the brief, the readout, and the next move.",
      },
      {
        kicker: "Speed two",
        title: "Oversight",
        body: "Artists who already have a team. We set the playbook, gut-check the work, and stay close enough to catch it before it ships sideways.",
      },
    ],
  },
  opportunity: {
    title: "The roster needs marketing leadership — not another vendor on one release.",
    body: "Black River Entertainment is a Nashville independent with a flagship in Kelsea Ballerini, a proven catalog artist in Chris Young, developing names like MaRynn Taylor, and a working bench around them — plus publishing, management, and historic rooms on Music Row. The gap is not “someone to run ads.” It is someone who can sit in the VP of Marketing chair: a point of view for every client, a calendar that holds, and a partner who can work with management, publicity, radio, digital, and creative without stepping on them. Some clients will need Thinkswell in the room. Others already have strong teams — those need a senior strategist: the playbook, the gut-check, the readout. This engagement is built for both.",
    bullets: [
      "One marketing brain across the roster, so developing artists get the same quality of thinking as the flagship.",
      "Work with existing teams, not around them — management, label staff, publicists, digital, and creative stay in their lanes.",
      "Intensity that flexes: hands-on for the campaigns that need it, oversight for the ones that don’t.",
    ],
  },
  why: {
    title: "Nashville isn’t just where we work. It’s in the work.",
    body: "Thinkswell is a full-service marketing agency in Nashville built for entertainment brands. We hyper-focus on a small roster of clients — which means Black River gets senior attention, not a junior bench rotating through a giant account list. Music marketing is native here: artists, tours, live events, and the unglamorous work of making a campaign actually hold.",
    points: [
      {
        title: "Select clients. Full send.",
        body: "We don’t run a factory of retainers. Black River gets the people who would otherwise be in the VP seat — strategy, judgment, and follow-through.",
      },
      {
        title: "Entertainment DNA.",
        body: "Twenty-plus years marketing country artists, tours, and live events in this town. We know how label, management, radio, digital, and touring actually fit together.",
      },
      {
        title: "Leadership, not a takeover.",
        body: "We work alongside the teams each artist already has. We don’t replace publicity, radio, or a manager. We make sure marketing has a point of view and a plan.",
      },
    ],
  },
  approach: {
    title: "One VP seat. Two speeds.",
    body: "Thinkswell functions as Black River’s VP of Marketing — overseeing strategy for every client, then dialing involvement up or down against the calendar and the team already in place.",
    steps: [
      {
        number: "01",
        title: "Map the roster.",
        body: "Who’s on deck, who has a team, what the next 90 days look like, and where we should be hands-on versus oversight. Nothing useful starts until that’s honest.",
      },
      {
        number: "02",
        title: "Install the VP cadence.",
        body: "Priorities, budgets, creative direction, and a working rhythm with label staff and each artist’s team. Campaigns get a written plan before they spend.",
      },
      {
        number: "03",
        title: "Run two speeds.",
        body: "Direct involvement on the campaigns that need it. Playbook, review, and course-correct on the ones that don’t. Intensity stays fluid as releases, tours, and teams change.",
      },
    ],
  },
  scope: {
    title: "The job is the VP of Marketing job.",
    body: "This retainer covers the work a VP of Marketing would traditionally own at a record label — strategy, planning, and oversight across the roster. Execution that already lives with an artist’s team stays there. Thinkswell steps in more directly when a client needs it.",
    items: [
      {
        title: "Roster marketing leadership",
        icon: "users",
        included: true,
        notes:
          "A point of view for every Black River client. Priorities, resourcing, and a quality bar that doesn’t only show up for the flagship.",
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
          "Singles, albums, deluxe, anniversary, and the story between them. The plan, the sequence, and the reason it exists.",
      },
      {
        title: "Marketing calendar & sequencing",
        icon: "calendar",
        included: true,
        notes:
          "Roster-level timing so campaigns don’t cannibalize each other. What’s coming, what waits, and what needs a dedicated push.",
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
        title: "Streaming, DSP & digital strategy",
        icon: "audio",
        included: true,
        notes:
          "How digital supports radio and live: DSP posture, content, conversion, and the brief for the teams already running the channels.",
      },
      {
        title: "Social & content direction",
        icon: "share",
        included: true,
        notes:
          "The system and the brief. We set the strategy and the quality bar, then work with existing content teams rather than replacing them.",
      },
      {
        title: "Paid media strategy",
        icon: "megaphone",
        included: true,
        notes:
          "Mix, testing, and budget recommendations. Buying and trafficking can stay with existing teams, or Thinkswell can take it on as a separate scope.",
      },
      {
        title: "Creative direction",
        icon: "palette",
        included: true,
        notes:
          "Campaign creative, visual language, and a quality bar. We direct; existing creative partners and in-house teams still make the work.",
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
          "Where the money goes across the roster and inside a campaign. Recommendations, tradeoffs, and a clear record of what we spent against.",
      },
      {
        title: "Team & vendor oversight",
        icon: "usercog",
        included: true,
        notes:
          "Working with managers, publicists, digital, creative, and freelancers already on the artist. We don’t add a parallel org chart.",
      },
      {
        title: "Measurement, reporting & insight",
        icon: "chart",
        included: true,
        notes:
          "What moved streams, audience, tickets, and why. A monthly readout the label can use — not a vanity dashboard.",
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
          "Strategy is in the retainer. Media buying, trafficking, and always-on paid can be added per client when Black River wants Thinkswell to run it.",
      },
      {
        capabilityId: "social",
        included: false,
        notes:
          "Direction is in the retainer. Day-to-day community management and content production can be added when a client doesn’t already have that team.",
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
    title: "A first 90 days that actually maps the roster.",
    body: "Exact dates move with Black River’s release calendar. The point of the first quarter is to know every client, install the cadence, and prove the two-speed model.",
    phases: [
      {
        name: "Days 1–21 · Roster read",
        window: "Weeks 1–3",
        detail:
          "Interviews across the label and each artist’s team. Release and touring calendar. A working agreement per client: hands-on, shared, or oversight.",
      },
      {
        name: "Days 22–45 · Playbooks live",
        window: "Weeks 4–6",
        detail:
          "Written strategy for every active client. KPI board. First priority campaigns in motion with the teams already on them.",
      },
      {
        name: "Days 46–90 · Prove the cadence",
        window: "Weeks 7–12",
        detail:
          "Working sessions, campaign reviews, and a monthly roster readout. Adjust intensity as the calendar changes. Recommendation for the next quarter.",
      },
    ],
  },
  investment: {
    title: "One monthly retainer. The VP seat, not a menu of packages.",
    body: "Thinkswell functions as Black River’s VP of Marketing for a single monthly fee. Media, production, and extra execution sit outside it — and can be added per client when you want more than strategy.",
    highlight: {
      label: "Proposed retainer",
      amount: "$12,500",
      cadence: "per month",
      detail:
        "Fractional VP of Marketing across the Black River roster. Starting figure — we can lock it on kickoff.",
      secondary: { amount: "$150,000", label: "annualized" },
    },
    models: [
      {
        name: "Monthly retainer",
        amount: "$12,500",
        bestFor: "Ongoing marketing leadership for every Black River client",
        howWeScope:
          "Strategy, planning, and oversight across the roster. Hands-on where the artist needs it; playbook and review where their team is already staffed.",
      },
      {
        name: "Optional execution",
        amount: "Scoped separately",
        bestFor: "When a client needs Thinkswell to buy media, run social, or build a site",
        howWeScope:
          "Written as a separate SOW. Not assumed in the $12,500 retainer.",
      },
    ],
    note: "Proposed starting retainer: $12,500 per month ($150,000 annualized). Media spend, production, photography, video, influencers, and radio promo buys sit with Black River or the artist. Term and notice to be confirmed at kickoff.",
  },
  success: {
    title: "We measure whether marketing actually has a plan — and whether it moved something.",
    body: "Vanity metrics stay in the appendix. The scoreboard is the roster.",
    metrics: [
      "Every active client has a written marketing plan — not just the flagship",
      "Campaigns have a strategy before they spend",
      "Existing teams know who owns what — less overlap, fewer dropped balls",
      "Movement on streams, audience, and live support where marketing has a lever",
      "A monthly readout the label can actually use",
      "A clear record of which clients needed hands-on vs. oversight, and why",
    ],
  },
  nextSteps: {
    title: "If this is the seat, here’s how we start.",
    body: "We respond within one business day. No spam, ever.",
    steps: [
      "Walk the current roster and the next 90 days of releases together.",
      "Mark which clients need hands-on Thinkswell and which need oversight.",
      "Confirm the $12,500 monthly retainer and a start date.",
      "Kickoff begins with the roster read. Nothing launches until we agree on the why.",
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
