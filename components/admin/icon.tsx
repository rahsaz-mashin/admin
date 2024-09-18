import {z} from "zod";
import {ColumnType} from "@/stories/RahsazAdmin/TableList";
import {FormFieldFunc} from "@/stories/General/FormFieldsGenerator";
import {Icon} from "@/interfaces/Icon.interface";


type T = Icon


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
        key: "title",
        title: "عنوان",
        width: "500",
        minWidth: "500",
    },
    {
        key: "content",
        title: "محتوا",
        width: "500",
        minWidth: "500",
        render: (value) => {
            return (
                <i
                    className="text-primary h-8 w-8 flex justify-center items-center"
                    dangerouslySetInnerHTML={{__html: value}}
                />
            )
        },
    },
]


export const iconContext = {
    apiRoute: "icon",
    form: {
        title: "آیکون",
        schema: formSchema,
        fields: formFields,
        initial: formInitial,
    },
    table: {
        columns: tableColumns,
    },
}