"use client";

import Link from "next/link";
import { Menu, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#fafafa] font-body text-slate-900 selection:bg-blue-100">


      {/* Hero Section */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16 max-w-[800px] mx-auto px-6 text-center">
        <div className="inline-flex items-center text-blue-600 font-bold text-[11px] tracking-[0.2em] uppercase mb-6 bg-blue-50/80 px-4 py-2 rounded-full border border-blue-100">
          Legal
        </div>
        <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
          Terms of Service
        </h1>
        <p className="text-lg text-slate-500 font-medium">
          Last updated: October 12, 2024
        </p>
      </section>

      {/* Content Document */}
      <section className="pb-32 px-4 sm:px-6 max-w-[800px] mx-auto">
        <div className="bg-white rounded-[2rem] border border-slate-200/60 p-8 sm:p-12 shadow-sm font-medium text-[15px] leading-loose text-slate-600">
           
           <div className="prose prose-slate max-w-none">
              <h2 className="font-heading text-2xl font-extrabold text-slate-900 mb-4 mt-0">1. Acceptance of Terms</h2>
              <p className="mb-8">
                By accessing or using the AgentLab intelligence platform, APIs, or any related services (collectively, the "Services"), you agree to be bound by these Terms of Service. If you do not agree to these terms, you may not access or use the Services.
              </p>

              <h2 className="font-heading text-2xl font-extrabold text-slate-900 mb-4 mt-8">2. Description of Service</h2>
              <p className="mb-8">
                AgentLab provides cloud-based orchestration, memory, and deployment infrastructure for AI agents. We reserve the right to modify, suspend, or discontinue the Services at any time, with or without notice.
              </p>

              <h2 className="font-heading text-2xl font-extrabold text-slate-900 mb-4 mt-8">3. Acceptable Use Policy</h2>
              <p className="mb-4">
                You agree not to use the Services to:
              </p>
              <ul className="mb-8 space-y-2 list-none p-0">
                <li className="flex items-start text-slate-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 mr-3 shrink-0"></span>
                  Violate any applicable national or international law or regulation.
                </li>
                <li className="flex items-start text-slate-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 mr-3 shrink-0"></span>
                  Generate, distribute, or facilitate the distribution of malicious code or spam.
                </li>
                <li className="flex items-start text-slate-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 mr-3 shrink-0"></span>
                  Bypass or attempt to bypass any security or authentication measures.
                </li>
                <li className="flex items-start text-slate-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 mr-3 shrink-0"></span>
                  Deploy agents that engage in deceptive, fraudulent, or harmful practices.
                </li>
              </ul>

              <h2 className="font-heading text-2xl font-extrabold text-slate-900 mb-4 mt-8">4. Service Level Agreement (SLA)</h2>
              <p className="mb-8">
                AgentLab provides a 99.9% uptime commitment for Enterprise tier customers. For Free and Pro tiers, the platform is provided "as is" without any strict SLA guarantees. Target latency and execution speed may vary based on cloud provider availability and system load.
              </p>

              <h2 className="font-heading text-2xl font-extrabold text-slate-900 mb-4 mt-8">5. Account Registration and Security</h2>
              <p className="mb-8">
                You are responsible for safeguarding your API keys and account passwords. Any actions taken under your credentials, whether authorized by you or not, remain your financial and operational responsibility.
              </p>

              <div className="mt-12 pt-8 border-t border-slate-100 italic text-slate-400">
                 For questions regarding these terms, please contact legal@agentlab.dev.
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
                <li><Link href="/privacy" className="hover:text-blue-600 transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-blue-600 transition-colors">Terms of Service</Link></li>
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
