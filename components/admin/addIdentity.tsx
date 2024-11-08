import React from "react";
import {z} from "zod";
import {FormRender, FormRenderFunc} from "@/stories/RahsazAdmin/FormHandler";
import {FormFieldFunc} from "@/stories/General/FormFieldsGenerator";
import {Button, Card, CardBody} from "@nextui-org/react";
import moment from "jalali-moment";
import {CardHeader} from "@nextui-org/card";
import {OutlinedBasketIcon, OutlinedDocumentIcon, OutlinedRulerPenIcon, OutlinedWalletIcon} from "@/stories/Icons";
import {gendersEnum, Identity, identityTypesEnum} from "@/interfaces/Identity.interface";
import {axiosCoreWithAuth} from "@/lib/axios";


type T = Identity


const GeneralBox: FormRender<T>['render'] = ({children, formState, watch, isEditing}) => {
    return (
        <Card
            className="area-[general]"
            classNames={{body: "items-start text-start"}}
            isDisabled={formState?.isLoading || formState?.isValidating || formState?.isSubmitting || formState?.disabled}
        >
            <CardHeader className="justify-between items-center">
                <h3 className="font-bold">
                    اطلاعات کلی
                </h3>
            </CardHeader>
            <CardBody className="gap-2 flex-col items-center">
                {children}
            </CardBody>
        </Card>
    )
}


const AdditionalBox: FormRender<T>['render'] = ({children, formState, watch, isEditing}) => {
    return (
        <Card
            className="area-[identity] max-h-[600px]"
            classNames={{body: "items-start text-start"}}
            isDisabled={formState?.isLoading || formState?.isValidating || formState?.isSubmitting || formState?.disabled}
        >
            <CardHeader className="justify-between items-center">
                <h3 className="font-bold">
                    اطلاعات تکمیلی
                </h3>
            </CardHeader>
            <CardBody className="gap-2 flex-col items-center">
                {children}
            </CardBody>
        </Card>
    )
}


const CategoriesBox: FormRender<T>['render'] = ({children, formState, watch, isEditing}) => {
    return (
        <Card
            className="area-[categories]"
            classNames={{body: "items-start text-start"}}
            isDisabled={formState?.isLoading || formState?.isValidating || formState?.isSubmitting || formState?.disabled}
        >
            <CardHeader className="font-bold">دسته بندی</CardHeader>
            <CardBody className="gap-5">
                {children}
            </CardBody>
        </Card>
    )
}


const GradeBox: FormRender<T>['render'] = ({children, formState, watch, isEditing}) => {
    return (
        <Card
            className="area-[grade]"
            classNames={{body: "items-start text-start"}}
            isDisabled={formState?.isLoading || formState?.isValidating || formState?.isSubmitting || formState?.disabled}
        >
            <CardHeader className="font-bold">سطح بندی</CardHeader>
            <CardBody className="gap-5">
                {children}
            </CardBody>
        </Card>
    )
}


