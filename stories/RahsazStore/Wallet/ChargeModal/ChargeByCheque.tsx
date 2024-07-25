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


export type WalletChargeByChequeProps = {
    onBackToMain: () => void;
    onClose: () => void;
}


export const WalletChargeByCheque = (props: WalletChargeByChequeProps) => {
    const {onBackToMain, onClose} = props
    const [step, setStep] = useState(1)

    if (step === 1) return (
        <WalletChargeByChequeStep1
            prev={onBackToMain}
            next={() => setStep(2)}
            done={() => onClose()}
        />
    )
    if (step === 2) return (
        <WalletChargeByChequeStep2
            prev={() => setStep(1)}
            next={() => setStep(3)}
            done={() => onClose()}
        />
    )
    if (step === 3) return (
        <WalletChargeByChequeStep3
            prev={() => setStep(2)}
            next={() => setStep(4)}
            done={() => onClose()}
        />
    )
    return null
};


export type WalletChargeByChequeStepsProps = {
    prev: () => void;
    next: () => void;
    done: () => void;
}


export const WalletChargeByChequeStep1 = (props: WalletChargeByChequeStepsProps) => {
    const {prev, next, done} = props

    return (
        <>
            <ModalHeader>
                شارژ کیف پول - چک صیادی
            </ModalHeader>
            <ModalBody className="flex flex-col gap-2">
                <p className="text-gray-500 text-sm text-justify font-light">
                    ابتدا چک صیادی را طبق مشخصات زیر تکمیل کنید و سپس با کلیک بر روی
                    <b className="text-primary font-bold"> ثبت تصویر </b>
                    ، تصویر آن را برای ما ارسال کنید.
                    <br/>
                    حداکثر زمان سر رسید چک برای شما، تاریخ
                    <b className="text-primary font-bold"> 1403/06/30 </b>
                    می باشد.
                    <br/>
                    حداقل مبلغ چک قابل ثبت برای شما
                    <b className="text-primary font-bold"> 30,000,000تومانءء </b>
                    می باشد.
                    <br/>
                    حداکثر مبلغ چک قابل ثبت برای شما
                    <b className="text-primary font-bold"> 50,000,000تومانءء </b>
                    می باشد.
                </p>
                <Card
                    shadow="none"
                    className="bg-primary text-start text-white"
                >
                    <CardHeader className="font-semibold pb-1">
                        اطلاعات شرکت:
                    </CardHeader>
                    <CardBody className="pt-1">
                        <p className="text-sm text-justify font-light">
                            شرکت راهساز ماشین عرشیا ایرانیان
                            <br/>
                            شماره ثبت: 69245
                            <br/>
                            شناسه ملی: 14008550662
                            <br/>
                            دفتر مرکزی: مشهد - خیابان کوشش 27 - نبش خبیری 3 - پلاک 33
                            <br/>
                            کدپستی: 9164773781
                            <br/>
                            تلفن و فکس: 05133445566
                        </p>
                    </CardBody>
                </Card>
                <span className="font-light text-sm text-justify text-red-600">
                    دقت داشته باشید که عدم رعایت هر یک از موارد فوق موجب عدم تایید چک شما خواهد شد.
                </span>
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

export const WalletChargeByChequeStep2 = (props: WalletChargeByChequeStepsProps) => {
    const {prev, next, done} = props

    return (
        <>
            <ModalHeader>
                شارژ کیف پول - چک صیادی
            </ModalHeader>
            <ModalBody className="flex flex-col gap-2">
                <p className="text-gray-500 text-sm text-justify font-light">
                    حال اطلاعات چک را وارد کنید:
                </p>
                <Input
                    variant="bordered"
                    color="primary"
                    label="مبلغ چک"
                />
                <Input
                    variant="bordered"
                    color="primary"
                    label="زمان سر رسید"
                />
                <Input
                    variant="bordered"
                    color="primary"
                    label="نام بانک"
                />
                <Input
                    variant="bordered"
                    color="primary"
                    label="شماره چک"
                />
                <Input
                    variant="bordered"
                    color="primary"
                    label="شماره صیادی"
                />
                <Input
                    variant="bordered"
                    color="primary"
                    label="شماره حساب"
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

export const WalletChargeByChequeStep3 = (props: WalletChargeByChequeStepsProps) => {
    const {prev, next, done} = props

    return (
        <>
            <ModalHeader>
                شارژ کیف پول - چک صیادی
            </ModalHeader>
            <ModalBody className="flex flex-col gap-2">
                <span className="text-success text-sm font-bold">
                    اطلاعات چک با موفقیت ثبت گردید.
                </span>
                <p className="text-gray-500 text-sm text-justify font-light">
                    نتیجه بررسی آن به اطلاع شما خواهد رسید.
                    <br/>
                    پس از تایید اولیه، می بایست نسخه فیزیکی چک را به آدرس دفتر مرکزی شرکت ارسال کنید و پس از آن کیف پول
                    شما شارژ خواهد شد.
                </p>
                <Card
                    shadow="none"
                    className="bg-primary text-start text-white"
                >
                    <CardHeader className="font-semibold pb-1">
                        دفتر مرکزی:
                    </CardHeader>
                    <CardBody className="pt-1">
                        <p className="text-sm text-justify font-light">
                            شرکت راهساز ماشین عرشیا ایرانیان
                            <br/>
                            آدرس: مشهد - خیابان کوشش 27 - نبش خبیری 3 - پلاک 33
                            <br/>
                            کدپستی: 9164773781
                            <br/>
                            تلفن و فکس: 05133445566
                        </p>
                    </CardBody>
                </Card>
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
