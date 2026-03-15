"use client"
import { useQuery } from "@tanstack/react-query";
import { api } from "@/api/axios-config";

export interface Transaction {
    id: string;
    userId: string;
    amount: number;
    category: string;
    type: "INCOME" | "EXPENSE" | "SAVINGS";
    description?: string | null;
    createdAt: string;
    updatedAt: string;
}


//api/transactions
export const useTransactionsInfo = () => {
    const {data, isLoading, error } = useQuery({
        queryKey: ["transactions-info"],
        queryFn: () => api.get<{data: Transaction[]}>("/api/transactions").then((res) => res.data.data),
    });

    return { data, isLoading, error };
};  
