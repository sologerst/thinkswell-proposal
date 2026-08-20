import {
  ArrowUpRight,
  Check,
  MapPin,
} from "lucide-react";
import { capabilities, brand } from "@/lib/brand";
import type { Proposal } from "@/lib/proposals";
import { formatDate } from "@/lib/utils";
import { Eyebrow } from "@/components/site-header";

function capabilityById(id: string) {
  return capabilities.find((item) => item.id === id);
}

export function ProposalDocument({ proposal }: { proposal: Proposal }) {
  const included = proposal.scope.items.filter((item) => item.included);
  const optional = proposal.scope.items.filter((item) => !item.included);

  return (
    <article className="mx-auto max-w-6xl px-6 pb-24">
      <section className="grid gap-12 border-b border-white/8 py-16 lg:grid-cols-[1.4fr_0.8fr] lg:py-24">
        <div>
          <Eyebrow>{proposal.heroEyebrow}</Eyebrow>
          <p className="mt-5 font-serif text-4xl leading-[1.08] font-bold text-off-white sm:text-6xl">
            {proposal.heroAccent}{" "}
            <span className="text-off-white/55">{proposal.heroTitle}</span>
          </p>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-off-white/55">
            {proposal.intro}
          </p>
        </div>
        <aside className="h-fit rounded-2xl border border-white/8 bg-card p-6">
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
      </section>

      <nav
        aria-label="Proposal sections"
        className="print:hidden sticky top-0 z-10 -mx-6 mb-4 border-b border-white/8 bg-background/85 px-6 py-3 backdrop-blur-md"
      >
        <ul className="flex gap-5 overflow-x-auto text-[12px] whitespace-nowrap text-off-white/45">
          {proposal.sections.map((section) => (
            <li key={section.id}>
              <a className="transition-colors hover:text-teal" href={`#${section.id}`}>
                {section.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <Section id="opportunity" kicker="01 · Opportunity" title={proposal.opportunity.title}>
        <p className="max-w-3xl text-lg leading-relaxed text-off-white/60">
          {proposal.opportunity.body}
        </p>
        <ul className="mt-8 grid gap-4 md:grid-cols-3">
          {proposal.opportunity.bullets.map((bullet) => (
            <li
              key={bullet}
              className="rounded-2xl border border-white/8 bg-card p-5 text-[15px] leading-relaxed text-off-white/70"
            >
              {bullet}
            </li>
          ))}
        </ul>
      </Section>

      <Section id="why" kicker="02 · Why Thinkswell" title={proposal.why.title}>
        <p className="max-w-3xl text-lg leading-relaxed text-off-white/60">
          {proposal.why.body}
        </p>
        <ul className="mt-10 grid gap-6 md:grid-cols-3">
          {proposal.why.points.map((point) => (
            <li key={point.title} className="border-t border-white/10 pt-5">
              <h3 className="font-serif text-2xl font-bold text-off-white">
                {point.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-off-white/55">
                {point.body}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="approach" kicker="03 · How we work" title={proposal.approach.title}>
        <p className="max-w-3xl text-lg leading-relaxed text-off-white/60">
          {proposal.approach.body}
        </p>
        <ol className="mt-10 space-y-6">
          {proposal.approach.steps.map((step) => (
            <li
              key={step.number}
              className="grid gap-4 rounded-2xl border border-white/8 bg-card p-6 md:grid-cols-[88px_1fr] md:items-start"
            >
              <span className="font-mono text-sm tracking-[0.2em] text-teal">
                {step.number}
              </span>
              <div>
                <h3 className="font-serif text-2xl font-bold text-off-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-off-white/55">
                  {step.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="scope" kicker="04 · Scope of work" title={proposal.scope.title}>
        <p className="max-w-3xl text-lg leading-relaxed text-off-white/60">
          {proposal.scope.body}
        </p>
        <ul className="mt-10 grid gap-4">
          {included.map((item) => {
            const capability = capabilityById(item.capabilityId);
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
              </li>
            );
          })}
        </ul>
        {optional.length > 0 ? (
          <div className="mt-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-off-white/35">
              Available, not in this draft
            </p>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {optional.map((item) => {
                const capability = capabilityById(item.capabilityId);
                if (!capability) return null;
                return (
                  <li
                    key={item.capabilityId}
                    className="rounded-2xl border border-white/8 bg-card p-5"
                  >
                    <h3 className="font-serif text-xl font-bold text-off-white">
                      {capability.title}
                    </h3>
                    <p className="mt-2 text-[14px] leading-relaxed text-off-white/45">
                      {item.notes}
                    </p>
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
        <ol className="mt-10 space-y-0">
          {proposal.timeline.phases.map((phase, index) => (
            <li
              key={phase.name}
              className="grid gap-3 border-t border-white/8 py-6 md:grid-cols-[220px_1fr]"
            >
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

      <Section id="investment" kicker="06 · Investment" title={proposal.investment.title}>
        <p className="max-w-3xl text-lg leading-relaxed text-off-white/60">
          {proposal.investment.body}
        </p>
        <div className="mt-10 overflow-hidden rounded-2xl border border-white/8">
          <table className="w-full text-left text-sm">
            <thead className="bg-card font-mono text-[10px] uppercase tracking-[0.16em] text-off-white/40">
              <tr>
                <th className="px-5 py-3 font-medium">Model</th>
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
              <Check className="mt-0.5 size-4 shrink-0 text-teal" strokeWidth={1.75} />
              {metric}
            </li>
          ))}
        </ul>
      </Section>

      <Section id="next" kicker="08 · Next steps" title={proposal.nextSteps.title}>
        <p className="max-w-3xl text-lg leading-relaxed text-off-white/60">
          {proposal.nextSteps.body}
        </p>
        <ol className="mt-8 space-y-4">
          {proposal.nextSteps.steps.map((step, index) => (
            <li key={step} className="flex gap-4 text-[15px] leading-relaxed">
              <span className="font-mono text-teal">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-off-white/70">{step}</span>
            </li>
          ))}
        </ol>

        <div className="mt-12 rounded-2xl border border-teal/25 bg-teal-dim p-6 sm:p-8">
          <p className="font-serif text-3xl font-bold text-off-white">
            Let’s build something.
          </p>
          <p className="mt-3 max-w-xl text-off-white/60">
            {brand.founder.name}, {brand.founder.title} · {brand.address.line1},{" "}
            {brand.address.city}, {brand.address.state} {brand.address.zip}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm">
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
