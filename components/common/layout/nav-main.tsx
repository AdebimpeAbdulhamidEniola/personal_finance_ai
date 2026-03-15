"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  ArrowLeftRight,
  PieChart,
  BarChart2,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
} from "@/components/ui/sidebar";



export type NavItem = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export const mainMenu: NavItem[] = [
  { label: "Dashboard",    href: "/dashboard",              icon: LayoutDashboard },
  { label: "Transactions", href: "/dashboard/transactions", icon: ArrowLeftRight  },
  { label: "Budgets",      href: "/dashboard/budgets",      icon: PieChart        },
  { label: "Reports",      href: "/dashboard/reports",      icon: BarChart2       },
];

export const toolsMenu: NavItem[] = [
  { label: "AI Insights", href: "/dashboard/ai-insights", icon: Sparkles },
];



function SidebarNavItem({ label, href, icon: Icon }: NavItem) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <SidebarMenuItem>
      <SidebarMenuButton
        asChild
        isActive={isActive}
        className="h-10 rounded-lg px-3 transition-all duration-150"
        style={
          isActive
            ? { background: "var(--finance-primary-blue)", color: "#ffffff" }
            : { color: "var(--finance-slate-light)" }
        }
      >
        <Link href={href} className="flex items-center gap-3">
          <Icon
            className="h-4 w-4 shrink-0"
            style={isActive ? { color: "#ffffff" } : { color: "var(--finance-slate-light)" }}
          />
          <span className="text-sm font-medium">{label}</span>
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
}


type SidebarNavProps = {
  items: NavItem[];
  label?: string;
  className?: string;
};

function SidebarNav({ items, label, className }: SidebarNavProps) {
  return (
    <SidebarGroup className={`p-0${className ? ` ${className}` : ""}`}>
      {label && (
        <SidebarGroupLabel
          className="mb-1 px-3 text-[10px] font-semibold uppercase tracking-widest"
          style={{ color: "var(--finance-slate-medium)" }}
        >
          {label}
        </SidebarGroupLabel>
      )}
      <SidebarGroupContent>
        <SidebarMenu className="gap-1">
          {items.map((item) => (
            <SidebarNavItem key={item.href} {...item} />
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}



export function NavMain() {
  return (
    <>
      <SidebarNav items={mainMenu} />
      <SidebarNav items={toolsMenu} label="Tools" className="mt-6" />
    </>
  );
}
