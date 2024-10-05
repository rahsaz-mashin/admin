import {z} from "zod";
import {ColumnType} from "@/stories/RahsazAdmin/TableList";
import {FormFieldFunc} from "@/stories/General/FormFieldsGenerator";
import {PriceList, pricingPolicyEnum} from "@/interfaces/PriceList.interface";


type T = PriceList


const formInitial: T = {
    id: undefined,

    title: "",
    description: "",
    icon: undefined,

    pricingPolicy: pricingPolicyEnum.constantPercent,
    value: 1,

    primaryCurrency: undefined,
    secondaryCurrency: undefined,

    ratio: 1,

    isDefault: false,
}


const formSchema = z.object({
    title: z.string({message: "نام را وارد کنید"}).min(3, "نام معتبر نیست"),
    description: z.string({message: "توضیحات را وارد کنید"}).min(20, "توضیحات حداقل باید 20 کاراکتر باشد").or(z.string().length(0)),    endpoint: z.string({message: "آدرس وبسرویس را وارد کنید"}).regex(/^.+?[^\/:](?=[?\/]|$)/, "آدرس وبسرویس معتبر نیست"),

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
            name: "primaryCurrency",
            type: "select",
            label: "ارز مبداء",
            dynamic: {
                route: "currency/sloStyle",
            },
            isRequired: true,
            className: "col-span-full xl:col-span-1",
        },
        {
            name: "secondaryCurrency",
            type: "select",
            label: "ارز مقصد",
            dynamic: {
                route: "currency/sloStyle",
            },
            isRequired: true,
            className: "col-span-full xl:col-span-1",
        },
        {
            name: "primaryAmount",
            type: "input",
            label: "مقدار",
            isNumeric: true,
            isRequired: true,
            pattern: "##",
            className: "col-span-full xl:col-span-1",
        },
        {
            name: "secondaryAmount",
            type: "input",
            label: "مقدار",
            isNumeric: true,
            isRequired: true,
            pattern: "##",
            className: "col-span-full xl:col-span-1",
        },
        {
            name: "pricingPolicy",
            type: "select",
            label: "سیاست قیمت گذاری",
            isRequired: true,
            className: "col-span-full xl:col-span-1",
            items: [
                {
                    key: pricingPolicyEnum.constantNumber,
                    label: "مقدار ثابت",
                },
                {
                    key: pricingPolicyEnum.constantPercent,
                    label: "درصد ثابت",
                },
            ],
        },
        {
            name: "value",
            type: "input",
            label: watch("pricingPolicy") === pricingPolicyEnum.constantPercent ? "درصد کاهش" : "مقدار کاهش",
            isNumeric: true,
            isRequired: true,
            pattern: "##",
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
            name: "description",
            type: "input",
            label: "توضیحات",
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


export const priceListContext = {
    apiRoute: "priceList",
    form: {
        title: "دسته قیمتی",
        schema: formSchema,
        fields: formFields,
        initial: formInitial,
    },
    table: {
        columns: tableColumns,
    },
}