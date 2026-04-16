"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, Bot, AlertTriangle, X, ShieldOff, ShieldCheck, MessageSquare, Database, Archive, Zap, CheckCircle2, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const mockAgents: Record<string, {
  id: string; name: string; creator: string; creatorId: string; category: string;
  status: string; visibility: string; description: string; prompt: string;
  knowledge: number; chats: number; created: string; updated: string; feedback: number;
}> = {
  a1: { id:"a1", name:"Data Analyst Pro", creator:"Grace Kim", creatorId:"u7", category:"Analytics", status:"Active", visibility:"Public", description:"Connects to your data warehouse and answers SQL queries in plain English, and delivers insights without writing a single line of code.", prompt:"You are a senior data analyst with 10+ years of experience. Help the user understand their business data by translating plain English queries into SQL and explaining results clearly. Always ask for clarification on ambiguous data definitions.", knowledge:12, chats:14200, created:"Oct 20, 2025", updated:"Apr 12, 2026", feedback:94 },
  a5: { id:"a5", name:"Sales Outreach Bot", creator:"Elena Marks", creatorId:"u5", category:"Sales", status:"Disabled", visibility:"Public", description:"Drafts personalized cold outreach emails and follow-up sequences at scale, using company-specific context.", prompt:"You are a B2B sales specialist. Draft personalized outreach emails based on company info. Be concise, professional, and data-driven.", knowledge:24, chats:45000, created:"Feb 18, 2026", updated:"Oct 5, 2025", feedback:61 },
};

const DEFAULT_AGENT = { id:"--", name:"Unknown Agent", creator:"Unknown", creatorId:"", category:"—", status:"Active", visibility:"Public", description:"Agent not found.", prompt:"—", knowledge:0, chats:0, created:"—", updated:"—", feedback:0 };

const recentLogs = [
  { icon:MessageSquare, color:"text-blue-500",   msg:"Chat session by alice@example.com",        time:"5 min ago" },
  { icon:CheckCircle2,  color:"text-emerald-500",msg:"Knowledge base re-indexed — 14 documents", time:"1 hour ago" },
  { icon:Zap,           color:"text-violet-500", msg:"Agent updated by creator",                  time:"3 hours ago" },
  { icon:Clock,         color:"text-slate-400",  msg:"Scheduled availability check passed",       time:"Yesterday" },
];

type Params = { id: string };

