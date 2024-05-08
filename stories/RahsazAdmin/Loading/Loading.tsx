import React from "react";
import {Spinner} from "@nextui-org/spinner";

export const Loading = () => {

    return (
        <div className="z-50 backdrop-blur-md backdrop-saturate-150 bg-overlay/30 w-screen h-screen fixed flex justify-center items-center inset-0">
            <Spinner size="lg"/>
        </div>
    );
};
