import { MessageBubble } from "@/components/chat/MessageBubble";
import { ChatMessage } from "@/components/chat/types";

type MessageListProps = {
  messages: ChatMessage[];
};

export function MessageList({ messages }: MessageListProps) {
  return (
    <section
      className="h-[280px] space-y-3 overflow-y-auto rounded-xl border border-[var(--accent-primary)]/15 bg-black/30 p-3"
      role="log"
      aria-live="polite"
      aria-label="Chat messages"
    >
      {messages.map((message) => (
        <MessageBubble key={message.id} message={message} />
      ))}
    </section>
  );
}
