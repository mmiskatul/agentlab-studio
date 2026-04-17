"use client";

import { motion } from "framer-motion";
import { BarChart as RechartsBarChart, Bar, XAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { BarChart2, Bot, CheckCircle2, MessageSquare, TrendingUp, Users, Zap } from "lucide-react";

const chartData = [
  { name: "Mon", chats: 420 },
  { name: "Tue", chats: 380 },
  { name: "Wed", chats: 510 },
  { name: "Thu", chats: 490 },
  { name: "Fri", chats: 560 },
  { name: "Sat", chats: 480 },
  { name: "Sun", chats: 342 },
];

const topAgents = [
  { name: "DevOps Helper", creator: "Grace Kim", chats: 94000, pct: 100 },
  { name: "Sales Outreach Bot", creator: "Elena Marks", chats: 45000, pct: 48 },
  { name: "Data Analyst Pro", creator: "Grace Kim", chats: 14200, pct: 15 },
  { name: "UX Copywriter", creator: "Bob Smith", chats: 8200, pct: 9 },
  { name: "Legal Reviewer", creator: "Bob Smith", chats: 3100, pct: 3 },
];

const pieColors = ["#10b981", "#eab308", "#ef4444"];
const feedbackData = [
  { name: "Positive", value: 91 },
  { name: "Neutral", value: 6 },
  { name: "Negative", value: 3 },
];


export default function UsageMonitorPage() {
  return (
    <div className="min-h-full bg-[radial-gradient(circle_at_top,_rgba(251,113,133,0.08),_transparent_24%),linear-gradient(180deg,#fff8f8_0%,#fffdfd_100%)]">
      <div className="mx-auto flex w-full max-w-[1600px] flex-col gap-8 px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        {/* ── Page Title ── */}
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="font-heading text-[28px] font-bold text-slate-900 tracking-tight">Track platform usage</h1>
          <p className="text-slate-500 font-medium mt-1">Watch demand, creator participation, and sentiment trends.</p>
        </motion.div>

        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {[
            { label: "Total chats (30d)", value: "168,421", icon: MessageSquare, tone: "bg-blue-50 text-blue-600 border-blue-100" },
            { label: "Active users", value: "842", icon: Users, tone: "bg-emerald-50 text-emerald-600 border-emerald-100" },
            { label: "Active creators", value: "58", icon: Zap, tone: "bg-cyan-50 text-cyan-600 border-cyan-100" },
            { label: "Avg positive rating", value: "91%", icon: TrendingUp, tone: "bg-amber-50 text-amber-600 border-amber-100" },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.04 * index }}
              className="bg-white rounded-xl p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.03)]"
            >
              <div className="flex justify-between items-start mb-4">
                <p className="text-[13px] font-medium text-slate-500">{item.label}</p>
                <div className="p-2.5 rounded-xl bg-slate-50">
                  <item.icon className={item.tone.split(' ')[1]} />
                </div>
              </div>
              <p className="font-heading text-[32px] font-bold text-slate-900 leading-none mb-4">{item.value}</p>
            </motion.div>
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <motion.article
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.3 }}
            className="rounded-xl border border-blue-100 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.05)]"
          >
            <div className="border-b border-slate-100 pb-5">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-blue-500">Volume</p>
              <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-950">Messages this week</h2>
            </div>

            <div className="mt-8 h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <RechartsBarChart data={chartData} margin={{ top: 10, right: 10, left: 10, bottom: 20 }}>
                  <XAxis 
                    dataKey="name" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fontSize: 11, fontWeight: 600, fill: "#64748b" }} 
                    dy={16} 
                  />
                  <Tooltip 
                    cursor={{ fill: "#f1f5f9" }} 
                    contentStyle={{ borderRadius: "8px", border: "1px solid #e2e8f0", boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.05)", padding: "8px 12px" }}
                    itemStyle={{ fontWeight: "600", color: "#0f172a", fontSize: "14px" }}
                    labelStyle={{ fontWeight: "500", color: "#64748b", marginBottom: "2px" }}
                  />
                  <Bar 
                    dataKey="chats" 
                    fill="#3b82f6" 
                    radius={[4, 4, 0, 0]} 
                    barSize={36} 
                  />
                </RechartsBarChart>
              </ResponsiveContainer>
            </div>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.3 }}
            className="rounded-xl border border-blue-100 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.05)]"
          >
            <div className="border-b border-slate-100 pb-5">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-blue-500">Sentiment</p>
              <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-950">Feedback breakdown</h2>
            </div>

            <div className="mt-6 h-56 w-full relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={feedbackData}
                    cx="50%"
                    cy="50%"
                    innerRadius={70}
                    outerRadius={90}
                    paddingAngle={2}
                    dataKey="value"
                    stroke="none"
                  >
                    {feedbackData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ borderRadius: "8px", border: "1px solid #e2e8f0", boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.05)", padding: "6px 10px" }}
                    itemStyle={{ fontWeight: "600", color: "#0f172a", fontSize: "14px" }}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none mt-1">
                <span className="text-3xl font-bold text-slate-900 leading-none">91%</span>
                <span className="text-[11px] font-medium text-slate-500 mt-1">Positive</span>
              </div>
            </div>

            <div className="mt-6 flex justify-center gap-6 pb-2">
              {[
                { name: "Positive", color: "bg-emerald-500" },
                { name: "Neutral", color: "bg-yellow-500" },
                { name: "Negative", color: "bg-red-500" }
              ].map((item) => (
                <div key={item.name} className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-sm ${item.color}`} />
                  <span className="text-[12px] font-medium text-slate-600">{item.name}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-3 rounded-lg border border-emerald-100 bg-emerald-50 p-4">
              <CheckCircle2 className="h-5 w-5 text-emerald-600" />
              <p className="text-sm font-semibold text-emerald-700">
                Platform sentiment is above target and trending in the right direction.
              </p>
            </div>
          </motion.article>
        </section>

        <motion.section
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.16, duration: 0.3 }}
          className="rounded-xl border border-blue-100 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.05)]"
        >
          <div className="flex flex-col gap-3 border-b border-slate-100 pb-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-blue-500">Top performers</p>
              <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-950">Most used agents</h2>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1.5 text-sm font-semibold text-slate-500">
              <BarChart2 className="h-4 w-4" />
              Lifetime chats
            </div>
          </div>

          <div className="mt-6 border border-slate-200 rounded-xl overflow-hidden flex flex-col divide-y divide-slate-100">
            {topAgents.map((agent) => (
              <div key={agent.name} className="flex items-center gap-4 px-5 py-4 bg-white hover:bg-slate-50 transition-colors">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                  <Bot className="h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1 grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-6 items-center">
                  <div>
                    <p className="truncate text-sm font-bold text-slate-900">{agent.name}</p>
                    <p className="text-[12px] font-medium text-slate-500 mt-0.5">by {agent.creator}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="h-2 flex-1 overflow-hidden rounded-sm bg-slate-100">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${agent.pct}%` }}
                        transition={{ duration: 0.8 }}
                        className="h-full rounded-sm bg-blue-500"
                      />
                    </div>
                    <span className="text-[13px] font-semibold text-slate-700 w-16 text-right">
                      {agent.chats.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
