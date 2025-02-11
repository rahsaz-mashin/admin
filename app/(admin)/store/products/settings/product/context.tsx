/* eslint-disable @typescript-eslint/no-unused-vars */


import {z} from "zod";
import {FormFieldFunc} from "@/stories/General/FormFieldsGenerator";
import {ContextObjectType} from "@/stories/FormListContext";
import {ProductSettings} from "@/interfaces/ProductSettings.interface";



export type T = ProductSettings


const formInitial: T = {
    taxPercent: 6,
    chargesPercent: 4,
}


const formSchema = z.object({
    taxPercent: z.string({message: "درصد مالیات را وارد کنید"})
        .regex(/^\d{1,2}(\.\d{1,2})?$/, {message: "درصد مالیات معتبر نیست"})
        .transform(Number)
        .or(z.number({message: "درصد مالیات معتبر نیست"}).positive({message: "درصد مالیات معتبر نیست"})),
    chargesPercent: z.string({message: "درصد عوارض را وارد کنید"})
        .regex(/^\d{1,2}(\.\d{1,2})?$/, {message: "درصد عوارض معتبر نیست"})
        .transform(Number)
        .or(z.number({message: "درصد عوارض معتبر نیست"}).positive({message: "درصد عوارض معتبر نیست"})),
});


const formFields: FormFieldFunc<T> = (watch, setValue) => {

    return ([
        {
            name: "taxPercent",
            type: "input",
            label: "درصد مالیات",
            isNumeric: true,
            isRequired: true,
            // pattern: "%##.##",
            className: "col-span-full xl:col-span-1",
        },
        {
            name: "chargesPercent",
            type: "input",
            label: "درصد عوارض",
            isNumeric: true,
            isRequired: true,
            className: "col-span-full xl:col-span-1",
        },
    ])
}




const context: ContextObjectType<T> = {
    mode: "form",
    apiRoute: "product/settings",

    formTitle: "تنظیمات کالا",
    formSchema: formSchema,
    formFields: formFields,
    formInitialValue: formInitial,
    formRender: undefined,
    formUpsert: true,
}
export default context