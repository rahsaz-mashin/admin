import React from "react";
import {z} from "zod";
import {ColumnType} from "@/stories/RahsazAdmin/TableList";
import {FormFieldType} from "@/stories/General/FormFieldsGenerator";
import {Branch} from "@/interfaces/Branch.interface";




type T = Branch


const formInitial: T = {
    id: undefined,
    title: "",
    key: "",
    description: "",
    phone: "",
}



const formSchema = z.object({
    key: z.string({message: "کلید را وارد کنید"}).min(3, "کلید معتبر نیست"),
    title: z.string({message: "نام را وارد کنید"}).min(3, "نام معتبر نیست"),
    phone: z.string({message: "شماره را وارد کنید"}).regex(/0[0-9]{2} [0-9]{4} [0-9]{4}/, "شماره وارد شده معتبر نیست"),
    description: z.string({message: "توضیحات را وارد کنید"}).min(20, "توضیحات حداقل باید 20 کاراکتر باشد"),
});


const formFields: FormFieldType[] = [
    {
        name: "title",
        type: "input",
        label: "عنوان",
        isRequired: true,
    },
    {
        name: "key",
        type: "input",
        label: "کلید",
        isRequired: true,
        isLtr: true,
    },
    {
        name: "phone",
        type: "input",
        label: "شماره",
        isRequired: true,
        isNumeric: true,
        pattern: "### #### ####",
    },
    {
        name: "description",
        type: "input",
        label: "توضیحات",
        isRequired: true,
        isMultiline: true,
    },
]


const tableColumns: ColumnType<T>[] = [
    {
        key: "actions",
        title: "ابزارها",
        align: "center",
        width: "500",
        minWidth: "500",
        toolsCell: {
            editable: true,
            removable: true,
        },
    },
    {
        key: "id",
        title: "شناسه",
        width: 100,
    },
    {
        key: "key",
        title: "کلید",
        width: "500",
        minWidth: "500",
    },
    {
        key: "title",
        title: "عنوان",
        width: "500",
        minWidth: "500",
    },
    {
        key: "phone",
        title: "شماره",
        width: "500",
        minWidth: "500",
        render: (value, ctx, id) => {
            return <div dir="ltr">{ctx.phone}</div>
        }
    },
    {
        key: "description",
        title: "توضیحات",
        width: "500",
        minWidth: "500",
    },
]






export const branchContext = {
    apiRoute: "branch",
    form: {
        title: "شعبه",
        schema: formSchema,
        fields: formFields,
        initial: formInitial,
    },
    table: {
        columns: tableColumns,
    }
}