import axios from "axios"


export const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000",
    headers: {
        "Content-Type": "application/json"
    },
    timeout: 15000
})


//REQUEST INTERCEPTOR

api.interceptors.request.use(
    (config) => {
        //Nextjs environment

        if (typeof window !== undefined) {
            const token = localStorage.getItem('authToken')
            if (token) {
                config.headers.Authorization = `Bearer ${token}`
            }
        }
        return config
    },
    (error) => {
        console.log("Axios caught an error", error)

        //throw the error to ReactQuery
        return Promise.reject(error)
    }
)


// api.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response && error.response.status === 401) {
     
//       if (typeof window !== 'undefined') {
//         localStorage.removeItem('authToken');
        
        
//         window.location.href = '/login'; 
//       }
//     }
//     return Promise.reject(error);
//   }
// );