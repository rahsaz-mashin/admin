/* eslint-disable @typescript-eslint/no-unused-vars */

import {z} from "zod";
import {ColumnType} from "@/stories/TableList";
import {FormFieldFunc} from "@/stories/General/FormFieldsGenerator";
import {FileStorageSystem} from "@/interfaces/FileStorageSystem.interface";
import {ContextObjectType} from "@/stories/FormListContext";


export type T = FileStorageSystem


const formInitial: T = {
    id: undefined,

    title: "",
    description: "",

    accessKey: "",
    baseUrl: "",
    bucket: "",
    endpoint: "",
    key: "",
    secretKey: "",

    isActive: true,
    isDefault: false,
}


const formSchema = z.object({
    title: z.string({message: "نام را وارد کنید"}).min(3, "نام معتبر نیست"),
    key: z.string({message: "کلید شناسایی را وارد کنید"}).regex(/^(?=.{3,20}$)(?![_-])(?!.*[_-]{2})[a-zA-Z0-9_-]+(?<![_-])$/, "کلید شناسایی می بایست از حروف و اعداد لاتین به همراه علامت - تشکیل شود"),
    description: z.string({message: "توضیحات را وارد کنید"}).min(10, "توضیحات معتبر نیست").optional().nullable().or(z.string().length(0)),
    endpoint: z.string({message: "آدرس وبسرویس را وارد کنید"}).regex(/^.+?[^\/:](?=[?\/]|$)/, "آدرس وبسرویس معتبر نیست"),
    bucket: z.string({message: "شناسه باکت را وارد کنید"}).regex(/^(?=.{3,20}$)(?![_-])(?!.*[_-]{2})[a-zA-Z0-9_-]+(?<![_-])$/, "شناسه باکت می بایست از حروف و اعداد لاتین به همراه علامت - تشکیل شود"),
    accessKey: z.string({message: "کلید دسترسی را وارد کنید"}).min(3, "کلید دسترسی معتبر نیست"),
    secretKey: z.string({message: "کلید مخفی را وارد کنید"}).min(3, "کلید مخفی معتبر نیست"),
    baseUrl: z.string({message: "آدرس نمایش را وارد کنید"}).url({message: "آدرس نمایش معتبر نیست"}),
    isActive: z.boolean({message: "وضعیت را مشخص کنید"}),
});


const formFields: FormFieldFunc<T> = (watch) => {
    return ([
        {
            name: "title",
            type: "input",
            label: "عنوان",
            isRequired: true,
            className: "col-span-full xl:col-span-1",
        },
        {
            name: "key",
            type: "input",
            label: "کلید شناسایی",
            isLtr: true,
            isRequired: true,
            className: "col-span-full xl:col-span-1",
        },
        {
            name: "description",
            type: "input",
            label: "توضیحات",
            isMultiline: true,
            className: "col-span-full",
        },
        {
            name: "endpoint",
            type: "input",
            label: "آدرس وبسرویس",
            isLtr: true,
            isRequired: true,
            className: "col-span-full xl:col-span-1",
        },
        {
            name: "bucket",
            type: "input",
            label: "باکت",
            isLtr: true,
            isRequired: true,
            className: "col-span-full xl:col-span-1",
        },
        {
            name: "accessKey",
            type: "input",
            label: "کلید دسترسی",
            isLtr: true,
            isRequired: true,
            isSecret: true,
            className: "col-span-full",
        },
        {
            name: "secretKey",
            type: "input",
            label: "کلید مخفی",
            isLtr: true,
            isRequired: true,
            isSecret: true,
            className: "col-span-full",
        },
        {
            name: "baseUrl",
            type: "input",
            label: "آدرس نمایش",
            isLtr: true,
            isRequired: true,
            className: "col-span-full",
        },
        {
            name: "isActive",
            type: "switch",
            label: "فعال",
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
        key: "key",
        title: "کلید شناسایی",
        width: 160,
        minWidth: 160,
        render: (value) => {
            return <pre dir="ltr" className="text-center">{value}</pre>
        }
    },
    {
        key: "title",
        title: "عنوان",
        width: 160,
        minWidth: 160,
    },
    {
        key: "description",
        title: "توضیحات",
        minWidth: 150,
    },
]



const context: ContextObjectType<T> = {
    mode: "both",
    apiRoute: "fileStorageSystem",

    formTitle: "سیستم ذخیره سازی",
    formSchema: formSchema,
    formFields: formFields,
    formInitialValue: formInitial,
    formRender: undefined,
    formUpsert: false,

    tableColumns,
    enableTrashBox: false,
}
export default context