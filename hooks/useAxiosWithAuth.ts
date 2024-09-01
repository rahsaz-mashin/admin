import { useSession } from "next-auth/react"
import { useEffect } from "react";
import { axiosCoreWithAuth } from "@/lib/axios";


export const useAxiosWithAuth = () => {
    const { data: session } = useSession();

    useEffect(() => {
        // const requestIntercept = axiosCore.interceptors.request.use((config: any) => {
        //     if (!config.headers["Authorization"]) {
        //         // config.headers["Authorization"] = `Bearer ${session?.accessToken}`
        //     }
        //     return config
        // })
        // return () => {
        //     axiosCore.interceptors.request.eject(requestIntercept)
        // }
    }, [session])
    return axiosCoreWithAuth("")
}




