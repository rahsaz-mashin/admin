"use client";

import React, {ReactNode, useState, createContext} from "react";





type DimensionsType = {
    width: number;
    height: number;
}





// ====================================================================================================================> Context

export type ContainerDimensionsContextType = {
    dimensions?: DimensionsType;
    setDimensions: (i: DimensionsType) => void;
}

export const ContainerDimensionsContext = createContext<ContainerDimensionsContextType | null>(null)





// ====================================================================================================================> Provider

type ProviderPropsType = {
    children: ReactNode;
    initial?: {
        dimensions: DimensionsType;
    }
}
export const ContainerDimensionsProvider = ({children, initial}: ProviderPropsType) => {
    const [dimensions, setDimensions] = useState<DimensionsType | undefined>(initial?.dimensions);

    const value = {
        dimensions,
        setDimensions,
    }

    return <>
        <ContainerDimensionsContext.Provider value={value}>
            {children}
        </ContainerDimensionsContext.Provider>
    </>
};
