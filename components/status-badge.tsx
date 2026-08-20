import { cn } from "@/lib/utils";
import type { ProposalStatus, SectionStatus } from "@/lib/proposals";

const sectionStyles: Record<SectionStatus, string> = {
  ready:
    "border-teal/35 bg-teal-dim text-teal",
  soon: "border-white/12 bg-transparent text-off-white/45",
};

const proposalStyles: Record<ProposalStatus, string> = {
  template: "border-teal/35 bg-teal-dim text-teal",
  draft: "border-white/12 bg-transparent text-off-white/45",
  sent: "border-gold/40 bg-gold/10 text-gold",
  accepted: "border-teal/35 bg-teal-dim text-teal",
};

const proposalLabels: Record<ProposalStatus, string> = {
  template: "Template",
  draft: "Draft",
  sent: "Sent",
  accepted: "Accepted",
};

export function StatusBadge({
  status,
  className,
}: {
  status: SectionStatus;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full border px-2 py-0.5 font-mono text-[10px] font-medium uppercase tracking-[0.14em]",
        sectionStyles[status],
        className,
      )}
    >
      {status === "ready" ? "Ready" : "Soon"}
    </span>
  );
}

export function ProposalStatusBadge({
  status,
  className,
}: {
  status: ProposalStatus;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full border px-2 py-0.5 font-mono text-[10px] font-medium uppercase tracking-[0.14em]",
        proposalStyles[status],
        className,
      )}
    >
      {proposalLabels[status]}
    </span>
  );
}
