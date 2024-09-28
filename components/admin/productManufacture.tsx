import {z} from "zod";
import {ColumnType} from "@/stories/RahsazAdmin/TableList";
import {FormFieldFunc} from "@/stories/General/FormFieldsGenerator";
import {ProductManufacture} from "@/interfaces/ProductManufacture.interface";




type T = ProductManufacture


const formInitial: T = {
    id: undefined,
    title: "",
    icon: undefined,
}



const formSchema = z.object({
    province: z.string({message: "استان معتبر نیست"}).regex(/^\d+$/, "استان معتبر نیست")
        .or(z.number({message: "استان معتبر نیست"}).int({message: "استان معتبر نیست"}).positive({message: "استان معتبر نیست"}))
        .transform(Number),
    title: z.string({message: "نام را وارد کنید"}).min(3, "نام معتبر نیست"),
    icon: z.string({message: "آیکون معتبر نیست"}).regex(/^\d+$/, "آیکون معتبر نیست")
        .or(z.number({message: "آیکون معتبر نیست"}).int({message: "آیکون معتبر نیست"}).positive({message: "آیکون معتبر نیست"}))
        .transform(Number)
        .nullable()
        .optional(),
});


const formFields: FormFieldFunc<T> = (watch) => {
    return ([
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
            name: "parent",
            type: "select",
            label: "مادر",
            dynamic: {
                route: "product/category/sloStyle",
            },
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
    },
]






export const productManufactureContext = {
    apiRoute: "product/manufacture",
    form: {
        title: "سازنده ها",
        schema: formSchema,
        fields: formFields,
        initial: formInitial,
    },
    table: {
        columns: tableColumns,
    },
}