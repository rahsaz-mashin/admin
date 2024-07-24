"use client"

import React from "react";
import {Card, CardBody} from "@nextui-org/card";
import {Button} from "@nextui-org/react";
import {ArrowLeftIcon} from "@storybook/icons";
import {DuotoneCheckSquareIcon, DuotoneDangerSquareIcon, DuotoneProcessSquareIcon} from "@/stories/Icons";
import clsx from "clsx";

export type WalletItemProps = {
    isConfirmed?: boolean;
    isRejected?: boolean;
    type: "cheque" | "bank" | "online" | "order";
    detail?: {}
}


export const WalletItem = (props: WalletItemProps) => {
    const {isConfirmed, isRejected, type, detail} = props
    const result: any = {
        color: "text-warning-500",
        status: "نامشخص",
        icon: DuotoneDangerSquareIcon,
        label: "نامشخص",
        type: "none"

    }

    if(isConfirmed) {
        result.color = "text-green-500"
        result.status = "موفق"
        result.icon = DuotoneCheckSquareIcon
    }
    else if(isRejected) {
        result.color = "text-red-500"
        result.status = "ناموفق"
        result.icon = DuotoneDangerSquareIcon
    }
    else {
        result.color = "text-blue-500"
        result.status = "در حال پردازش"
        result.icon = DuotoneProcessSquareIcon
    }


    switch (type) {
        case "cheque":
            result.label = "چک فیزیکی"
            result.type = "increase"
            break;
        case "bank":
            result.label = "واریز بانکی"
            result.type = "increase"
            break;
        case "online":
            result.label = "درگاه آنلاین"
            result.type = "increase"
            break;
        case "order":
            result.label = "ثبت سفارش"
            result.type = "decrease"
            break;
    }


    return (
        <li>
            <Card
                shadow="none"
                radius="md"
                isHoverable
                className="w-full cursor-pointer"
            >
                <CardBody className="flex flex-col gap-3 p-3">
                    <div className="flex justify-between items-center">
                        <span className={clsx("flex items-center gap-2 text-sm font-medium", result.color)}>
                            <result.icon size={24}/>
                            <span>{result.status}</span>
                        </span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="flex items-center gap-1 text-gray-500 text-sm font-light">
                            <span>10 خرداد 1403</span>
                        </span>
                        <span className="flex items-center gap-1 text-gray-500 text-base font-semibold">
                            <span className={result.type === "increase" ? "text-green-600" : result.type === "decrease" ? "text-red-600" : "text-gray-600"}>10,000,000تومانءء</span>
                        </span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="flex items-center gap-1 text-gray-500 text-sm font-bold">
                            <span>{result.label}</span>
                        </span>
                        <Button
                            color="secondary"
                            variant="light"
                            size="sm"
                        >
                            جزئیات
                        </Button>
                    </div>
                    {/*{(result.error || result.warning || result.info) && (*/}
                    {/*    <div className="flex justify-start items-center text-start">*/}
                    {/*        <span*/}
                    {/*            className={clsx("flex items-center gap-1 text-sm font-light", result.error ? "text-danger" : result.warning ? "text-warning" : "text-gray-600")}>*/}
                    {/*            {result.error || result.warning || result.info}*/}
                    {/*        </span>*/}
                    {/*    </div>*/}
                    {/*)}*/}
                </CardBody>
            </Card>
        </li>
    );
};


