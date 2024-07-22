import React from "react";
import {OrderTabs} from "@/stories/RahsazStore/Order/Tabs";
import {OrderDetail} from "@/stories/RahsazStore/Order/Detail";

export default function Page({params}: { params: { key: string } }) {
    return (
        <main className="grid grid-cols-7">
            <section className="col-span-full hidden lg:block lg:col-span-3 relative">
                <div className="flex flex-col gap-3 relative">
                    <OrderTabs/>
                </div>
            </section>
            <section className="col-span-full lg:col-span-4 relative">
                <div className="flex flex-col gap-3 relative">
                    <OrderDetail/>
                </div>
            </section>
        </main>
    );
}
