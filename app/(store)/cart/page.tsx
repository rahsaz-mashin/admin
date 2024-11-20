import {CartPendingOrders} from "@/stories/RahsazStore/Cart/PendingOrders/PendingOrders";
import {CartTabs} from "@/stories/RahsazStore/Cart/Tabs";
import {CartDeliveryTypeBox} from "@/stories/RahsazStore/Cart/DeliveryTypeBox";
import React from "react";
import {CartAddressBox} from "@/stories/RahsazStore/Cart/AddressBox";
import {CartPaymentWayBox} from "@/stories/RahsazStore/Cart/PaymentWayBox";
import {CartCouponBox} from "@/stories/RahsazStore/Cart/CouponBox";
import {CartSummaryBox} from "@/stories/RahsazStore/Cart/SummaryBox";
import {CartPreInvoice} from "@/stories/RahsazStore/Cart/PreInvoice";
import {CartSubmitBox} from "@/stories/RahsazStore/Cart/SubmitBox";

export default function Page() {

    return (
        <main className="grid grid-cols-6 gap-0">
            <section className="col-span-full lg:col-span-4 relative">
                <div className="flex flex-col relative">
                    <CartPendingOrders/>
                    <CartTabs/>
                </div>
            </section>
            <section className="col-span-full p-4 lg:col-span-2 relative">
                <div className="flex flex-col gap-3 relative">
                    <CartSummaryBox/>
                    <CartPreInvoice/>k
                    <CartDeliveryTypeBox/>
                    <CartAddressBox/>
                    <CartPaymentWayBox/>
                    <CartCouponBox/>
                    <CartSubmitBox/>
                </div>
            </section>
        </main>
    );
}
