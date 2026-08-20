import { ProposalCard } from "@/components/proposal-card";
import { Eyebrow } from "@/components/site-header";
import { brand } from "@/lib/brand";
import { listProposals } from "@/lib/proposals";

export default function Home() {
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

      <p className="mt-12 text-center text-sm text-off-white/35">
        Need the public site?{" "}
        <a className="text-off-white/60 hover:text-teal" href={brand.url}>
          thinkswell.com
        </a>
      </p>
    </main>
  );
}
