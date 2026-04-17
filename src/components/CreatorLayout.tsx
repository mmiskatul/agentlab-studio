"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Bot,
  PlusCircle,
  Database,
  MessageSquare,
  LineChart,
  Settings,
  LogOut,
  Wrench,
  User,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { icon: LayoutDashboard, label: "Overview",        href: "/creator-dashboard" },
  { icon: Bot,             label: "My Agents",       href: "/creator-dashboard/agents" },
  { icon: PlusCircle,      label: "Creator Studio",  href: "/creator-dashboard/studio" },
  { icon: Database,        label: "Knowledge Base",  href: "/creator-dashboard/knowledge" },
  { icon: MessageSquare,   label: "Test Chats",      href: "/creator-dashboard/chat" },
  { icon: LineChart,       label: "Analytics",       href: "/creator-dashboard/analytics" },
  { icon: Settings,        label: "Settings",        href: "/creator-dashboard/settings" },
];

export default function CreatorLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="flex h-screen bg-[#fafafa] font-body overflow-hidden text-slate-900">

      <aside className="hidden md:flex w-72 flex-col border-r border-slate-200/60 bg-white shadow-sm z-10">

        <div className="p-6 h-20 flex items-center border-b border-slate-100">
          <Link href="/creator-dashboard" className="flex items-center gap-2 group">
            <div className="bg-gradient-to-tr from-blue-600 to-cyan-500 rounded-xl p-2 shadow-sm group-hover:shadow-md transition-shadow">
              <Wrench className="h-5 w-5 text-white" />
            </div>
            <div>
              <span className="font-heading text-xl font-extrabold tracking-tight text-slate-900">AgentLab</span>
              <div className="text-[9px] font-bold uppercase tracking-[0.15em] text-blue-600 -mt-0.5">Creator Portal</div>
            </div>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-1.5 overflow-y-auto">
          <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4 px-3">Studio</div>
          {navItems.map((item) => {
            const isActive = pathname === item.href ||
              (pathname.startsWith(item.href) && item.href !== "/creator-dashboard");
            return (
              <Link key={item.href} href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-bold transition-all duration-200",
                  isActive
                    ? "bg-blue-50 text-blue-600 border border-blue-100/50"
                    : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                )}
              >
                <item.icon className={cn("h-4 w-4 shrink-0", isActive ? "text-blue-600" : "text-slate-400")} />
                {item.label}
              </Link>
            );
          })}

        </nav>



        <div className="p-4 border-t border-slate-200/60 bg-slate-50/30">
          <div className="flex items-center gap-3 px-2 py-3 rounded-xl hover:bg-white transition-all cursor-pointer group mb-2 border border-transparent hover:border-slate-100 hover:shadow-sm">
            <div className="relative">
              <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center border-2 border-white shadow-sm shrink-0">
                <Zap className="h-5 w-5 text-blue-600" />
              </div>
              <div className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 bg-emerald-500 border-2 border-white rounded-full" title="Pro Plan Online" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-black text-slate-900 truncate tracking-tight">Alex Creator</p>
              <p className="text-[11px] font-bold text-blue-600 truncate uppercase tracking-widest">Pro Plan</p>
            </div>
          </div>
          <Link href="/login" className="flex w-full items-center gap-3 rounded-xl px-4 py-2 text-[12px] font-black text-slate-500 hover:bg-slate-100 hover:text-slate-900 border border-transparent hover:border-slate-200 transition-all active:scale-95">
            <LogOut className="h-4 w-4 shrink-0" /> Sign Out
          </Link>
        </div>
      </aside>

      <main className="flex-1 overflow-auto">{children}</main>
    </div>
  );
}
