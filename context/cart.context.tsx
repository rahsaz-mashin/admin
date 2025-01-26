"use client";

import React, {ReactNode, useState, createContext} from "react";
import {CartProduct} from "@/interfaces/Cart.interface";




// ====================================================================================================================> Context

export type CartContextType = {
    products: CartProduct[];
    setProducts?: (i: CartProduct[]) => void;
}

export const CartContext = createContext<CartContextType>({products: []})


// ====================================================================================================================> Provider

type ProviderPropsType = {
    children: ReactNode;
    initial?: {
        products: CartProduct[];
    }
}
export const CartProvider = ({children, initial}: ProviderPropsType) => {
    const [products, setProducts] = useState<CartProduct[]>(initial?.products || []);

    const value = {
        products,
        setProducts,
    }

    return (
        <CartContext.Provider
            value={value}
        >
            {children}
        </CartContext.Provider>
    )
};
