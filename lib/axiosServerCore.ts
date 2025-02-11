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



const axiosServerCore = (accessToken?: string) => {
    const a = axios.create(config)
    a.interceptors.request.use((config) => {
        if(accessToken) config.headers.Authorization = `Bearer ${accessToken}`
        return config
    })
    a.interceptors.response.use(
        (response) => {
            return response.data;
        },
        (error) => {
            return Promise.reject(error)
        },
    )
    return a
}




export {axiosServerCore}