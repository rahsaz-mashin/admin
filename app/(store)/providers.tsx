"use client";

import * as React from "react";
import {ContainerDimensionsProvider} from "@/context/containerDimensions.context";


type ProvidersProps = {
    children: React.ReactNode;
}

export function Providers({children}: ProvidersProps) {

    return (
        <ContainerDimensionsProvider>
            {children}
        </ContainerDimensionsProvider>
    );
}
