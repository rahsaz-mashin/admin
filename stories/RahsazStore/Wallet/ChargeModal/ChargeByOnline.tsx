"use client"

import React, {useState} from "react";
import {
    Button,
    Card,
    CardBody,
    Checkbox,
    ModalBody,
    ModalFooter,
    ModalHeader
} from "@nextui-org/react";
import {CardHeader} from "@nextui-org/card";
import {Input} from "@nextui-org/input";
import clsx from "clsx";
import {BoldDuotoneCreditCardIcon} from "@/stories/Icons";


export type WalletChargeByOnlineProps = {
    onBackToMain: () => void;
    onClose: () => void;
}


export const WalletChargeByOnline = (props: WalletChargeByOnlineProps) => {
    const {onBackToMain, onClose} = props
    const [step, setStep] = useState(1)

    if (step === 1) return (
        <WalletChargeByOnlineStep1
            prev={onBackToMain}
            next={() => setStep(2)}
            done={() => onClose()}
        />
    )
    if (step === 2) return (
        <WalletChargeByOnlineStep2
            prev={() => setStep(1)}
            next={() => setStep(3)}
            done={() => onClose()}
        />
    )
    if (step === 3) return (
        <WalletChargeByOnlineStep3
            prev={() => setStep(2)}
            next={() => setStep(4)}
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
                    تایید و ادامه
                </Button>
            </ModalFooter>
        </>
    );
};

export const WalletChargeByOnlineStep2 = (props: WalletChargeByOnlineStepsProps) => {
    const {prev, next, done} = props

    return (
        <>
            <ModalHeader>
                شارژ کیف پول - واریز بانکی
            </ModalHeader>
            <ModalBody className="flex flex-col gap-2">
                <p className="text-gray-500 text-sm text-justify font-light">
                    حال اطلاعات چک را وارد کنید:
                </p>
                <Input
                    variant="bordered"
                    color="primary"
                    label="مبلغ واریزی"
                />
                <Input
                    variant="bordered"
                    color="primary"
                    label="زمان واریز"
                />
                <Input
                    variant="bordered"
                    color="primary"
                    label="نام بانک"
                />
                <Input
                    variant="bordered"
                    color="primary"
                    label="شماره فیش"
                />
                <Input
                    variant="bordered"
                    color="primary"
                    label="شماره پیگیری"
                />
                <Input
                    variant="bordered"
                    color="primary"
                    label="شماره حساب / کارت مبداء"
                />
                <Checkbox>
                    اطلاعات فوق تایید می شود.
                </Checkbox>
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
                    ثبت و ارسال
                </Button>
            </ModalFooter>
        </>
    );
};

export const WalletChargeByOnlineStep3 = (props: WalletChargeByOnlineStepsProps) => {
    const {prev, next, done} = props

    return (
        <>
            <ModalHeader>
                شارژ کیف پول - واریز بانکی
            </ModalHeader>
            <ModalBody className="flex flex-col gap-2">
                <span className="text-success text-sm font-bold">
                    اطلاعات واریزی با موفقیت ثبت گردید.
                </span>
                <p className="text-gray-500 text-sm text-justify font-light">
                    نتیجه بررسی آن به اطلاع شما خواهد رسید.
                    <br/>
                    پس از تایید، کیف پول شما شارژ خواهد شد.
                </p>
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
