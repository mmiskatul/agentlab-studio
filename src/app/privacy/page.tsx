"use client";

import Link from "next/link";
import { Menu, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#fafafa] font-body text-slate-900 selection:bg-blue-100">


      {/* Hero Section */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16 max-w-[800px] mx-auto px-6 text-center">
        <div className="inline-flex items-center text-blue-600 font-bold text-[11px] tracking-[0.2em] uppercase mb-6 bg-blue-50/80 px-4 py-2 rounded-full border border-blue-100">
          Security & Privacy
        </div>
        <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
          Privacy Policy
        </h1>
        <p className="text-lg text-slate-500 font-medium">
          Effective Date: October 12, 2024
        </p>
      </section>

      {/* Content Document */}
      <section className="pb-32 px-4 sm:px-6 max-w-[800px] mx-auto">
        <div className="bg-white rounded-[2rem] border border-slate-200/60 p-8 sm:p-12 shadow-sm font-medium text-[15px] leading-loose text-slate-600">
           
           <div className="prose prose-slate max-w-none">
              <h2 className="font-heading text-2xl font-extrabold text-slate-900 mb-4 mt-0">1. Information We Collect</h2>
              <p className="mb-4">
                We collect information to provide better services to all our users. The types of personal information we collect include:
              </p>
              <ul className="mb-8 space-y-2 list-none p-0">
                <li className="flex items-start text-slate-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 mr-3 shrink-0"></span>
                  <strong>Account Data:</strong> Name, email address, password, and billing details.
                </li>
                <li className="flex items-start text-slate-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 mr-3 shrink-0"></span>
                  <strong>Usage Data:</strong> Application logs, workflow configurations, agent execution graphs, and latency information.
                </li>
                <li className="flex items-start text-slate-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 mr-3 shrink-0"></span>
                  <strong>Memory Content:</strong> Data securely passed to the vector memory store during agent interactions (which may be governed by specific enterprise tier zero-retention policies).
                </li>
              </ul>

              <h2 className="font-heading text-2xl font-extrabold text-slate-900 mb-4 mt-8">2. How We Use Information</h2>
              <p className="mb-8">
                Your data is primarily used to orchestrate your AI workflows, maintain infrastructure reliability, and bill appropriately based on compute milliseconds. We do not use user prompt data or workflow data to train foundation models without explicit opt-in consent.
              </p>

              <h2 className="font-heading text-2xl font-extrabold text-slate-900 mb-4 mt-8">3. Data Residency and Compliance</h2>
              <p className="mb-8">
                AgentLab operates global clusters. However, enterprise customers can enforce local data residency (e.g., EU-Central only deployments) via their deployment configuration panel to comply with GDPR, HIPAA, and SOC-2 requirements.
              </p>

              <h2 className="font-heading text-2xl font-extrabold text-slate-900 mb-4 mt-8">4. Data Sharing and Third-Party Processors</h2>
              <p className="mb-4">
                We do not sell your personal data. We only share information with authorized third-party vendors required to maintain the platform:
              </p>
              <ul className="mb-8 space-y-2 list-none p-0">
                <li className="flex items-start text-slate-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 mr-3 shrink-0"></span>
                  Cloud infrastructure providers (AWS, GCP)
                </li>
                <li className="flex items-start text-slate-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 mr-3 shrink-0"></span>
                  Payment gateway processors (Stripe)
                </li>
                <li className="flex items-start text-slate-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 mr-3 shrink-0"></span>
                  Foundation model API providers (when you choose to route queries through our managed keys rather than BYOK).
                </li>
              </ul>

              <h2 className="font-heading text-2xl font-extrabold text-slate-900 mb-4 mt-8">5. Your Security Choices</h2>
              <p className="mb-8">
                You have the right to request access to, correction of, or deletion of your personal data at any time. Accounts can be terminated via the settings dashboard, which schedules a 30-day hard deletion protocol across all backups.
              </p>

              <div className="mt-12 pt-8 border-t border-slate-100 italic text-slate-400">
                 For questions regarding privacy, please contact privacy@agentlab.dev.
              </div>
           </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200/60 bg-[#fafafa] pt-20 pb-10">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-10 md:gap-4 mb-20">
            <div className="col-span-2 md:col-span-3">
              <div className="font-heading font-extrabold text-2xl text-slate-900 mb-6 tracking-tight">AgentLab</div>
              <p className="text-slate-500 text-[15px] leading-relaxed max-w-xs font-medium">
                Building the architectural foundation for the autonomous future.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-5 text-[11px] tracking-widest uppercase">Legal</h4>
              <ul className="space-y-4 text-slate-500 text-sm font-medium">
                <li><Link href="/privacy" className="text-blue-600 transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-blue-600 transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-5 text-[11px] tracking-widest uppercase">Support</h4>
              <ul className="space-y-4 text-slate-500 text-sm font-medium">
                <li><Link href="#" className="hover:text-blue-600 transition-colors">Security</Link></li>
                <li><Link href="#" className="hover:text-blue-600 transition-colors">Status</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-5 text-[11px] tracking-widest uppercase">Social</h4>
              <ul className="space-y-4 text-slate-500 text-sm font-medium">
                <li><Link href="#" className="hover:text-blue-600 transition-colors">Twitter</Link></li>
                <li><Link href="#" className="hover:text-blue-600 transition-colors">LinkedIn</Link></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-200/60 text-slate-400 text-sm font-medium flex flex-col md:flex-row items-center justify-between">
            <p>© 2026 AgentLab Intelligence. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
