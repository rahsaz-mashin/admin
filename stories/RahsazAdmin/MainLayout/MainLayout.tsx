import React, {ReactNode, Suspense, useEffect, useState} from "react";
import {Container} from "@/stories/RahsazAdmin//Container";
import {Drawer} from "@/stories/RahsazAdmin/Drawer";
import {Loading} from "@/stories/RahsazAdmin/Loading";
import {DrawerWorkspaceItemProps} from "@/stories/RahsazAdmin/Drawer/DrawerWorkspaceItem";
import {DrawerMenuItemProps} from "@/stories/RahsazAdmin/Drawer/DrawerMenuItem";
import {DrawerUserMenuItemType} from "@/stories/RahsazAdmin/Drawer/DrawerUserMenu";
import {usePathname} from "next/navigation";
import {HeaderProps} from "@/stories/RahsazAdmin/Header/Header";


export type MainLayoutProps = {
    workspaceItems: DrawerWorkspaceItemProps[],
    menuItems: DrawerMenuItemProps[],
    userMenuItems: DrawerUserMenuItemType[],
    headerProps: HeaderProps,
    children: ReactNode
}


export const MainLayout = (
    {
        workspaceItems,
        menuItems,
        userMenuItems,
        headerProps,

        children,
    }: MainLayoutProps
) => {
    const [isOpenDrawer, setOpenDrawer] = useState(false);
    const [isLoading, setLoading] = useState(true);

    const pathname = usePathname()
    const m = pathname.split("/")


    useEffect(() => {
        setTimeout(() => setLoading(false), 1000)
    }, [])


    return (
        <main className="flex w-full h-full">
                <Suspense fallback={<Loading isLoading/>}>
                    <Drawer
                        isOpenDrawer={isOpenDrawer}
                        workspaceItems={workspaceItems}
                        menuItems={menuItems}
                        userMenuItems={userMenuItems}

                        activeWorkspace={m[2]}
                        activeMenu={m[3]}
                        accountName="عباسقلی میرزا"
                    />
                    {isOpenDrawer && (
                        <>
                            <div
                                className="z-10 cursor-pointer items-start justify-end backdrop-blur-md backdrop-saturate-150 bg-overlay/30 w-screen h-screen fixed inset-0 top-0 right-0 block md:hidden"
                                onClick={() => setOpenDrawer(false)}
                            >
                            </div>
                        </>
                    )}
                    <Container headerProps={{...headerProps, setOpenDrawer: () => setOpenDrawer(true)}}>
                        {children}
                    </Container>
                    <Loading isLoading={isLoading}/>
                </Suspense>
            </main>
    );
};
