"use client";

import { SidebarTrigger } from "@/components/ui/sidebar";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <main className="flex flex-1 flex-col h-full overflow-hidden">
      {/* Top bar with sidebar toggle */}
      <header className="flex items-center h-14 px-4 border-b border-white/10 shrink-0"
        style={{ background: "var(--finance-slate-dark)" }}>
        <SidebarTrigger className="text-white hover:bg-white/10 rounded-md p-1.5 transition-colors" />
      </header>

      {/* Page content */}
      <div className="flex-1 overflow-auto">
        {children}
      </div>
    </main>
  );
}
