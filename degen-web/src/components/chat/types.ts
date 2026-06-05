export type Sender = "user" | "agent";

export type ChatMessage = {
  id: string;
  sender: Sender;
  text: string;
  timestamp: string;
};
