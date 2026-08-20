import {
  CalendarDays,
  CheckCircle2,
  CircleDollarSign,
  Compass,
  ExternalLink,
  Layers,
  Map,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { ProposalStatusBadge, StatusBadge } from "@/components/status-badge";
import type { Proposal, SectionIcon } from "@/lib/proposals";
import { sectionProgress } from "@/lib/proposals";

const icons: Record<SectionIcon, LucideIcon> = {
  sparkles: Sparkles,
  compass: Compass,
  layers: Layers,
  map: Map,
  calendar: CalendarDays,
  investment: CircleDollarSign,
  check: CheckCircle2,
};

export function ProposalCard({ proposal }: { proposal: Proposal }) {
  const { ready, total } = sectionProgress(proposal);
  const href = `/p/${proposal.slug}`;
  const percent = total === 0 ? 0 : Math.round((ready / total) * 100);
  const host = proposal.clientUrl
    ? proposal.clientUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")
    : null;

  return (
    <article className="rounded-2xl border border-white/8 bg-card p-6 sm:p-8">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div className="min-w-0 max-w-2xl">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <ProposalStatusBadge status={proposal.status} />
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-off-white/35">
              {proposal.clientIndustry}
            </span>
          </div>
          <h3 className="font-serif text-[1.85rem] leading-tight font-bold text-off-white sm:text-[2.15rem]">
            <Link href={href} className="transition-colors hover:text-teal">
              {proposal.clientName}
            </Link>
          </h3>
          {host ? (
            <a
              href={proposal.clientUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center gap-1.5 text-[13px] text-off-white/45 transition-colors hover:text-teal"
            >
              <ExternalLink className="size-3.5" aria-hidden />
              {host}
            </a>
          ) : null}
          <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-off-white/55">
            {proposal.summary}
          </p>
        </div>

        <div className="w-full shrink-0 lg:w-44">
          <p className="text-right font-serif text-2xl font-bold text-off-white">
            {ready}
            <span className="text-off-white/35">/{total}</span>
          </p>
          <p className="mt-0.5 text-right font-mono text-[10px] uppercase tracking-[0.16em] text-off-white/40">
            sections ready
          </p>
          <div className="mt-3 h-0.5 overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-teal"
              style={{ width: `${percent}%` }}
            />
          </div>
        </div>
      </div>

      <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {proposal.sections.map((section) => {
          const Icon = icons[section.icon];
          return (
            <li key={section.id}>
              <Link
                href={`${href}#${section.id}`}
                className="flex h-full flex-col gap-3 rounded-xl border border-white/8 bg-background/40 px-3.5 py-3.5 transition-colors hover:border-teal/30 hover:bg-teal-dim"
              >
                <div className="flex items-center justify-between gap-2">
                  <Icon className="size-4 text-off-white/70" strokeWidth={1.5} />
                  <StatusBadge status={section.status} />
                </div>
                <p className="text-[13px] font-medium leading-snug text-off-white">
                  {section.title}
                </p>
              </Link>
            </li>
          );
        })}
      </ul>
    </article>
  );
}
