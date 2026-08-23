export const brand = {
  name: "Thinkswell",
  tagline: "Think smart.",
  description:
    "Thinkswell is a full-service marketing agency in Nashville built for entertainment and hospitality brands.",
  url: "https://thinkswell.com",
  hubUrl: "https://proposal.thinkswell.com",
  analysisUrl: "https://analysis.thinkswell.com",
  email: "tim@thinkswell.com",
  phone: "",
  address: {
    line1: "1120 4th Avenue South",
    city: "Nashville",
    state: "TN",
    zip: "37210",
  },
  social: {
    instagram: "https://www.instagram.com/thinkswell",
    facebook: "https://www.facebook.com/thinkswell",
    linkedin: "https://www.linkedin.com/company/thinkswell",
  },
  founder: {
    name: "Tim Gerst",
    title: "CEO & Founder",
  },
} as const;

export const capabilities = [
  {
    id: "strategy",
    number: "01",
    title: "Marketing Strategy",
    href: "https://thinkswell.com/services/marketing-strategy",
    summary:
      "Audience research, competitive analysis, campaign architecture, and KPI frameworks — a playbook that works for entertainment and hospitality brands.",
    deliverables: [
      "Audience & competitive research",
      "Campaign architecture",
      "KPI framework",
    ],
    includes: [
      "Kickoff interviews with stakeholders who actually own the P&L",
      "Audience research and a competitive read in the category you actually compete in",
      "Positioning, offer, and the story the rest of the work has to serve",
      "Campaign architecture — sequence, channels, and why each exists",
      "KPI framework tied to tickets, covers, streams, bookings, or revenue — not vanity",
      "Measurement plan: what we track, where the data lives, what we ignore",
      "90-day roadmap with owners, dates, and the first tests we’ll run",
      "Working session to lock the plan before a dollar or a pixel moves",
    ],
  },
  {
    id: "paid",
    number: "02",
    title: "Paid Media",
    href: "https://thinkswell.com/services/paid-media",
    summary:
      "Meta, Google, TikTok, and programmatic campaigns with a data-first approach — maximizing reach, engagement, and ROI.",
    deliverables: ["Meta & Google Ads", "TikTok campaigns", "Programmatic buying"],
    includes: [
      "Account, pixel, and conversion setup (or a clean-up pass on what’s already there)",
      "Media mix recommendation across Meta, Google, TikTok, YouTube, and programmatic",
      "Always-on plus calendar-led flights — onsales, residencies, launches, slow Tuesdays",
      "Audience build, exclusion lists, and test-and-kill structure",
      "Creative testing in-platform: hooks, offers, landing matches",
      "Buying, trafficking, and daily/weekly pacing against the plan",
      "Budget recommendations and a clear record of spend vs. results",
      "Performance reporting the operator can read — CPA, tickets, bookings, ROAS",
    ],
  },
  {
    id: "brand",
    number: "03",
    title: "Brand Development",
    href: "https://thinkswell.com/services/brand-development",
    summary:
      "Visual identities, messaging frameworks, and brand systems that resonate with audiences and stand the test of time.",
    deliverables: ["Visual identity", "Messaging frameworks", "Brand guidelines"],
    includes: [
      "Brand audit — what still works, what’s dated, what the market actually hears",
      "Positioning and messaging framework (who it’s for, what it stands for, how it talks)",
      "Visual identity: logo system, color, type, photography/art direction",
      "Voice and copy guidelines the rest of the team can actually write from",
      "Brand guidelines (the living system, not a 80-page PDF nobody opens)",
      "Launch kit: social, web, and campaign applications of the new system",
      "Sharpening pass option if the identity already exists and just needs to hold up",
    ],
  },
  {
    id: "web",
    number: "04",
    title: "Web Development",
    href: "https://thinkswell.com/services/web-development",
    summary:
      "Custom websites and digital experiences that represent the brand at its highest level — built to convert.",
    deliverables: [
      "Website design",
      "Development & launch",
      "Conversion-focused UX",
    ],
    includes: [
      "Information architecture and UX for the jobs the site actually has to do",
      "Custom design that matches the brand at its highest level — not a template with a logo",
      "Development, CMS, and launch (including redirects, SEO basics, and QA)",
      "Landing experiences tied to the campaigns we’re running",
      "Conversion work: tickets, covers, lists, merch, bookings",
      "Analytics, pixels, and event tracking wired to the KPI board",
      "Handoff, training, and a punch-list after launch",
    ],
  },
  {
    id: "music",
    number: "05",
    title: "Music Marketing",
    href: "https://thinkswell.com/services/music-marketing",
    summary:
      "20+ years marketing country artists, live tours, and music events in Nashville — tickets, fanbases, and lasting brands.",
    deliverables: ["Tour marketing", "Fanbase growth", "Release campaigns"],
    includes: [
      "Release campaign planning — singles, EPs, albums, and the story between them",
      "DSP posture: playlist strategy, pitch materials, and conversion from hear → save/follow",
      "Tour and onsale support coordinated with management, promoters, and routing",
      "Fanbase growth across owned, social, and streaming — not just a follower count",
      "Content and creative for the campaign, built for country and the audiences around it",
      "Alignment with radio, publicity, digital, sales, and touring so one plan exists",
      "Reporting on streams, audience, tickets, and what actually moved",
    ],
  },
  {
    id: "social",
    number: "06",
    title: "Social Media",
    href: "https://thinkswell.com/services/social-media",
    summary:
      "Content strategy, community management, and paid amplification so social actually grows the business.",
    deliverables: [
      "Content strategy",
      "Community management",
      "Paid amplification",
    ],
    includes: [
      "Content strategy and a calendar that matches the live calendar — not a void to fill",
      "Platform-native creative direction (Reels, TikTok, Stories, YouTube, community posts)",
      "Campaign content for launches, onsales, residencies, and always-on",
      "Community management and voice — or briefs for the team already in the comments",
      "Paid amplification so organic and paid pull in the same direction",
      "Asset systems and a quality bar existing creators can make to",
      "Reporting on reach, community, and the business outcomes social is supposed to drive",
    ],
  },
] as const;
