"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Menu, CheckCircle2, Check, Minus, Zap, Database, Activity,
  Globe2, ShieldCheck, Code2, Users2, Plus, ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(true);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#fafafa] font-body text-slate-900 selection:bg-blue-100">
      {/* Navbar */}
      <div className="fixed top-4 sm:top-6 w-full z-50 flex justify-center px-4 sm:px-6 pointer-events-none">
        <nav className="w-full max-w-[1280px] bg-white/80 backdrop-blur-md border border-gray-200/60 shadow-sm rounded-full transition-all pointer-events-auto">
          <div className="px-6 md:px-8 h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 font-heading font-extrabold text-xl tracking-tight text-slate-900 transition-opacity hover:opacity-80 cursor-pointer">
              AgentLab
            </Link>
            <div className="hidden md:flex gap-10 text-sm font-semibold text-slate-500">
              <Link href="/product" className="hover:text-slate-900 transition-colors">Product</Link>
              <Link href="/solutions" className="hover:text-slate-900 transition-colors">Solutions</Link>
              <Link href="/developers" className="hover:text-slate-900 transition-colors">Developers</Link>
              <Link href="/pricing" className="text-slate-900 transition-colors">Pricing</Link>
            </div>
            <div className="hidden md:flex items-center gap-6 text-sm font-medium">
              <Link href="/login" className="text-slate-500 hover:text-slate-900 font-semibold transition-colors">Sign In</Link>
              <Link href="/register">
                <Button className="rounded-full bg-blue-600 hover:bg-blue-700 text-white px-7 py-5 font-semibold shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/30">
                  Get Started
                </Button>
              </Link>
            </div>
            <div className="md:hidden">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Menu className="w-5 h-5"/>
              </Button>
            </div>
          </div>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 max-w-[1280px] mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center text-blue-600 font-bold text-[11px] tracking-[0.2em] uppercase mb-8 bg-blue-50/80 px-4 py-2 rounded-full border border-blue-100">
            Pricing
          </div>
          <h1 className="font-heading text-[3rem] sm:text-[3.5rem] lg:text-[4rem] leading-[1.05] font-extrabold text-slate-900 tracking-[-0.04em] mb-8">
            Simple, <span className="bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text">transparent pricing</span> for every stage.
          </h1>
          <p className="text-lg sm:text-xl text-slate-500 mb-12 leading-relaxed font-medium tracking-wide max-w-2xl mx-auto">
            Start for free, scale as you grow, and unlock enterprise capabilities when your workflows demand more power and control.
          </p>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-4">
             <div className="bg-slate-200/50 p-1.5 flex items-center rounded-full border border-slate-200">
                <button 
                  onClick={() => setIsAnnual(false)}
                  className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${!isAnnual ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-700"}`}>
                   Monthly
                </button>
                <button 
                  onClick={() => setIsAnnual(true)}
                  className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all flex items-center gap-2 ${isAnnual ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-700"}`}>
                   Yearly
                </button>
             </div>
             <div className="px-3 py-1 bg-emerald-50 text-emerald-600 text-xs font-bold rounded-full border border-emerald-200 uppercase tracking-wider hidden sm:block">
               Save 20%
             </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards Section */}
      <section className="py-10 pb-24 max-w-[1280px] mx-auto px-6 relative z-10">
         <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 items-start max-w-6xl mx-auto">
            
            {/* Starter Plan */}
            <div className="bg-white rounded-[1.5rem] p-8 border border-slate-200/60 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col mt-4 lg:mt-8">
               <h3 className="font-heading text-2xl font-extrabold text-slate-900 mb-2">Starter</h3>
               <p className="text-slate-500 text-[15px] font-medium leading-relaxed mb-8 h-12">
                 Perfect for individuals exploring agent workflows and early prototyping.
               </p>
               <div className="mb-8">
                  <span className="text-5xl font-extrabold text-slate-900 tracking-tight">$0</span>
                  <span className="text-slate-500 font-bold ml-2">/ month</span>
               </div>
               <Button variant="secondary" className="w-full rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 py-6 text-base font-bold transition-colors mb-8 border border-slate-200 border-b-slate-300">
                 Start Free
               </Button>
               <ul className="space-y-4 flex-1">
                 {["1 active agent", "Basic workflow builder", "Limited memory storage", "Community support", "API access (limited)"].map((feature, i) => (
                   <li key={i} className="flex items-start gap-3 text-[15px] font-semibold text-slate-700">
                      <Check className="w-5 h-5 text-emerald-500 shrink-0"/>
                      {feature}
                   </li>
                 ))}
               </ul>
            </div>

            {/* Pro Plan */}
            <div className="bg-white rounded-[1.5rem] p-8 border-2 border-blue-600 shadow-2xl shadow-blue-500/10 hover:-translate-y-1 transition-all duration-300 flex flex-col relative z-20">
               <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-md">
                 Most Popular
               </div>
               <h3 className="font-heading text-2xl font-extrabold text-slate-900 mb-2 flex items-center gap-2">Pro <Zap className="w-5 h-5 text-amber-500 fill-amber-500"/></h3>
               <p className="text-slate-500 text-[15px] font-medium leading-relaxed mb-8 h-12">
                 For developers and small teams building real-world automation workflows.
               </p>
               <div className="mb-8">
                  <span className="text-5xl font-extrabold text-slate-900 tracking-tight">${isAnnual ? "29" : "36"}</span>
                  <span className="text-slate-500 font-bold ml-2">/ month</span>
               </div>
               <Button className="w-full rounded-xl bg-blue-600 hover:bg-blue-700 text-white py-6 text-base font-bold shadow-lg shadow-blue-500/25 hover:shadow-xl transition-all mb-8">
                 Upgrade to Pro
               </Button>
               <ul className="space-y-4 flex-1">
                 {["Unlimited agents", "Advanced workflow logic", "Persistent memory", "API + SDK access", "Real-time execution", "Priority support"].map((feature, i) => (
                   <li key={i} className="flex items-start gap-3 text-[15px] font-semibold text-slate-700">
                      <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-0.5"><Check className="w-3.5 h-3.5 text-blue-600 font-bold"/></div>
                      {feature}
                   </li>
                 ))}
               </ul>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white rounded-[1.5rem] p-8 border border-slate-200/60 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col mt-4 lg:mt-8">
               <h3 className="font-heading text-2xl font-extrabold text-slate-900 mb-2">Enterprise</h3>
               <p className="text-slate-500 text-[15px] font-medium leading-relaxed mb-8 h-12">
                 For organizations requiring scale, security, and full control.
               </p>
               <div className="mb-8">
                  <span className="text-5xl font-extrabold text-slate-900 tracking-tight">Custom</span>
               </div>
               <Button variant="secondary" className="w-full rounded-xl bg-slate-900 hover:bg-slate-800 text-white py-6 text-base font-bold transition-colors mb-8 shadow-md">
                 Contact Sales
               </Button>
               <ul className="space-y-4 flex-1">
                 {["Multi-team support", "Advanced security & guardrails", "Dedicated infrastructure", "SLA guarantees", "Custom integrations", "Account manager"].map((feature, i) => (
                   <li key={i} className="flex items-start gap-3 text-[15px] font-semibold text-slate-700">
                      <Check className="w-5 h-5 text-emerald-500 shrink-0"/>
                      {feature}
                   </li>
                 ))}
               </ul>
            </div>
            
         </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-24 bg-white border-y border-slate-200/50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-slate-50/50 pointer-events-none"></div>
        <div className="max-w-[1000px] mx-auto px-6 relative z-10">
           <div className="mb-16 text-center">
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Compare all features
              </h2>
           </div>

           <div className="overflow-x-auto pb-6">
              <table className="w-full text-left min-w-[700px]">
                 <thead>
                    <tr className="border-b-2 border-slate-200">
                       <th className="py-6 px-4 font-bold text-slate-500 uppercase tracking-widest text-xs w-1/3">Features</th>
                       <th className="py-6 px-4 font-extrabold text-slate-900 text-lg text-center w-1/5">Starter</th>
                       <th className="py-6 px-4 font-extrabold text-blue-600 text-lg text-center w-1/5">Pro</th>
                       <th className="py-6 px-4 font-extrabold text-slate-900 text-lg text-center w-1/5">Enterprise</th>
                    </tr>
                 </thead>
                 <tbody className="divide-y divide-slate-100 text-[15px] font-medium text-slate-700">
                    {[
                      { l: "Number of agents", s: "1", p: "Unlimited", e: "Unlimited" },
                      { l: "Workflow complexity", s: "Basic", p: "Advanced", e: "Advanced" },
                      { l: "Memory storage", s: "100 MB", p: "10 GB", e: "Custom limits" },
                      { l: "API access", s: "1,000 req/mo", p: "1M req/mo", e: "Custom volume" },
                      { l: "Real-time execution", s: <Minus className="w-5 h-5 mx-auto text-slate-300"/>, p: <Check className="w-5 h-5 mx-auto text-blue-600"/>, e: <Check className="w-5 h-5 mx-auto text-slate-900"/> },
                      { l: "Guardrails & security", s: <Minus className="w-5 h-5 mx-auto text-slate-300"/>, p: <Minus className="w-5 h-5 mx-auto text-slate-300"/>, e: <Check className="w-5 h-5 mx-auto text-slate-900"/> },
                      { l: "Integrations", s: "Pre-built only", p: "Pre-built + Custom", e: "All + Dedicated VPS" },
                      { l: "Support level", s: "Community", p: "Priority Email", e: "Dedicated Manager" },
                    ].map((row, idx) => (
                       <tr key={idx} className="hover:bg-slate-50 transition-colors">
                          <td className="py-5 px-4 font-semibold text-slate-800">{row.l}</td>
                          <td className="py-5 px-4 text-center text-slate-500">{row.s}</td>
                          <td className="py-5 px-4 text-center font-bold text-slate-900">{row.p}</td>
                          <td className="py-5 px-4 text-center text-slate-500">{row.e}</td>
                       </tr>
                    ))}
                 </tbody>
              </table>
           </div>
        </div>
      </section>

      {/* Usage / Scaling Section */}
      <section className="py-24 max-w-[1280px] mx-auto px-6">
         <div className="mb-16 max-w-2xl">
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-6">
              Flexible usage-based scaling
            </h2>
            <p className="text-slate-500 text-lg font-medium leading-relaxed">
              Pay for what you use as your workflows scale. AgentLab ensures predictable performance without unnecessary complexity.
            </p>
         </div>

         <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#fafafa] rounded-2xl p-8 border border-slate-200/80 shadow-sm flex flex-col transition-all duration-300 hover:shadow-md hover:border-slate-300">
               <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                  <Activity className="w-6 h-6"/>
               </div>
               <h3 className="font-bold text-lg text-slate-900 mb-2">Compute usage</h3>
               <p className="text-slate-500 font-medium text-sm leading-relaxed mb-4 flex-1">
                 Billed by the millisecond of active agent execution time across your deployed workflows.
               </p>
               <div className="text-sm font-bold text-slate-800">$0.0002 <span className="text-slate-400 font-medium">/ 10s step</span></div>
            </div>

            <div className="bg-[#fafafa] rounded-2xl p-8 border border-slate-200/80 shadow-sm flex flex-col transition-all duration-300 hover:shadow-md hover:border-slate-300">
               <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6">
                  <Database className="w-6 h-6"/>
               </div>
               <h3 className="font-bold text-lg text-slate-900 mb-2">Memory storage</h3>
               <p className="text-slate-500 font-medium text-sm leading-relaxed mb-4 flex-1">
                 Stores session history, embeddings, and context strings seamlessly for fast retrieval.
               </p>
               <div className="text-sm font-bold text-slate-800">$0.10 <span className="text-slate-400 font-medium">/ GB / mo</span></div>
            </div>

            <div className="bg-[#fafafa] rounded-2xl p-8 border border-slate-200/80 shadow-sm flex flex-col transition-all duration-300 hover:shadow-md hover:border-slate-300">
               <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-6">
                  <Code2 className="w-6 h-6"/>
               </div>
               <h3 className="font-bold text-lg text-slate-900 mb-2">API calls</h3>
               <p className="text-slate-500 font-medium text-sm leading-relaxed mb-4 flex-1">
                 Requests made directly to AgentLab endpoints from external systems and Webhooks.
               </p>
               <div className="text-sm font-bold text-slate-800">$1.50 <span className="text-slate-400 font-medium">/ 100k requests</span></div>
            </div>
         </div>
      </section>

      {/* Trust / Value Section */}
      <section className="py-20 bg-slate-100 border-y border-slate-200/60">
        <div className="max-w-[1280px] mx-auto px-6 text-center">
          <h2 className="font-heading text-xl font-bold text-slate-500 uppercase tracking-widest mb-12">
            Trusted by growing teams worldwide
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
             <div className="bg-white rounded-[1.2rem] p-6 shadow-sm border border-slate-200 flex flex-col items-center justify-center">
                <Users2 className="w-6 h-6 text-blue-500 mb-4"/>
                <div className="text-2xl font-extrabold text-slate-900 mb-1">2,500+</div>
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Eng. Teams</div>
             </div>
             <div className="bg-white rounded-[1.2rem] p-6 shadow-sm border border-slate-200 flex flex-col items-center justify-center">
                <Zap className="w-6 h-6 text-emerald-500 mb-4"/>
                <div className="text-2xl font-extrabold text-slate-900 mb-1">99.9%</div>
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Uptime</div>
             </div>
             <div className="bg-white rounded-[1.2rem] p-6 shadow-sm border border-slate-200 flex flex-col items-center justify-center">
                <Globe2 className="w-6 h-6 text-indigo-500 mb-4"/>
                <div className="text-2xl font-extrabold text-slate-900 mb-1">Global</div>
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Deployment</div>
             </div>
             <div className="bg-white rounded-[1.2rem] p-6 shadow-sm border border-slate-200 flex flex-col items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-rose-500 mb-4"/>
                <div className="text-2xl font-extrabold text-slate-900 mb-1">Enterprise</div>
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Security</div>
             </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 max-w-[800px] mx-auto px-6">
         <div className="mb-16 text-center">
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              Frequently asked questions
            </h2>
         </div>

         <div className="space-y-4">
            {[
              { q: "Can I start for free?", a: "Yes. The Starter plan is completely free and allows you to test out 1 active agent, basic workflows, and access our sandbox environments without needing a credit card." },
              { q: "Can I upgrade anytime?", a: "Absolutely. You can upgrade to a Pro plan at any point. Your usage limits will instantly scale and you'll unlock persistent memory and advanced integrations." },
              { q: "Do you offer refunds?", a: "We do not offer refunds for partial months, but you can cancel your subscription at any time without any hidden cancellation fees." },
              { q: "What happens if I exceed usage?", a: "If you are on the Pro plan, you will only be charged a minimal overage fee based on our flexible computing scale. Your agents will never stop running." },
              { q: "Is there enterprise support?", a: "Yes. For our Enterprise customers, we offer completely customized SLAs, dedicated infrastructure hosting (VPC, SSO), and a dedicated account manager to assist." }
            ].map((faq, idx) => (
               <div key={idx} className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:border-slate-300 transition-colors">
                  <button 
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                  >
                     <span className="font-bold text-lg text-slate-800">{faq.q}</span>
                     <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${openFaq === idx ? "bg-slate-100 rotate-45" : "bg-white border border-slate-200"}`}>
                        <Plus className="w-5 h-5 text-slate-600"/>
                     </div>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === idx ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
                     <p className="p-6 pt-0 text-slate-500 font-medium leading-relaxed">
                        {faq.a}
                     </p>
                  </div>
               </div>
            ))}
         </div>
      </section>

      {/* Final CTA section */}
      <section className="py-24 px-4 sm:px-6 max-w-[1280px] mx-auto">
        <div className="bg-[#050b14] rounded-[2.5rem] p-12 sm:p-20 text-center relative overflow-hidden border border-slate-800 shadow-2xl">
          <div className="absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600/30 via-transparent to-transparent mix-blend-screen scale-[2] pointer-events-none"></div>
          <div className="absolute -top-64 -right-64 w-96 h-96 bg-blue-600/20 blur-[100px] rounded-full pointer-events-none"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-[-0.02em] mb-6 leading-[1.1]">
              Start building today. Scale when you're ready.
            </h2>
            <p className="text-blue-100/60 text-lg mb-12 sm:px-10">
              No credit card required. Upgrade only when your workflows demand more power.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button className="rounded-full bg-blue-600 hover:bg-blue-500 text-white px-8 py-7 text-base font-semibold w-full sm:w-auto shadow-lg shadow-blue-500/25 transition-all mb-4 sm:mb-0">
                Get Started Free
              </Button>
              <Button className="rounded-full bg-white/5 hover:bg-white/10 text-white px-8 py-7 text-base font-semibold w-full sm:w-auto backdrop-blur-md border border-white/10 transition-all">
                Talk to Sales
              </Button>
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
