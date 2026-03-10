import {create} from "zustand"
import {persist} from "zustand/middleware"

interface AuthStore{
    token: string | null;
    setToken: (token: string | null) => void
}

export const useAuthStore = create<AuthStore>()(
    persist((set) => ({
        //initially token is null
        token: null,

        setToken: (token: string | null) => set({token: token})
    }),
    {
        name: 'auth_store'
    }
    ))
