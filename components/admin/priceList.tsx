import {z} from "zod";
import {ColumnType} from "@/stories/RahsazAdmin/TableList";
import {FormFieldFunc} from "@/stories/General/FormFieldsGenerator";
import {PriceList, pricingPolicyEnum} from "@/interfaces/PriceList.interface";
import {useEffect, useState} from "react";
import {Currency} from "@/interfaces/Currency.interface";
import {axiosCoreWithAuth} from "@/lib/axios";


type T = PriceList


const formInitial: T = {
    id: undefined,

    title: "",
    description: "",
    icon: undefined,

    primaryCurrency: undefined,
    secondaryCurrency: undefined,

    ratio: 1000,

    pricingPolicy: pricingPolicyEnum.none,
    value: 0,

    isDefault: false,
}


const formSchema = z.object({
    title: z.string({message: "نام را وارد کنید"}).min(3, "نام معتبر نیست"),
    description: z.string({message: "توضیحات را وارد کنید"}).min(20, "توضیحات حداقل باید 20 کاراکتر باشد").or(z.string().length(0)),
    icon: z.string({message: "آیکون معتبر نیست"}).regex(/^\d+$/, "آیکون معتبر نیست")
        .or(z.number({message: "آیکون معتبر نیست"}).int({message: "آیکون معتبر نیست"}).positive({message: "آیکون معتبر نیست"}))
        .transform((id) => ({id: +id}))
        .nullable()
        .optional()
        .transform(value => value ? value : null),
    primaryCurrency: z.string({message: "ارز معتبر نیست"}).regex(/^\d+$/, "ارز معتبر نیست")
        .or(z.number({message: "ارز معتبر نیست"}).int({message: "ارز معتبر نیست"}).positive({message: "ارز معتبر نیست"}))
        .transform((id) => ({id: +id})),
    secondaryCurrency: z.string({message: "ارز معتبر نیست"}).regex(/^\d+$/, "ارز معتبر نیست")
        .or(z.number({message: "ارز معتبر نیست"}).int({message: "ارز معتبر نیست"}).positive({message: "ارز معتبر نیست"}))
        .transform((id) => ({id: +id})),
    ratio: z.string({message: "قیمت هر واحد را وارد کنید"})
        .regex(/^\d+(,\d{3})*(\.\d{1,2})?$/g, {message: "قیمت معتبر نیست"})
        .transform((val) => (+(val.replaceAll(",", ""))))
        .or(z.number({message: "قیمت معتبر نیست"}).positive({message: "قیمت معتبر نیست"})),
    pricingPolicy: z.nativeEnum(pricingPolicyEnum, {message: "سیاست قیمت گذاری نامعتبر است"}),
    value: z.string().or(z.number()).optional(),
}).superRefine((data, ctx) => {
    const v = +String(data.value).replaceAll(",", "")
    if (data.pricingPolicy === pricingPolicyEnum.none) {

    } else if (data.pricingPolicy === pricingPolicyEnum.constantPercent && (v <= 0 || v >= 100)) {
        ctx.addIssue({
            path: ["value"],
            code: z.ZodIssueCode.too_big,
            maximum: 100,
            type: "number",
            inclusive: true,
            message: 'درصد معتبر نیست'
        });
    } else if (data.pricingPolicy === pricingPolicyEnum.constantNumber && (v <= 0)) {
        ctx.addIssue({
            path: ["value"],
            code: z.ZodIssueCode.too_small,
            minimum: 0,
            type: "number",
            inclusive: true,
            message: 'مقدار معتبر نیست',
        });
    }
    data.value = v
});

const pricingPolicyItems = [
    {
        key: pricingPolicyEnum.none,
        label: "بدون سیاست",
    },
    {
        key: pricingPolicyEnum.constantNumber,
        label: "مقدار ثابت",
    },
    {
        key: pricingPolicyEnum.constantPercent,
        label: "درصد ثابت",
    },
]

