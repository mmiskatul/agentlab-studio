"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Bot, Save, Send, Settings2, FileText, Zap, User, Database, UploadCloud, File } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";

export default function CreatorStudioPage() {
  const [temperature, setTemperature] = useState([0.7]);
  const [activeTab, setActiveTab] = useState("setup");
  const [messages, setMessages] = useState([{ role: "assistant", content: "Hi! I'm your agent preview. Ask me anything." }]);
  const [input, setInput] = useState("");

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages(prev => [...prev, { role: "user", content: input }]);
    setInput("");
    setTimeout(() => setMessages(prev => [...prev, { role: "assistant", content: "This is a live preview response from your current configuration." }]), 1000);
  };

  const tabs = [
    { id: "setup", label: "Setup", icon: Settings2 },
    { id: "prompt", label: "Instructions", icon: FileText },
    { id: "knowledge", label: "Knowledge", icon: Database },
    { id: "advanced", label: "Advanced", icon: Zap },
  ];

  return (
    <div className="h-full flex flex-col lg:flex-row overflow-hidden bg-[#fafafa]">
      {/* Left: Config */}
      <div className="flex-1 flex flex-col h-full border-r border-slate-200/60 overflow-y-auto">
        <div className="p-6 md:p-8 bg-white border-b border-slate-200/60 flex items-center justify-between sticky top-0 z-10">
          <div><h1 className="font-heading text-2xl font-extrabold text-slate-900">Creator Studio</h1><p className="text-sm font-medium text-slate-500 mt-0.5">Configure and publish your AI agent.</p></div>
          <div className="flex gap-2">
            <Button variant="outline" className="font-bold border-slate-200/60 rounded-xl shadow-sm">Save Draft</Button>
            <Button className="bg-violet-600 hover:bg-violet-700 text-white font-bold rounded-xl shadow-md"><Save className="w-4 h-4 mr-2" /> Publish</Button>
          </div>
        </div>

        <div className="flex gap-1 px-6 md:px-8 py-4 border-b border-slate-100 bg-slate-50 overflow-x-auto">
          {tabs.map((tab) => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)}
              className={`shrink-0 flex items-center text-sm font-bold px-4 py-2 rounded-xl transition-all ${activeTab === tab.id ? "bg-white border border-slate-200 shadow-sm text-slate-900" : "text-slate-500 hover:text-slate-700"}`}
            ><tab.icon className="w-4 h-4 mr-2" />{tab.label}</button>
          ))}
        </div>

        <div className="p-6 md:p-8 max-w-3xl">
          {activeTab === "setup" && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
              <div className="space-y-2"><label className="text-sm font-bold text-slate-700">Agent Name</label><Input placeholder="e.g. Sales Outreach Bot" className="h-12 rounded-xl border-slate-200 bg-slate-50 font-semibold" /></div>
              <div className="space-y-2"><label className="text-sm font-bold text-slate-700">Short Description</label><Textarea placeholder="What does this agent do?" rows={3} className="rounded-xl border-slate-200 bg-slate-50 font-medium resize-none" /></div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2"><label className="text-sm font-bold text-slate-700">Base Template</label>
                  <Select defaultValue="blank"><SelectTrigger className="h-12 rounded-xl border-slate-200 bg-white font-semibold"><SelectValue /></SelectTrigger>
                    <SelectContent><SelectItem value="blank">Blank Canvas</SelectItem><SelectItem value="support">Customer Support</SelectItem><SelectItem value="sales">Sales Assistant</SelectItem><SelectItem value="data">Data Analyst</SelectItem></SelectContent>
                  </Select>
                </div>
                <div className="space-y-2"><label className="text-sm font-bold text-slate-700">Category Tag</label><Input placeholder="e.g. Operations" className="h-12 rounded-xl border-slate-200 bg-slate-50 font-semibold" /></div>
              </div>
            </motion.div>
          )}

          {activeTab === "prompt" && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
              <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl flex gap-3 text-sm text-amber-800"><Zap className="w-4 h-4 shrink-0 mt-0.5" /><p className="font-medium">Be specific. Define response format and how to handle unknown queries.</p></div>
              <div className="space-y-2"><label className="text-sm font-bold text-slate-700">System Prompt</label><Textarea placeholder="You are a helpful AI assistant specialized in..." rows={12} className="rounded-xl border-slate-200 bg-slate-50 font-mono text-sm leading-relaxed resize-y" /></div>
              <div className="space-y-2"><label className="text-sm font-bold text-slate-700">Welcome Message</label><Input placeholder="First message the agent says…" className="h-12 rounded-xl border-slate-200 bg-slate-50 font-semibold" /></div>
            </motion.div>
          )}

          {activeTab === "knowledge" && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
              <div className="bg-blue-50 border border-blue-200 p-4 rounded-xl flex gap-3 text-sm text-blue-800"><Database className="w-4 h-4 shrink-0 mt-0.5" /><p className="font-medium">Upload files the agent will use as context when answering queries.</p></div>
              <div className="border-2 border-dashed border-slate-200/80 rounded-2xl p-10 hover:bg-slate-50 cursor-pointer text-center group">
                <div className="w-16 h-16 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform"><UploadCloud className="w-7 h-7 text-violet-500" /></div>
                <h3 className="font-heading font-extrabold text-slate-900 text-lg mb-1">Upload Data Source</h3>
                <p className="text-sm font-medium text-slate-500 mb-6">PDFs, Text, JSON. Max 50MB.</p>
                <Button className="bg-violet-600 hover:bg-violet-700 text-white font-bold rounded-xl">Browse Files</Button>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-3 text-sm flex items-center justify-between">Attached Files <span className="text-[10px] uppercase font-bold text-slate-400">1 item</span></h4>
                <div className="flex items-center justify-between p-3 border border-slate-200 rounded-xl bg-white shadow-sm">
                  <div className="flex items-center gap-3"><div className="p-2 rounded-lg bg-orange-50"><File className="w-4 h-4 text-orange-600" /></div><div><p className="font-bold text-sm text-slate-900">sales_playbook_2026.pdf</p><p className="text-xs font-semibold text-slate-400">2.4 MB • Indexed</p></div></div>
                  <Button variant="ghost" size="sm" className="text-red-500 hover:bg-red-50 rounded-lg">Remove</Button>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "advanced" && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
              <div className="space-y-2"><label className="text-sm font-bold text-slate-700">LLM Engine</label>
                <Select defaultValue="gpt4"><SelectTrigger className="h-12 rounded-xl border-slate-200 bg-white font-semibold"><SelectValue /></SelectTrigger>
                  <SelectContent><SelectItem value="gpt4">GPT-4o (Premium)</SelectItem><SelectItem value="gpt35">GPT-3.5 Turbo (Fast)</SelectItem><SelectItem value="claude">Claude 3 Opus</SelectItem></SelectContent>
                </Select>
              </div>
              <div className="p-6 border border-slate-200 rounded-xl bg-slate-50 space-y-4">
                <div className="flex justify-between items-center">
                  <div><label className="text-sm font-bold text-slate-700 block">Temperature</label><p className="text-[11px] font-medium text-slate-500">Creativity vs consistency</p></div>
                  <div className="w-12 h-8 bg-white border border-slate-200 rounded-lg flex items-center justify-center font-bold text-sm shadow-sm">{temperature[0]}</div>
                </div>
                <Slider value={temperature} onValueChange={setTemperature} max={1} step={0.1} className="py-2" />
                <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase tracking-widest"><span>Precise</span><span>Creative</span></div>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Right: Preview Chat */}
      <div className="hidden lg:flex w-[400px] xl:w-[450px] bg-white flex-col border-l border-slate-200/60 shrink-0">
        <div className="p-4 border-b border-slate-100 flex items-center gap-2 bg-slate-50/50">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
          <span className="text-xs font-bold text-slate-600 uppercase tracking-widest">Live Preview</span>
        </div>
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/30">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.role === "user" ? "bg-slate-200" : "bg-gradient-to-tr from-violet-600 to-purple-500"}`}>
                {msg.role === "user" ? <User className="w-4 h-4 text-slate-600" /> : <Bot className="w-4 h-4 text-white" />}
              </div>
              <div className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-[13px] font-medium leading-relaxed ${msg.role === "user" ? "bg-slate-100 text-slate-800 rounded-tr-sm" : "bg-white border border-slate-200/60 shadow-sm text-slate-700 rounded-tl-sm"}`}>
                {msg.content}
              </div>
            </div>
          ))}
        </div>
        <div className="p-4 border-t border-slate-100 bg-white">
          <form onSubmit={handleSend} className="relative flex items-center">
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Test your agent..." className="w-full bg-slate-50 border border-slate-200 rounded-full pl-4 pr-12 py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-violet-500 focus:bg-white transition-all shadow-sm" />
            <button type="submit" disabled={!input.trim()} className="absolute right-2 w-8 h-8 flex items-center justify-center bg-violet-600 text-white rounded-full hover:bg-violet-700 transition-colors disabled:opacity-50"><Send className="w-4 h-4 -ml-0.5" /></button>
          </form>
          <p className="text-center text-[10px] text-slate-400 mt-2 font-medium">Test chats don&apos;t affect production metrics.</p>
        </div>
      </div>
    </div>
  );
}
