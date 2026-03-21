"use client"
import { useMutation } from "@tanstack/react-query";
import { SignUpData, LogInData } from "@/schema"
import { api } from "@/api/axios-config";


interface TransactionData {
    type: "INCOME" | "EXPENSE";
    amount: number;
    category: string;
    description?: string;
}
export const useRegister = () => {
    return useMutation({
        mutationFn:  async (data:SignUpData ) => {
            const response = await api.post("/api/auth/signup", data)
            return response.data
        }
    })
}

export const useLogin = () => {
    return useMutation({
        mutationFn: async (data: LogInData) => {
            const response = await api.post("/api/auth/login", data)
            return response.data
        }
    })
}

//add a transaction

export const useAddTransaction = () => {
    return useMutation({
        mutationFn: async (data: TransactionData) => {
            const response = await api.post("/api/transactions", data)
            return response.data
        }
    })
}
