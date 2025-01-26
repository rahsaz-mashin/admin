"use client"

import React from "react";
import {Button} from "@nextui-org/react";
import Link from "next/link";
import {Control, UseFormSetValue, UseFormWatch} from "react-hook-form";
import {Cart} from "@/interfaces/Cart.interface";

export type CartPreInvoiceProps = {
    control: Control<Cart>;
    setValue: UseFormSetValue<Cart>;
    watch: UseFormWatch<Cart>;
}


export const CartPreInvoice = (props: CartPreInvoiceProps) => {
    const {
        control,
        setValue,
        watch,
    } = props

    return (
        <div id="invoice" className="flex-shrink-0 p-4 flex flex-col gap-2">
            <Button
                color="default"
                variant="solid"
                size="lg"
                as={Link}
                href="/preinvoice"
            >
                مشاهده پیش فاکتور
            </Button>
            <span className="font-light text-justify">
                برای دریافت فاکتور، پس از ثبت سفارش، از حساب کاربری در صفحه
                <Link href="/dashboard/order" className="font-semibold text-blue-500"> سفارشات من </Link>
                به جزئیات سفارش سر بزنید.
            </span>
        </div>
    );
};


