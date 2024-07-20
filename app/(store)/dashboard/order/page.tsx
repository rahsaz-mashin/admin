import React from "react";
import {OrderTabs} from "@/stories/RahsazStore/Order/Tabs";


export default function Page() {
    return (
        <main className="grid grid-cols-7 gap-4">
            <section className="col-span-full lg:col-span-3 relative">
                <div className="flex flex-col gap-3 relative">
                    <OrderTabs/>
                </div>
            </section>
            <section className="col-span-full lg:col-span-2 relative">
                {/*<div className="flex flex-col gap-3 relative">*/}
                {/*    <CartSummaryBox/>*/}
                {/*    <CartPreInvoice/>*/}
                {/*    <CartDeliveryTypeBox/>*/}
                {/*    <CartAddressBox/>*/}
                {/*    <CartPaymentWayBox/>*/}
                {/*    <CartCouponBox/>*/}
                {/*</div>*/}
                {/*<CartSubmitBox/>*/}
            </section>
        </main>
    );
}
