import {Metadata} from "next";
import React from "react";
import RahsazStoreMainLayout from "@/components/RahsazStoreMainLayout";
import {Providers} from "@/app/(store)/providers";
import {rootConfig} from "@/config/root";
import {auth} from "@/auth";
import {axiosServerCore} from "@/lib/axiosServerCore";
import {PaginationResponse} from "@/types/PaginationResponse";
import {HeaderShortcut} from "@/interfaces/HeaderShortcut.interface";
import {FooterShortcut} from "@/interfaces/FooterShortcut.interface";
import {Menu} from "@/interfaces/Menu.interface";

export const metadata: Metadata = {
    title: {
        default: rootConfig.name,
        template: `${rootConfig.name} | %s`,
    },
};


const getHeaderShortcuts = async () => {
    const session = await auth()
    const axiosServer = axiosServerCore(session?.accessToken)
    return await axiosServer.get(`/store/headerShortcuts/list`) as PaginationResponse<HeaderShortcut>
}
const getFooterShortcuts = async () => {
    const session = await auth()
    const axiosServer = axiosServerCore(session?.accessToken)
    return await axiosServer.get(`/store/footerShortcuts/list`) as PaginationResponse<FooterShortcut>
}

const getMobileMenu = async () => {
    const session = await auth()
    const axiosServer = axiosServerCore(session?.accessToken)
    return await axiosServer.get(`/store/menu/mobile`) as PaginationResponse<Menu>
}

const getDesktopMenu = async () => {
    const session = await auth()
    const axiosServer = axiosServerCore(session?.accessToken)
    return await axiosServer.get(`/store/menu/desktop`) as PaginationResponse<Menu>
}

export default async function Layout({children}: { children: React.ReactNode }) {

    const headerShortcuts = await getHeaderShortcuts()
    const footerShortcuts = await getFooterShortcuts()
    const mobileMenu = await getMobileMenu()
    const desktopMenu = await getMobileMenu()

    return (
        <Providers>
            <RahsazStoreMainLayout
                headerShortcuts={headerShortcuts.data}
                footerShortcuts={footerShortcuts.data}
                mobileMenu={mobileMenu.data}
                desktopMenu={desktopMenu.data}
            >
                {children}
            </RahsazStoreMainLayout>
        </Providers>
    );
}
