"use client";

import Link from "next/link";
import { LayoutDashboard } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { NavMain } from "./nav-main";

const AppSidebar = () => {
  return (
    <Sidebar
      className="border-r-0"
      style={{ background: "var(--finance-slate-dark)", width: "220px" }}
      side="left"
    >
      {/* Logo */}
      <SidebarHeader className="px-5 py-5">
        <Link href="/dashboard" className="flex items-center gap-2.5">
          <div
            className="flex h-8 w-8 items-center justify-center rounded-lg"
            style={{ background: "var(--finance-primary-blue)" }}
          >
            <LayoutDashboard className="h-4 w-4 text-white" />
          </div>
          <span className="text-lg font-bold tracking-tight text-white">
            FinTrack
          </span>
        </Link>
      </SidebarHeader>

      {/* Nav menu */}
      <SidebarContent className="px-3 pt-2">
        <NavMain />
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;