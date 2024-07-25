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


export type WalletChargeByBankProps = {
    onBackToMain: () => void;
    onClose: () => void;
}


export const WalletChargeByBank = (props: WalletChargeByBankProps) => {
    const {onBackToMain, onClose} = props
    const [step, setStep] = useState(1)

    if (step === 1) return (
        <WalletChargeByBankStep1
            prev={onBackToMain}
            next={() => setStep(2)}
            done={() => onClose()}
        />
    )
    if (step === 2) return (
        <WalletChargeByBankStep2
            prev={() => setStep(1)}
            next={() => setStep(3)}
            done={() => onClose()}
        />
    )
    if (step === 3) return (
        <WalletChargeByBankStep3
            prev={() => setStep(2)}
            next={() => setStep(4)}
            done={() => onClose()}
        />
    )
    return null
};


export type WalletChargeByBankStepsProps = {
    prev: () => void;
    next: () => void;
    done: () => void;
}


export const WalletChargeByBankStep1 = (props: WalletChargeByBankStepsProps) => {
    const {prev, next, done} = props

    return (
        <>
            <ModalHeader>
                شارژ کیف پول - واریز بانکی
            </ModalHeader>
            <ModalBody className="flex flex-col gap-2">
                <p className="text-gray-500 text-sm text-justify font-light">
                    لطفا ابتدا مبلغ مورد نظر خود جهت شارژ کیف پول خود را به حساب بانکی شرکت با مشخصات زیر واریز کنید و پس از آن با کلیک بر روی
                    <b className="text-primary font-bold"> ثبت تصویر </b>
                    تصویر فیش آن را برای ما ارسال کنید.
                </p>
                <Card
                    shadow="none"
                    className="bg-primary text-start text-white"
                >
                    <CardHeader className="font-semibold pb-1">
                        اطلاعات حساب بانکی:
                    </CardHeader>
                    <CardBody className="pt-1">
                        <p className="text-sm text-justify font-light">
                            شرکت راهساز ماشین عرشیا ایرانیان
                            <br/>
                            شماره شبا: 730570100581014037661102
                            <br/>
                            بانک پاسارگاد
                        </p>
                    </CardBody>
                </Card>
                <Button
                    variant="bordered"
                    color="primary"
                >
                    ثبت تصویر
                </Button>
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

export const WalletChargeByBankStep2 = (props: WalletChargeByBankStepsProps) => {
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

export const WalletChargeByBankStep3 = (props: WalletChargeByBankStepsProps) => {
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
