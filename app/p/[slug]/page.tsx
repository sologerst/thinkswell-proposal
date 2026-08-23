import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProposalDocument } from "@/components/proposal-document";
import { brand } from "@/lib/brand";
import { getProposal, listProposals } from "@/lib/proposals";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return listProposals().map((proposal) => ({ slug: proposal.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const proposal = getProposal(slug);
  if (!proposal) {
    return { title: "Proposal not found" };
  }

  const title = `${proposal.clientName} · Proposal`;
  const description = proposal.summary;

  return {
    title,
    description,
    openGraph: {
      title: `${proposal.clientName} · Thinkswell`,
      description,
      url: `${brand.hubUrl}/p/${proposal.slug}`,
      type: "article",
    },
  };
}

export default async function ProposalPage({ params }: PageProps) {
  const { slug } = await params;
  const proposal = getProposal(slug);

  if (!proposal) {
    notFound();
  }

  return (
    <main className="flex-1">
      <ProposalDocument proposal={proposal} />
    </main>
  );
}
