"use client";

import { useTransactionsInfo } from "@/hooks/use-dashboard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRight, ArrowDownRight, PiggyBank, Target, TrendingUp, TrendingDown } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

export function SummaryCards() {
  const { data: transactions, isLoading, error } = useTransactionsInfo();

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

  // Calculate totals
  const totalIncome = transactions?.filter(t => t.type === "INCOME").reduce((acc, curr) => acc + curr.amount, 0) || 0;
  const totalExpenses = transactions?.filter(t => t.type === "EXPENSE").reduce((acc, curr) => acc + curr.amount, 0) || 0;
  const netSavings = totalIncome - totalExpenses;

  // Calculate trends vs last 30 days
  const now = new Date();
  const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
  const sixtyDaysAgo = new Date(now.getTime() - 60 * 24 * 60 * 60 * 1000);

  const currentPeriodTx = transactions?.filter(t => new Date(t.createdAt) >= thirtyDaysAgo) || [];
  const previousPeriodTx = transactions?.filter(t => {
    const date = new Date(t.createdAt);
    return date >= sixtyDaysAgo && date < thirtyDaysAgo;
  }) || [];

  const getTrend = (type: "INCOME" | "EXPENSE") => {
    const current = currentPeriodTx.filter(t => t.type === type).reduce((acc, curr) => acc + curr.amount, 0);
    const previous = previousPeriodTx.filter(t => t.type === type).reduce((acc, curr) => acc + curr.amount, 0);
    
    if (previous === 0) return { value: current > 0 ? "+100%" : "0%", isPositive: current > 0 };
    
    const percentageChange = ((current - previous) / previous) * 100;
    const isPositiveChange = percentageChange >= 0;
    
    // For expenses, a drop is generally "positive" financially
    // but the icon direction should mathematically represent the number.
    const displayPercentage = `${isPositiveChange ? "+" : ""}${percentageChange.toFixed(1)}%`;
    
    return { 
      value: displayPercentage, 
      isPositive: isPositiveChange 
    };
  };

  const incomeTrend = getTrend("INCOME");
  const expenseTrend = getTrend("EXPENSE");

  // Formatting currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  };

  const cards = [
    {
      title: "Total Income",
      value: formatCurrency(totalIncome),
      trend: { value: incomeTrend.value, label: "vs last 30 days", isPositive: incomeTrend.isPositive },
      icon: TrendingUp,
      topBorderColor: "border-t-emerald-500",
      iconColors: "text-emerald-600 bg-emerald-100 dark:bg-emerald-900/30",
      trendColors: "text-emerald-700 bg-emerald-50 dark:text-emerald-400 dark:bg-emerald-900/20"
    },
    {
      title: "Total Expenses",
      value: formatCurrency(totalExpenses),
      trend: { value: expenseTrend.value, label: "vs last 30 days", isPositive: expenseTrend.isPositive },
      icon: TrendingDown,
      topBorderColor: "border-t-rose-500",
      iconColors: "text-rose-600 bg-rose-100 dark:bg-rose-900/30",
      trendColors: "text-rose-700 bg-rose-50 dark:text-rose-400 dark:bg-rose-900/20"
    },
    {
      title: "Net Savings",
      value: formatCurrency(netSavings),
      trend: { value: "Target: $5k", label: "Goal reached!", isSpecial: true },
      icon: PiggyBank,
      topBorderColor: "border-t-indigo-500",
      iconColors: "text-indigo-600 bg-indigo-100 dark:bg-indigo-900/30",
      trendColors: "text-indigo-700 bg-indigo-50 dark:text-indigo-400 dark:bg-indigo-900/20"
    }
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {cards.map((card, index) => {
        const Icon = card.icon;
        return (
          <Card 
            key={index} 
            className={cn(
              "rounded-2xl border-t-4 overflow-hidden shadow-sm hover:shadow-md transition-shadow",
              card.topBorderColor
            )}
          >
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-slate-500 dark:text-slate-400">
                {card.title}
              </CardTitle>
              <div className={cn("p-2 rounded-lg", card.iconColors)}>
                <Icon className="h-4 w-4" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-2">
                {card.value}
              </div>
              <div className="flex items-center gap-2">
                <span className={cn(
                  "inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-xs font-semibold",
                  card.trendColors
                )}>
                  {!card.trend.isSpecial && (
                    card.trend.isPositive ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />
                  )}
                  {card.trend.isSpecial && card.title === "Net Savings" && <Target className="h-3 w-3 mr-0.5" />}
                  {card.trend.value}
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  {card.trend.label}
                </span>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
