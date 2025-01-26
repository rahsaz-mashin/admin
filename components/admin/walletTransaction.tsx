import React, {useEffect, useState} from "react";
import {z} from "zod";
import {ColumnType} from "@/stories/RahsazAdmin/TableList";
import {FormFieldFunc} from "@/stories/General/FormFieldsGenerator";
import {
    Button,
    Chip,
    getKeyValue,
    Modal,
    ModalBody,
    ModalContent, ModalFooter,
    ModalHeader,
    Spinner,
    Tooltip, useDisclosure
} from "@nextui-org/react";
import {Account} from "@/interfaces/Account.interface";
import {Check, Close, DoneAll, DriveFileRenameOutlineOutlined, Verified} from "@mui/icons-material";
import {identityTypesEnum} from "@/interfaces/Identity.interface";
import {NumericFormat} from "react-number-format";
import {
    WalletTransaction,
    walletTransactionMethodsEnum,
    walletTransactionStatusesEnum
} from "@/interfaces/WalletTransaction.interface";
import jMoment from "jalali-moment";
import {DuotoneCheckSquareIcon, DuotoneDangerSquareIcon, DuotoneProcessSquareIcon} from "@/stories/Icons";
import clsx from "clsx";
import {parseDateTime} from "@internationalized/date";
import moment from "moment/moment";
import {CalendarDateTimeSchema} from "@/schemas/CalendarDateTime.schema";
import {paymentMethodsEnum} from "@/interfaces/Payment.interface";
import {axiosCoreWithAuth} from "@/lib/axios";
import {WalletTransactionDetail} from "@/stories/RahsazStore/Wallet/Detail";
import {AccountDisplay} from "@/stories/RahsazAdmin/AccountDisplay/AccountDisplay";
import {MinorInput} from "@/stories/General/MinorInput";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";


type T = WalletTransaction


const formInitial: T = {
    id: undefined,

    account: null,
    amount: "",
    method: walletTransactionMethodsEnum.cheque,
    status: walletTransactionStatusesEnum.pending,

    orderbox: null,
    order: null,
    paymentbox: null,
    payment: {
        // payment

        method: paymentMethodsEnum.cheque,

        picture: null,
        dueDate: parseDateTime(jMoment().format("YYYY-MM-DD\THH:mm")),

        bankName: "",
        bankAccountNumber: "",

        receiptNumber: "",
        trackingNumber: "",

        chequeNumber: "",
        sayadiNumber: "",

        traceNumber: "",
        referenceNumber: "",
        transactionReferenceID: "",
        shaparakRefNumber: "",
    },
}

const formSerializer: (v: T) => T = (data) => {
    return {
        ...data,
        payment: {
            ...data.payment,
            dueDate: parseDateTime(jMoment(data.payment.dueDate).format("YYYY-MM-DD\THH:mm")),
        }
    }
}


