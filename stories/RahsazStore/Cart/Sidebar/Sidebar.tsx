"use client"

import React, {CSSProperties, useContext} from "react";

import {CartAddressBox} from "@/stories/RahsazStore/Cart/AddressBox";
import {CartCouponBox} from "@/stories/RahsazStore/Cart/CouponBox";
import {CartSummaryBox} from "@/stories/RahsazStore/Cart/SummaryBox";
import {CartPreInvoice} from "@/stories/RahsazStore/Cart/PreInvoice";
import {CartDeliveryTypeBox} from "@/stories/RahsazStore/Cart/DeliveryTypeBox";

import {ContainerDimensionsContext} from "@/context/containerDimensions.context";
import {ScrollShadow} from "@nextui-org/react";
import {Control, UseFormSetValue, UseFormWatch} from "react-hook-form";
import {useSearchParams} from "next/navigation";
import {Cart, cartTypesEnum} from "@/interfaces/Cart.interface";


export type CartSidebarProps = {
    control: Control<Cart>;
    setValue: UseFormSetValue<Cart>;
    watch: UseFormWatch<Cart>;
}


export const CartSidebar = (props: CartSidebarProps) => {

    const {
        control,
        setValue,
        watch,
    } = props

    const containerDimensionsContext = useContext(ContainerDimensionsContext)
    const h = containerDimensionsContext?.dimensions?.height

    const searchParams = useSearchParams()
    const type = searchParams.get("type") as cartTypesEnum

    return (
        <div className="h-fit min-h-[--het] lg:h-[--het] lg:min-h-none" style={{"--het": `${(h || 0) - 116}px`} as CSSProperties}>
            {(type === cartTypesEnum.next)
                ?
                null
                :
                (
                    <ScrollShadow
                        hideScrollBar
                        visibility="none"
                        className="flex flex-col h-full scroll-smooth"
                    >
                        <CartPreInvoice
                            control={control}
                            setValue={setValue}
                            watch={watch}
                        />
                        <CartDeliveryTypeBox
                            control={control}
                            setValue={setValue}
                            watch={watch}
                        />
                        <CartAddressBox
                            control={control}
                            setValue={setValue}
                            watch={watch}
                        />
                        {/*
                        <CartPaymentWayBox
                            control={control}
                            setValue={setValue}
                            watch={watch}
                        />
                        */}
                        <CartCouponBox
                            control={control}
                            setValue={setValue}
                            watch={watch}
                        />
                        <CartSummaryBox
                            control={control}
                            setValue={setValue}
                            watch={watch}
                        />
                    </ScrollShadow>
                )}
        </div>
    );
};


