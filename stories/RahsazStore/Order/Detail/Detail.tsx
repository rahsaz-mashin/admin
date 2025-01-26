"use client"

import React from "react";
import {Card, CardBody} from "@nextui-org/card";
import {Accordion, AccordionItem} from "@nextui-org/accordion";
import { Avatar, Button, Divider} from "@nextui-org/react";
import {
    DuotoneCheckSquareIcon,
    DuotoneDangerSquareIcon,
    DuotoneProcessSquareIcon,
    OutlinedCreditCardIcon
} from "@/stories/Icons";
import clsx from "clsx";

export type OrderDetailProps = {
    id?: number;
}


export const OrderDetail = (props: OrderDetailProps) => {
    const {id} = props


    const status: string = "current"
    const step: string = "waitingForPayment"
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


    // @ts-ignore
    return (
        <Card
            shadow="none"
            radius="none"
            // isHoverable
            // isPressable
            className="w-full p-4"
        >
            <CardBody className="flex flex-col gap-3 overflow-y-hidden">
                <div className="flex justify-between items-center">
                    <span className={clsx("flex items-center gap-2 text-sm font-medium", result.color)}>
                        <result.icon size={24}/>
                        <span>{result.label}</span>
                    </span>
                </div>
                <div className="flex justify-between flex-wrap gap-2 flex-col items-start">
                    <span className="flex items-center gap-1 text-gray-500 text-sm font-semibold truncate">
                        <span className="truncate">شماره سفارش:</span>
                        <span className="text-primary">5555</span>
                    </span>
                    <span className="flex items-center gap-1 text-gray-500 text-sm font-semibold truncate">
                        <span className="truncate">مبلغ کل سفارش:</span>
                        <span className="text-primary">10,000,000تومانءء</span>
                    </span>
                    <span className="flex items-center gap-1 text-gray-500 text-sm font-semibold truncate">
                        <span className="truncate">زمان ثبت سفارش:</span>
                        <span className="text-primary">10 مرداد 1403 ساعت 09:48</span>
                    </span>
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
                <Divider/>
                <div className="flex justify-between flex-wrap gap-2 flex-col items-start">
                    <span className="flex items-center gap-1 text-gray-500 text-sm font-semibold truncate">
                        <span className="truncate">روش دریافت:</span>
                        <span className="text-primary">باربری</span>
                    </span>
                    <span className="flex items-center gap-1 text-gray-500 text-sm font-semibold truncate">
                        <span className="truncate">تحویل گیرنده:</span>
                        <span className="text-primary">مسعود مومن</span>
                    </span>
                    <span className="flex items-center gap-1 text-gray-500 text-sm font-semibold truncate">
                        <span className="truncate">شماره موبایل:</span>
                        <span className="text-primary">09122485896</span>
                    </span>
                    <span className="flex items-center gap-1 text-gray-500 text-sm font-semibold truncate">
                        <span className="truncate">آدرس:</span>
                        <span className="text-primary">
                            خراسان رضوی - مشهد - بلوار سجاد - سجاد 24 - پلاک 2 - واحد 1
                        </span>
                    </span>
                    <div className="flex w-full justify-end gap-2 items-center">
                        <Button
                            variant="flat"
                            color="primary"
                            onPress={() => alert("bijak")}
                        >
                            مشاهده بیجک
                        </Button>
                    </div>
                </div>
                <Divider/>
                <div className="flex justify-between flex-wrap gap-2 flex-col items-start">
                    <span className="flex items-center gap-1 text-gray-500 text-sm font-semibold truncate">
                        <span className="truncate">قیمت کالاها(2):</span>
                        <span className="text-primary">باربری</span>
                    </span>
                    <span className="flex items-center gap-1 text-gray-500 text-sm font-semibold truncate">
                        <span className="truncate">هزینه ارسال:</span>
                        <span className="text-primary">پس کرایه</span>
                    </span>
                    <span className="flex items-center gap-1 text-gray-500 text-sm font-semibold truncate">
                        <span className="truncate">تخفیف کالاها:</span>
                        <span className="text-primary">09122485896</span>
                    </span>
                    <span className="flex items-center gap-1 text-gray-500 text-sm font-semibold truncate">
                        <span className="truncate">تخفیف اعمال شده روی سفارش:</span>
                        <span className="text-primary">09122485896</span>
                    </span>
                    <span className="flex items-center gap-1 text-gray-500 text-sm font-semibold truncate">
                        <span className="truncate">سود شما از این خرید:</span>
                        <span className="text-primary">09122485896</span>
                    </span>
                    <span className="flex items-center gap-1 text-gray-500 text-sm font-semibold truncate">
                        <span className="truncate">مبلغ کل سفارش:</span>
                        <span className="text-primary">09122485896</span>
                    </span>
                    <div className="flex w-full justify-end gap-2 items-center">
                        <Button
                            variant="flat"
                            color="primary"
                            onPress={() => alert("factor")}
                        >
                            مشاهده فاکتور
                        </Button>
                    </div>
                    <div className="flex w-full justify-center items-center">
                        {/*// @ts-ignore*/}
                        <Accordion
                            className="p-0"
                            itemClasses={{
                                trigger: "hover:bg-primary/20 rounded-lg px-4 h-10 justify-center",
                                titleWrapper: "text-center flex-auto flex-grow-0",
                                title: "text-primary text-small",
                                indicator: "text-primary"
                            }}
                            isCompact
                        >
                            <AccordionItem
                                key="1"
                                aria-label="payment-history"
                                title="تاریخچه تراکنش ها"
                            >
                                <div className="w-full text-start">
                                    <ul className="flex flex-col">
                                        <OrderPayment isSuccess={false}/>
                                        <OrderPayment isSuccess={true}/>
                                    </ul>
                                </div>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
                <div className="flex flex-col">
                    <OrderProduct/>
                    <OrderProduct/>
                </div>
            </CardBody>
        </Card>
    );
};