const formSchema = z.object({
    account: z.string({message: "هویت معتبر نیست"}).regex(/^\d+$/, "هویت معتبر نیست")
        .or(z.number({message: "هویت معتبر نیست"}).int({message: "هویت معتبر نیست"}).positive({message: "هویت معتبر نیست"}))
        .transform((id) => ({id: +id})),

    method: z.nativeEnum(walletTransactionMethodsEnum, {message: "نوع تراکنش نامعتبر است"}),

    order: z.string({message: "سفارش معتبر نیست"}).regex(/^\d+$/, "سفارش معتبر نیست")
        .or(z.number({message: "سفارش معتبر نیست"}).int({message: "سفارش معتبر نیست"}).positive({message: "سفارش معتبر نیست"}))
        .transform((id) => ({id: +id}))
        .optional().nullable()
        .or(z.string().length(0)),

    amount: z.string({message: "مبلغ را وارد کنید"})
        .regex(/^\d+(,\d{3})*(\.\d{1,2})?$/g, {message: "مبلغ معتبر نیست"})
        .transform((val) => (+(val.replaceAll(",", ""))))
        .or(z.number({message: "مبلغ معتبر نیست"}).positive({message: "مبلغ معتبر نیست"}))
        .optional().nullable()
        .or(z.string().length(0)),

    payment: z.object({
        // id: z.number().positive().optional(),

        method: z.nativeEnum(paymentMethodsEnum, {message: "نوع پرداخت نامعتبر است"}),

        picture: z.object({id: z.number()}, {message: "تصویر را وارد کنید"})
            .optional().nullable(),

        dueDate: CalendarDateTimeSchema(),

        bankName: z.string({message: "نام بانک را وارد کنید"})
            .or(z.string().length(0))
            .optional().nullable(),
        bankAccountNumber: z.string({message: "شماره حساب یا کارت مبداء را وارد کنید"})
            .regex(/^\d+$/, "شماره حساب یا کارت مبداء معتبر نیست")
            .or(z.string().length(0))
            .optional().nullable(),

        // cheque
        chequeNumber: z.string({message: "شماره چک را وارد کنید"})
            .regex(/^\d+$/, "شماره چک معتبر نیست")
            .or(z.string().length(0))
            .optional().nullable(),
        sayadiNumber: z.string({message: "شماره صیادی را وارد کنید"})
            .regex(/^\d+$/, "شماره صیادی معتبر نیست")
            .or(z.string().length(0))
            .optional().nullable(),

        // bank
        receiptNumber: z.string({message: "شماره فیش را وارد کنید"})
            .regex(/^\d+$/, "شماره فیش معتبر نیست")
            .or(z.string().length(0))
            .optional().nullable(),
        trackingNumber: z.string({message: "شماره پیگیری را وارد کنید"})
            .regex(/^\d+$/, "شماره پیگیری معتبر نیست")
            .or(z.string().length(0))
            .optional().nullable(),

        // online
        traceNumber: z.string({message: "شماره رهگیری را وارد کنید"})
            .regex(/^\d+$/, "شماره رهگیری معتبر نیست")
            .or(z.string().length(0))
            .optional().nullable(),
        referenceNumber: z.string({message: "شماره مرجع را وارد کنید"})
            .regex(/^\d+$/, "شماره مرجع معتبر نیست")
            .or(z.string().length(0))
            .optional().nullable(),
        transactionReferenceID: z.string({message: "شناسه رهگیری را وارد کنید"})
            .regex(/^\d+$/, "شناسه رهگیری معتبر نیست")
            .or(z.string().length(0))
            .optional().nullable(),
        shaparakRefNumber: z.string({message: "شماره مرجع شاپرک را وارد کنید"})
            .regex(/^\d+$/, "شماره مرجع شاپرک معتبر نیست")
            .or(z.string().length(0))
            .optional().nullable(),
    })


}).superRefine((data, ctx) => {
    // ==== cheque
    if (data.method === walletTransactionMethodsEnum.cheque) {
        if (!data.amount) {
            ctx.addIssue({
                path: ["amount"],
                code: z.ZodIssueCode.custom,
                message: 'مبلغ معتبر نیست'
            });
        }
        if (!data.payment.picture) {
            ctx.addIssue({
                path: ["payment.picture"],
                code: z.ZodIssueCode.custom,
                message: 'تصویر معتبر نیست'
            });
        }
        if (!data.payment.bankName) {
            ctx.addIssue({
                path: ["payment.bankName"],
                code: z.ZodIssueCode.custom,
                message: 'نام بانک معتبر نیست'
            });
        }
        if (!data.payment.bankAccountNumber) {
            ctx.addIssue({
                path: ["payment.bankAccountNumber"],
                code: z.ZodIssueCode.custom,
                message: 'شماره حساب معتبر نیست'
            });
        }
        if (!data.payment.chequeNumber) {
            ctx.addIssue({
                path: ["payment.chequeNumber"],
                code: z.ZodIssueCode.custom,
                message: 'شماره چک معتبر نیست'
            });
        }
        if (!data.payment.sayadiNumber) {
            ctx.addIssue({
                path: ["payment.sayadiNumber"],
                code: z.ZodIssueCode.custom,
                message: 'شماره صیادی معتبر نیست'
            });
        }
    }
    // ==== bank
    if (data.method === walletTransactionMethodsEnum.bank) {
        if (!data.amount) {
            ctx.addIssue({
                path: ["amount"],
                code: z.ZodIssueCode.custom,
                message: 'مبلغ معتبر نیست'
            });
        }
        if (!data.payment.picture) {
            ctx.addIssue({
                path: ["payment.picture"],
                code: z.ZodIssueCode.custom,
                message: 'تصویر معتبر نیست'
            });
        }
        if (!data.payment.bankName) {
            ctx.addIssue({
                path: ["payment.bankName"],
                code: z.ZodIssueCode.custom,
                message: 'نام بانک معتبر نیست'
            });
        }
        if (!data.payment.bankAccountNumber) {
            ctx.addIssue({
                path: ["payment.bankAccountNumber"],
                code: z.ZodIssueCode.custom,
                message: 'شماره حساب معتبر نیست'
            });
        }
        if (!data.payment.receiptNumber) {
            ctx.addIssue({
                path: ["payment.receiptNumber"],
                code: z.ZodIssueCode.custom,
                message: 'شماره فیش معتبر نیست'
            });
        }
        if (!data.payment.trackingNumber) {
            ctx.addIssue({
                path: ["payment.trackingNumber"],
                code: z.ZodIssueCode.custom,
                message: 'شماره پیگیری معتبر نیست'
            });
        }
    }
    // ==== online
    if (data.method === walletTransactionMethodsEnum.online) {
        if (!data.amount) {
            ctx.addIssue({
                path: ["amount"],
                code: z.ZodIssueCode.custom,
                message: 'مبلغ معتبر نیست'
            });
        }
        if (!data.payment.bankAccountNumber) {
            ctx.addIssue({
                path: ["payment.bankAccountNumber"],
                code: z.ZodIssueCode.custom,
                message: 'شماره حساب معتبر نیست'
            });
        }
        if (!data.payment.traceNumber) {
            ctx.addIssue({
                path: ["payment.traceNumber"],
                code: z.ZodIssueCode.custom,
                message: 'شماره فیش معتبر نیست'
            });
        }
        if (!data.payment.referenceNumber) {
            ctx.addIssue({
                path: ["payment.referenceNumber"],
                code: z.ZodIssueCode.custom,
                message: 'شماره مرجع معتبر نیست'
            });
        }
        if (!data.payment.transactionReferenceID) {
            ctx.addIssue({
                path: ["payment.transactionReferenceID"],
                code: z.ZodIssueCode.custom,
                message: 'شناسه رهگیری معتبر نیست'
            });
        }
        if (!data.payment.shaparakRefNumber) {
            ctx.addIssue({
                path: ["payment.shaparakRefNumber"],
                code: z.ZodIssueCode.custom,
                message: 'شماره مرجع شاپرک معتبر نیست'
            });
        }
    }
    // ==== order
    if (data.method === walletTransactionMethodsEnum.order) {
        if (!data.order) {
            ctx.addIssue({
                path: ["order"],
                code: z.ZodIssueCode.custom,
                message: 'سفارش معتبر نیست'
            });
        }
    }
});


