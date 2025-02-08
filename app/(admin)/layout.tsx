import {Metadata} from "next"
import React from "react"
import RahsazAdminMainLayout from "@/components/RahsazAdminMainLayout";
import {Providers} from "@/app/(admin)/providers";
import {auth} from "@/auth";


export const metadata: Metadata = {
    title: "پنل مدیریت",
    icons: {
        icon: "/favicon.ico",
    },
};


export default async function Layout({children, params}: { children: React.ReactNode; params: any }) {

    const session = await auth()

    return (
        <Providers>
            <RahsazAdminMainLayout session={session!}>
                {children}
            </RahsazAdminMainLayout>
        </Providers>
    );
}