export default function AgentDetailPage({ params }: { params: Params }) {
  const agent = mockAgents[params.id] ?? { ...DEFAULT_AGENT, id: params.id };
  const [status, setStatus] = useState(agent.status);
  const [confirm, setConfirm] = useState<"disable" | "enable" | "archive" | null>(null);
  const [tab, setTab] = useState<"overview" | "logs">("overview");

  const execute = () => {
    if (confirm === "disable") setStatus("Disabled");
    if (confirm === "enable") setStatus("Active");
    if (confirm === "archive") setStatus("Archived");
    setConfirm(null);
  };

  const statusStyle: Record<string, string> = {
    Active:   "bg-emerald-50 text-emerald-700 border-emerald-100",
    Disabled: "bg-slate-100 text-slate-500 border-slate-200",
    Archived: "bg-slate-100 text-slate-400 border-slate-200",
  };

  return (
    <div className="min-h-full bg-[#fafafa] p-6 lg:p-10 space-y-8">

      {/* Breadcrumb */}
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <div className="flex items-center gap-2 text-sm font-medium text-slate-500 mb-4">
          <Link href="/admin/dashboard" className="hover:text-slate-900">Admin</Link>
          <span>/</span>
          <Link href="/admin/agents" className="hover:text-slate-900">Agents</Link>
          <span>/</span>
          <span className="text-slate-900 font-bold">{agent.name}</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link href="/admin/agents"><Button variant="ghost" size="icon" className="rounded-xl hover:bg-slate-100 h-9 w-9"><ChevronLeft className="w-4 h-4" /></Button></Link>
            <div>
              <h1 className="font-heading text-2xl font-extrabold text-slate-900 tracking-tight">{agent.name}</h1>
              <p className="text-slate-500 text-sm font-medium">{agent.category} · by {agent.creator}</p>
            </div>
          </div>
          <div className="flex gap-2 flex-wrap">
            {status === "Active" ? (
              <Button onClick={() => setConfirm("disable")} className="rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold shadow-sm">
                <ShieldOff className="w-4 h-4 mr-2" /> Disable Agent
              </Button>
            ) : status === "Disabled" ? (
              <Button onClick={() => setConfirm("enable")} className="rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold shadow-sm">
                <ShieldCheck className="w-4 h-4 mr-2" /> Enable Agent
              </Button>
            ) : null}
            {status !== "Archived" && (
              <Button variant="outline" onClick={() => setConfirm("archive")} className="rounded-xl border-slate-200 font-bold">
                <Archive className="w-4 h-4 mr-2" /> Archive
              </Button>
            )}
          </div>
        </div>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-6">

        {/* Left 2 cols */}
        <div className="lg:col-span-2 space-y-6">

          {/* Agent card */}
          <div className="bg-white rounded-[1.5rem] border border-slate-200/60 shadow-sm p-6 flex flex-col sm:flex-row gap-6">
            <div className="w-20 h-20 rounded-2xl bg-violet-50 border border-violet-200 flex items-center justify-center shrink-0">
              <Bot className="w-9 h-9 text-violet-600" />
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <h2 className="font-heading text-xl font-extrabold text-slate-900">{agent.name}</h2>
                <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md border ${statusStyle[status]}`}>{status}</span>
                <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md border ${agent.visibility === "Public" ? "bg-blue-50 text-blue-700 border-blue-100" : "bg-slate-100 text-slate-500 border-slate-200"}`}>{agent.visibility}</span>
              </div>
              <p className="text-slate-500 font-medium text-sm leading-relaxed mb-4">{agent.description}</p>
              <div className="grid grid-cols-2 gap-4">
                <div><p className="text-[11px] font-bold text-slate-400 uppercase tracking-wide">Creator</p>
                  <Link href={`/admin/users/${agent.creatorId}`} className="font-bold text-blue-600 hover:underline text-sm mt-0.5">{agent.creator}</Link>
                </div>
                <div><p className="text-[11px] font-bold text-slate-400 uppercase tracking-wide">Category</p><p className="font-bold text-slate-700 text-sm mt-0.5">{agent.category}</p></div>
                <div><p className="text-[11px] font-bold text-slate-400 uppercase tracking-wide">Created</p><p className="font-bold text-slate-700 text-sm mt-0.5">{agent.created}</p></div>
                <div><p className="text-[11px] font-bold text-slate-400 uppercase tracking-wide">Updated</p><p className="font-bold text-slate-700 text-sm mt-0.5">{agent.updated}</p></div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-2 border-b border-slate-200">
            {(["overview","logs"] as const).map((t) => (
              <button key={t} onClick={() => setTab(t)} className={`px-5 py-3 text-sm font-bold capitalize border-b-2 transition-all -mb-[2px] ${tab === t ? "border-red-500 text-red-600" : "border-transparent text-slate-500 hover:text-slate-900"}`}>{t === "logs" ? "Recent Logs" : t}</button>
            ))}
          </div>

          {tab === "overview" && (
            <div className="bg-white rounded-[1.5rem] border border-slate-200/60 shadow-sm p-6">
              <h3 className="font-heading text-lg font-extrabold text-slate-900 mb-4">System Prompt Preview</h3>
              <div className="bg-slate-900 rounded-xl p-5 font-mono text-[12px] text-slate-300 leading-relaxed border border-slate-800">
                <div className="text-slate-500 text-[10px] uppercase tracking-widest mb-3">SYSTEM PROMPT ·  PARTIAL</div>
                {agent.prompt}
              </div>
              <div className="mt-4 flex items-center gap-2 text-xs font-medium text-slate-500">
                <Database className="w-3.5 h-3.5" /> {agent.knowledge} knowledge items indexed
              </div>
            </div>
          )}
          {tab === "logs" && (
            <div className="bg-white rounded-[1.5rem] border border-slate-200/60 shadow-sm overflow-hidden">
              {recentLogs.map((item, i) => (
                <div key={i} className={`flex items-start gap-4 px-6 py-4 ${i < recentLogs.length - 1 ? "border-b border-slate-100" : ""}`}>
                  <item.icon className={`w-4 h-4 mt-0.5 shrink-0 ${item.color}`} />
                  <p className="flex-1 text-sm font-medium text-slate-700">{item.msg}</p>
                  <span className="text-[10px] font-bold text-slate-400 whitespace-nowrap">{item.time}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right col */}
        <div className="space-y-5">
          <div className="bg-white rounded-[1.5rem] border border-slate-200/60 shadow-sm p-6">
            <h3 className="font-heading text-lg font-extrabold text-slate-900 mb-4">Usage Snapshot</h3>
            <div className="space-y-3">
              {[
                { label:"Total Chats",    value: agent.chats.toLocaleString(), icon:MessageSquare, color:"text-blue-500",   bg:"bg-blue-50" },
                { label:"Knowledge Items",value: agent.knowledge,              icon:Database,      color:"text-indigo-500", bg:"bg-indigo-50" },
                { label:"Positive Rate",  value: `${agent.feedback}%`,         icon:CheckCircle2,  color:"text-emerald-500",bg:"bg-emerald-50" },
              ].map((s) => (
                <div key={s.label} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
                  <div className="flex items-center gap-3"><div className={`p-2 rounded-lg ${s.bg}`}><s.icon className={`w-4 h-4 ${s.color}`} /></div><span className="text-sm font-bold text-slate-700">{s.label}</span></div>
                  <span className="font-heading font-extrabold text-slate-900">{s.value}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-[1.5rem] border border-slate-200/60 shadow-sm p-6 space-y-3">
            <h3 className="font-heading text-lg font-extrabold text-slate-900 mb-2">Admin Actions</h3>
            {status === "Active" ? (
              <Button onClick={() => setConfirm("disable")} className="w-full rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold h-11"><ShieldOff className="w-4 h-4 mr-2" /> Disable Agent</Button>
            ) : status === "Disabled" ? (
              <Button onClick={() => setConfirm("enable")} className="w-full rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold h-11"><ShieldCheck className="w-4 h-4 mr-2" /> Enable Agent</Button>
            ) : null}
            <Link href={`/admin/users/${agent.creatorId}`} className="block">
              <Button variant="outline" className="w-full rounded-xl border-slate-200 font-bold h-11">Inspect Creator Profile</Button>
            </Link>
            {status !== "Archived" && (
              <Button variant="outline" onClick={() => setConfirm("archive")} className="w-full rounded-xl border-slate-200 font-bold h-11">
                <Archive className="w-4 h-4 mr-2" /> Archive Agent
              </Button>
            )}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {confirm && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div initial={{ scale: 0.95 }} animate={{ scale: 1 }} exit={{ scale: 0.95 }} className="bg-white rounded-[2rem] p-8 shadow-2xl max-w-md w-full border border-slate-200/60">
              <div className="flex justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center"><AlertTriangle className="w-6 h-6 text-amber-500" /></div>
                <button onClick={() => setConfirm(null)} className="p-2 rounded-xl hover:bg-slate-100"><X className="w-5 h-5 text-slate-400" /></button>
              </div>
              <h2 className="font-heading text-xl font-extrabold text-slate-900 mb-2 capitalize">{confirm} Agent?</h2>
              <p className="text-slate-500 text-sm mb-8">Confirm this action for <span className="font-bold text-slate-800">&ldquo;{agent.name}&rdquo;</span>.</p>
              <div className="flex gap-3">
                <Button variant="outline" onClick={() => setConfirm(null)} className="flex-1 rounded-xl font-bold h-11">Cancel</Button>
                <Button onClick={execute} className={`flex-1 rounded-xl font-bold h-11 text-white ${confirm === "enable" ? "bg-emerald-600 hover:bg-emerald-700" : "bg-red-600 hover:bg-red-700"}`}>Confirm</Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
