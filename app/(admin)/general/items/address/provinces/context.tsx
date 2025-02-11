/* eslint-disable @typescript-eslint/no-unused-vars */


import {z} from "zod";
import {ColumnType} from "@/stories/TableList";
import {FormFieldFunc} from "@/stories/General/FormFieldsGenerator";
import {AddressProvince} from "@/interfaces/AddressProvince.interface";
import {ContextObjectType} from "@/stories/FormListContext";


export type T = AddressProvince


const formInitial: T = {
    id: undefined,
    title: "",
    icon: undefined,
    country: undefined,
}


const formSchema = z.object({
    country: z.string({message: "کشور معتبر نیست"}).regex(/^\d+$/, "کشور معتبر نیست")
        .or(z.number({message: "کشور معتبر نیست"}).int({message: "کشور معتبر نیست"}).positive({message: "کشور معتبر نیست"}))
        .transform(Number),
    title: z.string().min(3, "نام معتبر نیست"),
    icon: z.string({message: "آیکون معتبر نیست"}).regex(/^\d+$/, "آیکون معتبر نیست")
        .or(z.number({message: "آیکون معتبر نیست"}).int({message: "آیکون معتبر نیست"}).positive({message: "آیکون معتبر نیست"}))
        .transform(Number)
        .nullable()
        .optional()
        .transform(value => value ? value : null),
});


const formFields: FormFieldFunc<T> = (watch) => {
    return ([
        {
            name: "country",
            type: "select",
            label: "کشور",
            dynamic: {
                route: "addressCountry/sloStyle",
            },
            isRequired: true,
            isSearchable: true,
            className: "col-span-full",
        },
        {
            name: "title",
            type: "input",
            label: "عنوان",
            isRequired: true,
            className: "col-span-full ",
        },
        {
            name: "icon",
            type: "iconLibrary",
            label: "آیکون",
            isRequired: false,
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
                    <span>{ctx.country?.title}</span>
                    <span>/</span>
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
    apiRoute: "addressProvince",

    formTitle: "استان",
    formSchema: formSchema,
    formFields: formFields,
    formInitialValue: formInitial,
    formRender: undefined,
    formUpsert: false,

    tableColumns,
    enableTrashBox: false,
}
export default context