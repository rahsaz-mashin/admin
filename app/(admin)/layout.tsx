import {Metadata} from "next"
import React from "react"
import MainLayout from "@/components/RahsazAdmin/MainLayout";

export const metadata: Metadata = {
    title: "پنل مدیریت",
    icons: {
        icon: "/favicon.ico",
    },
};


export default function Layout({children}: { children: React.ReactNode }) {
    return (
        <MainLayout>
            {children}
        </MainLayout>
    );
}
