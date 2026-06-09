const ITEMS = [
  { label: "Bar Tab Tips", icon: "🍺" },
  { label: "Track & Stack", icon: "📊" },
];

export function BottomNav() {
  return (
    <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-wrap items-center justify-center gap-3 px-4 pb-6 md:gap-6 md:px-8">
      {ITEMS.map((item) => (
        <button
          key={item.label}
          type="button"
          className="flex items-center gap-2 rounded-xl border border-[var(--accent-primary)]/35 bg-black/45 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.18em] text-[var(--text-secondary)] backdrop-blur-sm transition hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] md:text-sm"
        >
          <span aria-hidden="true">{item.icon}</span>
          {item.label}
        </button>
      ))}
    </div>
  );
}
