export function TypingIndicator() {
  return (
    <div className="flex justify-start">
      <div className="inline-flex items-center gap-2 rounded-2xl border border-[var(--bubble-agent-border)] bg-[var(--bubble-agent-bg)] px-4 py-2 text-sm text-[var(--bubble-agent-text)] shadow-[0_14px_36px_rgba(0,0,0,0.2)]">
        <span className="text-xs uppercase tracking-[0.14em] opacity-70">AI typing</span>
        <span className="dot-pulse" aria-hidden="true" />
      </div>
    </div>
  );
}
