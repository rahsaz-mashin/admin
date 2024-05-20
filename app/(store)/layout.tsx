import {Metadata} from "next";
import React from "react";
import RahsazStoreMainLayout from "@/components/RahsazStoreMainLayout";

export const metadata: Metadata = {
    title: "صفحه اصلی",
    icons: {
        icon: "/favicon.ico",
    },
};


export default function Layout({children, params: {locale}}: { children: React.ReactNode, params: {locale: string} }) {
    return (
        <RahsazStoreMainLayout>
            {children}
        </RahsazStoreMainLayout>
    );
}
