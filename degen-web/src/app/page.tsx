import { ChatShell } from "@/components/chat/ChatShell";
import { BottomNav } from "@/components/landing/BottomNav";
import { Hero } from "@/components/landing/Hero";
import { TopBanner } from "@/components/landing/TopBanner";

export default function Home() {
  return (
    <div className="saloon-bg relative flex min-h-screen flex-col">
      <TopBanner />
      <main className="flex flex-1 flex-col justify-between">
        <Hero />
        <BottomNav />
      </main>
      <ChatShell />
    </div>
  );
}
