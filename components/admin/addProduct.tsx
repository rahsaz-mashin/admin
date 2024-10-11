import React, {Key, useEffect, useState} from "react";
import {z} from "zod";
import {FormRender} from "@/stories/RahsazAdmin/FormHandler";
import {FormFieldFunc} from "@/stories/General/FormFieldsGenerator";
import {Product} from "@/interfaces/Product.interface";
import {Card, CardHeader} from "@nextui-org/card";
import {Button, CardBody} from "@nextui-org/react";
import slugify from "slugify-persian";
import {
    OutlinedBasketIcon,
    OutlinedDocumentIcon,
    OutlinedNotebookBookmarkIcon,
    OutlinedRulerPenIcon,
    OutlinedWalletIcon
} from "@/stories/Icons";
import {PriceList} from "@/interfaces/PriceList.interface";
import {axiosCoreWithAuth} from "@/lib/axios";
import {NumericFormat} from "react-number-format";
import {Input} from "@nextui-org/input";
import {Currency} from "@/interfaces/Currency.interface";


type T = Product


const InfoBox: FormRender<T>['render'] = ({children, formState, watch, isEditing}) => {
    return (
        <Card
            className="col-span-full lg:col-span-6 xl:col-span-8"
            classNames={{body: "items-start text-start"}}
            isDisabled={formState?.isLoading || formState?.isValidating || formState?.isSubmitting || formState?.disabled}
        >
            <CardBody className="gap-3 grid grid-cols-2">
                {children}
            </CardBody>
        </Card>
    )
}

const SubmitBox: FormRender<T>['render'] = ({children, formState, watch, isEditing}) => {
    return (
        <Card
            className="col-span-full lg:col-span-6 xl:col-span-4 order-last xl:order-none"
            classNames={{body: "items-start text-start"}}
            isDisabled={formState?.isLoading || formState?.isValidating || formState?.isSubmitting || formState?.disabled}
        >
            <CardBody className="gap-5">
                <div className="flex flex-col gap-1 text-sm">
                    <div className="flex flex-row gap-1 items-center">
                        <b>زمان ایجاد:</b>
                        <span dir="ltr">{watch("createdAt")?.toString() || "-"}</span>
                    </div>
                    <div className="flex flex-row gap-1 items-center">
                        <b>آخرین ویرایش:</b>
                        <span dir="ltr">{watch("updatedAt")?.toString() || "-"}</span>
                    </div>
                    <div className="flex flex-row gap-1 items-center">
                        <b>زمان تایید:</b>
                        <span dir="ltr">1403/08/23 12:22</span>
                    </div>
                </div>
                <div className="flex flex-col gap-3 w-full">
                    {isEditing && (
                        <Button
                            type="button"
                            variant="flat"
                            color="default"
                            size="md"
                            fullWidth
                            isLoading={formState?.isValidating || formState?.isSubmitting}
                            isDisabled={formState?.isLoading || formState?.isValidating || formState?.isSubmitting || formState?.disabled}
                        >
                            انصراف
                        </Button>
                    )}
                    <Button
                        type="submit"
                        variant="shadow"
                        color="primary"
                        size="md"
                        fullWidth
                        isLoading={formState?.isValidating || formState?.isSubmitting}
                        isDisabled={formState?.isLoading || formState?.isValidating || formState?.isSubmitting || formState?.disabled}
                    >
                        {isEditing ? "ویرایش و برگشت به لیست" : "ثبت و برگشت به لیست"}
                    </Button>
                    <Button
                        type="submit"
                        variant="shadow"
                        color="primary"
                        size="md"
                        fullWidth
                        isLoading={formState?.isValidating || formState?.isSubmitting}
                        isDisabled={formState?.isLoading || formState?.isValidating || formState?.isSubmitting || formState?.disabled}
                    >
                        {isEditing ? "ویرایش و باقی ماندن" : "ثبت و باقی ماندن"}
                    </Button>
                </div>
            </CardBody>
        </Card>
    )
}

const CategoriesBox: FormRender<T>['render'] = ({children, formState, watch, isEditing}) => {
    return (
        <Card
            className="col-span-full lg:col-span-6 xl:col-span-4"
            classNames={{body: "items-start text-start"}}
            isDisabled={formState?.isLoading || formState?.isValidating || formState?.isSubmitting || formState?.disabled}
        >
            <CardHeader className="font-bold">دسته بندی موضوعی</CardHeader>
            <CardBody className="gap-5">
                {children}
            </CardBody>
        </Card>
    )
}