export type OrderPaymentProps = {
    isSuccess: boolean
}


export const OrderPayment = (props: OrderPaymentProps) => {
    const {isSuccess} = props
    return (
        <li className="">
            <Card shadow="sm" radius="none">
                <CardBody className="flex flex-row justify-between items-center">
                    <div className="flex flex-row items-center gap-2">
                        <Avatar
                            showFallback
                            fallback={<OutlinedCreditCardIcon size={24}/>}
                            className={isSuccess ? "text-success bg-success-100" : "text-danger bg-danger-100"}
                        />
                        <div className="flex flex-col items-start gap-2 text-sm">
                            <h3 className="font-bold text-black">
                                {isSuccess ? "تراکنش موفق" : "تراکنش ناموفق"}
                            </h3>
                            <h6 className="font-bold text-sm text-gray-500">درگاه اینترنتی</h6>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="font-bold text-danger">
                            70,000,000
                            تومانءء
                        </h3>
                        <Button
                            color="secondary"
                            variant="bordered"
                            size="sm"
                        >
                            مشاهده جزئیات
                        </Button>
                    </div>
                </CardBody>
            </Card>
        </li>
    )
}


export type OrderProductProps = {
    isSuccess?: boolean
}


export const OrderProduct = (props: OrderProductProps) => {
    const {isSuccess} = props
    return (
        <Card shadow="sm" radius="none">
            <CardBody className="flex flex-row justify-between items-center">
                <div className="flex flex-row items-center gap-2">
                    <Avatar
                        showFallback
                        fallback={<OutlinedCreditCardIcon size={24}/>}
                        className={isSuccess ? "text-success bg-success-100" : "text-danger bg-danger-100"}
                    />
                    <div className="flex flex-col items-start gap-2 text-sm">
                        <h3 className="font-bold text-black">
                            کولر روغن سه درجه
                        </h3>
                        <h6 className="font-bold text-sm text-gray-500">درگاه اینترنتی</h6>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <h3 className="font-bold text-danger">
                        70,000,000
                        تومانءء
                    </h3>
                </div>
            </CardBody>
        </Card>
    )
}