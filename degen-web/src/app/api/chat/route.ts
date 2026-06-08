import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import fs from "fs";
import path from "path";

export const runtime = "nodejs";

const PERSONA_PATH = path.join(process.cwd(), "src", "lib", "persona.md");

function loadPersona(): string {
  try {
    return fs.readFileSync(PERSONA_PATH, "utf-8");
  } catch {
    return "You are a helpful AI assistant.";
  }
}

type IncomingMessage = {
  sender: "user" | "agent";
  text: string;
};

export async function POST(req: NextRequest) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey || apiKey === "sk-REPLACE_ME") {
    return NextResponse.json(
      { error: "OPENAI_API_KEY is not configured. Set it in .env.local." },
      { status: 500 },
    );
  }

  let body: { messages: IncomingMessage[] };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const { messages } = body;
  if (!Array.isArray(messages) || messages.length === 0) {
    return NextResponse.json(
      { error: "messages must be a non-empty array." },
      { status: 400 },
    );
  }

  const persona = loadPersona();

  const openaiMessages: OpenAI.Chat.ChatCompletionMessageParam[] = [
    { role: "system", content: persona },
    ...messages.map((m): OpenAI.Chat.ChatCompletionMessageParam => ({
      role: m.sender === "agent" ? "assistant" : "user",
      content: m.text,
    })),
  ];

  const client = new OpenAI({ apiKey });

  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    async start(controller) {
      try {
        const completion = await client.chat.completions.create({
          model: "gpt-4.1",
          stream: true,
          messages: openaiMessages,
        });

        for await (const chunk of completion) {
          const text = chunk.choices[0]?.delta?.content;
          if (text) {
            controller.enqueue(
              encoder.encode(JSON.stringify({ type: "delta", text }) + "\n"),
            );
          }
        }

        controller.enqueue(encoder.encode(JSON.stringify({ type: "done" }) + "\n"));
        controller.close();
      } catch (err) {
        const message = err instanceof Error ? err.message : "Unknown error";
        controller.enqueue(
          encoder.encode(JSON.stringify({ type: "error", message }) + "\n"),
        );
        controller.close();
      }
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "X-Content-Type-Options": "nosniff",
    },
  });
}
