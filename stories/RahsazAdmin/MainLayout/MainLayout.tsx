import React, {ReactNode, Suspense, useState} from "react";
import {Container} from "@/stories/RahsazAdmin//Container";
import {Drawer} from "@/stories/RahsazAdmin/Drawer";
import {Loading} from "@/stories/RahsazAdmin/Loading";
import {DrawerMainItemProps} from "@/stories/RahsazAdmin/Drawer/MainItem/DrawerMainItem";
import {DrawerSubItemProps} from "@/stories/RahsazAdmin/Drawer/SubItem/DrawerSubItem";
import {DrawerUserMenuItemType} from "@/stories/RahsazAdmin/Drawer/UserMenu/DrawerUserMenu";
import {usePathname} from "next/navigation";
import {HeaderProps} from "@/stories/RahsazAdmin/Header/Header";


export type MainLayoutProps = {
    mainMenu: DrawerMainItemProps[],
    subMenu: DrawerSubItemProps[],
    userMenu: DrawerUserMenuItemType[],
    headerProps: HeaderProps,
    children: ReactNode
}


export const MainLayout = (
    {
        mainMenu,
        subMenu,
        userMenu,
        headerProps,

        children,
    }: MainLayoutProps
) => {
    const [isOpenDrawer, setOpenDrawer] = useState(false);

    const pathname = usePathname()
    const m = pathname.split("/")


    return (
        <main className="flex w-full h-full">
            <Suspense fallback={<Loading isLoading/>}>
                <Drawer
                    isOpenSideBar={isOpenDrawer}
                    subMenu={subMenu}
                    mainMenu={mainMenu}
                    userMenu={userMenu}

                    activeMainMenu={m[2]}
                    activeSubMenu={m[3]}
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
                {/*<Loading/>*/}
            </Suspense>
        </main>
    );
};
