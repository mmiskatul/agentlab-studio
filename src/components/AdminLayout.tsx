"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  Bot,
  Activity,
  Settings,
  LogOut,
  Shield,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { icon: LayoutDashboard, label: "Overview",       href: "/admin-dashboard" },
  { icon: Users,           label: "Manage Users",   href: "/admin-dashboard/users" },
  { icon: Bot,             label: "All Agents",     href: "/admin-dashboard/agents" },
  { icon: Activity,        label: "System Monitor", href: "/admin-dashboard/chats" },
  { icon: Settings,        label: "Platform Settings", href: "/admin-dashboard/settings" },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  if (pathname === "/admin-dashboard") {
    return <>{children}</>;
  }

  return (
    <div className="flex h-screen bg-[#fafafa] font-body overflow-hidden text-slate-900">

      <aside className="hidden md:flex w-72 flex-col border-r border-slate-200/60 bg-white shadow-sm z-10">

        {/* Brand */}
        <div className="p-6 h-20 flex items-center border-b border-slate-100">
          <Link href="/admin-dashboard" className="flex items-center gap-2 group">
            <div className="bg-gradient-to-tr from-red-600 to-rose-500 rounded-xl p-2 shadow-sm group-hover:shadow-md transition-shadow">
              <Shield className="h-5 w-5 text-white" />
            </div>
            <div>
              <span className="font-heading text-xl font-extrabold tracking-tight text-slate-900">AgentLab</span>
              <div className="text-[9px] font-bold uppercase tracking-[0.15em] text-red-600 -mt-0.5">Admin Portal</div>
            </div>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-1.5 overflow-y-auto">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 px-2">Administration</div>
          {navItems.map((item) => {
            const isActive = pathname === item.href ||
              (pathname.startsWith(item.href) && item.href !== "/admin-dashboard");
            return (
              <Link key={item.href} href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold transition-all duration-200",
                  isActive
                    ? "bg-red-50 text-red-700 shadow-sm border border-red-100/50"
                    : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                )}
              >
                <item.icon className={cn("h-4 w-4", isActive ? "text-red-600" : "text-slate-400")} />
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Switch Portal */}
        <div className="px-4 py-3 border-t border-slate-100">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 px-2">Exit Admin</div>
          <Link href="/dashboard"
            className="flex items-center gap-2 px-3 py-2 rounded-xl text-slate-500 hover:bg-red-50 hover:text-red-600 transition-colors text-sm font-semibold"
          >
            <LogOut className="h-4 w-4 text-slate-400" /> Exit to User Portal
          </Link>
        </div>

        {/* Profile */}
        <div className="p-4 border-t border-slate-200/60">
          <div className="flex items-center gap-3 px-2 py-2 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer mb-2">
            <div className="h-9 w-9 rounded-full bg-red-100 flex items-center justify-center border border-red-200 shrink-0">
              <Shield className="h-4 w-4 text-red-600" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-slate-800 truncate">Super Admin</p>
              <p className="text-xs font-medium text-red-600 truncate">Full Access</p>
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
