/* eslint-disable @typescript-eslint/no-unused-vars */


import {z} from "zod";
import {ColumnType} from "@/stories/TableList";
import {FormFieldFunc} from "@/stories/General/FormFieldsGenerator";
import {Icon} from "@/interfaces/Icon.interface";
import {ContextObjectType} from "@/stories/FormListContext";


export type T = Icon


const formInitial: T = {
    id: undefined,
    title: "",
    content: "",
}


const formSchema = z.object({
    title: z.string({message: "نام را وارد کنید"}).min(3, "نام معتبر نیست"),
    content: z.string({message: "محتوا را وارد کنید"}),
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
            name: "content",
            type: "input",
            label: "محتوا",
            isRequired: true,
            isMultiline: true,
            isLtr: true,
            rows: 10,
            description: (
                <p>
                    برای این که رنگ آیکون قابل تغییر و مطابق با کدها باشد، هرگونه ویژگی fill را حذف کرده و فقط در تگ svg
                    ویژگی fill را برابر با currentColor قرار دهید.
                    <br/>
                    جهت تست مطابقت رنگ، رنگ آیکون ها در جدول باید مطابق
                    <b className="text-primary"> رنگ سازمانی </b>
                    باشد.
                    <br/>
                    همچنین حذف ویژگی های width و height باعث می شود آیکون هم سایز و مطابق کدها باشد.
                </p>
            ),
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
    {
        key: "content",
        title: "محتوا",
        align: "center",
        width: 100,
        minWidth: 100,
        render: (value) => {
            return (
                <div className="flex justify-center items-center">
                    <span
                        className="text-primary h-8 w-8 flex justify-center items-center"
                        dangerouslySetInnerHTML={{__html: value}}
                    />
                </div>
            )
        },
    },
]



const context: ContextObjectType<T> = {
    mode: "both",
    apiRoute: "icon",

    formTitle: "آیکون",
    formSchema: formSchema,
    formFields: formFields,
    formInitialValue: formInitial,
    formRender: undefined,
    formUpsert: false,

    tableColumns,
    enableTrashBox: false,
}
export default context