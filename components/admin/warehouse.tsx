import React from "react";
import {z} from "zod";
import {ColumnType} from "@/stories/RahsazAdmin/TableList";
import {FormFieldFunc} from "@/stories/General/FormFieldsGenerator";
import {axiosCoreWithAuth} from "@/lib/axios";
import {Warehouse} from "@/interfaces/Warehouse.interface";


type T = Warehouse


const formInitial: T = {
    id: undefined,
    title: "",
    description: "",
    phone: "",
    country: undefined,
    province: undefined,
    city: undefined,
    address: "",
    zipCode: "",
    postBox: "",
    location: undefined,
    pictures: []
}


const formSchema = z.object({
    title: z.string({message: "نام را وارد کنید"}).min(3, "نام معتبر نیست"),
    phone: z.string({message: "شماره را وارد کنید"}).regex(/0[0-9]{2} [0-9]{4} [0-9]{4}|0[0-9]{10}/, "شماره وارد شده معتبر نیست")
        .transform((v) => (v.replaceAll(" ", ""))),
    country: z.string({message: "کشور معتبر نیست"}).regex(/^\d+$/, "کشور معتبر نیست")
        .or(z.number({message: "کشور معتبر نیست"}).int({message: "کشور معتبر نیست"}).positive({message: "کشور معتبر نیست"}))
        .transform((id) => ({id: +id})),
    province: z.string({message: "استان معتبر نیست"}).regex(/^\d+$/, "استان معتبر نیست")
        .or(z.number({message: "استان معتبر نیست"}).int({message: "استان معتبر نیست"}).positive({message: "استان معتبر نیست"}))
        .transform((id) => ({id: +id})),
    city: z.string({message: "شهر معتبر نیست"}).regex(/^\d+$/, "شهر معتبر نیست")
        .or(z.number({message: "شهر معتبر نیست"}).int({message: "شهر معتبر نیست"}).positive({message: "شهر معتبر نیست"}))
        .transform((id) => ({id: +id})),
    address: z.string({message: "آدرس را وارد کنید"}).min(5, "آدرس معتبر نیست"),
    location: z.string({message: "موقعیت مکانی را انتخاب کنید"}).regex(/^(-?\d+(\.\d+)?),\s*(-?\d+(\.\d+)?)$/, {message: "موقعیت مکانی نامعتبر می باشد"}),
    zipCode: z.string({message: "کد پستی را وارد کنید"}).regex(/[0-9]{10}/, "کد پستی وارد شده معتبر نیست").or(z.string().length(0)),
    postBox: z.string({message: "صندوق پستی را وارد کنید"}).regex(/[0-9]{10}/, "صندوق پستی وارد شده معتبر نیست").or(z.string().length(0)),
    description: z.string({message: "توضیحات را وارد کنید"}).min(20, "توضیحات حداقل باید 20 کاراکتر باشد"),
    pictures: z.object({id: z.number()}).array().optional(),
});


const formFields: FormFieldFunc<T> = (watch, setValue) => {
    return ([
        {
            name: "title",
            type: "input",
            label: "عنوان",
            isRequired: true,
            className: "col-span-full xl:col-span-1",
        },
        {
            name: "phone",
            type: "input",
            label: "شماره تماس",
            isRequired: true,
            isNumeric: true,
            pattern: "###########",
            className: "col-span-full xl:col-span-1",
        },
        {
            name: "pictures",
            type: "uploader",
            label: "آپلود تصاویر",
            isRequired: true,
            className: "col-span-full xl:col-span-1",
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
            name: "location",
            type: "location",
            label: "موقعیت مکانی",
            className: "col-span-full xl:col-span-1",
            dependency: async () => {
                const axios = axiosCoreWithAuth()

                const location = watch("location")

                if (!location) return

                const params = {location}
                const data: any = await axios.get("neshan/getAddress", {params})

                setValue("address", data.address, {shouldValidate: true})
                setValue("country", data.countryId || "", {shouldValidate: true})
                setValue("province", data.provinceId || "", {shouldValidate: true})
                setValue("city", data.cityId || "", {shouldValidate: true})
            }
        },
        {
            name: "country",
            type: "select",
            label: "کشور",
            isRequired: true,
            dynamic: {
                route: "addressCountry/sloStyle",
            },
            isSearchable: true,
            className: "col-span-full xl:col-span-1",
        },
        {
            name: "province",
            type: "select",
            label: "استان",
            isRequired: true,
            dynamic: {
                route: "addressProvince/sloStyle",
                filter: {
                    country: {$eq: watch(`country`)}
                },
            },
            isSearchable: true,
            className: "col-span-full xl:col-span-1",
        },
        {
            name: "city",
            type: "select",
            label: "شهر",
            isRequired: true,
            dynamic: {
                route: "addressCity/sloStyle",
                filter:  {
                    province: {$eq: watch(`province`)}
                },
            },
            isSearchable: true,
            className: "col-span-full xl:col-span-1",
        },
        {
            name: "address",
            type: "input",
            label: "آدرس کامل",
            isRequired: true,
            className: "col-span-full xl:col-span-1",
        },
        {
            name: "zipCode",
            type: "input",
            label: "کد پستی",
            isNumeric: true,
            pattern: "##########",
            className: "col-span-full xl:col-span-1",
        },
        {
            name: "postBox",
            type: "input",
            label: "صندوق پستی",
            isNumeric: true,
            pattern: "##########",
            className: "col-span-full xl:col-span-1",
        },
        {
            name: "description",
            type: "input",
            label: "توضیحات",
            isRequired: true,
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
        width: 120,
        minWidth: 120,
        toolsCell: {
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
    },
    {
        key: "phone",
        title: "شماره تماس",
        width: 120,
        minWidth: 120,
        render: (value, ctx, id) => {
            return <div dir="ltr">{value}</div>
        }
    },
    {
        key: "description",
        title: "توضیحات",
        minWidth: 150,
    },
]


export const warehouseContext = {
    apiRoute: "warehouse",
    form: {
        title: "انبار",
        schema: formSchema,
        fields: formFields,
        initial: formInitial,
    },
    table: {
        columns: tableColumns,
    },
}
