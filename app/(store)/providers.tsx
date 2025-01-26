"use client";

import * as React from "react";
import {ContainerDimensionsProvider} from "@/context/containerDimensions.context";
import {CartProvider} from "@/context/cart.context";
import {WalletProvider} from "@/context/wallet.context";


type ProvidersProps = {
    children: React.ReactNode;
}

export function Providers({children}: ProvidersProps) {

    return (
        <ContainerDimensionsProvider>
            <CartProvider>
                <WalletProvider initial={{balance: 0}}>
                    {children}
                </WalletProvider>
            </CartProvider>
        </ContainerDimensionsProvider>
    );
}
