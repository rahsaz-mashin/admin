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
                <div className="flex flex-row gap-3 w-full">
                    {isEditing && (
                        <Button
                            type="button"
                            variant="flat"
                            color="default"
                            size="lg"
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
                        size="lg"
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
                        size="lg"
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

    isActiveInventoryManagement: true,
    minimumInventoryWarn: 0,

    pictures: [],
}


const formSchema = z.object({
    title: z.string({message: "نام را وارد کنید"}).min(3, "نام معتبر نیست"),
    slug: z.string({message: "شناسه اینترنتی را وارد کنید"})
        .regex(/^[a-zA-Z0-9\u0600-\u06FF\u0660-\u0669\-]+$/, "فقط حروف و اعداد فارسی و انگلیسی و علامت - مجاز می باشد")
        .min(3, "شناسه اینترنتی معتبر نیست"),
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
        render: PicturesBox,
        fields: ["pictures"]
    },
    {
        render: CategoriesBox,
        fields: ["categories"]
    },
    {
        render: MachineryBox,
        fields: ["machinery"]
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
            label: "نام های محصول",
            isRequired: false,
            className: "col-span-full xl:col-span-1",
            description: "بعد افزودن هر مورد کلید Enter را فشار دهید"
        },
        {
            name: "tags",
            type: "tag",
            label: "برچسب ها",
            isRequired: false,
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
            isRequired: true,
        },
        {
            name: "machinery",
            type: "select",
            label: "ماشین آلات",
            isMultiple: true,
            dynamic: {
                route: "product/machineModel/sloStyle",
            },
            isRequired: true,
        },
        {
            name: "pictures",
            type: "uploader",
            label: "آپلود تصاویر",
            isRequired: true,
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
                        const data: PriceList = await axios.get(`priceList/getInfo/${value}`)
                        setValue(`price.${index}.info`, data)
                    },
                },
                {
                    name: "amount",
                    type: "input",
                    label: "قیمت",
                    isNumeric: true,
                    isRequired: true,
                    endContent: watch(`price.${index}.info`)?.primaryCurrency?.iso || "~",
                    className: "col-span-full xl:col-span-1",
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
