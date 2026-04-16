"use client";

import { motion } from "framer-motion";
import {
  Users, Bot, MessageSquare, TrendingUp, ShieldOff, BotOff,
  Activity, CheckCircle2, AlertTriangle, Clock, Zap, ArrowUpRight,
  Server, Database, Cpu, Wifi
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const kpiCards = [
  { label: "Total Users",      value: "1,284", change: "+12%",   icon: Users,       color: "text-blue-600",   bg: "bg-blue-50",   border: "border-blue-100" },
  { label: "End Users",        value: "1,142", change: "+9%",    icon: Users,       color: "text-indigo-600", bg: "bg-indigo-50", border: "border-indigo-100" },
  { label: "Agent Creators",   value: "138",   change: "+24%",   icon: Zap,         color: "text-violet-600", bg: "bg-violet-50", border: "border-violet-100" },
  { label: "Total Agents",     value: "47",    change: "+5%",    icon: Bot,         color: "text-slate-600",  bg: "bg-slate-100", border: "border-slate-200" },
  { label: "Active Chats Today",value: "342",  change: "Live",   icon: MessageSquare,color: "text-emerald-600",bg: "bg-emerald-50",border: "border-emerald-100" },
  { label: "Disabled Users",   value: "8",     change: "–",      icon: ShieldOff,   color: "text-amber-600",  bg: "bg-amber-50",  border: "border-amber-100" },
  { label: "Disabled Agents",  value: "3",     change: "–",      icon: BotOff,      color: "text-red-600",    bg: "bg-red-50",    border: "border-red-100" },
  { label: "Uptime",           value: "99.9%", change: "Stable", icon: TrendingUp,  color: "text-teal-600",   bg: "bg-teal-50",   border: "border-teal-100" },
];

const recentActivity = [
  { icon: CheckCircle2, color: "text-emerald-500", msg: "New user registered — frank@example.com", time: "2 min ago" },
  { icon: Zap,          color: "text-violet-500",  msg: "Agent published — 'Sales Outreach Generator v1.2'", time: "14 min ago" },
  { icon: AlertTriangle,color: "text-amber-500",   msg: "Rate limit warning — OpenAI key at 80% quota", time: "1 hour ago" },
  { icon: ShieldOff,    color: "text-red-500",      msg: "User disabled — elena@example.com (abuse report)", time: "3 hours ago" },
  { icon: Database,     color: "text-blue-500",     msg: "Knowledge vectorization job completed — 14 docs", time: "5 hours ago" },
  { icon: Clock,        color: "text-slate-400",    msg: "Daily database backup completed — 2.4 GB", time: "Yesterday" },
];

const systemHealth = [
  { label: "API Service",     status: "Operational", icon: Wifi,     color: "text-emerald-500" },
  { label: "Database",        status: "Operational", icon: Database, color: "text-emerald-500" },
  { label: "Vector Store",    status: "Operational", icon: Cpu,      color: "text-emerald-500" },
  { label: "Auth Service",    status: "Operational", icon: Server,   color: "text-emerald-500" },
];

export default function AdminDashboardPage() {
  return (
    <div className="min-h-full bg-[#fafafa] p-6 lg:p-10 space-y-10">

      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center text-red-600 font-bold text-[11px] tracking-[0.2em] uppercase mb-4 bg-red-50 px-4 py-2 rounded-full border border-red-100">
            Platform Admin
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-[-0.03em]">Platform Overview</h1>
          <p className="text-slate-500 mt-2 font-medium text-lg">Full visibility into users, agents, and system health.</p>
        </div>
        <div className="flex gap-3">
          <Link href="/admin/logs"><Button variant="outline" className="rounded-xl border-slate-200 font-bold shadow-sm">View Logs</Button></Link>
          <Link href="/admin/config"><Button className="rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold shadow-md">System Config</Button></Link>
        </div>
      </motion.div>

      {/* 8 KPI Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {kpiCards.map((s, i) => (
          <motion.div key={s.label} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
            className="bg-white rounded-2xl p-5 border border-slate-200/60 shadow-sm hover:shadow-md transition-all flex items-center gap-4"
          >
            <div className={`p-3 rounded-xl ${s.bg} border ${s.border} shrink-0`}>
              <s.icon className={`h-5 w-5 ${s.color}`} />
            </div>
            <div>
              <p className="font-heading text-2xl font-extrabold text-slate-900 tracking-tight">{s.value}</p>
              <p className="text-xs font-bold text-slate-500">{s.label}</p>
              <span className={`text-[10px] font-bold ${s.change === "–" ? "text-slate-400" : "text-emerald-600"}`}>{s.change}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Main 3-col grid */}
      <div className="grid lg:grid-cols-3 gap-6">

        {/* Left 2 cols: Recent Activity */}
        <div className="lg:col-span-2 space-y-5">
          <div>
            <div className="text-red-600 font-bold text-[11px] tracking-[0.2em] uppercase mb-2">Platform Feed</div>
            <h2 className="font-heading text-2xl font-extrabold text-slate-900 tracking-[-0.02em]">Recent Activity</h2>
          </div>
          <div className="bg-white rounded-[1.5rem] border border-slate-200/60 shadow-sm overflow-hidden">
            {recentActivity.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 + i * 0.06 }}
                className={`flex items-start gap-4 px-6 py-4 ${i < recentActivity.length - 1 ? "border-b border-slate-100" : ""}`}
              >
                <item.icon className={`w-4 h-4 mt-0.5 shrink-0 ${item.color}`} />
                <p className="flex-1 text-sm font-medium text-slate-700">{item.msg}</p>
                <span className="text-[10px] font-bold text-slate-400 whitespace-nowrap shrink-0">{item.time}</span>
              </motion.div>
            ))}
            <div className="p-4 border-t border-slate-100 bg-slate-50/40">
              <Link href="/admin/logs"><Button variant="ghost" className="w-full font-bold text-red-600 hover:bg-red-50 rounded-xl text-sm">View All Logs <ArrowUpRight className="w-4 h-4 ml-1.5" /></Button></Link>
            </div>
          </div>

          {/* Quick Actions */}
          <div>
            <div className="text-red-600 font-bold text-[11px] tracking-[0.2em] uppercase mb-3">Quick Actions</div>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { href: "/admin/users",   label: "Manage Users",   sub: "View, enable, disable accounts",    icon: Users,       color: "group-hover:bg-blue-600" },
                { href: "/admin/agents",  label: "Manage Agents",  sub: "Inspect and moderate AI agents",    icon: Bot,         color: "group-hover:bg-violet-600" },
                { href: "/admin/usage",   label: "Usage Monitor",  sub: "Platform analytics and trends",     icon: Activity,    color: "group-hover:bg-emerald-600" },
                { href: "/admin/config",  label: "System Config",  sub: "API keys, models, rate limits",     icon: Activity,    color: "group-hover:bg-red-600" },
              ].map((item) => (
                <Link key={item.href} href={item.href}
                  className="flex items-center gap-4 p-5 bg-white rounded-xl border border-slate-200/60 shadow-sm hover:shadow-md hover:border-slate-300 transition-all group"
                >
                  <div className={`w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center shrink-0 ${item.color} transition-colors group-hover:text-white`}>
                    <item.icon className="w-5 h-5 text-slate-600 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">{item.label}</p>
                    <p className="text-[12px] font-medium text-slate-500">{item.sub}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Right col */}
        <div className="space-y-5">
          {/* System Health */}
          <div>
            <div className="text-red-600 font-bold text-[11px] tracking-[0.2em] uppercase mb-2">Infrastructure</div>
            <h2 className="font-heading text-2xl font-extrabold text-slate-900 tracking-[-0.02em] mb-4">System Health</h2>
          </div>
          <div className="bg-white rounded-[1.5rem] border border-slate-200/60 shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-100 flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-sm font-bold text-slate-900">All Systems Operational</span>
            </div>
            {systemHealth.map((s, i) => (
              <div key={s.label} className={`flex items-center justify-between px-6 py-4 ${i < systemHealth.length - 1 ? "border-b border-slate-100" : ""}`}>
                <div className="flex items-center gap-3">
                  <s.icon className={`w-4 h-4 ${s.color}`} />
                  <span className="text-sm font-bold text-slate-700">{s.label}</span>
                </div>
                <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-100 px-2.5 py-1 rounded-md">{s.status}</span>
              </div>
            ))}
          </div>

          {/* Platform Stats */}
          <div className="bg-[#0a0f1c] rounded-[1.5rem] p-6 border border-slate-800 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-red-600/10 rounded-full blur-3xl" />
            <div className="relative z-10">
              <div className="text-red-400 font-bold text-[11px] tracking-[0.2em] uppercase mb-4">Platform Stats · Today</div>
              <div className="space-y-4">
                {[
                  { label: "Messages Processed", value: "8,921" },
                  { label: "Knowledge Queries",  value: "3,412" },
                  { label: "New Registrations",  value: "24" },
                  { label: "Avg Response Time",  value: "1.2s" },
                ].map((s) => (
                  <div key={s.label} className="flex justify-between items-center border-b border-white/5 pb-3 last:border-0 last:pb-0">
                    <span className="text-xs font-semibold text-slate-400">{s.label}</span>
                    <span className="font-heading text-lg font-extrabold text-white">{s.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
