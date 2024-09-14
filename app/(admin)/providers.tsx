"use client";

import * as React from "react";
import {AdminProvider} from "@/context/admin.context";


type ProvidersProps = {
    children: React.ReactNode;
}

export function Providers({children}: ProvidersProps) {

    return (
        <AdminProvider>
            {children}
        </AdminProvider>
    );
}
