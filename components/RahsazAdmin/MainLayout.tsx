"use client"

import React from "react";
import {RahsazAdmin} from "@/stories"


const MainLayout = ({children}: { children: React.ReactNode })=> {
    return (
        <RahsazAdmin.MainLayout>
            {children}
        </RahsazAdmin.MainLayout>
    )
}


export default MainLayout