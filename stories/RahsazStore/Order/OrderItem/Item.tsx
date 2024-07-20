"use client"

import React from "react";
import {Card, CardBody} from "@nextui-org/card";
import {Button} from "@nextui-org/react";
import {ArrowLeftIcon} from "@storybook/icons";
import {DuotoneCheckSquareIcon, DuotoneDangerSquareIcon, DuotoneProcessSquareIcon} from "@/stories/Icons";
import clsx from "clsx";

export type OrderItemProps = {
    status: "current" | "delivered" | "return" | "canceled";
    // current: waitingForPayment reserved waitingForConfirm processing readyForDelivery sent
    // delivered: completed
    // return: waitingForConfirm processing completed
    // canceled: completed
    step: "waitingForPayment" | "reserved" | "waitingForConfirm" | "processing" | "readyForDelivery" | "sent" | "completed"
    // deliveryType: "freight" | "bus" | "warehouse";
}


export const OrderItem = (props: OrderItemProps) => {
    const {status, step} = props
    const result = {
        color: "text-warning-500",
        label: "نامشخص",
        icon: DuotoneDangerSquareIcon
    }
    switch (status) {
        case "current":
            switch (step) {
                case "waitingForPayment":
                    result.color = "text-warning-500"
                    result.label = "در انتظار پرداخت"
                    result.icon = DuotoneDangerSquareIcon
                    break
                case "reserved":
                    result.color = "text-warning-500"
                    result.label = "رزرو شده - در انتظار ادامه پرداخت"
                    result.icon = DuotoneDangerSquareIcon
                    break
                case "waitingForConfirm":
                    result.color = "text-blue-500"
                    result.label = "در انتظار تایید"
                    result.icon = DuotoneProcessSquareIcon
                    break
                case "processing":
                    result.color = "text-blue-500"
                    result.label = "در حال پردازش"
                    result.icon = DuotoneProcessSquareIcon
                    break
                case "readyForDelivery":
                    result.color = "text-blue-500"
                    result.label = "آماده تحویل"
                    result.icon = DuotoneProcessSquareIcon
                    break
                case "sent":
                    result.color = "text-blue-500"
                    result.label = "ارسال شده"
                    result.icon = DuotoneProcessSquareIcon
                    break
            }
            break
        case "delivered":
            switch (step) {
                case "completed":
                    result.color = "text-green-500"
                    result.label = "تحویل شده"
                    result.icon = DuotoneCheckSquareIcon
                    break
            }
            break
        case "return":
            switch (step) {
                case "waitingForConfirm":
                    result.color = "text-blue-500"
                    result.label = "مرجوعی - در انتظار تایید"
                    result.icon = DuotoneProcessSquareIcon
                    break
                case "processing":
                    result.color = "text-blue-500"
                    result.label = "مرجوعی - در حال پردازش"
                    result.icon = DuotoneProcessSquareIcon
                    break
                case "completed":
                    result.color = "text-green-500"
                    result.label = "مرجوع شده"
                    result.icon = DuotoneCheckSquareIcon
                    break
            }
            break
        case "canceled":
            switch (step) {
                case "completed":
                    result.color = "text-red-500"
                    result.label = "لغو شده"
                    result.icon = DuotoneDangerSquareIcon
                    break
            }
            break
    }
    return (
        <li>
            <Card
                shadow="none"
                radius="md"
                isHoverable
                isPressable
                className="w-full"
            >
                <CardBody className="flex flex-col gap-3 p-2">
                    <div className="flex justify-between items-center">
                        <span className={clsx("flex items-center gap-2 text-sm font-medium", result.color)}>
                            <result.icon size={24}/>
                            <span>{result.label}</span>
                        </span>
                        <Button
                            color="default"
                            variant="light"
                            isIconOnly
                        >
                            <ArrowLeftIcon/>
                        </Button>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="flex items-center gap-1 text-gray-500 text-sm font-light">
                            <span>10 خرداد 1403</span>
                        </span>
                        <span className="flex items-center gap-1 text-gray-500 text-sm font-semibold">
                            <span>شماره سفارش:</span>
                            <span className="text-primary">5555</span>
                        </span>
                    </div>
                    <div className="flex justify-end items-center">
                        <span className="flex items-center gap-1 text-gray-500 text-sm font-semibold">
                            <span>مبلغ سفارش:</span>
                            <span className="text-primary">10,000,000تومانءء</span>
                        </span>
                    </div>
                    <div className="flex justify-start items-center">
                        <span className="flex items-center gap-1 text-danger text-sm font-light">
                            سفارش شما در صورت عدم پرداخت تا 23 دقیقه دیگر لغو خواهد شد.
                        </span>
                    </div>
                    <div className="flex justify-start items-center">

                    </div>
                    <div className="flex justify-end gap-2 items-center">
                        <Button
                            color="default"
                            variant="solid"
                        >
                            انصراف
                        </Button>
                        <Button
                            color="primary"
                            variant="shadow"
                        >
                            پرداخت
                        </Button>
                    </div>
                </CardBody>
            </Card>
        </li>
    );
};


