"use client";

import { FormEvent, KeyboardEvent } from "react";

type ChatComposerProps = {
  value: string;
  disabled?: boolean;
  onChange: (value: string) => void;
  onSend: () => void;
};

export function ChatComposer({
  value,
  disabled,
  onChange,
  onSend,
}: ChatComposerProps) {
  const trimmed = value.trim();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!trimmed || disabled) {
      return;
    }

    onSend();
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      if (!trimmed || disabled) {
        return;
      }
      onSend();
    }
  };

  return (
    <form
      className="rounded-3xl border border-white/20 bg-white/7 p-3 backdrop-blur-xl"
      onSubmit={handleSubmit}
      aria-label="Message composer"
    >
      <label htmlFor="chat-input" className="sr-only">
        Write a message
      </label>
      <textarea
        id="chat-input"
        rows={2}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="What did you drink, and how are you feeling?"
        className="w-full resize-none rounded-2xl border border-white/12 bg-black/16 px-4 py-3 text-sm text-[var(--text-primary)] outline-none transition placeholder:text-[var(--text-muted)] focus:border-[var(--accent-primary)] focus:ring-2 focus:ring-[color:var(--accent-primary)]/35"
      />
      <div className="mt-3 flex items-center justify-between gap-3">
        <p className="text-xs text-[var(--text-muted)]">
          Enter to send, Shift+Enter for newline.
        </p>
        <button
          type="submit"
          disabled={!trimmed || disabled}
          className="rounded-full bg-[var(--accent-primary)] px-5 py-2.5 text-sm font-semibold text-black transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-45"
        >
          Send
        </button>
      </div>
    </form>
  );
}
