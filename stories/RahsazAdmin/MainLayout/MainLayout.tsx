import React, {ReactNode} from "react";
// import {Container} from "../Container";
// import {Header} from "../Header";
// import {Drawer} from "../Drawer";
// import {Loading} from "@/stories/RahsazAdmin/Loading";
// import {MainMenuType, SubMenuType} from "@/stories/RahsazAdmin/Drawer/Drawer";
// import {usePathname} from "next/navigation";


export const MainLayout = (
    {
        mainMenu,
        subMenu,
        children
    }
        :
        {
            mainMenu: any,
            subMenu: any,
            children: ReactNode
        }
) => {
    // const [isOpenSideBar, setOpenSideBar] = useState(false);
    //
    // const pathname = usePathname()
    // const m = pathname.split("/")


    return (
        <main className="flex w-full h-full">
            HHHH
            {/*<Suspense fallback={<Loading/>}>*/}
            {/*    <Drawer*/}
            {/*        isOpenSideBar={isOpenSideBar}*/}
            {/*        subMenu={subMenu}*/}
            {/*        mainMenu={mainMenu}*/}
            {/*        activeMainMenu={m[2]}*/}
            {/*        activeSubMenu={m[3]}*/}
            {/*    />*/}
            {/*    {isOpenSideBar && (*/}
            {/*        <div*/}
            {/*            className="z-10 cursor-pointer backdrop-blur-md backdrop-saturate-150 bg-overlay/30 w-screen h-screen fixed inset-0 top-0 right-0 block md:hidden"*/}
            {/*            onClick={() => setOpenSideBar(false)}*/}
            {/*        />*/}
            {/*    )}*/}
            {/*    <Container header={<Header setOpenSideBar={setOpenSideBar}/>}>*/}
            {/*        {children}*/}
            {/*    </Container>*/}
                {/*<Loading/>*/}
            {/*</Suspense>*/}
        </main>
    );
};
