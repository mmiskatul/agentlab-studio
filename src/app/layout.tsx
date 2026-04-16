import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/Providers";

export const metadata: Metadata = {
  title: "AgentLab Studio – Build & Test AI Agents",
  description:
    "Create custom AI agents with templates, prompts, and knowledge base. Ship intelligent assistants faster than ever.",
  keywords: ["AI agents", "agent builder", "LLM", "chatbot", "knowledge base"],
  openGraph: {
    title: "AgentLab Studio",
    description: "Build and test AI agents in minutes.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
