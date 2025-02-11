/* eslint-disable @typescript-eslint/no-unused-vars */


import {z} from "zod";
import {ColumnType} from "@/stories/TableList";
import {FormFieldFunc} from "@/stories/General/FormFieldsGenerator";
import {ContextObjectType} from "@/stories/FormListContext";
import {Chip, Image} from "@heroui/react";
import NextImage from "next/image";
import {Slider, sliderLayoutModeEnum} from "@/interfaces/Slider.interface";



export type T = Slider


const formInitial: T = {
    id: undefined,

    title: "",
    subtitle: "",
    description: "",
    url: "",

    thumbnail: null,
    file1: null,
    file2: null,
    file3: null,
    file4: null,

    isVisible: true,
    layoutMode: sliderLayoutModeEnum.oneLayout,
    priority: 1,

    blurBackground: true,
    background: null,
}


const formSchema = z.object({
    title: z.string({message: "عنوان را وارد کنید"}).min(3, "عنوان معتبر نیست"),
    subtitle: z.string({message: "توضیحات را وارد کنید"}).min(10, "توضیحات حداقل باید 10 کاراکتر باشد").optional().nullable().or(z.string().length(0)),
    description: z.string({message: "توضیحات را وارد کنید"}).min(10, "توضیحات حداقل باید 10 کاراکتر باشد").optional().nullable().or(z.string().length(0)),
    url: z.string({message: "آدرس را وارد کنید"}),

    layoutMode: z.nativeEnum(sliderLayoutModeEnum, {message: "نوع چینش نامعتبر است"}),

    background: z.object({id: z.number()}, {message: "تصویر بکگراند را وارد کنید"}),
    thumbnail: z.object({id: z.number()}, {message: "تصویر را وارد کنید"}),
    file1: z.object({id: z.number()}, {message: "فایل را وارد کنید"}),
    file2: z.object({id: z.number()}, {message: "فایل را وارد کنید"}).optional().nullable(),
    file3: z.object({id: z.number()}, {message: "فایل را وارد کنید"}).optional().nullable(),
    file4: z.object({id: z.number()}, {message: "فایل را وارد کنید"}).optional().nullable(),


    priority: z.string({message: "اولویت را وارد کنید"})
        .regex(/^\d+(,\d{3})*(\.\d{1,2})?$/g, {message: "اولویت معتبر نیست"})
        .transform((val) => (+(val.replaceAll(",", ""))))
        .or(z.number({message: "اولویت معتبر نیست"}).positive({message: "اولویت معتبر نیست"})),
    isVisible: z.boolean({message: "وضعیت نمایش را مشخص کنید"}),
    blurBackground: z.boolean({message: "وضعیت بلور بودن بکگراند را مشخص کنید"}),
});

const layoutModeItems = [
    {
        key: sliderLayoutModeEnum.oneLayout,
        label: "یک تیکه",
    },
    {
        key: sliderLayoutModeEnum.twoLayout,
        label: "دو تیکه",
    },
    {
        key: sliderLayoutModeEnum.threeLayout,
        label: "سه تیکه",
    },
    {
        key: sliderLayoutModeEnum.fourLayout,
        label: "چهار تیکه",
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
        },
        {
            name: "subtitle",
            type: "input",
            label: "زیرعنوان",
            isRequired: false,
            className: "col-span-full xl:col-span-1",
        },
        {
            name: "url",
            type: "input",
            label: "آدرس",
            isLtr: true,
            isRequired: false,
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
            withPreview: true,
        },
        {
            name: "background",
            type: "uploader",
            label: "آپلود تصویر بکگراند",
            isRequired: true,
            className: "col-span-full xl:col-span-1",
            description: "تصویر بکگراند (تا حجم 2 مگابایت)",
            isDisabled: false,
            accept: {
                'image/png': ['.png', '.PNG'],
                'image/jpg': ['.jpg', '.jpeg', '.JPG', '.JPEG'],
            },
            minSize: 1000,
            maxFiles: 2097152,
            isMultiple: false,
            withPreview: true,
        },
        {
            name: "blurBackground",
            type: "switch",
            label: "بکگراند بلور شود؟",
            className: "col-span-full",
        },
        {
            name: "layoutMode",
            type: "radioBox",
            label: "قالب چینش",
            isRequired: true,
            className: "col-span-full",
            items: layoutModeItems,
            orientation: "horizontal",
        },
        {
            name: "file1",
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

            withPreview: true,

        },
        {
            name: "file2",
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

            withPreview: true,
            isHidden: watch("layoutMode") === sliderLayoutModeEnum.oneLayout,
        },
        {
            name: "file3",
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

            withPreview: true,
            isHidden: watch("layoutMode") === sliderLayoutModeEnum.twoLayout || watch("layoutMode") === sliderLayoutModeEnum.oneLayout,
        },
        {
            name: "file4",
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

            withPreview: true,
            isHidden: watch("layoutMode") === sliderLayoutModeEnum.threeLayout || watch("layoutMode") === sliderLayoutModeEnum.twoLayout || watch("layoutMode") === sliderLayoutModeEnum.oneLayout,
        },
        {
            name: "priority",
            type: "input",
            label: "اولویت",
            isNumeric: true,
            allowNegative: false,
            allowLeadingZeros: false,
            isRequired: true,
            className: "col-span-full",
        },
        {
            name: "isVisible",
            type: "switch",
            label: "نمایش",
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
                    <div className="flex flex-col gap-2">
                        <span className="truncate font-bold">{value}</span>
                        <span className="truncate font-light">{ctx?.subtitle}</span>
                    </div>
                </div>
            )
        },
    },
    {
        key: "layoutMode",
        title: "نحوه چینش",
        width: 150,
        minWidth: 150,
        render: (value, ctx) => {
            return (
                <div className="flex gap-2 items-center truncate">
                    <span>{layoutModeItems.find((v) => (v.key === value))?.label}</span>
                </div>
            )
        },
    },
    {
        key: "priority",
        title: "اولویت",
        minWidth: 100,
        width: 100,
        allowsSorting: true,
    },
    {
        key: "isVisible",
        title: "وضعیت نمایش",
        minWidth: 100,
        width: 100,
        align: "center",
        render: (value: boolean, ctx) => {
            return (
                <div className="flex flex-row items-center justify-center gap-2 truncate">
                    {value && (
                        <Chip
                            size="md"
                            color="success"
                            variant="shadow"
                            className="text-white"
                        >
                            فعال
                        </Chip>
                    )}
                    {!value && (
                        <Chip
                            size="md"
                            color="danger"
                            variant="shadow"
                            className="text-white"
                        >
                            غیرفعال
                        </Chip>
                    )}
                </div>
            )
        },
    },
    {
        key: "description",
        title: "توضیحات",
        minWidth: 150,
    },
]


const context: ContextObjectType<T> = {
    mode: "both",
    apiRoute: "admin/slider",

    formTitle: "اسلایدر",
    formSchema: formSchema,
    formFields: formFields,
    formInitialValue: formInitial,
    formRender: undefined,
    formUpsert: false,

    tableColumns,
    enableTrashBox: true,
}
export default context