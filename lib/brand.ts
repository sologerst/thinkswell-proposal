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
      "Audience research, competitive analysis, campaign architecture, and KPI frameworks. A playbook built for entertainment and hospitality brands.",
    deliverables: [
      "Audience & competitive research",
      "Campaign architecture",
      "KPI framework",
    ],
    includes: [
      "Kickoff with the people who own the numbers",
      "Audience research and a competitive look at who you're up against",
      "Positioning, offer, and the story the rest of the work has to serve",
      "Campaign architecture: sequence, channels, and why each one is there",
      "KPIs tied to tickets, covers, streams, bookings, or revenue",
      "Measurement plan: what we track, where the data lives, what we skip",
      "90-day roadmap with owners, dates, and the first tests",
      "Working session to lock the plan before we spend or launch",
    ],
  },
  {
    id: "paid",
    number: "02",
    title: "Paid Media",
    href: "https://thinkswell.com/services/paid-media",
    summary:
      "Meta, Google, TikTok, and programmatic campaigns with a data-first approach. Built to grow reach, engagement, and ROI.",
    deliverables: ["Meta & Google Ads", "TikTok campaigns", "Programmatic buying"],
    includes: [
      "Account, pixel, and conversion setup, or a cleanup of what's already there",
      "Media mix across Meta, Google, TikTok, YouTube, and programmatic",
      "Always-on plus flights for onsales, residencies, launches, and slow weeks",
      "Audience build, exclusions, and a test-and-kill structure",
      "Creative testing in-platform: hooks, offers, landing pages",
      "Buying, trafficking, and pacing against the plan",
      "Budget recs and a clear record of spend vs. results",
      "Reporting you can use in a meeting: CPA, tickets, bookings, ROAS",
    ],
  },
  {
    id: "brand",
    number: "03",
    title: "Brand Development",
    href: "https://thinkswell.com/services/brand-development",
    summary:
      "Visual identities, messaging frameworks, and brand systems that hold up with an audience over time.",
    deliverables: ["Visual identity", "Messaging frameworks", "Brand guidelines"],
    includes: [
      "Brand audit: what still works, what's dated, how the market hears you",
      "Positioning and messaging: who it's for, what it stands for, how it talks",
      "Visual identity: logo system, color, type, photography and art direction",
      "Voice and copy guidelines the rest of the team can write from",
      "Brand guidelines the team can open and use",
      "Launch kit for social, web, and campaign applications",
      "Sharpening pass if the identity already exists and just needs to hold up",
    ],
  },
  {
    id: "web",
    number: "04",
    title: "Web Development",
    href: "https://thinkswell.com/services/web-development",
    summary:
      "Custom websites and digital experiences that represent the brand well and are built to convert.",
    deliverables: [
      "Website design",
      "Development & launch",
      "Conversion-focused UX",
    ],
    includes: [
      "Information architecture and UX for the jobs the site has to do",
      "Custom design that matches the brand instead of dropping a logo on a template",
      "Development, CMS, and launch, including redirects, SEO basics, and QA",
      "Landing experiences tied to the campaigns we're running",
      "Conversion work: tickets, covers, lists, merch, bookings",
      "Analytics, pixels, and event tracking wired to the KPI board",
      "Handoff, training, and a punch list after launch",
    ],
  },
  {
    id: "music",
    number: "05",
    title: "Music Marketing",
    href: "https://thinkswell.com/services/music-marketing",
    summary:
      "20+ years marketing country artists, live tours, and music events in Nashville. Tickets, fanbases, and brands that last.",
    deliverables: ["Tour marketing", "Fanbase growth", "Release campaigns"],
    includes: [
      "Release campaign planning for singles, EPs, albums, and the story between them",
      "DSP posture: playlist strategy, pitch materials, converting a listen into a save or follow",
      "Tour and onsale support with management, promoters, and routing",
      "Fanbase growth across owned, social, and streaming",
      "Content and creative built for country and the people around it",
      "Alignment with radio, publicity, digital, sales, and touring so there's one plan",
      "Reporting on streams, audience, tickets, and what moved",
    ],
  },
  {
    id: "social",
    number: "06",
    title: "Social Media",
    href: "https://thinkswell.com/services/social-media",
    summary:
      "Content strategy, community management, and paid amplification so social grows the business.",
    deliverables: [
      "Content strategy",
      "Community management",
      "Paid amplification",
    ],
    includes: [
      "Content strategy and a calendar that matches the live calendar",
      "Platform-native direction for Reels, TikTok, Stories, YouTube, and community posts",
      "Campaign content for launches, onsales, residencies, and always-on",
      "Community management and voice, or briefs for the team already in the comments",
      "Paid amplification so organic and paid point the same direction",
      "Asset systems and a quality bar existing creators can hit",
      "Reporting on reach, community, and the business social is supposed to move",
    ],
  },
] as const;
