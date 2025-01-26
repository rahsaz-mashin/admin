"use client"

import React, {useEffect, useState} from "react";
import {Button, Card, CardBody, ModalBody, ModalFooter, ModalHeader} from "@nextui-org/react";
import clsx from "clsx";
import {BoldDuotoneWalletIcon} from "@/stories/Icons";
import {NumericFormat} from "react-number-format";
import {MinorInput} from "@/stories/General/MinorInput";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import {axiosCoreWithAuth} from "@/lib/axios";
import {
    WalletChargeOnline,
    WalletTransaction,
    walletTransactionStatusesEnum
} from "@/interfaces/WalletTransaction.interface";
import {useRouter} from "next/navigation";


export type WalletChargeByOnlineProps = {
    onBackToMain: () => void;
    onClose: () => void;
    result?: WalletTransaction;
}


type T = WalletChargeOnline


export const WalletChargeByOnline = (props: WalletChargeByOnlineProps) => {
    const {onBackToMain, onClose, result} = props
    const [step, setStep] = useState(1)

    if (!!result && result.status === walletTransactionStatusesEnum.confirmed) {
        return (
            <WalletChargeByOnlineSuccess
                done={() => onClose()}
                result={result}
            />
        )
    }
    if (!!result && result.status !== walletTransactionStatusesEnum.rejected) {
        return (
            <WalletChargeByOnlineFailure
                done={() => onClose()}
                result={result}
            />
        )
    }

    if (step === 1) return (
        <WalletChargeByOnlineStep1
            prev={() => onBackToMain()}
            next={() => setStep(2)}
            done={() => onClose()}
        />
    )
    if (step === 2) return (
        <WalletChargeByOnlineStep2
            prev={() => alert("There is no way backward")}
            next={() => alert("There is no way forward")}
            done={() => alert("There is no way")}
        />
    )
    return null
};


export type WalletChargeByOnlineStepsProps = {
    prev: (data?: T) => void;
    next: (data?: T) => void;
    done: (data?: T) => void;
    data?: T;
}


export const WalletChargeByOnlineStep1 = (props: WalletChargeByOnlineStepsProps) => {
    const {prev, next, done, data} = props

    const amountList = [
        {
            label: 1000000,
            amount: 1000000,
        },
        {
            label: 5000000,
            amount: 5000000
        },
        {
            label: 10000000,
            amount: 10000000
        },
        {
            label: 20000000,
            amount: 20000000
        },
        {
            label: 50000000,
            amount: 50000000
        },
        {
            label: 100000000,
            amount: 99900000
        },
    ]


    const schema = z.object({
        amount: z.union([
            z.string({message: "مبلغ را وارد کنید"})
                .regex(/^\d+(,\d{3})*(\.\d{1,2})?$/g, {message: "مبلغ معتبر نیست"})
                .transform((val) => (val.replace(/,/g, "")))
                .transform(Number),
            z.number({message: "مبلغ معتبر نیست"}),
        ])
            .refine((n) => (n >= 1000000 && n < 100000000), "مبلغ می تواند بین 1 میلیون تا 100 میلیون باشد"),
    })

    const initialData: T = {
        amount: "",
    }

    const axios = axiosCoreWithAuth()
    const onSubmit = async (data: T) => {
        try {
            const result: T = await axios.post("/store/wallet/charge/online", data)
            next(result)
        } catch (e) {

        }
    }

    const {
        handleSubmit,
        control,
        reset,
        formState,
        watch,
        setValue,
        setFocus,
    } = useForm<T>({
        resolver: zodResolver(schema),
        defaultValues: initialData,
    });

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <ModalHeader>
                شارژ کیف پول - درگاه آنلاین
            </ModalHeader>
            <ModalBody className="flex flex-col gap-2">
                <p className="text-gray-500 text-sm text-justify font-light">
                    مبلغ مدنظر جهت افزایش موجودی را انتخاب کرده یا وارد کنید
                </p>
                <div className="grid grid-cols-3 gap-2">
                    {amountList.map((v, i) => {
                        return (
                            <Card
                                key={i}
                                isHoverable
                                isPressable
                                shadow="none"
                                data-active={((watch("amount").toString().replace(/,/g, "")) === v.amount.toString()) || undefined}
                                className={clsx("group data-[active=true]:bg-primary/20")}
                                onPress={() => setValue("amount", v.amount, {shouldValidate: true})}
                            >
                                <CardBody
                                    className="flex flex-row items-center justify-center gap-0.5 group-data-[active=true]:text-primary truncate"
                                >
                                    <span className="font-black">
                                        <NumericFormat
                                            value={v.label}
                                            thousandSeparator=","
                                            decimalSeparator="."
                                            allowNegative={false}
                                            decimalScale={0}
                                            allowLeadingZeros={false}
                                            displayType="text"
                                        />
                                    </span>
                                    <span className="text-sm">تومانءء</span>
                                </CardBody>
                            </Card>
                        )
                    })}
                </div>
                <MinorInput
                    label="مبلغ"
                    control={control}
                    name="amount"
                    isNumeric
                    isDisabled={formState.isLoading || formState.isValidating || formState.isSubmitting}
                />
            </ModalBody>
            <ModalFooter>
                <Button
                    className="flex-1 md:flex-none"
                    variant="flat"
                    color="default"
                    onPress={() => prev()}
                    isDisabled={formState.isLoading || formState.isValidating || formState.isSubmitting}
                >
                    برگشت
                </Button>
                <Button
                    className="flex-1 md:flex-none"
                    variant="shadow"
                    color="primary"
                    type="submit"
                    isLoading={formState.isLoading || formState.isValidating || formState.isSubmitting}
                >
                    پرداخت
                </Button>
            </ModalFooter>
        </form>
    );
};

