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
    line1: "1320 Little Hamilton Avenue",
    city: "Nashville",
    state: "TN",
    zip: "37203",
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
  },
  {
    id: "paid",
    number: "02",
    title: "Paid Media",
    href: "https://thinkswell.com/services/paid-media",
    summary:
      "Meta, Google, TikTok, and programmatic campaigns with a data-first approach — maximizing reach, engagement, and ROI.",
    deliverables: ["Meta & Google Ads", "TikTok campaigns", "Programmatic buying"],
  },
  {
    id: "brand",
    number: "03",
    title: "Brand Development",
    href: "https://thinkswell.com/services/brand-development",
    summary:
      "Visual identities, messaging frameworks, and brand systems that resonate with audiences and stand the test of time.",
    deliverables: ["Visual identity", "Messaging frameworks", "Brand guidelines"],
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
  },
  {
    id: "music",
    number: "05",
    title: "Music Marketing",
    href: "https://thinkswell.com/services/music-marketing",
    summary:
      "20+ years marketing country artists, live tours, and music events in Nashville — tickets, fanbases, and lasting brands.",
    deliverables: ["Tour marketing", "Fanbase growth", "Release campaigns"],
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
  },
] as const;