const MachineryBox: FormRender<T>['render'] = ({children, formState, watch, isEditing}) => {
    return (
        <Card
            className="col-span-full lg:col-span-6 xl:col-span-4"
            classNames={{body: "items-start text-start"}}
            isDisabled={formState?.isLoading || formState?.isValidating || formState?.isSubmitting || formState?.disabled}
        >
            <CardHeader className="font-bold">ماشین آلات</CardHeader>
            <CardBody className="gap-5">
                {children}
            </CardBody>
        </Card>
    )
}

const PicturesBox: FormRender<T>['render'] = ({children, formState, watch, isEditing}) => {
    return (
        <Card
            className="col-span-full lg:col-span-6 xl:col-span-4"
            classNames={{body: "items-start text-start"}}
            isDisabled={formState?.isLoading || formState?.isValidating || formState?.isSubmitting || formState?.disabled}
        >
            <CardHeader className="font-bold">تصاویر</CardHeader>
            <CardBody className="gap-5">
                {children}
            </CardBody>
        </Card>
    )
}

const DetailBox: FormRender<T>['render'] = ({children, formState, watch, isEditing}) => {

    return (
        <Card
            className="col-span-full lg:col-span-6 xl:col-span-8"
            classNames={{body: "items-start text-start"}}
            isDisabled={formState?.isLoading || formState?.isValidating || formState?.isSubmitting || formState?.disabled}
        >
            <CardBody className="gap-2 flex-col items-center">
                {children}
            </CardBody>
        </Card>
    )
}


const formInitial: T = {
    id: undefined,
    title: "",
    slug: "",
    names: [],
    tags: [],
    categories: [],
    machinery: [],

    intro: "",
    features: [],
    technical: [],
    price: [],
    inventory: [],

    isActiveInventoryManagement: false,
    minimumInventoryWarn: 0,

    pictures: [],
}


const formSchema = z.object({
    title: z.string({message: "نام را وارد کنید"}).min(3, "نام معتبر نیست"),
    slug: z.string({message: "شناسه اینترنتی را وارد کنید"})
        .regex(/^[a-zA-Z0-9\u0600-\u06FF\u0660-\u0669\-]+$/, "فقط حروف و اعداد فارسی و انگلیسی و علامت - مجاز می باشد")
        .min(3, "شناسه اینترنتی معتبر نیست"),
    names: z.string({message: "نام ها را وارد کنید"})
        .array(),
    tags: z.string({message: "برچسب ها را وارد کنید"})
        .regex(/^[a-zA-Z0-9\u0600-\u06FF\u0660-\u0669\s\-]+$/, "فقط حروف و اعداد فارسی و انگلیسی و علامت - و فاصله مجاز می باشد")
        .array().max(10, {message: "حداکثر 10 برچسب وارد کنید"}),


    intro: z.string({message: "معرفی کالا را وارد کنید"}).optional(),
    technical: z.object({
        title: z.string({message: "عنوان مشخصه را وارد کنید"}).min(3, "عنوان مشخصه معتبر نیست"),
        value: z.string({message: "مقدار مشخصه را وارد کنید"}).min(3, "مقدار مشخصه معتبر نیست"),
    }, {message: "مشخصات فنی معتبر نیست"}).array(),
    features: z.object({
        category: z.string({message: "نوع ویژگی معتبر نیست"}).regex(/^\d+$/, "نوع ویژگی معتبر نیست")
            .or(z.number({message: "نوع ویژگی معتبر نیست"}).int({message: "نوع ویژگی معتبر نیست"}).positive({message: "نوع ویژگی معتبر نیست"}))
            .transform((id) => ({id: +id})),
        value: z.string({message: "مقدار ویژگی معتبر نیست"}).regex(/^\d+$/, "مقدار ویژگی معتبر نیست")
            .or(z.number({message: "مقدار ویژگی معتبر نیست"}).int({message: "مقدار ویژگی معتبر نیست"}).positive({message: "مقدار ویژگی معتبر نیست"}))
            .transform((id) => ({id: +id})),
    }, {message: "ویژگی ها معتبر نیست"}).array(),
    price: z.object({
        priceList: z.string({message: "دسته قیمتی معتبر نیست"}).regex(/^\d+$/, "دسته قیمتی معتبر نیست")
            .or(z.number({message: "دسته قیمتی معتبر نیست"}).int({message: "دسته قیمتی معتبر نیست"}).positive({message: "دسته قیمتی معتبر نیست"}))
            .transform((id) => ({id: +id})),
        amount: z.string({message: "قیمت را وارد کنید"})
            .regex(/^\d+(,\d{3})*(\.\d{1,2})?$/g, {message: "قیمت معتبر نیست"})
            .transform((val) => (+(val.replaceAll(",", ""))))
            .or(z.number({message: "قیمت معتبر نیست"}).positive({message: "قیمت معتبر نیست"})),
    }, {message: "قیمت گذاری معتبر نیست"}).array(),
    inventory: z.object({
        warehouse: z.string({message: "انبار معتبر نیست"}).regex(/^\d+$/, "انبار معتبر نیست")
            .or(z.number({message: "انبار معتبر نیست"}).int({message: "انبار معتبر نیست"}).positive({message: "انبار معتبر نیست"}))
            .transform((id) => ({id: +id})),
        inventory: z.string({message: "موجودی را وارد کنید"})
            .regex(/^\d+(,\d{3})*(\.\d{1,2})?$/g, {message: "موجودی معتبر نیست"})
            .transform((val) => (+(val.replaceAll(",", ""))))
            .or(z.number({message: "موجودی معتبر نیست"}).positive({message: "موجودی معتبر نیست"})),
    }, {message: "قیمت گذاری معتبر نیست"}).array(),

    isActiveInventoryManagement: z.boolean({message: "وضعیت مدیریت موجودی محصول را مشخص کنید"}),
    minimumInventoryWarn: z.string({message: "اعلان موجودی را وارد کنید"})
        .regex(/^\d+(,\d{3})*(\.\d{1,2})?$/g, {message: "اعلان موجودی معتبر نیست"})
        .transform((val) => (+(val.replaceAll(",", ""))))
        .or(z.number({message: "اعلان موجودی معتبر نیست"}).positive({message: "اعلان موجودی معتبر نیست"})),

    pictures: z.object({id: z.number()}).array().optional(),
    categories: z.string({message: "دسته بندی معتبر نیست"})
        .regex(/^(\d+(,\d+)*)$/, "دسته بندی معتبر نیست")
        .transform((ids) => (ids?.toString().split(",")))
        .or(z.number({message: "دسته بندی معتبر نیست"}).int({message: "دسته بندی معتبر نیست"}).positive({message: "دسته بندی معتبر نیست"}).array())
        .transform((ids) => (ids?.map((id) => ({id: +id})) || []))
        .nullable()
        .optional(),
    machinery: z.string({message: "ماشین آلات معتبر نیست"})
        .regex(/^(\d+(,\d+)*)$/, "ماشین آلات معتبر نیست")
        .transform((ids) => (ids?.toString().split(",")))
        .or(z.number({message: "ماشین آلات معتبر نیست"}).int({message: "ماشین آلات معتبر نیست"}).positive({message: " معتبر نیست"}).array())
        .transform((ids) => (ids?.map((id) => ({id: +id})) || []))
        .nullable()
        .optional(),
});

