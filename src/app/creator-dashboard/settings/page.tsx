"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { User, Key, CreditCard, Bell, Save, Upload, AlertCircle, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function CreatorSettingsPage() {
  const [activeTab, setActiveTab] = useState("profile");
  const tabs = [
    { id: "profile", label: "Profile", icon: User },
    { id: "api", label: "API Keys", icon: Key },
    { id: "billing", label: "Billing", icon: CreditCard },
    { id: "notifications", label: "Notifications", icon: Bell },
  ];

  return (
    <div className="p-6 lg:p-10 space-y-8 max-w-[1000px] mx-auto min-h-full">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Settings</h1>
        <p className="text-slate-500 mt-2 font-medium text-lg">Manage your creator account and API configuration.</p>
      </motion.div>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-56 shrink-0">
          <nav className="flex md:flex-col gap-1">
            {tabs.map((tab) => (
              <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all whitespace-nowrap ${activeTab === tab.id ? "bg-white shadow-sm border border-slate-200/60 text-violet-600" : "text-slate-500 hover:bg-white/50 hover:text-slate-900"}`}
              ><tab.icon className="w-4 h-4" /> {tab.label}</button>
            ))}
          </nav>
        </div>

        <div className="flex-1 space-y-6">
          {activeTab === "profile" && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-[1.5rem] border border-slate-200/60 shadow-sm p-6 md:p-8">
              <h2 className="font-heading text-xl font-extrabold text-slate-900 mb-6">Creator Profile</h2>
              <div className="flex items-center gap-6 mb-8">
                <div className="h-20 w-20 rounded-2xl bg-violet-100 flex items-center justify-center border border-violet-200 shrink-0"><User className="h-8 w-8 text-violet-600" /></div>
                <div><Button variant="outline" className="rounded-xl font-bold border-slate-200 shadow-sm h-10 mb-2"><Upload className="w-4 h-4 mr-2" /> Upload Avatar</Button><p className="text-xs font-medium text-slate-500">JPG, GIF or PNG. 1MB max.</p></div>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 mb-6">
                <div className="space-y-2"><label className="text-sm font-bold text-slate-700">First Name</label><Input defaultValue="Alex" className="h-11 rounded-xl bg-slate-50 border-slate-200 font-semibold" /></div>
                <div className="space-y-2"><label className="text-sm font-bold text-slate-700">Last Name</label><Input defaultValue="Creator" className="h-11 rounded-xl bg-slate-50 border-slate-200 font-semibold" /></div>
                <div className="space-y-2 sm:col-span-2"><label className="text-sm font-bold text-slate-700">Email Address</label><Input defaultValue="alex@example.com" disabled className="h-11 rounded-xl bg-slate-100 border-slate-200 font-semibold text-slate-500 cursor-not-allowed" /></div>
              </div>
              <div className="pt-4 border-t border-slate-100 flex justify-end"><Button className="bg-violet-600 hover:bg-violet-700 text-white font-bold rounded-xl shadow-md px-6"><Save className="w-4 h-4 mr-2" /> Save Changes</Button></div>
            </motion.div>
          )}

          {activeTab === "api" && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-5">
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex gap-3 text-amber-800 text-sm"><AlertCircle className="w-5 h-5 shrink-0 mt-0.5" /><div><p className="font-bold">Provide your own API keys</p><p className="font-medium mt-1 opacity-90">Keys are encrypted client-side before storage. AgentLab does not store plaintext keys.</p></div></div>
              <div className="bg-white rounded-[1.5rem] border border-slate-200/60 shadow-sm p-6 md:p-8 space-y-6">
                <h2 className="font-heading text-xl font-extrabold text-slate-900">Provider Keys</h2>
                <div className="space-y-2"><label className="text-sm font-bold text-slate-700 flex items-center justify-between">OpenAI API Key<span className="text-[10px] uppercase tracking-widest text-emerald-500 font-bold bg-emerald-50 px-2 py-0.5 rounded">Connected</span></label><Input type="password" defaultValue="sk-..........................." className="h-11 rounded-xl bg-slate-50 border-slate-200 font-mono text-sm" /></div>
                <div className="space-y-2"><label className="text-sm font-bold text-slate-700">Anthropic API Key</label><Input type="password" placeholder="sk-ant-..." className="h-11 rounded-xl bg-slate-50 border-slate-200 font-mono text-sm placeholder:text-slate-400" /></div>
                <div className="pt-4 border-t border-slate-100 flex justify-end"><Button className="bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl shadow-md px-6">Update Keys</Button></div>
              </div>
            </motion.div>
          )}

          {(activeTab === "billing" || activeTab === "notifications") && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white rounded-[1.5rem] border border-slate-200/60 shadow-sm p-12 text-center h-64 flex flex-col items-center justify-center">
              <Shield className="w-10 h-10 text-slate-300 mb-4" />
              <h2 className="font-heading text-xl font-extrabold text-slate-900 mb-2">Coming Soon</h2>
              <p className="text-slate-500 font-medium text-sm">This section is under development.</p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
