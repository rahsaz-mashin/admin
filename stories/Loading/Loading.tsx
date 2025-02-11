import React from "react";
import {Spinner} from "@heroui/spinner";


export type LoadingProps = {
    isLoading: boolean
}


export const Loading = ({isLoading = true}: LoadingProps) => {
    if(isLoading) {
        return (
            <div className="z-50 backdrop-blur-2xl backdrop-saturate-500 bg-overlay/60 w-screen h-screen fixed flex justify-center items-center inset-0">
                <Spinner size="lg"/>
            </div>
        );
    }
    return null
};
