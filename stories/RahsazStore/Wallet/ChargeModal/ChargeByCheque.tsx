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
import {WalletChargeCheque, WalletTransaction} from "@/interfaces/WalletTransaction.interface";
import {MinorUploader} from "@/stories/General/MinorUploader";
import {MinorInput} from "@/stories/General/MinorInput";
import {MinorCheckBox} from "@/stories/General/MinorCheckBox";
import moment from "moment/moment";
import jMoment from "jalali-moment";
import {NumericFormat} from "react-number-format";
import {CalendarDateTimeSchema} from "@/schemas/CalendarDateTime.schema";
import {parseDateTime} from "@internationalized/date";


export type WalletChargeByChequeProps = {
    onBackToMain: () => void;
    onClose: () => void;
    result?: WalletTransaction;
}


type T = WalletChargeCheque


export const WalletChargeByCheque = (props: WalletChargeByChequeProps) => {
    const {onBackToMain, onClose, result} = props
    const [step, setStep] = useState(1)
    const [data, setData] = useState<any>({})


    const minAmount = 30000000
    const maxAmount = 50000000
    const minDate = moment().subtract(20, 'day').startOf('day').toDate()
    const maxDate = moment().add(45, 'day').startOf('day').toDate()


    // if (!!result && result.success) {
    //     return (
    //         <WalletChargeByChequeSuccess
    //             done={() => onClose()}
    //             result={result}
    //         />
    //     )
    // }
    // if (!!result && !result.success) {
    //     return (
    //         <WalletChargeByChequeFailure
    //             done={() => onClose()}
    //             result={result}
    //         />
    //     )
    // }

    if (step === 1) return (
        <WalletChargeByChequeStep1
            prev={onBackToMain}
            next={(d) => {
                setStep(2)
                setData(d)
            }}
            done={() => onClose()}
            data={data}
            limitation={{minAmount, maxAmount, minDate, maxDate}}
        />
    )
    if (step === 2) return (
        <WalletChargeByChequeStep2
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
            limitation={{minAmount, maxAmount, minDate, maxDate}}
        />
    )
    if (step === 3) return (
        <WalletChargeByChequeStep3
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
            limitation={{minAmount, maxAmount, minDate, maxDate}}
        />
    )
    return null
};


export type WalletChargeByChequeStepsProps = {
    prev: (data?: T) => void;
    next: (data?: T) => void;
    done: (data?: T) => void;
    data?: T;
    limitation: {
        minAmount: number;
        maxAmount: number;
        minDate: Date;
        maxDate: Date;
    }
}


