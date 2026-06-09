export function TopBanner() {
  return (
    <div className="relative z-20 w-full border-b border-[var(--logo-red-deep)]/60 bg-gradient-to-r from-[#2a0f0a] via-[#3a140b] to-[#2a0f0a]">
      <div className="mx-auto flex max-w-6xl items-center justify-center gap-4 px-4 py-2.5 md:gap-6">
        <span
          aria-hidden="true"
          className="hidden h-9 w-6 shrink-0 rounded-sm bg-gradient-to-b from-[#e8a13a] to-[#8f1c14] shadow-[0_4px_10px_rgba(0,0,0,0.5)] sm:block"
        />
        <p className="text-center text-xs font-semibold uppercase tracking-[0.28em] text-[var(--text-secondary)] md:text-sm">
          Get ready for tomorrow
        </p>
        <button
          type="button"
          className="shrink-0 rounded-full bg-[var(--accent-primary)] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#1c1206] shadow-[0_6px_16px_rgba(232,161,58,0.35)] transition hover:brightness-110 md:text-xs"
        >
          Shop Now
        </button>
        <span
          aria-hidden="true"
          className="hidden h-9 w-6 shrink-0 rounded-sm bg-gradient-to-b from-[#e23b2e] to-[#8f1c14] shadow-[0_4px_10px_rgba(0,0,0,0.5)] sm:block"
        />
      </div>
    </div>
  );
}
