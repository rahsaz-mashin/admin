import React from "react";
import {z} from "zod";
import {ColumnType} from "@/stories/RahsazAdmin/TableList";
import {FormFieldFunc} from "@/stories/General/FormFieldsGenerator";
import {Chip} from "@nextui-org/react";
import {Menu} from "@/interfaces/Menu.interface";


type T = Menu


const formInitial: T = {
    id: undefined,
    title: "",
    icon: undefined,
    url: "",
    isExternal: false,
    isActive: true,
    priority: 1,
    onlyDesktop: false,
    onlyMobile: false,
}


const formSchema = z.object({
    title: z.string({message: "نام را وارد کنید"}).min(3, "نام معتبر نیست"),
    url: z.string({message: "آدرس را وارد کنید"}),
    icon: z.string({message: "آیکون معتبر نیست"}).regex(/^\d+$/, "آیکون معتبر نیست")
        .or(z.number({message: "آیکون معتبر نیست"}).int({message: "آیکون معتبر نیست"}).positive({message: "آیکون معتبر نیست"}))
        .transform((id) => ({id: +id}))
        .nullable()
        .optional()
        .transform(value => value ? value : null),
    isActive: z.boolean({message: "وضعیت را مشخص کنید"}),
    isExternal: z.boolean({message: "وضعیت آدرس را مشخص کنید"}),
    onlyDesktop: z.boolean({message: "مود فقط دسکتاپ را مشخص کنید"}).optional(),
    onlyMobile: z.boolean({message: "مود فقط گوشی را مشخص کنید"}).optional(),
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
            name: "icon",
            type: "iconLibrary",
            label: "آیکون",
            isRequired: false,
            className: "col-span-full",
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
        {
            name: "onlyDesktop",
            type: "switch",
            label: "فقط دسکتاپ",
            className: "col-span-full xl:col-span-1",
            withoutCheckDependency: true,
            dependency: (value, name) => {
                console.log({ddd: value})
                if (value) setValue("onlyMobile", false)
            },
        },
        {
            name: "onlyMobile",
            type: "switch",
            label: "فقط موبایل",
            className: "col-span-full xl:col-span-1",
            withoutCheckDependency: true,
            dependency: (value, name) => {
                console.log({mmm: value})
                if (value) setValue("onlyDesktop", false)
            },
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
                <div className="flex gap-2 flex-col">
                    <div className="flex gap-2 items-center">
                    <span
                        className="text-primary h-6 w-6 flex justify-center items-center"
                        dangerouslySetInnerHTML={{__html: ctx.icon?.content || ""}}
                    />
                        <span>{value}</span>
                    </div>
                    <Chip size="sm" variant="faded" color="default" dir="ltr">{ctx?.url}</Chip>
                </div>
            )
        },
    },
    {
        key: "onlyDesktop",
        title: "محل نمایش",
        minWidth: 100,
        width: 100,
        align: "center",
        render: (value: boolean, ctx) => {
            const onlyDesktop = ctx?.onlyDesktop
            const onlyMobile = ctx?.onlyMobile

            return (
                <div className="flex flex-row items-center justify-center gap-2 truncate">
                    {(!onlyDesktop && !onlyMobile) && (
                        <Chip
                            size="sm"
                            color="success"
                            variant="shadow"
                            className="text-white"
                        >
                            هر دو
                        </Chip>
                    )}
                    {(!onlyDesktop && onlyMobile) && (
                        <Chip
                            size="sm"
                            color="primary"
                            variant="shadow"
                            className="text-white"
                        >
                            فقط موبایل
                        </Chip>
                    )}
                    {(onlyDesktop && !onlyMobile) && (
                        <Chip
                            size="sm"
                            color="secondary"
                            variant="shadow"
                            className="text-white"
                        >
                            فقط دسکتاپ
                        </Chip>
                    )}
                    {(onlyDesktop && onlyMobile) && (
                        <Chip
                            size="sm"
                            color="default"
                            variant="shadow"
                            className="text-white"
                        >
                            هیچکدام
                        </Chip>
                    )}
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


export const menuContext = {
    apiRoute: "admin/menu",
    form: {
        title: "منو",
        schema: formSchema,
        fields: formFields,
        initial: formInitial,
    },
    table: {
        columns: tableColumns,
        enableTrashBox: false,
    },
}
