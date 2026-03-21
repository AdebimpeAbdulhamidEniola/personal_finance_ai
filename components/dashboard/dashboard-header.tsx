"use client";

import { useAuthStore } from "@/store/useAuthSore";
import { Button } from "@/components/ui/button";
import { AddTransactionDialog } from "./add-transaction-dialog";

export const DashboardHeader = () => {
  const { name } = useAuthStore();

  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
          Welcome back, {name || 'User'}!
        </h1>
        {/* User requested NOT to include the bottom text "Here's your financial report..." */}
      </div>
      <div className="flex items-center gap-3">
        <AddTransactionDialog />
      </div>
    </div>
  );
}
