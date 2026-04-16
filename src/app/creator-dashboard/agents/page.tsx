"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, Plus, Search, Settings2, Database, ArrowUpRight, Trash2, PenLine, X, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

type Agent = { id: number; name: string; category: string; status: "Published" | "Draft"; kbCount: number; lastUpdated: string; queries: string };

const initialAgents: Agent[] = [
  { id: 1, name: "Customer Support Router", category: "Support", status: "Published", kbCount: 12, lastUpdated: "Today", queries: "14.2k" },
  { id: 2, name: "Internal Onboarding Bot", category: "HR", status: "Draft", kbCount: 5, lastUpdated: "Yesterday", queries: "-" },
  { id: 3, name: "Sales Outreach Generator", category: "Sales", status: "Published", kbCount: 24, lastUpdated: "Oct 12", queries: "3.4k" },
  { id: 4, name: "Legal Document Analyzer", category: "Legal", status: "Published", kbCount: 8, lastUpdated: "Oct 10", queries: "892" },
];

export default function CreatorAgentsPage() {
  const [agents, setAgents] = useState<Agent[]>(initialAgents);
  const [search, setSearch] = useState("");
  const [pendingDelete, setPendingDelete] = useState<Agent | null>(null);
  const filtered = agents.filter((a) => a.name.toLowerCase().includes(search.toLowerCase()) || a.category.toLowerCase().includes(search.toLowerCase()));

  const confirmDelete = () => {
    if (!pendingDelete) return;
    setAgents((prev) => prev.filter((a) => a.id !== pendingDelete.id));
    setPendingDelete(null);
  };

  return (
    <div className="p-6 lg:p-10 space-y-8 max-w-[1400px] mx-auto min-h-full">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">My Agents</h1>
          <p className="text-slate-500 mt-2 font-medium text-lg">{agents.length} agents — {agents.filter(a => a.status === "Published").length} published</p>
        </motion.div>
        <div className="flex gap-3 w-full md:w-auto">
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <Input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search agents..." className="pl-11 h-12 bg-white border-slate-200/60 rounded-xl shadow-sm font-medium" />
          </div>
          <Link href="/creator-dashboard/studio" className="shrink-0">
            <Button className="h-12 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-bold px-6 shadow-md"><Plus className="w-5 h-5 mr-2" /> Create Agent</Button>
          </Link>
        </div>
      </div>

      <div className="bg-white rounded-[2rem] border border-slate-200/60 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/80 border-b border-slate-100 text-xs font-bold text-slate-400 uppercase tracking-widest">
                <th className="px-6 py-4">Agent</th><th className="px-6 py-4">Status</th><th className="px-6 py-4">Knowledge Base</th><th className="px-6 py-4">Queries (30d)</th><th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <AnimatePresence>
                {filtered.length > 0 ? filtered.map((a) => (
                  <motion.tr key={a.id} layout initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, x: -20 }} className="hover:bg-slate-50/40 transition-colors group">
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-violet-50 border border-violet-100 flex items-center justify-center"><Bot className="w-5 h-5 text-violet-600" /></div>
                        <div>
                          <p className="font-extrabold text-slate-900 text-[15px]">{a.name}</p>
                          <div className="flex items-center gap-2 mt-0.5"><span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{a.category}</span><span className="text-slate-300">&bull;</span><span className="text-xs font-medium text-slate-500">Updated {a.lastUpdated}</span></div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-5"><span className={`inline-flex px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest border ${a.status === "Published" ? "bg-emerald-50 text-emerald-600 border-emerald-200/50" : "bg-amber-50 text-amber-600 border-amber-200/50"}`}>{a.status}</span></td>
                    <td className="px-6 py-5"><div className="flex items-center gap-2"><Database className="w-4 h-4 text-slate-400" /><span className="font-semibold text-sm text-slate-700">{a.kbCount} Docs</span></div></td>
                    <td className="px-6 py-5"><span className="font-bold text-sm text-slate-900">{a.queries}</span></td>
                    <td className="px-6 py-5 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Link href="/creator-dashboard/studio"><Button variant="outline" size="sm" className="h-9 rounded-lg border-slate-200 text-slate-600 font-bold shadow-sm hover:bg-slate-50 hidden sm:flex"><PenLine className="w-4 h-4 mr-2" /> Edit</Button></Link>
                        <Link href="/creator-dashboard/chat"><Button variant="outline" size="sm" className="h-9 px-3 rounded-lg border-slate-200 text-violet-600 font-bold shadow-sm hover:bg-violet-50 hidden sm:flex"><ArrowUpRight className="w-4 h-4 mr-1" /> Test</Button></Link>
                        <Button variant="ghost" size="icon" onClick={() => setPendingDelete(a)} className="h-9 w-9 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg"><Trash2 className="w-4 h-4" /></Button>
                      </div>
                    </td>
                  </motion.tr>
                )) : (
                  <tr><td colSpan={5} className="py-16 text-center"><div className="flex flex-col items-center gap-3"><div className="w-14 h-14 rounded-full bg-slate-100 flex items-center justify-center"><Search className="w-6 h-6 text-slate-400" /></div><p className="font-bold text-slate-700">No agents match your search</p><button onClick={() => setSearch("")} className="text-sm font-bold text-violet-600 hover:underline">Clear search</button></div></td></tr>
                )}
              </AnimatePresence>
            </tbody>
          </table>
        </div>
      </div>

      <AnimatePresence>
        {pendingDelete && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div initial={{ scale: 0.95 }} animate={{ scale: 1 }} exit={{ scale: 0.95 }} className="bg-white rounded-[2rem] p-8 shadow-2xl max-w-md w-full border border-slate-200/60">
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center"><AlertTriangle className="w-6 h-6 text-red-500" /></div>
                <button onClick={() => setPendingDelete(null)} className="p-2 rounded-xl hover:bg-slate-100"><X className="w-5 h-5 text-slate-500" /></button>
              </div>
              <h2 className="font-heading text-xl font-extrabold text-slate-900 mb-2">Delete Agent?</h2>
              <p className="text-slate-500 font-medium text-sm leading-relaxed mb-8">Permanently delete <span className="font-bold text-slate-800">&ldquo;{pendingDelete.name}&rdquo;</span>. This cannot be undone.</p>
              <div className="flex gap-3">
                <Button variant="outline" onClick={() => setPendingDelete(null)} className="flex-1 rounded-xl border-slate-200 font-bold h-11">Cancel</Button>
                <Button onClick={confirmDelete} className="flex-1 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold h-11"><Trash2 className="w-4 h-4 mr-2" /> Delete</Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
