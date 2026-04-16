"use client";

import { motion } from "framer-motion";
import { Activity, MessageSquare, Clock, Server, AlertTriangle, CheckCircle2 } from "lucide-react";

const sessions = [
  { id: 1, user: "alice@example.com", agent: "Data Analyst Pro", started: "10:42 AM", msgs: 14, status: "Active" },
  { id: 2, user: "bob@example.com", agent: "Sales Outreach Bot", started: "10:38 AM", msgs: 6, status: "Active" },
  { id: 3, user: "carol@example.com", agent: "DevOps Helper", started: "09:55 AM", msgs: 32, status: "Ended" },
  { id: 4, user: "frank@example.com", agent: "Legal Reviewer", started: "09:10 AM", msgs: 8, status: "Ended" },
];

const systemLogs = [
  { icon: CheckCircle2, color: "text-emerald-500", msg: "All API providers operational.", time: "1m" },
  { icon: AlertTriangle, color: "text-amber-500", msg: "OpenAI rate limit hit for 2 users.", time: "12m" },
  { icon: CheckCircle2, color: "text-emerald-500", msg: "Knowledge vectorization job completed.", time: "35m" },
  { icon: Server, color: "text-blue-500", msg: "Database backup completed (2.4 GB).", time: "1h" },
  { icon: AlertTriangle, color: "text-red-500", msg: "User elena@example.com flagged for abuse.", time: "3h" },
];

export default function SystemMonitorPage() {
  return (
    <div className="p-6 lg:p-10 space-y-10 max-w-[1400px] mx-auto min-h-full">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">System Monitor</h1>
        <p className="text-slate-500 mt-2 font-medium text-lg">Live overview of active sessions and system health.</p>
      </motion.div>

      <div className="grid sm:grid-cols-3 gap-6">
        {[
          { label: "Active Sessions", value: "2", icon: Activity, color: "text-emerald-600", bg: "bg-emerald-50" },
          { label: "Msgs Today", value: "8,921", icon: MessageSquare, color: "text-blue-600", bg: "bg-blue-50" },
          { label: "Avg. Latency", value: "1.2s", icon: Clock, color: "text-violet-600", bg: "bg-violet-50" },
        ].map((s, i) => (
          <motion.div key={s.label} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}
            className="bg-white rounded-[1.5rem] p-6 shadow-sm border border-slate-200/60 flex items-center gap-5"
          >
            <div className={`p-4 rounded-2xl ${s.bg}`}><s.icon className={`h-6 w-6 ${s.color}`} /></div>
            <div><p className="font-heading text-3xl font-extrabold text-slate-900">{s.value}</p><p className="text-sm font-bold text-slate-500 mt-1">{s.label}</p></div>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Live Sessions */}
        <div>
          <h2 className="font-heading text-xl font-extrabold text-slate-900 mb-4">Active Chat Sessions</h2>
          <div className="bg-white rounded-[2rem] border border-slate-200/60 shadow-sm overflow-hidden">
            <div className="divide-y divide-slate-100">
              {sessions.map((s, i) => (
                <motion.div key={s.id} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.06 }}
                  className="flex items-center gap-4 px-5 py-4 hover:bg-slate-50/50"
                >
                  <span className={`w-2.5 h-2.5 rounded-full shrink-0 ${s.status === "Active" ? "bg-emerald-400 animate-pulse" : "bg-slate-300"}`}></span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-slate-900 truncate">{s.user}</p>
                    <p className="text-xs font-medium text-slate-500 truncate">→ {s.agent}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-xs font-bold text-slate-700">{s.msgs} msgs</p>
                    <p className="text-[10px] font-medium text-slate-400">{s.started}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* System Logs */}
        <div>
          <h2 className="font-heading text-xl font-extrabold text-slate-900 mb-4">System Logs</h2>
          <div className="bg-white rounded-[2rem] border border-slate-200/60 shadow-sm overflow-hidden">
            <div className="divide-y divide-slate-100">
              {systemLogs.map((log, i) => (
                <motion.div key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.06 }}
                  className="flex items-start gap-4 px-5 py-4"
                >
                  <log.icon className={`w-4 h-4 mt-0.5 shrink-0 ${log.color}`} />
                  <p className="flex-1 text-sm font-medium text-slate-700">{log.msg}</p>
                  <span className="text-[10px] font-bold text-slate-400 shrink-0">{log.time}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
