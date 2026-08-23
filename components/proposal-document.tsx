import {
  ArrowUpRight,
  AudioLines,
  Brain,
  CalendarRange,
  ChartLine,
  Check,
  CircleDollarSign,
  Disc3,
  Focus,
  Gauge,
  Handshake,
  Heart,
  Layers,
  MapPin,
  Megaphone,
  Music2,
  Palette,
  Radar,
  Share2,
  ShieldCheck,
  Sparkles,
  Ticket,
  UserCog,
  Users,
  Waypoints,
  type LucideIcon,
} from "lucide-react";
import { capabilities, brand } from "@/lib/brand";
import type { Proposal, ScopeDutyIcon } from "@/lib/proposals";
import { clientInitials, formatDate } from "@/lib/utils";
import { Eyebrow } from "@/components/site-header";

const dutyIcons: Record<ScopeDutyIcon, LucideIcon> = {
  users: Users,
  sparkles: Sparkles,
  disc: Disc3,
  calendar: CalendarRange,
  waypoints: Waypoints,
  heart: Heart,
  audio: AudioLines,
  share: Share2,
  megaphone: Megaphone,
  palette: Palette,
  handshake: Handshake,
  ticket: Ticket,
  dollar: CircleDollarSign,
  usercog: UserCog,
  chart: ChartLine,
  radar: Radar,
};

const opportunityIcons = [Brain, Users, Gauge];
const whyIcons = [Focus, Music2, ShieldCheck];

function capabilityById(id: string) {
  return capabilities.find((item) => item.id === id);
}

function resolveIncludes(item: Proposal["scope"]["items"][number]): string[] {
  if (item.includes?.length) return item.includes;
  const capability = item.capabilityId
    ? capabilityById(item.capabilityId)
    : undefined;
  return capability?.includes ? [...capability.includes] : [];
}

