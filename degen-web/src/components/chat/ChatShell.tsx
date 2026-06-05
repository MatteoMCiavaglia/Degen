"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { ChatComposer } from "@/components/chat/ChatComposer";
import { ChatHeader } from "@/components/chat/ChatHeader";
import { MessageList } from "@/components/chat/MessageList";
import { TypingIndicator } from "@/components/chat/TypingIndicator";
import { ChatMessage } from "@/components/chat/types";

const openingMessages: ChatMessage[] = [
  {
    id: "seed-1",
    sender: "agent",
    text: "Welcome to DEGEN. Drop what you had tonight and how you feel, and I will help you bounce back smart.",
    timestamp: "just now",
  },
];

function formatTimeStamp() {
  return new Date().toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
  });
}

function createMockReply(input: string) {
  const stripped = input.trim();
  if (!stripped) {
    return "Tell me one more detail and I will tune the suggestion.";
  }

  return `Solid check-in. Based on "${stripped}", start with water, add protein and carbs, and keep tomorrow low pressure.`;
}

export function ChatShell() {
  const [messages, setMessages] = useState<ChatMessage[]>(openingMessages);
  const [draft, setDraft] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const endRef = useRef<HTMLDivElement | null>(null);

  const subtitle = useMemo(
    () =>
      "A modern UI-only chat surface for your future AI coach. This mock flow is frontend-only and ready for backend wiring later.",
    [],
  );

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, isTyping]);

  const sendMessage = () => {
    const trimmed = draft.trim();
    if (!trimmed || isTyping) {
      return;
    }

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: trimmed,
      timestamp: formatTimeStamp(),
    };

    setMessages((previous) => [...previous, userMessage]);
    setDraft("");
    setIsTyping(true);

    window.setTimeout(() => {
      const agentMessage: ChatMessage = {
        id: `agent-${Date.now()}`,
        sender: "agent",
        text: createMockReply(trimmed),
        timestamp: formatTimeStamp(),
      };

      setMessages((previous) => [...previous, agentMessage]);
      setIsTyping(false);
    }, 850);
  };

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-5xl flex-col gap-4 px-4 py-6 md:px-8 md:py-8">
      <ChatHeader title="Recovery Chat Booth" subtitle={subtitle} />

      <div className="grid flex-1 gap-4">
        <MessageList messages={messages} />
        {isTyping ? <TypingIndicator /> : null}
        <div ref={endRef} aria-hidden="true" />
      </div>

      <div className="sticky bottom-3">
        <ChatComposer
          value={draft}
          onChange={setDraft}
          onSend={sendMessage}
          disabled={isTyping}
        />
      </div>
    </div>
  );
}
