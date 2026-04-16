import AdminPanelLayout from "@/components/AdminPanelLayout";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <AdminPanelLayout>{children}</AdminPanelLayout>;
}