const SubmitBox: FormRender<T>['render'] = ({children, formState, watch, isEditing, cancel, submit}) => {
    return (
        <Card
            className="area-[submit]"
            shadow="lg"
            classNames={{body: "items-start text-start"}}
            isDisabled={formState?.isLoading || formState?.isValidating || formState?.isSubmitting || formState?.disabled}
        >
            <CardBody className="gap-5 justify-between">
                <div className="flex flex-col gap-1 text-sm">
                    {watch("createdAt") && (
                        <div className="flex flex-row gap-1 items-center">
                            <b>زمان ایجاد:</b>
                            <span dir="ltr">
                                {moment(watch("createdAt")?.toString()).format("jYYYY/jM/jDD HH:mm:ss") || "-"}
                            </span>
                        </div>
                    )}
                    {watch("updatedAt") && (
                        <div className="flex flex-row gap-1 items-center">
                            <b>آخرین ویرایش:</b>
                            <span dir="ltr">
                                {moment(watch("updatedAt")?.toString()).format("jYYYY/jM/jDD HH:mm:ss") || "-"}
                            </span>
                        </div>
                    )}
                </div>
                <div className="flex flex-col gap-3 w-full">
                    {isEditing && (
                        <Button
                            type="button"
                            variant="flat"
                            color="default"
                            size="md"
                            fullWidth
                            onPress={() => cancel("list")}
                            isDisabled={formState?.isLoading || formState?.isValidating || formState?.isSubmitting || formState?.disabled}
                        >
                            انصراف
                        </Button>
                    )}
                    <Button
                        type="button"
                        variant="shadow"
                        color="primary"
                        size="md"
                        fullWidth
                        onPress={() => submit(false, "list", "edit")}
                        isLoading={formState?.isValidating || formState?.isSubmitting}
                        isDisabled={formState?.isLoading || formState?.isValidating || formState?.isSubmitting || formState?.disabled}
                    >
                        {isEditing ? "ویرایش و برگشت به لیست" : "ثبت و برگشت به لیست"}
                    </Button>
                    <Button
                        type="button"
                        variant="shadow"
                        color="primary"
                        size="md"
                        fullWidth
                        onPress={() => submit(true, "list", "edit")}
                        isLoading={formState?.isValidating || formState?.isSubmitting}
                        isDisabled={formState?.isLoading || formState?.isValidating || formState?.isSubmitting || formState?.disabled}
                    >
                        {isEditing ? "ویرایش و باقی ماندن" : "ثبت و باقی ماندن"}
                    </Button>
                </div>
            </CardBody>
        </Card>
    )
}


const formInitial: T = {
    id: undefined,
    isVerified: false,

    phones: [],
    emails: [],
    addresses: [],

    categories: [],
    grade: null,

    identityType: identityTypesEnum.real,
    introductionMethod: null,

    color: null,

    identityDocuments: [],
    description: null,

    firstName: null,
    lastName: null,
    birthday: null,
    gender: undefined,

    legalName: null,
    tradeMark: null,
    registrationNumber: null,


    nationalCode: null,
    website: null,
    economicCode: null,
}


