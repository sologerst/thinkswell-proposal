import type { MetadataRoute } from "next";
import { brand } from "@/lib/brand";
import { listProposals } from "@/lib/proposals";

export default function sitemap(): MetadataRoute.Sitemap {
  const proposals = listProposals().map((proposal) => ({
    url: `${brand.hubUrl}/p/${proposal.slug}`,
    lastModified: new Date(proposal.preparedDate),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: brand.hubUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...proposals,
  ];
}
