/* eslint-disable @typescript-eslint/no-unused-vars */


import {z} from "zod";
import {ColumnType} from "@/stories/TableList";
import {FormFieldFunc} from "@/stories/General/FormFieldsGenerator";
import {ContextObjectType} from "@/stories/FormListContext";
import {IdentityDocument} from "@/interfaces/IdentityDocument.interface";



export type T = IdentityDocument


const formInitial: T = {
    id: undefined,
    title: "",
    description: "",
    withAttachment: true,
    withTextarea: true,
    acceptAttachment: null,
}


const formSchema = z.object({
    title: z.string({message: "نام را وارد کنید"}).min(3, "نام معتبر نیست"),
    description: z.string({message: "توضیحات را وارد کنید"}).min(20, "توضیحات حداقل باید 20 کاراکتر باشد").or(z.string().length(0)),
    withAttachment: z.boolean({message: "وضعیت آپلود فایل را مشخص کنید"}),
    withTextarea: z.boolean({message: "وضعیت نوشتن متن را مشخص کنید"}),
    acceptAttachment: z.string({message: "فایل های مجاز را وارد کنید"}).or(z.string().length(0)).nullable().optional(),
});


const formFields: FormFieldFunc<T> = (watch, setValue) => {
    return ([
        {
            name: "title",
            type: "input",
            label: "عنوان",
            isRequired: true,
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
            name: "withAttachment",
            type: "switch",
            label: "آپلود فایل",
            className: "col-span-full xl:col-span-1",
        },
        {
            name: "withTextarea",
            type: "switch",
            label: "نوشتن متن",
            className: "col-span-full xl:col-span-1",
        },
        {
            name: "acceptAttachment",
            type: "input",
            label: "فایل های مجاز",
            isLtr: true,
            isRequired: false,
            isMultiline: true,
            isDisabled: !watch("withAttachment"),
            className: "col-span-full xl:col-span-1",
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
    },
]

const context: ContextObjectType<T> = {
    mode: "both",
    apiRoute: "identity/document",

    formTitle: "مدرک هویتی",
    formSchema: formSchema,
    formFields: formFields,
    formInitialValue: formInitial,
    formRender: undefined,
    formUpsert: false,

    tableColumns,
    enableTrashBox: true,
}
export default context