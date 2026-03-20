"use client";

import { PiggyBank, TrendingUp, TrendingDown } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { SummaryCard } from "./summary-card";
import { useTransactionsInfo } from "@/hooks/use-dashboard";

const formatCurrency = (amount: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(amount);

export function SummaryCards() {
  const { summary, isLoading, error } = useTransactionsInfo();

  if (isLoading) {
    return (
      <div className="grid gap-4 md:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <Card key={i} className="rounded-xl">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <Skeleton className="h-4 w-[100px]" />
              <Skeleton className="h-8 w-8 rounded-full" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-8 w-[120px] mb-2" />
              <Skeleton className="h-4 w-[140px]" />
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 rounded-xl bg-red-50 text-red-600 border border-red-200">
        Failed to load summary data.
      </div>
    );
  }

  const cards = [
    {
      title: "Total Income",
      value: formatCurrency(summary.totalIncome),
      trend: { value: summary.incomeTrend.value, label: "vs last 30 days", isPositive: summary.incomeTrend.isPositive },
      icon: TrendingUp,
      topBorderColor: "border-t-emerald-500",
      iconColors: "text-emerald-600 bg-emerald-100 dark:bg-emerald-900/30",
      trendColors: "text-emerald-700 bg-emerald-50 dark:text-emerald-400 dark:bg-emerald-900/20",
    },
    {
      title: "Total Expenses",
      value: formatCurrency(summary.totalExpenses),
      trend: { value: summary.expenseTrend.value, label: "vs last 30 days", isPositive: summary.expenseTrend.isPositive },
      icon: TrendingDown,
      topBorderColor: "border-t-rose-500",
      iconColors: "text-rose-600 bg-rose-100 dark:bg-rose-900/30",
      trendColors: "text-rose-700 bg-rose-50 dark:text-rose-400 dark:bg-rose-900/20",
    },
    {
      title: "Net Savings",
      value: formatCurrency(summary.netSavings),
      trend: { value: "Target: $5k", label: "Goal reached!", isSpecial: true },
      icon: PiggyBank,
      topBorderColor: "border-t-indigo-500",
      iconColors: "text-indigo-600 bg-indigo-100 dark:bg-indigo-900/30",
      trendColors: "text-indigo-700 bg-indigo-50 dark:text-indigo-400 dark:bg-indigo-900/20",
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {cards.map((card, index) => (
        <SummaryCard key={index} {...card} />
      ))}
    </div>
  );
}