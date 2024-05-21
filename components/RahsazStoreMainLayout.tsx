"use client"

import {useRouter} from 'next-nprogress-bar';
import React, {useState} from "react";
import Scrollbar from "react-scrollbars-custom";
import {ScrollState} from "react-scrollbars-custom/dist/types/types";
import {Progress} from "@nextui-org/progress";
import {Logo} from "@/stories/General";
import Link from "next/link";
import {Navigation} from "@/stories/RahsazStore/Navigation";
import {HomeIcon} from "@/stories/Icons";
import {CallWidget} from "@/stories/RahsazStore";
import {TopShortcut} from "@/stories/RahsazStore/TopShortcut";
import {MyWalletButton} from "@/stories/RahsazStore/MyWalletButton";
import {MyCartButton} from "@/stories/RahsazStore/MyCartButton";
import {NotificationsButton} from "@/stories/RahsazStore/NotificationsButton";
import {UserButton} from "@/stories/RahsazStore/UserButton";


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


    return (
        <>
            <div className="absolute top-0 w-full z-50">
                <Progress
                    aria-label="Loading..."
                    value={scroll}
                    size="sm"
                    color="primary"
                    className="h-[3px]"
                />
            </div>
            <main className="flex w-full min-h-screen flex-col h-full bg-gradient-to-b from-[#FFD4A5] to-[#FF921F]">
                <nav className="hidden w-32 fixed md:flex flex-col h-full">
                    <Link href="/" className="w-full cursor-pointer aspect-square flex justify-center items-center">
                        <Logo size={60}/>
                    </Link>
                    <Navigation
                        menuItems={menuItems}
                    />
                </nav>
                <aside className="flex-1 flex flex-col gap-0 md:pr-32 h-full">
                    <header className="w-full hidden py-4 h-28 md:flex items-center">
                        <div className="flex gap-4">
                            <CallWidget />
                            <TopShortcut />
                            <MyWalletButton />
                            <MyCartButton />
                            <NotificationsButton />
                            <UserButton />
                        </div>
                    </header>
                    <section
                        className="flex-[1_1_0] bg-white transition-all overflow-x-hidden max-h-fit m-0 md:me-3 rounded-none md:rounded-3xl shadow-2xl  "
                    >
                        <Scrollbar
                            wrapperProps={{
                                renderer: (props) => {
                                    const {elementRef, style, ...restProps} = props;
                                    return (
                                        <div
                                            {...restProps}
                                            ref={elementRef}
                                            style={{overflow: "hidden", position: "absolute", inset: "0px 0px 0px 0px"}}
                                            key="scrollbarWrapper"
                                        />
                                    );
                                },
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
                            // className="!fixed !h-full"
                        >
                            <div className="p-4">
                                {children}
                            </div>
                        </Scrollbar>
                    </section>
                    <footer className="h-16 items-center hidden md:flex">
                        footer
                    </footer>
                </aside>
            </main>
        </>
    )
}


export default RahsazStoreMainLayout
