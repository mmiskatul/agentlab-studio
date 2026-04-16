"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, MessageSquare, LogIn, Bot, AlertTriangle, Info, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type LogEntry = {
  id: string; type: "chat" | "login" | "agent" | "error" | "system";
  user: string; agent: string; status: "Success" | "Warning" | "Error" | "Info";
  summary: string; timestamp: string;
};

const mockLogs: LogEntry[] = [
  { id:"l1",  type:"chat",   user:"alice@example.com",  agent:"Data Analyst Pro",    status:"Success", summary:"12-message conversation completed.",       timestamp:"2026-04-17 08:42" },
  { id:"l2",  type:"login",  user:"bob@example.com",    agent:"—",                   status:"Success", summary:"Login via Google OAuth.",                  timestamp:"2026-04-17 08:38" },
  { id:"l3",  type:"agent",  user:"grace@example.com",  agent:"DevOps Helper",       status:"Success", summary:"Knowledge base re-indexed — 8 docs.",      timestamp:"2026-04-17 08:25" },
  { id:"l4",  type:"error",  user:"elena@example.com",  agent:"Sales Outreach Bot",  status:"Error",   summary:"OpenAI API error 429 — rate limited.",     timestamp:"2026-04-17 08:10" },
  { id:"l5",  type:"system", user:"—",                  agent:"—",                   status:"Info",    summary:"Scheduled vector indexing job completed.",  timestamp:"2026-04-17 07:00" },
  { id:"l6",  type:"login",  user:"carol@example.com",  agent:"—",                   status:"Warning", summary:"Failed login attempt — wrong credentials.", timestamp:"2026-04-16 23:55" },
  { id:"l7",  type:"chat",   user:"frank@example.com",  agent:"Legal Reviewer",      status:"Success", summary:"8-message conversation completed.",        timestamp:"2026-04-16 22:30" },
  { id:"l8",  type:"agent",  user:"bob@example.com",    agent:"UX Copywriter",       status:"Success", summary:"Agent published · visibility: Public.",    timestamp:"2026-04-16 21:10" },
  { id:"l9",  type:"error",  user:"alice@example.com",  agent:"Data Analyst Pro",    status:"Error",   summary:"Context window exceeded — 16k tokens.",   timestamp:"2026-04-16 19:44" },
  { id:"l10", type:"system", user:"—",                  agent:"—",                   status:"Info",    summary:"Daily database backup completed (2.4 GB).",timestamp:"2026-04-16 03:00" },
];

const typeIcon: Record<string, React.ElementType> = {
  chat:   MessageSquare,
  login:  LogIn,
  agent:  Bot,
  error:  AlertTriangle,
  system: Info,
};
const typeColor: Record<string, string> = {
  chat:   "text-blue-600 bg-blue-50 border-blue-100",
  login:  "text-indigo-600 bg-indigo-50 border-indigo-100",
  agent:  "text-violet-600 bg-violet-50 border-violet-100",
  error:  "text-red-600 bg-red-50 border-red-100",
  system: "text-slate-500 bg-slate-100 border-slate-200",
};
const statusColor: Record<string, string> = {
  Success: "bg-emerald-50 text-emerald-700 border-emerald-100",
  Warning: "bg-amber-50 text-amber-700 border-amber-100",
  Error:   "bg-red-50 text-red-700 border-red-100",
  Info:    "bg-blue-50 text-blue-600 border-blue-100",
};

export default function AdminLogsPage() {
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");

  const filtered = mockLogs.filter((l) => {
    const matchQ = l.user.toLowerCase().includes(search.toLowerCase()) || l.agent.toLowerCase().includes(search.toLowerCase()) || l.summary.toLowerCase().includes(search.toLowerCase());
    const matchT = typeFilter === "all" || l.type === typeFilter;
    return matchQ && matchT;
  });

  return (
    <div className="min-h-full bg-[#fafafa] p-6 lg:p-10 space-y-8">

      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <div className="inline-flex items-center text-red-600 font-bold text-[11px] tracking-[0.2em] uppercase mb-4 bg-red-50 px-4 py-2 rounded-full border border-red-100">Admin · Logs</div>
        <h1 className="font-heading text-3xl font-extrabold text-slate-900 tracking-tight">Platform Logs</h1>
        <p className="text-slate-500 mt-2 font-medium">Chat, login, agent, error, and system activity logs.</p>
      </motion.div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3 flex-wrap items-start">
        <div className="relative w-full sm:w-72">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <Input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search user, agent, summary…" className="pl-11 h-11 rounded-xl bg-white border-slate-200/60 shadow-sm font-medium" />
        </div>
        <div className="flex gap-2 flex-wrap">
          {["all","chat","login","agent","error","system"].map((t) => (
            <button key={t} onClick={() => setTypeFilter(t)}
              className={`px-4 py-2 rounded-xl text-sm font-bold border capitalize transition-all ${typeFilter === t ? "bg-slate-900 text-white border-transparent shadow-md" : "bg-white border-slate-200/60 text-slate-600 shadow-sm hover:bg-slate-50"}`}
            >{t === "all" ? "All Types" : t}</button>
          ))}
        </div>
      </div>

      {/* Log Table */}
      <div className="bg-white rounded-[1.5rem] border border-slate-200/60 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                <th className="px-6 py-4">Event Type</th>
                <th className="px-6 py-4">User</th>
                <th className="px-6 py-4">Agent</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Summary</th>
                <th className="px-6 py-4 whitespace-nowrap">Timestamp</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filtered.map((log, i) => {
                const Icon = typeIcon[log.type];
                return (
                  <motion.tr key={log.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.04 }} className="hover:bg-slate-50/40">
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md border capitalize ${typeColor[log.type]}`}>
                        <Icon className="w-3 h-3" /> {log.type}
                      </span>
                    </td>
                    <td className="px-6 py-4"><span className="text-sm font-medium text-slate-700">{log.user}</span></td>
                    <td className="px-6 py-4"><span className="text-sm font-medium text-slate-700">{log.agent}</span></td>
                    <td className="px-6 py-4"><span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md border ${statusColor[log.status]}`}>{log.status}</span></td>
                    <td className="px-6 py-4"><p className="text-sm font-medium text-slate-700 max-w-xs">{log.summary}</p></td>
                    <td className="px-6 py-4"><span className="text-[12px] font-mono font-bold text-slate-500">{log.timestamp}</span></td>
                  </motion.tr>
                );
              })}
            </tbody>
          </table>
        </div>
        {filtered.length === 0 && (
          <div className="py-20 flex flex-col items-center"><Filter className="w-10 h-10 text-slate-300 mb-3" /><p className="font-bold text-slate-700">No logs match filters</p><Button variant="ghost" className="mt-3 font-bold text-red-600 hover:bg-red-50 rounded-xl" onClick={() => { setSearch(""); setTypeFilter("all"); }}>Clear filters</Button></div>
        )}
        <div className="p-4 border-t border-slate-100 bg-slate-50/40 flex items-center justify-between text-sm font-medium text-slate-500">
          <span>Showing {filtered.length} of {mockLogs.length} entries</span>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="rounded-xl font-bold border-slate-200" disabled>Previous</Button>
            <Button variant="outline" size="sm" className="rounded-xl font-bold border-slate-200">Next</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
