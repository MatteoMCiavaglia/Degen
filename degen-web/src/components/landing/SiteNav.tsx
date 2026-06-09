const NAV_ITEMS = ["HOJIN", "SPEEDY", "ALB", "MORE"];

export function SiteNav() {
  return (
    <nav
      aria-label="Primary"
      className="flex items-center gap-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--text-secondary)] md:gap-6 md:text-xs"
    >
      {NAV_ITEMS.map((item) => (
        <button
          key={item}
          type="button"
          className="flex items-center gap-1 transition hover:text-[var(--accent-primary)]"
        >
          {item}
          <span aria-hidden="true" className="text-[8px] opacity-70">
            ▼
          </span>
        </button>
      ))}
    </nav>
  );
}
