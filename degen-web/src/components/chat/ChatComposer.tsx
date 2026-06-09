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
      className="flex items-center gap-2"
      onSubmit={handleSubmit}
      aria-label="Message composer"
    >
      <label htmlFor="chat-input" className="sr-only">
        Write a message
      </label>
      <textarea
        id="chat-input"
        rows={1}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Ask Degen…"
        className="max-h-24 w-full resize-none rounded-full border border-[var(--accent-primary)]/25 bg-black/40 px-4 py-2.5 text-sm text-[var(--text-primary)] outline-none transition placeholder:text-[var(--text-muted)] focus:border-[var(--accent-primary)] focus:ring-2 focus:ring-[color:var(--accent-primary)]/35"
      />
      <button
        type="submit"
        disabled={!trimmed || disabled}
        className="shrink-0 rounded-full bg-[var(--accent-primary)] px-5 py-2.5 text-sm font-semibold text-[#1c1206] transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-45"
      >
        Send
      </button>
    </form>
  );
}
