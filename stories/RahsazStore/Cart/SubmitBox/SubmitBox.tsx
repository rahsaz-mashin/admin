"use client"


import React from "react";
import {Button} from "@nextui-org/react";
import {Control, useController, UseFormSetValue, UseFormWatch} from "react-hook-form";
import {NumericFormat} from "react-number-format";
import {useRouter, useSearchParams} from "next/navigation";
import {Cart, cartTypesEnum} from "@/interfaces/Cart.interface";


export type CartSubmitBoxProps = {
    control: Control<Cart>;
    setValue: UseFormSetValue<Cart>;
    watch: UseFormWatch<Cart>;
}


export const CartSubmitBox = (props: CartSubmitBoxProps) => {

    const {
        control,
        setValue,
        watch,
    } = props



    const deliveryMethod = watch("deliveryMethod")
    const deliveryMethodInfo = watch("deliveryMethodInfo")
    const address = watch("address")


    const router = useRouter()


    const searchParams = useSearchParams()
    const type = searchParams.get("type") as cartTypesEnum

    if (type === cartTypesEnum.next) {
        return (
            <div className="flex flex-col gap-3 col-span-full flex-shrink-0 p-4">
                <div className="flex flex-row justify-between">
                <span>
                    مایل هستید کالاها به سبد خرید منتقل شوند؟
                </span>
                </div>
                <Button
                    color="primary"
                    variant="shadow"
                    size="lg"
                    onPress={() => {
                        router.push("?type=current")
                    }}
                >
                    انتقال همه به سبد خرید
                </Button>
            </div>
        );
    }


    if (!deliveryMethod) {
        return (
            <div className="flex flex-col gap-3 col-span-full flex-shrink-0 p-4">
                <div className="flex flex-row justify-between">
                <span>
                    روش دریافت کالا را انتخاب کنید.
                </span>
                </div>
                <Button
                    color="primary"
                    variant="shadow"
                    size="lg"
                    onPress={() => {
                        router.push("#delivery")
                    }}
                >
                    انتخاب روش دریافت
                </Button>
            </div>
        );
    }
    if (deliveryMethodInfo?.acceptAddress && !address) {
        return (
            <div className="flex flex-col gap-3 col-span-full flex-shrink-0 p-4">
                <div className="flex flex-row justify-between">
                <span>
                    آدرس را انتخاب کنید.
                </span>
                </div>
                <Button
                    color="primary"
                    variant="shadow"
                    size="lg"
                    onPress={() => {
                        router.push("#address")
                    }}
                >
                    انتخاب آدرس
                </Button>
            </div>
        );
    }


    return (
        <div className="flex flex-col gap-3 col-span-full flex-shrink-0 p-4">
            <div className="flex flex-row justify-between">
                <span>
                    قابل پرداخت:
                </span>
                <div className="font-bold">
                    <NumericFormat
                        value={0}
                        thousandSeparator=","
                        decimalSeparator="."
                        allowNegative={false}
                        decimalScale={0}
                        allowLeadingZeros={false}
                        displayType="text"
                    />
                    {" "}
                    <span className="text-primary text-sm">
                        تومانءء
                    </span>
                </div>
            </div>
            <Button
                color="primary"
                variant="shadow"
                size="lg"
                type="submit"
            >
                پرداخت
            </Button>
        </div>
    );
};


