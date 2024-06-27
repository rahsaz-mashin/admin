"use client"

import React, {useState} from "react";
import Scrollbar from "react-scrollbars-custom";
import {ScrollState} from "react-scrollbars-custom/dist/types/types";
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
import useHash from "@/hooks/useHash";
import {BottomNavigation} from "@/stories/RahsazStore/BottomNavigation";
import {Footer} from "@/stories/RahsazStore/Footer";
import {FixedContent} from "@/stories/RahsazStore/FixedContent";


const menuItems = [
    {
        id: "home-page",
        label: "صفحه اصلی",
        url: "/",
        icon: HomeIcon,
    },
    {
        id: "search",
        label: "جستجو",
        url: "/",
        icon: HomeIcon,
    },
    {
        id: "category",
        label: "دسته بندی",
        url: "/",
        icon: HomeIcon,
    },
    {
        id: "my-orders",
        label: "سفارشات من",
        url: "/",
        icon: HomeIcon,
    },
    {
        id: "admin",
        label: "پنل مدیریت",
        url: "/admin",
        icon: HomeIcon,
    },
    // {
    //     id: "admin",
    //     label: "پنل مدیریت",
    //     url: "/admin",
    //     icon: HomeIcon,
    // },
    // {
    //     id: "admin",
    //     label: "پنل مدیریت",
    //     url: "/admin",
    //     icon: HomeIcon,
    // },
]

const RahsazStoreMainLayout = ({children}: { children: React.ReactNode }) => {

    const [scroll, setScroll] = useState(0)
    const onScroll: any = (v: ScrollState, pv: ScrollState) => {
        const m = v.scrollTop / (v.scrollHeight - v.clientHeight) * 100
        setScroll(m)
    }

    const pathname = usePathname()
    const searchParams = useSearchParams()
    const router = useRouter();

    const isDrawerOpen = searchParams.get("drawer") !== null
    const onOpenDrawer = () => {
        if(!isDrawerOpen) {
            const u = new URLSearchParams(searchParams)
            u.set("drawer", "")
            router.push(pathname + "?" + u.toString())
        }
    }

    const onCloseDrawer = () => {
        if(isDrawerOpen) {
            const u = new URLSearchParams(searchParams)
            u.delete("drawer")
            router.push(pathname + "?" + u.toString())
        }
    }



    return (
        <>
            <Drawer
                isOpen={isDrawerOpen}
                setClose={onCloseDrawer}
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
                <main className="flex w-full h-full min-h-full min-w-full flex-col bg-gradient-to-b from-[#FFD4A5] to-[#FF921F]">
                    <nav className="hidden w-32 fixed md:flex flex-col h-full">
                        <Link href="/" className="w-full cursor-pointer aspect-square flex justify-center items-center">
                            <Logo size={60}/>
                        </Link>
                        <Navigation
                            menuItems={menuItems}
                        />
                    </nav>
                    <aside className="flex-1 flex flex-col gap-0 md:pr-32 m-0 md:me-3 h-full">
                        <header className="w-full z-10 md:py-4 flex flex-col md:flex-row items-center">
                            <div className="flex gap-4 w-full">
                                <CallWidget className="hidden md:flex"/>
                                <HeaderBox/>
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
                            className="flex-[1_1_0] bg-white transition-all overflow-x-hidden h-full rounded-none md:rounded-3xl shadow-2xl relative"
                        >
                            <Scrollbar
                                wrapperProps={{
                                    renderer: (props) => {
                                        const {elementRef, style, ...restProps} = props;
                                        return (
                                            <div
                                                {...restProps}
                                                ref={elementRef}
                                                style={{
                                                    overflow: "hidden",
                                                    position: "absolute",
                                                    inset: "0px 0px 0px 0px"
                                                }}
                                                key="scrollbarWrapper"
                                            />
                                        );
                                    },
                                }}
                                scrollerProps={{
                                    renderer: (props) => {
                                        const {elementRef, ...restProps} = props;
                                        return (
                                            <div
                                                ref={elementRef}
                                                {...restProps}
                                                className={props.className + " scroll-smooth"}
                                                key="scrollbarScroller"
                                            />
                                        );
                                    }
                                }}
                                trackXProps={{
                                    renderer: (props) => {
                                        const {elementRef, style, ...restProps} = props;
                                        return (
                                            <div
                                                {...restProps}
                                                ref={elementRef}
                                                className="!bg-scrolltrack"
                                                style={{
                                                    ...style,
                                                    height: "0px",
                                                    left: "0px",
                                                    bottom: "0px",
                                                    width: "100%",
                                                    borderRadius: "8px"
                                                }}
                                                key="scrollbarTrackX"
                                            />
                                        );
                                    },
                                }}
                                thumbXProps={{
                                    renderer: (props) => {
                                        const {elementRef, style, ...restProps} = props;
                                        return <div
                                            key="scrollbarThumbX"
                                            {...restProps}
                                            ref={elementRef}
                                            className="!bg-scrollthumb rounded-lg"
                                        />;
                                    },
                                }}
                                // ========================
                                trackYProps={{
                                    renderer: (props) => {
                                        const {elementRef, style, ...restProps} = props;
                                        return (
                                            <div
                                                key="scrollbarTrackY"
                                                {...restProps}
                                                ref={elementRef}
                                                className="!bg-scrolltrack"
                                                style={{
                                                    ...style,
                                                    width: "0px",
                                                    left: "0px",
                                                    top: "0px",
                                                    height: "100%",
                                                    borderRadius: "8px"
                                                }}
                                            />
                                        );
                                    },
                                }}
                                thumbYProps={{
                                    renderer: (props) => {
                                        const {elementRef, style, ...restProps} = props;
                                        return <div
                                            key="scrollbarThumbY"
                                            {...restProps}
                                            ref={elementRef}
                                            className="!bg-scrollthumb rounded-lg"
                                        />;
                                    },
                                }}
                                onScroll={onScroll}
                                className="!h-full !w-full"
                            >
                                <div className="select-text mb-20 md:mb-0">
                                    {children}
                                </div>
                            </Scrollbar>
                            {/*<FixedContent/>*/}
                            <BottomNavigation />
                        </section>
                        <Footer />
                    </aside>
                </main>
            </Drawer>
        </>
    )
}


export default RahsazStoreMainLayout
