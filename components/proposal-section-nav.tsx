"use client";

import { useEffect, useState, type MouseEvent } from "react";
import { cn } from "@/lib/utils";

type NavSection = {
  id: string;
  title: string;
};

function sectionNavLabel(section: NavSection) {
  switch (section.id) {
    case "opportunity":
      return "Opportunity";
    case "why":
      return "Why";
    case "approach":
      return "How we work";
    case "scope":
      return "Scope";
    case "timeline":
      return "Timeline";
    case "investment":
      return section.title === "Budget" ? "Budget" : "Investment";
    case "next":
      return "Next";
    default:
      return section.title;
  }
}

export function ProposalSectionNav({ sections }: { sections: NavSection[] }) {
  const [activeId, setActiveId] = useState(sections[0]?.id ?? "");

  useEffect(() => {
    const ids = sections.map((section) => section.id);
    const nodes = ids
      .map((id) => document.getElementById(id))
      .filter((node): node is HTMLElement => node !== null);
    if (nodes.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActiveId(visible.target.id);
      },
      { rootMargin: "-28% 0px -58% 0px", threshold: [0, 0.2, 0.4, 0.6] },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [sections]);

  function goToSection(event: MouseEvent<HTMLAnchorElement>, id: string) {
    event.preventDefault();
    setActiveId(id);
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    document.getElementById(id)?.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "start",
    });
    history.replaceState(null, "", `#${id}`);
  }

  return (
    <nav
      aria-label="Proposal sections"
      className="print:hidden sticky top-0 z-20 -mx-6 mb-4 border-b border-white/8 bg-background/92 px-4 py-3 backdrop-blur-md sm:px-6"
    >
      <ul className="flex flex-wrap gap-2">
        {sections.map((section) => {
          const active = section.id === activeId;
          return (
            <li key={section.id}>
              <a
                aria-current={active ? "location" : undefined}
                className={cn(
                  "inline-flex min-h-10 items-center rounded-full border px-3 py-1.5 text-[12px] font-medium tracking-wide transition-colors touch-manipulation",
                  active
                    ? "border-teal/45 bg-teal-dim text-teal"
                    : "border-white/12 bg-white/[0.03] text-off-white/65 hover:border-teal/30 hover:text-teal",
                )}
                href={`#${section.id}`}
                onClick={(event) => goToSection(event, section.id)}
              >
                {sectionNavLabel(section)}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
