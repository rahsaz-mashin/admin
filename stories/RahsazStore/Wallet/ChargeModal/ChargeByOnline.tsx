"use client"

import React, {useState} from "react";
import {
    Button,
    Card,
    CardBody,
    ModalBody,
    ModalFooter,
    ModalHeader
} from "@nextui-org/react";
import {Input} from "@nextui-org/input";
import clsx from "clsx";
import {BoldDuotoneWalletIcon} from "@/stories/Icons";


export type WalletChargeByOnlineProps = {
    onBackToMain: () => void;
    onClose: () => void;
}


export const WalletChargeByOnline = (props: WalletChargeByOnlineProps) => {
    const {onBackToMain, onClose} = props
    const [step, setStep] = useState(1)

    return (
        <WalletChargeByOnlineSuccess
            prev={onBackToMain}
            next={() => setStep(2)}
            done={() => onClose()}
        />
    )
    if (step === 1) return (
        <WalletChargeByOnlineStep1
            prev={onBackToMain}
            next={() => setStep(2)}
            done={() => onClose()}
        />
    )

    return null
};


export type WalletChargeByOnlineStepsProps = {
    prev: () => void;
    next: () => void;
    done: () => void;
}


export const WalletChargeByOnlineStep1 = (props: WalletChargeByOnlineStepsProps) => {
    const {prev, next, done} = props

    const [amount, setAmount] = useState(0)

    const amountList = [
        {
            amount: 1000000
        },
        {
            amount: 5000000
        },
        {
            amount: 10000000
        },
        {
            amount: 20000000
        },
        {
            amount: 50000000
        },
        {
            amount: 100000000
        },
    ]
    return (
        <>
            <ModalHeader>
                شارژ کیف پول - درگاه آنلاین
            </ModalHeader>
            <ModalBody className="flex flex-col gap-2">
                <p className="text-gray-500 text-sm text-justify font-light">
                    مبلغ مدنظر جهت افزایش موجودی را انتخاب کرده یا وارد کنید
                </p>
                <div className="grid grid-cols-3 gap-2">
                    {amountList.map((v) => {
                        return (
                            <Card
                                isHoverable
                                isPressable
                                shadow="none"
                                className={clsx("group", amount === v.amount ? "isActive bg-primary/20" : "")}
                                onPress={() => setAmount(v.amount)}
                            >
                                <CardBody
                                    className="flex flex-row items-center justify-center gap-0.5 text-gray-600 group-[.isActive]:text-primary truncate">
                                    <span className="font-black ">{v.amount}</span>
                                    <span className="text-sm ">تومانءء</span>
                                </CardBody>
                            </Card>
                        )
                    })}
                </div>
                <Input
                    label="مبلغ"
                    value={amount.toString()}
                />

            </ModalBody>
            <ModalFooter>
                <Button
                    className="flex-1 md:flex-none"
                    variant="flat"
                    color="default"
                    onPress={prev}
                >
                    برگشت
                </Button>
                <Button
                    className="flex-1 md:flex-none"
                    variant="shadow"
                    color="primary"
                    // isDisabled={!type}
                    onPress={next}
                >
                    پرداخت
                </Button>
            </ModalFooter>
        </>
    );
};

export const WalletChargeByOnlineSuccess = (props: WalletChargeByOnlineStepsProps) => {
    const {prev, next, done} = props

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
                        <span>
                            شماره ارجاع:
                        </span>
                        <span>
                            121314
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

export const WalletChargeByOnlineFailure = (props: WalletChargeByOnlineStepsProps) => {
    const {prev, next, done} = props

    return (
        <>
            <ModalHeader>
                شارژ کیف پول - درگاه آنلاین
            </ModalHeader>
            <ModalBody className="flex flex-col gap-4 justify-center">
                <div className="text-danger flex flex-col items-center gap-2">
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
                        <span>
                            شماره ارجاع:
                        </span>
                        <span>
                            121314
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
