import Link from "next/link";
import React from "react";
import {Stories} from "@/stories/RahsazStore/Stories";
import {HomeSlider} from "@/stories/RahsazStore/HomeSlider";
import {Shortcuts} from "@/stories/RahsazStore/Shortcuts";
import {ProductCategoryShortcut} from "@/stories/RahsazStore/ProductCategoryShortcut";


export default function Page() {
    return (
        <>
            <section className="font-normal text-black flex flex-col gap-4 py-4 bg-white drop-shadow-2xl">
                <Stories/>
                <HomeSlider/>
                <Shortcuts/>
            </section>
            <section className="font-normal text-black flex flex-col gap-4 py-4 bg-gray-100">
                <ProductCategoryShortcut/>
            </section>
        </>
    );
}