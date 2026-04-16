"use client";

import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { motion } from "framer-motion";
import { Bot, Save, Send, Settings2, FileText, Zap, ChevronRight, X, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";

export default function CreatorStudioPage() {
  const [temperature, setTemperature] = useState([0.7]);
  const [activeTab, setActiveTab] = useState("setup");
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hi there! I am your new agent preview. How can I help you today?" }
  ]);
  const [input, setInput] = useState("");

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages(prev => [...prev, { role: "user", content: input }]);
    setInput("");
    
    // Mock response
    setTimeout(() => {
      setMessages(prev => [...prev, { role: "assistant", content: "This is a live preview response based on your current prompt." }]);
    }, 1000);
  };

  return (
    <DashboardLayout role="creator">
      <div className="h-full flex flex-col lg:flex-row overflow-hidden bg-[#fafafa]">
        
        {/* LEFT COLUMN: Agent Configuration */}
        <div className="flex-1 flex flex-col h-full border-r border-slate-200/60 overflow-y-auto w-full">
           <div className="p-6 md:p-8 bg-white border-b border-slate-200/60 flex items-center justify-between sticky top-0 z-10">
              <div>
                <h1 className="font-heading text-2xl font-extrabold text-slate-900">Creator Studio</h1>
                <p className="text-sm font-medium text-slate-500 mt-1">Configure and train your AI agent.</p>
              </div>
              <div className="flex gap-2">
                 <Button variant="outline" className="font-bold border-slate-200/60 shadow-sm rounded-xl">Save Draft</Button>
                 <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold shadow-md shadow-blue-500/20 rounded-xl">
                   <Save className="w-4 h-4 mr-2" /> Publish Agent
                 </Button>
              </div>
           </div>

           <div className="flex gap-4 px-6 md:px-8 py-4 border-b border-slate-100 bg-slate-50">
              <button onClick={() => setActiveTab("setup")} className={`text-sm font-bold px-4 py-2 rounded-xl transition-all ${activeTab === "setup" ? "bg-white border border-slate-200 shadow-sm text-slate-900" : "text-slate-500 hover:text-slate-700"}`}>
                 <div className="flex items-center"><Settings2 className="w-4 h-4 mr-2"/> Setup</div>
              </button>
              <button onClick={() => setActiveTab("prompt")} className={`text-sm font-bold px-4 py-2 rounded-xl transition-all ${activeTab === "prompt" ? "bg-white border border-slate-200 shadow-sm text-slate-900" : "text-slate-500 hover:text-slate-700"}`}>
                 <div className="flex items-center"><FileText className="w-4 h-4 mr-2"/> Instructions</div>
              </button>
              <button onClick={() => setActiveTab("advanced")} className={`text-sm font-bold px-4 py-2 rounded-xl transition-all ${activeTab === "advanced" ? "bg-white border border-slate-200 shadow-sm text-slate-900" : "text-slate-500 hover:text-slate-700"}`}>
                 <div className="flex items-center"><Zap className="w-4 h-4 mr-2"/> Advanced</div>
              </button>
           </div>

           <div className="p-6 md:p-8 max-w-3xl">
              {activeTab === "setup" && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                   <div className="space-y-2">
                     <label className="text-sm font-bold text-slate-700">Agent Name</label>
                     <Input placeholder="e.g. Sales Outreach Bot" className="h-12 rounded-xl border-slate-200 shadow-sm focus-visible:ring-blue-500 focus-visible:border-blue-500 bg-slate-50 hover:bg-white transition-colors text-base font-semibold" />
                   </div>
                   <div className="space-y-2">
                     <label className="text-sm font-bold text-slate-700">Short Description</label>
                     <Textarea placeholder="What does this agent do?" rows={3} className="rounded-xl border-slate-200 shadow-sm focus-visible:ring-blue-500 focus-visible:border-blue-500 bg-slate-50 hover:bg-white transition-colors text-base font-medium resize-none" />
                   </div>
                   <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                         <label className="text-sm font-bold text-slate-700">Base Template</label>
                         <Select defaultValue="blank">
                           <SelectTrigger className="h-12 rounded-xl border-slate-200 shadow-sm bg-white font-semibold">
                             <SelectValue placeholder="Select template" />
                           </SelectTrigger>
                           <SelectContent>
                             <SelectItem value="blank">Blank Canvas</SelectItem>
                             <SelectItem value="support">Customer Support</SelectItem>
                             <SelectItem value="sales">Sales Assistant</SelectItem>
                             <SelectItem value="data">Data Analyst</SelectItem>
                           </SelectContent>
                         </Select>
                      </div>
                      <div className="space-y-2">
                         <label className="text-sm font-bold text-slate-700">Category Tag</label>
                         <Input placeholder="e.g. Operations" className="h-12 rounded-xl border-slate-200 shadow-sm focus-visible:ring-blue-500 bg-slate-50 hover:bg-white transition-colors font-semibold" />
                      </div>
                   </div>
                </motion.div>
              )}

              {activeTab === "prompt" && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                   <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl flex gap-3 text-sm text-amber-800">
                     <div className="mt-0.5"><Zap className="w-4 h-4"/></div>
                     <p className="font-medium">Be specific with your instructions. Define the exact format of the response and how the agent should handle unknown queries.</p>
                   </div>
                   <div className="space-y-2">
                     <label className="text-sm font-bold text-slate-700">System Prompt</label>
                     <Textarea 
                       placeholder="You are a helpful AI assistant specialized in..." 
                       rows={12} 
                       className="rounded-xl border-slate-200 shadow-sm focus-visible:ring-blue-500 focus-visible:border-blue-500 bg-slate-50 hover:bg-white transition-colors text-sm font-mono leading-relaxed resize-y" 
                     />
                   </div>
                   <div className="space-y-2">
                     <label className="text-sm font-bold text-slate-700">Welcome Message</label>
                     <Input placeholder="What does the agent say first?" className="h-12 rounded-xl border-slate-200 shadow-sm focus-visible:ring-blue-500 bg-slate-50 hover:bg-white transition-colors font-semibold" defaultValue="Hi there! I am your new agent preview. How can I help you today?" />
                   </div>
                </motion.div>
              )}

              {activeTab === "advanced" && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                   <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">LLM Engine</label>
                      <Select defaultValue="gpt4">
                        <SelectTrigger className="h-12 rounded-xl border-slate-200 shadow-sm bg-white font-semibold">
                          <SelectValue placeholder="Select model" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="gpt4">GPT-4o (Premium)</SelectItem>
                          <SelectItem value="gpt35">GPT-3.5 Turbo (Fast)</SelectItem>
                          <SelectItem value="claude">Claude 3 Opus (Premium)</SelectItem>
                        </SelectContent>
                      </Select>
                   </div>

                   <div className="space-y-6 p-6 border border-slate-200 rounded-xl bg-slate-50 text-slate-900 mt-6 pt-4 pb-6">
                      <div className="flex justify-between items-center bg-transparent">
                         <div>
                           <label className="text-sm font-bold text-slate-700 block">Temperature</label>
                           <p className="text-[11px] font-medium text-slate-500">Controls creativity vs consistency.</p>
                         </div>
                         <div className="w-12 h-8 bg-white border border-slate-200 rounded-lg flex items-center justify-center font-bold text-sm shadow-sm">{temperature[0]}</div>
                      </div>
                      <Slider
                        value={temperature}
                        onValueChange={setTemperature}
                        max={1}
                        step={0.1}
                        className="py-4"
                      />
                      <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-[-10px]">
                         <span>Precise</span>
                         <span>Creative</span>
                      </div>
                   </div>
                </motion.div>
              )}
           </div>
        </div>

        {/* RIGHT COLUMN: Live Preview Chat */}
        <div className="hidden lg:flex w-[400px] xl:w-[450px] bg-white flex-col border-l border-slate-200/60 shrink-0 relative">
          <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
             <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                <span className="text-xs font-bold text-slate-600 uppercase tracking-widest">Live Preview</span>
             </div>
             <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-slate-600">
               <Settings2 className="w-4 h-4" />
             </Button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/30">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.role === "user" ? "bg-slate-200" : "bg-gradient-to-tr from-blue-600 to-cyan-500"}`}>
                   {msg.role === "user" ? <User className="w-4 h-4 text-slate-600" /> : <Bot className="w-4 h-4 text-white" />}
                </div>
                <div className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-[13px] font-medium leading-relaxed ${
                  msg.role === "user" 
                  ? "bg-slate-100 text-slate-800 rounded-tr-sm" 
                  : "bg-white border border-slate-200/60 shadow-sm text-slate-700 rounded-tl-sm"
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
          </div>

          {/* Chat Input */}
          <div className="p-4 border-t border-slate-100 bg-white">
             <form onSubmit={handleSendMessage} className="relative flex items-center">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Test your agent..." 
                  className="w-full bg-slate-50 border border-slate-200 rounded-full pl-4 pr-12 py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all shadow-sm"
                />
                <button type="submit" disabled={!input.trim()} className="absolute right-2 w-8 h-8 flex items-center justify-center bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors disabled:opacity-50">
                   <Send className="w-4 h-4 -ml-0.5" />
                </button>
             </form>
             <p className="text-center text-[10px] text-slate-400 mt-2 font-medium">Test chats do not affect production metrics.</p>
          </div>
        </div>

      </div>
    </DashboardLayout>
  );
}