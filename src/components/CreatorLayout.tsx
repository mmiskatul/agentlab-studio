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

        {/* Brand */}
        <div className="p-6 h-20 flex items-center border-b border-slate-100">
          <Link href="/creator-dashboard" className="flex items-center gap-2 group">
            <div className="bg-gradient-to-tr from-violet-600 to-purple-500 rounded-xl p-2 shadow-sm group-hover:shadow-md transition-shadow">
              <Wrench className="h-5 w-5 text-white" />
            </div>
            <div>
              <span className="font-heading text-xl font-extrabold tracking-tight text-slate-900">AgentLab</span>
              <div className="text-[9px] font-bold uppercase tracking-[0.15em] text-violet-600 -mt-0.5">Creator Portal</div>
            </div>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-1.5 overflow-y-auto">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 px-2">Studio</div>
          {navItems.map((item) => {
            const isActive = pathname === item.href ||
              (pathname.startsWith(item.href) && item.href !== "/creator-dashboard");
            return (
              <Link key={item.href} href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold transition-all duration-200",
                  isActive
                    ? "bg-violet-50 text-violet-700 shadow-sm border border-violet-100/50"
                    : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                )}
              >
                <item.icon className={cn("h-4 w-4", isActive ? "text-violet-600" : "text-slate-400")} />
                {item.label}
              </Link>
            );
          })}

          <div className="pt-4 mt-4 border-t border-slate-100">
            <Link href="/creator-dashboard/studio"
              className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-bold text-white bg-gradient-to-r from-violet-600 to-purple-500 shadow-md hover:shadow-lg transition-all"
            >
              <PlusCircle className="h-4 w-4 text-white" /> New Agent
            </Link>
          </div>
        </nav>

        {/* Switch Portal */}
        <div className="px-4 py-3 border-t border-slate-100">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 px-2">Switch Portal</div>
          <Link href="/dashboard"
            className="flex items-center gap-2 px-3 py-2 rounded-xl text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-colors text-sm font-semibold"
          >
            <User className="h-4 w-4 text-slate-400" /> End User Dashboard
          </Link>
        </div>

        {/* Profile */}
        <div className="p-4 border-t border-slate-200/60">
          <div className="flex items-center gap-3 px-2 py-2 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer mb-2">
            <div className="h-9 w-9 rounded-full bg-violet-100 flex items-center justify-center border border-violet-200 shrink-0">
              <Zap className="h-4 w-4 text-violet-600" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-slate-800 truncate">Alex Creator</p>
              <p className="text-xs font-medium text-violet-600 truncate">Pro Plan</p>
            </div>
          </div>
          <Link href="/login" className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold text-slate-500 hover:bg-red-50 hover:text-red-600 transition-colors">
            <LogOut className="h-4 w-4" /> Sign Out
          </Link>
        </div>
      </aside>

      <main className="flex-1 overflow-auto">{children}</main>
    </div>
  );
}
