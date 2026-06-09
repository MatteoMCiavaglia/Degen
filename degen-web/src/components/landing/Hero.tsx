import { SiteNav } from "@/components/landing/SiteNav";

const PILLS = ["Searles", "Smart", "Seppage"];

export function Hero() {
  return (
    <header className="relative z-10 mx-auto w-full max-w-6xl px-4 pt-6 md:px-8">
      <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
        <h1
          className="font-[family-name:var(--font-display)] text-5xl tracking-wide text-[var(--logo-red)] drop-shadow-[0_4px_18px_rgba(143,28,20,0.65)] md:text-7xl"
          style={{
            WebkitTextStroke: "1px rgba(20, 8, 5, 0.55)",
          }}
        >
          DEGEN
        </h1>
        <SiteNav />
      </div>

      <p className="mt-4 text-sm font-semibold uppercase tracking-[0.3em] text-[var(--text-primary)] md:text-base">
        Recover, Recharge, Send It.
      </p>

      <div className="mt-5 flex flex-wrap gap-3">
        {PILLS.map((pill) => (
          <button
            key={pill}
            type="button"
            className="flex items-center gap-2 rounded-full border border-[var(--accent-primary)]/40 bg-black/40 px-4 py-2 text-xs font-medium text-[var(--text-secondary)] backdrop-blur-sm transition hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)]"
          >
            <span
              aria-hidden="true"
              className="h-2.5 w-2.5 rounded-full bg-[var(--accent-primary)]"
            />
            {pill}
          </button>
        ))}
      </div>
    </header>
  );
}
