import React, {ReactNode, Suspense, useState} from "react";
import {Container} from "@/stories/RahsazAdmin//Container";
import {Header} from "@/stories/RahsazAdmin//Header";
import {Drawer} from "@/stories/RahsazAdmin/Drawer";
import {Loading} from "@/stories/RahsazAdmin/Loading";
import {DrawerMainItemProps} from "@/stories/RahsazAdmin/Drawer/MainItem/DrawerMainItem";
import {DrawerSubItemProps} from "@/stories/RahsazAdmin/Drawer/SubItem/DrawerSubItem";
import {usePathname} from "next/navigation";
import {DrawerUserMenuItemType} from "@/stories/RahsazAdmin/Drawer/UserMenu/DrawerUserMenu";


export const MainLayout = (
    {
        mainMenu,
        subMenu,
        userMenu,
        children
    }
        :
        {
            mainMenu: DrawerMainItemProps[],
            subMenu: DrawerSubItemProps[],
            userMenu: DrawerUserMenuItemType[],
            children: ReactNode
        }
) => {
    const [isOpenSideBar, setOpenSideBar] = useState(false);

    const pathname = usePathname()
    const m = pathname.split("/")


    return (
        <main className="flex w-full h-full">
            <Suspense fallback={<Loading/>}>
                <Drawer
                    isOpenSideBar={isOpenSideBar}
                    subMenu={subMenu}
                    mainMenu={mainMenu}
                    userMenu={userMenu}

                    activeMainMenu={m[2]}
                    activeSubMenu={m[3]}
                    accountName="عباسقلی میرزا"
                />
                {isOpenSideBar && (
                    <>
                        <div
                            className="z-10 cursor-pointer flex items-start justify-end backdrop-blur-md backdrop-saturate-150 bg-overlay/30 w-screen h-screen fixed inset-0 top-0 right-0 block md:hidden"
                            onClick={() => setOpenSideBar(false)}
                        >
                        </div>
                    </>
                )}
                <Container header={<Header setOpenSideBar={setOpenSideBar}/>}>
                    {children}
                </Container>
                {/*<Loading/>*/}
            </Suspense>
        </main>
    );
};
