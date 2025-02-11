/* eslint-disable @typescript-eslint/no-unused-vars */


import {z} from "zod";
import {ColumnType} from "@/stories/TableList";
import {FormFieldFunc} from "@/stories/General/FormFieldsGenerator";
import {ContextObjectType} from "@/stories/FormListContext";
import {Chip} from "@heroui/react";
import {FooterShortcut} from "@/interfaces/FooterShortcut.interface";


export type T = FooterShortcut


const formInitial: T = {
    id: undefined,
    title: "",
    url: "",
    isExternal: false,
    isActive: true,
    priority: 1,
}


const formSchema = z.object({
    title: z.string({message: "نام را وارد کنید"}).min(3, "نام معتبر نیست"),
    url: z.string({message: "آدرس را وارد کنید"}).regex(/^.+?[^\/:](?=[?\/]|$)/, "آدرس معتبر نیست"),
    isActive: z.boolean({message: "وضعیت را مشخص کنید"}),
    isExternal: z.boolean({message: "وضعیت آدرس را مشخص کنید"}),
    priority: z.string({message: "اولویت را وارد کنید"})
        .regex(/^\d+(,\d{3})*(\.\d{1,2})?$/g, {message: "اولویت معتبر نیست"})
        .transform((val) => (+(val.replaceAll(",", ""))))
        .or(z.number({message: "اولویت معتبر نیست"}).positive({message: "اولویت معتبر نیست"})),
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
            name: "url",
            type: "input",
            label: "آدرس",
            isLtr: true,
            isRequired: true,
            className: "col-span-full xl:col-span-1",
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
            name: "isActive",
            type: "switch",
            label: "فعال",
            className: "col-span-full",
        },
        {
            name: "isExternal",
            type: "switch",
            label: "آدرس خارج سامانه",
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
        minWidth: 160,
        render: (value, ctx) => {
            return (
                <div className="flex gap-2 flex-col">
                    <div className="flex gap-2 items-center">
                        <span>{value}</span>
                    </div>
                    <Chip size="sm" variant="faded" color="default" dir="ltr">{ctx?.url}</Chip>
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
        key: "isActive",
        title: "وضعیت",
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
]

const context: ContextObjectType<T> = {
    mode: "both",
    apiRoute: "admin/footerShortcuts",

    formTitle: "لینک های فوتر",
    formSchema: formSchema,
    formFields: formFields,
    formInitialValue: formInitial,
    formRender: undefined,
    formUpsert: false,

    tableColumns,
    enableTrashBox: false,
}
export default context