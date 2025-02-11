/* eslint-disable @typescript-eslint/no-unused-vars */


import {z} from "zod";
import {ColumnType} from "@/stories/TableList";
import {FormFieldFunc} from "@/stories/General/FormFieldsGenerator";
import {ContextObjectType} from "@/stories/FormListContext";
import moment from "jalali-moment";
import {Image} from "@heroui/react";
import NextImage from "next/image";
import {Story} from "@/interfaces/Story.interface";



export type T = Story


const formInitial: T = {
    id: undefined,
    title: "",
    description: "",

    file: null,
    thumbnail: null,
    product: null,

    expiredAt: undefined
}


const formSchema = z.object({
    title: z.string({message: "عنوان را وارد کنید"}).min(3, "عنوان معتبر نیست"),
    expiredAt: z.date({message: "تاریخ منقضی شدن معتبر نیست"}).nullable().optional(),
    product: z.union([
        z.string({message: "محصول مرتبط را انتخاب کنید"})
            .regex(/^\d+$/, "محصول مرتبط معتبر نیست")
            .transform((val) => ({id: +val})),
        z.number({message: "محصول مرتبط را انتخاب کنید"})
            .int("محصول مرتبط معتبر نیست")
            .positive("محصول مرتبط معتبر نیست")
            .transform((val) => ({id: val})),
    ])
        .nullable()
        .optional(),
    description: z.string({message: "توضیحات را وارد کنید"}).min(20, "توضیحات حداقل باید 20 کاراکتر باشد").optional().nullable().or(z.string().length(0)),
    thumbnail: z.object({id: z.number()}, {message: "تصویر را وارد کنید"}),
    file: z.object({id: z.number()}, {message: "فایل را وارد کنید"}),
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
            name: "expiredAt",
            type: "input",
            label: "تاریخ منقضی شدن",
            className: "col-span-full xl:col-span-1",
            isDateInput: true,
            withPicker: true,
            granularity: "day"
        },
        {
            name: "file",
            type: "uploader",
            label: "آپلود فایل",
            isRequired: true,
            className: "col-span-full xl:col-span-1",
            description: "فایل تصویر یا ویدئو (تا حجم 20 مگابایت)",
            isDisabled: false,
            // accept: {
            //     'image/png': ['.png', '.PNG'],
            //     'image/jpg': ['.jpg', '.jpeg', '.JPG', '.JPEG'],
            //     'video/mp4': ['.mp4', '.MP4'],
            // },
            minSize: 1000,
            maxFiles: 20971520,
            isMultiple: false,

            withPreview: true
        },
        {
            name: "thumbnail",
            type: "uploader",
            label: "آپلود تصویر بند انگشتی",
            isRequired: true,
            className: "col-span-full xl:col-span-1",
            description: "تصویر بند انگشتی (تا حجم 2 مگابایت)",
            isDisabled: false,
            accept: {
                'image/png': ['.png', '.PNG'],
                'image/jpg': ['.jpg', '.jpeg', '.JPG', '.JPEG'],
            },
            minSize: 1000,
            maxFiles: 2097152,
            isMultiple: false,

            withPreview: true
        },
        {
            name: "product",
            type: "select",
            label: "محصول مرتبط",
            isRequired: false,
            dynamic: {
                route: "admin/product/sloStyle",
            },
            isSearchable: true,
            className: "col-span-full",
        },
        {
            name: "description",
            type: "input",
            label: "توضیحات",
            isRequired: false,
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
        minWidth: 240,
        render: (value, ctx) => {
            return (
                <div className="flex flex-row gap-3 items-center">
                    <div className="w-24 h-24">
                        <Image
                            as={NextImage}
                            width={100}
                            height={100}
                            alt={ctx.thumbnail?.alt}
                            title={ctx.thumbnail?.title}
                            src={`${ctx.thumbnail ? (ctx.thumbnail.system.baseUrl + "/" + ctx.thumbnail?.path) : ""}`}
                            radius="full"
                            loading="eager"
                            className="object-fill !h-full !w-full"
                            classNames={{wrapper: "h-full w-full bg-contain bg-center"}}
                            fallbackSrc="/fallback.png"
                        />
                    </div>
                    <div className="flex flex-col gap-3">
                        <span className="truncate">{value}</span>
                    </div>
                </div>
            )
        },
    },
    {
        key: "expiredAt",
        title: "تاریخ منقضی شدن",
        width: 240,
        minWidth: 240,
        render: (value, ctx, id) => {
            return (
                <span dir="ltr">
                    {moment(value?.toString()).format("jYYYY/jM/jDD HH:mm:ss") || "-"}
                </span>
            )
        }
    },
    {
        key: "description",
        title: "توضیحات",
        minWidth: 150,
    },
]



const context: ContextObjectType<T> = {
    mode: "both",
    apiRoute: "admin/story",

    formTitle: "استوری",
    formSchema: formSchema,
    formFields: formFields,
    formInitialValue: formInitial,
    formRender: undefined,
    formUpsert: false,

    tableColumns,
    enableTrashBox: true,
}
export default context