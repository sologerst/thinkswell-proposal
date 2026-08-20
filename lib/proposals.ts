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

export type ScopeItem = {
  capabilityId: (typeof capabilities)[number]["id"];
  included: boolean;
  notes: string;
};

export type TimelinePhase = {
  name: string;
  window: string;
  detail: string;
};

export type InvestmentModel = {
  name: string;
  bestFor: string;
  howWeScope: string;
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

export const proposals: Proposal[] = [thinkswellPartnership];

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
