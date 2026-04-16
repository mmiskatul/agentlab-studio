"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Bot,
  LayoutDashboard,
  MessageSquare,
  Settings,
  LogOut,
  PlusCircle,
  Database,
  Compass,
  History,
  LineChart,
  User,
  Zap
} from "lucide-react";
import { cn } from "@/lib/utils";

export type UserRole = "user" | "creator";

const userNavItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
  { icon: Compass, label: "Explore Agents", href: "/agents" },
  { icon: MessageSquare, label: "Chat", href: "/chat" },
  { icon: History, label: "History", href: "/history" },
  { icon: Settings, label: "Settings", href: "/settings" },
];

const creatorNavItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
  { icon: Bot, label: "My Agents", href: "/manage-agents" },
  { icon: PlusCircle, label: "Creator Studio", href: "/creator" },
  { icon: Database, label: "Knowledge Base", href: "/knowledge" },
  { icon: MessageSquare, label: "Test Chats", href: "/chat" },
  { icon: LineChart, label: "Analytics", href: "/analytics" },
  { icon: Settings, label: "Settings", href: "/settings" },
];

export default function DashboardLayout({
  children,
  role = "user",
  onRoleChange,
}: {
  children: React.ReactNode;
  role?: UserRole;
  onRoleChange?: (r: UserRole) => void;
}) {
  const pathname = usePathname();
  const navItems = role === "creator" ? creatorNavItems : userNavItems;

  return (
    <div className="flex h-screen bg-[#fafafa] font-body overflow-hidden text-slate-900 selection:bg-blue-100">
      
      {/* Sidebar */}
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
              <Link
                key={item.href}
                href={item.href}
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

        {/* Role Switcher (Mock purpose) */}
        {onRoleChange && (
           <div className="px-6 py-4 border-t border-slate-100 bg-slate-50/50">
             <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 flex items-center justify-between">
                <span>View As</span>
                <Zap className="h-3 w-3 text-amber-500" />
             </div>
             <div className="flex bg-slate-200/50 p-1 rounded-xl">
               <button 
                 onClick={() => onRoleChange("user")}
                 className={cn("flex-1 text-[11px] font-bold py-1.5 rounded-lg transition-all", role === "user" ? "bg-white shadow-sm text-slate-800" : "text-slate-500 hover:text-slate-700")}
               >
                 End User
               </button>
               <button 
                 onClick={() => onRoleChange("creator")}
                 className={cn("flex-1 text-[11px] font-bold py-1.5 rounded-lg transition-all", role === "creator" ? "bg-white shadow-sm text-slate-800" : "text-slate-500 hover:text-slate-700")}
               >
                 Creator
               </button>
             </div>
           </div>
        )}

        {/* Profile Bottom */}
        <div className="p-4 border-t border-slate-200/60">
           <div className="flex items-center gap-3 px-2 py-2 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer group">
              <div className="h-9 w-9 rounded-full bg-indigo-100 flex items-center justify-center border border-indigo-200 shrink-0">
                 <User className="h-4 w-4 text-indigo-600" />
              </div>
              <div className="flex-1 min-w-0">
                 <p className="text-sm font-bold text-slate-800 truncate">Alex Developer</p>
                 <p className="text-xs font-medium text-slate-500 truncate">{role === "creator" ? "Pro Plan" : "Free Plan"}</p>
              </div>
           </div>
           <button className="mt-2 flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold text-slate-500 hover:bg-red-50 hover:text-red-600 transition-colors">
              <LogOut className="h-4 w-4" /> Sign Out
           </button>
        </div>

      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-auto relative">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.015] pointer-events-none mix-blend-overlay"></div>
        {children}
      </main>

    </div>
  );
}
