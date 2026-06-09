type ChatHeaderProps = {
  title: string;
  subtitle: string;
  onClose?: () => void;
};

export function ChatHeader({ title, subtitle, onClose }: ChatHeaderProps) {
  return (
    <header className="relative flex items-start justify-between gap-3 border-b border-[var(--accent-primary)]/20 bg-gradient-to-r from-[#2a130c] to-[#1d100b] px-4 py-3">
      <div className="min-w-0">
        <h1 className="text-sm font-bold uppercase tracking-[0.16em] text-[var(--text-primary)]">
          {title}
        </h1>
        <p className="mt-0.5 truncate text-[11px] text-[var(--text-muted)]">
          {subtitle}
        </p>
      </div>
      <div className="flex shrink-0 items-center gap-1 text-[var(--text-muted)]">
        <button
          type="button"
          aria-label="More options"
          className="flex h-7 w-7 items-center justify-center rounded-md transition hover:bg-white/10 hover:text-[var(--text-primary)]"
        >
          <span aria-hidden="true" className="text-lg leading-none">
            …
          </span>
        </button>
        <button
          type="button"
          aria-label="Close chat"
          onClick={onClose}
          className="flex h-7 w-7 items-center justify-center rounded-md transition hover:bg-white/10 hover:text-[var(--text-primary)]"
        >
          <span aria-hidden="true" className="text-base leading-none">
            ✕
          </span>
        </button>
      </div>
    </header>
  );
}
