import {z} from "zod";
import {FormFieldFunc} from "@/stories/General/FormFieldsGenerator";
import {ProductSettings} from "@/interfaces/ProductSettings.interface";


type T = ProductSettings


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


export const productSettingsContext = {
    apiRoute: "product/settings",
    form: {
        title: "تنظیمات کالا",
        schema: formSchema,
        fields: formFields,
        initial: formInitial,
        upsert: true,
        // render: formRender,
    },
}
