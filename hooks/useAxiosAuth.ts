
import { useSession } from "next-auth/react"
import { useEffect } from "react";
import { axiosAuth } from "@/lib/axios";


export const useAxiosAuth = () => {
    const { data: session } = useSession();
    useEffect(() => {
        const requestIntercept = axiosAuth.interceptors.request.use((config: any) => {
            if (!config.headers["Authorization"]) {
                // config.headers["Authorization"] = `Bearer ${session?.accessToken}`
            }
            return config
        })
        return () => {
            axiosAuth.interceptors.request.eject(requestIntercept)
        }
    }, [session])
    return axiosAuth
}




