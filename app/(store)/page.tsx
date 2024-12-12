import React from "react";
import {Stories} from "@/stories/RahsazStore/Stories";
import {HomeSlider} from "@/stories/RahsazStore/HomeSlider";
import {Shortcuts} from "@/stories/RahsazStore/Shortcuts";
import {ProductCategoryShortcut} from "@/stories/RahsazStore/ProductCategoryShortcut";
import {Metadata} from "next";
import {axiosServerCore} from "@/lib/axiosServerCore";
import {auth} from "@/auth";
import {PaginationResponse} from "@/types/PaginationResponse";
import {HomeShortcut} from "@/interfaces/HomeShortcut.interface";
import {Slider} from "@/interfaces/Slider.interface";


export const metadata: Metadata = {
    title: "صفحه اصلی",
};

const getHomeShortcuts = async () => {
    const session = await auth()
    const axiosServer = axiosServerCore(session?.accessToken)
    return await axiosServer.get(`/store/homeShortcuts/pins`) as PaginationResponse<HomeShortcut>
}

const getHomeSliders = async () => {
    const session = await auth()
    const axiosServer = axiosServerCore(session?.accessToken)
    return await axiosServer.get(`/store/slider/list`) as PaginationResponse<Slider>
}


export default async function Page() {


    const homeShortcuts = await getHomeShortcuts()
    const homeSliders = await getHomeSliders()
    return (
        <>
            <section
                className="font-normal text-black flex flex-col gap-4 py-4 bg-white overflow-hidden drop-shadow-2xl"
            >
                <Stories/>
                <HomeSlider items={homeSliders.data}/>
                <Shortcuts items={homeShortcuts.data}/>
            </section>
            <section
                className="font-normal text-black flex flex-col gap-4 py-4 bg-gray-100 overflow-hidden"
            >
                <ProductCategoryShortcut/>
                <div className="pb-24 md:pb-0"/>
            </section>
        </>
    );
}