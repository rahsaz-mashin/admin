import axios from "axios";
import {toast} from "react-toastify";
import {getSession} from "next-auth/react";


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
const axiosCore = () => {
    const a = axios.create(config)
    a.interceptors.request.use((config) => {
        return config
    })
    a.interceptors.response.use(
        (response) => {
            return response.data;
        },
        (error) => {
            return Promise.reject(handleToastError(error))
        },
    )
    return a
}


// Core with auth
const axiosCoreWithAuth = () => {
    const a = axios.create(config)
    a.interceptors.request.use(async (config) => {
        const session = await getSession()
        if(session?.accessToken) config.headers.Authorization = `Bearer ${session.accessToken}`
        return config
    })
    a.interceptors.response.use(
        (response) => {
            return response.data;
        },
        (error) => {
            return Promise.reject(handleToastError(error))
        },
    )
    return a
}


export {axiosCore, axiosCoreWithAuth}











// ======================================================> error handlers


type ErrorResponse = {
    response: {
        data: {
            message: string;
            error: string;
        },
        status: number;
    }
}

export const handleToastError = (error: ErrorResponse) => {
    const response = error?.response
    const messages = [];
    if (!response) {
        messages.push("خطای شبکه");
    } else {
        messages.push(response?.data?.message || response?.data?.error || `خطای ناشتاخته: ${response.status}`);
    }
    // show messages
    messages.map(message => toast.error(message || "خطای نامشخص 🥺"));

    return response?.data || null
};




