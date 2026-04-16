"use client";

import { motion } from "framer-motion";
import {
  Bot, Plus, Database, MessageSquare, TrendingUp, CheckCircle2,
  AlertCircle, Clock, Zap, ArrowRight, BarChart2, PenLine, ArrowUpRight, ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// --- MOCK DATA ---
const myAgents = [
  { id: 1, name: "Customer Support Router", category: "Support", status: "Published", queries: "14.2k", feedback: 94 },
  { id: 2, name: "Internal Onboarding Bot",  category: "HR",      status: "Draft",     queries: "—",     feedback: 0  },
  { id: 3, name: "Sales Outreach Generator", category: "Sales",   status: "Published", queries: "3.4k",  feedback: 87 },
];

const activityLog = [
  { icon: CheckCircle2, color: "text-emerald-500", title: "Agent Deployed",     desc: "Sales Outreach Generator v1.2 is live.", time: "2 min ago" },
  { icon: Database,     color: "text-blue-400",    title: "Knowledge Indexed",  desc: "14 new documents vectorized.", time: "1 hour ago" },
  { icon: AlertCircle,  color: "text-amber-400",   title: "Rate Limit Warning", desc: "OpenAI key at 80% of monthly quota.", time: "3 hours ago" },
  { icon: Clock,        color: "text-slate-400",   title: "Draft Saved",        desc: "Internal Onboarding Bot auto-saved.", time: "Yesterday" },
];

const templates = [
  { name: "Customer Support", desc: "Auto-triage and respond to support tickets.", gradient: "from-blue-600 to-cyan-500" },
  { name: "Sales Assistant",  desc: "Personalized outreach and follow-up emails.",  gradient: "from-violet-600 to-purple-500" },
  { name: "Data Analyst",     desc: "Query databases in plain English.",             gradient: "from-emerald-600 to-teal-500" },
];

const quickStats = [
  { label: "Total Agents",       value: "4",     sub: "2 published",     icon: Bot,        color: "text-violet-600", bg: "bg-violet-50", border: "border-violet-100/50" },
  { label: "Knowledge Docs",     value: "36",    sub: "1.2 GB indexed",  icon: Database,   color: "text-blue-600",   bg: "bg-blue-50",   border: "border-blue-100/50"   },
  { label: "Total Invocations",  value: "48.2k", sub: "+12% this week",  icon: Zap,        color: "text-amber-600",  bg: "bg-amber-50",  border: "border-amber-100/50"  },
  { label: "Avg. Response Time", value: "1.2s",  sub: "GPT-4o backend",  icon: TrendingUp, color: "text-emerald-600",bg: "bg-emerald-50",border: "border-emerald-100/50"},
];

export default function CreatorDashboardPage() {
  return (
    <div className="min-h-full bg-[#fafafa] font-body text-slate-900 selection:bg-violet-100">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-10 space-y-10">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row md:items-center justify-between gap-6"
        >
          <div>
            <div className="inline-flex items-center text-violet-600 font-bold text-[11px] tracking-[0.2em] uppercase mb-4 bg-violet-50/80 px-4 py-2 rounded-full border border-violet-100">
              Creator Studio · Pro Plan
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-[-0.03em]">
              Creator Overview
            </h1>
            <p className="text-slate-500 mt-2 font-medium text-lg leading-relaxed">
              Monitor performance, manage knowledge, and deploy agents.
            </p>
          </div>
          <Link href="/creator-dashboard/studio">
            <Button className="rounded-full bg-violet-600 hover:bg-violet-700 text-white shadow-md shadow-violet-500/20 font-semibold px-7 py-5 transition-all hover:shadow-lg hover:-translate-y-0.5">
              <Plus className="w-4 h-4 mr-2" /> Build New Agent
            </Button>
          </Link>
        </motion.div>

        {/* ── Stats Row ── */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {quickStats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07 }}
              className="bg-white rounded-2xl p-5 border border-slate-200/60 shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-4"
            >
              <div className={`p-3 rounded-xl ${s.bg} border ${s.border} shrink-0`}>
                <s.icon className={`h-5 w-5 ${s.color}`} />
              </div>
              <div>
                <p className="font-heading text-2xl font-extrabold text-slate-900 tracking-tight">{s.value}</p>
                <p className="text-xs font-bold text-slate-500 mt-0.5">{s.label}</p>
                <p className="text-[11px] font-medium text-slate-400">{s.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Main 3-col grid ── */}
        <div className="grid lg:grid-cols-3 gap-6">

          {/* Left 2 cols */}
          <div className="lg:col-span-2 space-y-6">

            {/* My Agents */}
            <div className="flex items-end justify-between">
              <div>
                <div className="text-violet-600 font-bold text-[11px] tracking-[0.2em] uppercase mb-2">Workspace</div>
                <h2 className="font-heading text-2xl font-extrabold text-slate-900 tracking-[-0.02em]">My Agents</h2>
              </div>
              <Link href="/creator-dashboard/agents" className="text-sm font-semibold text-slate-500 hover:text-violet-600 transition-colors flex items-center gap-1">
                Manage all <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white rounded-[1.5rem] border border-slate-200/60 shadow-sm overflow-hidden">
              {myAgents.map((a, i) => (
                <motion.div
                  key={a.id}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.07 }}
                  className={`flex items-center gap-4 px-6 py-5 hover:bg-slate-50/60 transition-colors group ${i < myAgents.length - 1 ? "border-b border-slate-100" : ""}`}
                >
                  <div className="w-10 h-10 rounded-xl bg-violet-50 border border-violet-100 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Bot className="w-5 h-5 text-violet-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="font-bold text-[15px] text-slate-900 truncate">{a.name}</p>
                      <span className={`shrink-0 text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-md border ${
                        a.status === "Published"
                          ? "bg-emerald-50 text-emerald-600 border-emerald-200/50"
                          : "bg-amber-50 text-amber-600 border-amber-200/50"
                      }`}>{a.status}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded">{a.category}</span>
                      {a.queries !== "—" && <span className="text-xs font-medium text-slate-400">{a.queries} queries</span>}
                    </div>
                  </div>
                  {a.feedback > 0 && (
                    <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-100 shrink-0">
                      <BarChart2 className="w-3.5 h-3.5" /> {a.feedback}%
                    </div>
                  )}
                  <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
                    <Link href="/creator-dashboard/studio">
                      <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg text-slate-400 hover:text-violet-600 hover:bg-violet-50"><PenLine className="w-4 h-4" /></Button>
                    </Link>
                    <Link href="/creator-dashboard/chat">
                      <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg text-slate-400 hover:text-blue-600 hover:bg-blue-50"><MessageSquare className="w-4 h-4" /></Button>
                    </Link>
                  </div>
                </motion.div>
              ))}
              <div className="p-4 bg-slate-50/40 border-t border-slate-100">
                <Link href="/creator-dashboard/studio">
                  <Button className="w-full rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-semibold shadow-sm">
                    <Plus className="w-4 h-4 mr-2" /> Create New Agent
                  </Button>
                </Link>
              </div>
            </div>

            {/* Quick-Start Templates */}
            <div>
              <div className="flex items-end justify-between mb-4">
                <div>
                  <div className="text-violet-600 font-bold text-[11px] tracking-[0.2em] uppercase mb-2">Templates</div>
                  <h2 className="font-heading text-xl font-extrabold text-slate-900 tracking-[-0.02em]">Quick-Start</h2>
                </div>
              </div>
              <div className="grid sm:grid-cols-3 gap-4">
                {templates.map((t, i) => (
                  <motion.div key={t.name} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + i * 0.07 }}>
                    <Link href="/creator-dashboard/studio">
                      <div className={`bg-gradient-to-br ${t.gradient} rounded-[1.25rem] p-6 cursor-pointer hover:scale-[1.02] hover:shadow-xl transition-all duration-300 text-white group`}>
                        <h3 className="font-heading font-extrabold text-[15px] mb-2">{t.name}</h3>
                        <p className="text-[12px] font-medium opacity-80 leading-relaxed mb-4">{t.desc}</p>
                        <div className="flex items-center text-[12px] font-bold opacity-90 gap-1 group-hover:gap-2 transition-all">
                          Use template <ArrowRight className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Right col */}
          <div className="space-y-6">

            {/* Activity Log */}
            <div>
              <div className="text-violet-600 font-bold text-[11px] tracking-[0.2em] uppercase mb-2">System</div>
              <h2 className="font-heading text-2xl font-extrabold text-slate-900 tracking-[-0.02em] mb-4">Activity Log</h2>
            </div>

            <div className="bg-white rounded-[1.5rem] border border-slate-200/60 shadow-sm overflow-hidden">
              {activityLog.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 + i * 0.07 }}
                  className={`flex gap-4 px-5 py-4 ${i < activityLog.length - 1 ? "border-b border-slate-100" : ""}`}
                >
                  <item.icon className={`w-4 h-4 mt-0.5 shrink-0 ${item.color}`} />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-slate-900">{item.title}</p>
                    <p className="text-[12px] font-medium text-slate-500 mt-0.5 line-clamp-1">{item.desc}</p>
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 whitespace-nowrap shrink-0 mt-0.5">{item.time}</span>
                </motion.div>
              ))}
            </div>

            {/* Quick Actions */}
            <div>
              <div className="text-violet-600 font-bold text-[11px] tracking-[0.2em] uppercase mb-3">Quick Actions</div>
              <div className="space-y-2">
                {[
                  { href: "/creator-dashboard/knowledge", label: "Upload Knowledge Base", sub: "Add PDFs, URLs, or raw text",    icon: Database },
                  { href: "/creator-dashboard/studio",    label: "Open Creator Studio",   sub: "Configure prompts & publish",     icon: Zap },
                  { href: "/creator-dashboard/analytics", label: "View Analytics",         sub: "Per-agent performance data",      icon: BarChart2 },
                  { href: "/creator-dashboard/chat",      label: "Test Chats",             sub: "Verify agent behavior live",      icon: MessageSquare },
                ].map((item) => (
                  <Link key={item.href} href={item.href}
                    className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-200/60 shadow-sm hover:border-violet-200 hover:shadow-md transition-all duration-200 group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0 group-hover:bg-violet-600 group-hover:border-violet-600 transition-colors">
                      <item.icon className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold text-slate-900">{item.label}</p>
                      <p className="text-[12px] font-medium text-slate-500 mt-0.5">{item.sub}</p>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-slate-300 group-hover:text-violet-500 transition-colors shrink-0" />
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
