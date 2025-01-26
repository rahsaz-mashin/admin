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
import {BoldDuotoneWalletIcon} from "@/stories/Icons";
import {z} from "zod";
import {axiosCoreWithAuth} from "@/lib/axios";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {WalletChargeBank, WalletTransaction} from "@/interfaces/WalletTransaction.interface";
import {MinorUploader} from "@/stories/General/MinorUploader";
import {MinorInput} from "@/stories/General/MinorInput";
import {MinorCheckBox} from "@/stories/General/MinorCheckBox";
import {parseDateTime} from "@internationalized/date";
import moment from "moment";
import {CalendarDateTimeSchema} from "@/schemas/CalendarDateTime.schema";


export type WalletChargeByBankProps = {
    onBackToMain: () => void;
    onClose: () => void;
    result?: WalletTransaction;
}


type T = WalletChargeBank


export const WalletChargeByBank = (props: WalletChargeByBankProps) => {
    const {onBackToMain, onClose, result} = props
    const [step, setStep] = useState(1)
    const [data, setData] = useState<any>({})


    // if (!!result && result.success) {
    //     return (
    //         <WalletChargeByBankSuccess
    //             done={() => onClose()}
    //             result={result}
    //         />
    //     )
    // }
    // if (!!result && !result.success) {
    //     return (
    //         <WalletChargeByBankFailure
    //             done={() => onClose()}
    //             result={result}
    //         />
    //     )
    // }

    if (step === 1) return (
        <WalletChargeByBankStep1
            prev={onBackToMain}
            next={(d) => {
                setStep(2)
                setData(d)
            }}
            done={() => onClose()}
            data={data}
        />
    )
    if (step === 2) return (
        <WalletChargeByBankStep2
            prev={(d) => {
                setStep(1)
                setData(d)
            }}
            next={(d) => {
                setStep(3)
                setData(d)
            }}
            done={() => onClose()}
            data={data}
        />
    )
    if (step === 3) return (
        <WalletChargeByBankStep3
            prev={(d) => {
                setStep(2)
                setData(d)
            }}
            next={(d) => {
                setStep(4)
                setData(d)
            }}
            done={() => onClose()}
            data={data}
        />
    )
    return null
};


export type WalletChargeByBankStepsProps = {
    prev: (data?: T) => void;
    next: (data?: T) => void;
    done: (data?: T) => void;
    data?: T;
}


export const WalletChargeByBankStep1 = (props: WalletChargeByBankStepsProps) => {
    const {prev, next, done, data} = props

    const schema = z.object({
        picture: z.object({id: z.number()}, {message: "تصویر را وارد کنید"}),
    })

    const initialData: T = {
        amount: "",

        picture: null,
        dueDate: null,
        bankName: "",
        bankAccountNumber: "",

        receiptNumber: "",
        trackingNumber: "",

        confirm: false,
    }


    const axios = axiosCoreWithAuth()
    const onSubmit = async (data: T) => {
        next(data)
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
                شارژ کیف پول - واریز بانکی
            </ModalHeader>
            <ModalBody className="flex flex-col gap-2">
                <p className="text-gray-500 text-sm text-justify font-light">
                    لطفا ابتدا مبلغ مورد نظر خود جهت شارژ کیف پول خود را به حساب بانکی شرکت با مشخصات زیر واریز کنید و
                    پس از آن با کلیک بر روی
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
                <MinorUploader
                    control={control}
                    name="picture"
                    label="آپلود تصویر واریزی"
                    description="ثبت تصویر"
                    accept={{
                        'image/png': ['.png', '.PNG'],
                        'image/jpg': ['.jpg', '.jpeg', '.JPG', '.JPEG'],
                    }}
                    minSize={1000}
                    maxFiles={2097152}
                    className="min-h-0"
                    withPreview
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
                    تایید و ادامه
                </Button>
            </ModalFooter>
        </form>
    );
};

