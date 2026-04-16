"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Shield, LayoutDashboard, Users, Bot, Activity,
  FileText, Settings2, Settings, LogOut, User, Bell, ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

const sections = [
  {
    label: "Platform",
    items: [
      { icon: LayoutDashboard, label: "Dashboard",     href: "/admin/dashboard" },
      { icon: Users,           label: "Users",         href: "/admin/users" },
      { icon: Bot,             label: "Agents",        href: "/admin/agents" },
      { icon: Activity,        label: "Usage Monitor", href: "/admin/usage" },
    ],
  },
  {
    label: "System",
    items: [
      { icon: FileText,  label: "Logs",          href: "/admin/logs" },
      { icon: Settings2, label: "System Config",  href: "/admin/config" },
      { icon: Settings,  label: "Settings",       href: "/admin/settings" },
    ],
  },
];

export default function AdminPanelLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="flex h-screen bg-[#fafafa] font-body overflow-hidden text-slate-900">

      {/* ─── Sidebar ─── */}
      <aside className="hidden md:flex w-72 flex-col border-r border-slate-200/60 bg-white shadow-sm z-10 shrink-0">

        {/* Brand */}
        <div className="p-6 h-20 flex items-center border-b border-slate-100">
          <Link href="/admin/dashboard" className="flex items-center gap-2.5 group">
            <div className="bg-gradient-to-tr from-red-600 to-rose-500 rounded-xl p-2 shadow-sm group-hover:shadow-md transition-shadow">
              <Shield className="h-5 w-5 text-white" />
            </div>
            <div>
              <span className="font-heading text-xl font-extrabold tracking-tight text-slate-900">AgentLab</span>
              <div className="text-[9px] font-bold uppercase tracking-[0.15em] text-red-600 -mt-0.5">Admin Portal</div>
            </div>
          </Link>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-4 py-5 overflow-y-auto space-y-6">
          {sections.map((section) => (
            <div key={section.label}>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 px-2">{section.label}</div>
              <div className="space-y-1">
                {section.items.map((item) => {
                  const isActive = pathname === item.href || (pathname.startsWith(item.href) && item.href !== "/admin/dashboard");
                  return (
                    <Link key={item.href} href={item.href}
                      className={cn(
                        "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold transition-all duration-150",
                        isActive
                          ? "bg-red-50 text-red-700 border border-red-100/50 shadow-sm"
                          : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                      )}
                    >
                      <item.icon className={cn("h-4 w-4 shrink-0", isActive ? "text-red-600" : "text-slate-400")} />
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>

        {/* Alerts */}
        <div className="px-4 py-3 border-t border-slate-100">
          <div className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-amber-50 border border-amber-200/50 text-amber-700">
            <Bell className="w-4 h-4 shrink-0" />
            <span className="text-xs font-bold">3 platform alerts</span>
            <ChevronRight className="w-3.5 h-3.5 ml-auto" />
          </div>
        </div>

        {/* Exit */}
        <div className="px-4 py-2 border-t border-slate-100">
          <Link href="/dashboard" className="flex items-center gap-2 px-3 py-2 rounded-xl text-slate-500 hover:bg-slate-50 hover:text-slate-900 text-sm font-semibold transition-colors">
            <LogOut className="w-4 h-4 text-slate-400" /> Exit to User Portal
          </Link>
        </div>

        {/* Profile */}
        <div className="p-4 border-t border-slate-200/60">
          <div className="flex items-center gap-3 px-2 py-2 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer">
            <div className="h-9 w-9 rounded-full bg-red-100 flex items-center justify-center border border-red-200 shrink-0">
              <User className="h-4 w-4 text-red-600" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-slate-800 truncate">Super Admin</p>
              <p className="text-xs font-medium text-red-600 truncate">Full Access</p>
            </div>
          </div>
          <Link href="/login" className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold text-slate-500 hover:bg-red-50 hover:text-red-600 transition-colors mt-1">
            <LogOut className="h-4 w-4" /> Sign Out
          </Link>
        </div>
      </aside>

      {/* ─── Main Content ─── */}
      <main className="flex-1 overflow-auto">{children}</main>

    </div>
  );
}