const formRender: FormRender<T>[] = [
    {
        render: InfoBox,
        fields: ["title", "slug", "names", "tags"]
    },
    {
        render: SubmitBox,
        fields: []
    },
    {
        render: DetailBox,
        sections: [
            {
                key: "intro",
                title: (
                    <div className="flex items-center gap-2">
                        <OutlinedNotebookBookmarkIcon size={20}/>
                        <span>معرفی کلی</span>
                    </div>
                ),
                fields: ["intro"],
            },
            {
                key: "features",
                title: (
                    <div className="flex items-center gap-2">
                        <OutlinedDocumentIcon size={20}/>
                        <span>ویژگی ها</span>
                    </div>
                ),
                fields: ["features"],
            },
            {
                key: "technical",
                title: (
                    <div className="flex items-center gap-2">
                        <OutlinedRulerPenIcon size={20}/>
                        <span>مشخصات فنی</span>
                    </div>
                ),
                fields: ["technical"],
            },
            {
                key: "pricing",
                title: (
                    <div className="flex items-center gap-2">
                        <OutlinedWalletIcon size={20}/>
                        <span>قیمت گذاری</span>
                    </div>
                ),
                fields: ["price"],
            },
            {
                key: "inventory",
                title: (
                    <div className="flex items-center gap-2">
                        <OutlinedBasketIcon size={20}/>
                        <span>موجودی</span>
                    </div>
                ),
                fields: ["isActiveInventoryManagement", "minimumInventoryWarn", "inventory"],
            },
        ],
    },

    {
        render: CategoriesBox,
        fields: ["categories"]
    },
    {
        render: () => <div className="hidden xl:block lg:col-span-6 xl:col-span-8"/> ,
        fields: []
    },
    {
        render: MachineryBox,
        fields: ["machinery"]
    },
    {
        render: () => <div className="hidden xl:block lg:col-span-6 xl:col-span-8"/> ,
        fields: []
    },
    {
        render: PicturesBox,
        fields: ["pictures"]
    },

]


