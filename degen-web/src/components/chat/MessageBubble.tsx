import { ChatMessage } from "@/components/chat/types";

type MessageBubbleProps = {
  message: ChatMessage;
};

export function MessageBubble({ message }: MessageBubbleProps) {
  const isUser = message.sender === "user";

  return (
    <article
      className={`message-pop flex w-full ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`max-w-[85%] rounded-2xl border px-3.5 py-2.5 shadow-[0_8px_22px_rgba(0,0,0,0.3)] ${
          isUser
            ? "border-[var(--bubble-user-border)] bg-[var(--bubble-user-bg)] text-[var(--bubble-user-text)]"
            : "border-[var(--bubble-agent-border)] bg-[var(--bubble-agent-bg)] text-[var(--bubble-agent-text)]"
        }`}
      >
        <p className="whitespace-pre-wrap text-[13px] leading-relaxed">
          {message.text}
        </p>
        <p className="mt-1.5 text-[10px] uppercase tracking-[0.16em] opacity-60">
          {message.timestamp}
        </p>
      </div>
    </article>
  );
}
