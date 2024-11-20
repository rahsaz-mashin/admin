import {z} from "zod";
import {ColumnType} from "@/stories/RahsazAdmin/TableList";
import {FormFieldFunc} from "@/stories/General/FormFieldsGenerator";
import {ProductMachineModel} from "@/interfaces/ProductMachineModel.interface";
import slugify from "slugify-persian";




type T = ProductMachineModel


const formInitial: T = {
    id: undefined,
    title: "",
    slug: "",
    description: "",
    tags: [],
    icon: undefined,
    brand: null,

}



const formSchema = z.object({
    brand: z.string({message: "برند معتبر نیست"}).regex(/^\d+$/, "برند معتبر نیست")
        .or(z.number({message: "برند معتبر نیست"}).int({message: "برند معتبر نیست"}).positive({message: "برند معتبر نیست"}))
        .transform((id) => ({id: +id})),
    title: z.string({message: "نام را وارد کنید"}).min(3, "نام معتبر نیست"),
    slug: z.string({message: "شناسه اینترنتی را وارد کنید"})
        .regex(/^[a-zA-Z0-9\u0600-\u06FF\u0660-\u0669\-]+$/, "فقط حروف و اعداد فارسی و انگلیسی و علامت - مجاز می باشد")
        .min(3, "شناسه اینترنتی معتبر نیست"),
    icon: z.string({message: "آیکون معتبر نیست"}).regex(/^\d+$/, "آیکون معتبر نیست")
        .or(z.number({message: "آیکون معتبر نیست"}).int({message: "آیکون معتبر نیست"}).positive({message: "آیکون معتبر نیست"}))
        .transform((id) => ({id: +id}))
        .nullable()
        .optional()
        .transform(value => value ? value : null),
    description: z.string({message: "توضیحات را وارد کنید"}).min(20, "توضیحات حداقل باید 20 کاراکتر باشد").or(z.string().length(0)),
    tags: z.string({message: "برچسب ها را وارد کنید"})
        .regex(/^[a-zA-Z0-9\u0600-\u06FF\u0660-\u0669\s\-]+$/, "فقط حروف و اعداد فارسی و انگلیسی و علامت - و فاصله مجاز می باشد")
        .array().max(10, {message: "حداکثر 10 برچسب وارد کنید"}),
});



const formFields: FormFieldFunc<T> = (watch, setValue) => {
    return ([
        {
            name: "brand",
            type: "select",
            label: "برند",
            dynamic: {
                route: "product/machineBrand/sloStyle",
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
            className: "col-span-full xl:col-span-1",
            dependency: () => {
                const title = watch("title")
                setValue("slug", slugify(title, {lower: true, trim: true, remove: /[*+~.()'"%^&$#?؟×/!:@]/g }), {shouldValidate: true})
            },
        },
        {
            name: "slug",
            type: "input",
            label: "شناسه اینترنتی",
            isRequired: true,
            className: "col-span-full xl:col-span-1",
            description: "فقط حروف و اعداد فارسی و انگلیسی و علامت - مجاز می باشد",
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
            className: "col-span-full xl:col-span-1",
        },
        {
            name: "tags",
            type: "tag",
            label: "برچسب ها",
            isRequired: false,
            className: "col-span-full xl:col-span-1",
            description: "بعد افزودن هر مورد کلید Enter را فشار دهید"
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
                    <span>{ctx.brand?.title}</span>
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


export const productMachineModelContext = {
    apiRoute: "product/machineModel",
    form: {
        title: "مدل ماشین",
        schema: formSchema,
        fields: formFields,
        initial: formInitial,
    },
    table: {
        columns: tableColumns,
    },
}