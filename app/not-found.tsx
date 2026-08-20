import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col justify-center px-6 py-24">
      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-teal">
        404
      </p>
      <h1 className="mt-4 font-serif text-5xl font-bold text-off-white">
        This proposal isn’t here.
      </h1>
      <p className="mt-4 text-off-white/55">
        Check the link, or go back to the hub and open a live proposal.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex w-fit rounded-full bg-teal px-5 py-2.5 text-sm font-medium text-primary-foreground"
      >
        Back to the hub
      </Link>
    </main>
  );
}
