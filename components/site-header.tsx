import Link from "next/link";
import { brand } from "@/lib/brand";
import { cn } from "@/lib/utils";

type SiteHeaderProps = {
  kicker?: string;
  badge?: string;
};

export function SiteHeader({
  kicker = "Proposal Hub",
  badge = "Prepared by Thinkswell.",
}: SiteHeaderProps) {
  return (
    <header className="print:hidden">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-5">
        <Link href="/" className="flex items-baseline gap-2.5 text-off-white">
          <span className="text-[15px] font-semibold tracking-tight">
            {brand.name}
          </span>
          <span className="text-off-white/30" aria-hidden>
            /
          </span>
          <span className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-off-white/55">
            {kicker}
          </span>
        </Link>
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[12px] text-off-white/70">
          <span className="size-1.5 rounded-full bg-teal" aria-hidden />
          {badge}
        </span>
      </div>
    </header>
  );
}

export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-off-white/45",
        className,
      )}
    >
      {children}
    </p>
  );
}
