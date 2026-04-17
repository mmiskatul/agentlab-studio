"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Bell,
  Bot,
  FileStack,
  HelpCircle,
  LayoutDashboard,
  LogOut,
  Menu,
  Search,
  Settings,
  Sparkles,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const navItems = [
  { icon: LayoutDashboard, label: "Overview", href: "/admin/dashboard" },
  { icon: Users, label: "Manage user", href: "/admin/users" },
  { icon: Bot, label: "Agents", href: "/admin/agents" },
  { icon: Sparkles, label: "Analytics", href: "/admin/usage" },
  { icon: Settings, label: "Settings", href: "/admin/settings" },
];

const pageTitles: Record<string, string> = {
  "/admin/dashboard": "DASHBOARD",
  "/admin/users": "EDITORIAL",
  "/admin/agents": "ARCHIVE",
  "/admin/usage": "ANALYTICS",
  "/admin/settings": "SETTINGS",
};

export default function AdminPanelLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const pageLabel = pageTitles[pathname] ?? "ADMIN";
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-[#fafafa] font-body text-slate-900">
      <aside className="hidden w-72 shrink-0 flex-col border-r border-blue-100 bg-white/95 lg:flex">
        <div className="border-b border-blue-100 px-6 py-7">
          <Link href="/admin/dashboard" className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-600 text-white shadow-[0_16px_34px_rgba(225,29,72,0.35)]">
              <Bot className="h-5 w-5" />
            </span>
            <div>
              <p className="font-heading text-[22px] font-extrabold leading-tight tracking-tight text-slate-950">
                AgentLab
              </p>
              <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-blue-500">
                Admin console
              </p>
            </div>
          </Link>
        </div>

        <nav className="flex-1 space-y-1 px-4 py-6">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/admin/dashboard" && pathname.startsWith(item.href));

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "group relative flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold transition-all duration-150",
                  isActive
                    ? "bg-blue-50 text-blue-700"
                    : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                )}
              >
                {isActive && (
                  <span className="absolute left-0 top-1/2 h-8 w-1 -translate-y-1/2 rounded-r-full bg-blue-500" />
                )}
                <item.icon
                  className={cn(
                    "h-4 w-4 shrink-0",
                    isActive ? "text-blue-600" : "text-slate-400 group-hover:text-slate-600"
                  )}
                />
                {item.label}
              </Link>
            );
          })}
        </nav>


        {/* Profile Section */}
        <div className="relative border-t border-blue-100 px-4 py-5">
          {/* Backdrop (closes menu when clicking outside) */}
          {isProfileMenuOpen && (
             <div className="fixed inset-0 z-40" onClick={() => setIsProfileMenuOpen(false)} />
          )}
          
          {/* Menu */}
          {isProfileMenuOpen && (
            <div className="absolute bottom-full left-4 mb-2 w-[calc(100%-32px)] z-50 rounded-2xl border border-slate-200 bg-white p-2 shadow-xl shadow-slate-200/50">
              <Link
                href="/support"
                className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold text-slate-600 transition-colors hover:bg-slate-50 hover:text-slate-900"
              >
                <HelpCircle className="h-4 w-4 text-slate-400" />
                Support
              </Link>
              <Link
                href="/login"
                className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold text-slate-600 transition-colors hover:bg-red-50 hover:text-red-600"
              >
                <LogOut className="h-4 w-4 text-slate-400" />
                Sign out
              </Link>
            </div>
          )}

          <button 
            type="button"
            onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
            className={cn(
              "flex w-full items-center gap-3 rounded-2xl border px-3 py-3 text-left transition-all z-50 relative", 
              isProfileMenuOpen ? "border-blue-200 bg-blue-50 shadow-sm" : "border-transparent hover:bg-slate-50"
            )}
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-600 text-sm font-bold text-white shadow-sm ring-2 ring-white">
              AU
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-bold text-slate-900 leading-tight">Admin User</p>
              <p className="truncate text-xs font-medium text-slate-500 mt-0.5">Editorial admin</p>
            </div>
          </button>
        </div>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="sticky top-0 z-20 border-b border-blue-100 bg-[#fafafa]/90 backdrop-blur">
          <div className="mx-auto flex h-16 w-full max-w-[1600px] items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
            <div className="flex min-w-0 flex-1 items-center gap-3">
              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-500 lg:hidden"
                aria-label="Open navigation"
              >
                <Menu className="h-4 w-4" />
              </button>
              <div className="relative hidden w-full max-w-md sm:block">
                <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <Input
                  placeholder="Search entries, creators, or metrics..."
                  className="h-11 rounded-full border-slate-200 bg-white pl-10 text-sm shadow-none placeholder:text-slate-400 focus-visible:ring-blue-200"
                />
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <span className="hidden rounded-full border border-slate-200 bg-white px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500 xl:inline-flex">
                {pageLabel}
              </span>
              <button
                type="button"
                className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition-colors hover:text-blue-600"
                aria-label="Notifications"
              >
                <Bell className="h-4 w-4" />
                <span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-blue-500" />
              </button>
              <button
                type="button"
                className="hidden h-10 rounded-full border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-600 transition-colors hover:text-blue-600 md:inline-flex md:items-center"
              >
                Support
              </button>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-600 text-sm font-bold text-white shadow-sm">
                AU
              </div>
            </div>
          </div>
        </header>

        <div className="border-b border-blue-100 bg-white lg:hidden">
          <div className="mx-auto flex w-full max-w-[1600px] gap-2 overflow-x-auto px-4 py-3 sm:px-6">
            {navItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/admin/dashboard" && pathname.startsWith(item.href));

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-colors",
                    isActive
                      ? "border-blue-200 bg-blue-50 text-blue-700"
                      : "border-slate-200 bg-white text-slate-600"
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>

        <main className="min-h-0 flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
