import React from "react";
import {z} from "zod";
import {ColumnType} from "@/stories/RahsazAdmin/TableList";
import {FormFieldFunc} from "@/stories/General/FormFieldsGenerator";
import {deliveryCostMethodsEnum, OrderDeliveryMethod} from "@/interfaces/OrderDeliveryMethod.interface";
import {Chip} from "@nextui-org/react";


type T = OrderDeliveryMethod


const formInitial: T = {
    id: undefined,
    title: "",
    description: "",
    icon: undefined,
    costMethod: deliveryCostMethodsEnum.free,
    cost: 0,
    acceptAddress: true,
    isActive: true,
}


const formSchema = z.object({
    title: z.string({message: "نام را وارد کنید"}).min(3, "نام معتبر نیست"),
    icon: z.string({message: "آیکون معتبر نیست"}).regex(/^\d+$/, "آیکون معتبر نیست")
        .or(z.number({message: "آیکون معتبر نیست"}).int({message: "آیکون معتبر نیست"}).positive({message: "آیکون معتبر نیست"}))
        .transform((id) => ({id: +id}))
        .nullable()
        .optional()
        .transform(value => value ? value : null),
    costMethod: z.nativeEnum(deliveryCostMethodsEnum, {message: "روش هزینه ارسال نامعتبر است"}),
    cost: z.string({message: "هزینه ارسال را وارد کنید"})
        .regex(/^\d+(,\d{3})*(\.\d{1,2})?$/g, {message: "هزینه ارسال معتبر نیست"})
        .transform((val) => (+(val.replaceAll(",", ""))))
        .or(z.number({message: "هزینه ارسال معتبر نیست"}).nonnegative({message: "هزینه ارسال معتبر نیست"}))
        .nullable()
        .optional(),
    description: z.string({message: "توضیحات را وارد کنید"}).min(20, "توضیحات حداقل باید 20 کاراکتر باشد").or(z.string().length(0)),
    acceptAddress: z.boolean({message: "نیاز به ثبت آدرس را مشخص کنید"}),
    isActive: z.boolean({message: "وضعیت را مشخص کنید"}),

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
            name: "icon",
            type: "iconLibrary",
            label: "آیکون",
            isRequired: false,
            className: "col-span-full",
        },
        {
            name: "costMethod",
            type: "select",
            label: "روش هزینه ارسال",
            isRequired: true,
            dynamic: {
                route: "order/deliveryMethod/costMethodSloStyle",
            },
            isSearchable: true,
            className: "col-span-full xl:col-span-1",
            dependency: (value, name) => {
                setValue("cost", 0, {shouldValidate: true})
            }
        },
        {
            name: "cost",
            type: "input",
            label: "هزینه",
            isNumeric: true,
            className: "col-span-full xl:col-span-1",
            isDisabled: (watch("costMethod") !== deliveryCostMethodsEnum.fixedCost)
        },
        {
            name: "description",
            type: "input",
            label: "توضیحات",
            isRequired: true,
            isMultiline: true,
            className: "col-span-full",
        },
        {
            name: "acceptAddress",
            type: "switch",
            label: "نیاز به ثبت آدرس",
            className: "col-span-full",
        },
        {
            name: "isActive",
            type: "switch",
            label: "فعال",
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
            chooseDefault: true,
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
    {
        key: "costMethod",
        title: "هزینه ارسال",
        width: 120,
        minWidth: 120,
        render: (value, ctx, id) => {
            return (
                <div className="flex gap-2 items-center">
                    <span>{value}</span>
                    {ctx.cost ? (<span> - {ctx.cost}</span>) : null}
                </div>
            )
        }
    },
    {
        key: "acceptAddress",
        title: "نیاز به ثبت آدرس",
        minWidth: 150,
        render: (value, ctx, id) => {
            return (
                <div className="flex flex-row items-center justify-center gap-2 truncate">
                    {value && (
                        <Chip
                            size="md"
                            color="success"
                            variant="shadow"
                            className="text-white"
                        >
                            دارد
                        </Chip>
                    )}
                    {!value && (
                        <Chip
                            size="md"
                            color="danger"
                            variant="shadow"
                            className="text-white"
                        >
                            ندارد
                        </Chip>
                    )}
                </div>
            )
        }
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


export const deliveryMethodContext = {
    apiRoute: "order/deliveryMethod",
    form: {
        title: "روش دریافت",
        schema: formSchema,
        fields: formFields,
        initial: formInitial,
    },
    table: {
        columns: tableColumns,
    },
}