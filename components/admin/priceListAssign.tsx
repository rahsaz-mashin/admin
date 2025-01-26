import {z} from "zod";
import {ColumnType} from "@/stories/RahsazAdmin/TableList";
import {FormFieldFunc} from "@/stories/General/FormFieldsGenerator";
import React from "react";
import {assignTypeEnum, PriceListAssign} from "@/interfaces/PriceListAssign.interface";
import {Chip} from "@nextui-org/react";
import {PriceList} from "@/interfaces/PriceList.interface";
import {identityTypesEnum} from "@/interfaces/Identity.interface";


type T = PriceListAssign


const formInitial: T = {
    id: undefined,

    assignType: assignTypeEnum.identityCategory,

    identity: null,
    identityCategory: null,
    identityGrade: null,

    priceList: [],

    priority: 1,
}


const formSchema = z.object({
    assignType: z.nativeEnum(assignTypeEnum, {message: "روش تخصیص نامعتبر است"}),

    identity: z.string({message: "هویت معتبر نیست"}).regex(/^\d+$/, "هویت معتبر نیست")
        .or(z.number({message: "هویت معتبر نیست"}).int({message: "هویت معتبر نیست"}).positive({message: "هویت معتبر نیست"}))
        .transform((id) => ({id: +id}))
        .optional()
        .nullable(),

    identityCategory: z.string({message: "دسته هویت معتبر نیست"}).regex(/^\d+$/, "دسته هویت معتبر نیست")
        .or(z.number({message: "دسته هویت معتبر نیست"}).int({message: "دسته هویت معتبر نیست"}).positive({message: "دسته هویت معتبر نیست"}))
        .transform((id) => ({id: +id}))
        .optional()
        .nullable(),

    identityGrade: z.string({message: "سطح هویت معتبر نیست"}).regex(/^\d+$/, "سطح هویت معتبر نیست")
        .or(z.number({message: "سطح هویت معتبر نیست"}).int({message: "سطح هویت معتبر نیست"}).positive({message: "سطح هویت معتبر نیست"}))
        .transform((id) => ({id: +id}))
        .optional()
        .nullable(),

    priceList: z.array(
        z.object({
                id: z.number().positive().optional(),
                priceList: z.union([
                    z.string({message: "دسته قیمتی را انتخاب کنید"})
                        .regex(/^\d+$/, "دسته قیمتی معتبر نیست")
                        .transform((val) => ({id: +val})),
                    z.number({message: "دسته قیمتی را انتخاب کنید"})
                        .int("دسته قیمتی معتبر نیست")
                        .positive("دسته قیمتی معتبر نیست")
                        .transform((val) => ({id: val})),
                ]),
            },
            {message: "دسته های قیمتی معتبر نیست"}
        ),
        {message: "دسته های قیمتی معتبر نیست"}
    )
        .refine((ctx) => {
                return ctx.length >= 1;
            },
            "حداقل یک مورد ایجاد کنید"
        )
        .refine((ctx) => {
                const cat = ctx.map(p => p.priceList.id);
                const unique = new Set(cat);
                return cat.length === unique.size;
            },
            "دسته های قیمتی نباید تکراری باشند"
        ),


    priority: z.string({message: "اولویت را وارد کنید"})
        .regex(/^\d+(,\d{3})*(\.\d{1,2})?$/g, {message: "اولویت معتبر نیست"})
        .transform((val) => (+(val.replaceAll(",", ""))))
        .or(z.number({message: "اولویت معتبر نیست"}).positive({message: "اولویت معتبر نیست"})),
})
    .superRefine((data, ctx) => {
        // const v = +String(data.value).replaceAll(",", "")
        console.log({m: data})
        if (data.assignType === assignTypeEnum.identity && !data.identity) {
            ctx.addIssue({
                path: ["identity"],
                code: z.ZodIssueCode.custom,
                message: 'هویت معتبر نیست'
            });
        }
        if (data.assignType === assignTypeEnum.identityCategory && !data.identityCategory) {
            ctx.addIssue({
                path: ["identityCategory"],
                code: z.ZodIssueCode.custom,
                message: 'دسته هویت معتبر نیست'
            });
        }
        if (data.assignType === assignTypeEnum.identityGrade && !data.identityGrade) {
            ctx.addIssue({
                path: ["identityGrade"],
                code: z.ZodIssueCode.custom,
                message: 'سطح هویت معتبر نیست'
            });
        }
    });


