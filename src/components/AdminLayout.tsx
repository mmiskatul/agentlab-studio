"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Shield,
  Users,
  Bot,
  Activity,
  Settings,
  LogOut,
  LayoutDashboard
} from "lucide-react";
import { cn } from "@/lib/utils";

const adminNavItems = [
  { icon: LayoutDashboard, label: "Overview", href: "/admin-dashboard" },
  { icon: Users, label: "Manage Users", href: "/admin-dashboard/users" },
  { icon: Bot, label: "Platform Agents", href: "/admin-dashboard/agents" },
  { icon: Activity, label: "System Monitor", href: "/admin-dashboard/chats" },
  { icon: Settings, label: "Settings", href: "/admin-dashboard/settings" },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen bg-background text-foreground">
      <aside className="hidden md:flex w-64 flex-col border-r bg-card">
        <div className="p-6">
          <Link href="/admin-dashboard" className="flex items-center gap-2">
            <div className="gradient-primary rounded-lg p-1.5">
              <Shield className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-heading text-xl font-bold">Admin Portal</span>
          </Link>
        </div>
        <nav className="flex-1 px-3 space-y-1">
          {adminNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                pathname === item.href || (pathname.startsWith(item.href) && item.href !== "/admin-dashboard")
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="p-3 border-t">
          <Link href="/login" className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors">
            <LogOut className="h-4 w-4" /> Exit Admin
          </Link>
        </div>
      </aside>
      <main className="flex-1 overflow-auto">{children}</main>
    </div>
  );
}
