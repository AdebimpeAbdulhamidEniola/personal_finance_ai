import {create} from "zustand"
import {persist} from "zustand/middleware"

interface AuthStore{
    token: string | null;
    email: string | null;
    name: string | null;
    setToken: (token: string | null) => void;
    setEmail: (email: string | null) => void;
    setName: (name: string | null) => void;
}

// export const useAuthStore = create<AuthStore>()(
//     persist((set) => ({
//         //initially token is null
//         token: null,

//         setToken: (token: string | null) => set({token: token})
//     }),
//     {
//         name: 'auth_store'
//     }
//     ))


//Make a useAuthStore function that perist token, email, name of logged in user in localstorage

export const useAuthStore = create<AuthStore>()(
    persist((set) => ({
        //initially token is null
        token: null,
        email: null,
        name: null,

        setToken: (token: string | null) => set({token: token}),
        setEmail: (email: string | null) => set({email: email}),
        setName: (name: string | null) => set({name: name})
    }),
    {
        name: 'auth_store'
    }
    ))




