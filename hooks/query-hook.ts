"use client"
import { useMutation } from "@tanstack/react-query";
import { SignUpData, LogInData } from "@/schema"
import { api } from "@/api/axios-config";



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