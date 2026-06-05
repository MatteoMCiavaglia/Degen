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
        className={`max-w-[82%] rounded-3xl border px-4 py-3 shadow-[0_16px_40px_rgba(0,0,0,0.24)] md:max-w-[70%] ${
          isUser
            ? "border-[var(--bubble-user-border)] bg-[var(--bubble-user-bg)] text-[var(--bubble-user-text)]"
            : "border-[var(--bubble-agent-border)] bg-[var(--bubble-agent-bg)] text-[var(--bubble-agent-text)]"
        }`}
      >
        <p className="whitespace-pre-wrap text-sm leading-relaxed md:text-[15px]">
          {message.text}
        </p>
        <p className="mt-2 text-[11px] uppercase tracking-[0.16em] opacity-65">
          {message.timestamp}
        </p>
      </div>
    </article>
  );
}
