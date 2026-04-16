"use client";

import { motion } from "framer-motion";
import { MessageSquare, Calendar, Search, ArrowRight, Trash2, Clock, Filter, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import DashboardLayout from "@/components/DashboardLayout";

const chatHistory = [
  { id: 1, title: "Q3 Revenue Analysis", agent: "Data Analyst Pro", preview: "The Q3 revenue grew by 14% compared to...", date: "Today, 10:42 AM", duration: "12m", msgs: 24 },
  { id: 2, title: "Login Page Copywriting", agent: "UX Copywriter", preview: "Here are 3 options for the empty state...", date: "Yesterday, 3:15 PM", duration: "5m", msgs: 8 },
  { id: 3, title: "Docker Compose Debug", agent: "DevOps Helper", preview: "Your docker-compose.yml looks correct but missing...", date: "Oct 12, 2024", duration: "45m", msgs: 56 },
  { id: 4, title: "NDA Clause Review", agent: "Legal Reviewer", preview: "The confidentiality clause in section 4.2...", date: "Oct 10, 2024", duration: "8m", msgs: 12 },
  { id: 5, title: "Welcome Email Sequence", agent: "Sales Outreach", preview: "Hi [Name], welcome to our platform! I noticed...", date: "Oct 08, 2024", duration: "15m", msgs: 16 },
];

export default function HistoryPage() {
  return (
    <DashboardLayout>
      <div className="p-6 lg:p-10 space-y-8 max-w-[1200px] mx-auto min-h-full">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Chat History</h1>
            <p className="text-slate-500 mt-2 font-medium text-lg">Pick up right where you left off.</p>
          </motion.div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <div className="relative w-full sm:w-72">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input placeholder="Search past conversations..." className="pl-11 h-12 bg-white border-slate-200/60 rounded-xl shadow-sm focus-visible:ring-blue-500 font-medium" />
            </div>
            <Button variant="outline" className="h-12 rounded-xl border-slate-200/60 shadow-sm font-bold text-slate-700 px-6 shrink-0">
               <Calendar className="w-4 h-4 mr-2" /> Date Filter
            </Button>
          </div>
        </div>

        {/* History List */}
        <div className="bg-white rounded-[2rem] border border-slate-200/60 shadow-sm overflow-hidden mt-6">
          <div className="divide-y divide-slate-100">
            {chatHistory.map((chat, i) => (
              <motion.div
                key={chat.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="p-5 md:p-6 flex flex-col md:flex-row md:items-center gap-6 hover:bg-slate-50/50 transition-colors group"
              >
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                     <h3 className="font-heading font-extrabold text-lg text-slate-900 truncate group-hover:text-blue-600 transition-colors">{chat.title}</h3>
                     <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md shrink-0">
                       <Bot className="w-3 h-3 text-slate-400" /> {chat.agent}
                     </span>
                  </div>
                  <p className="text-sm font-medium text-slate-500 truncate mb-3">{chat.preview}</p>
                  
                  <div className="flex items-center gap-4 text-xs font-semibold text-slate-400">
                     <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {chat.date}</span>
                     <span>&bull;</span>
                     <span className="flex items-center gap-1.5"><MessageSquare className="w-3.5 h-3.5" /> {chat.msgs} messages</span>
                     <span>&bull;</span>
                     <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {chat.duration}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 mt-4 md:mt-0 shrink-0">
                  <Button variant="ghost" size="icon" className="h-10 w-10 rounded-xl text-slate-400 hover:text-red-600 hover:bg-red-50 transition-colors">
                    <Trash2 className="w-5 h-5" />
                  </Button>
                  <Link href={`/chat`}>
                    <Button variant="outline" className="h-10 rounded-xl border-slate-200/60 shadow-sm font-bold text-slate-700 hover:bg-white hover:border-slate-300">
                       Resume <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>

              </motion.div>
            ))}
          </div>

          <div className="p-4 bg-slate-50/50 border-t border-slate-100 flex justify-center">
             <Button variant="ghost" className="font-bold text-blue-600 hover:bg-blue-50/50 rounded-xl">Load older conversations</Button>
          </div>
        </div>

      </div>
    </DashboardLayout>
  );
}
