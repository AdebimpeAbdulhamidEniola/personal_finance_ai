"use client";

import { useState, useMemo } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import {
  Search,
  Bell,
  ChevronDown,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Trash2,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { AddTransactionDialog } from "@/components/dashboard/add-transaction-dialog";
import { useTransactionsInfo } from "@/hooks/use-dashboard";
import { useDeleteTransaction } from "@/hooks/use-transaction";
import { cn } from "@/lib/utils";

// ─── Constants ────────────────────────────────────────────────────────────────
const PAGE_SIZE = 5;

const ALL_TYPES = ["All Types", "INCOME", "EXPENSE"] as const;
type TypeFilter = (typeof ALL_TYPES)[number];

const DATE_OPTIONS = [
  "All Time",
  "This Month",
  "Last Month",
  "Last 3 Months",
] as const;
type DateFilter = (typeof DATE_OPTIONS)[number];

// ─── Helpers ──────────────────────────────────────────────────────────────────
const fmt = (amount: number) =>
  "#" + new Intl.NumberFormat("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(amount);

const fmtDate = (dateStr: string) =>
  new Date(dateStr).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

const categoryIcon = (category: string): string => {
  const map: Record<string, string> = {
    food: "🍽️",
    "food & dining": "🍽️",
    transport: "🚗",
    transportation: "🚗",
    shopping: "🛍️",
    health: "💊",
    entertainment: "🎬",
    utilities: "💡",
    income: "💼",
    salary: "💰",
    freelance: "💻",
    education: "📚",
    travel: "✈️",
    housing: "🏠",
    savings: "🏦",
    "emergency fund": "🏦",
  };
  return map[category.toLowerCase()] ?? "💳";
};

const inDateRange = (dateStr: string, filter: DateFilter): boolean => {
  const d = new Date(dateStr);
  const now = new Date();
  if (filter === "All Time") return true;
  if (filter === "This Month")
    return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
  if (filter === "Last Month") {
    const lm = new Date(now.getFullYear(), now.getMonth() - 1, 1);
    return d.getMonth() === lm.getMonth() && d.getFullYear() === lm.getFullYear();
  }
  if (filter === "Last 3 Months") {
    const cutoff = new Date(now.getFullYear(), now.getMonth() - 3, 1);
    return d >= cutoff;
  }
  return true;
};

// ─── Small Dropdown ───────────────────────────────────────────────────────────
function FilterDropdown({
  options,
  value,
  onChange,
  icon,
}: {
  options: readonly string[];
  value: string;
  onChange: (v: string) => void;
  icon?: React.ReactNode;
}) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="appearance-none flex items-center gap-2 h-9 pl-3 pr-8 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm font-medium text-slate-700 dark:text-slate-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-400"
      >
        {options.map((o) => (
          <option key={o} value={o}>
            {o === "INCOME" ? "Income" : o === "EXPENSE" ? "Expense" : o}
          </option>
        ))}
      </select>
      <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-slate-400">
        {icon ?? <ChevronDown className="h-4 w-4" />}
      </span>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export const TransactionsView = () => {
  const { data, isLoading, error } = useTransactionsInfo();
  const { mutateAsync: deleteTransaction, isPending: isDeleting } = useDeleteTransaction();
  const queryClient = useQueryClient();

  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState<TypeFilter>("All Types");
  const [categoryFilter, setCategoryFilter] = useState("All Categories");
  const [dateFilter, setDateFilter] = useState<DateFilter>("This Month");
  const [page, setPage] = useState(1);

  // Unique categories derived from data
  const categories = useMemo(() => {
    const cats = Array.from(
      new Set((data ?? []).map((t) => t.category))
    ).sort();
    return ["All Categories", ...cats];
  }, [data]);

  // Filtered + sorted list
  const filtered = useMemo(() => {
    return (data ?? [])
      .filter((t) => {
        if (typeFilter !== "All Types" && t.type !== typeFilter) return false;
        if (
          categoryFilter !== "All Categories" &&
          t.category.toLowerCase() !== categoryFilter.toLowerCase()
        )
          return false;
        if (!inDateRange(t.createdAt, dateFilter)) return false;
        const q = search.toLowerCase();
        if (
          q &&
          !t.category.toLowerCase().includes(q) &&
          !(t.description ?? "").toLowerCase().includes(q)
        )
          return false;
        return true;
      })
      .sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
  }, [data, typeFilter, categoryFilter, dateFilter, search]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <div className="p-6 lg:p-10 space-y-6 animate-in fade-in duration-500">
      {/* ── Page Header ───────────────────────────────────────────── */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
          Transactions
        </h1>
        <div className="flex items-center gap-3">
          {/* Search */}
          <div className="relative hidden sm:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <Input
              placeholder="Search transactions..."
              value={search}
              onChange={(e) => { setSearch(e.target.value); setPage(1); }}
              className="pl-9 w-56 h-9 rounded-lg bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-sm"
            />
          </div>

          {/* Bell */}
          <button className="flex items-center justify-center h-9 w-9 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 transition-colors">
            <Bell className="h-4 w-4" />
          </button>

          <AddTransactionDialog />
        </div>
      </div>

      {/* ── Filter Bar ────────────────────────────────────────────── */}
      <div className="flex flex-wrap items-center gap-2">
        <FilterDropdown
          options={ALL_TYPES}
          value={typeFilter}
          onChange={(v) => { setTypeFilter(v as TypeFilter); setPage(1); }}
        />
        <FilterDropdown
          options={categories}
          value={categoryFilter}
          onChange={(v) => { setCategoryFilter(v); setPage(1); }}
        />
        <FilterDropdown
          options={DATE_OPTIONS}
          value={dateFilter}
          onChange={(v) => { setDateFilter(v as DateFilter); setPage(1); }}
          icon={<CalendarDays className="h-4 w-4" />}
        />
      </div>

      {/* ── Table Card ────────────────────────────────────────────── */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 overflow-hidden">
        {/* Table header */}
        <div className="grid grid-cols-[1fr_2fr_2fr_1fr_1fr_auto] gap-4 px-6 py-3 border-b border-slate-100 dark:border-slate-800">
          {["Date", "Category", "Description", "Type", "Amount", "Actions"].map(
            (h) => (
              <span
                key={h}
                className={cn(
                  "text-xs font-semibold uppercase tracking-wide text-slate-400 dark:text-slate-500",
                  h === "Amount" && "text-right",
                  h === "Actions" && "text-right"
                )}
              >
                {h}
              </span>
            )
          )}
        </div>

        {/* Loading */}
        {isLoading && (
          <div className="divide-y divide-slate-50 dark:divide-slate-800">
            {Array.from({ length: PAGE_SIZE }).map((_, i) => (
              <div
                key={i}
                className="grid grid-cols-[1fr_2fr_2fr_1fr_1fr_auto] gap-4 px-6 py-4 items-center"
              >
                {[...Array(5)].map((__, j) => (
                  <Skeleton key={j} className="h-4 w-full rounded" />
                ))}
                <Skeleton className="h-4 w-8 rounded" />
              </div>
            ))}
          </div>
        )}

        {/* Error */}
        {error && !isLoading && (
          <p className="py-16 text-center text-sm text-red-500">
            Failed to load transactions.
          </p>
        )}

        {/* Rows */}
        {!isLoading && !error && (
          <>
            {paginated.length === 0 ? (
              <p className="py-16 text-center text-sm text-slate-400">
                No transactions match your filters.
              </p>
            ) : (
              <ul className="divide-y divide-slate-50 dark:divide-slate-800/60">
                {paginated.map((tx) => {
                  const isIncome = tx.type === "INCOME";
                  return (
                    <li
                      key={tx.id}
                      className="grid grid-cols-[1fr_2fr_2fr_1fr_1fr_auto] gap-4 px-6 py-4 items-center hover:bg-slate-50/60 dark:hover:bg-slate-800/40 transition-colors"
                    >
                      {/* Date */}
                      <span className="text-sm text-slate-500 dark:text-slate-400 whitespace-nowrap">
                        {fmtDate(tx.createdAt)}
                      </span>

                      {/* Category */}
                      <div className="flex items-center gap-2.5 min-w-0">
                        <span
                          className={cn(
                            "flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full text-sm",
                            isIncome
                              ? "bg-emerald-50 dark:bg-emerald-900/30"
                              : "bg-slate-100 dark:bg-slate-800"
                          )}
                        >
                          {categoryIcon(tx.category)}
                        </span>
                        <span className="text-sm font-medium text-slate-800 dark:text-slate-100 truncate capitalize">
                          {tx.category}
                        </span>
                      </div>

                      {/* Description */}
                      <span className="text-sm text-slate-500 dark:text-slate-400 truncate">
                        {tx.description || "—"}
                      </span>

                      {/* Type badge */}
                      <div>
                        <Badge
                          variant="outline"
                          className={cn(
                            "border-0 text-xs font-semibold",
                            isIncome
                              ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400"
                              : "bg-rose-100 text-rose-600 dark:bg-rose-900/40 dark:text-rose-400"
                          )}
                        >
                          {isIncome ? "Income" : "Expense"}
                        </Badge>
                      </div>

                      {/* Amount */}
                      <span
                        className={cn(
                          "text-sm font-semibold tabular-nums text-right",
                          isIncome
                            ? "text-emerald-600 dark:text-emerald-400"
                            : "text-slate-700 dark:text-slate-300"
                        )}
                      >
                        {isIncome ? "+" : "-"}
                        {fmt(tx.amount)}
                      </span>

                      {/* Actions */}
                      <button
                        className="flex items-center justify-center h-7 w-7 rounded-md text-slate-400 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-900/20 transition-colors disabled:opacity-40"
                        title="Delete transaction"
                        disabled={isDeleting}
                        onClick={async () => {
                          try {
                            await deleteTransaction(tx.id);
                            await queryClient.invalidateQueries({ queryKey: ["transactions-info"] });
                            toast.success("Transaction deleted");
                          } catch {
                            toast.error("Failed to delete transaction");
                          }
                        }}
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </li>
                  );
                })}
              </ul>
            )}

            {/* ── Footer / Pagination ─────────────────────────────── */}
            {filtered.length > 0 && (
              <div className="flex items-center justify-between px-6 py-4 border-t border-slate-100 dark:border-slate-800">
                <span className="text-sm text-slate-500 dark:text-slate-400">
                  Showing {Math.min((page - 1) * PAGE_SIZE + 1, filtered.length)}–
                  {Math.min(page * PAGE_SIZE, filtered.length)} of {filtered.length}{" "}
                  results
                </span>

                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                    disabled={page === 1}
                    className="flex items-center justify-center h-8 w-8 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>

                  {Array.from({ length: totalPages }, (_, i) => i + 1)
                    .filter(
                      (p) =>
                        p === 1 || p === totalPages || Math.abs(p - page) <= 1
                    )
                    .reduce<(number | "…")[]>((acc, p, idx, arr) => {
                      if (idx > 0 && (arr[idx - 1] as number) + 1 < p)
                        acc.push("…");
                      acc.push(p);
                      return acc;
                    }, [])
                    .map((p, i) =>
                      p === "…" ? (
                        <span
                          key={`ellipsis-${i}`}
                          className="px-1 text-sm text-slate-400"
                        >
                          …
                        </span>
                      ) : (
                        <button
                          key={p}
                          onClick={() => setPage(p as number)}
                          className={cn(
                            "flex items-center justify-center h-8 w-8 rounded-lg border text-sm font-medium transition-colors",
                            page === p
                              ? "border-indigo-500 bg-indigo-50 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400"
                              : "border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                          )}
                        >
                          {p}
                        </button>
                      )
                    )}

                  <button
                    onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                    disabled={page === totalPages}
                    className="flex items-center justify-center h-8 w-8 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};
