import { unlockHub } from "@/app/hub-actions";
import { Eyebrow } from "@/components/site-header";

export function HubGate({ failed }: { failed?: boolean }) {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-6 pb-20">
      <section className="mx-auto w-full max-w-md pt-16 sm:pt-24">
        <Eyebrow>Thinkswell Internal</Eyebrow>
        <h1 className="mt-5 font-serif text-4xl leading-[1.08] font-bold text-off-white sm:text-5xl">
          Hub access
        </h1>
        <p className="mt-4 text-[15px] leading-relaxed text-off-white/55">
          The proposal index is for Thinkswell. If you were sent a proposal,
          open the full link you received —{" "}
          <span className="text-off-white/80">/p/your-proposal</span> stays
          public.
        </p>

        <form action={unlockHub} className="mt-8 space-y-4">
          <label className="block">
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-off-white/40">
              Password
            </span>
            <input
              autoComplete="current-password"
              className="mt-2 w-full rounded-xl border border-white/12 bg-card px-4 py-3 text-off-white outline-none ring-teal/40 placeholder:text-off-white/25 focus:border-teal/40 focus:ring-2"
              name="password"
              placeholder="Enter hub password"
              required
              type="password"
            />
          </label>
          {failed ? (
            <p className="text-sm text-gold" role="alert">
              That password didn’t match. Try again.
            </p>
          ) : null}
          <button
            className="inline-flex w-full items-center justify-center rounded-full bg-teal px-5 py-2.5 font-medium text-primary-foreground transition-opacity hover:opacity-90"
            type="submit"
          >
            Unlock the hub
          </button>
        </form>
      </section>
    </main>
  );
}
