import React, {ReactNode, useContext, useEffect, useState} from "react";
import {Container} from "@/stories/RahsazAdmin//Container";
import {Drawer} from "@/stories/RahsazAdmin/Drawer";
import {Loading} from "@/stories/RahsazAdmin/Loading";
import {usePathname} from "next/navigation";
import {AdminContext} from "@/context/admin.context";
import { Session } from "next-auth";

export type MainLayoutProps = {
    children: ReactNode;
    session: Session;
}


export const MainLayout = (props: MainLayoutProps) => {

    const {children, session} = props

    const adminContext = useContext(AdminContext)

    return (
        <main className="flex w-full h-max">
            <Drawer session={session}/>
            {adminContext.isOpenDrawer && (
                <>
                    <div
                        className="z-10 cursor-pointer items-start justify-end backdrop-blur-md backdrop-saturate-150 bg-overlay/30 w-screen h-screen fixed inset-0 top-0 right-0 block md:hidden"
                        onClick={() => adminContext.setOpenDrawer(false)}
                    >
                    </div>
                </>
            )}
            <Container>
                {children}
            </Container>
            <Loading isLoading={adminContext.isLoading}/>
        </main>
    );
};