const formFields: FormFieldFunc<T> = (watch, setValue) => {

    return ([
        {
            name: "title",
            type: "input",
            label: "عنوان",
            isRequired: true,
            className: "col-span-full xl:col-span-1",
            dependency: () => {
                const title = watch("title")
                setValue("slug", slugify(title, {lower: true}), {shouldValidate: true})
            },
        },
        {
            name: "slug",
            type: "input",
            label: "شناسه اینترنتی",
            isRequired: true,
            className: "col-span-full xl:col-span-1",
            description: "فقط حروف و اعداد فارسی و انگلیسی و علامت - مجاز می باشد",
        },
        {
            name: "names",
            type: "tag",
            label: "نام های کالا",
            className: "col-span-full xl:col-span-1",
            description: "بعد افزودن هر مورد کلید Enter را فشار دهید"
        },
        {
            name: "tags",
            type: "tag",
            label: "برچسب ها",
            className: "col-span-full xl:col-span-1",
            description: "بعد افزودن هر مورد کلید Enter را فشار دهید"
        },
        {
            name: "categories",
            type: "select",
            label: "دسته بندی",
            isMultiple: true,
            dynamic: {
                route: "product/category/sloStyle",
            },
        },
        {
            name: "machinery",
            type: "select",
            label: "ماشین آلات",
            isMultiple: true,
            dynamic: {
                route: "product/machineModel/sloStyle",
            },
        },
        {
            name: "pictures",
            type: "uploader",
            label: "آپلود تصاویر",
            isRequired: false,
            description: "تا حجم 2 مگابایت",
            isDisabled: false,
            // accept: {
            //     'image/png': ['.png'],
            // },
            minSize: 1000,
            maxFiles: 0,
            isMultiple: true,


            withPreview: true
        },
        {
            name: "intro",
            type: "editor",
            className: "col-span-full",
        },
        {
            name: "features",
            type: "array",
            description: "برای افزودن ویژگی، دکمه افزودن را کلیک کنید",
            className: "col-span-full",
            fields: (index) => [
                {
                    name: "category",
                    type: "select",
                    label: "نوع ویژگی",
                    dynamic: {
                        route: "product/featuresCategory/sloStyle",
                    },
                    isRequired: true,
                    className: "col-span-full xl:col-span-1",
                },
                {
                    name: "value",
                    type: "select",
                    label: "مقدار ویژگی",
                    dynamic: {
                        route: "product/features/sloStyle",
                        filter: {category: watch(`features.${index}.category`)}
                    },
                    isRequired: true,
                    className: "col-span-full xl:col-span-1",
                },
            ],
        },
        {
            name: "technical",
            type: "array",
            description: "برای مشخص کردن مشخصات فنی، دکمه افزودن را کلیک کنید",
            className: "col-span-full",
            fields: (index) => [
                {
                    name: "title",
                    type: "input",
                    label: "عنوان مشخصه فنی",
                    isRequired: true,
                    className: "col-span-full xl:col-span-1",
                },
                {
                    name: "value",
                    type: "input",
                    label: "مقدار مشخصه فنی",
                    isMultiline: true,
                    isRequired: true,
                    className: "col-span-full xl:col-span-1",
                },
            ]
        },
        {
            name: "price",
            type: "array",
            description: "برای مشخص کردن قیمت، دکمه افزودن را کلیک کنید",
            className: "col-span-full",
            fields: (index) => [
                {
                    name: "priceList",
                    type: "select",
                    label: "لیست قیمتی",
                    dynamic: {
                        route: "priceList/sloStyle",
                    },
                    isRequired: true,
                    className: "col-span-full xl:col-span-1",
                    dependency: async (value, name) => {
                        const axios = axiosCoreWithAuth()
                        const amount = watch(`price.${index}.amount`).toString()
                        const priceList = value
                        if (!priceList) return
                        const data: {
                            primaryCurrency: Currency,
                            secondaryCurrency: Currency,
                            finalPrice: number,
                            finalPriceWithVat: number
                        } = await axios.get(`product/calculatePrice?priceList=${priceList}&price=${amount?.replace(/,/g,"") || 0}`)
                        setValue(`price.${index}.info`, data)
                    },
                },
                {
                    name: "amount",
                    type: "input",
                    label: "قیمت",
                    isNumeric: true,
                    isRequired: true,
                    endContent: (
                        watch(`price.${index}.info`)?.primaryCurrency?.icon
                            ?
                            <span
                                className="text-primary h-6 w-6 flex justify-center items-center"
                                dangerouslySetInnerHTML={{__html: (watch(`price.${index}.info`)?.primaryCurrency?.icon?.content || "")}}
                            />
                            :
                            (watch(`price.${index}.info`)?.primaryCurrency?.iso || "~")
                    ),
                    className: "col-span-full xl:col-span-1",
                    dependency: async (value, name) => {
                        const axios = axiosCoreWithAuth()
                        const amount = value.toString()
                        const priceList = watch(`price.${index}.priceList`)
                        if (!priceList) return
                        const data: {
                            primaryCurrency: Currency,
                            secondaryCurrency: Currency,
                            finalPrice: number,
                            finalPriceWithVat: number,
                        } = await axios.get(`product/calculatePrice?priceList=${priceList}&price=${amount?.replace(/,/g,"") || 0}`)
                        setValue(`price.${index}.info`, data)
                    },
                },
                {
                    name: "calc",
                    type: "custom",
                    className: "col-span-full",
                    children: (
                        <div className="flex flex-col gap-2 truncate text-sm">
                            <div className="flex gap-2 items-center">
                                <div className="">
                                    قیمت نهایی:
                                </div>
                                <div className="flex gap-1 font-bold">
                                    <NumericFormat
                                        value={watch(`price.${index}.info`)?.finalPrice || 0}
                                        thousandSeparator=","
                                        decimalSeparator="."
                                        allowNegative={false}
                                        decimalScale={0}
                                        allowLeadingZeros={false}
                                        displayType="text"
                                    />
                                    <span className="text-xs font-bold text-primary">
                                        {(
                                            watch(`price.${index}.info`)?.secondaryCurrency?.icon
                                                ?
                                                <span
                                                    className="text-primary h-6 w-6 flex justify-center items-center"
                                                    dangerouslySetInnerHTML={{__html: (watch(`price.${index}.info`)?.secondaryCurrency?.icon?.content || "")}}
                                                />
                                                :
                                                (watch(`price.${index}.info`)?.secondaryCurrency?.iso || "~")
                                        )}
                                    </span>
                                </div>
                            </div>
                            <div className="flex gap-2 items-center">
                                <div className="">
                                    قیمت نهایی (با احتساب ارزش افزوده):
                                </div>
                                <div className="flex gap-1 font-bold">
                                    <NumericFormat
                                        value={watch(`price.${index}.info`)?.finalPriceWithVat || 0}
                                        thousandSeparator=","
                                        decimalSeparator="."
                                        allowNegative={false}
                                        decimalScale={0}
                                        allowLeadingZeros={false}
                                        displayType="text"
                                    />
                                    <span className="text-xs font-bold text-primary">
                                        {(
                                            watch(`price.${index}.info`)?.secondaryCurrency?.icon
                                                ?
                                                <span
                                                    className="text-primary h-6 w-6 flex justify-center items-center"
                                                    dangerouslySetInnerHTML={{__html: (watch(`price.${index}.info`)?.secondaryCurrency?.icon?.content || "")}}
                                                />
                                                :
                                                (watch(`price.${index}.info`)?.secondaryCurrency?.iso || "~")
                                        )}
                                    </span>
                                </div>
                            </div>
                        </div>
                    )
                },
            ],
        },
        {
            name: "isActiveInventoryManagement",
            type: "switch",
            label: "مدیریت موجودی محصول",
            className: "col-span-full",
        },
        {
            name: "minimumInventoryWarn",
            type: "input",
            label: "اعلان موجودی کم",
            isNumeric: true,
            isRequired: false,
            className: "col-span-full",
            description: "در صورتی که موجودی کل محصول از این عدد کمتر شود، در محصول لیبلی با این عنوان نمایش داده خواهد شد",
        },
        {
            name: "inventory",
            type: "array",
            description: "برای مشخص کردن موجودی، دکمه افزودن را کلیک کنید",
            className: "col-span-full",
            fields: (index) => [
                {
                    name: "warehouse",
                    type: "select",
                    label: "انبار",
                    dynamic: {
                        route: "warehouse/sloStyle",
                    },
                    isRequired: true,
                    className: "col-span-full xl:col-span-1",
                },
                {
                    name: "inventory",
                    type: "input",
                    label: "تعداد موجود در این انبار",
                    isNumeric: true,
                    isRequired: true,
                    className: "col-span-full xl:col-span-1",
                },
            ],
        },
    ])
}


export const addProductContext = {
    apiRoute: "product",
    form: {
        title: "کالا",
        schema: formSchema,
        fields: formFields,
        initial: formInitial,
        render: formRender,
    },
}
