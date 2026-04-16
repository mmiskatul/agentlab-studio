"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { User, Bell, Shield, Key, CreditCard, Save, Upload, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import DashboardLayout from "@/components/DashboardLayout";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <DashboardLayout>
      <div className="p-6 lg:p-10 space-y-8 max-w-[1000px] mx-auto min-h-full">
        
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Settings</h1>
          <p className="text-slate-500 mt-2 font-medium text-lg">Manage your account preferences and API keys.</p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Settings Sidebar */}
          <div className="w-full md:w-64 shrink-0">
            <nav className="flex md:flex-col gap-1 overflow-x-auto pb-4 md:pb-0 scrollbar-hide">
              <button 
                onClick={() => setActiveTab("profile")}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all whitespace-nowrap ${activeTab === "profile" ? "bg-white shadow-sm border border-slate-200/60 text-blue-600" : "text-slate-500 hover:bg-white/50 hover:text-slate-900"}`}
              >
                <User className="w-4 h-4" /> Personal Profile
              </button>
              <button 
                onClick={() => setActiveTab("api")}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all whitespace-nowrap ${activeTab === "api" ? "bg-white shadow-sm border border-slate-200/60 text-blue-600" : "text-slate-500 hover:bg-white/50 hover:text-slate-900"}`}
              >
                <Key className="w-4 h-4" /> API Keys & LLMs
              </button>
              <button 
                onClick={() => setActiveTab("billing")}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all whitespace-nowrap ${activeTab === "billing" ? "bg-white shadow-sm border border-slate-200/60 text-blue-600" : "text-slate-500 hover:bg-white/50 hover:text-slate-900"}`}
              >
                <CreditCard className="w-4 h-4" /> Billing & Plan
              </button>
              <button 
                onClick={() => setActiveTab("notifications")}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all whitespace-nowrap ${activeTab === "notifications" ? "bg-white shadow-sm border border-slate-200/60 text-blue-600" : "text-slate-500 hover:bg-white/50 hover:text-slate-900"}`}
              >
                <Bell className="w-4 h-4" /> Notifications
              </button>
            </nav>
          </div>

          {/* Settings Content */}
          <div className="flex-1">
            {activeTab === "profile" && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                 
                 <div className="bg-white rounded-[1.5rem] border border-slate-200/60 shadow-sm p-6 md:p-8">
                    <h2 className="font-heading text-xl font-extrabold text-slate-900 mb-6">Profile Details</h2>
                    
                    <div className="flex items-center gap-6 mb-8">
                       <div className="h-20 w-20 rounded-2xl bg-indigo-100 flex items-center justify-center border border-indigo-200 shrink-0">
                          <User className="h-8 w-8 text-indigo-600" />
                       </div>
                       <div>
                          <Button variant="outline" className="rounded-xl font-bold border-slate-200 shadow-sm h-10 mb-2">
                             <Upload className="w-4 h-4 mr-2" /> Upload Avatar
                          </Button>
                          <p className="text-xs font-medium text-slate-500">JPG, GIF or PNG. 1MB max.</p>
                       </div>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2 mb-6">
                       <div className="space-y-2">
                          <label className="text-sm font-bold text-slate-700">First Name</label>
                          <Input defaultValue="Alex" className="h-11 rounded-xl bg-slate-50 border-slate-200 font-semibold" />
                       </div>
                       <div className="space-y-2">
                          <label className="text-sm font-bold text-slate-700">Last Name</label>
                          <Input defaultValue="Developer" className="h-11 rounded-xl bg-slate-50 border-slate-200 font-semibold" />
                       </div>
                       <div className="space-y-2 sm:col-span-2">
                          <label className="text-sm font-bold text-slate-700">Email Address</label>
                          <Input defaultValue="alex@example.com" type="email" disabled className="h-11 rounded-xl bg-slate-100 border-slate-200 font-semibold text-slate-500 cursor-not-allowed" />
                          <p className="text-xs font-medium text-slate-500">Contact support to change your email address.</p>
                       </div>
                    </div>
                    
                    <div className="pt-4 border-t border-slate-100 flex justify-end">
                       <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-md px-6">
                          <Save className="w-4 h-4 mr-2" /> Save Changes
                       </Button>
                    </div>
                 </div>

                 <div className="bg-white rounded-[1.5rem] border border-red-200/60 shadow-sm p-6 md:p-8">
                    <h2 className="font-heading text-xl font-extrabold text-red-600 mb-2">Danger Zone</h2>
                    <p className="text-sm font-medium text-slate-500 mb-6">Permanently delete your account and all associated agents and chat history.</p>
                    <Button variant="outline" className="border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700 font-bold rounded-xl shadow-sm">
                       Delete Account
                    </Button>
                 </div>

              </motion.div>
            )}

            {activeTab === "api" && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                 
                 <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex gap-3 text-amber-800 text-sm">
                    <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold">Provide your own API keys</p>
                      <p className="font-medium mt-1 opacity-90">To use specific foundation models in the Creator Studio, you must provide your own API keys. AgentLab does not store these on our servers in plaintext.</p>
                    </div>
                 </div>

                 <div className="bg-white rounded-[1.5rem] border border-slate-200/60 shadow-sm p-6 md:p-8">
                    <h2 className="font-heading text-xl font-extrabold text-slate-900 mb-6">Provider Keys</h2>
                    
                    <div className="space-y-6">
                       <div className="space-y-2">
                          <label className="text-sm font-bold text-slate-700 flex items-center justify-between">
                            OpenAI API Key
                            <span className="text-[10px] uppercase tracking-widest text-emerald-500 font-bold bg-emerald-50 px-2 py-0.5 rounded">Connected</span>
                          </label>
                          <Input type="password" defaultValue="sk-..........................." className="h-11 rounded-xl bg-slate-50 border-slate-200 font-mono text-sm" />
                       </div>
                       
                       <div className="space-y-2">
                          <label className="text-sm font-bold text-slate-700">Anthropic API Key</label>
                          <Input type="password" placeholder="sk-ant-..." className="h-11 rounded-xl bg-slate-50 border-slate-200 font-mono text-sm placeholder:text-slate-400" />
                       </div>
                    </div>
                    
                    <div className="pt-6 mt-6 border-t border-slate-100 flex justify-end">
                       <Button className="bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl shadow-md px-6">
                          Update Keys
                       </Button>
                    </div>
                 </div>

              </motion.div>
            )}

            {(activeTab === "billing" || activeTab === "notifications") && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white rounded-[1.5rem] border border-slate-200/60 shadow-sm p-12 text-center h-64 flex flex-col items-center justify-center">
                 <Shield className="w-10 h-10 text-slate-300 mb-4" />
                 <h2 className="font-heading text-xl font-extrabold text-slate-900 mb-2">Coming Soon</h2>
                 <p className="text-slate-500 font-medium text-sm">This section is currently under development.</p>
              </motion.div>
            )}

          </div>
        </div>

      </div>
    </DashboardLayout>
  );
}