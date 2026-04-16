"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Bot, Send, ThumbsUp, ThumbsDown, User, MessageSquare, Plus, CheckCircle2, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import DashboardLayout from "@/components/DashboardLayout";

type Message = { role: "user" | "ai"; content: string };

const chatHistory = [
  { id: 1, agent: "Sales Assistant", category: "Sales", lastMsg: "How can I help you today?", time: "2 min ago" },
  { id: 2, agent: "Code Reviewer", category: "Engineering", lastMsg: "I found 3 issues in the PR.", time: "1 hour ago" },
  { id: 3, agent: "Support Bot", category: "Support", lastMsg: "Your ticket has been resolved.", time: "3 hours ago" },
];

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    { role: "ai", content: "Hello! I am your AI assistant. How can I help you accelerate your work today?" },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  const send = () => {
    if (!input.trim()) return;
    setMessages((m) => [...m, { role: "user", content: input }]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      setMessages((m) => [
        ...m,
        {
          role: "ai",
          content: "Based on my semantic analysis of the codebase, the issue appears to be related to the recent authentication middleware update. I recommend checking the JWT validation sequence in line 42.",
        },
      ]);
      setTyping(false);
    }, 1500);
  };

  return (
    <DashboardLayout>
      <div className="flex h-full bg-[#fafafa] p-4 lg:p-6 pb-0 overflow-hidden">
        
        {/* Chat History Sidebar */}
        <div className="hidden lg:flex w-80 flex-col bg-white border border-slate-200/60 shadow-sm rounded-tl-[1.5rem] overflow-hidden mr-4">
          <div className="p-4 md:p-6 border-b border-slate-100 flex flex-col gap-4 bg-slate-50/50">
            <h2 className="font-heading text-xl font-extrabold text-slate-900">Conversations</h2>
            <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white gap-2 font-bold shadow-md rounded-xl h-11">
              <Plus className="h-4 w-4" /> Start New Chat
            </Button>
          </div>
          <div className="flex-1 overflow-auto p-3 space-y-1">
            {chatHistory.map((c, i) => (
              <button
                key={c.id}
                className={`w-full flex items-start gap-3 rounded-xl p-3 text-left transition-colors ${i === 0 ? "bg-blue-50 border border-blue-100/50" : "hover:bg-slate-50"}`}
              >
                <div className={`rounded-xl p-2 shrink-0 ${i === 0 ? "bg-blue-600 shadow-md shadow-blue-500/20" : "bg-slate-100"}`}>
                  <MessageSquare className={`h-4 w-4 ${i === 0 ? "text-white" : "text-slate-500"}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-0.5">
                     <p className={`text-sm font-bold truncate ${i === 0 ? "text-blue-900" : "text-slate-800"}`}>{c.agent}</p>
                     <span className={`text-[10px] whitespace-nowrap font-bold ${i === 0 ? "text-blue-500" : "text-slate-400"}`}>{c.time}</span>
                  </div>
                  <p className={`text-xs font-medium truncate ${i === 0 ? "text-blue-700/80" : "text-slate-500"}`}>{c.lastMsg}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex flex-1 flex-col bg-white border border-slate-200/60 shadow-sm rounded-t-[1.5rem] overflow-hidden relative">
          
          {/* Top Bar */}
          <div className="border-b border-slate-100 px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white z-10 sticky top-0 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="bg-gradient-to-tr from-blue-600 to-cyan-500 rounded-xl p-2.5 shadow-md shadow-blue-500/20">
                <Bot className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                   <h2 className="font-heading font-extrabold text-lg text-slate-900">Sales Assistant</h2>
                   <CheckCircle2 className="w-4 h-4 text-blue-500" />
                </div>
                <div className="flex items-center gap-2 text-xs font-bold mt-0.5">
                   <span className="flex items-center gap-1.5 text-emerald-600">
                     <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Online
                   </span>
                   <span className="text-slate-300">&bull;</span>
                   <span className="text-slate-500">GPT-4o Engine</span>
                </div>
              </div>
            </div>
            <Button variant="outline" className="rounded-xl shadow-sm border-slate-200 font-bold text-slate-600">View Agent Details</Button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-auto p-6 space-y-6 bg-slate-50/30">
            {messages.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex gap-4 ${m.role === "user" ? "justify-end" : ""}`}
              >
                {m.role === "ai" && (
                  <div className="bg-gradient-to-tr from-blue-600 to-cyan-500 rounded-xl h-10 w-10 flex items-center justify-center shrink-0 shadow-md">
                    <Bot className="h-5 w-5 text-white" />
                  </div>
                )}
                <div className={`group flex flex-col ${m.role === "user" ? "items-end" : "items-start"}`}>
                  <div
                    className={`max-w-[85%] lg:max-w-[75%] px-5 py-3.5 text-sm font-medium leading-relaxed shadow-sm ${
                      m.role === "user"
                        ? "bg-slate-900 text-white rounded-[1.5rem] rounded-tr-md"
                        : "bg-white border border-slate-200/60 text-slate-800 rounded-[1.5rem] rounded-tl-md"
                    }`}
                  >
                    {m.content}
                  </div>
                  
                  {/* Feedback Actions (Only on AI messages) */}
                  {m.role === "ai" && (
                    <div className="flex gap-2 mt-2 ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-1.5 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors">
                        <ThumbsUp className="h-3.5 w-3.5" />
                      </button>
                      <button className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                        <ThumbsDown className="h-3.5 w-3.5" />
                      </button>
                      <button className="p-1.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                        <Copy className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
            
            {/* Typing Indicator */}
            {typing && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-4">
                <div className="bg-gradient-to-tr from-blue-600 to-cyan-500 rounded-xl h-10 w-10 flex items-center justify-center shadow-md">
                  <Bot className="h-5 w-5 text-white" />
                </div>
                <div className="bg-white border border-slate-200/60 shadow-sm rounded-[1.5rem] rounded-tl-md px-5 py-4 w-[80px]">
                  <div className="flex justify-between items-center h-full">
                    <span className="w-2 h-2 rounded-full bg-slate-300 animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-2 h-2 rounded-full bg-slate-300 animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-2 h-2 rounded-full bg-slate-300 animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              </motion.div>
            )}
            <div ref={bottomRef} className="h-4" />
          </div>

          {/* Input Area */}
          <div className="p-4 md:p-6 bg-white border-t border-slate-100 z-10 w-full mb-4">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                send();
              }}
              className="relative max-w-4xl mx-auto"
            >
              <Input
                placeholder="Ask Sales Assistant anything..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="w-full bg-slate-50 border-slate-200 focus-visible:ring-blue-500 rounded-full pl-6 pr-14 py-6 text-sm font-medium shadow-sm transition-all hover:bg-white focus:bg-white"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors shadow-md shadow-blue-500/20 disabled:opacity-50 disabled:shadow-none"
              >
                <Send className="h-4 w-4 -ml-0.5" />
              </button>
            </form>
            <p className="text-center text-[10px] font-medium text-slate-400 mt-3 hidden md:block">
               AI agents can make mistakes. Consider verifying important information.
            </p>
          </div>
          
        </div>
      </div>
    </DashboardLayout>
  );
}