const formSchema = z.object({

    identityType: z.nativeEnum(identityTypesEnum, {message: "نوع شخصیت نامعتبر است"}),

    firstName: z.string({message: "نام خود را وارد کنید"}).min(3, "نام معتبر نیست").nullable().optional().or(z.string().length(0)),
    lastName: z.string({message: "نام خانوادگی خود را وارد کنید"}).min(3, "نام خانوادگی معتبر نیست").nullable().optional().or(z.string().length(0)),
    birthday: z.date({message: "تاریخ تولد معتبر نیست"}).nullable().optional(),
    gender: z.nativeEnum(gendersEnum, {message: "جنسیت نامعتبر است"}).nullable().optional(),

    // nationalCode: z.string({message: "کد ملی را وارد کنید"}).regex(/^\d{10}$/, "کد ملی معتبر نیست").optional(),

    legalName: z.string({message: "نام شرکت را وارد کنید"}).min(3, "نام شرکت معتبر نیست").nullable().optional().or(z.string().length(0)),
    tradeMark: z.string({message: "عنوان تجاری شرکت را وارد کنید"}).min(3, "عنوان تجاری معتبر نیست").nullable().optional().or(z.string().length(0)),
    registrationNumber: z.string({message: "شماره ثبت شرکت را وارد کنید"}).regex(/^\d{3,6}\s{0,3}$/, "شماره ثبت شرکت معتبر نیست").nullable().optional().or(z.string().length(0)),


    nationalCode: z.string({message: "شماره ملی را وارد کنید"}).regex(/^\d{10}(?=\s)|^\d{11}$/, "شماره ملی معتبر نیست").trim().nullable().optional().or(z.string().length(0)),
    isVerified: z.boolean({message: "احرار شده را مشخص کنید"}).nullable().optional(),

    // additional data
    website: z.string().url("آدرس وارد شده معتبر نیست").nullable().optional().or(z.string().length(0)),
    economicCode: z.string().regex(/^\d{12}$/, "کد اقتصادی معتبر نیست").nullable().optional().or(z.string().length(0)),
    introductionMethod: z.string({message: "نحوه آشنایی معتبر نیست"}).regex(/^\d+$/, "نحوه آشنایی معتبر نیست")
        .or(z.number({message: "نحوه آشنایی معتبر نیست"}).int({message: "نحوه آشنایی معتبر نیست"}).positive({message: "نحوه آشنایی معتبر نیست"}))
        .transform((id) => ({id: +id}))
        .nullable()
        .optional(),
    color: z.string().regex(/^#(([0-9a-fA-F]{2}){3}|([0-9a-fA-F]){3})$/, "کد رنگ به فرمت HEX وارد شود").nullable().optional().or(z.string().length(0)),

    // phones
    phones: z.array(
        z.object({
                type: z.union([
                    z.string({message: "نوع شماره را انتخاب کنید"})
                        .regex(/^\d+$/, "نوع شماره معتبر نیست")
                        .transform((val) => ({id: +val})),
                    z.number({message: "نوع شماره را انتخاب کنید"})
                        .int("نوع شماره معتبر نیست")
                        .positive("نوع شماره معتبر نیست")
                        .transform((val) => ({id: val})),
                ]),
                value: z.string({message: "شماره را وارد کنید"}).regex(/\+98 [1-9]{1}[0-9]{1} [0-9]{4} [0-9]{4}|\+98[0-9]{10}/, "شماره وارد شده معتبر نیست")
                    .transform((v) => (v.replaceAll(" ", ""))),
                internal: z.string().regex(/^\d{1,3}$/, "داخلی معتبر نیست").nullable().optional().or(z.string().length(0)),
                description: z.string({message: "توضیحات را وارد کنید"}).min(10, "توضیحات حداقل باید 10 کاراکتر باشد").nullable().optional().or(z.string().length(0)),
            },
            {message: "شماره معتبر نیست"}
        ),
        {message: "شماره معتبر نیست"}
    ).refine(
        (ctx) => {
            const cat = ctx.map(p => p.value);
            const unique = new Set(cat);
            return cat.length === unique.size;
        },
        "شماره ها نباید تکراری باشند"
    ),

    // emails
    emails: z.array(
        z.object({
                type: z.union([
                    z.string({message: "نوع ایمیل را انتخاب کنید"})
                        .regex(/^\d+$/, "نوع ایمیل معتبر نیست")
                        .transform((val) => ({id: +val})),
                    z.number({message: "نوع ایمیل را انتخاب کنید"})
                        .int("نوع ایمیل معتبر نیست")
                        .positive("نوع ایمیل معتبر نیست")
                        .transform((val) => ({id: val})),
                ]),
                value: z.string().email("ایمیل وارد شده معتبر نیست"),
                description: z.string({message: "توضیحات را وارد کنید"}).min(10, "توضیحات حداقل باید 10 کاراکتر باشد").nullable().optional().or(z.string().length(0)),
            },
            {message: "ایمیل معتبر نیست"}
        ),
        {message: "ایمیل معتبر نیست"}
    ).refine(
        (ctx) => {
            const cat = ctx.map(p => p.value);
            const unique = new Set(cat);
            return cat.length === unique.size;
        },
        "شماره ها نباید تکراری باشند"
    ),

    // addresses
    addresses: z.array(
        z.object({
                type: z.union([
                    z.string({message: "نوع آدرس را انتخاب کنید"})
                        .regex(/^\d+$/, "نوع آدرس معتبر نیست")
                        .transform((val) => ({id: +val})),
                    z.number({message: "نوع آدرس را انتخاب کنید"})
                        .int("نوع آدرس معتبر نیست")
                        .positive("نوع آدرس معتبر نیست")
                        .transform((val) => ({id: val})),
                ]),
                location: z.string({message: "موقعیت مکانی را انتخاب کنید"}).regex(/^(-?\d+(\.\d+)?),\s*(-?\d+(\.\d+)?)$/, {message: "موقعیت مکانی نامعتبر می باشد"}),
                country: z.union([
                    z.string({message: "کشور را انتخاب کنید"})
                        .regex(/^\d+$/, "کشور معتبر نیست")
                        .transform((val) => ({id: +val})),
                    z.number({message: "کشور را انتخاب کنید"})
                        .int("کشور معتبر نیست")
                        .positive("کشور معتبر نیست")
                        .transform((val) => ({id: val})),
                ]),
                province: z.union([
                    z.string({message: "استان را انتخاب کنید"})
                        .regex(/^\d+$/, "استان معتبر نیست")
                        .transform((val) => ({id: +val})),
                    z.number({message: "استان را انتخاب کنید"})
                        .int("استان معتبر نیست")
                        .positive("استان معتبر نیست")
                        .transform((val) => ({id: val})),
                ]),
                city: z.union([
                    z.string({message: "شهر را انتخاب کنید"})
                        .regex(/^\d+$/, "شهر معتبر نیست")
                        .transform((val) => ({id: +val})),
                    z.number({message: "شهر را انتخاب کنید"})
                        .int("شهر معتبر نیست")
                        .positive("شهر معتبر نیست")
                        .transform((val) => ({id: val})),
                ]),
                address: z.string({message: "آدرس را وارد کنید"}).min(5, "آدرس معتبر نیست"),
                zipCode: z.string({message: "کد پستی را وارد کنید"}).regex(/[0-9]{10}/, "کد پستی وارد شده معتبر نیست").nullable().optional().or(z.string().length(0)),
                postBox: z.string({message: "صندوق پستی را وارد کنید"}).regex(/[0-9]{10}/, "صندوق پستی وارد شده معتبر نیست").nullable().optional().or(z.string().length(0)),
                description: z.string({message: "توضیحات را وارد کنید"}).min(10, "توضیحات حداقل باید 10 کاراکتر باشد").nullable().optional().or(z.string().length(0)),
            },
            {message: "آدرس معتبر نیست"}
        ),
        {message: "آدرس معتبر نیست"}
    ),

    categories: z.union(
        [
            z.string({message: "دسته بندی معتبر نیست"})
                .regex(/^(\d+(,\d+)*)$/, {message: "دسته بندی معتبر نیست"})
                .transform((ids) => ids?.toString().split(",")),
            z.number({message: "دسته بندی معتبر نیست"})
                .int({message: "دسته بندی معتبر نیست"})
                .positive({message: "دسته بندی معتبر نیست"})
                .array()
        ]
    )
        .transform((ids) => ids?.map((id) => ({id: +id})) || [])
        .nullable()
        .optional(),


    grade: z.union([
        z.string({message: "سطح را انتخاب کنید"})
            .regex(/^\d+$/, "سطح معتبر نیست")
            .transform((val) => ({id: +val})),
        z.number({message: "سطح را انتخاب کنید"})
            .int("سطح معتبر نیست")
            .positive("سطح معتبر نیست")
            .transform((val) => ({id: val})),
    ])
        .nullable()
        .optional(),
})
    .superRefine((data, ctx) => {
        console.log(data)
        if (data.identityType === identityTypesEnum.real) {
            if (!data.firstName) {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom, path: ['firstName'],
                    message: 'نام را وارد کنید',
                })
            }
            if (!data.lastName) {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom, path: ['lastName'],
                    message: 'نام خانوادگی را وارد کنید',
                })
            }
        }
        if (data.identityType === identityTypesEnum.legal) {
            if (!data.legalName) {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom, path: ['legalName'],
                    message: 'نام شرکت را وارد کنید',
                })
            }
            if (!data.tradeMark) {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom, path: ['tradeMark'],
                    message: 'نام تجاری شرکت را وارد کنید',
                })
            }
        }
    });