const transactionsMethodItems = [
    {
        key: walletTransactionMethodsEnum.online,
        label: "درگاه آنلاین",
    },
    {
        key: walletTransactionMethodsEnum.cheque,
        label: "چک فیزیکی",
    },
    {
        key: walletTransactionMethodsEnum.bank,
        label: "واریز بانکی",
    },
    {
        key: walletTransactionMethodsEnum.order,
        label: "ثبت سفارش",
    },
]

const paymentMethodItems = [
    {
        key: paymentMethodsEnum.online,
        label: "درگاه آنلاین",
    },
    {
        key: paymentMethodsEnum.cheque,
        label: "چک فیزیکی",
    },
    {
        key: paymentMethodsEnum.bank,
        label: "واریز بانکی",
    },
]

const formFields: FormFieldFunc<T> = (watch, setValue) => {
    return ([
        {
            name: "account",
            type: "select",
            label: "مشتری",
            dynamic: {
                route: "admin/account/sloStyle",
            },
            isRequired: true,
            isSearchable: true,
            className: "col-span-full",
        },
        {
            name: "method",
            type: "select",
            label: "نوع تراکنش",
            isRequired: true,
            className: "col-span-full",
            items: transactionsMethodItems,
            dependency: (value, name) => {
                if (value === walletTransactionMethodsEnum.cheque) {
                    setValue("payment.method", paymentMethodsEnum.cheque)
                } else if (value === walletTransactionMethodsEnum.bank) {
                    setValue("payment.method", paymentMethodsEnum.bank)
                } else if (value === walletTransactionMethodsEnum.online) {
                    setValue("payment.method", paymentMethodsEnum.online)
                } else {
                    setValue("payment.method", null)
                }
            },
        },
        {
            name: "orderbox",
            type: "custom",
            className: "col-span-full",
            isHidden: watch("method") !== walletTransactionMethodsEnum.order,
            children: (
                <div className="bg-primary p-3 w-full rounded-xl flex items-center justify-center text-white font-bold">
                    اطلاعات سفارش
                </div>
            )
        },
        {
            name: "order",
            type: "select",
            label: "سفارش",
            dynamic: {
                route: "admin/order/sloStyle",
                filter: {account: {$eq: watch("account")}}
            },
            isRequired: true,
            isSearchable: true,
            isHidden: watch("method") !== walletTransactionMethodsEnum.order,
            className: "col-span-full",
        },
        {
            name: "paymentbox",
            type: "custom",
            className: "col-span-full",
            isHidden: watch("method") === walletTransactionMethodsEnum.order,
            children: (
                <div className="bg-primary p-3 w-full rounded-xl flex items-center justify-center text-white font-bold">
                    اطلاعات پرداخت
                </div>
            )
        },


        // cheque
        {
            name: "payment.method",
            type: "select",
            label: "نوع پرداخت",
            isRequired: true,
            className: "col-span-full",
            items: paymentMethodItems,
            isDisabled: true,
            isHidden: true,
        },
        {
            name: "payment.picture",
            type: "uploader",
            label: "ثبت تصویر",
            isRequired: true,
            className: "col-span-full",
            description: "تصویر چک (تا حجم 2 مگابایت)",
            isDisabled: false,
            accept: {
                'image/png': ['.png', '.PNG'],
                'image/jpg': ['.jpg', '.jpeg', '.JPG', '.JPEG'],
            },
            minSize: 1000,
            maxFiles: 2097152,
            isMultiple: false,
            withPreview: true,
            isHidden: watch("method") !== walletTransactionMethodsEnum.cheque,
        },
        {
            name: "amount",
            type: "input",
            label: "مبلغ چک",
            isNumeric: true,
            isRequired: true,
            allowNegative: false,
            decimalScale: 0,
            allowLeadingZeros: false,
            className: "col-span-full xl:col-span-1",
            isHidden: watch("method") !== walletTransactionMethodsEnum.cheque,
        },
        {
            name: "payment.dueDate",
            type: "input",
            label: "زمان سررسید",
            isDateInput: true,
            isRequired: true,
            className: "col-span-full xl:col-span-1",
            granularity: "minute",
            isHidden: watch("method") !== walletTransactionMethodsEnum.cheque,
        },
        {
            name: "payment.bankName",
            type: "input",
            label: "نام بانک",
            isRequired: true,
            className: "col-span-full xl:col-span-1",
            isHidden: watch("method") !== walletTransactionMethodsEnum.cheque,
        },
        {
            name: "payment.bankAccountNumber",
            type: "input",
            label: "شماره حساب",
            isNumeric: true,
            isRequired: true,
            allowNegative: false,
            decimalScale: 0,
            allowLeadingZeros: false,
            thousandsGroupDisabled: true,
            className: "col-span-full xl:col-span-1",
            isHidden: watch("method") !== walletTransactionMethodsEnum.cheque,
        },
        {
            name: "payment.chequeNumber",
            type: "input",
            label: "شماره چک",
            isNumeric: true,
            isRequired: true,
            allowNegative: false,
            decimalScale: 0,
            allowLeadingZeros: false,
            thousandsGroupDisabled: true,
            className: "col-span-full xl:col-span-1",
            isHidden: watch("method") !== walletTransactionMethodsEnum.cheque,
        },
        {
            name: "payment.sayadiNumber",
            type: "input",
            label: "شماره صیادی",
            isNumeric: true,
            isRequired: true,
            allowNegative: false,
            decimalScale: 0,
            allowLeadingZeros: false,
            thousandsGroupDisabled: true,
            className: "col-span-full xl:col-span-1",
            isHidden: watch("method") !== walletTransactionMethodsEnum.cheque,
        },


        // bank
        {
            name: "payment.picture",
            type: "uploader",
            label: "ثبت تصویر",
            isRequired: true,
            className: "col-span-full",
            description: "تصویر فیش واریزی (تا حجم 2 مگابایت)",
            isDisabled: false,
            accept: {
                'image/png': ['.png', '.PNG'],
                'image/jpg': ['.jpg', '.jpeg', '.JPG', '.JPEG'],
            },
            minSize: 1000,
            maxFiles: 2097152,
            isMultiple: false,
            withPreview: true,
            isHidden: watch("method") !== walletTransactionMethodsEnum.bank,
        },
        {
            name: "amount",
            type: "input",
            label: "مبلغ واریزی",
            isNumeric: true,
            isRequired: true,
            allowNegative: false,
            decimalScale: 0,
            allowLeadingZeros: false,
            className: "col-span-full xl:col-span-1",
            isHidden: watch("method") !== walletTransactionMethodsEnum.bank,
        },
        {
            name: "payment.dueDate",
            type: "input",
            label: "زمان واریز",
            isDateInput: true,
            isRequired: true,
            className: "col-span-full xl:col-span-1",
            granularity: "minute",
            isHidden: watch("method") !== walletTransactionMethodsEnum.bank,
        },
        {
            name: "payment.bankName",
            type: "input",
            label: "نام بانک",
            isRequired: true,
            className: "col-span-full xl:col-span-1",
            isHidden: watch("method") !== walletTransactionMethodsEnum.bank,
        },
        {
            name: "payment.bankAccountNumber",
            type: "input",
            label: "شماره حساب / کارت مبداء",
            isNumeric: true,
            isRequired: true,
            allowNegative: false,
            decimalScale: 0,
            allowLeadingZeros: false,
            thousandsGroupDisabled: true,
            className: "col-span-full xl:col-span-1",
            isHidden: watch("method") !== walletTransactionMethodsEnum.bank,
        },
        {
            name: "payment.receiptNumber",
            type: "input",
            label: "شماره فیش",
            isNumeric: true,
            isRequired: true,
            allowNegative: false,
            decimalScale: 0,
            allowLeadingZeros: false,
            thousandsGroupDisabled: true,
            className: "col-span-full xl:col-span-1",
            isHidden: watch("method") !== walletTransactionMethodsEnum.bank,
        },
        {
            name: "payment.trackingNumber",
            type: "input",
            label: "شماره پیگیری",
            isNumeric: true,
            isRequired: true,
            allowNegative: false,
            decimalScale: 0,
            allowLeadingZeros: false,
            thousandsGroupDisabled: true,
            className: "col-span-full xl:col-span-1",
            isHidden: watch("method") !== walletTransactionMethodsEnum.bank,
        },

        // online
        {
            name: "amount",
            type: "input",
            label: "مبلغ",
            isNumeric: true,
            isRequired: true,
            allowNegative: false,
            decimalScale: 0,
            allowLeadingZeros: false,
            className: "col-span-full xl:col-span-1",
            isHidden: watch("method") !== walletTransactionMethodsEnum.online,
        },
        {
            name: "payment.dueDate",
            type: "input",
            label: "زمان پرداخت",
            isDateInput: true,
            isRequired: true,
            className: "col-span-full xl:col-span-1",
            granularity: "minute",
            isHidden: watch("method") !== walletTransactionMethodsEnum.online,
        },
        {
            name: "payment.bankAccountNumber",
            type: "input",
            label: "شماره کارت مبداء",
            isRequired: true,
            className: "col-span-full",
            isHidden: watch("method") !== walletTransactionMethodsEnum.online,
        },
        {
            name: "payment.traceNumber",
            type: "input",
            label: "شماره رهگیری",
            isNumeric: true,
            isRequired: true,
            allowNegative: false,
            decimalScale: 0,
            allowLeadingZeros: false,
            thousandsGroupDisabled: true,
            className: "col-span-full xl:col-span-1",
            isHidden: watch("method") !== walletTransactionMethodsEnum.online,
        },
        {
            name: "payment.referenceNumber",
            type: "input",
            label: "شماره مرجع",
            isNumeric: true,
            isRequired: true,
            allowNegative: false,
            decimalScale: 0,
            allowLeadingZeros: false,
            thousandsGroupDisabled: true,
            className: "col-span-full xl:col-span-1",
            isHidden: watch("method") !== walletTransactionMethodsEnum.online,
        },
        {
            name: "payment.transactionReferenceID",
            type: "input",
            label: "شناسه رهگیری",
            isNumeric: true,
            isRequired: true,
            allowNegative: false,
            decimalScale: 0,
            allowLeadingZeros: false,
            thousandsGroupDisabled: true,
            className: "col-span-full xl:col-span-1",
            isHidden: watch("method") !== walletTransactionMethodsEnum.online,
        },
        {
            name: "payment.shaparakRefNumber",
            type: "input",
            label: "شماره مرجع شاپرک",
            isNumeric: true,
            isRequired: true,
            allowNegative: false,
            decimalScale: 0,
            allowLeadingZeros: false,
            thousandsGroupDisabled: true,
            className: "col-span-full xl:col-span-1",
            isHidden: watch("method") !== walletTransactionMethodsEnum.online,
        },
    ])
}


