"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { ChatComposer } from "@/components/chat/ChatComposer";
import { ChatHeader } from "@/components/chat/ChatHeader";
import { MessageList } from "@/components/chat/MessageList";
import { TypingIndicator } from "@/components/chat/TypingIndicator";
import { ChatMessage } from "@/components/chat/types";

const STREAMING_ID = "streaming-agent";

const openingMessages: ChatMessage[] = [
  {
    id: "seed-1",
    sender: "agent",
    text: "Yo, how's the head feeling today? Hit me up with your recovery questions.",
    timestamp: "just now",
  },
];

function formatTimeStamp() {
  return new Date().toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
  });
}

export function ChatShell() {
  const [messages, setMessages] = useState<ChatMessage[]>(openingMessages);
  const [draft, setDraft] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const endRef = useRef<HTMLDivElement | null>(null);
  const streamBufferRef = useRef("");
  const rafIdRef = useRef<number | null>(null);

  const subtitle = useMemo(
    () => "Drop what you had tonight and how you feel.",
    [],
  );

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "instant", block: "end" });
  }, [messages, isTyping]);

  const sendMessage = async () => {
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

    try {
      const history = [...messages, userMessage];
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: history }),
      });

      if (!response.ok || !response.body) {
        throw new Error(`Request failed: ${response.status}`);
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";
      let streamingStarted = false;

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n");
        buffer = lines.pop() ?? "";

        for (const line of lines) {
          if (!line.trim()) continue;
          let event: { type: string; text?: string; message?: string };
          try {
            event = JSON.parse(line);
          } catch {
            continue;
          }

          if (event.type === "delta" && event.text) {
            if (!streamingStarted) {
              streamingStarted = true;
              setIsTyping(false);
              setMessages((prev) => [
                ...prev,
                {
                  id: STREAMING_ID,
                  sender: "agent",
                  text: event.text!,
                  timestamp: formatTimeStamp(),
                },
              ]);
            } else {
              streamBufferRef.current += event.text;
              if (rafIdRef.current === null) {
                rafIdRef.current = requestAnimationFrame(() => {
                  const buffered = streamBufferRef.current;
                  streamBufferRef.current = "";
                  rafIdRef.current = null;
                  setMessages((prev) =>
                    prev.map((m) =>
                      m.id === STREAMING_ID
                        ? { ...m, text: m.text + buffered }
                        : m,
                    ),
                  );
                });
              }
            }
          } else if (event.type === "done") {
            if (rafIdRef.current !== null) {
              cancelAnimationFrame(rafIdRef.current);
              rafIdRef.current = null;
            }
            const remaining = streamBufferRef.current;
            streamBufferRef.current = "";
            setMessages((prev) =>
              prev.map((m) =>
                m.id === STREAMING_ID
                  ? { ...m, id: `agent-${Date.now()}`, text: m.text + remaining }
                  : m,
              ),
            );
          } else if (event.type === "error") {
            throw new Error(event.message ?? "Stream error");
          }
        }
      }
    } catch (err) {
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = null;
      }
      streamBufferRef.current = "";
      const errorText =
        err instanceof Error ? err.message : "Something went wrong.";
      setMessages((prev) => [
        ...prev.filter((m) => m.id !== STREAMING_ID),
        {
          id: `error-${Date.now()}`,
          sender: "agent",
          text: `Error: ${errorText}`,
          timestamp: formatTimeStamp(),
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  if (!isOpen) {
    return (
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label="Open Degen Chat"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--accent-primary)] text-2xl shadow-[0_12px_30px_rgba(0,0,0,0.5)] transition hover:brightness-110"
      >
        💬
      </button>
    );
  }

  return (
    <div className="fixed bottom-5 right-5 z-50 flex w-[calc(100vw-2.5rem)] max-w-[360px] flex-col overflow-hidden rounded-2xl border border-[var(--accent-primary)]/25 bg-[var(--surface)]/95 shadow-[0_24px_60px_rgba(0,0,0,0.6)] backdrop-blur-xl">
      <ChatHeader
        title="Degen Chat"
        subtitle={subtitle}
        onClose={() => setIsOpen(false)}
      />

      <div className="flex flex-col gap-2 px-3 pb-2 pt-3">
        <MessageList messages={messages} />
        {isTyping ? <TypingIndicator /> : null}
        <div ref={endRef} aria-hidden="true" />
      </div>

      <div className="px-3 pb-3">
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
