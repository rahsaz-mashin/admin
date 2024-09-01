import {Drawer} from "./Drawer";
import {OutlinedCustomizationIcon} from "@/stories/Icons";
import {Logo as RahsazStoreLogo, Logo} from "@/stories/RahsazStore";
import React from "react";

export default {
    title: "RahsazAdmin/Drawer",
    component: Drawer,
};

export const Default = {
    args: {
        isOpenDrawer: true,
        workspaceItems: [
            {
                id: "gate",
                label: "راهساز گیت",
                logo: <RahsazStoreLogo size={36}/>
            },
            {
                id: "store",
                label: "راهساز استور",
                logo: <RahsazStoreLogo size={36}/>
            },
            {
                id: "info",
                label: "راهساز اینفو",
                logo: <RahsazStoreLogo size={36}/>
            },
            {
                id: "online",
                label: "راهساز آنلاین",
                logo: <RahsazStoreLogo size={36}/>
            },
            {
                id: "mag",
                label: "راهساز مگ",
                logo: <RahsazStoreLogo size={36}/>
            },
            {
                id: "support",
                label: "راهساز ساپورت",
                logo: <RahsazStoreLogo size={36}/>
            },
            {
                id: "pro",
                label: "راهساز پرو",
                logo: <RahsazStoreLogo size={36}/>
            },
        ],
        menuItems: [
            {
                id: "dashboard",
                label: "داشبورد",
                icon: <OutlinedCustomizationIcon/>,
                workspace: "store",
            },
            {
                id: "customer",
                label: "مشتریان",
                icon: <OutlinedCustomizationIcon/>,
                workspace: "store",
            },
            {
                id: "product",
                label: "محصولات",
                icon: <OutlinedCustomizationIcon/>,
                workspace: "store",
            },
            {
                id: "order",
                label: "سفارشات",
                icon: <OutlinedCustomizationIcon/>,
                workspace: "store",
            },
            {
                id: "wallet",
                label: "کیف پول",
                icon: <OutlinedCustomizationIcon/>,
                workspace: "store",
            },
        ],
        userMenuItems: [
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
        ],

        activeWorkspace: "store",
        activeMenu: "products",

        accountName: "عباس قلی",
        accountAvatar: ""
    },
    parameters: {
        nextjs: {
            appDirectory: true,
        }
    },
};
