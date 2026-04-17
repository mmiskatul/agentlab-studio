"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { User, Key, Bell, Save, Upload, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function AdminSettingsPage() {
  const [tab, setTab] = useState<"profile" | "security" | "notifications">("profile");
  const [saved, setSaved] = useState(false);
  const save = () => { setSaved(true); setTimeout(() => setSaved(false), 2000); };

  return (
    <div className="min-h-full">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        {/* ── Page Title ── */}
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="font-heading text-[28px] font-bold text-slate-900 tracking-tight">Admin Settings</h1>
          <p className="text-slate-500 font-medium mt-1">Manage your admin account profile and security configurations.</p>
        </motion.div>

        {/* ── Horizontal Navigation ── */}
        <nav className="flex items-center gap-2 border-b border-slate-200 pb-1 overflow-x-auto hide-scrollbar">
          {[["profile","Profile",User],["security","Security",Key],["notifications","Notifications",Bell]].map(([id, label, Icon]) => (
            <button key={id as string} onClick={() => setTab(id as typeof tab)}
              className={`flex items-center gap-2.5 px-4 py-2.5 rounded-t-lg text-[13px] font-bold transition-all whitespace-nowrap border-b-2 ${tab === id ? "border-blue-600 text-blue-600 bg-blue-50/50" : "border-transparent text-slate-500 hover:bg-slate-50 hover:text-slate-900"}`}
            >
              <Icon className="w-4 h-4" />{label as string}
            </button>
          ))}
        </nav>

        {/* ── Content ── */}
        <div className="max-w-3xl">
          {tab === "profile" && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-xl border border-slate-200 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.03)] p-6 md:p-8">
              <h2 className="font-heading text-xl font-extrabold text-slate-900 mb-6">Admin Profile</h2>
              <div className="flex items-center gap-6 mb-8">
                <div className="h-20 w-20 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0"><User className="h-8 w-8 text-blue-600" /></div>
                <div>
                  <Button variant="outline" className="rounded-xl font-bold border-slate-200 shadow-sm h-10 mb-2"><Upload className="w-4 h-4 mr-2" /> Upload Avatar</Button>
                  <p className="text-xs font-medium text-slate-500">JPG, GIF or PNG. 1MB max.</p>
                </div>
              </div>
              <div className="grid gap-5 sm:grid-cols-2 mb-6">
                <div className="space-y-2"><label className="text-[13px] font-bold text-slate-700">First Name</label><Input defaultValue="Super" className="h-11 rounded-lg bg-white border-slate-200 font-semibold" /></div>
                <div className="space-y-2"><label className="text-[13px] font-bold text-slate-700">Last Name</label><Input defaultValue="Admin" className="h-11 rounded-lg bg-white border-slate-200 font-semibold" /></div>
                <div className="space-y-2 sm:col-span-2"><label className="text-[13px] font-bold text-slate-700">Email Address</label><Input defaultValue="admin@agentlab.ai" disabled className="h-11 rounded-lg bg-slate-50 border-slate-200 font-semibold text-slate-500 cursor-not-allowed" /></div>
                <div className="space-y-2 sm:col-span-2"><label className="text-[13px] font-bold text-slate-700">Role</label><Input defaultValue="Platform Administrator · Full Access" disabled className="h-11 rounded-lg bg-blue-50 border-blue-100 font-semibold text-blue-700 cursor-not-allowed" /></div>
              </div>
              <div className="pt-5 border-t border-slate-100 flex justify-end">
                <Button onClick={save} className={`font-bold rounded-lg px-6 shadow-sm text-white transition-colors ${saved ? "bg-emerald-600" : "bg-blue-600 hover:bg-blue-700"}`}>
                  <Save className="w-4 h-4 mr-2" />{saved ? "Saved!" : "Save Changes"}
                </Button>
              </div>
            </motion.div>
          )}

          {tab === "security" && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
              <div className="bg-white rounded-xl border border-slate-200 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.03)] p-6 md:p-8">
                <h2 className="font-heading text-xl font-extrabold text-slate-900 mb-6">Change Password</h2>
                <div className="space-y-5">
                  <div className="space-y-2"><label className="text-[13px] font-bold text-slate-700">Current Password</label><Input type="password" placeholder="••••••••" className="h-11 rounded-lg bg-white border-slate-200" /></div>
                  <div className="space-y-2"><label className="text-[13px] font-bold text-slate-700">New Password</label><Input type="password" placeholder="••••••••" className="h-11 rounded-lg bg-white border-slate-200" /></div>
                  <div className="space-y-2"><label className="text-[13px] font-bold text-slate-700">Confirm New Password</label><Input type="password" placeholder="••••••••" className="h-11 rounded-lg bg-white border-slate-200" /></div>
                </div>
                <div className="pt-5 mt-6 border-t border-slate-100 flex justify-end"><Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg px-6">Update Password</Button></div>
              </div>
            </motion.div>
          )}

          {tab === "notifications" && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-xl border border-slate-200 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.03)] p-6 md:p-8">
              <h2 className="font-heading text-xl font-extrabold text-slate-900 mb-6">Notification Preferences</h2>
              <div className="space-y-3">
                {[
                  ["New User Registration", true],["Agent Published", true],["Rate Limit Warnings", true],["Error Alerts", true],["Weekly Summary Report", false],
                ].map(([label, def]) => (
                  <div key={label as string} className="flex items-center justify-between p-4 bg-white rounded-lg border border-slate-200 shadow-sm">
                    <p className="text-[13px] font-bold text-slate-800">{label as string}</p>
                    <div className={`w-10 h-6 rounded-full ${def ? "bg-blue-600" : "bg-slate-200"} relative cursor-pointer transition-colors border border-black/5`}>
                      <span className={`absolute top-[3px] ${def ? "left-[19px]" : "left-[3px]"} w-4 h-4 bg-white rounded-full shadow-sm transition-all`} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="pt-5 mt-6 border-t border-slate-100 flex justify-end"><Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg px-6">Save Preferences</Button></div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
