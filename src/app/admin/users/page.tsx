"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, SlidersHorizontal, UserPlus, Users } from "lucide-react";

import { cn } from "@/lib/utils";

type Role = "Creator" | "User" | "Admin";
type Plan = "Pro" | "Free" | "Enterprise";
type Status = "Active" | "Inactive" | "Banned";
type TabFilter = "All" | "Creators" | "Admins";

interface UserRecord {
  id: string;
  name: string;
  email: string;
  role: Role;
  plan: Plan;
  status: Status;
  joined: string;
  initials: string;
  avatarColor: string;
}

const usersData: UserRecord[] = [
  {
    id: "1",
    name: "Alice Freeman",
    email: "alice.f@example.com",
    role: "Creator",
    plan: "Pro",
    status: "Active",
    joined: "Oct 12, 2023",
    initials: "AF",
    avatarColor: "bg-blue-100 text-blue-700",
  },
  {
    id: "2",
    name: "John Doe",
    email: "j.doe@example.com",
    role: "User",
    plan: "Free",
    status: "Inactive",
    joined: "Nov 05, 2023",
    initials: "JD",
    avatarColor: "bg-slate-200 text-slate-700",
  },
  {
    id: "3",
    name: "Marcus Vance",
    email: "m.vance@example.com",
    role: "Admin",
    plan: "Enterprise",
    status: "Active",
    joined: "Jan 18, 2022",
    initials: "MV",
    avatarColor: "bg-cyan-100 text-cyan-700",
  },
  {
    id: "4",
    name: "Sarah Connor",
    email: "s.connor@example.com",
    role: "User",
    plan: "Pro",
    status: "Banned",
    joined: "Dec 01, 2023",
    initials: "SC",
    avatarColor: "bg-amber-100 text-amber-700",
  },
];

const totalUsers = 12458;
const activeToday = 3192;

function StatusBadge({ status }: { status: Status }) {
  const styles: Record<Status, string> = {
    Active: "border-emerald-100 bg-emerald-50 text-emerald-700",
    Inactive: "border-slate-200 bg-slate-100 text-slate-600",
    Banned: "border-blue-200 bg-blue-50 text-blue-700",
  };

  return (
    <span className={cn("inline-flex rounded-full border px-3 py-1 text-xs font-semibold", styles[status])}>
      {status}
    </span>
  );
}

export default function AdminUsersPage() {
  const [tab, setTab] = useState<TabFilter>("All");
  const [users, setUsers] = useState<UserRecord[]>(usersData);

  const filtered = users.filter((user) => {
    if (tab === "Creators") return user.role === "Creator";
    if (tab === "Admins") return user.role === "Admin";
    return true;
  });

  const handleAction = (id: string, action: "ban" | "unban") => {
    setUsers((previous) =>
      previous.map((user) =>
        user.id === id ? { ...user, status: action === "ban" ? "Banned" : "Active" } : user
      )
    );
  };

  return (
    <div className="min-h-full bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.06),_transparent_24%),linear-gradient(180deg,#fafafa_0%,#ffffff_100%)]">
      <div className="mx-auto flex w-full max-w-[1600px] flex-col gap-8 px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        {/* ── Page Title ── */}
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="font-heading text-[28px] font-bold text-slate-900 tracking-tight">Manage platform users</h1>
          <p className="text-slate-500 font-medium mt-1">Review access, creator readiness, and account state</p>
        </motion.div>

        {/* ── Stats Row ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.0 }}
            className="bg-white rounded-xl p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.03)]"
          >
            <div className="flex justify-between items-start mb-4">
              <p className="text-[13px] font-medium text-slate-500">Total Users</p>
              <div className="p-2.5 rounded-xl bg-slate-50">
                <Users className="h-5 w-5 text-blue-500" />
              </div>
            </div>
            <p className="font-heading text-[32px] font-bold text-slate-900 leading-none mb-4">{totalUsers.toLocaleString()}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.06 }}
            className="bg-white rounded-xl p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.03)]"
          >
            <div className="flex justify-between items-start mb-4">
              <p className="text-[13px] font-medium text-slate-500">Active Today</p>
              <div className="p-2.5 rounded-xl bg-slate-50">
                <Users className="h-5 w-5 text-cyan-500" />
              </div>
            </div>
            <p className="font-heading text-[32px] font-bold text-slate-900 leading-none mb-4">{activeToday.toLocaleString()}</p>
          </motion.div>
        </div>

        <motion.section
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.06, duration: 0.3 }}
          className="overflow-hidden rounded-xl border border-blue-100 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]"
        >
          <div className="flex flex-col gap-4 border-b border-slate-100 px-6 py-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap items-center gap-2">
              {(["All", "Creators", "Admins"] as TabFilter[]).map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setTab(item)}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                    tab === item ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-600 hover:bg-blue-50 hover:text-blue-700"
                  )}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                className="inline-flex h-10 items-center gap-2 rounded-full border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-600 transition-colors hover:border-blue-200 hover:text-blue-700"
              >
                <SlidersHorizontal className="h-4 w-4" />
                Filter
              </button>
              <button
                type="button"
                className="inline-flex h-10 items-center gap-2 rounded-full bg-blue-600 px-4 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
              >
                <UserPlus className="h-4 w-4" />
                Add user
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[820px]">
              <thead>
                <tr className="border-b border-slate-100 bg-slate-50/70 text-left text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">
                  <th className="px-6 py-4">User</th>
                  <th className="px-4 py-4">Role</th>
                  <th className="px-4 py-4">Plan</th>
                  <th className="px-4 py-4">Status</th>
                  <th className="px-4 py-4">Joined</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filtered.map((user) => (
                  <tr key={user.id} className="bg-white transition-colors hover:bg-blue-50/30">
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-4">
                        <div
                          className={cn(
                            "flex h-11 w-11 items-center justify-center rounded-2xl text-sm font-bold",
                            user.avatarColor
                          )}
                        >
                          {user.initials}
                        </div>
                        <div className="min-w-0">
                          <p className="truncate font-semibold text-slate-950">{user.name}</p>
                          <p className="truncate text-sm text-slate-500">{user.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-5 text-sm font-medium text-slate-700">{user.role}</td>
                    <td className="px-4 py-5 text-sm font-medium text-slate-700">{user.plan}</td>
                    <td className="px-4 py-5">
                      <StatusBadge status={user.status} />
                    </td>
                    <td className="px-4 py-5 text-sm text-slate-500">{user.joined}</td>
                    <td className="px-6 py-5">
                      <div className="flex items-center justify-end gap-5 text-sm font-semibold">
                        <Link href={`/admin/users/${user.id}`} className="text-slate-700 transition-colors hover:text-blue-700">
                          View
                        </Link>
                        {user.status === "Banned" ? (
                          <button
                            type="button"
                            onClick={() => handleAction(user.id, "unban")}
                            className="text-emerald-700 transition-colors hover:text-emerald-800"
                          >
                            Unban
                          </button>
                        ) : (
                          <button
                            type="button"
                            onClick={() => handleAction(user.id, "ban")}
                            className="text-blue-600 transition-colors hover:text-blue-700"
                          >
                            Ban
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex items-center justify-between border-t border-slate-100 bg-slate-50/60 px-6 py-4">
            <span className="text-sm text-slate-500">
              Showing 1 to {filtered.length} of {totalUsers.toLocaleString()} results
            </span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-400"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
