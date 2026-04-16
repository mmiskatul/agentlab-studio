"use client";

import { motion } from "framer-motion";
import { Database, UploadCloud, FileText, Search, Trash2, Edit3, Type, CheckCircle2, CloudLightning } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const docs = [
  { id: 1, name: "Product Manual v2.pdf", size: "2.4 MB", type: "PDF", status: "Indexed", date: "Apr 12, 2026" },
  { id: 2, name: "FAQ Database", size: "Raw Text", type: "TXT", status: "Indexed", date: "Apr 10, 2026" },
  { id: 3, name: "Pricing Guide.pdf", size: "1.1 MB", type: "PDF", status: "Processing", date: "Just now" },
  { id: 4, name: "API Reference.md", size: "340 KB", type: "MD", status: "Indexed", date: "Apr 6, 2026" },
];

export default function KnowledgePage() {
  return (
    <div className="p-6 lg:p-10 space-y-10 max-w-[1200px] mx-auto min-h-full">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="font-heading text-3xl font-extrabold text-slate-900">Knowledge Base</h1>
          <p className="text-slate-500 mt-2 font-medium text-base">Feed documents to your agents to expand their memory.</p>
        </div>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-8">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}
          className="lg:col-span-2 bg-white rounded-[2rem] border border-violet-200 border-dashed p-10 md:p-14 text-center shadow-sm hover:border-violet-400 hover:bg-violet-50/30 transition-colors group cursor-pointer h-full flex flex-col items-center justify-center"
        >
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-[1.5rem] bg-gradient-to-tr from-violet-600 to-indigo-500 shadow-md group-hover:scale-105 transition-transform">
            <UploadCloud className="h-8 w-8 text-white" />
          </div>
          <h3 className="font-heading text-xl font-bold text-slate-900 mb-2">Drag and drop files</h3>
          <p className="text-sm font-medium text-slate-500 mb-6 max-w-sm mx-auto">Upload PDF, DOCX, TXT, or JSON up to 50MB per file.</p>
          <Button className="rounded-full bg-violet-600 hover:bg-violet-700 text-white font-bold px-8 shadow-md">Browse Files</Button>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
          className="bg-white rounded-[2rem] border border-slate-200/60 p-8 shadow-sm flex flex-col items-center justify-center text-center group"
        >
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-[1rem] bg-slate-100 group-hover:bg-slate-200 transition-colors"><Type className="h-6 w-6 text-slate-700" /></div>
          <h3 className="font-heading text-lg font-bold text-slate-900 mb-2">Manual Entry</h3>
          <p className="text-sm font-medium text-slate-500 mb-6">Paste raw text directly into the knowledge base.</p>
          <Button variant="outline" className="rounded-xl border-slate-200 shadow-sm font-bold text-slate-700 hover:bg-slate-50 w-full mt-auto">Write Text Note</Button>
        </motion.div>
      </div>

      <div className="bg-white rounded-[2rem] border border-slate-200/60 shadow-sm overflow-hidden">
        <div className="p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 bg-slate-50/50">
          <h2 className="font-heading text-xl font-extrabold text-slate-900">Vectorized Documents</h2>
          <div className="relative w-full md:w-72"><Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" /><Input placeholder="Search memory..." className="pl-10 rounded-xl bg-white border-slate-200 font-medium" /></div>
        </div>
        <div className="divide-y divide-slate-100">
          {docs.map((d, i) => (
            <motion.div key={d.id} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 + i * 0.05 }}
              className="p-4 md:p-6 flex flex-col sm:flex-row sm:items-center gap-4 hover:bg-slate-50 transition-colors group"
            >
              <div className="rounded-xl bg-indigo-50 border border-indigo-100/50 p-3 shrink-0"><FileText className="h-6 w-6 text-indigo-600" /></div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <p className="font-bold text-[15px] text-slate-900 truncate">{d.name}</p>
                  {d.status === "Processing"
                    ? <div className="flex items-center gap-1 text-[10px] uppercase tracking-widest font-bold text-amber-500 bg-amber-50 px-2 py-0.5 rounded-md"><CloudLightning className="w-3 h-3 animate-pulse" /> Processing</div>
                    : <div className="flex items-center gap-1 text-[10px] uppercase tracking-widest font-bold text-emerald-500 bg-emerald-50 px-2 py-0.5 rounded-md"><CheckCircle2 className="w-3 h-3" /> Indexed</div>
                  }
                </div>
                <p className="text-xs font-semibold text-slate-500">{d.size} &bull; {d.type} &bull; Added {d.date}</p>
              </div>
              <div className="flex items-center gap-2 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
                {d.type === "TXT" && <Button variant="outline" size="sm" className="rounded-lg h-9 border-slate-200 text-slate-600 font-bold shadow-sm hidden sm:flex"><Edit3 className="h-4 w-4 mr-2" /> Edit</Button>}
                <Button variant="outline" size="sm" className="rounded-lg h-9 border-slate-200 text-red-500 hover:text-white hover:bg-red-500 shadow-sm font-bold hidden sm:flex"><Trash2 className="h-4 w-4 mr-2" /> Delete</Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
