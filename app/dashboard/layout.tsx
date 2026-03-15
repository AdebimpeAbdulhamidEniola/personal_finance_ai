"use client";

import { useEffect, useState } from "react";
import AppSidebar from "@/components/common/layout/app-sidebar";
import MainLayout from "@/components/common/layout/main-layout";
import { SidebarProvider } from "@/components/ui/sidebar";
import { useAuthStore } from "@/store/useAuthSore";
import { useRouter } from "next/navigation";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const { token } = useAuthStore();
  const [isMounted, setIsMounted] = useState(false);
  
  // Hydration safety: ensure we only run the auth check
  // on the client after Zustand has hydrated from localStorage
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted && !token) {
      router.push("/signin");
    }
  }, [isMounted, token, router]);

  // Don't render the dashboard skeleton while redirecting or hydrating
  if (!isMounted || !token) {
    return null;
  }

  return (
    <SidebarProvider>
      <div className="flex h-screen w-full overflow-hidden">
        <AppSidebar />
        <MainLayout>{children}</MainLayout>
      </div>
    </SidebarProvider>
  );
}
