import React from "react";
import {z} from "zod";
import {FormRender} from "@/stories/RahsazAdmin/FormHandler";
import {FormFieldFunc} from "@/stories/General/FormFieldsGenerator";
import {Button, Card, CardBody} from "@nextui-org/react";
import moment from "jalali-moment";
import {CardHeader} from "@nextui-org/card";
import {BoldDuotonePermissionGroupIcon} from "@/stories/RahsazAdmin/Icons";
import {
    OutlinedBasketIcon,
    OutlinedDocumentIcon,
    OutlinedNotebookBookmarkIcon,
    OutlinedRulerPenIcon,
    OutlinedWalletIcon
} from "@/stories/Icons";
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
                {isEditing && (
                    <div className="flex">
                        <Button
                            size="sm"
                            color="danger"
                            radius="full"
                            startContent={<BoldDuotonePermissionGroupIcon/>}
                        >
                            محدودسازی
                        </Button>
                    </div>
                )}
            </CardHeader>
            <CardBody className="gap-3 grid grid-cols-2">
                {children}
            </CardBody>
        </Card>
    )
}


const EmailBox: FormRender<T>['render'] = ({children, formState, watch, isEditing}) => {
    return (
        <Card
            className="area-[email]"
            classNames={{body: "items-start text-start"}}
            isDisabled={formState?.isLoading || formState?.isValidating || formState?.isSubmitting || formState?.disabled}
        >
            <CardHeader className="items-center gap-1">
                <h3 className="font-bold">
                    ایمیل
                </h3>
                <h6 className="font-light text-sm">
                    (جهت لاگین)
                </h6>
            </CardHeader>
            <CardBody className="gap-3 grid grid-cols-2">
                {children}
            </CardBody>
        </Card>
    )
}


const PhoneBox: FormRender<T>['render'] = ({children, formState, watch, isEditing}) => {
    return (
        <Card
            className="area-[phone]"
            classNames={{body: "items-start text-start"}}
            isDisabled={formState?.isLoading || formState?.isValidating || formState?.isSubmitting || formState?.disabled}
        >
            <CardHeader className="items-center gap-1">
                <h3 className="font-bold">
                    موبایل
                </h3>
                <h6 className="font-light text-sm">
                    (جهت لاگین)
                </h6>
            </CardHeader>
            <CardBody className="gap-3 grid grid-cols-2">
                {children}
            </CardBody>
        </Card>
    )
}


const PermissionsBox: FormRender<T>['render'] = ({children, formState, watch, isEditing}) => {
    return (
        <Card
            className="area-[permissions]"
            classNames={{body: "items-start text-start"}}
            isDisabled={formState?.isLoading || formState?.isValidating || formState?.isSubmitting || formState?.disabled}
        >
            <CardHeader className="justify-between items-center">
                <h3 className="font-bold">
                    دسترسی ها
                </h3>
            </CardHeader>
            <CardBody className="gap-3 grid grid-cols-2">
                {children}
            </CardBody>
        </Card>
    )
}


const IdentityBox: FormRender<T>['render'] = ({children, formState, watch, isEditing}) => {
    return (
        <Card
            className="area-[identity] max-h-[600px]"
            classNames={{body: "items-start text-start"}}
            isDisabled={formState?.isLoading || formState?.isValidating || formState?.isSubmitting || formState?.disabled}
        >
            <CardHeader className="justify-between items-center">
                <h3 className="font-bold">
                    هویت
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
    // avatar: z.object({id: z.number()}, {message: "تصویر را وارد کنید"})
    //     .nullable().optional(),
    // phone: z.object({
    //     value: z.string().regex(/\+98 9[0-9]{2} [0-9]{3} [0-9]{4}|\+989\d{2}\d{3}\d{4}/, "شماره وارد شده معتبر نیست")
    //         .transform((val) => val.replaceAll(" ", ""))
    //         .nullable().optional().or(z.string().length(0)),
    //     isConfirmed: z.boolean().nullable().optional(),
    // }).transform((v) => (!v.value ? null : v)),
    // email: z.object({
    //     value: z.string().email("ایمیل وارد شده معتبر نیست").nullable().optional().or(z.string().length(0)),
    //     isConfirmed: z.boolean().nullable().optional(),
    // }).transform((v) => (!v.value ? null : v)),
    // permissions: z.union([
    //     z.string({message: "دسترسی ها معتبر نیست"})
    //         .regex(/^(\d+(,\d+)*)$/, {message: "دسترسی ها معتبر نیست"})
    //         .transform((ids) => ids?.toString().split(",")),
    //     z.number({message: "دسترسی ها معتبر نیست"})
    //         .int({message: "دسترسی ها معتبر نیست"})
    //         .positive({message: "دسترسی ها معتبر نیست"})
    //         .array(),
    // ]).transform((ids) => ids?.map((id) => ({id: +id})) || []),
    // isActive: z.boolean({message: "وضعیت را مشخص کنید"}),
});


const formRender: FormRender<T>[] = [
    {
        render: GeneralBox,
        fields: ["identityType", "isVerified", "firstName", "lastName", "nationalCode", "gender", "legalName", "tradeMark", "registrationNumber", "nationalCode"]
    },
    {
        render: IdentityBox,
        sections: [
            {
                key: "additional",
                title: (
                    <div className="flex items-center gap-2">
                        <OutlinedDocumentIcon size={20}/>
                        <span>اطلاعات تکمیلی</span>
                    </div>
                ),
                fields: ["website", "economicCode", "birthday", "introductionMethod", "color", "description"],
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


const formFields: FormFieldFunc<T> = (watch, setValue) => {


    return ([
        {
            name: "identityType",
            type: "radioBox",
            label: "نوع هویت",
            isRequired: true,
            className: "col-span-full xl:col-span-1",
            orientation: "horizontal",
            items: [
                {
                    label: "حقیقی",
                    key: identityTypesEnum.real,
                },
                {
                    label: "حقوقی",
                    key: identityTypesEnum.legal,
                },
            ]
        },
        {
            name: "isVerified",
            type: "switch",
            label: "احراز شده",
            className: "col-span-full xl:col-span-1",
        },
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
            name: "birthday",
            type: "input",
            label: "تاریخ تولد",
            className: "col-span-full xl:col-span-1",
            isDateInput: true,
            withPicker: true,
            granularity: "day"
        },
        {
            name: "nationalCode",
            type: "input",
            label: "کد ملی",
            className: "col-span-full xl:col-span-1",
            isNumeric: true,
            pattern: "##########",
        },
        {
            name: "gender",
            type: "select",
            label: "جنسیت",
            isRequired: true,
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
            name: "legalName",
            type: "input",
            label: "نام شرکت",
            className: "col-span-full xl:col-span-1",
        },
        {
            name: "tradeMark",
            type: "input",
            label: "عنوان تجاری شرکت",
            className: "col-span-full xl:col-span-1",
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
            label: "شناسه ملی",
            className: "col-span-full xl:col-span-1",
            isNumeric: true,
            pattern: "##########",
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
                    pattern: "+## ### ### ####",
                    description: "به این صورت وارد شود: 989212728307+",
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
                    name: "description",
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

                        const location = watch("location")

                        if (!location) return

                        const params = {location}
                        const data: any = await axios.get("neshan/getAddress", {params})

                        setValue("address", data.address, {shouldValidate: true})
                        setValue("country", data.countryId || "", {shouldValidate: true})
                        setValue("province", data.provinceId || "", {shouldValidate: true})
                        setValue("city", data.cityId || "", {shouldValidate: true})
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
                            country: watch("country"), // watch dependencies
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
                            province: watch("province"),
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