const formRender: FormRenderFunc<T> = (watch, setValue) => {
    return [
        {
            render: GeneralBox,
            sections: [
                {
                    key: identityTypesEnum.real,
                    title: (
                        <div className="flex items-center gap-2">
                            <span>شخص حقیقی</span>
                        </div>
                    ),
                    fields: ["isVerified", "firstName", "lastName", "gender", "birthday", "nationalCode"],
                },
                {
                    key: identityTypesEnum.legal,
                    title: (
                        <div className="flex items-center gap-2">
                            <span>شخص حقوقی</span>
                        </div>
                    ),
                    fields: ["isVerified", "legalName", "tradeMark", "registrationNumber", "nationalCode"],
                },
            ],
            selectedSection: watch("identityType"),
            onSectionChange: (section: string) => {
                setValue("identityType", section)
                if (section === identityTypesEnum.real) {
                    setValue("legalName", "")
                    setValue("tradeMark", "")
                    setValue("registrationNumber", "")
                    setValue("nationalCode", "")
                    setValue("isVerified", false)
                } else {
                    setValue("firstName", "")
                    setValue("lastName", "")
                    setValue("birthday", null)
                    setValue("gender", null)
                    setValue("nationalCode", "")
                    setValue("isVerified", false)
                }
            }
        },
        {
            render: AdditionalBox,
            sections: [
                {
                    key: "additional",
                    title: (
                        <div className="flex items-center gap-2">
                            <OutlinedDocumentIcon size={20}/>
                            <span>اطلاعات تکمیلی</span>
                        </div>
                    ),
                    fields: ["website", "economicCode", "introductionMethod", "color", "description"],
                },
                {
                    key: "phones",
                    title: (
                        <div className="flex items-center gap-2">
                            <OutlinedRulerPenIcon size={20}/>
                            <span>شماره</span>
                        </div>
                    ),
                    fields: ["phones"],
                },
                {
                    key: "emails",
                    title: (
                        <div className="flex items-center gap-2">
                            <OutlinedWalletIcon size={20}/>
                            <span>ایمیل</span>
                        </div>
                    ),
                    fields: ["emails"],
                },
                {
                    key: "addresses",
                    title: (
                        <div className="flex items-center gap-2">
                            <OutlinedBasketIcon size={20}/>
                            <span>آدرس</span>
                        </div>
                    ),
                    fields: ["addresses"],
                },
                {
                    key: "documents",
                    title: (
                        <div className="flex items-center gap-2">
                            <OutlinedBasketIcon size={20}/>
                            <span>مدارک هویتی</span>
                        </div>
                    ),
                    fields: [],
                },
            ],
        },
        {
            render: CategoriesBox,
            fields: ["categories"]
        },
        {
            render: GradeBox,
            fields: ["grade"]
        },
        {
            render: SubmitBox,
            fields: []
        },
    ]
}


