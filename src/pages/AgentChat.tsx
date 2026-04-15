import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Bot, Send, ThumbsUp, ThumbsDown, User, MessageSquare, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import DashboardLayout from "@/components/DashboardLayout";

type Message = { role: "user" | "ai"; content: string };

const chatHistory = [
  { id: 1, agent: "Sales Assistant", lastMsg: "How can I help?", time: "2m" },
  { id: 2, agent: "Code Reviewer", lastMsg: "Found 3 issues", time: "1h" },
  { id: 3, agent: "Support Bot", lastMsg: "Ticket resolved", time: "3h" },
];

const AgentChat = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: "ai", content: "Hello! I'm your AI assistant. How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages, typing]);

  const send = () => {
    if (!input.trim()) return;
    setMessages(m => [...m, { role: "user", content: input }]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      setMessages(m => [...m, { role: "ai", content: "That's a great question! Let me help you with that. Based on my analysis, here's what I recommend..." }]);
      setTyping(false);
    }, 1500);
  };

  return (
    <DashboardLayout>
      <div className="flex h-[calc(100vh)] overflow-hidden">
        {/* Chat History Sidebar */}
        <div className="hidden lg:flex w-72 flex-col border-r bg-card">
          <div className="p-4 border-b">
            <Button className="w-full gradient-primary text-primary-foreground gap-2" size="sm">
              <Plus className="h-4 w-4" /> New Chat
            </Button>
          </div>
          <div className="flex-1 overflow-auto p-2 space-y-1">
            {chatHistory.map(c => (
              <button key={c.id} className="w-full flex items-center gap-3 rounded-lg px-3 py-3 text-left hover:bg-muted transition-colors">
                <div className="rounded-lg bg-primary/10 p-1.5"><MessageSquare className="h-3.5 w-3.5 text-primary" /></div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{c.agent}</p>
                  <p className="text-xs text-muted-foreground truncate">{c.lastMsg}</p>
                </div>
                <span className="text-xs text-muted-foreground">{c.time}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex flex-1 flex-col">
          <div className="border-b px-6 py-3 flex items-center gap-3">
            <div className="gradient-primary rounded-lg p-1.5"><Bot className="h-4 w-4 text-primary-foreground" /></div>
            <div>
              <p className="font-heading font-semibold text-sm">Sales Assistant</p>
              <p className="text-xs text-muted-foreground">Online</p>
            </div>
          </div>

          <div className="flex-1 overflow-auto p-6 space-y-4">
            {messages.map((m, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                className={`flex gap-3 ${m.role === "user" ? "justify-end" : ""}`}>
                {m.role === "ai" && (
                  <div className="gradient-primary rounded-lg p-1.5 h-8 w-8 flex items-center justify-center shrink-0">
                    <Bot className="h-4 w-4 text-primary-foreground" />
                  </div>
                )}
                <div className={`max-w-lg rounded-2xl px-4 py-3 text-sm ${
                  m.role === "user" ? "gradient-primary text-primary-foreground" : "glass-card shadow-card"
                }`}>
                  {m.content}
                  {m.role === "ai" && (
                    <div className="flex gap-2 mt-2 pt-2 border-t border-border/50">
                      <button className="text-muted-foreground hover:text-foreground transition-colors"><ThumbsUp className="h-3.5 w-3.5" /></button>
                      <button className="text-muted-foreground hover:text-foreground transition-colors"><ThumbsDown className="h-3.5 w-3.5" /></button>
                    </div>
                  )}
                </div>
                {m.role === "user" && (
                  <div className="rounded-lg bg-primary/10 p-1.5 h-8 w-8 flex items-center justify-center shrink-0">
                    <User className="h-4 w-4 text-primary" />
                  </div>
                )}
              </motion.div>
            ))}
            {typing && (
              <div className="flex gap-3">
                <div className="gradient-primary rounded-lg p-1.5 h-8 w-8 flex items-center justify-center"><Bot className="h-4 w-4 text-primary-foreground" /></div>
                <div className="glass-card shadow-card rounded-2xl px-4 py-3">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          <div className="border-t p-4">
            <form onSubmit={e => { e.preventDefault(); send(); }} className="flex gap-3">
              <Input placeholder="Type a message..." value={input} onChange={e => setInput(e.target.value)} className="flex-1" />
              <Button type="submit" className="gradient-primary text-primary-foreground"><Send className="h-4 w-4" /></Button>
            </form>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AgentChat;
