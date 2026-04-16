"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Bot,
  LayoutDashboard,
  MessageSquare,
  Settings,
  LogOut,
  Compass,
  History,
  User,
  Wrench,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard",      href: "/dashboard" },
  { icon: Compass,         label: "Explore Agents", href: "/dashboard/agents" },
  { icon: MessageSquare,   label: "Chat",           href: "/dashboard/chat" },
  { icon: History,         label: "History",        href: "/dashboard/history" },
  { icon: Settings,        label: "Settings",       href: "/dashboard/settings" },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="flex h-screen bg-[#fafafa] font-body overflow-hidden text-slate-900 selection:bg-blue-100">

      <aside className="hidden md:flex w-72 flex-col border-r border-slate-200/60 bg-white shadow-sm z-10">

        {/* Brand */}
        <div className="p-6 h-20 flex items-center border-b border-slate-100">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-gradient-to-tr from-blue-600 to-cyan-500 rounded-xl p-2 shadow-sm group-hover:shadow-md transition-shadow">
              <Bot className="h-5 w-5 text-white" />
            </div>
            <span className="font-heading text-xl font-extrabold tracking-tight text-slate-900">AgentLab</span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-1.5 overflow-y-auto">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 px-2">Menu</div>
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link key={item.href} href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold transition-all duration-200",
                  isActive
                    ? "bg-blue-50 text-blue-700 shadow-sm border border-blue-100/50"
                    : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                )}
              >
                <item.icon className={cn("h-4 w-4", isActive ? "text-blue-600" : "text-slate-400")} />
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Switch Portal */}
        <div className="px-4 py-3 border-t border-slate-100">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 px-2">Switch Portal</div>
          <Link href="/creator-dashboard"
            className="flex items-center gap-2 px-3 py-2 rounded-xl text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-colors text-sm font-semibold"
          >
            <Wrench className="h-4 w-4 text-slate-400" /> Creator Dashboard
          </Link>
        </div>

        {/* Profile */}
        <div className="p-4 border-t border-slate-200/60">
          <div className="flex items-center gap-3 px-2 py-2 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer">
            <div className="h-9 w-9 rounded-full bg-indigo-100 flex items-center justify-center border border-indigo-200 shrink-0">
              <User className="h-4 w-4 text-indigo-600" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-slate-800 truncate">Alex Developer</p>
              <p className="text-xs font-medium text-slate-500 truncate">Free Plan</p>
            </div>
          </div>
          <Link href="/login" className="mt-2 flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold text-slate-500 hover:bg-red-50 hover:text-red-600 transition-colors">
            <LogOut className="h-4 w-4" /> Sign Out
          </Link>
        </div>
      </aside>

      <main className="flex-1 overflow-auto">{children}</main>
    </div>
  );
}
