"use client";

import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import { useTransactionsInfo } from "@/hooks/use-dashboard";
import { cn } from "@/lib/utils";
import Link from "next/link";

const RECENT_COUNT = 5;

const formatCurrency = (amount: number) =>
  "#" + new Intl.NumberFormat("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(amount);

const formatDate = (dateStr: string) =>
  new Date(dateStr).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

/** Pick a simple emoji icon based on category name */
const categoryIcon = (category: string): string => {
  const map: Record<string, string> = {
    food: "🍽️",
    transport: "🚗",
    shopping: "🛍️",
    health: "💊",
    entertainment: "🎬",
    utilities: "💡",
    income: "💼",
    salary: "💼",
    freelance: "💻",
    education: "📚",
    travel: "✈️",
    housing: "🏠",
  };
  return map[category.toLowerCase()] ?? "💳";
};

export const RecentTransactions = () => {
  const { data, isLoading, error } = useTransactionsInfo();

  if (isLoading) {
    return (
      <Card className="rounded-2xl shadow-sm">
        <CardHeader className="flex flex-row items-center justify-between pb-4">
          <CardTitle className="text-base font-semibold text-slate-800 dark:text-slate-100">
            Recent Transactions
          </CardTitle>
          <Skeleton className="h-4 w-16" />
        </CardHeader>
        <CardContent className="space-y-4">
          {Array.from({ length: RECENT_COUNT }).map((_, i) => (
            <div key={i} className="flex items-center gap-4">
              <Skeleton className="h-9 w-9 rounded-full" />
              <div className="flex-1 space-y-1.5">
                <Skeleton className="h-3.5 w-36" />
                <Skeleton className="h-3 w-20" />
              </div>
              <Skeleton className="h-5 w-16 rounded-full" />
              <Skeleton className="h-3.5 w-20" />
              <Skeleton className="h-4 w-16" />
            </div>
          ))}
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card className="rounded-2xl shadow-sm">
        <CardContent className="flex items-center justify-center py-10 text-sm text-red-500">
          Failed to load transactions.
        </CardContent>
      </Card>
    );
  }

  const recent = (data ?? [])
    .slice()
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, RECENT_COUNT);

  return (
    <Card className="rounded-2xl shadow-sm hover:shadow-md transition-shadow">
      {/* Animated top border matching the design system */}
      <div className="absolute top-0 left-0 right-0 h-[3px] overflow-hidden rounded-t-2xl">
        <div
          className="h-full w-[200%] animate-[slide_3s_linear_infinite]"
          style={{
            background:
              "linear-gradient(90deg, transparent, #6366f1, #10b981, #6366f1, transparent)",
          }}
        />
      </div>

      <CardHeader className="flex flex-row items-center justify-between pb-2 pt-6">
        <CardTitle className="text-base font-semibold text-slate-800 dark:text-slate-100">
          Recent Transactions
        </CardTitle>
        <Link
          href="/transactions"
          className="text-sm font-medium text-indigo-500 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
        >
          View All
        </Link>
      </CardHeader>

      <CardContent className="pt-2">
        {/* Table header */}
        <div className="grid grid-cols-[2fr_1fr_1fr_auto] gap-4 pb-2 border-b border-slate-100 dark:border-slate-800">
          {["Transaction", "Category", "Date", "Amount"].map((h) => (
            <span
              key={h}
              className={cn(
                "text-xs font-semibold uppercase tracking-wide text-slate-400 dark:text-slate-500",
                h === "Amount" && "text-right"
              )}
            >
              {h}
            </span>
          ))}
        </div>

        {recent.length === 0 ? (
          <p className="py-10 text-center text-sm text-slate-400">No transactions yet.</p>
        ) : (
          <ul className="divide-y divide-slate-50 dark:divide-slate-800/60">
            {recent.map((tx) => {
              const isIncome = tx.type === "INCOME";
              return (
                <li
                  key={tx.id}
                  className="grid grid-cols-[2fr_1fr_1fr_auto] gap-4 items-center py-3.5 group"
                >
                  {/* Name + icon */}
                  <div className="flex items-center gap-3 min-w-0">
                    <span
                      className={cn(
                        "flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-full text-base",
                        isIncome
                          ? "bg-emerald-50 dark:bg-emerald-900/30"
                          : "bg-slate-100 dark:bg-slate-800"
                      )}
                    >
                      {categoryIcon(tx.category)}
                    </span>
                    <span className="text-sm font-medium text-slate-800 dark:text-slate-100 truncate">
                      {tx.description || tx.category}
                    </span>
                  </div>

                  {/* Category badge */}
                  <Badge
                    variant="outline"
                    className={cn(
                      "w-fit text-xs font-medium capitalize border-0",
                      isIncome
                        ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400"
                        : "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400"
                    )}
                  >
                    {tx.category}
                  </Badge>

                  {/* Date */}
                  <span className="text-sm text-slate-500 dark:text-slate-400">
                    {formatDate(tx.createdAt)}
                  </span>

                  {/* Amount */}
                  <div
                    className={cn(
                      "flex items-center justify-end gap-1 text-sm font-semibold tabular-nums",
                      isIncome
                        ? "text-emerald-600 dark:text-emerald-400"
                        : "text-slate-700 dark:text-slate-300"
                    )}
                  >
                    {isIncome ? (
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    ) : (
                      <ArrowDownRight className="w-3.5 h-3.5" />
                    )}
                    {isIncome ? "+" : "-"}
                    {formatCurrency(tx.amount)}
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </CardContent>
    </Card>
  );
};
