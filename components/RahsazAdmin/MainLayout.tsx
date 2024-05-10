"use client"

import React from "react";
import {RahsazAdmin} from "@/stories"
import {SubMenuType} from "@/stories/RahsazAdmin/Drawer/Drawer";
import {OutlinedCustomizationIcon} from "@/stories/Icons";
import {Logo as RahsazStoreLogo} from "@/stories/RahsazStore";


const subMenu: SubMenuType[] = [
    {
        id: "products",
        label: "محصولات",
        icon: <OutlinedCustomizationIcon/>
    },
    {
        id: "orders",
        label: "سفارشات",
        icon: <OutlinedCustomizationIcon/>
    },
    {
        id: "settings",
        label: "تنظیمات",
        icon: <OutlinedCustomizationIcon/>
    },
    {
        id: "products",
        label: "محصولات",
        icon: <OutlinedCustomizationIcon/>
    },
    {
        id: "orders",
        label: "سفارشات",
        icon: <OutlinedCustomizationIcon/>
    },
    {
        id: "settings",
        label: "تنظیمات",
        icon: <OutlinedCustomizationIcon/>
    },
    {
        id: "products",
        label: "محصولات",
        icon: <OutlinedCustomizationIcon/>
    },
    {
        id: "orders",
        label: "سفارشات",
        icon: <OutlinedCustomizationIcon/>
    },
    {
        id: "settings",
        label: "تنظیمات",
        icon: <OutlinedCustomizationIcon/>
    },
    {
        id: "products",
        label: "محصولات",
        icon: <OutlinedCustomizationIcon/>
    },
    {
        id: "orders",
        label: "سفارشات",
        icon: <OutlinedCustomizationIcon/>
    },
    {
        id: "settings",
        label: "تنظیمات",
        icon: <OutlinedCustomizationIcon/>
    },
    {
        id: "products",
        label: "محصولات",
        icon: <OutlinedCustomizationIcon/>
    },
    {
        id: "orders",
        label: "سفارشات",
        icon: <OutlinedCustomizationIcon/>
    },
    {
        id: "settings",
        label: "تنظیمات",
        icon: <OutlinedCustomizationIcon/>
    },
    {
        id: "products",
        label: "محصولات",
        icon: <OutlinedCustomizationIcon/>
    },
    {
        id: "orders",
        label: "سفارشات",
        icon: <OutlinedCustomizationIcon/>
    },
    {
        id: "settings",
        label: "تنظیمات",
        icon: <OutlinedCustomizationIcon/>
    },
]


const mainMenu = [
    {
        id: "gate",
        label: "راهساز گیت",
        logo: RahsazStoreLogo
    },
    {
        id: "store",
        label: "راهساز استور",
        logo: RahsazStoreLogo
    },
    {
        id: "info",
        label: "راهساز اینفو",
        logo: RahsazStoreLogo
    },
    {
        id: "online",
        label: "راهساز آنلاین",
        logo: RahsazStoreLogo
    },
    {
        id: "mag",
        label: "راهساز مگ",
        logo: RahsazStoreLogo
    },
    {
        id: "support",
        label: "راهساز ساپورت",
        logo: RahsazStoreLogo
    },
    {
        id: "pro",
        label: "راهساز پرو",
        logo: RahsazStoreLogo
    },
]



const MainLayout = ({children}: { children: React.ReactNode }) => {
    return (
        <RahsazAdmin.MainLayout
            mainMenu={mainMenu}
            subMenu={subMenu}
        >
            {children}
        </RahsazAdmin.MainLayout>
    )
}


export default MainLayout