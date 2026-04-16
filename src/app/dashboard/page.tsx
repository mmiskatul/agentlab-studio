"use client";

import { motion } from "framer-motion";
import {
  Bot, MessageSquare, ArrowRight, Clock, Sparkles,
  CheckCircle2, Zap, Network, ArrowUpRight, ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// --- MOCK DATA ---
const recentChats = [
  { agent: "Data Analyst Pro", message: "Revenue grew 14% this quarter based on Q3 figures.", time: "2 min ago", unread: true },
  { agent: "DevOps Helper", message: "Your docker-compose.yml is correct but port 5432 conflicts.", time: "1 hour ago", unread: false },
  { agent: "UX Copywriter", message: "Here are 3 headline options for the empty state screen.", time: "3 hours ago", unread: false },
];

const featuredAgents = [
  { name: "Data Analyst Pro", desc: "Query your data warehouse using plain English. No SQL required.", category: "Analytics", verified: true, uses: "12.4k" },
  { name: "DevOps Helper", desc: "Debug CI/CD pipelines, Dockerfiles, and Kubernetes configs.", category: "Engineering", verified: true, uses: "94k" },
  { name: "Legal Reviewer", desc: "Scan NDAs and contracts for risks and missing clauses.", category: "Legal", verified: true, uses: "3.1k" },
];

const quickStats = [
  { label: "Available Agents", value: "248", icon: Bot, color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-100" },
  { label: "Chats This Week", value: "32", icon: MessageSquare, color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-100" },
  { label: "Tasks Automated", value: "1,204", icon: Sparkles, color: "text-amber-600", bg: "bg-amber-50", border: "border-amber-100" },
  { label: "Time Saved", value: "14.5h", icon: Clock, color: "text-indigo-600", bg: "bg-indigo-50", border: "border-indigo-100" },
];

export default function DashboardPage() {
  return (
    <div className="min-h-full bg-[#fafafa] font-body text-slate-900 selection:bg-blue-100">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-10 space-y-10">

        {/* ── Welcome Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row md:items-center justify-between gap-6"
        >
          <div>
            <div className="inline-flex items-center text-blue-600 font-bold text-[11px] tracking-[0.2em] uppercase mb-4 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100">
              Welcome back
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-[-0.03em]">
              Good afternoon, Alex.
            </h1>
            <p className="text-slate-500 mt-2 font-medium text-lg leading-relaxed">
              You have 3 unread messages and 1 new agent to explore.
            </p>
          </div>
          <Link href="/dashboard/agents">
            <Button className="rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/20 font-semibold px-7 py-5 transition-all hover:shadow-lg hover:-translate-y-0.5">
              Explore Agents <ArrowRight className="w-4 h-4 ml-2" />
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
                <p className="text-xs font-semibold text-slate-500 mt-0.5">{s.label}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Bento Grid ── */}
        <div className="grid lg:grid-cols-3 gap-6">

          {/* Left large: Featured Agents — spans 2 cols */}
          <div className="lg:col-span-2 space-y-5">

            <div className="flex items-end justify-between">
              <div>
                <div className="text-blue-600 font-bold text-[11px] tracking-[0.2em] uppercase mb-2">Recommended</div>
                <h2 className="font-heading text-2xl font-extrabold text-slate-900 tracking-[-0.02em]">Top agents for you</h2>
              </div>
              <Link href="/dashboard/agents" className="text-sm font-semibold text-slate-500 hover:text-blue-600 transition-colors flex items-center gap-1">
                View all <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="space-y-3">
              {featuredAgents.map((a, i) => (
                <motion.div
                  key={a.name}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.07 }}
                  className="bg-white rounded-[1.5rem] p-5 sm:p-6 border border-slate-200/60 shadow-sm hover:shadow-xl hover:shadow-slate-200/60 transition-all duration-500 flex items-center gap-5 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-tr from-slate-100 to-slate-50 border border-slate-200/80 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Bot className="h-5 w-5 text-slate-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-heading text-[15px] font-bold text-slate-900">{a.name}</h3>
                      {a.verified && <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0" />}
                      <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 bg-slate-100 px-2 py-0.5 rounded-md ml-auto shrink-0">{a.category}</span>
                    </div>
                    <p className="text-sm text-slate-500 font-medium leading-relaxed line-clamp-1">{a.desc}</p>
                    <p className="text-[11px] font-semibold text-slate-400 mt-1.5">{a.uses} conversations</p>
                  </div>
                  <Link href="/dashboard/chat" className="shrink-0">
                    <Button size="sm" className="rounded-full bg-slate-900 hover:bg-blue-600 text-white font-semibold shadow-sm transition-colors text-[13px] px-4">
                      Chat
                    </Button>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Dark Activity Card */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="bg-[#050b14] rounded-[1.5rem] p-8 border border-slate-800 shadow-xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-blue-600/15 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-600/10 rounded-full blur-2xl" />
              <div className="relative z-10 flex items-start justify-between gap-6">
                <div>
                  <div className="text-blue-400 font-bold text-[11px] tracking-[0.2em] uppercase mb-3">Platform Activity</div>
                  <h3 className="font-heading text-xl font-bold text-white mb-1">This Week</h3>
                  <p className="text-slate-400 font-medium text-sm leading-relaxed max-w-xs">
                    32 AI conversations completed. 14.5 hours automated. Workflows running smoothly.
                  </p>
                </div>
                <div className="flex flex-col gap-3 shrink-0">
                  <div className="text-right">
                    <p className="font-heading text-3xl font-extrabold text-white">98.9<span className="text-emerald-400 text-xl">%</span></p>
                    <p className="text-[11px] font-semibold text-slate-500 mt-0.5">Uptime SLA</p>
                  </div>
                  <div className="text-right">
                    <p className="font-heading text-2xl font-extrabold text-white">1.1<span className="text-blue-400 text-base">s</span></p>
                    <p className="text-[11px] font-semibold text-slate-500 mt-0.5">Avg Latency</p>
                  </div>
                </div>
              </div>
              <div className="relative z-10 mt-6 flex items-center gap-4 pt-6 border-t border-white/5">
                {[
                  { icon: Network, label: "Multi-agent support" },
                  { icon: Zap, label: "GPT-4o powered" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2 text-[12px] font-semibold text-slate-400">
                    <item.icon className="w-3.5 h-3.5 text-blue-400" /> {item.label}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Recent Chats */}
          <div className="space-y-5">

            <div>
              <div className="text-blue-600 font-bold text-[11px] tracking-[0.2em] uppercase mb-2">Inbox</div>
              <div className="flex items-end justify-between">
                <h2 className="font-heading text-2xl font-extrabold text-slate-900 tracking-[-0.02em]">Recent Chats</h2>
                <Link href="/dashboard/history" className="text-sm font-semibold text-slate-500 hover:text-blue-600 transition-colors flex items-center gap-1">
                  All <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-[1.5rem] border border-slate-200/60 shadow-sm overflow-hidden">
              {recentChats.map((c, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.07 }}
                  className={`flex items-start gap-4 p-5 cursor-pointer hover:bg-slate-50 transition-colors group ${i < recentChats.length - 1 ? "border-b border-slate-100" : ""}`}
                >
                  <div className="relative shrink-0">
                    <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center">
                      <MessageSquare className="h-4 w-4 text-slate-500" />
                    </div>
                    {c.unread && (
                      <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-blue-500 border-2 border-white rounded-full" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <p className={`text-sm font-bold truncate ${c.unread ? "text-slate-900" : "text-slate-700"}`}>{c.agent}</p>
                      <span className="text-[10px] font-semibold text-slate-400 whitespace-nowrap ml-2 shrink-0">{c.time}</span>
                    </div>
                    <p className="text-[13px] font-medium text-slate-500 truncate leading-relaxed">{c.message}</p>
                  </div>
                </motion.div>
              ))}
              <div className="p-4 bg-slate-50/50 border-t border-slate-100">
                <Link href="/dashboard/history">
                  <Button variant="ghost" className="w-full rounded-xl text-blue-600 font-semibold hover:bg-blue-50/60 text-sm h-9">
                    View full history <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Quick Actions */}
            <div>
              <div className="text-blue-600 font-bold text-[11px] tracking-[0.2em] uppercase mb-3">Quick Actions</div>
              <div className="space-y-2">
                {[
                  { href: "/dashboard/agents", label: "Browse all agents", sub: "248 available workflows", icon: Bot },
                  { href: "/dashboard/chat", label: "Start a new chat", sub: "Pick any agent and begin", icon: MessageSquare },
                  { href: "/dashboard/history", label: "View past sessions", sub: "12 conversations archived", icon: Clock },
                ].map((item) => (
                  <Link key={item.href} href={item.href}
                    className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-200/60 shadow-sm hover:border-blue-200 hover:shadow-md transition-all duration-200 group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:border-blue-600 transition-colors">
                      <item.icon className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold text-slate-900">{item.label}</p>
                      <p className="text-[12px] font-medium text-slate-500 mt-0.5">{item.sub}</p>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-slate-300 group-hover:text-blue-500 transition-colors shrink-0" />
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
