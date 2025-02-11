import {Metadata} from "next"
import React from "react"
import RahsazAdminMainLayout from "@/components/RahsazAdminMainLayout";
import {auth} from "@/auth";


export const metadata: Metadata = {
    title: "پنل مدیریت",
    icons: {
        icon: "/favicon.ico",
    },
};


export default async function Layout({children}: { children: React.ReactNode; }) {

    const session = await auth()

    return (
            <RahsazAdminMainLayout session={session!}>
                {children}
            </RahsazAdminMainLayout>
    );
}