const formFields: FormFieldFunc<T> = (watch, setValue) => {


    return ([
        {
            name: "firstName",
            type: "input",
            label: "نام",
            className: "col-span-full xl:col-span-1",
            isRequired: true,
        },
        {
            name: "lastName",
            type: "input",
            label: "نام خانوادگی",
            className: "col-span-full xl:col-span-1",
            isRequired: true,
        },
        {
            name: "gender",
            type: "select",
            label: "جنسیت",
            className: "col-span-full xl:col-span-1",
            items: [
                {
                    key: gendersEnum.male,
                    label: "مرد",
                },
                {
                    key: gendersEnum.female,
                    label: "زن",
                },
                {
                    key: gendersEnum.others,
                    label: "سایر",
                },
                {
                    key: gendersEnum.unspecific,
                    label: "نامشخص",
                },
            ],
        },
        {
            name: "birthday",
            type: "input",
            label: "تاریخ تولد",
            className: "col-span-full xl:col-span-1",
            isDateInput: true,
            withPicker: true,
            granularity: "day"
        },


        {
            name: "legalName",
            type: "input",
            label: "نام شرکت",
            className: "col-span-full xl:col-span-1",
            isRequired: true,
        },
        {
            name: "tradeMark",
            type: "input",
            label: "عنوان تجاری شرکت",
            className: "col-span-full xl:col-span-1",
            isRequired: true,
        },
        {
            name: "registrationNumber",
            type: "input",
            label: "شماره ثبت",
            className: "col-span-full xl:col-span-1",
            isNumeric: true,
            pattern: "######",
        },
        {
            name: "nationalCode",
            type: "input",
            label: "کد ملی",
            className: "col-span-full xl:col-span-1",
            isNumeric: true,
            pattern: "###########",
        },
        {
            name: "isVerified",
            type: "switch",
            label: "احراز شده",
            className: "col-span-full",
        },


        {
            name: "website",
            type: "input",
            label: "وبسایت",
            className: "col-span-full xl:col-span-1",
            isLtr: true,
        },
        {
            name: "economicCode",
            type: "input",
            label: "کد اقتصادی",
            className: "col-span-full xl:col-span-1",
            isNumeric: true,
            pattern: "############",
        },
        {
            name: "categories",
            type: "select",
            label: "دسته بندی",
            dynamic: {
                route: "identity/category/sloStyle",
            },
            isMultiple: true,
            isRequired: true,
            className: "col-span-full xl:col-span-1",
        },
        {
            name: "grade",
            type: "select",
            label: "سطح بندی",
            dynamic: {
                route: "identity/grade/sloStyle",
            },
            isRequired: true,
            className: "col-span-full xl:col-span-1",
        },
        {
            name: "introductionMethod",
            type: "select",
            label: "نحوه آشنایی",
            dynamic: {
                route: "identity/introductionMethod/sloStyle",
            },
            isRequired: true,
            className: "col-span-full xl:col-span-1",
        },
        {
            name: "color",
            type: "input",
            label: "رنگ",
            className: "col-span-full xl:col-span-1",
            isLtr: true,
        },
        {
            name: "phones",
            type: "array",
            description: "برای افزودن شماره، دکمه افزودن را کلیک کنید",
            className: "col-span-full",
            fields: (index) => [
                // {
                //     name: "isDefault",
                //     type: "switch",
                //     label: "پیشفرض",
                //     className: "col-span-full xl:col-span-1",
                // },
                {
                    name: "type",
                    type: "select",
                    label: "نوع",
                    dynamic: {
                        route: "identity/phoneType/sloStyle",
                    },
                    isRequired: true,
                    className: "col-span-full",
                },
                {
                    name: "value",
                    type: "input",
                    label: "شماره",
                    isRequired: true,
                    isNumeric: true,
                    pattern: "+## ## #### ####",
                    description: "به این صورت وارد شود: 9851133445566+",
                    allowEmptyFormatting: true,
                    className: "col-span-full xl:col-span-1",
                },
                {
                    name: "internal",
                    type: "input",
                    label: "داخلی",
                    isNumeric: true,
                    allowEmptyFormatting: true,
                    description: "داخلی در صورت وجود",
                    className: "col-span-full xl:col-span-1",
                },
                {
                    name: "zsdfdfz",
                    type: "input",
                    label: "توضیحات",
                    isMultiline: true,
                    className: "col-span-full xl:col-span-1",
                },
            ],
        },
        {
            name: "emails",
            type: "array",
            description: "برای افزودن ایمیل، دکمه افزودن را کلیک کنید",
            className: "col-span-full",
            fields: (index) => [
                // {
                //     name: "isDefault",
                //     type: "switch",
                //     label: "پیشفرض",
                //     className: "col-span-full xl:col-span-1",
                // },
                {
                    name: "type",
                    type: "select",
                    label: "نوع",
                    dynamic: {
                        route: "identity/emailType/sloStyle",
                    },
                    isRequired: true,
                    className: "col-span-full",
                },
                {
                    name: "value",
                    type: "input",
                    label: "ایمیل",
                    isRequired: true,
                    isLtr: true,
                    className: "col-span-full xl:col-span-1",
                },
                {
                    name: "description",
                    type: "input",
                    label: "توضیحات",
                    isMultiline: true,
                    className: "col-span-full xl:col-span-1",
                },
            ],
        },
        {
            name: "addresses",
            type: "array",
            description: "برای افزودن آدرس، دکمه افزودن را کلیک کنید",
            className: "col-span-full",
            fields: (index) => [
                // {
                //     name: "isDefault",
                //     type: "switch",
                //     label: "پیشفرض",
                //     className: "col-span-full xl:col-span-1",
                // },
                {
                    name: "type",
                    type: "select",
                    label: "نوع",
                    dynamic: {
                        route: "identity/addressType/sloStyle",
                    },
                    isRequired: true,
                    className: "col-span-full",
                },
                {
                    name: "location",
                    type: "location",
                    label: "موقعیت مکانی",
                    className: "col-span-full",
                    dependency: async () => {
                        const axios = axiosCoreWithAuth()
                        let location = watch(`addresses.${index}.location`)
                        if (!location) return
                        // location = typeof location === "string" ? location?.split(",") : Object.values(location)

                        const params = {location}

                        const data: any = await axios.get("neshan/getAddress", {params})
                        setValue(`addresses.${index}.address`, data.address, {shouldValidate: true})
                        setValue(`addresses.${index}.country`, data.countryId || "", {shouldValidate: true})
                        setValue(`addresses.${index}.province`, data.provinceId || "", {shouldValidate: true})
                        setValue(`addresses.${index}.city`, data.cityId || "", {shouldValidate: true})
                    }
                },
                {
                    name: "country",
                    type: "select",
                    label: "کشور",
                    isRequired: true,
                    dynamic: {
                        route: "addressCountry/sloStyle",
                    },
                    className: "col-span-full xl:col-span-1",
                },
                {
                    name: "province",
                    type: "select",
                    label: "استان",
                    isRequired: true,
                    dynamic: {
                        route: "addressProvince/sloStyle",
                        filter: {
                            country: watch(`addresses.${index}.country`),
                        },
                    },
                    className: "col-span-full xl:col-span-1",
                },
                {
                    name: "city",
                    type: "select",
                    label: "شهر",
                    isRequired: true,
                    dynamic: {
                        route: "addressCity/sloStyle",
                        filter: {
                            province: watch(`addresses.${index}.province`),
                        },
                    },
                    className: "col-span-full xl:col-span-1",
                },
                {
                    name: "address",
                    type: "input",
                    label: "آدرس کامل",
                    isRequired: true,
                    className: "col-span-full xl:col-span-1",
                },
                {
                    name: "zipCode",
                    type: "input",
                    label: "کد پستی",
                    isNumeric: true,
                    pattern: "##########",
                    className: "col-span-full xl:col-span-1",
                },
                {
                    name: "postBox",
                    type: "input",
                    label: "صندوق پستی",
                    isNumeric: true,
                    pattern: "##########",
                    className: "col-span-full xl:col-span-1",
                },
                {
                    name: "description",
                    type: "input",
                    label: "توضیحات",
                    isMultiline: true,
                    className: "col-span-full xl:col-span-1",
                },
            ],
        },
    ])
}


export const addIdentityContext = {
    apiRoute: "admin/identity",
    form: {
        title: "هویت",
        schema: formSchema,
        fields: formFields,
        initial: formInitial,
        render: formRender,
        className:
            "grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 grid-rows-auto" + " " +
            "grid-areas-[general,identity,grade,categories,submit]" + " " +
            "lg:grid-areas-[general_general,identity_identity,grade_categories,submit_submit]" + " " +
            "xl:grid-areas-[general_general_submit,identity_identity_grade,identity_identity_categories]"
    },
}
