import React from "react";
import {WalletTabs} from "@/stories/RahsazStore/Wallet/Tabs";
import {SummarySide} from "@/stories/RahsazStore/Wallet/SummarySide";

export default function Page({params}: { params: { id: number } }) {
    return (
        <main className="grid grid-cols-7">
            <section className="col-span-full lg:col-span-3">
                <SummarySide transactionId={params.id}/>
            </section>
            <section className="col-span-full hidden lg:block lg:col-span-4 relative">
                <WalletTabs/>
            </section>
        </main>
    );
}
