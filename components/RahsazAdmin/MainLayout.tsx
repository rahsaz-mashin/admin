"use client"

import React from "react";
import {RahsazAdmin} from "@/stories"
import {OutlinedCustomizationIcon} from "@/stories/Icons";
import {Logo as RahsazStoreLogo} from "@/stories/RahsazStore";
import {DrawerWorkspaceItemProps} from "@/stories/RahsazAdmin/Drawer/DrawerWorkspaceItem";
import {DrawerMenuItemProps} from "@/stories/RahsazAdmin/Drawer/DrawerMenuItem";
import {DrawerUserMenuItemType} from "@/stories/RahsazAdmin/Drawer/DrawerUserMenu";





const workspaceItems: DrawerWorkspaceItemProps[] = [
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

const menuItems: DrawerMenuItemProps[] = [
    {
        id: "customer",
        label: "مشتریان",
        icon: OutlinedCustomizationIcon,
        workspace: "store",
    },
    {
        id: "product",
        label: "محصولات",
        icon: OutlinedCustomizationIcon,
        workspace: "store",
    },
    {
        id: "order",
        label: "سفارشات",
        icon: OutlinedCustomizationIcon,
        workspace: "store",
    },
    {
        id: "wallet",
        label: "کیف پول",
        icon: OutlinedCustomizationIcon,
        workspace: "store",
    },
    {
        id: "customers1",
        label: "مشتریان",
        icon: OutlinedCustomizationIcon,
        workspace: "store",
    },
    {
        id: "products1",
        label: "محصولات",
        icon: OutlinedCustomizationIcon,
        workspace: "store",
    },
    {
        id: "orders1",
        label: "سفارشات",
        icon: OutlinedCustomizationIcon,
        workspace: "store",
    },
    {
        id: "wallet1",
        label: "کیف پول",
        icon: OutlinedCustomizationIcon,
        workspace: "store",
    },
    {
        id: "customers2",
        label: "مشتریان",
        icon: OutlinedCustomizationIcon,
        workspace: "store",
    },
    {
        id: "products2",
        label: "محصولات",
        icon: OutlinedCustomizationIcon,
        workspace: "store",
    },
    {
        id: "orders2",
        label: "سفارشات",
        icon: OutlinedCustomizationIcon,
        workspace: "store",
    },
    {
        id: "wallet2",
        label: "کیف پول",
        icon: OutlinedCustomizationIcon,
        workspace: "store",
    },
    {
        id: "customers3",
        label: "مشتریان",
        icon: OutlinedCustomizationIcon,
        workspace: "store",
    },
    {
        id: "products3",
        label: "محصولات",
        icon: OutlinedCustomizationIcon,
        workspace: "store",
    },
    {
        id: "orders3",
        label: "سفارشات",
        icon: OutlinedCustomizationIcon,
        workspace: "store",
    },
    {
        id: "wallet3",
        label: "کیف پول",
        icon: OutlinedCustomizationIcon,
        workspace: "store",
    },
]

const userMenuItems: DrawerUserMenuItemType[] = [
    {
        id: "edit-profile",
        label: "ویرایش پروفایل"
    },
    {
        id: "notifications",
        label: "اعلانات"
    },
    {
        id: "logout",
        label: "خروج از حساب کاربری"
    }
]





const headerProps = {
    workspaceName: "راهساز استور",
    steps: [
        {
            id: "products",
            label: "محصولات",
            url: "/admin/store/products",
        },
        {
            id: "list",
            label: "لیست محصولات",
            url: "/admin/store/products/list",
        },
        {
            id: "47856",
            label: "موتور دوپا",
            url: "/admin/store/products/list/47856",
        },
    ],
}




const MainLayout = ({children}: { children: React.ReactNode }) => {
    return (
        <RahsazAdmin.MainLayout
            workspaceItems={workspaceItems}
            menuItems={menuItems}
            userMenuItems={userMenuItems}
            headerProps={headerProps}
        >
            {children}
        </RahsazAdmin.MainLayout>
    )
}


export default MainLayout
