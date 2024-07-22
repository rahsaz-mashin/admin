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
    const result: any = {
        color: "text-warning-500",
        label: "نامشخص",
        icon: DuotoneDangerSquareIcon,
        error: "",
        warning: "",
        info: "",
        tools: []
    }
    switch (status) {
        case "current":
            switch (step) {
                case "waitingForPayment":
                    result.color = "text-warning-500"
                    result.label = "در انتظار پرداخت"
                    result.icon = DuotoneDangerSquareIcon
                    result.error = "سفارش شما در صورت عدم پرداخت تا 23 دقیقه دیگر لغو خواهد شد."
                    result.tools = [
                        <span className="flex items-center gap-1 text-gray-500 text-sm font-semibold">
                            <span>قابل پرداخت:</span>
                            <span className="text-primary">10,000,000تومانءء</span>
                        </span>,
                        <Button
                            variant="shadow"
                            color="primary"
                            onPress={() => alert("pay")}
                        >
                            پرداخت
                        </Button>
                    ]
                    break
                case "reserved":
                    result.color = "text-warning-500"
                    result.label = "رزرو شده - در انتظار ادامه پرداخت"
                    result.icon = DuotoneDangerSquareIcon
                    result.error = "سفارش شما به صورت کامل پرداخت نشده است و تا 67 ساعت دیگر مهلت خواهید داشت تا پرداخت بعدی در جهت تکمیل سفارش را انجام دهید."
                    result.tools = [
                        <span className="flex items-center gap-1 text-gray-500 text-sm font-semibold">
                            <span>قابل پرداخت:</span>
                            <span className="text-primary">10,000,000تومانءء</span>
                        </span>,
                        <Button
                            variant="shadow"
                            color="primary"
                            onPress={() => alert("pay")}
                        >
                            ادامه پرداخت
                        </Button>
                    ]
                    break
                case "waitingForConfirm":
                    result.color = "text-blue-500"
                    result.label = "در انتظار تایید"
                    result.icon = DuotoneProcessSquareIcon
                    result.info = "سفارش شما ثبت شده و در انتظار تایید توسط کارشناسان می باشد."
                    result.tools = [
                        <Button
                            variant="flat"
                            color="primary"
                            onPress={() => alert("factor")}
                        >
                            مشاهده فاکتور
                        </Button>
                    ]
                    break
                case "processing":
                    result.color = "text-blue-500"
                    result.label = "در حال پردازش"
                    result.icon = DuotoneProcessSquareIcon
                    result.info = "سفارش شما ثبت شده است و در حال انجام فرایندهای لازم می باشد."
                    result.tools = [
                        <Button
                            variant="flat"
                            color="primary"
                            onPress={() => alert("factor")}
                        >
                            مشاهده فاکتور
                        </Button>
                    ]
                    break
                case "readyForDelivery":
                    result.color = "text-blue-500"
                    result.label = "آماده تحویل"
                    result.icon = DuotoneProcessSquareIcon
                    result.info = "سفارش شما آماده برای ارسال یا تحویل می باشد."
                    result.tools = [
                        <Button
                            variant="flat"
                            color="primary"
                            onPress={() => alert("factor")}
                        >
                            مشاهده فاکتور
                        </Button>
                    ]
                    break
                case "sent":
                    result.color = "text-blue-500"
                    result.label = "ارسال شده"
                    result.icon = DuotoneProcessSquareIcon
                    result.info = "سفارش شما ارسال شده است."
                    result.tools = [
                        <Button
                            variant="flat"
                            color="primary"
                            onPress={() => alert("bijak")}
                        >
                            مشاهده بیجک
                        </Button>,
                        <Button
                            variant="flat"
                            color="primary"
                            onPress={() => alert("factor")}
                        >
                            مشاهده فاکتور
                        </Button>
                    ]
                    break
            }
            break
        case "delivered":
            switch (step) {
                case "completed":
                    result.color = "text-green-500"
                    result.label = "تحویل شده"
                    result.icon = DuotoneCheckSquareIcon
                    result.tools = [
                        <Button
                            variant="flat"
                            color="primary"
                            onPress={() => alert("bijak")}
                        >
                            مشاهده بیجک
                        </Button>,
                        <Button
                            variant="flat"
                            color="primary"
                            onPress={() => alert("factor")}
                        >
                            مشاهده فاکتور
                        </Button>
                    ]
                    break
            }
            break
        case "return":
            switch (step) {
                case "waitingForConfirm":
                    result.color = "text-blue-500"
                    result.label = "مرجوعی - در انتظار تایید"
                    result.icon = DuotoneProcessSquareIcon
                    result.info = "درخواست مرجوعی شما ثبت شده و در انتظار تایید توسط کارشناسان می باشد."
                    break
                case "processing":
                    result.color = "text-blue-500"
                    result.label = "مرجوعی - در حال پردازش"
                    result.icon = DuotoneProcessSquareIcon
                    result.info = "درخواست مرجوعی شما در حال انجام فرایندهای لازم می باشد."
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
                    result.error = "سفارش شما به صورت سیستمی لغو شده است."
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
                // isPressable
                className="w-full cursor-pointer"
            >
                <CardBody className="flex flex-col gap-3 p-3">
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
                            <span>مبلغ کل سفارش:</span>
                            <span className="text-primary">10,000,000تومانءء</span>
                        </span>
                    </div>
                    <div className="flex justify-start items-center">

                    </div>
                    {(result.error || result.warning || result.info) && (
                        <div className="flex justify-start items-center text-start">
                            <span
                                className={clsx("flex items-center gap-1 text-sm font-light", result.error ? "text-danger" : result.warning ? "text-warning" : "text-gray-600")}>
                                {result.error || result.warning || result.info}
                            </span>
                        </div>
                    )}
                    {!!result.tools?.length && (
                        <div className="flex justify-end gap-2 items-center">
                            {(result.tools.map((tool: any) => {
                                    return tool
                                })
                            )}
                        </div>
                    )}
                </CardBody>
            </Card>
        </li>
    );
};


