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
        // 1. Check if we are in the browser
        if (typeof window !== 'undefined') { 
            // 2. Get the raw string from local storage
            const storageData = localStorage.getItem('auth_store'); // Check if your key in application tab is exactly 'authToken'
            
            if (storageData) {
                try {
                    // 3. Parse the Zustand JSON object
                    const parsedData = JSON.parse(storageData);
                    
                    // 4. Extract JUST the raw token string
                    const actualToken = parsedData.state.token; 
                    
                    // 5. Attach the clean token to the header
                    if (actualToken) {
                        config.headers.Authorization = `Bearer ${actualToken}`;
                    }
                } catch (error) {
                    // Fallback: Just in case you later save it as a raw string instead of a JSON object
                    config.headers.Authorization = `Bearer ${storageData}`;
                }
            }
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

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