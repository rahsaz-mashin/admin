import React from "react";
import {WalletTabs} from "@/stories/RahsazStore/Wallet/Tabs";
import {WalletChart} from "@/stories/RahsazStore/Wallet/Chart";
import {WalletBalanceBox} from "@/stories/RahsazStore/Wallet/BalanceBox";

export default function Page() {
    return (
        <main className="grid grid-cols-7">
            <section className="col-span-full lg:order-last lg:col-span-3 relative">
                <div className="flex flex-col gap-3 relative">
                    <WalletChart/>
                    <WalletBalanceBox/>
                </div>
            </section>
            <section className="col-span-full lg:col-span-4 relative">
                <div className="flex flex-col gap-3 relative">
                    <WalletTabs/>
                    {/*<OrderDetail/>*/}
                </div>
            </section>
        </main>
    );
}