const FormFields: FormFieldFunc<T> = (watch, setValue) => {

    const [primaryCurrency, setPrimaryCurrency] = useState<Currency>()
    const [secondaryCurrency, setSecondaryCurrency] = useState<Currency>()

    const valueLabel = watch("pricingPolicy") === pricingPolicyEnum.constantPercent ? "درصد کاهش" : "مقدار کاهش"
    const valueEndContent = watch("pricingPolicy") === pricingPolicyEnum.constantPercent ? "%" : (
        primaryCurrency ? (
            primaryCurrency.icon
                ?
                <span
                    className="text-primary h-6 w-6 flex justify-center items-center"
                    dangerouslySetInnerHTML={{__html: primaryCurrency.icon?.content || ""}}
                />
                :
                primaryCurrency.iso
        ) : "")

    const ratioLabel = "قیمت هر واحد ارز اولیه به ارز نهایی"
    const ratioEndContent = secondaryCurrency ? (
        secondaryCurrency.icon
            ?
            <span
                className="text-primary h-6 w-6 flex justify-center items-center"
                dangerouslySetInnerHTML={{__html: secondaryCurrency.icon?.content || ""}}
            />
            :
            secondaryCurrency.iso
    ) : ""

    const axios = axiosCoreWithAuth()

    const getPrimaryCurrency = async (id: number) => {
        if(!id) setPrimaryCurrency(undefined)
        const data: Currency = await axios.get(`currency/getInfo/${id}`)
        setPrimaryCurrency(data)
    }
    const getSecondaryCurrency = async (id: number) => {
        if(!id) setSecondaryCurrency(undefined)
        const data: Currency = await axios.get(`currency/getInfo/${id}`)
        setSecondaryCurrency(data)
    }
    useEffect(() => {
        const v = watch("primaryCurrency")
        if (v) getPrimaryCurrency(v as any as number)
    }, [watch("primaryCurrency")]);

    useEffect(() => {
        const v = watch("secondaryCurrency")
        if (v) getSecondaryCurrency(v as any as number)
    }, [watch("secondaryCurrency")]);


    return ([
        {
            name: "title",
            type: "input",
            label: "عنوان",
            isRequired: true,
            className: "col-span-full",
        },
        {
            name: "primaryCurrency",
            type: "select",
            label: "ارز اولیه",
            dynamic: {
                route: "currency/sloStyle",
            },
            isRequired: true,
            isSearchable: true,
            className: "col-span-full xl:col-span-1",
        },
        {
            name: "secondaryCurrency",
            type: "select",
            label: "ارز نهایی",
            dynamic: {
                route: "currency/sloStyle",
            },
            isRequired: true,
            isSearchable: true,
            className: "col-span-full xl:col-span-1",
        },
        {
            name: "ratio",
            type: "input",
            label: ratioLabel,
            isNumeric: true,
            isRequired: true,
            allowNegative: false,
            decimalScale: 2,
            allowLeadingZeros: false,
            minValue: 1,
            endContent: ratioEndContent,
            className: "col-span-full",
        },
        {
            name: "pricingPolicy",
            type: "select",
            label: "سیاست قیمت گذاری",
            isRequired: true,
            className: "col-span-full xl:col-span-1",
            items: pricingPolicyItems,
            dependency: () => {
                setValue("value", 0)
            }
        },
        {
            name: "value",
            type: "input",
            label: valueLabel,
            isNumeric: true,
            isRequired: true,
            allowNegative: false,
            decimalScale: 2,
            allowLeadingZeros: false,
            minValue: 0,
            endContent: valueEndContent,
            className: "col-span-full xl:col-span-1",
            isDisabled: watch("pricingPolicy") === pricingPolicyEnum.none,
        },
        {
            name: "icon",
            type: "iconLibrary",
            label: "آیکون",
            isRequired: false,
            className: "col-span-full",
        },
        {
            name: "description",
            type: "input",
            label: "توضیحات",
            isMultiline: true,
            className: "col-span-full",
        },
    ])
}

const tableColumns: ColumnType<T>[] = [
    {
        key: "actions",
        title: "ابزارها",
        align: "center",
        width: 160,
        minWidth: 160,
        toolsCell: {
            chooseDefault: true,
            editable: true,
            removable: true,
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
        key: "title",
        title: "عنوان",
        width: 160,
        minWidth: 160,
        render: (value, ctx) => {
            return (
                <div className="flex gap-2 items-center">
                    <span>{value}</span>
                    <span
                        className="text-primary h-6 w-6 flex justify-center items-center"
                        dangerouslySetInnerHTML={{__html: ctx.icon?.content || ""}}
                    />
                </div>
            )
        },
    },
    {
        key: "primaryCurrency",
        title: "ارز اولیه",
        width: 160,
        minWidth: 160,
        render: (value: Currency, ctx) => {
            return (
                <div className="flex gap-2 items-center">
                    <span>{value?.title}</span>
                    <span
                        className="text-primary h-6 w-6 flex justify-center items-center"
                        dangerouslySetInnerHTML={{__html: value.icon?.content || ""}}
                    />
                    <span className="font-bold">({value?.iso})</span>
                </div>
            )
        },
    },
    {
        key: "secondaryCurrency",
        title: "ارز نهایی",
        width: 160,
        minWidth: 160,
        render: (value: Currency, ctx) => {
            return (
                <div className="flex gap-2 items-center">
                    <span>{value?.title}</span>
                    <span
                        className="text-primary h-6 w-6 flex justify-center items-center"
                        dangerouslySetInnerHTML={{__html: value.icon?.content || ""}}
                    />
                    <span className="font-bold">({value?.iso})</span>
                </div>
            )
        },
    },
    {
        key: "pricingPolicy",
        title: "سیاست قیمت گذاری",
        width: 150,
        minWidth: 150,
        render: (value, ctx) => {
            return (
                <div className="flex gap-2 items-center">
                    <span>{pricingPolicyItems.find((v) => (v.key === value))?.label}</span>
                    {value !== pricingPolicyEnum.none && (
                        <span>({ctx.value}{value === pricingPolicyEnum.constantNumber ? ctx.primaryCurrency?.iso : "%"})</span>
                    )}
                </div>
            )
        },
    },
]


export const priceListContext = {
    apiRoute: "priceList",
    form: {
        title: "دسته قیمتی",
        schema: formSchema,
        fields: FormFields,
        initial: formInitial,
    },
    table: {
        columns: tableColumns,
    },
}