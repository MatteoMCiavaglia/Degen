type ChatHeaderProps = {
  title: string;
  subtitle: string;
};

export function ChatHeader({ title, subtitle }: ChatHeaderProps) {
  return (
    <header className="relative overflow-hidden rounded-3xl border border-white/20 bg-white/8 px-6 py-5 backdrop-blur-xl">
      <div className="pointer-events-none absolute -left-24 -top-20 h-52 w-52 rounded-full bg-[radial-gradient(circle,_rgba(255,190,92,0.36),_transparent_68%)]" />
      <p className="text-xs uppercase tracking-[0.22em] text-[var(--text-muted)]">
        Degen chat
      </p>
      <h1 className="mt-2 text-2xl font-semibold leading-tight text-[var(--text-primary)] md:text-3xl">
        {title}
      </h1>
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[var(--text-secondary)] md:text-base">
        {subtitle}
      </p>
    </header>
  );
}
