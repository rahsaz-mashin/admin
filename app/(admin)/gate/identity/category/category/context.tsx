/* eslint-disable @typescript-eslint/no-unused-vars */


import {z} from "zod";
import {ColumnType} from "@/stories/TableList";
import {FormFieldFunc} from "@/stories/General/FormFieldsGenerator";
import {ContextObjectType} from "@/stories/FormListContext";
import {IdentityCategory} from "@/interfaces/IdentityCategory.interface";



export type T = IdentityCategory


const formInitial: T = {
    id: undefined,
    title: "",
    description: "",
    icon: undefined,
    parent: null,
}


const formSchema = z.object({
    parent: z.string({message: "مادر معتبر نیست"}).regex(/^\d+$/, "مادر معتبر نیست")
        .or(z.number({message: "مادر معتبر نیست"}).int({message: "مادر معتبر نیست"}).positive({message: "مادر معتبر نیست"}))
        .transform((id) => ({id: +id}))
        .nullable(),
    title: z.string({message: "نام را وارد کنید"}).min(3, "نام معتبر نیست"),
    icon: z.string({message: "آیکون معتبر نیست"}).regex(/^\d+$/, "آیکون معتبر نیست")
        .or(z.number({message: "آیکون معتبر نیست"}).int({message: "آیکون معتبر نیست"}).positive({message: "آیکون معتبر نیست"}))
        .transform((id) => ({id: +id}))
        .nullable()
        .optional()
        .transform(value => value ? value : null),
    description: z.string({message: "توضیحات را وارد کنید"}).min(20, "توضیحات حداقل باید 20 کاراکتر باشد").or(z.string().length(0)),
});


const formFields: FormFieldFunc<T> = (watch, setValue) => {
    return ([
        {
            name: "parent",
            type: "select",
            label: "مادر",
            dynamic: {
                route: "identity/category/sloStyle",
            },
            isSearchable: true,
            className: "col-span-full",
        },
        {
            name: "title",
            type: "input",
            label: "عنوان",
            isRequired: true,
            className: "col-span-full",
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
                <div className="flex gap-2 items-center">
                    {!!ctx.parent && (
                        <>
                            <span>{ctx.parent?.title}</span>
                            <span>/</span>
                        </>
                    )}
                    <span>{value}</span>
                    <span
                        className="text-primary h-6 w-6 flex justify-center items-center"
                        dangerouslySetInnerHTML={{__html: ctx.icon?.content || ""}}
                    />
                </div>
            )
        },
    },
]


const context: ContextObjectType<T> = {
    mode: "both",
    apiRoute: "identity/category",

    formTitle: "دسته بندی هویت",
    formSchema: formSchema,
    formFields: formFields,
    formInitialValue: formInitial,
    formRender: undefined,
    formUpsert: false,

    tableColumns,
    enableTrashBox: true,
}
export default context