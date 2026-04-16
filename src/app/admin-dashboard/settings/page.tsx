"use client";

import { motion } from "framer-motion";
import { Shield, Save, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function AdminSettingsPage() {
  return (
    <div className="p-6 lg:p-10 space-y-8 max-w-[900px] mx-auto min-h-full">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Platform Settings</h1>
        <p className="text-slate-500 mt-2 font-medium text-lg">Global configuration for the AgentLab SaaS platform.</p>
      </motion.div>

      <div className="space-y-6">
        <div className="bg-white rounded-[1.5rem] border border-slate-200/60 shadow-sm p-6 md:p-8">
          <h2 className="font-heading text-xl font-extrabold text-slate-900 mb-6">Platform Identity</h2>
          <div className="space-y-5">
            <div className="space-y-2"><label className="text-sm font-bold text-slate-700">Platform Name</label><Input defaultValue="AgentLab" className="h-11 rounded-xl bg-slate-50 border-slate-200 font-semibold" /></div>
            <div className="space-y-2"><label className="text-sm font-bold text-slate-700">Support Email</label><Input defaultValue="support@agentlab.ai" type="email" className="h-11 rounded-xl bg-slate-50 border-slate-200 font-semibold" /></div>
            <div className="space-y-2"><label className="text-sm font-bold text-slate-700">Default LLM Model</label><Input defaultValue="gpt-4o" className="h-11 rounded-xl bg-slate-50 border-slate-200 font-semibold" /></div>
          </div>
          <div className="pt-6 mt-6 border-t border-slate-100 flex justify-end">
            <Button className="bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl shadow-md px-6"><Save className="w-4 h-4 mr-2" /> Save Platform Config</Button>
          </div>
        </div>

        <div className="bg-white rounded-[1.5rem] border border-slate-200/60 shadow-sm p-6 md:p-8">
          <h2 className="font-heading text-xl font-extrabold text-slate-900 mb-6">API Rate Limits</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="space-y-2"><label className="text-sm font-bold text-slate-700">Free Plan (req/min)</label><Input type="number" defaultValue="10" className="h-11 rounded-xl bg-slate-50 border-slate-200 font-semibold" /></div>
            <div className="space-y-2"><label className="text-sm font-bold text-slate-700">Pro Plan (req/min)</label><Input type="number" defaultValue="100" className="h-11 rounded-xl bg-slate-50 border-slate-200 font-semibold" /></div>
            <div className="space-y-2"><label className="text-sm font-bold text-slate-700">Enterprise Plan (req/min)</label><Input type="number" defaultValue="1000" className="h-11 rounded-xl bg-slate-50 border-slate-200 font-semibold" /></div>
            <div className="space-y-2"><label className="text-sm font-bold text-slate-700">Max Knowledge File Size (MB)</label><Input type="number" defaultValue="50" className="h-11 rounded-xl bg-slate-50 border-slate-200 font-semibold" /></div>
          </div>
          <div className="pt-6 mt-6 border-t border-slate-100 flex justify-end">
            <Button className="bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl shadow-md px-6"><Save className="w-4 h-4 mr-2" /> Save Rate Limits</Button>
          </div>
        </div>

        <div className="bg-red-50 rounded-[1.5rem] border border-red-200/60 shadow-sm p-6 md:p-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center shrink-0"><AlertCircle className="w-5 h-5 text-red-600" /></div>
            <div><h2 className="font-heading text-xl font-extrabold text-red-700">Danger Zone</h2><p className="text-sm font-medium text-red-600 mt-1">These actions are irreversible. Proceed with extreme caution.</p></div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button variant="outline" className="border-red-300 text-red-600 hover:bg-red-100 font-bold rounded-xl">Reset All User Data</Button>
            <Button variant="outline" className="border-red-300 text-red-600 hover:bg-red-100 font-bold rounded-xl">Purge Knowledge Vectors</Button>
            <Button className="bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl"><Shield className="w-4 h-4 mr-2" /> Maintenance Mode</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