type AcceptRejectModalPropsType = {
    id: string | number;

}

const AcceptRejectModal = (props: AcceptRejectModalPropsType) => {

    const {id} = props

    const state = useDisclosure();

    const [mode, setMode] = useState<"pending" | "confirmed" | "rejected" | null>(null)


    const onCancel = () => {
        setMode(null)
        state.onClose()
    }

    const onOpen = (mode: "pending" | "confirmed" | "rejected") => {
        setMode(mode)
        state.onOpen()
    }

    const schema = z.object({
        rejectionText: z.string({message: "دلیل رد را وارد کنید"}).optional().nullable(),
    })

    const initialData: T = {
        rejectionText: "",
    }


    const axios = axiosCoreWithAuth()
    const onSubmit = async (data: T) => {
        await axios.patch(`/admin/wallet/transaction/${id}/${mode}`, data)
        onCancel()
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
        <>
            <Tooltip
                color="foreground"
                placement="bottom"
                showArrow
                content="تایید نهایی"
                className="select-none"
                radius="sm"
            >
                <Button
                    isIconOnly
                    variant="light"
                    color="success"
                    radius="full"
                    onPress={() => {
                        onOpen("confirmed")
                    }}
                >
                    <DoneAll/>
                </Button>
            </Tooltip>
            <Tooltip
                color="foreground"
                placement="bottom"
                showArrow
                content="تایید"
                className="select-none"
                radius="sm"
            >
                <Button
                    isIconOnly
                    variant="light"
                    color="success"
                    radius="full"
                    onPress={() => {
                        onOpen("pending")
                    }}
                >
                    <Check/>
                </Button>
            </Tooltip>
            <Tooltip
                color="foreground"
                placement="bottom"
                showArrow
                content="رد"
                className="select-none"
                radius="sm"
            >
                <Button
                    isIconOnly
                    variant="light"
                    color="danger"
                    radius="full"
                    onPress={() => {
                        onOpen("rejected")
                    }}
                >
                    <Close/>
                </Button>
            </Tooltip>
            <Modal
                //
                backdrop="blur"
                isOpen={state.isOpen}
                onClose={onCancel}
                placement="bottom-center"
                isDismissable
            >
                <ModalContent>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <ModalHeader>
                            {(mode === "confirmed") ? "تایید نهایی" : (mode === "rejected") ? "رد" : "تایید اولیه"}
                        </ModalHeader>
                        <ModalBody className="relative px-2">
                            <WalletTransactionDetail id={id} full/>
                            {(mode === "rejected") && (
                                <MinorInput
                                    name="rejectionText"
                                    control={control}
                                    isMultiline
                                    isDisabled={formState.isLoading || formState.isValidating || formState.isSubmitting}
                                    label="دلیل رد"
                                />
                            )}
                        </ModalBody>
                        <ModalFooter>
                            <Button
                                variant="flat"
                                color="default"
                                isDisabled={formState.isLoading || formState.isValidating || formState.isSubmitting}
                                onPress={onCancel}
                            >
                                انصراف
                            </Button>
                            <Button
                                variant="shadow"
                                color={(mode === "confirmed") ? "success" : (mode === "rejected") ? "danger" : "warning"}
                                className="text-white"
                                isLoading={formState.isLoading || formState.isValidating || formState.isSubmitting}
                                type="submit"
                            >
                                {(mode === "confirmed") ? "تایید نهایی" : (mode === "rejected") ? "رد" : "تایید اولیه"}
                            </Button>
                        </ModalFooter>
                    </form>
                </ModalContent>
            </Modal>
        </>
    )
}


