import axios from "axios";



const config = {
    baseURL: `${process.env.NEXT_PUBLIC_CORE_BASE_URL}`,
    headers: {
        "Content-Type": "application/json",
    },
    validateStatus: function (status: number) {
        return status >= 200 && status < 400;
    },
    paramsSerializer: {
        indexes: null // by default: false
    },
}


// Core without auth
const axiosServerCore = () => {
    const a = axios.create(config)
    a.interceptors.request.use((config: any) => {
        return config
    })
    a.interceptors.response.use(
        (response: any) => {
            return response.data;
        },
        (error: any) => {
            return Promise.reject(error)
        },
    )
    return a
}


// Core with auth
const axiosServerCoreWithAuth = (accessToken?: string) => {
    const a = axios.create(config)
    a.interceptors.request.use((config: any) => {
        if(accessToken) config.headers.Authorization = `Bearer ${accessToken}`
        return config
    })
    a.interceptors.response.use(
        (response: any) => {
            return response.data;
        },
        (error: any) => {
            return Promise.reject(error)
        },
    )
    return a
}


export {axiosServerCore, axiosServerCoreWithAuth}