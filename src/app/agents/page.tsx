"use client";

import { useState, useMemo } from "react";

import { motion } from "framer-motion";
import { Search, Bot, Verified, Filter, Zap, ArrowRight, CornerDownRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import DashboardLayout from "@/components/DashboardLayout";

const marketplaceAgents = [
  { id: 1, name: "Data Analyst Pro", desc: "Connects to your warehouse and answers SQL queries in plain English.", category: "Analytics", creator: "AgentLab", uses: "12.4k", verified: true },
  { id: 2, name: "UX Copywriter", desc: "Generates microcopy, error messages, and UI text.", category: "Design", creator: "Community", uses: "8.2k", verified: false },
  { id: 3, name: "DevOps Helper", desc: "Helps you debug CI/CD pipelines and dockerfiles.", category: "Engineering", creator: "Acme Corp", uses: "94k", verified: true },
  { id: 4, name: "Legal Reviewer", desc: "Scan contracts for common clauses and risks.", category: "Legal", creator: "AgentLab", uses: "3.1k", verified: true },
  { id: 5, name: "Sales Outreach Generator", desc: "Crafts personalized cold emails based on LinkedIn profiles.", category: "Sales", creator: "Growth Hacks", uses: "45k", verified: false },
  { id: 6, name: "Onboarding Buddy", desc: "Answers questions for new hires about company policies.", category: "HR", creator: "Internal", uses: "1.2k", verified: true },
];

const categories = ["All", "Sales", "Engineering", "Design", "HR", "Legal", "Marketing"];

export default function ExploreAgentsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredAgents = useMemo(() => {
    return marketplaceAgents.filter((agent) => {
      const matchesSearch = agent.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            agent.desc.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === "All" || agent.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  return (
    <DashboardLayout>
      <div className="p-6 lg:p-10 space-y-8 max-w-[1400px] mx-auto min-h-full">
        
        {/* Header & Search */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Explore Agents</h1>
            <p className="text-slate-500 mt-2 font-medium text-lg">Discover autonomous workflows built by experts.</p>
          </motion.div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <div className="relative w-full sm:w-72">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search workflows..." 
                className="pl-11 h-12 bg-white border-slate-200/60 rounded-xl shadow-sm focus-visible:ring-blue-500 font-medium" 
              />
            </div>
            <Button variant="outline" className="h-12 rounded-xl border-slate-200/60 shadow-sm font-bold text-slate-700 px-6 shrink-0">
               <Filter className="w-4 h-4 mr-2" /> Filters
            </Button>
          </div>
        </div>

        {/* Categories Tab */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
           {categories.map((cat, i) => (
              <button 
                key={cat} 
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap px-4 py-2 rounded-lg text-sm font-bold transition-all ${activeCategory === cat ? "bg-slate-900 text-white shadow-md" : "bg-white border border-slate-200/60 text-slate-600 shadow-sm hover:bg-slate-50"}`}
              >
                 {cat}
              </button>
           ))}
        </div>

        {/* Agents Grid */}
        {filteredAgents.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3 pt-2">
            {filteredAgents.map((a, i) => (
              <motion.div
                key={a.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="bg-white rounded-[1.5rem] p-6 lg:p-8 shadow-sm border border-slate-200/60 hover:shadow-xl hover:shadow-blue-900/5 transition-all group flex flex-col"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="bg-gradient-to-tr from-slate-100 to-slate-50 border border-slate-200 rounded-xl p-3 shadow-sm group-hover:scale-105 transition-transform">
                    <Bot className="h-6 w-6 text-slate-700" />
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 bg-slate-100 rounded-md px-2 py-1">
                      {a.category}
                    </span>
                  </div>
                </div>
                
                <h3 className="font-heading text-xl font-extrabold text-slate-900 flex items-center gap-2">
                  {a.name}
                  {a.verified && <Verified className="w-4 h-4 text-blue-500 fill-blue-50" />}
                </h3>
                
                <p className="text-[15px] leading-relaxed text-slate-500 mt-3 font-medium line-clamp-2 flex-1">{a.desc}</p>
                
                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mb-0.5">Creator</span>
                    <div className="flex items-center gap-1.5">
                      <span className="text-sm font-bold text-slate-700">{a.creator}</span>
                      {a.creator === "AgentLab" && <Zap className="w-3 h-3 text-amber-500 fill-amber-100" />}
                    </div>
                  </div>
                  <Link href="/chat">
                    <Button className="rounded-xl bg-slate-900 hover:bg-blue-600 transition-colors font-bold text-white shadow-md">
                      Start Chat <CornerDownRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="pt-12 pb-20 flex flex-col items-center justify-center text-center">
            <div className="bg-slate-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <Search className="w-8 h-8 text-slate-400" />
            </div>
            <h3 className="font-heading text-xl font-bold text-slate-900">No agents found</h3>
            <p className="text-slate-500 font-medium mt-1">Try adjusting your filters or search terms.</p>
            <Button variant="outline" className="mt-6 rounded-xl font-bold shadow-sm" onClick={() => { setSearchQuery(""); setActiveCategory("All"); }}>
              Clear Filters
            </Button>
          </div>
        )}

      </div>
    </DashboardLayout>
  );
}
