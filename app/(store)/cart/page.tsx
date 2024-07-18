import {CartPendingOrders} from "@/stories/RahsazStore/Cart/PendingOrders/PendingOrders";
import {CartTabs} from "@/stories/RahsazStore/Cart/Tabs";
import {CartDeliveryTypeBox} from "@/stories/RahsazStore/Cart/DeliveryTypeBox";
import React from "react";
import {CartAddressBox} from "@/stories/RahsazStore/Cart/AddressBox";

export default function Page() {
    return (
        <main className="grid grid-cols-6 p-4 gap-4">
            <section className="col-span-full lg:col-span-4 relative">
                <div className="flex flex-col gap-3 relative">
                    <CartPendingOrders/>
                    <CartTabs/>
                </div>
            </section>
            <section className="col-span-full lg:col-span-2 relative">
                <div className="flex flex-col gap-3 relative">
                    <CartDeliveryTypeBox/>
                    <CartAddressBox/>
                </div>
            </section>
        </main>
    );
}
