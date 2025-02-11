"use client";


import React, {Suspense} from "react";
import {HeroUIProvider} from "@heroui/react";
import {SessionProvider} from "next-auth/react";
import SWRProvider from "@/components/SWRProvider";
import {AdminProvider} from "@/context/admin.context";

export interface ProvidersProps {
    children: React.ReactNode;
}

export function Providers({children}: ProvidersProps) {

    return (
        <HeroUIProvider>
            <Suspense>
                <SessionProvider>
                    <SWRProvider>
                        <AdminProvider>
                            {children}
                        </AdminProvider>
                    </SWRProvider>
                </SessionProvider>
            </Suspense>
        </HeroUIProvider>
    );
}
