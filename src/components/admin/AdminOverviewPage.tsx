"use client";

import { motion } from "framer-motion";
import {
  Users, Bot, MessageSquare, TrendingUp, TrendingDown, ShieldOff,
  CheckCircle2, AlertTriangle, Zap, ArrowRight, Activity, Server, Shield, Clock
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

// ── Mock: KPI stats ────────────────────────────────────────────────────────────
const stats = [
  {
    label: "Total Users", value: "24,592",
    change: "+12.5%", up: true, sub: "vs last month",
    icon: Users, color: "text-blue-600", bg: "bg-blue-50"
  },
  {
    label: "Active Agents", value: "1,204",
    change: "+4.2%", up: true, sub: "vs last month",
    icon: Bot, color: "text-blue-600", bg: "bg-blue-50"
  },
  {
    label: "Messages Sent", value: "89.4k",
    change: "-1.8%", up: false, sub: "vs last month",
    icon: MessageSquare, color: "text-blue-600", bg: "bg-blue-50"
  },
  {
    label: "System Health", value: "99.99%",
    change: "Healthy", up: true, sub: "All services live",
    icon: Activity, color: "text-emerald-600", bg: "bg-emerald-50"
  },
];

// ── Mock: Recent users ─────────────────────────────────────────────────────────
const recentUsers = [
  { name: "Sarah Jenkins", email: "sarah.j@example.com",  role: "Editor",      status: "Active",    avatar: "https://i.pravatar.cc/100?img=47" },
  { name: "Marcus Reed",   email: "m.reed@agency.co",     role: "Contributor", status: "Offline",   avatar: null, initials: "MR", avatarBg: "bg-blue-50 text-blue-700" },
  { name: "David Chen",    email: "dchen@platform.io",    role: "Admin",       status: "Active",    avatar: "https://i.pravatar.cc/100?img=12" },
  { name: "Elena Lopez",   email: "elopez@studio.net",    role: "Reviewer",    status: "Suspended", avatar: null, initials: "EL", avatarBg: "bg-slate-100 text-slate-500" },
];

// ── Mock: System alerts ────────────────────────────────────────────────────────
const alerts = [
  { icon: CheckCircle2,  color: "text-emerald-500", dotBg: "bg-emerald-50", msg: "Agent published — Sales Outreach v1.2",        time: "14 min ago" },
  { icon: AlertTriangle, color: "text-amber-500",   dotBg: "bg-amber-50",   msg: "Rate limit warning — OpenAI at 80% quota",     time: "1 hour ago" },
  { icon: ShieldOff,     color: "text-red-500",     dotBg: "bg-red-50",     msg: "User disabled — elena@studio.net",             time: "3 hours ago" },
  { icon: Zap,           color: "text-blue-500",  dotBg: "bg-blue-50",  msg: "Knowledge indexing job completed — 14 docs",   time: "5 hours ago" },
];

const statusConfig: Record<string, { dot: string; badge: string }> = {
  Active:    { dot: "bg-emerald-500", badge: "text-emerald-700 bg-emerald-50 border-emerald-100" },
  Offline:   { dot: "bg-slate-400",   badge: "text-slate-600 bg-slate-50 border-slate-200" },
  Suspended: { dot: "bg-blue-500",    badge: "text-blue-700 bg-blue-50 border-blue-100" },
};

export default function AdminOverviewPage() {
  return (
    <div className="mx-auto flex w-full max-w-[1600px] flex-col gap-10 px-4 py-8 sm:px-6 lg:px-8">

      {/* ── Page Title ── */}
      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="font-heading text-[28px] font-bold text-slate-900 tracking-tight">Admin Overview</h1>
        <p className="text-slate-500 font-medium mt-1">Monitor platform health, user activity, and global metrics.</p>
      </motion.div>

      {/* ── Stats Grid ── */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="bg-white rounded-xl p-6 border border-slate-200 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.03)] flex flex-col justify-between"
          >
            <div className="flex justify-between items-start mb-6">
              <p className="text-[11px] font-black text-slate-400 uppercase tracking-[0.15em]">{s.label}</p>
              <div className={cn("p-2.5 rounded-lg shrink-0", s.bg)}>
                <s.icon className={cn("h-5 w-5", s.color)} />
              </div>
            </div>
            <div>
              <p className="font-heading text-[32px] font-extrabold text-slate-900 leading-none mb-3">{s.value}</p>
              <div className="flex items-center gap-2 text-[12px] font-bold">
                {s.up ? <TrendingUp className="w-4 h-4 text-emerald-500" /> : <TrendingDown className="w-4 h-4 text-slate-400" />}
                <span className={s.up ? "text-emerald-600" : "text-slate-500"}>{s.change}</span>
                <span className="text-slate-400 font-black tracking-widest uppercase opacity-60 text-[9px]">{s.sub}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ── Main Content Area ── */}
      <div className="grid lg:grid-cols-3 gap-10">

        {/* Left: Recent Activity Table */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-400 font-black text-[10px] tracking-[0.2em] uppercase mb-1">REAL-TIME</p>
              <h2 className="font-heading text-2xl font-bold text-slate-900 tracking-tight">Platform Activity</h2>
            </div>
            <Link href="/admin/users" className="text-sm font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1 transition-colors">
              Manage Users <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-slate-100 bg-slate-50/30">
                    <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Platform User</th>
                    <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Access Role</th>
                    <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">Current Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {recentUsers.map((u) => {
                    const sc = statusConfig[u.status];
                    return (
                      <tr key={u.email} className="hover:bg-slate-50/50 transition-colors group cursor-pointer">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-4">
                            {u.avatar ? (
                              <img src={u.avatar} alt={u.name} className="w-9 h-9 rounded-full object-cover shrink-0 border border-slate-200" />
                            ) : (
                              <div className={cn("w-9 h-9 rounded-full flex items-center justify-center text-[11px] font-black shrink-0", u.avatarBg)}>{u.initials}</div>
                            )}
                            <div className="min-w-0">
                              <p className="font-bold text-sm text-slate-950 truncate group-hover:text-blue-600 transition-colors">{u.name}</p>
                              <p className="text-[12px] font-medium text-slate-400 truncate">{u.email}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-[10px] font-black uppercase tracking-wider text-slate-500 bg-slate-100 px-2 py-1 rounded-md border border-slate-200/50">
                            {u.role}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <div className={cn("inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[11px] font-bold shadow-sm transition-all", sc.badge)}>
                            <span className={cn("w-1.5 h-1.5 rounded-full shrink-0", sc.dot)} />
                            {u.status}
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="p-4 bg-slate-50/20 border-t border-slate-100 text-center">
              <Link href="/admin/users" className="text-xs font-bold text-slate-400 hover:text-slate-900 transition-colors uppercase tracking-widest">
                View all user records
              </Link>
            </div>
          </div>
        </div>

        {/* Right Sidebar: Health & Alerts */}
        <div className="space-y-10">
          
          {/* Section: System Monitoring */}
          <section className="space-y-6">
            <div>
              <p className="text-slate-400 font-black text-[10px] tracking-[0.2em] uppercase mb-1">HEALTH MONITOR</p>
              <h2 className="font-heading text-xl font-bold text-slate-900 tracking-tight">System Status</h2>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-4 shadow-sm">
              {[
                { label: "Core API Service",  ok: true },
                { label: "PostgreSQL Database", ok: true },
                { label: "Vector Search Engine", ok: true },
                { label: "Auth Middleware", ok: true },
              ].map((s) => (
                <div key={s.label} className="flex items-center justify-between">
                  <span className="text-sm font-bold text-slate-600">{s.label}</span>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                    <span className="text-[11px] font-black text-emerald-600 uppercase tracking-tighter">Healthy</span>
                  </div>
                </div>
              ))}
              <div className="pt-4 mt-4 border-t border-slate-100">
                <div className="flex items-center justify-between bg-emerald-50/40 p-3 rounded-lg border border-emerald-100/50">
                  <div className="flex items-center gap-2">
                    <Server className="h-3.5 w-3.5 text-emerald-600" />
                    <span className="text-xs font-bold text-emerald-800 uppercase tracking-tight">Operational</span>
                  </div>
                  <span className="text-[10px] font-black text-emerald-500 animate-pulse uppercase">Live</span>
                </div>
              </div>
            </div>
          </section>

          {/* Section: Critical Alerts */}
          <section className="space-y-6">
            <div>
              <p className="text-slate-400 font-black text-[10px] tracking-[0.2em] uppercase mb-1">SECURITY</p>
              <h2 className="font-heading text-xl font-bold text-slate-900 tracking-tight">Action Items</h2>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="divide-y divide-slate-100">
                {alerts.map((a, i) => (
                  <div key={i} className="flex gap-4 p-5 hover:bg-slate-50 transition-all group cursor-pointer">
                    <div className={cn("h-9 w-9 rounded-lg flex items-center justify-center shrink-0 border border-slate-100 group-hover:scale-110 transition-transform shadow-sm", a.dotBg)}>
                      <a.icon className={cn("h-4 w-4", a.color)} />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center justify-between">
                         <p className="font-bold text-[13px] text-slate-950 group-hover:text-blue-600 transition-colors">{a.msg}</p>
                      </div>
                      <div className="flex items-center gap-1.5 mt-1">
                        <Clock className="w-3 h-3 text-slate-300" />
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-tight">{a.time}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

        </div>

      </div>
    </div>
  );
}
