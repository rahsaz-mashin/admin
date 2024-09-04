import {Metadata} from "next";
import React from "react";
import RahsazStoreMainLayout from "@/components/RahsazStoreMainLayout";
import {Providers} from "@/app/(store)/providers";

export const metadata: Metadata = {
    title: "صفحه اصلی",
    icons: {
        icon: "/favicon.ico",
    },
};


export default function Layout({children}: { children: React.ReactNode }) {
    return (
        <Providers>
            <RahsazStoreMainLayout>
                {children}
            </RahsazStoreMainLayout>
        </Providers>
    );
}
