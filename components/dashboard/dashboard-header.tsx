"use client";

import { Calendar } from "lucide-react";

export const DashboardHeader = () => {
  const today = new Date().toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
          Dashboard
        </h1>
        <div className="flex items-center gap-2 mt-1 text-slate-500 dark:text-slate-400">
          <Calendar className="h-4 w-4" />
          <span className="text-sm font-medium">{today}</span>
        </div>
      </div>
    </div>
  );
}
