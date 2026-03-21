"use client"
import { useQuery, useMutation } from "@tanstack/react-query";
import { api } from "@/api/axios-config";

type Transaction = {
  id: string;
  amount: number;
  type: "INCOME" | "EXPENSE";
  category: string;
  description?: string;
  createdAt: string;
  userId: string;
};

type SummaryData = {
  totalIncome: number;
  totalExpenses: number;
  netSavings: number;
  incomeTrend: TrendResult;
  expenseTrend: TrendResult;
};

type TrendResult = {
  value: string;
  isPositive: boolean;
};

interface TransactionData {
    type: "INCOME" | "EXPENSE";
    amount: number;
    category: string;
    description?: string;
}

const calculateTrend = (
  current: number,
  previous: number
): TrendResult => {
  if (previous === 0) return { value: current > 0 ? "+100%" : "0%", isPositive: current > 0 };
  const change = ((current - previous) / previous) * 100;
  const isPositive = change >= 0;
  return { value: `${isPositive ? "+" : ""}${change.toFixed(1)}%`, isPositive };
};

const calculateSummary = (transactions: Transaction[]): SummaryData => {
  const now = new Date();
  const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
  const sixtyDaysAgo = new Date(now.getTime() - 60 * 24 * 60 * 60 * 1000);

  const totalIncome = transactions.filter((t) => t.type === "INCOME").reduce((acc, t) => acc + t.amount, 0);

  const totalExpenses = transactions.filter((t) => t.type === "EXPENSE").reduce((acc, t) => acc + t.amount, 0);

  const currentPeriod = transactions.filter((t) => new Date(t.createdAt) >= thirtyDaysAgo);
  const previousPeriod = transactions.filter((t) => {
    const date = new Date(t.createdAt);
    return date >= sixtyDaysAgo && date < thirtyDaysAgo;
  });

  const sumByType = (txs: Transaction[], type: "INCOME" | "EXPENSE") =>
    txs.filter((t) => t.type === type).reduce((acc, t) => acc + t.amount, 0);

  return {
    totalIncome,
    totalExpenses,
    netSavings: totalIncome - totalExpenses,
    incomeTrend: calculateTrend(sumByType(currentPeriod, "INCOME"), sumByType(previousPeriod, "INCOME")),
    expenseTrend: calculateTrend(sumByType(currentPeriod, "EXPENSE"), sumByType(previousPeriod, "EXPENSE")),
  };
};

export const useTransactionsInfo = () => {
  const { data, isLoading, error } = useQuery<Transaction[]>({
    queryKey: ["transactions-info"],
    queryFn: () => api.get("/api/transactions").then((res) => res.data.data),
  });

  const summary = calculateSummary(data ?? []);

  return { data, summary, isLoading, error };
};



//add a transaction

export const useAddTransaction = () => {
    return useMutation({
        mutationFn: async (data: TransactionData) => {
            const response = await api.post("/api/transactions", data)
            return response.data
        }
    })
}




