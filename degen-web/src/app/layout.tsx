import type { Metadata } from "next";
import { IBM_Plex_Mono, Rye, Syne } from "next/font/google";
import "./globals.css";

const headingFont = Syne({
  variable: "--font-heading",
  subsets: ["latin"],
});

const displayFont = Rye({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400"],
});

const monoFont = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "DEGEN — Recover, Recharge, Send It.",
  description: "Modern frontend chat interface setup in React and Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${headingFont.variable} ${displayFont.variable} ${monoFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>{children}</body>
    </html>
  );
}
