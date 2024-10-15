import {Metadata} from "next";
import React from "react";
import RahsazStoreMainLayout from "@/components/RahsazStoreMainLayout";
import {Providers} from "@/app/(store)/providers";
import {rootConfig} from "@/config/root";

export const metadata: Metadata = {
    title: {
        default: rootConfig.name,
        template: `${rootConfig.name} | %s`,
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
