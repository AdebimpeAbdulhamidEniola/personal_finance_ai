"use client"
import { useQuery } from "@tanstack/react-query";
import { api } from "@/api/axios-config";


//function to get AI insights
export const useAiInsights = () => {
    return useQuery({
        queryKey: ["ai-insights"],
        queryFn: () => api.get("/api/ai/insights").then((res) => res.data),
    });
}


//function to get budget
export const useBudget = () => {
    return useQuery({
        queryKey: ["budget"],
        queryFn: () => api.get("/api/ai/budget").then((res) => res.data),
    });
}