function IncludesList({
  items,
  label = "What’s included",
  muted = false,
}: {
  items: string[];
  label?: string;
  muted?: boolean;
}) {
  if (items.length === 0) return null;
  return (
    <div className="mt-4">
      <p
        className={
          muted
            ? "font-mono text-[10px] uppercase tracking-[0.18em] text-off-white/30"
            : "font-mono text-[10px] uppercase tracking-[0.18em] text-off-white/40"
        }
      >
        {label}
      </p>
      <ul className="mt-3 grid gap-2 sm:grid-cols-2">
        {items.map((entry) => (
          <li
            key={entry}
            className={
              muted
                ? "flex gap-2 text-[13px] leading-relaxed text-off-white/45"
                : "flex gap-2 text-[13px] leading-relaxed text-off-white/70"
            }
          >
            <Check
              className={
                muted
                  ? "mt-0.5 size-3.5 shrink-0 text-off-white/30"
                  : "mt-0.5 size-3.5 shrink-0 text-teal"
              }
              strokeWidth={2.5}
            />
            <span>{entry}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ProposalDocument({ proposal }: { proposal: Proposal }) {
  const included = proposal.scope.items.filter((item) => item.included);
  const optional = proposal.scope.items.filter((item) => !item.included);
  const includedDuties = included.filter((item) => !item.capabilityId);
  const includedCapabilities = included.filter((item) => item.capabilityId);
  const showAmounts = proposal.investment.models.some((model) => model.amount);
  const visual = proposal.visual;
  const initials = clientInitials(proposal.clientName);

  return (
    <article className="pb-24">
      <section className="hero-atmosphere relative overflow-hidden border-b border-white/8">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 lg:grid-cols-[1.45fr_0.75fr] lg:py-24">
          <div>
            <div className="flex items-center gap-4">
              <div
                aria-hidden
                className="flex size-16 shrink-0 items-center justify-center rounded-2xl border border-teal/40 bg-teal-dim font-serif text-2xl font-bold text-teal shadow-[0_0_40px_color-mix(in_oklab,var(--teal)_25%,transparent)]"
              >
                {initials}
              </div>
              <div>
                <Eyebrow>{proposal.heroEyebrow}</Eyebrow>
                <p className="mt-1 font-serif text-2xl font-bold text-off-white">
                  {proposal.clientName}
                </p>
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-off-white/40">
                  {proposal.clientIndustry}
                </p>
              </div>
            </div>

            <p className="mt-10 font-serif text-4xl leading-[1.08] font-bold text-off-white sm:text-6xl">
              {proposal.heroAccent}{" "}
              <span className="text-off-white/55">{proposal.heroTitle}</span>
            </p>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-off-white/55">
              {proposal.intro}
            </p>

            {visual?.stats && visual.stats.length > 0 ? (
              <dl className="mt-10 grid gap-3 sm:grid-cols-3">
                {visual.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-white/10 bg-background/40 px-4 py-4 backdrop-blur-sm"
                  >
                    <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-off-white/40">
                      {stat.label}
                    </dt>
                    <dd className="mt-1 font-serif text-2xl font-bold text-teal">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            ) : null}

            {visual?.releases ? (
              <div className="mt-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-off-white/35">
                  {visual.releases.label}
                </p>
                <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                  {visual.releases.items.map((release) => (
                    <li
                      key={release.artist}
                      className="rounded-2xl border border-white/12 bg-white/[0.04] px-4 py-3"
                    >
                      <p className="font-serif text-lg font-bold text-off-white">
                        {release.artist}
                      </p>
                      <p className="mt-0.5 font-mono text-[11px] tracking-[0.14em] text-teal/80">
                        {release.slate}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ) : visual?.tags ? (
              <div className="mt-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-off-white/35">
                  {visual.tags.label}
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {visual.tags.items.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-white/12 bg-white/[0.04] px-3 py-1.5 text-[13px] text-off-white/75"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>

          <aside className="h-fit rounded-2xl border border-white/10 border-l-teal/70 bg-card/80 p-6 backdrop-blur-sm">
            <dl className="space-y-4 text-sm">
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-off-white/40">
                  Prepared for
                </dt>
                <dd className="mt-1 text-off-white">{proposal.preparedFor}</dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-off-white/40">
                  Prepared
                </dt>
                <dd className="mt-1 text-off-white">
                  {formatDate(proposal.preparedDate)}
                </dd>
              </div>
              {proposal.validUntil ? (
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-off-white/40">
                    Valid through
                  </dt>
                  <dd className="mt-1 text-off-white">
                    {formatDate(proposal.validUntil)}
                  </dd>
                </div>
              ) : null}
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-off-white/40">
                  From
                </dt>
                <dd className="mt-1 text-off-white">
                  {brand.name} · {brand.address.city}, {brand.address.state}
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6">
        <nav
          aria-label="Proposal sections"
          className="print:hidden sticky top-0 z-10 -mx-6 mb-4 border-b border-white/8 bg-background/85 px-6 py-3 backdrop-blur-md"
        >
          <ul className="flex gap-5 overflow-x-auto text-[12px] whitespace-nowrap text-off-white/45">
            {proposal.sections.map((section) => (
              <li key={section.id}>
                <a
                  className="transition-colors hover:text-teal"
                  href={`#${section.id}`}
                >
                  {section.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <Section
          id="opportunity"
          kicker="01 · Opportunity"
          title={proposal.opportunity.title}
        >
          <p className="max-w-3xl text-lg leading-relaxed text-off-white/60">
            {proposal.opportunity.body}
          </p>
          <ul className="mt-8 grid gap-4 md:grid-cols-3">
            {proposal.opportunity.bullets.map((bullet, index) => {
              const Icon = opportunityIcons[index] ?? Sparkles;
              return (
                <li
                  key={bullet}
                  className="relative overflow-hidden rounded-2xl border border-white/8 bg-card p-5"
                >
                  <span className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-teal/80 to-transparent" />
                  <div className="flex items-center justify-between">
                    <Icon className="size-5 text-teal" strokeWidth={1.5} />
                    <span className="font-mono text-[11px] tracking-[0.16em] text-off-white/30">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="mt-4 text-[15px] leading-relaxed text-off-white/70">
                    {bullet}
                  </p>
                </li>
              );
            })}
          </ul>
        </Section>

        <Section id="why" kicker="02 · Why Thinkswell" title={proposal.why.title}>
          <p className="max-w-3xl text-lg leading-relaxed text-off-white/60">
            {proposal.why.body}
          </p>
          <ul className="mt-10 grid gap-4 md:grid-cols-3">
            {proposal.why.points.map((point, index) => {
              const Icon = whyIcons[index] ?? Sparkles;
              return (
                <li
                  key={point.title}
                  className="rounded-2xl border border-white/8 bg-card p-6"
                >
                  <div className="flex size-10 items-center justify-center rounded-xl border border-teal/25 bg-teal-dim">
                    <Icon className="size-5 text-teal" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-5 font-serif text-2xl font-bold text-off-white">
                    {point.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-off-white/55">
                    {point.body}
                  </p>
                </li>
              );
            })}
          </ul>
        </Section>

        <Section
          id="approach"
          kicker="03 · How we work"
          title={proposal.approach.title}
        >
          <p className="max-w-3xl text-lg leading-relaxed text-off-white/60">
            {proposal.approach.body}
          </p>

          {visual?.modes && visual.modes.length > 0 ? (
            <div className="mt-10 grid gap-4 md:grid-cols-[1fr_auto_1fr] md:items-stretch">
              {visual.modes.map((mode, index) => (
                <div key={mode.title} className="contents">
                  <div
                    className={
                      index === 0
                        ? "rounded-2xl border border-teal/30 bg-teal-dim p-6"
                        : "rounded-2xl border border-gold/30 bg-gold/8 p-6"
                    }
                  >
                    <p
                      className={
                        index === 0
                          ? "font-mono text-[11px] tracking-[0.18em] text-teal"
                          : "font-mono text-[11px] tracking-[0.18em] text-gold"
                      }
                    >
                      {mode.kicker}
                    </p>
                    <h3 className="mt-2 font-serif text-3xl font-bold text-off-white">
                      {mode.title}
                    </h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-off-white/60">
                      {mode.body}
                    </p>
                  </div>
                  {index === 0 && visual.modes && visual.modes.length > 1 ? (
                    <div className="hidden items-center justify-center px-1 md:flex">
                      <span className="rounded-full border border-white/12 px-3 py-1 font-mono text-[10px] tracking-[0.16em] text-off-white/45">
                        {visual.modesConnector ?? "Flex"}
                      </span>
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          ) : null}

          <ol className="mt-10 space-y-4">
            {proposal.approach.steps.map((step, index) => (
              <li
                key={step.number}
                className="grid gap-4 rounded-2xl border border-white/8 bg-card p-6 md:grid-cols-[72px_1fr] md:items-start"
              >
                <span className="flex size-12 items-center justify-center rounded-full border border-teal/35 bg-teal-dim font-mono text-sm tracking-[0.16em] text-teal">
                  {step.number}
                </span>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-off-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-off-white/55">
                    {step.body}
                  </p>
                  {index < proposal.approach.steps.length - 1 ? (
                    <p className="mt-3 font-mono text-[10px] tracking-[0.16em] text-off-white/25">
                      Then
                    </p>
                  ) : null}
                </div>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="scope" kicker="04 · Scope of work" title={proposal.scope.title}>
          <p className="max-w-3xl text-lg leading-relaxed text-off-white/60">
            {proposal.scope.body}
          </p>
          {includedDuties.length > 0 ? (
            <ul
              className={
                includedDuties.some((item) => resolveIncludes(item).length > 0)
                  ? "mt-10 grid gap-4"
                  : "mt-10 grid gap-3 sm:grid-cols-2"
              }
            >
              {includedDuties.map((item, index) => {
                const Icon = item.icon ? dutyIcons[item.icon] : Layers;
                return (
                  <li
                    key={item.title}
                    className="rounded-2xl border border-teal/20 bg-teal-dim p-5 sm:p-6"
                  >
                    <div className="flex gap-4">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-teal/25 bg-background/40">
                        <Icon className="size-5 text-teal" strokeWidth={1.5} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="font-mono text-[11px] tracking-[0.18em] text-teal">
                          {String(index + 1).padStart(2, "0")}
                        </p>
                        <h3 className="mt-1 font-serif text-xl font-bold text-off-white sm:text-2xl">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-[14px] leading-relaxed text-off-white/60 sm:text-[15px]">
                          {item.notes}
                        </p>
                        <IncludesList items={resolveIncludes(item)} />
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          ) : null}
          {includedCapabilities.length > 0 ? (
            <ul
              className={
                includedDuties.length > 0 ? "mt-4 grid gap-4" : "mt-10 grid gap-4"
              }
            >
              {includedCapabilities.map((item) => {
                const capability = capabilityById(item.capabilityId ?? "");
                if (!capability) return null;
                return (
                  <li
                    key={item.capabilityId}
                    className="rounded-2xl border border-teal/20 bg-teal-dim p-5 sm:p-6"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <p className="font-mono text-[11px] tracking-[0.18em] text-teal">
                          {capability.number} · In scope
                        </p>
                        <h3 className="mt-2 font-serif text-2xl font-bold text-off-white">
                          {capability.title}
                        </h3>
                      </div>
                      <a
                        href={capability.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-[12px] text-off-white/45 transition-colors hover:text-teal"
                      >
                        thinkswell.com
                        <ArrowUpRight className="size-3.5" />
                      </a>
                    </div>
                    <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-off-white/60">
                      {item.notes}
                    </p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {capability.deliverables.map((deliverable) => (
                        <li
                          key={deliverable}
                          className="rounded-full border border-white/10 px-3 py-1 text-[12px] text-off-white/65"
                        >
                          {deliverable}
                        </li>
                      ))}
                    </ul>
                    <IncludesList items={resolveIncludes(item)} />
                  </li>
                );
              })}
            </ul>
          ) : null}
          {optional.length > 0 ? (
            <div className="mt-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-off-white/35">
                {proposal.investment.highlight
                  ? "Available, not in this retainer"
                  : "Available, not in this draft"}
              </p>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {optional.map((item) => {
                  const capability = item.capabilityId
                    ? capabilityById(item.capabilityId)
                    : undefined;
                  const title = capability?.title ?? item.title;
                  if (!title) return null;
                  return (
                    <li
                      key={item.capabilityId ?? title}
                      className="rounded-2xl border border-dashed border-white/12 bg-card p-5"
                    >
                      <h3 className="font-serif text-xl font-bold text-off-white">
                        {title}
                      </h3>
                      <p className="mt-2 text-[14px] leading-relaxed text-off-white/45">
                        {item.notes}
                      </p>
                      <IncludesList
                        items={resolveIncludes(item)}
                        label="If added"
                        muted
                      />
                    </li>
                  );
                })}
              </ul>
            </div>
          ) : null}
        </Section>

        <Section id="timeline" kicker="05 · Timeline" title={proposal.timeline.title}>
          <p className="max-w-3xl text-lg leading-relaxed text-off-white/60">
            {proposal.timeline.body}
          </p>
          <ol className="relative mt-10 space-y-0">
            <span
              aria-hidden
              className="absolute top-3 bottom-3 left-[15px] hidden w-px bg-linear-to-b from-teal/70 via-white/15 to-white/5 md:block"
            />
            {proposal.timeline.phases.map((phase, index) => (
              <li
                key={phase.name}
                className="relative grid gap-3 py-6 md:grid-cols-[240px_1fr] md:gap-10 md:pl-12"
              >
                <span
                  aria-hidden
                  className="absolute top-8 left-0 hidden size-[31px] rounded-full border border-teal/50 bg-background md:flex md:items-center md:justify-center"
                >
                  <span className="size-2.5 rounded-full bg-teal" />
                </span>
                <div>
                  <p className="font-mono text-[11px] tracking-[0.16em] text-teal">
                    {String(index + 1).padStart(2, "0")} · {phase.window}
                  </p>
                  <h3 className="mt-2 font-serif text-xl font-bold text-off-white">
                    {phase.name}
                  </h3>
                </div>
                <p className="text-[15px] leading-relaxed text-off-white/55">
                  {phase.detail}
                </p>
              </li>
            ))}
          </ol>
        </Section>

        <Section
          id="investment"
          kicker={proposal.investment.highlight ? "06 · Budget" : "06 · Investment"}
          title={proposal.investment.title}
        >
          <p className="max-w-3xl text-lg leading-relaxed text-off-white/60">
            {proposal.investment.body}
          </p>
          {proposal.investment.highlight ? (
            <div className="mt-10 overflow-hidden rounded-2xl border border-teal/30 bg-teal-dim">
              <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-teal">
                    {proposal.investment.highlight.label}
                  </p>
                  <p className="mt-3 font-serif text-5xl font-bold tracking-tight text-off-white sm:text-7xl">
                    {proposal.investment.highlight.amount}
                  </p>
                  <p className="mt-2 text-lg text-off-white/50">
                    {proposal.investment.highlight.cadence}
                  </p>
                  <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-off-white/60">
                    {proposal.investment.highlight.detail}
                  </p>
                </div>
                {proposal.investment.highlight.secondary ? (
                  <div className="rounded-2xl border border-white/10 bg-background/40 p-5">
                    <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-off-white/40">
                      {proposal.investment.highlight.secondary.label}
                    </p>
                    <p className="mt-2 font-serif text-4xl font-bold text-gold">
                      {proposal.investment.highlight.secondary.amount}
                    </p>
                  </div>
                ) : null}
              </div>
            </div>
          ) : null}
          <div className="mt-10 overflow-hidden rounded-2xl border border-white/8">
            <table className="w-full text-left text-sm">
              <thead className="bg-card font-mono text-[10px] uppercase tracking-[0.16em] text-off-white/40">
                <tr>
                  <th className="px-5 py-3 font-medium">Model</th>
                  {showAmounts ? (
                    <th className="px-5 py-3 font-medium">Amount</th>
                  ) : null}
                  <th className="px-5 py-3 font-medium">Best for</th>
                  <th className="hidden px-5 py-3 font-medium md:table-cell">
                    How we scope
                  </th>
                </tr>
              </thead>
              <tbody>
                {proposal.investment.models.map((model) => (
                  <tr key={model.name} className="border-t border-white/8">
                    <td className="px-5 py-4 font-medium text-off-white">
                      {model.name}
                    </td>
                    {showAmounts ? (
                      <td className="px-5 py-4 font-medium text-teal">
                        {model.amount}
                      </td>
                    ) : null}
                    <td className="px-5 py-4 text-off-white/55">{model.bestFor}</td>
                    <td className="hidden px-5 py-4 text-off-white/55 md:table-cell">
                      {model.howWeScope}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-5 max-w-3xl text-[13px] leading-relaxed text-gold/80">
            {proposal.investment.note}
          </p>
        </Section>

        <Section id="success" kicker="07 · Success" title={proposal.success.title}>
          <p className="max-w-3xl text-lg leading-relaxed text-off-white/60">
            {proposal.success.body}
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {proposal.success.metrics.map((metric) => (
              <li
                key={metric}
                className="flex gap-3 rounded-xl border border-white/8 bg-card px-4 py-4 text-[15px] text-off-white/70"
              >
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-teal-dim">
                  <Check className="size-3 text-teal" strokeWidth={2.5} />
                </span>
                {metric}
              </li>
            ))}
          </ul>
        </Section>

        <Section id="next" kicker="08 · Next steps" title={proposal.nextSteps.title}>
          <p className="max-w-3xl text-lg leading-relaxed text-off-white/60">
            {proposal.nextSteps.body}
          </p>
          <ol className="mt-8 grid gap-3 sm:grid-cols-2">
            {proposal.nextSteps.steps.map((step, index) => (
              <li
                key={step}
                className="rounded-2xl border border-white/8 bg-card p-5"
              >
                <span className="flex size-9 items-center justify-center rounded-full border border-teal/35 bg-teal-dim font-mono text-[12px] text-teal">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-3 text-[15px] leading-relaxed text-off-white/70">
                  {step}
                </p>
              </li>
            ))}
          </ol>

          <div className="relative mt-12 overflow-hidden rounded-2xl border border-teal/25 bg-teal-dim p-6 sm:p-8">
            <span className="print:hidden pointer-events-none absolute -right-10 -bottom-16 size-48 rounded-full bg-teal/20 blur-3xl" />
            <p className="relative font-serif text-3xl font-bold text-off-white">
              Let’s build something.
            </p>
            <p className="relative mt-3 max-w-xl text-off-white/60">
              {brand.founder.name}, {brand.founder.title} · {brand.address.line1},{" "}
              {brand.address.city}, {brand.address.state} {brand.address.zip}
            </p>
            <div className="relative mt-6 flex flex-wrap items-center gap-4 text-sm">
              <a
                href={`mailto:${brand.email}?subject=${encodeURIComponent(`Proposal · ${proposal.clientName}`)}`}
                className="inline-flex items-center rounded-full bg-teal px-5 py-2.5 font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                Email {brand.email}
              </a>
              <a
                href={brand.url}
                className="inline-flex items-center gap-1.5 text-off-white/60 transition-colors hover:text-teal"
              >
                <MapPin className="size-4" />
                thinkswell.com
              </a>
            </div>
          </div>
        </Section>
      </div>
    </article>
  );
}

function Section({
  id,
  kicker,
  title,
  children,
}: {
  id: string;
  kicker: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20 border-b border-white/8 py-16">
      <Eyebrow className="text-teal/80">{kicker}</Eyebrow>
      <h2 className="mt-4 max-w-4xl font-serif text-3xl leading-tight font-bold text-off-white sm:text-5xl">
        {title}
      </h2>
      <div className="mt-8">{children}</div>
    </section>
  );
}
