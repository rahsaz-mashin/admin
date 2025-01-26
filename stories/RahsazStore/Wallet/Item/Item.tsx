"use client"

import React from "react";
import {Card, CardBody} from "@nextui-org/card";
import {Button} from "@nextui-org/react";
import {ArrowLeftIcon} from "@storybook/icons";
import {DuotoneCheckSquareIcon, DuotoneDangerSquareIcon, DuotoneProcessSquareIcon} from "@/stories/Icons";
import clsx from "clsx";
import {NumericFormat} from "react-number-format";
import jMoment from "jalali-moment";
import Link from "next/link";
import {walletTransactionMethodsEnum, walletTransactionStatusesEnum} from "@/interfaces/WalletTransaction.interface";

export type WalletItemProps = {
    id: number;
    status: walletTransactionStatusesEnum;
    method: walletTransactionMethodsEnum;
    amount: number;
    issueDate?: Date;
    detail?: {}
}


export const WalletItem = (props: WalletItemProps) => {
    const {
        id,
        status,
        method,
        amount,
        issueDate,
    } = props


    const result: any = {
        color: "text-warning-500",
        status: "نامشخص",
        icon: DuotoneDangerSquareIcon,
        label: "نامشخص",
        type: "none"
    }


    switch (status) {
        case walletTransactionStatusesEnum.checking:
            result.color = "text-blue-500"
            result.status = "در حال بررسی"
            result.icon = DuotoneProcessSquareIcon
            break;
        case walletTransactionStatusesEnum.pending:
            result.color = "text-yellow-500"
            result.status = "در انتظار اقدام"
            result.icon = DuotoneProcessSquareIcon
            break;
        case walletTransactionStatusesEnum.confirmed:
            result.color = "text-green-500"
            result.status = "تایید شده"
            result.icon = DuotoneCheckSquareIcon
            break;
        case walletTransactionStatusesEnum.rejected:
            result.color = "text-red-500"
            result.status = "رد شده"
            result.icon = DuotoneDangerSquareIcon
            break;
    }


    switch (method) {
        case walletTransactionMethodsEnum.cheque:
            result.label = "چک فیزیکی"
            result.type = "increase"
            break;
        case walletTransactionMethodsEnum.bank:
            result.label = "واریز بانکی"
            result.type = "increase"
            break;
        case walletTransactionMethodsEnum.online:
            result.label = "درگاه آنلاین"
            result.type = "increase"
            break;
        case walletTransactionMethodsEnum.order:
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
                as={Link}
                href={`/dashboard/wallet/${id}`}
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
                            <span>
                                {jMoment(issueDate).format("jYYYY/jMM/jDD")}
                            </span>
                        </span>
                        <span className="flex items-center gap-1 text-gray-500 text-base font-semibold">
                            <span
                                className={result.type === "increase" ? "text-green-600" : result.type === "decrease" ? "text-red-600" : "text-gray-600"}
                            >
                                <NumericFormat
                                    value={amount}
                                    thousandSeparator=","
                                    decimalSeparator="."
                                    allowNegative={false}
                                    decimalScale={0}
                                    allowLeadingZeros={false}
                                    displayType="text"
                                />
                                تومانءء
                            </span>
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


//