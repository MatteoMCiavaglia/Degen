import { MessageBubble } from "@/components/chat/MessageBubble";
import { ChatMessage } from "@/components/chat/types";

type MessageListProps = {
  messages: ChatMessage[];
};

export function MessageList({ messages }: MessageListProps) {
  return (
    <section
      className="flex-1 space-y-4 overflow-y-auto rounded-3xl border border-white/15 bg-black/18 p-4 backdrop-blur-xl md:p-5"
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