const assignTypeItems = [
    {
        key: assignTypeEnum.identity,
        label: "هویت",
    },
    {
        key: assignTypeEnum.identityCategory,
        label: "دسته هویت",
    },
    {
        key: assignTypeEnum.identityGrade,
        label: "سطح هویت",
    },
]

const FormFields: FormFieldFunc<T> = (watch, setValue) => {

    return ([
        {
            name: "assignType",
            type: "radioBox",
            label: "روش تخصیص",
            isRequired: true,
            className: "col-span-full",
            items: assignTypeItems,
            orientation: "horizontal",
        },
        {
            name: "identity",
            type: "select",
            label: "تخصیص به",
            dynamic: {
                route: "admin/identity/sloStyle",
            },
            isRequired: true,
            isSearchable: true,
            isHidden: watch("assignType") !== assignTypeEnum.identity,
            className: "col-span-full",
        },
        {
            name: "identityCategory",
            type: "select",
            label: "تخصیص به",
            dynamic: {
                route: "identity/category/sloStyle",
            },
            isRequired: true,
            isSearchable: true,
            isHidden: watch("assignType") !== assignTypeEnum.identityCategory,
            className: "col-span-full",
        },
        {
            name: "identityGrade",
            type: "select",
            label: "تخصیص به",
            dynamic: {
                route: "identity/grade/sloStyle",
            },
            isRequired: true,
            isSearchable: true,
            isHidden: watch("assignType") !== assignTypeEnum.identityGrade,
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
            description: "در صورت تلاقی داشتن دو یا چند مورد از قوانین تخصیص، مواردی که اولویت آن ها بالاتر است، ترجیح داده خواهند شد."
        },
        {
            name: "priceList",
            type: "array",
            description: "دسته های قیمتی را به ترتیب اولویت وارد کنید",
            className: "col-span-full",
            fields: (index) => [
                {
                    name: "priceList",
                    type: "select",
                    label: "لیست قیمتی",
                    dynamic: {
                        route: "priceList/sloStyle",
                    },
                    isRequired: true,
                    isSearchable: true,
                    className: "col-span-full",
                },
            ],
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
        key: "priority",
        title: "اولویت",
        minWidth: 100,
        width: 100,
        allowsSorting: true,
    },
    {
        key: "assignType",
        title: "تخصیص",
        width: 150,
        minWidth: 150,
        render: (value, ctx) => {
            const assignedTo = (() => {
                switch (value) {
                    case assignTypeEnum.identity:
                        if (ctx.identity?.identityType === identityTypesEnum.real) {
                            return `${ctx.identity?.firstName} ${ctx.identity?.lastName}`
                        }
                        return `${ctx.identity?.legalName}`
                    case assignTypeEnum.identityCategory:
                        return `${ctx.identityCategory?.title}`
                    case assignTypeEnum.identityGrade:
                        return `${ctx.identityGrade?.title}`
                    default:
                        return '-'
                }
            })()
            return (
                <div className="flex gap-2 items-center truncate">
                    <span>{assignTypeItems.find((v) => (v.key === value))?.label}</span>
                    <Chip>{assignedTo}</Chip>
                </div>
            )
        },
    },
    {
        key: "priceList",
        title: "دسته های قیمتی",
        minWidth: 150,
        render: (value: { priceList: PriceList }[], ctx) => {
            return (
                <div className="flex flex-row gap-2 items-center">
                    {value?.map((v, idx) => {
                        return (
                            <Chip key={idx} size="sm" variant="flat" color="secondary">
                                {v.priceList.title}
                            </Chip>
                        )
                    })}
                </div>
            )
        },
    },
]


export const priceListAssignContext = {
    apiRoute: "admin/priceListAssign",
    form: {
        title: "قانون تخصیص دسته های قیمتی",
        schema: formSchema,
        fields: FormFields,
        initial: formInitial,
    },
    table: {
        columns: tableColumns,
    },
}