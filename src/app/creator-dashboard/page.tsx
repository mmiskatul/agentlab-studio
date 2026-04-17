"use client";

import { motion } from "framer-motion";
import {
  Bot, Plus, Database, MessageSquare, TrendingUp, CheckCircle2,
  AlertCircle, Clock, Zap, ArrowRight, BarChart2, PenLine, ArrowUpRight, ChevronRight, LayoutDashboard, Settings
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// --- MOCK DATA ---
const myAgents = [
  { id: 1, name: "Customer Support Router", category: "SUPPORT", status: "PUBLISHED", queries: "14.2k", feedback: 94 },
  { id: 3, name: "Sales Outreach Generator", category: "SALES",   status: "PUBLISHED", queries: "3.4k",  feedback: 87 },
  { id: 4, name: "Market Analyzer AI",       category: "DATA",    status: "PUBLISHED", queries: "1.2k",  feedback: 91 },
  { id: 2, name: "Internal Onboarding Bot",  category: "HR",      status: "DRAFT",     queries: "—",     feedback: 0  },
];

const activityLog = [
  { icon: CheckCircle2, color: "text-emerald-500", dotBg: "bg-emerald-50", title: "Agent Deployed",     desc: "Sales Outreach Generator v1.2 is live.", time: "2 min ago" },
  { icon: Database,     color: "text-blue-500",    dotBg: "bg-blue-50",    title: "Knowledge Indexed",  desc: "14 new documents vectorized.", time: "1 hour ago" },
  { icon: AlertCircle,  color: "text-amber-500",   dotBg: "bg-amber-50",   title: "Rate Limit Warning", desc: "OpenAI key at 80% of monthly quota.", time: "3 hours ago" },
  { icon: Clock,        color: "text-slate-400",   dotBg: "bg-slate-50",   title: "Draft Saved",        desc: "Internal Onboarding Bot auto-saved.", time: "Yesterday" },
];

const templates = [
  { name: "Customer Support", desc: "Auto-triage and respond to support tickets.", bg: "bg-[#0ea5e9]", icon: Bot },
  { name: "Sales Assistant",  desc: "Personalized outreach and follow-up emails.",  bg: "bg-[#8b5cf6]", icon: Zap },
  { name: "Data Analyst",     desc: "Query databases in plain English.",             bg: "bg-[#10b981]", icon: BarChart2 },
];

const quickStats = [
  { label: "Total Agents",       value: "4",     sub: "3 published",     icon: Bot,        color: "text-blue-600", bg: "bg-blue-50" },
  { label: "Knowledge Docs",     value: "36",    sub: "1.2 GB indexed",  icon: Database,   color: "text-blue-600",   bg: "bg-blue-50"   },
  { label: "Total Invocations",  value: "48.2k", sub: "+12% this week",  icon: Zap,        color: "text-amber-600",  bg: "bg-amber-50"  },
  { label: "Avg. Response Time", value: "1.2s",  sub: "GPT-4o backend",  icon: TrendingUp, color: "text-emerald-600",bg: "bg-emerald-50"},
];

const quickActions = [
  { label: "Upload Knowledge Base", desc: "Add PDFs, URLs, or raw text", icon: Database },
  { label: "Open Creator Studio",   desc: "Configure prompts & publish", icon: Zap },
  { label: "View Analytics",        desc: "Per-agent performance data", icon: BarChart2 },
  { label: "Test Chats",            desc: "Verify agent behavior live",  icon: MessageSquare },
];

export default function CreatorDashboardPage() {
  return (
    <div className="min-h-full bg-white font-body text-slate-900">
      <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-10 px-4 py-8 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row md:items-start justify-between gap-6"
        >
          <div className="space-y-4">
            <div className="inline-flex items-center text-blue-600 font-bold text-[10px] tracking-[0.15em] uppercase bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100">
              Creator Studio · Pro Plan
            </div>
            <h1 className="font-heading text-4xl font-extrabold text-slate-950 tracking-[-0.03em]">
              Creator Overview
            </h1>
            <p className="text-slate-500 font-medium text-lg leading-relaxed">
              Monitor performance, manage knowledge, and deploy agents.
            </p>
          </div>
          <Link href="/creator-dashboard/studio">
            <Button className="rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-200 font-bold px-8 h-12 transition-all">
              <Plus className="w-4 h-4 mr-2" /> Build New Agent
            </Button>
          </Link>
        </motion.div>

        {/* ── Stats Row ── */}
        <div className="grid gap-6 sm:grid-cols-2">
          {[
            { label: "Total Agents Created", value: "4 individuals", sub: "Lifetime creation", icon: Bot, color: "text-blue-600", bg: "bg-blue-50" },
            { label: "Total Agents Published", value: "3 active", sub: "Currently live on platform", icon: Zap, color: "text-emerald-600", bg: "bg-emerald-50" },
          ].map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="bg-white rounded-xl p-8 border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] flex items-center justify-between group hover:border-blue-200 transition-all"
            >
              <div className="space-y-4 flex-1">
                <p className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em]">{s.label}</p>
                <div className="flex items-baseline gap-2">
                  <span className="font-heading text-4xl font-extrabold text-slate-950 tracking-[-0.02em]">{s.value.split(' ')[0]}</span>
                  <span className="text-lg font-bold text-slate-400">{s.value.split(' ')[1]}</span>
                </div>
                <p className="text-[12px] font-medium text-slate-500">{s.sub}</p>
              </div>
              <div className={`h-16 w-16 rounded-2xl ${s.bg} flex items-center justify-center shrink-0 border border-white shadow-inner group-hover:scale-110 transition-transform`}>
                <s.icon className={`h-8 w-8 ${s.color}`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Main Layout Grid ── */}
        <div className="grid lg:grid-cols-3 gap-10">

          {/* Left Side: My Agents & Templates */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Workspace: My Agents */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-600 font-bold text-[10px] tracking-[0.2em] uppercase mb-1">WORKSPACE</p>
                  <h2 className="font-heading text-2xl font-extrabold text-slate-950 tracking-tight">Active Agents</h2>
                </div>
                <Link href="/creator-dashboard/agents" className="text-sm font-bold text-slate-500 hover:text-slate-900 flex items-center gap-1 transition-colors">
                  Manage all <ChevronRight className="h-4 w-4" />
                </Link>
              </div>

              {/* TWO CARDS ON TOP GRID */}
              <div className="grid sm:grid-cols-2 gap-6">
                 {myAgents.slice(0, 2).map((agent) => (
                   <div key={agent.id} className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.02)] group hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer">
                      <div className="flex justify-between items-start mb-6">
                        <div className="h-12 w-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 transition-transform group-hover:scale-110">
                          <Bot className="h-6 w-6" />
                        </div>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md uppercase tracking-widest border ${agent.status === 'PUBLISHED' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : 'bg-orange-50 text-orange-600 border-orange-100'}`}>
                          {agent.status}
                        </span>
                      </div>
                      <h3 className="font-bold text-lg text-slate-900 mb-1 group-hover:text-blue-600 transition-colors uppercase tracking-tight">{agent.name}</h3>
                      <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-6 font-mono">{agent.category}</p>
                      
                      <div className="flex items-end justify-between pt-4 border-t border-slate-50">
                        <div className="space-y-1">
                          <p className="text-[10px] font-bold text-slate-400 uppercase">Requests</p>
                          <p className="text-lg font-black text-slate-950">{agent.queries}</p>
                        </div>
                        <div className="flex flex-col items-end gap-1">
                          <div className="flex gap-0.5 items-end">
                            {[1, 2, 3, 4].map((i) => (
                              <div key={i} className={`w-3.5 rounded-sm transition-all ${agent.feedback > 0 ? (i <= 3 ? 'bg-emerald-400 h-6' : 'bg-slate-100 h-3') : 'bg-slate-100 h-3'}`} />
                            ))}
                          </div>
                          <span className="text-[10px] font-black text-slate-900">{agent.feedback || 0}% efficiency</span>
                        </div>
                      </div>
                   </div>
                 ))}
              </div>

              {/* LIST FOR REMAINING */}
              <div className="bg-white rounded-2xl border border-slate-200/80 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.02)] overflow-hidden">
                <div className="divide-y divide-slate-100">
                  {myAgents.slice(2).map((agent) => (
                    <div key={agent.id} className="p-5 flex items-center gap-5 hover:bg-slate-50 transition-colors group cursor-pointer">
                      <div className="h-10 w-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0 text-blue-600 transition-transform group-hover:scale-110">
                        <Bot className="h-5 w-5" />
                      </div>
                      <div className="flex-1 min-w-0 grid grid-cols-[1fr_auto] items-center gap-6">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <p className="font-bold text-slate-900 truncate tracking-tight">{agent.name}</p>
                            <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-md uppercase tracking-widest border ${
                              agent.status === 'PUBLISHED' 
                                ? 'bg-emerald-50 text-emerald-600 border-emerald-100' 
                                : 'bg-orange-50 text-orange-600 border-orange-100'
                            }`}>
                              {agent.status}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="bg-slate-100/80 px-1.5 py-0.5 rounded text-[9px] font-bold text-slate-500 tracking-wider font-mono">
                              {agent.category}
                            </span>
                            {agent.queries !== '—' && <span className="text-[11px] font-bold text-slate-400">{agent.queries} queries</span>}
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          {agent.feedback > 0 && (
                            <div className="flex flex-col items-end gap-1">
                              <div className="flex gap-0.5 h-4 items-end">
                                {[1, 2, 3, 4].map((i) => (
                                  <div key={i} className={`w-3.5 rounded-sm transition-all ${
                                    i <= 3 
                                      ? (agent.id === 4 ? 'bg-emerald-400 h-6' : 'bg-orange-400 h-4') 
                                      : 'bg-slate-100 h-3'
                                  }`} />
                                ))}
                              </div>
                              <span className="text-[10px] font-black text-slate-900">{agent.feedback}%</span>
                            </div>
                          )}
                          <ChevronRight className="h-4 w-4 text-slate-300 group-hover:text-slate-900 transition-colors" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-4 bg-slate-50/50 border-t border-slate-100">
                  <Button className="w-full h-11 bg-blue-600 hover:bg-blue-700 rounded-xl text-white font-bold transition-all shadow-sm">
                    <Plus className="w-4 h-4 mr-2" /> Create New Agent
                  </Button>
                </div>
              </div>
            </div>

            {/* Templates: Quick-Start */}
            <div className="space-y-6">
              <div>
                <p className="text-blue-600 font-bold text-[10px] tracking-[0.2em] uppercase mb-1">TEMPLATES</p>
                <h2 className="font-heading text-2xl font-extrabold text-slate-950 tracking-tight">Quick-Start</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {templates.map((t) => (
                  <div key={t.name} className="group relative bg-[#f8fafc] rounded-[2rem] overflow-hidden flex flex-col items-center justify-center p-8 text-center min-h-[300px] border border-slate-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity ${t.bg}`} />
                    <div className={`w-20 h-20 rounded-full flex items-center justify-center text-white mb-6 shadow-xl shadow-black/5 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 ${t.bg}`}>
                      <t.icon className="h-10 w-10" />
                    </div>
                    <p className="font-bold text-lg text-slate-900 mb-2 mt-2">{t.name}</p>
                    <p className="text-[13px] font-medium text-slate-500 leading-relaxed mb-6">
                      {t.desc}
                    </p>
                    <button className="text-[11px] font-black uppercase tracking-widest text-slate-950 flex items-center gap-2 group-hover:text-blue-600 transition-colors">
                      Use template <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: System Activity & Quick Actions */}
          <div className="lg:col-span-1 space-y-12">
            
            {/* System: Activity Log */}
            <section className="space-y-6">
              <div>
                <p className="text-blue-600 font-bold text-[10px] tracking-[0.2em] uppercase mb-1">SYSTEM</p>
                <h2 className="font-heading text-2xl font-extrabold text-slate-950 tracking-tight">Activity Log</h2>
              </div>
              <div className="bg-white rounded-2xl border border-slate-200/80 p-6 space-y-6 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.02)]">
                {activityLog.map((log, i) => (
                  <div key={i} className="flex gap-4 group">
                    <div className="flex flex-col items-center gap-1.5">
                      <div className={`h-8 w-8 rounded-full ${log.dotBg} flex items-center justify-center shrink-0 border border-slate-100 group-hover:scale-110 transition-transform`}>
                        <log.icon className={`h-4 w-4 ${log.color}`} />
                      </div>
                      {i !== activityLog.length - 1 && <div className="w-0.5 grow bg-slate-100 rounded-full" />}
                    </div>
                    <div className="pb-4">
                      <div className="flex items-center gap-2 justify-between">
                        <p className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{log.title}</p>
                        <span className="text-[10px] font-bold text-slate-400 font-mono">{log.time}</span>
                      </div>
                      <p className="text-[12px] font-medium text-slate-500 mt-1 leading-relaxed">{log.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Quick Actions */}
            <section className="space-y-6">
              <div>
                <p className="text-blue-600 font-bold text-[10px] tracking-[0.2em] uppercase mb-1">QUICK ACTIONS</p>
              </div>
              <div className="grid gap-3">
                {quickActions.map((action) => (
                  <div 
                    key={action.label}
                    className="flex items-center gap-4 p-4 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 hover:shadow-lg hover:shadow-slate-200/50 transition-all group cursor-pointer"
                  >
                    <div className="h-11 w-11 rounded-lg bg-slate-50 flex items-center justify-center shrink-0 text-slate-400 group-hover:text-blue-600 group-hover:bg-blue-50 transition-all">
                      <action.icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-black text-slate-900 truncate group-hover:text-blue-600 transition-colors">{action.label}</p>
                      <p className="text-[11px] font-medium text-slate-400 truncate mt-0.5">{action.desc}</p>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-slate-300 group-hover:text-slate-950 transition-all translate-x-0 group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </div>
                ))}
              </div>
            </section>
          </div>

        </div>
      </div>
    </div>
  );
}
