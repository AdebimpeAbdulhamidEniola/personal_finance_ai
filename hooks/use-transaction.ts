"use client"
import { useMutation } from "@tanstack/react-query";
import { api } from "@/api/axios-config";

//hook to delete a  transaction
export const useDeleteTransaction = () => {
    return useMutation({
        mutationFn: async (id: string) => {
            const response = await api.delete(`/api/transactions/${id}`);
            return response.data;
        },
    });
}