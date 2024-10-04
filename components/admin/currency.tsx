import {z} from "zod";
import {ColumnType} from "@/stories/RahsazAdmin/TableList";
import {FormFieldFunc} from "@/stories/General/FormFieldsGenerator";
import {Currency} from "@/interfaces/Currency.interface";




type T = Currency


const formInitial: T = {
    id: undefined,
    title: "",
    iso: "",
    icon: undefined,
    isDefault: false,
}



const formSchema = z.object({
    title: z.string({message: "نام را وارد کنید"}).min(3, "نام معتبر نیست"),
    iso: z.string({message: "شناسه iso را وارد کنید"})
        .regex(/^[A-Z]{3}$/, "شناسه iso معتبر نیست (حروف لاتین بزرگ)"),
    icon: z.string({message: "آیکون معتبر نیست"}).regex(/^\d+$/, "آیکون معتبر نیست")
        .or(z.number({message: "آیکون معتبر نیست"}).int({message: "آیکون معتبر نیست"}).positive({message: "آیکون معتبر نیست"}))
        .transform((id) => ({id: +id}))
        .nullable()
        .optional(),
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
            name: "iso",
            type: "input",
            label: "شناسه iso",
            isRequired: true,
            isLtr: true,
            className: "col-span-full xl:col-span-1",
            description: "شناسه iso مربوط به ارز را وارد کنید",
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






export const currencyContext = {
    apiRoute: "currency",
    form: {
        title: "ارز",
        schema: formSchema,
        fields: formFields,
        initial: formInitial,
    },
    table: {
        columns: tableColumns,
    },
}