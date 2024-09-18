import {z} from "zod";
import {ColumnType} from "@/stories/RahsazAdmin/TableList";
import {FormFieldFunc} from "@/stories/General/FormFieldsGenerator";
import {AddressCity} from "@/interfaces/AddressCity.interface";




type T = AddressCity


const formInitial: T = {
    id: undefined,
    title: "",
    icon: null,
    province: undefined,
}



const formSchema = z.object({
    title: z.string({message: "نام را وارد کنید"}).min(3, "نام معتبر نیست"),
});


const formFields: FormFieldFunc<T> = (watch) => {
    return ([
        {
            name: "title",
            type: "input",
            label: "عنوان",
            isRequired: true,
            className: "col-span-full xl:col-span-1",
        },
        // {
        //     name: "location",
        //     type: "location",
        //     label: "موقعیت مکانی",
        //     className: "col-span-full",
        // },
        // {
        //     name: "country",
        //     type: "select",
        //     label: "کشور",
        //     dynamic: {
        //         route: "addressCountry/sloStyle",
        //     },
        //     className: "col-span-full xl:col-span-1",
        // },
        // {
        //     name: "province",
        //     type: "select",
        //     label: "استان",
        //     dynamic: {
        //         route: "addressProvince/sloStyle",
        //         filter: {
        //             country: watch("country"), // watch dependencies
        //         },
        //     },
        //     className: "col-span-full xl:col-span-1",
        // },
        // {
        //     name: "city",
        //     type: "select",
        //     label: "شهر",
        //     dynamic: {
        //         route: "addressCity/sloStyle",
        //         filter: {
        //             province: watch("province"),
        //         },
        //     },
        //     className: "col-span-full xl:col-span-1",
        // },
        // {
        //     name: "address",
        //     type: "input",
        //     label: "آدرس کامل",
        //     className: "col-span-full xl:col-span-1",
        // },
        // {
        //     name: "zipCode",
        //     type: "input",
        //     label: "کد پستی",
        //     isNumeric: true,
        //     pattern: "##########",
        //     className: "col-span-full xl:col-span-1",
        // },
        // {
        //     name: "postBox",
        //     type: "input",
        //     label: "صندوق پستی",
        //     isNumeric: true,
        //     pattern: "##########",
        //     className: "col-span-full xl:col-span-1",
        // },
        // {
        //     name: "description",
        //     type: "input",
        //     label: "توضیحات",
        //     isRequired: true,
        //     isMultiline: true,
        //     className: "col-span-full",
        // },
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
]






export const addressCityContext = {
    apiRoute: "addressCity",
    form: {
        title: "شهر",
        schema: formSchema,
        fields: formFields,
        initial: formInitial,
    },
    table: {
        columns: tableColumns,
    },
}