export const WalletChargeByChequeStep1 = (props: WalletChargeByChequeStepsProps) => {
    const {prev, next, done, data, limitation} = props

    const schema = z.object({
        picture: z.object({id: z.number()}, {message: "تصویر را وارد کنید"}),
    })

    const initialData: T = {
        amount: "",

        picture: null,
        dueDate: null,
        bankName: "",
        bankAccountNumber: "",

        chequeNumber: "",
        sayadiNumber: "",

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
                شارژ کیف پول - چک صیادی
            </ModalHeader>
            <ModalBody className="flex flex-col gap-2">
                <p className="text-gray-500 text-sm text-justify font-light">
                    ابتدا چک صیادی را طبق مشخصات زیر تکمیل کنید و سپس با کلیک بر روی
                    <b className="text-primary font-bold"> ثبت تصویر </b>
                    ، تصویر آن را برای ما ارسال کنید.
                    <br/>
                    حداکثر زمان سر رسید چک برای شما، تاریخ
                    <b className="text-primary font-bold">
                        {" "}
                        {jMoment(limitation?.maxDate).format("jYYYY/jM/jDD")}
                        {" "}
                    </b>
                    می باشد.
                    <br/>
                    حداقل مبلغ چک قابل ثبت برای شما
                    <b className="text-primary font-bold">
                        {" "}
                        <NumericFormat
                            value={limitation?.minAmount}
                            thousandSeparator=","
                            decimalSeparator="."
                            allowNegative={false}
                            decimalScale={0}
                            allowLeadingZeros={false}
                            displayType="text"
                        />
                        {" "}
                        تومانءء
                    </b>
                    می باشد.
                    <br/>
                    حداکثر مبلغ چک قابل ثبت برای شما
                    <b className="text-primary font-bold">
                        {" "}
                        <NumericFormat
                            value={limitation?.maxAmount}
                            thousandSeparator=","
                            decimalSeparator="."
                            allowNegative={false}
                            decimalScale={0}
                            allowLeadingZeros={false}
                            displayType="text"
                        />
                        {" "}
                        تومانءء
                    </b>
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
                <MinorUploader
                    control={control}
                    name="picture"
                    label="آپلود تصویر چک"
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

export const WalletChargeByChequeStep2 = (props: WalletChargeByChequeStepsProps) => {
    const {prev, next, done, data, limitation} = props

    const schema = z.object({
        picture: z.object({id: z.number()}, {message: "تصویر را وارد کنید"}),

        amount: z.union([
            z.string({message: "مبلغ را وارد کنید"})
                .regex(/^\d+(,\d{3})*(\.\d{1,2})?$/g, {message: "مبلغ معتبر نیست"})
                .transform((val) => (val.replace(/,/g, "")))
                .transform(Number),
            z.number({message: "مبلغ معتبر نیست"}),
        ]).refine((v) => {
            if (v < limitation.minAmount) return false
            if (v > limitation.maxAmount) return false
            //
            return true
        }, {message: `مبلغ بین ${limitation.minAmount} و ${limitation.maxAmount} مجاز می باشد`}),
        dueDate: CalendarDateTimeSchema(limitation.minDate, limitation.maxDate),
        bankName: z.string({message: "نام بانک را وارد کنید"}).min(2, "نام بانک معتبر نیست"),
        bankAccountNumber: z.string({message: "شماره حساب یا کارت مبداء را وارد کنید"}).regex(/^\d+$/, "شماره حساب یا کارت مبداء معتبر نیست"),
        chequeNumber: z.string({message: "شماره چک را وارد کنید"}).regex(/^\d+$/, "شماره چک معتبر نیست"),
        sayadiNumber: z.string({message: "شماره صیادی را وارد کنید"}).regex(/^\d+$/, "شماره صیادی معتبر نیست"),
        confirm: z.boolean({message: "اطلاعات را تایید کنید"}).refine(v => v, {message: "می بایست اطلاعات را تایید کنید"}),
    })


    const initialData: T = {
        amount: "",

        picture: data?.picture || null,
        dueDate: parseDateTime(moment().format("YYYY-MM-DD\THH:mm")),
        bankName: "",
        bankAccountNumber: "",

        chequeNumber: "",
        sayadiNumber: "",

        confirm: false,
    }


    const axios = axiosCoreWithAuth()
    const onSubmit = async (data: T) => {
        try {
            await axios.post("/store/wallet/charge/cheque", data)
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

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <ModalHeader>
                شارژ کیف پول - چک صیادی
            </ModalHeader>
            <ModalBody className="flex flex-col gap-2">
                <p className="text-gray-500 text-sm text-justify font-light">
                    حال اطلاعات چک را وارد کنید:
                </p>
                <MinorInput
                    name="amount"
                    control={control}
                    label="مبلغ چک"
                    isRequired
                    isNumeric
                    allowNegative={false}
                    allowLeadingZeros={false}
                    isDisabled={formState.isLoading || formState.isValidating || formState.isSubmitting}
                />
                <MinorInput
                    name="dueDate"
                    control={control}
                    label="زمان سررسید"
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
                    label="شماره حساب"
                    isRequired
                    isNumeric
                    allowNegative={false}
                    allowLeadingZeros={false}
                    thousandsGroupDisabled
                    isDisabled={formState.isLoading || formState.isValidating || formState.isSubmitting}
                />
                <MinorInput
                    name="chequeNumber"
                    control={control}
                    label="شماره چک"
                    isRequired
                    isNumeric
                    allowNegative={false}
                    allowLeadingZeros={false}
                    thousandsGroupDisabled
                    isDisabled={formState.isLoading || formState.isValidating || formState.isSubmitting}
                />
                <MinorInput
                    name="sayadiNumber"
                    control={control}
                    label="شماره صیادی"
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


export type WalletChargeByChequeResultProps = {
    done: () => void;
    result?: WalletTransaction;
}

export const WalletChargeByChequeSuccess = (props: WalletChargeByChequeResultProps) => {
    const {done, result} = props

    return (
        <>
            <ModalHeader>
                شارژ کیف پول - چک صیادی
            </ModalHeader>
            <ModalBody className="flex flex-col gap-4 justify-center">
                <div className="text-success flex flex-col items-center gap-2">
                    <BoldDuotoneWalletIcon size={64}/>
                    <span className="font-bold">
                        چک صیادی شما تایید شد و کیف پول شما شارژ شد.
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
                            شماره چک:
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

export const WalletChargeByChequeFailure = (props: WalletChargeByChequeResultProps) => {
    const {done, result} = props

    return (
        <>
            <ModalHeader>
                شارژ کیف پول - چک صیادی
            </ModalHeader>
            <ModalBody className="flex flex-col gap-4 justify-center">
                <div className="text-danger flex flex-col items-center gap-2">
                    <BoldDuotoneWalletIcon size={64}/>
                    <span className="font-bold">
                        چک صیادی شما تایید نشد.
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
                            شماره چک:
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
                            عدم وضوح کافی تصویر
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










