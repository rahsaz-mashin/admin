"use client";

import React, {ReactNode, useState, createContext} from "react";
import {CartProduct} from "@/interfaces/Cart.interface";


// ====================================================================================================================> Context

export type WalletContextType = {
    balance: number;
}

export const WalletContext = createContext<WalletContextType>({balance: 0})


// ====================================================================================================================> Provider

type ProviderPropsType = {
    children: ReactNode;
    initial?: {
        balance: number;
    }
}
export const WalletProvider = ({children, initial}: ProviderPropsType) => {
    const [balance, setBalance] = useState<number>(initial?.balance || 0)

    const value = {
        balance,
        setBalance,
    }

    return (
        <WalletContext.Provider
            value={value}
        >
            {children}
        </WalletContext.Provider>
    )
};
