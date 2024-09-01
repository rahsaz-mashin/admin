
import {Metadata} from "next"
import React from "react"
import RahsazAdminMainLayout from "@/components/RahsazAdminMainLayout";
import {DrawerWorkspaceItemProps} from "@/stories/RahsazAdmin/Drawer/DrawerWorkspaceItem";
import {Logo as RahsazStoreLogo} from "@/stories/RahsazStore";
import {DrawerMenuItemProps} from "@/stories/RahsazAdmin/Drawer/DrawerMenuItem";
import {OutlinedCustomizationIcon} from "@/stories/Icons";
import {DrawerUserMenuItemType} from "@/stories/RahsazAdmin/Drawer/DrawerUserMenu";
import {signOut} from "@/auth";


export const metadata: Metadata = {
    title: "پنل مدیریت",
    icons: {
        icon: "/favicon.ico",
    },
};




async function signout() {
    // "use server";
    signOut()
}



export default function Layout({children}: { children: React.ReactNode }) {



    const workspaceItems: DrawerWorkspaceItemProps[] = [
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
    ]

    const menuItems: DrawerMenuItemProps[] = [
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
            label: "خروج از حساب کاربری",
            // onPress: () => {
            //     alert("Hey")
            // }
        },
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



    return (
        <RahsazAdminMainLayout
            workspaceItems={workspaceItems}
            menuItems={menuItems}
            userMenuItems={userMenuItems}
            headerProps={headerProps}
        >
            {children}
        </RahsazAdminMainLayout>
    );
}
