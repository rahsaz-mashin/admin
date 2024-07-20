"use client"

import React from "react";
import {Button} from "@nextui-org/react";
import Link from "next/link";

export type CartPreInvoiceProps = {}


export const CartPreInvoice = (
    {}
        :
        CartPreInvoiceProps
) => {


    return (
        <div className="flex flex-col gap-2">
            <Button
                color="default"
                variant="solid"
                size="lg"
            >
                مشاهده پیش فاکتور
            </Button>
            <span className="font-light">
                برای دریافت فاکتور، پس از ثبت سفارش، از حساب کاربری در صفحه
                <Link href="/dashboard/order" className="font-semibold text-blue-500"> سفارشات من </Link>
                به جزئیات سفارش سر بزنید.
            </span>
        </div>
    );
};


