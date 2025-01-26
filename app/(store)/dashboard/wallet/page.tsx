import React from "react";
import {WalletTabs} from "@/stories/RahsazStore/Wallet/Tabs";
import {SummarySide} from "@/stories/RahsazStore/Wallet/SummarySide";

export default function Page() {
    return (
        <main className="grid grid-cols-7">
            <section className="col-span-full lg:col-span-3">
                <SummarySide/>
            </section>
            <section className="col-span-full lg:col-span-4 relative">
                <WalletTabs/>
            </section>
            <div className="pb-24 md:pb-0"/>
        </main>
    );
}
