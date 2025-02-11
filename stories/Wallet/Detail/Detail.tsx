/* eslint-disable @typescript-eslint/no-explicit-any */



"use client"

import React, {useEffect, useState} from "react";
import {Card, CardBody, Alert, Divider, Image, Spinner, Accordion, AccordionItem} from "@heroui/react";
import {DuotoneCheckSquareIcon, DuotoneDangerSquareIcon, DuotoneProcessSquareIcon} from "@/stories/Icons";
import clsx from "clsx";
import {axiosCoreWithAuth} from "@/lib/axios";
import {
    WalletTransaction,
    walletTransactionMethodsEnum,
    walletTransactionStatusesEnum
} from "@/interfaces/WalletTransaction.interface";
import {NumericFormat} from "react-number-format";
import jMoment from "jalali-moment";
import {Payment} from "@/interfaces/Payment.interface";
import NextImage from "next/image";
import {AccountDisplay} from "@/stories/AccountDisplay";


export type WalletTransactionDetailProps = {
    id?: number;
    full?: boolean;
}


export const WalletTransactionDetail = (props: WalletTransactionDetailProps) => {
    const {id, full} = props

    const [isLoading, setLoading] = useState<boolean>(true)
    const [data, setData] = useState<WalletTransaction | null>(null)
    const axios = axiosCoreWithAuth()
    const getData = async () => {
        setLoading(true)
        const _data: WalletTransaction = await axios.get(`/store/wallet/transaction/${id}`)
        setData(_data)
        setLoading(false)
    }
    useEffect(() => {
        getData()
    }, []);


    const result: any = {
        color: "text-warning-500",
        status: "نامشخص",
        icon: DuotoneDangerSquareIcon,
        label: "نامشخص",
        type: "none"
    }


    if (isLoading) {
        return (
            <Card
                shadow="none"
                radius="none"
                className="w-full p-4"
            >
                <CardBody className="flex flex-col gap-3 overflow-y-hidden">
                    <div className="w-full flex justify-center items-center py-12">
                        <Spinner/>
                    </div>
                </CardBody>
            </Card>
        )
    }

    if (!data) {
        return (
            <Card
                shadow="none"
                radius="none"
                className="w-full p-4"
            >
                <CardBody className="flex flex-col gap-3 overflow-y-hidden">
                    <div className="w-full flex justify-center items-center py-2 text-red-500">
                        خطایی رخ داده!
                    </div>
                </CardBody>
            </Card>
        )
    }


    switch (data.status) {
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


    switch (data.method) {
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
        <Card
            shadow="none"
            radius="none"
            className="w-full p-4"
        >
            <CardBody className="flex flex-col gap-3 overflow-y-hidden">
                {!!full && !!data.account && (
                    <>
                        <div className="flex justify-between items-center">
                            <span className={clsx("flex items-center gap-2 text-sm font-medium justify-between")}>
                                <AccountDisplay
                                    account={data.account}
                                />
                            </span>
                        </div>
                        <Divider/>
                    </>
                )}
                <div className="flex justify-between items-center">
                    <span className={clsx("flex items-center gap-2 text-sm font-medium", result.color)}>
                        <result.icon size={24}/>
                        <span>{result.status}</span>
                    </span>
                </div>
                <div className="flex justify-between flex-wrap gap-2 flex-col items-start">
                    <span className="flex items-center gap-1 text-gray-500 text-sm font-semibold truncate">
                        <span className="truncate">نوع تراکنش:</span>
                        <span className="text-primary">{result.label}</span>
                    </span>
                    <span className="flex items-center gap-1 text-gray-500 text-sm font-semibold truncate">
                        <span className="truncate">مبلغ:</span>
                        <span className="text-primary">
                            <NumericFormat
                                value={data.amount}
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
                    <span className="flex items-center gap-1 text-gray-500 text-sm font-semibold truncate">
                        <span className="truncate">زمان ثبت:</span>
                        <span className="text-primary">
                            {jMoment(data.createdAt).format("jYYYY/jMM/jDD")}
                        </span>
                    </span>
                </div>
                <Divider/>
                {(data.method === walletTransactionMethodsEnum.online) && (<OnlinePayment data={data.payment!}/>)}
                {(data.method === walletTransactionMethodsEnum.bank) && (<BankPayment data={data.payment!}/>)}
                {(data.method === walletTransactionMethodsEnum.cheque) && (<ChequePayment data={data.payment!}/>)}
                <Divider/>
                {data.payment && (<ConfirmRejectStatus data={data.payment}/>)}
            </CardBody>
        </Card>
    );
};


const ConfirmRejectStatus = ({data}: { data: Payment }) => {

    const {
        isConfirmed,
        confirmedAt,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        confirmedBy,

        isRejected,
        rejectedAt,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        rejectedBy,
        rejectionText,
    } = data



    if (isConfirmed && confirmedAt) {
        return (
            <Alert
                color="success"
                variant="solid"
                classNames={{base: "text-white text-start"}}
                title="تایید شده"
                description={(
                    <div className="flex flex-col gap-1 items-start">
                        <div className="font-light">
                            این پرداخت در تاریخ
                            {jMoment(confirmedAt).format(" jYYYY/jMM/jDD ساعت HH:mm ")}
                            تایید شده است.
                        </div>
                    </div>
                )}
            />
        )
    }

    if (isRejected && rejectedAt) {
        return (
            <Alert
                color="danger"
                variant="solid"
                classNames={{base: "text-white text-start"}}

                title="رد شده"
                description={(
                    <div className="flex flex-col gap-1 items-start">
                        <div className="font-light">
                            این پرداخت در تاریخ
                            {jMoment(rejectedAt).format(" jYYYY/jMM/jDD ساعت HH:mm ")}
                            رد شده است.
                        </div>
                        {rejectionText && (
                            <div
                                className="flex items-center h-9 font-bold gap-1 text-sm bg-white text-danger p-2 rounded">
                                دلیل:
                                <div className="font-light">
                                    {rejectionText}
                                </div>
                            </div>
                        )}
                    </div>
                )}
            />
        )
    }

    if (!isConfirmed && !isRejected) {
        return (
            <Alert
                color="secondary"
                variant="solid"
                classNames={{base: "text-white text-start"}}
                title="در حال بررسی"
                description="در حال بررسی تراکنش هستیم!"
            />
        )
    }

    return null

}


const OnlinePayment = ({data}: { data: Payment }) => {
    return (
        <div className="flex justify-between flex-wrap gap-2 flex-col items-start">
            <span className="flex items-center gap-1 text-gray-500 text-sm font-semibold truncate">
                <span className="truncate">روش پرداخت:</span>
                <span className="text-primary">درگاه آنلاین</span>
            </span>
            <span className="flex items-center gap-1 text-gray-500 text-sm font-semibold truncate">
                <span className="truncate">زمان پرداخت:</span>
                <span
                    className="text-primary">{data.dueDate ? jMoment(data.dueDate).format("jYYYY/jMM/jDD ساعت HH:mm") : "-"}</span>
            </span>
            <span className="flex items-center gap-1 text-gray-500 text-sm font-semibold truncate">
                <span className="truncate">نام بانک:</span>
                <span className="text-primary">{data.bankName || "-"}</span>
            </span>
            <span className="flex items-center gap-1 text-gray-500 text-sm font-semibold truncate">
                <span className="truncate">شماره کارت مبداء:</span>
                <span className="text-primary">{data.bankAccountNumber || "-"}</span>
            </span>
            <span className="flex items-center gap-1 text-gray-500 text-sm font-semibold truncate">
                <span className="truncate">شماره رهگیری:</span>
                <span className="text-primary">{data.traceNumber || "-"}</span>
            </span>
            <span className="flex items-center gap-1 text-gray-500 text-sm font-semibold truncate">
                <span className="truncate">شماره مرجع:</span>
                <span className="text-primary">{data.referenceNumber || "-"}</span>
            </span>
            <span className="flex items-center gap-1 text-gray-500 text-sm font-semibold truncate">
                <span className="truncate">شناسه رهگیری:</span>
                <span className="text-primary">{data.transactionReferenceID || "-"}</span>
            </span>
            <span className="flex items-center gap-1 text-gray-500 text-sm font-semibold truncate">
                <span className="truncate">شماره مرجع شاپرک:</span>
                <span className="text-primary">{data.shaparakRefNumber || "-"}</span>
            </span>
        </div>
    )
}

const BankPayment = ({data}: { data: Payment }) => {
    return (
        <div className="flex justify-between flex-wrap gap-2 flex-col items-start">
            <span className="flex items-center gap-1 text-gray-500 text-sm font-semibold truncate">
                <span className="truncate">روش پرداخت:</span>
                <span className="text-primary">واریز بانکی</span>
            </span>
            <span className="flex items-center gap-1 text-gray-500 text-sm font-semibold truncate">
                <span className="truncate">زمان واریز:</span>
                <span className="text-primary">{data.dueDate ? jMoment(data.dueDate).format("jYYYY/jMM/jDD ساعت HH:mm") : "-"}</span>
            </span>
            <span className="flex items-center gap-1 text-gray-500 text-sm font-semibold truncate">
                <span className="truncate">نام بانک:</span>
                <span className="text-primary">{data.bankName || "-"}</span>
            </span>
            <span className="flex items-center gap-1 text-gray-500 text-sm font-semibold truncate">
                <span className="truncate">شماره حساب مبداء:</span>
                <span className="text-primary">{data.bankAccountNumber || "-"}</span>
            </span>
            <span className="flex items-center gap-1 text-gray-500 text-sm font-semibold truncate">
                <span className="truncate">شماره فیش:</span>
                <span className="text-primary">{data.receiptNumber || "-"}</span>
            </span>
            <span className="flex items-center gap-1 text-gray-500 text-sm font-semibold truncate">
                <span className="truncate">شماره رهگیری:</span>
                <span className="text-primary">{data.trackingNumber || "-"}</span>
            </span>
            <div className="flex w-full justify-end gap-2 items-center">
                <Accordion variant="splitted" className="px-0" fullWidth>
                    <AccordionItem key="1" aria-label="Accordion 1" title="مشاهده تصویر">
                        <div className="flex justify-center items-center">
                            <Image
                                as={NextImage}
                                width={512}
                                height={512}
                                alt="رسید واریز بانکی"
                                src={data.picture ? `${data.picture?.system.baseUrl}/${data.picture?.path}` : ""}
                                radius="sm"
                                loading="eager"
                                className="w-full"
                            />
                        </div>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    )
}

const ChequePayment = ({data}: { data: Payment }) => {
    return (
        <div className="flex justify-between flex-wrap gap-2 flex-col items-start">
            <span className="flex items-center gap-1 text-gray-500 text-sm font-semibold truncate">
                <span className="truncate">روش پرداخت:</span>
                <span className="text-primary">واریز بانکی</span>
            </span>
            <span className="flex items-center gap-1 text-gray-500 text-sm font-semibold truncate">
                <span className="truncate">زمان واریز:</span>
                <span className="text-primary">{data.dueDate ? jMoment(data.dueDate).format("jYYYY/jMM/jDD ساعت HH:mm") : "-"}</span>
            </span>
            <span className="flex items-center gap-1 text-gray-500 text-sm font-semibold truncate">
                <span className="truncate">نام بانک:</span>
                <span className="text-primary">{data.bankName || "-"}</span>
            </span>
            <span className="flex items-center gap-1 text-gray-500 text-sm font-semibold truncate">
                <span className="truncate">شماره حساب مبداء:</span>
                <span className="text-primary">{data.bankAccountNumber || "-"}</span>
            </span>
            <span className="flex items-center gap-1 text-gray-500 text-sm font-semibold truncate">
                <span className="truncate">شماره چک:</span>
                <span className="text-primary">{data.chequeNumber || "-"}</span>
            </span>
            <span className="flex items-center gap-1 text-gray-500 text-sm font-semibold truncate">
                <span className="truncate">شماره صیادی:</span>
                <span className="text-primary">{data.sayadiNumber || "-"}</span>
            </span>
            <div className="flex w-full justify-end gap-2 items-center">
                <Accordion variant="splitted" className="px-0" fullWidth>
                    <AccordionItem key="1" aria-label="Accordion 1" title="مشاهده تصویر">
                        <div className="flex justify-center items-center">
                            <Image
                                as={NextImage}
                                width={512}
                                height={512}
                                alt="رسید واریز بانکی"
                                src={data.picture ? `${data.picture?.system.baseUrl}/${data.picture?.path}` : ""}
                                radius="sm"
                                loading="eager"
                                className="w-full"
                            />
                        </div>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    )
}