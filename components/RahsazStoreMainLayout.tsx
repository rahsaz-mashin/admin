"use client"

import React, {useContext, useEffect, useRef, useState} from "react";
import {Progress} from "@nextui-org/progress";
import {Logo} from "@/stories/General";
import Link from "next/link";
import {Navigation} from "@/stories/RahsazStore/Navigation";
import {HomeIcon} from "@/stories/Icons";
import {CallWidget} from "@/stories/RahsazStore";
import {HeaderBox} from "@/stories/RahsazStore/HeaderBox";
import {MyWalletButton} from "@/stories/RahsazStore/MyWalletButton";
import {MyCartButton} from "@/stories/RahsazStore/MyCartButton";
import {NotificationsButton} from "@/stories/RahsazStore/NotificationsButton";
import {ToolsButton} from "@/stories/RahsazStore/ToolsButton";
import {NavBar} from "@/stories/RahsazStore/NavBar";
import {Drawer} from "@/stories/RahsazStore/Drawer";
import {useRouter, usePathname, useSearchParams} from "next/navigation";
import {BottomNavigation} from "@/stories/RahsazStore/BottomNavigation";
import {Footer} from "@/stories/RahsazStore/Footer";
import {useContainerDimensions} from "@/hooks/useContainerDimentions";
import {ContainerDimensionsContext} from "@/context/containerDimensions.context";
import {ScrollShadow} from "@nextui-org/react";
import {HeaderShortcut} from "@/interfaces/HeaderShortcut.interface";
import {FooterShortcut} from "@/interfaces/FooterShortcut.interface";
import {Menu} from "@/interfaces/Menu.interface";


export type RahsazStoreMainLayoutProps = {
    children: React.ReactNode;
    headerShortcuts: HeaderShortcut[];
    footerShortcuts: FooterShortcut[];
    mobileMenu: Menu[];
    desktopMenu: Menu[];
}


const RahsazStoreMainLayout = ({
                                   children,
                                   headerShortcuts,
                                   footerShortcuts,
                                   mobileMenu,
                                   desktopMenu
                               }: RahsazStoreMainLayoutProps) => {

    const [scroll, setScroll] = useState(0)
    const onScroll: any = (v: any) => {
        const m = v.target.scrollTop / (v.target.scrollHeight - v.target.clientHeight) * 100
        setScroll(m)
    }

    const pathname = usePathname()
    const searchParams = useSearchParams()
    const router = useRouter();

    const isDrawerOpen = searchParams.get("drawer") !== null
    const onOpenDrawer = () => {
        if (!isDrawerOpen) {
            const u = new URLSearchParams(searchParams)
            u.set("drawer", "")
            router.push(pathname + "?" + u.toString())
        }
    }

    const onCloseDrawer = () => {
        if (isDrawerOpen) {
            const u = new URLSearchParams(searchParams)
            u.delete("drawer")
            router.push(pathname + "?" + u.toString())
        }
    }


    const containerRef = useRef<HTMLDivElement>(null)
    const dimensions = useContainerDimensions(containerRef)
    const containerDimensionsContext = useContext(ContainerDimensionsContext)

    useEffect(() => {
        containerDimensionsContext?.setDimensions(dimensions)
    }, [dimensions, containerDimensionsContext]);

    return (
        <Drawer
            isOpen={isDrawerOpen}
            setClose={onCloseDrawer}
            menu={mobileMenu}
        >
            <div className="absolute top-0 w-full z-50 hidden md:block">
                <Progress
                    aria-label="Loading..."
                    value={scroll}
                    size="sm"
                    color="primary"
                    className="h-[3px]"
                />
            </div>
            <main
                className="relative flex w-full h-full min-h-full min-w-full flex-col bg-gradient-to-b from-[#FFD4A5] to-[#FF921F]"
            >
                <nav className="hidden w-32 fixed md:flex flex-col h-full">
                    <Link href="/" className="w-full cursor-pointer aspect-square flex justify-center items-center">
                        <Logo size={60}/>
                    </Link>
                    <Navigation
                        menu={desktopMenu}
                    />
                </nav>
                <aside className="flex-1 flex flex-col gap-0 md:pr-32 m-0 md:me-3 h-full">
                    <header className="w-full z-10 md:py-4 flex flex-col md:flex-row items-center">
                        <div className="flex gap-4 w-full">
                            <CallWidget className="hidden md:flex"/>
                            <HeaderBox items={headerShortcuts}/>
                            <MyWalletButton/>
                            <MyCartButton/>
                            <NotificationsButton/>
                            <ToolsButton/>
                        </div>
                        <NavBar
                            setDrawerOpen={onOpenDrawer}
                        />
                    </header>
                    <section
                        className="flex-[1_1_0] bg-white transition-all overflow-hidden h-full rounded-none md:rounded-3xl shadow-2xl relative"
                    >
                        <ScrollShadow
                            className="h-full w-full scroll-smooth"
                            onScroll={onScroll}
                            size={0}
                            hideScrollBar
                        >
                            <div
                                ref={containerRef}
                                className="select-text mb-20 md:mb-0 h-full w-full"
                            >
                                {children}
                            </div>
                        </ScrollShadow>
                        <BottomNavigation/>
                    </section>
                    <Footer items={footerShortcuts}/>
                </aside>
            </main>
        </Drawer>
    )
}


export default RahsazStoreMainLayout
