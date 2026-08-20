import type { Metadata } from "next";
import { lockHub } from "@/app/hub-actions";
import { HubGate } from "@/components/hub-gate";
import { ProposalCard } from "@/components/proposal-card";
import { Eyebrow } from "@/components/site-header";
import { brand } from "@/lib/brand";
import { isHubUnlocked } from "@/lib/hub-auth";
import { listProposals } from "@/lib/proposals";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

type PageProps = {
  searchParams: Promise<{ unlock?: string }>;
};

export default async function Home({ searchParams }: PageProps) {
  const unlocked = await isHubUnlocked();
  if (!unlocked) {
    const params = await searchParams;
    return <HubGate failed={params.unlock === "failed"} />;
  }

  const proposals = listProposals();

  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-6 pb-20">
      <section className="max-w-3xl pt-10 pb-16 sm:pt-16">
        <Eyebrow>Thinkswell Internal</Eyebrow>
        <h1 className="mt-5 font-serif text-5xl leading-[1.05] font-bold text-off-white sm:text-6xl">
          Client Proposal <span className="text-teal">Hub</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-off-white/60">
          A centralized workspace for Thinkswell client proposals. Duplicate the
          branded template, fill in the opportunity and investment, and share a
          live link from{" "}
          <span className="text-off-white">proposal.thinkswell.com</span>.
        </p>
        <p className="mt-4 text-sm text-off-white/40">
          Sister to{" "}
          <a
            className="text-off-white/70 underline decoration-white/15 underline-offset-4 transition-colors hover:text-teal"
            href={brand.analysisUrl}
          >
            analysis.thinkswell.com
          </a>
          . Positioning from{" "}
          <a
            className="text-off-white/70 underline decoration-white/15 underline-offset-4 transition-colors hover:text-teal"
            href={brand.url}
          >
            thinkswell.com
          </a>
          .
        </p>
      </section>

      <section>
        <div className="mb-6 flex items-end justify-between gap-4">
          <Eyebrow>Active proposals</Eyebrow>
          <span className="rounded-full border border-white/10 px-3 py-1 font-mono text-[11px] text-off-white/50">
            {proposals.length} {proposals.length === 1 ? "proposal" : "proposals"}
          </span>
        </div>

        <div className="space-y-5">
          {proposals.map((proposal) => (
            <ProposalCard key={proposal.slug} proposal={proposal} />
          ))}
        </div>

        <p className="mt-8 rounded-2xl border border-dashed border-white/10 px-5 py-6 text-sm text-off-white/40">
          + Additional client proposals will appear here. Add one in{" "}
          <code className="font-mono text-teal/80">lib/proposals.ts</code> by
          duplicating{" "}
          <code className="font-mono text-teal/80">thinkswellPartnership</code>{" "}
          and pushing to GitHub.
        </p>
      </section>

      <div className="mt-12 flex flex-col items-center gap-3 text-sm text-off-white/35">
        <p>
          Need the public site?{" "}
          <a className="text-off-white/60 hover:text-teal" href={brand.url}>
            thinkswell.com
          </a>
        </p>
        <form action={lockHub}>
          <button
            className="text-off-white/40 underline decoration-white/15 underline-offset-4 transition-colors hover:text-teal"
            type="submit"
          >
            Lock the hub
          </button>
        </form>
      </div>
    </main>
  );
}
