import React from "react";

import {CategoryChooseCategory} from "@/stories/RahsazStore/Category/ChooseCategory";
import {CategoryTools} from "@/stories/RahsazStore/Category/Tools";

export default function Page({params}: { params: { key: string } }) {



    return (
        <main className="grid grid-cols-6 gap-0">
            <section className="relative col-span-full">
                <CategoryChooseCategory/>
                <CategoryTools/>
            </section>
        </main>
    );
}
