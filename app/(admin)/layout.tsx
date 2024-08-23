import {Metadata} from "next"
import React from "react"
import RahsazAdminMainLayout from "@/components/RahsazAdminMainLayout";


export const metadata: Metadata = {
    title: "پنل مدیریت",
    icons: {
        icon: "/favicon.ico",
    },
};


export default function Layout({children}: { children: React.ReactNode }) {
    return (
        <RahsazAdminMainLayout>
            {children}
        </RahsazAdminMainLayout>
    );
}