export const WalletChargeByOnlineStep2 = (props: WalletChargeByOnlineStepsProps) => {
    const {prev, next, done, data} = props

    const router = useRouter()

    useEffect(() => {
        if (!!data?.url) {
            setTimeout(() => {
                if (!!data.url) {
                    router.push(data.url)
                }
            }, 2000)
        } else {
            alert("خطایی رخ داد")
            prev()
        }
    }, [data]);


    return (
        <>
            <ModalHeader>
                شارژ کیف پول - درگاه آنلاین
            </ModalHeader>
            <ModalBody className="flex flex-col gap-2">
                <span className="flex items-center justify-center py-6">
                    در حال انتقال به درگاه پرداخت ...
                </span>
            </ModalBody>
        </>
    );
};


export type WalletChargeByOnlineResultProps = {
    done: () => void;
    result: WalletTransaction;
}

export const WalletChargeByOnlineSuccess = (props: WalletChargeByOnlineResultProps) => {
    const {done, result} = props

    return (
        <>
            <ModalHeader>
                شارژ کیف پول - درگاه آنلاین
            </ModalHeader>
            <ModalBody className="flex flex-col gap-4 justify-center">
                <div className="text-success flex flex-col items-center gap-2">
                    <BoldDuotoneWalletIcon size={64}/>
                    <span className="font-bold">
                        عملیات شارژ کیف پول شما با موفقیت انجام شد.
                    </span>
                </div>
                <div className="flex flex-col gap-1 font-light text-sm text-gray-500">
                    <div className="flex justify-between">
                        <span>
                            مبلغ:
                        </span>
                        <div className="flex items-center">
                            <NumericFormat
                                value={result.amount}
                                thousandSeparator=","
                                decimalSeparator="."
                                allowNegative={false}
                                decimalScale={0}
                                allowLeadingZeros={false}
                                displayType="text"
                            />
                            <span>
                                تومانءء
                            </span>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <span>
                            کد رهگیری:
                        </span>
                        <span>
                            {/*{result?.traceNumber || "-"}*/}
                        </span>
                    </div>
                    <div className="flex justify-between">
                        <span>
                            شماره ارجاع:
                        </span>
                        <span>
                            {/*{result?.referenceNumber || "-"}*/}
                        </span>
                    </div>
                    <div className="flex justify-between">
                        <span>
                            شماره ارجاع:
                        </span>
                        <span>
                            {/*{result?.referenceNumber || "-"}*/}
                        </span>
                    </div>
                    <div className="flex justify-between">
                        <span>
                            زمان:
                        </span>
                        <span>
                            {/*{moment(result.dueDate?.toString()).format("jYYYY/jM/jDD HH:mm:ss") || "-"}*/}
                        </span>
                    </div>
                </div>
            </ModalBody>
            <ModalFooter>
                <Button
                    className="flex-1 md:flex-none"
                    variant="flat"
                    color="default"
                    onPress={done}
                >
                    باشه
                </Button>
            </ModalFooter>
        </>
    );
};

export const WalletChargeByOnlineFailure = (props: WalletChargeByOnlineResultProps) => {
    const {done, result} = props

    return (
        <>
            <ModalHeader>
                شارژ کیف پول - درگاه آنلاین
            </ModalHeader>
            <ModalBody className="flex flex-col gap-4 justify-center">
                <div className="text-danger flex flex-col items-center gap-2">
                    <BoldDuotoneWalletIcon size={64}/>
                    <span className="font-bold">
                        عملیات شارژ کیف پول شما با خطا مواجه شد.
                    </span>
                </div>
                <div className="flex flex-col gap-1 font-light text-sm text-gray-500">
                    <div className="flex justify-between">
                        <span>
                            مبلغ:
                        </span>
                        <span>
                            5,000,000تومانءء
                        </span>
                    </div>
                    <div className="flex justify-between">
                        <span>
                            کد رهگیری:
                        </span>
                        <span>
                            121314
                        </span>
                    </div>
                    <div className="flex justify-between">
                        <span>
                            زمان:
                        </span>
                        <span>
                            1402/07/22 ساعت 14:25
                        </span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-justify">
                            در صورت کسر شدن مبلغ، وجه مورد نظر حداکثر تا ۷۲ ساعت به حساب شما بازگشت داده خواهد شد.
                        </span>
                    </div>
                </div>
            </ModalBody>
            <ModalFooter>
                <Button
                    className="flex-1 md:flex-none"
                    variant="flat"
                    color="default"
                    onPress={done}
                >
                    باشه
                </Button>
            </ModalFooter>
        </>
    );
};
