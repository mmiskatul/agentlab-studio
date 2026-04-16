"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Save, Eye, EyeOff, AlertCircle, Shield, ToggleLeft, ToggleRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function Toggle({ checked, onChange }: { checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <button onClick={() => onChange(!checked)} className={`relative inline-flex items-center h-6 w-11 rounded-full transition-colors focus:outline-none ${checked ? "bg-red-600" : "bg-slate-200"}`}>
      <span className={`inline-block w-4 h-4 transform bg-white rounded-full shadow transition-transform ${checked ? "translate-x-6" : "translate-x-1"}`} />
    </button>
  );
}

export default function SystemConfigPage() {
  const [showKey, setShowKey] = useState(false);
  const [openReg, setOpenReg] = useState(true);
  const [maintenance, setMaintenance] = useState(false);
  const [apiAccess, setApiAccess] = useState(true);
  const [model, setModel] = useState("gpt-4o");
  const [saved, setSaved] = useState(false);

  const save = () => { setSaved(true); setTimeout(() => setSaved(false), 2000); };

  return (
    <div className="min-h-full bg-[#fafafa] p-6 lg:p-10 space-y-8 max-w-[900px]">

      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <div className="inline-flex items-center text-red-600 font-bold text-[11px] tracking-[0.2em] uppercase mb-4 bg-red-50 px-4 py-2 rounded-full border border-red-100">Admin · Config</div>
        <h1 className="font-heading text-3xl font-extrabold text-slate-900 tracking-tight">System Config</h1>
        <p className="text-slate-500 mt-2 font-medium">Configure API providers, platform limits, and feature flags.</p>
      </motion.div>

      {/* Warning banner */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex gap-3">
        <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
        <div><p className="font-bold text-amber-800 text-sm">Admin-Only Settings</p><p className="text-amber-700 font-medium text-xs mt-0.5">Changes here affect the entire platform. API keys are masked after saving.</p></div>
      </div>

      {/* AI Provider */}
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-white rounded-[1.5rem] border border-slate-200/60 shadow-sm p-6 md:p-8">
        <h2 className="font-heading text-xl font-extrabold text-slate-900 mb-6">AI Provider</h2>
        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700 flex items-center justify-between">
              OpenAI API Key
              <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-100 px-2.5 py-1 rounded-md">Connected</span>
            </label>
            <div className="relative">
              <Input type={showKey ? "text" : "password"} defaultValue="sk-proj-XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" className="h-11 rounded-xl bg-slate-50 border-slate-200 font-mono text-sm pr-12" />
              <button onClick={() => setShowKey(!showKey)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700">
                {showKey ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700">Anthropic API Key</label>
            <Input type="password" placeholder="sk-ant-..." className="h-11 rounded-xl bg-slate-50 border-slate-200 font-mono text-sm placeholder:text-slate-400" />
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Default Model</label>
              <div className="relative">
                <select value={model} onChange={(e) => setModel(e.target.value)} className="w-full h-11 rounded-xl bg-slate-50 border border-slate-200 pl-4 pr-10 font-semibold text-sm text-slate-800 appearance-none">
                  {["gpt-4o","gpt-4o-mini","gpt-3.5-turbo","claude-3-5-sonnet-latest"].map((m) => <option key={m} value={m}>{m}</option>)}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Default Temperature</label>
              <Input type="number" defaultValue="0.3" step="0.1" min="0" max="2" className="h-11 rounded-xl bg-slate-50 border-slate-200 font-semibold" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Platform Limits */}
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="bg-white rounded-[1.5rem] border border-slate-200/60 shadow-sm p-6 md:p-8">
        <h2 className="font-heading text-xl font-extrabold text-slate-900 mb-6">Platform Limits</h2>
        <div className="grid sm:grid-cols-2 gap-5">
          {[
            { label:"Free Plan (req/min)",      default:"10" },
            { label:"Pro Plan (req/min)",        default:"100" },
            { label:"Enterprise Plan (req/min)", default:"1000" },
            { label:"Max Knowledge File (MB)",   default:"50" },
            { label:"Max Agents per Creator",    default:"20" },
            { label:"Max Context Length (K)",    default:"128" },
          ].map((f) => (
            <div key={f.label} className="space-y-2">
              <label className="text-sm font-bold text-slate-700">{f.label}</label>
              <Input type="number" defaultValue={f.default} className="h-11 rounded-xl bg-slate-50 border-slate-200 font-semibold" />
            </div>
          ))}
        </div>
      </motion.div>

      {/* Feature Flags */}
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-white rounded-[1.5rem] border border-slate-200/60 shadow-sm p-6 md:p-8">
        <h2 className="font-heading text-xl font-extrabold text-slate-900 mb-6">Feature Flags</h2>
        <div className="space-y-5">
          {[
            { label:"Public Registration", sub:"Allow new users to sign up without invitation.", value:openReg, set:setOpenReg },
            { label:"Platform API Access",  sub:"Enable public REST API access for creators.",   value:apiAccess, set:setApiAccess },
            { label:"Maintenance Mode",     sub:"Take platform offline for maintenance. All users will see a notice.", value:maintenance, set:setMaintenance },
          ].map((f) => (
            <div key={f.label} className={`flex items-center justify-between p-4 rounded-xl border ${f.label === "Maintenance Mode" && f.value ? "bg-red-50 border-red-200" : "bg-slate-50 border-slate-200/60"}`}>
              <div>
                <p className="text-sm font-bold text-slate-900">{f.label}</p>
                <p className="text-[12px] font-medium text-slate-500 mt-0.5">{f.sub}</p>
              </div>
              <Toggle checked={f.value} onChange={f.set} />
            </div>
          ))}
        </div>
      </motion.div>

      {/* Danger Zone */}
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="bg-red-50 rounded-[1.5rem] border border-red-200/60 shadow-sm p-6 md:p-8">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center shrink-0"><Shield className="w-5 h-5 text-red-600" /></div>
          <div><h2 className="font-heading text-xl font-extrabold text-red-700">Danger Zone</h2><p className="text-sm font-medium text-red-600 mt-1">These actions are irreversible.</p></div>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button variant="outline" className="border-red-300 text-red-600 hover:bg-red-100 font-bold rounded-xl">Reset All User Data</Button>
          <Button variant="outline" className="border-red-300 text-red-600 hover:bg-red-100 font-bold rounded-xl">Purge Vector Store</Button>
          <Button className="bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl">Force Maintenance Mode</Button>
        </div>
      </motion.div>

      {/* Save */}
      <div className="flex justify-end">
        <Button onClick={save} className={`rounded-xl font-bold px-8 h-12 shadow-md transition-all text-white ${saved ? "bg-emerald-600 hover:bg-emerald-700" : "bg-red-600 hover:bg-red-700 shadow-red-500/20"}`}>
          <Save className="w-4 h-4 mr-2" /> {saved ? "Saved!" : "Save Configuration"}
        </Button>
      </div>
    </div>
  );
}
