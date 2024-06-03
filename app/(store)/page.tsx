import Link from "next/link";
import React from "react";
import {Stories} from "@/stories/RahsazStore/Stories";
import {HomeSlider} from "@/stories/RahsazStore/HomeSlider";
import {Shortcuts} from "@/stories/RahsazStore/Shortcuts";


export default function Page() {
    return (
        <section className="font-normal text-black flex flex-col gap-4 py-4">
            <Stories/>
            <HomeSlider/>
            <br/>
            <br/>
            <Shortcuts/>

        </section>
    );
}