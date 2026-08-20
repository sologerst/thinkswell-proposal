import { brand } from "@/lib/brand";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-white/8 print:hidden">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-8 text-[13px] text-off-white/40 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {brand.name}. {brand.address.city},{" "}
          {brand.address.state}.
        </p>
        <p>
          <a className="transition-colors hover:text-teal" href={brand.url}>
            thinkswell.com
          </a>
          <span className="mx-2 text-off-white/20">·</span>
          <a className="transition-colors hover:text-teal" href={`mailto:${brand.email}`}>
            {brand.email}
          </a>
        </p>
      </div>
    </footer>
  );
}
