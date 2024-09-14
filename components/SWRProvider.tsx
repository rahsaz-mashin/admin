"use client"

import React, {ReactNode} from "react";
import {SWRConfig, SWRConfiguration} from "swr";
import {axiosCoreWithAuth} from "@/lib/axios";


export type SWRProviderProps = {
    children: ReactNode;
}


const SWRProvider = (props: SWRProviderProps) => {
    const {children} = props


    const configuration:  SWRConfiguration = {
        fetcher: (url) => {
            return axiosCoreWithAuth().get(url)
        },
    }
    return (
        <SWRConfig value={configuration}>
            {children}
        </SWRConfig>
    )
}


export default SWRProvider
