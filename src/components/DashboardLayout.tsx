import { Link, useLocation } from "react-router-dom";
import { Bot, LayoutDashboard, MessageSquare, Cpu, Settings, LogOut, PlusCircle, Database, Shield } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
  { icon: Cpu, label: "Agents", href: "/agents" },
  { icon: MessageSquare, label: "Chat", href: "/chat" },
  { icon: PlusCircle, label: "Creator Studio", href: "/creator" },
  { icon: Database, label: "Knowledge Base", href: "/knowledge" },
  { icon: Shield, label: "Admin", href: "/admin" },
  { icon: Settings, label: "Settings", href: "/settings" },
];

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  return (
    <div className="flex min-h-screen bg-background">
      <aside className="hidden md:flex w-64 flex-col border-r bg-card">
        <div className="p-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="gradient-primary rounded-lg p-1.5"><Bot className="h-5 w-5 text-primary-foreground" /></div>
            <span className="font-heading text-xl font-bold">AgentLab</span>
          </Link>
        </div>
        <nav className="flex-1 px-3 space-y-1">
          {navItems.map(item => (
            <Link key={item.href} to={item.href}
              className={cn("flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                location.pathname === item.href ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-muted hover:text-foreground")}>
              <item.icon className="h-4 w-4" />
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="p-3 border-t">
          <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors">
            <LogOut className="h-4 w-4" /> Sign Out
          </button>
        </div>
      </aside>
      <main className="flex-1 overflow-auto">{children}</main>
    </div>
  );
};

export default DashboardLayout;
