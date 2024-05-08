import React, {ReactNode, Suspense, useState} from "react";
import {Container} from "../Container";
import {Header} from "../Header";
import {Drawer} from "../Drawer";
import {Loading} from "@/stories/RahsazAdmin/Loading";

export const MainLayout = ({children}: { children: ReactNode }) => {
    const [isOpenSideBar, setOpenSideBar] = useState(false);


    return (
        <main className="flex w-full h-full">
            <Suspense fallback={<Loading/>}>
                <Drawer isOpenSideBar={isOpenSideBar}/>
                {isOpenSideBar && (
                    <div
                        className="z-10 cursor-pointer backdrop-blur-md backdrop-saturate-150 bg-overlay/30 w-screen h-screen fixed inset-0 top-0 right-0 block md:hidden"
                        onClick={() => setOpenSideBar(false)}
                    />
                )}
                <Container header={<Header setOpenSideBar={setOpenSideBar}/>}>
                    {children}
                </Container>
                {/*<Loading/>*/}
            </Suspense>
        </main>
    );
};