export const WalletChargeByBankStep2 = (props: WalletChargeByBankStepsProps) => {
    const {prev, next, done, data} = props

    const schema = z.object({
        picture: z.object({id: z.number()}, {message: "تصویر را وارد کنید"}),

        amount: z.union([
            z.string({message: "مبلغ را وارد کنید"})
                .regex(/^\d+(,\d{3})*(\.\d{1,2})?$/g, {message: "مبلغ معتبر نیست"})
                .transform((val) => (val.replace(/,/g, "")))
                .transform(Number),
            z.number({message: "مبلغ معتبر نیست"}),
        ]),
        dueDate: CalendarDateTimeSchema(
            moment().subtract(1, 'month').startOf('day').toDate(),
            moment().add(1, 'month').startOf('day').toDate(),
        ),
        bankName: z.string({message: "نام بانک را وارد کنید"}).min(2, "نام بانک معتبر نیست"),
        bankAccountNumber: z.string({message: "شماره حساب یا کارت مبداء را وارد کنید"}).regex(/^\d+$/, "شماره حساب یا کارت مبداء معتبر نیست"),
        receiptNumber: z.string({message: "شماره فیش را وارد کنید"}).regex(/^\d+$/, "شماره فیش معتبر نیست"),
        trackingNumber: z.string({message: "شماره پیگیری را وارد کنید"}).regex(/^\d+$/, "شماره پیگیری معتبر نیست"),
        confirm: z.boolean({message: "اطلاعات را تایید کنید"}).refine(v => v, {message: "می بایست اطلاعات را تایید کنید"}),
    })


    const initialData: T = {
        amount: "",

        picture: data?.picture || null,
        dueDate: parseDateTime(moment().format("YYYY-MM-DD\THH:mm")),
        bankName: "",
        bankAccountNumber: "",

        receiptNumber: "",
        trackingNumber: "",

        confirm: false,
    }


    const axios = axiosCoreWithAuth()
    const onSubmit = async (data: T) => {
        try {
            await axios.post("/store/wallet/charge/bank", data)
            next(data)
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

    console.log({formErrors: formState.errors})

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <ModalHeader>
                شارژ کیف پول - واریز بانکی
            </ModalHeader>
            <ModalBody className="flex flex-col gap-2">
                <p className="text-gray-500 text-sm text-justify font-light">
                    حال اطلاعات واریزی را وارد کنید:
                </p>
                <MinorInput
                    name="amount"
                    control={control}
                    label="مبلغ واریزی"
                    isRequired
                    isNumeric
                    allowNegative={false}
                    allowLeadingZeros={false}
                    isDisabled={formState.isLoading || formState.isValidating || formState.isSubmitting}
                />
                <MinorInput
                    name="dueDate"
                    control={control}
                    label="زمان واریز"
                    isRequired
                    isDateInput
                    granularity="minute"
                    isDisabled={formState.isLoading || formState.isValidating || formState.isSubmitting}
                />
                <MinorInput
                    name="bankName"
                    control={control}
                    label="نام بانک"
                    isRequired
                    isDisabled={formState.isLoading || formState.isValidating || formState.isSubmitting}
                />
                <MinorInput
                    name="bankAccountNumber"
                    control={control}
                    label="شماره حساب / کارت مبداء"
                    isRequired
                    isNumeric
                    allowNegative={false}
                    allowLeadingZeros={false}
                    thousandsGroupDisabled
                    isDisabled={formState.isLoading || formState.isValidating || formState.isSubmitting}
                />
                <MinorInput
                    name="receiptNumber"
                    control={control}
                    label="شماره فیش"
                    isRequired
                    isNumeric
                    allowNegative={false}
                    allowLeadingZeros={false}
                    thousandsGroupDisabled
                    isDisabled={formState.isLoading || formState.isValidating || formState.isSubmitting}
                />
                <MinorInput
                    name="trackingNumber"
                    control={control}
                    label="شماره پیگیری"
                    isRequired
                    isNumeric
                    allowNegative={false}
                    allowLeadingZeros={false}
                    thousandsGroupDisabled
                    isDisabled={formState.isLoading || formState.isValidating || formState.isSubmitting}
                />
                <MinorCheckBox
                    name="confirm"
                    control={control}
                    label="اطلاعات فوق تایید می شود."
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
                    ثبت و ارسال
                </Button>
            </ModalFooter>
        </form>
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
                    onPress={() => done()}
                >
                    باشه
                </Button>
            </ModalFooter>
        </>
    );
};


// ======================================================================================================
// ======================================================================================================
// ======================================================================================================


export type WalletChargeByBankResultProps = {
    done: () => void;
    result?: WalletTransaction;
}

export const WalletChargeByBankSuccess = (props: WalletChargeByBankResultProps) => {
    const {done, result} = props

    return (
        <>
            <ModalHeader>
                شارژ کیف پول - واریز بانکی
            </ModalHeader>
            <ModalBody className="flex flex-col gap-4 justify-center">
                <div className="text-success flex flex-col items-center gap-2">
                    <BoldDuotoneWalletIcon size={64}/>
                    <span className="font-bold">
                        اطلاعات واریزی شما تایید شد و کیف پول شما شارژ شد.
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
                            شماره پیگیری:
                        </span>
                        <span>
                            121314
                        </span>
                    </div>
                    <div className="flex justify-between">
                        <span>
                            زمان ثبت:
                        </span>
                        <span>
                            1402/07/22 ساعت 14:25
                        </span>
                    </div>
                    <div className="flex justify-between">
                        <span>
                            زمان تایید:
                        </span>
                        <span>
                            1402/07/22 ساعت 14:25
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

export const WalletChargeByBankFailure = (props: WalletChargeByBankResultProps) => {
    const {done, result} = props

    return (
        <>
            <ModalHeader>
                شارژ کیف پول - واریز بانکی
            </ModalHeader>
            <ModalBody className="flex flex-col gap-4 justify-center">
                <div className="text-danger flex flex-col items-center gap-2">
                    <BoldDuotoneWalletIcon size={64}/>
                    <span className="font-bold">
                        اطلاعات واریزی شما تایید نشد.
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
                            شماره پیگیری:
                        </span>
                        <span>
                            121314
                        </span>
                    </div>
                    <div className="flex justify-between">
                        <span>
                            زمان ثبت:
                        </span>
                        <span>
                            1402/07/22 ساعت 14:25
                        </span>
                    </div>
                    <div className="flex justify-between">
                        <span>
                            زمان رد:
                        </span>
                        <span>
                            1402/07/22 ساعت 14:25
                        </span>
                    </div>
                    <div className="flex justify-between">
                        <span>
                            دلیل رد:
                        </span>
                        <span className="text-danger">
                            عدم تطابق اطلاعات واریزی
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
