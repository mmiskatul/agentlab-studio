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
    <div className="min-h-full bg-[#fafafa] p-6 lg:p-10 space-y-8 max-w-[900px]">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <div className="inline-flex items-center text-red-600 font-bold text-[11px] tracking-[0.2em] uppercase mb-4 bg-red-50 px-4 py-2 rounded-full border border-red-100">Admin · Settings</div>
        <h1 className="font-heading text-3xl font-extrabold text-slate-900 tracking-tight">Admin Settings</h1>
        <p className="text-slate-500 mt-2 font-medium">Manage your admin account profile and security.</p>
      </motion.div>

      <div className="flex flex-col md:flex-row gap-8">
        <nav className="w-full md:w-52 shrink-0 flex md:flex-col gap-1">
          {[["profile","Profile",User],["security","Security",Key],["notifications","Notifications",Bell]].map(([id, label, Icon]) => (
            <button key={id as string} onClick={() => setTab(id as typeof tab)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all whitespace-nowrap ${tab === id ? "bg-white shadow-sm border border-slate-200/60 text-red-600" : "text-slate-500 hover:bg-white/50 hover:text-slate-900"}`}
            >
              <Icon className="w-4 h-4" />{label as string}
            </button>
          ))}
        </nav>

        <div className="flex-1 space-y-6">
          {tab === "profile" && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-[1.5rem] border border-slate-200/60 shadow-sm p-6 md:p-8">
              <h2 className="font-heading text-xl font-extrabold text-slate-900 mb-6">Admin Profile</h2>
              <div className="flex items-center gap-6 mb-8">
                <div className="h-20 w-20 rounded-2xl bg-red-50 border border-red-200 flex items-center justify-center shrink-0"><User className="h-8 w-8 text-red-600" /></div>
                <div>
                  <Button variant="outline" className="rounded-xl font-bold border-slate-200 shadow-sm h-10 mb-2"><Upload className="w-4 h-4 mr-2" /> Upload Avatar</Button>
                  <p className="text-xs font-medium text-slate-500">JPG, GIF or PNG. 1MB max.</p>
                </div>
              </div>
              <div className="grid gap-5 sm:grid-cols-2 mb-6">
                <div className="space-y-2"><label className="text-sm font-bold text-slate-700">First Name</label><Input defaultValue="Super" className="h-11 rounded-xl bg-slate-50 border-slate-200 font-semibold" /></div>
                <div className="space-y-2"><label className="text-sm font-bold text-slate-700">Last Name</label><Input defaultValue="Admin" className="h-11 rounded-xl bg-slate-50 border-slate-200 font-semibold" /></div>
                <div className="space-y-2 sm:col-span-2"><label className="text-sm font-bold text-slate-700">Email Address</label><Input defaultValue="admin@agentlab.ai" disabled className="h-11 rounded-xl bg-slate-100 border-slate-200 font-semibold text-slate-500 cursor-not-allowed" /></div>
                <div className="space-y-2 sm:col-span-2"><label className="text-sm font-bold text-slate-700">Role</label><Input defaultValue="Platform Administrator · Full Access" disabled className="h-11 rounded-xl bg-red-50 border-red-100 font-semibold text-red-700 cursor-not-allowed" /></div>
              </div>
              <div className="pt-4 border-t border-slate-100 flex justify-end">
                <Button onClick={save} className={`font-bold rounded-xl px-6 shadow-sm text-white transition-colors ${saved ? "bg-emerald-600" : "bg-red-600 hover:bg-red-700"}`}>
                  <Save className="w-4 h-4 mr-2" />{saved ? "Saved!" : "Save Changes"}
                </Button>
              </div>
            </motion.div>
          )}

          {tab === "security" && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-5">
              <div className="bg-white rounded-[1.5rem] border border-slate-200/60 shadow-sm p-6 md:p-8">
                <h2 className="font-heading text-xl font-extrabold text-slate-900 mb-6">Change Password</h2>
                <div className="space-y-5">
                  <div className="space-y-2"><label className="text-sm font-bold text-slate-700">Current Password</label><Input type="password" placeholder="••••••••" className="h-11 rounded-xl bg-slate-50 border-slate-200" /></div>
                  <div className="space-y-2"><label className="text-sm font-bold text-slate-700">New Password</label><Input type="password" placeholder="••••••••" className="h-11 rounded-xl bg-slate-50 border-slate-200" /></div>
                  <div className="space-y-2"><label className="text-sm font-bold text-slate-700">Confirm New Password</label><Input type="password" placeholder="••••••••" className="h-11 rounded-xl bg-slate-50 border-slate-200" /></div>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-100 flex justify-end"><Button className="bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl px-6">Update Password</Button></div>
              </div>
              <div className="bg-white rounded-[1.5rem] border border-slate-200/60 shadow-sm p-6 md:p-8">
                <div className="flex items-start gap-4 mb-4"><div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center shrink-0"><Shield className="w-5 h-5 text-red-600" /></div><div><h2 className="font-heading text-xl font-extrabold text-slate-900">Two-Factor Authentication</h2><p className="text-sm font-medium text-slate-500 mt-1">Add an extra layer of security to your admin account.</p></div></div>
                <Button className="bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl">Enable 2FA</Button>
              </div>
            </motion.div>
          )}

          {tab === "notifications" && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-[1.5rem] border border-slate-200/60 shadow-sm p-6 md:p-8">
              <h2 className="font-heading text-xl font-extrabold text-slate-900 mb-6">Notification Preferences</h2>
              <div className="space-y-4">
                {[
                  ["New User Registration", true],["Agent Published", true],["Rate Limit Warnings", true],["Error Alerts", true],["Weekly Summary Report", false],
                ].map(([label, def]) => (
                  <div key={label as string} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-200/60">
                    <p className="text-sm font-bold text-slate-800">{label as string}</p>
                    <div className={`w-10 h-6 rounded-full ${def ? "bg-red-500" : "bg-slate-200"} relative cursor-pointer transition-colors`}>
                      <span className={`absolute top-1 ${def ? "left-5" : "left-1"} w-4 h-4 bg-white rounded-full shadow transition-all`} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100 flex justify-end"><Button className="bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl px-6">Save Preferences</Button></div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
