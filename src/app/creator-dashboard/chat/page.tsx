"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Bot, Send, ThumbsUp, ThumbsDown, User, MessageSquare, Plus, CheckCircle2, Copy } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type Message = { role: "user" | "ai"; content: string };

const sessions = [
  { id: 1, agent: "Customer Support Router", lastMsg: "Hi! How can I help you today?", time: "2m" },
  { id: 2, agent: "Sales Outreach Generator", lastMsg: "Draft sent for review.", time: "1h" },
  { id: 3, agent: "Legal Document Analyzer", lastMsg: "Found 3 clauses to review.", time: "3h" },
];

export default function TestChatsPage() {
  const [messages, setMessages] = useState<Message[]>([
    { role: "ai", content: "[TEST MODE] Hi! I'm Customer Support Router. Ask me anything to verify my behavior." },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages, typing]);

  const send = () => {
    if (!input.trim()) return;
    setMessages((m) => [...m, { role: "user", content: input }]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      setMessages((m) => [...m, { role: "ai", content: "[TEST RESPONSE] This is a simulated response from your configured agent." }]);
      setTyping(false);
    }, 1500);
  };

  return (
    <div className="flex h-full bg-[#fafafa] p-4 lg:p-6 pb-0 overflow-hidden">
      {/* Sessions Sidebar */}
      <div className="hidden lg:flex w-72 flex-col bg-white border border-slate-200/60 shadow-sm rounded-tl-[1.5rem] overflow-hidden mr-4">
        <div className="p-5 border-b border-slate-100 bg-slate-50/50">
          <h2 className="font-heading text-lg font-extrabold text-slate-900 mb-3">Test Sessions</h2>
          <Button className="w-full bg-violet-600 hover:bg-violet-700 text-white gap-2 font-bold shadow-md rounded-xl h-10"><Plus className="h-4 w-4" /> New Test</Button>
        </div>
        <div className="flex-1 overflow-auto p-3 space-y-1">
          {sessions.map((s, i) => (
            <button key={s.id} className={`w-full flex items-start gap-3 rounded-xl p-3 text-left transition-colors ${i === 0 ? "bg-violet-50 border border-violet-100/50" : "hover:bg-slate-50"}`}>
              <div className={`rounded-xl p-2 shrink-0 ${i === 0 ? "bg-violet-600" : "bg-slate-100"}`}><MessageSquare className={`h-4 w-4 ${i === 0 ? "text-white" : "text-slate-500"}`} /></div>
              <div className="flex-1 min-w-0">
                <p className={`text-sm font-bold truncate ${i === 0 ? "text-violet-900" : "text-slate-800"}`}>{s.agent}</p>
                <p className={`text-xs font-medium truncate mt-0.5 ${i === 0 ? "text-violet-700/80" : "text-slate-500"}`}>{s.lastMsg}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Chat */}
      <div className="flex flex-1 flex-col bg-white border border-slate-200/60 shadow-sm rounded-t-[1.5rem] overflow-hidden">
        <div className="border-b border-slate-100 px-6 py-4 flex items-center justify-between bg-white sticky top-0">
          <div className="flex items-center gap-4">
            <div className="bg-gradient-to-tr from-violet-600 to-purple-500 rounded-xl p-2.5 shadow-md"><Bot className="h-5 w-5 text-white" /></div>
            <div>
              <div className="flex items-center gap-2"><h2 className="font-heading font-extrabold text-lg text-slate-900">Customer Support Router</h2><CheckCircle2 className="w-4 h-4 text-violet-500" /></div>
              <div className="flex items-center gap-2 text-xs font-bold mt-0.5">
                <span className="flex items-center gap-1.5 text-amber-600"><span className="w-2 h-2 rounded-full bg-amber-400"></span> Test Mode</span>
              </div>
            </div>
          </div>
          <div className="text-xs font-bold text-amber-600 bg-amber-50 border border-amber-200 px-3 py-1.5 rounded-full">🧪 Testing Environment</div>
        </div>

        <div className="flex-1 overflow-auto p-6 space-y-6 bg-slate-50/30">
          {messages.map((m, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className={`flex gap-4 ${m.role === "user" ? "justify-end" : ""}`}>
              {m.role === "ai" && <div className="bg-gradient-to-tr from-violet-600 to-purple-500 rounded-xl h-10 w-10 flex items-center justify-center shrink-0 shadow-md"><Bot className="h-5 w-5 text-white" /></div>}
              <div className={`group flex flex-col ${m.role === "user" ? "items-end" : "items-start"}`}>
                <div className={`max-w-[75%] px-5 py-3.5 text-sm font-medium leading-relaxed shadow-sm ${m.role === "user" ? "bg-slate-900 text-white rounded-[1.5rem] rounded-tr-md" : "bg-white border border-slate-200/60 text-slate-800 rounded-[1.5rem] rounded-tl-md"}`}>{m.content}</div>
                {m.role === "ai" && (
                  <div className="flex gap-2 mt-2 ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-1.5 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg"><ThumbsUp className="h-3.5 w-3.5" /></button>
                    <button className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg"><ThumbsDown className="h-3.5 w-3.5" /></button>
                    <button className="p-1.5 text-slate-400 hover:text-violet-600 hover:bg-violet-50 rounded-lg"><Copy className="h-3.5 w-3.5" /></button>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
          {typing && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-4">
              <div className="bg-gradient-to-tr from-violet-600 to-purple-500 rounded-xl h-10 w-10 flex items-center justify-center shadow-md"><Bot className="h-5 w-5 text-white" /></div>
              <div className="bg-white border border-slate-200/60 shadow-sm rounded-[1.5rem] rounded-tl-md px-5 py-4 w-[80px]">
                <div className="flex justify-between">{[0, 150, 300].map((d) => <span key={d} className="w-2 h-2 rounded-full bg-slate-300 animate-bounce" style={{ animationDelay: `${d}ms` }} />)}</div>
              </div>
            </motion.div>
          )}
          <div ref={bottomRef} className="h-4" />
        </div>

        <div className="p-5 bg-white border-t border-slate-100 mb-4">
          <form onSubmit={(e) => { e.preventDefault(); send(); }} className="relative max-w-4xl mx-auto">
            <Input placeholder="Test your agent..." value={input} onChange={(e) => setInput(e.target.value)} className="w-full bg-slate-50 border-slate-200 rounded-full pl-6 pr-14 py-6 text-sm font-medium shadow-sm hover:bg-white focus:bg-white" />
            <button type="submit" disabled={!input.trim()} className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-violet-600 text-white rounded-full hover:bg-violet-700 transition-colors disabled:opacity-50"><Send className="h-4 w-4 -ml-0.5" /></button>
          </form>
          <p className="text-center text-[10px] font-medium text-slate-400 mt-3">This is a test environment. Chats do not affect production metrics.</p>
        </div>
      </div>
    </div>
  );
}