const tableColumns: ColumnType<T>[] = [
    {
        key: "actions",
        title: "ابزارها",
        align: "center",
        width: 120,
        minWidth: 120,
        toolsCell: {
            extra: (value, ctx) => {
                return (
                    <AcceptRejectModal
                        id={ctx.id}
                    />
                )
            }
        },
    },
    {
        key: "id",
        title: "شناسه",
        align: "center",
        width: 100,
        minWidth: 100,
        allowsSorting: true,
    },
    {
        key: "account",
        title: "کاربر",
        minWidth: 240,
        render: (value: Account, ctx) => {
            return (
                <AccountDisplay
                    account={value}
                />
            )
        },
    },
    {
        key: "method",
        title: "نوع تراکنش",
        width: 120,
        minWidth: 120,
        render: (value, ctx, id) => {
            let label = ""
            switch (ctx.method) {
                case walletTransactionMethodsEnum.cheque:
                    label = "چک فیزیکی"
                    break;
                case walletTransactionMethodsEnum.bank:
                    label = "واریز بانکی"
                    break;
                case walletTransactionMethodsEnum.online:
                    label = "درگاه آنلاین"
                    break;
                case walletTransactionMethodsEnum.order:
                    label = "ثبت سفارش"
                    break;
            }
            return (
                <div className="flex gap-2 items-center">
                    {label}
                </div>
            )
        }
    },
    {
        key: "status",
        title: "وضعیت",
        width: 120,
        minWidth: 120,
        render: (value, ctx, id) => {
            let label = "نا مشخص"
            let color = "text-gray-500"
            let Icon = DuotoneDangerSquareIcon
            switch (ctx.status) {
                case walletTransactionStatusesEnum.checking:
                    color = "text-blue-500"
                    label = "در حال بررسی"
                    Icon = DuotoneProcessSquareIcon
                    break;
                case walletTransactionStatusesEnum.pending:
                    color = "text-yellow-500"
                    label = "در انتظار اقدام"
                    Icon = DuotoneProcessSquareIcon
                    break;
                case walletTransactionStatusesEnum.confirmed:
                    color = "text-green-500"
                    label = "تایید شده"
                    Icon = DuotoneCheckSquareIcon
                    break;
                case walletTransactionStatusesEnum.rejected:
                    color = "text-red-500"
                    label = "رد شده"
                    Icon = DuotoneDangerSquareIcon
                    break;
            }
            return (
                <div className="flex gap-2 items-center">
                    <span className={clsx("flex truncate items-center gap-2 text-sm font-medium", color)}>
                        <Icon size={24}/>
                        <span>{label}</span>
                    </span>
                </div>
            )
        }
    },
    {
        key: "amount",
        title: "مبلغ",
        width: 120,
        minWidth: 120,
        render: (value, ctx, id) => {
            let type = ""
            switch (ctx.method) {
                case walletTransactionMethodsEnum.cheque:
                    type = "increase"
                    break;
                case walletTransactionMethodsEnum.bank:
                    type = "increase"
                    break;
                case walletTransactionMethodsEnum.online:
                    type = "increase"
                    break;
                case walletTransactionMethodsEnum.order:
                    type = "decrease"
                    break;
            }
            return (
                <div className="flex gap-2 items-center">
                    <span
                        className={(type === "increase") ? ("text-green-600") : (type === "decrease") ? ("text-red-600") : ("text-gray-600")}
                    >
                        <NumericFormat
                            value={value}
                            thousandSeparator=","
                            decimalSeparator="."
                            allowNegative={false}
                            decimalScale={0}
                            allowLeadingZeros={false}
                            displayType="text"
                        />
                        تومانءء
                    </span>
                </div>
            )
        }
    },
    {
        key: "createdAt",
        title: "زمان تراکنش",
        width: 120,
        minWidth: 120,
        render: (value, ctx, id) => {
            return (
                <div className="flex gap-2 items-center truncate font-light text-sm text-gray-400">
                    {jMoment(value).format(" jYYYY/jMM/jDD ساعت HH:mm ")}
                </div>
            )
        }
    },
]


export const walletTransactionContext = {
    apiRoute: "admin/wallet/transaction",
    form: {
        title: "تراکنش کیف پول",
        schema: formSchema,
        fields: formFields,
        initial: formInitial,
        serializer: formSerializer,
    },
    table: {
        columns: tableColumns,
        enableTrashBox: false,
    },
}