import React from "react";
import {z} from "zod";
import {FormRender} from "@/stories/RahsazAdmin/FormHandler";
import {FormFieldFunc} from "@/stories/General/FormFieldsGenerator";
import {CalculatePrice, Product} from "@/interfaces/Product.interface";
import {Card, CardHeader} from "@nextui-org/card";
import {Button, CardBody} from "@nextui-org/react";
import slugify from "slugify-persian";
import {
    OutlinedBasketIcon,
    OutlinedDocumentIcon,
    OutlinedNotebookBookmarkIcon,
    OutlinedRulerPenIcon,
    OutlinedWalletIcon
} from "@/stories/Icons";
import {axiosCoreWithAuth} from "@/lib/axios";
import {NumericFormat} from "react-number-format";
import {Currency} from "@/interfaces/Currency.interface";
import moment from "jalali-moment";


type T = Product


const InfoBox: FormRender<T>['render'] = ({children, formState, watch, isEditing}) => {
    return (
        <Card
            className="area-[info]"
            classNames={{body: "items-start text-start"}}
            isDisabled={formState?.isLoading || formState?.isValidating || formState?.isSubmitting || formState?.disabled}
        >
            <CardBody className="gap-3 grid grid-cols-2">
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
                            <span
                                dir="ltr">{moment(watch("createdAt")?.toString()).format("jYYYY/jM/jDD HH:mm:ss") || "-"}</span>
                        </div>
                    )}
                    {watch("updatedAt") && (
                        <div className="flex flex-row gap-1 items-center">
                            <b>آخرین ویرایش:</b>
                            <span
                                dir="ltr">{moment(watch("updatedAt")?.toString()).format("jYYYY/jM/jDD HH:mm:ss") || "-"}</span>
                        </div>
                    )}
                    {/*<div className="flex flex-row gap-1 items-center">*/}
                    {/*    <b>زمان تایید:</b>*/}
                    {/*    <span dir="ltr">1403/08/23 12:22</span>*/}
                    {/*</div>*/}
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

const CategoriesBox: FormRender<T>['render'] = ({children, formState, watch, isEditing}) => {
    return (
        <Card
            className="area-[categories]"
            classNames={{body: "items-start text-start"}}
            isDisabled={formState?.isLoading || formState?.isValidating || formState?.isSubmitting || formState?.disabled}
        >
            <CardHeader className="font-bold">دسته بندی موضوعی</CardHeader>
            <CardBody className="gap-5">
                {children}
            </CardBody>
        </Card>
    )
}

const MachineryBox: FormRender<T>['render'] = ({children, formState, watch, isEditing}) => {
    return (
        <Card
            className="area-[machinery]"
            classNames={{body: "items-start text-start"}}
            isDisabled={formState?.isLoading || formState?.isValidating || formState?.isSubmitting || formState?.disabled}
        >
            <CardHeader className="font-bold">ماشین آلات</CardHeader>
            <CardBody className="gap-5">
                {children}
            </CardBody>
        </Card>
    )
}

const PicturesBox: FormRender<T>['render'] = ({children, formState, watch, isEditing}) => {
    return (
        <Card
            className="area-[pictures]"
            classNames={{body: "items-start text-start"}}
            isDisabled={formState?.isLoading || formState?.isValidating || formState?.isSubmitting || formState?.disabled}
        >
            <CardHeader className="font-bold">گالری تصاویر</CardHeader>
            <CardBody className="gap-5">
                {children}
            </CardBody>
        </Card>
    )
}

const ThumbnailBox: FormRender<T>['render'] = ({children, formState, watch, isEditing}) => {
    return (
        <Card
            className="area-[thumbnail]"
            classNames={{body: "items-start text-start"}}
            isDisabled={formState?.isLoading || formState?.isValidating || formState?.isSubmitting || formState?.disabled}
        >
            <CardHeader className="font-bold">تصویر کالا</CardHeader>
            <CardBody className="gap-5">
                {children}
            </CardBody>
        </Card>
    )
}

const DetailBox: FormRender<T>['render'] = ({children, formState, watch, isEditing}) => {

    return (
        <Card
            className="area-[detail] max-h-[600px]"
            classNames={{body: "items-start text-start"}}
            isDisabled={formState?.isLoading || formState?.isValidating || formState?.isSubmitting || formState?.disabled}
        >
            <CardBody className="gap-2 flex-col items-center">
                {children}
            </CardBody>
        </Card>
    )
}


const formInitial: T = {
    id: undefined,
    title: "",
    slug: "",
    names: [],
    tags: [],
    categories: [],
    machinery: [],

    intro: "",
    features: [],
    technical: [],

    hasSameAmount: true,
    amount: 0,

    price: [],
    inventory: [],

    isActiveInventoryManagement: false,
    minimumInventoryWarn: 0,

    pictures: [],
    thumbnail: null,
}


const formSchema = z.object({
    title: z.string({message: "نام را وارد کنید"}).min(3, "نام معتبر نیست"),
    slug: z.string({message: "شناسه اینترنتی را وارد کنید"})
        .regex(/^[a-zA-Z0-9\u0600-\u06FF\u0660-\u0669\-]+$/, "فقط حروف و اعداد فارسی و انگلیسی و علامت - مجاز می باشد")
        .min(3, "شناسه اینترنتی معتبر نیست"),
    names: z.string({message: "نام ها را وارد کنید"})
        .array(),
    tags: z.string({message: "برچسب ها را وارد کنید"})
        .regex(/^[a-zA-Z0-9\u0600-\u06FF\u0660-\u0669\s\-]+$/, "فقط حروف و اعداد فارسی و انگلیسی و علامت - و فاصله مجاز می باشد")
        .array().max(10, {message: "حداکثر 10 برچسب وارد کنید"}),


    intro: z.string({message: "معرفی کالا را وارد کنید"}).optional().nullable(),
    technical: z.object({
        id: z.number().positive().optional(),
        title: z.string({message: "عنوان مشخصه را وارد کنید"}).min(3, "عنوان مشخصه معتبر نیست"),
        value: z.string({message: "مقدار مشخصه را وارد کنید"}).min(3, "مقدار مشخصه معتبر نیست"),
    }, {message: "مشخصات فنی معتبر نیست"}).array(),


    features: z.array(
        z.object({
                id: z.number().positive().optional(),
                category: z.union([
                    z.string({message: "نوع ویژگی را انتخاب کنید"})
                        .regex(/^\d+$/, "نوع ویژگی معتبر نیست")
                        .transform((val) => ({id: +val})),
                    z.number({message: "نوع ویژگی را انتخاب کنید"})
                        .int("نوع ویژگی معتبر نیست")
                        .positive("نوع ویژگی معتبر نیست")
                        .transform((val) => ({id: val})),
                ]),
                value: z.union([
                    z.string({message: "مقدار ویژگی را انتخاب کنید"})
                        .regex(/^\d+$/, "مقدار ویژگی معتبر نیست")
                        .transform((val) => ({id: +val})),
                    z.number({message: "مقدار ویژگی را انتخاب کنید"})
                        .int("مقدار ویژگی معتبر نیست")
                        .positive("مقدار ویژگی معتبر نیست")
                        .transform((val) => ({id: val})),
                ]),
            },
            {message: "ویژگی ها معتبر نیست"}
        ),
        {message: "ویژگی ها معتبر نیست"}
    ).refine(
        (ctx) => {
            const cat = ctx.map(p => p.category.id);
            const unique = new Set(cat);
            return cat.length === unique.size;
        },
        "نوع ویژگی ها نباید تکراری باشند"
    ),

    price: z.array(
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
                amount: z.union([
                    z.string({message: "قیمت را وارد کنید"})
                        .regex(/^\d+(,\d{3})*(\.\d{1,2})?$/g, {message: "قیمت معتبر نیست"})
                        .transform((val) => +(val.replace(/,/g, ""))),
                    z.number({message: "قیمت معتبر نیست"}).nonnegative({message: "قیمت معتبر نیست"}),
                ]),
            },
            {message: "قیمت گذاری معتبر نیست"}
        ),
        {message: "قیمت گذاری معتبر نیست"}
    ).refine(
        (ctx) => {
            const cat = ctx.map(p => p.priceList.id);
            const unique = new Set(cat);
            return cat.length === unique.size;
        },
        "دسته های قیمتی نباید تکراری باشند"
    ),
    hasSameAmount: z.boolean({message: "وضعیت نوع قیمت گذاری را مشخص کنید"}),
    amount: z.union(
        [
            z.string({message: "اعلان موجودی را وارد کنید"})
                .regex(/^\d+(,\d{3})*(\.\d{1,2})?$/g, {message: "اعلان موجودی معتبر نیست"})
                .transform((val) => +(val.replace(/,/g, ""))),
            z.number({message: "اعلان موجودی معتبر نیست"}).nonnegative({message: "اعلان موجودی معتبر نیست"}),
        ]
    ),

    inventory: z.array(
        z.object({
                id: z.number().positive().optional(),
                warehouse: z.union([
                    z.string({message: "انبار را انتخاب کنید"})
                        .regex(/^\d+$/, "انبار معتبر نیست")
                        .transform((val) => ({id: +val})),
                    z.number({message: "انبار را انتخاب کنید"})
                        .int("انبار معتبر نیست")
                        .positive("انبار معتبر نیست")
                        .transform((val) => ({id: val})),
                ]),
                inventory: z.union([
                    z.string({message: "موجودی را وارد کنید"})
                        .regex(/^\d+(,\d{3})*(\.\d{1,2})?$/g, {message: "موجودی معتبر نیست"})
                        .transform((val) => +(val.replace(/,/g, ""))),
                    z.number({message: "موجودی معتبر نیست"}).nonnegative({message: "موجودی معتبر نیست"}),
                ]),
            },
            {message: "موجودی معتبر نیست"}
        ),
        {message: "موجودی معتبر نیست"}
    ).refine(
        (ctx) => {
            const cat = ctx.map(p => p.warehouse.id);
            const unique = new Set(cat);
            return cat.length === unique.size;
        },
        "انبار نباید تکراری باشند"
    ),

    isActiveInventoryManagement: z.boolean({message: "وضعیت مدیریت موجودی محصول را مشخص کنید"}),
    minimumInventoryWarn: z.union(
        [
            z.string({message: "اعلان موجودی را وارد کنید"})
                .regex(/^\d+(,\d{3})*(\.\d{1,2})?$/g, {message: "اعلان موجودی معتبر نیست"})
                .transform((val) => +(val.replace(/,/g, ""))),
            z.number({message: "اعلان موجودی معتبر نیست"}).nonnegative({message: "اعلان موجودی معتبر نیست"}),
        ]
    ),

    pictures: z.object({id: z.number()}, {message: "تصاویر را وارد کنید"}).array().optional(),
    thumbnail: z.object({id: z.number()}, {message: "تصویر را وارد کنید"}).nullable().optional(),

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
    machinery: z.union(
        [
            z.string({message: "ماشین آلات معتبر نیست"})
                .regex(/^(\d+(,\d+)*)$/, {message: "ماشین آلات معتبر نیست"})
                .transform((ids) => ids?.toString().split(",")),
            z.number({message: "ماشین آلات معتبر نیست"})
                .int({message: "ماشین آلات معتبر نیست"})
                .positive({message: "ماشین آلات معتبر نیست"})
                .array()
        ]
    )
        .transform((ids) => ids?.map((id) => ({id: +id})) || [])
        .nullable()
        .optional(),
});

const formRender: FormRender<T>[] = [
    {
        render: InfoBox,
        fields: ["title", "slug", "names", "tags"]
    },
    {
        render: DetailBox,
        sections: [
            {
                key: "intro",
                title: (
                    <div className="flex items-center gap-2">
                        <OutlinedNotebookBookmarkIcon size={20}/>
                        <span>معرفی کلی</span>
                    </div>
                ),
                fields: ["intro"],
            },
            {
                key: "features",
                title: (
                    <div className="flex items-center gap-2">
                        <OutlinedDocumentIcon size={20}/>
                        <span>ویژگی ها</span>
                    </div>
                ),
                fields: ["features"],
            },
            {
                key: "technical",
                title: (
                    <div className="flex items-center gap-2">
                        <OutlinedRulerPenIcon size={20}/>
                        <span>مشخصات فنی</span>
                    </div>
                ),
                fields: ["technical"],
            },
            {
                key: "pricing",
                title: (
                    <div className="flex items-center gap-2">
                        <OutlinedWalletIcon size={20}/>
                        <span>قیمت گذاری</span>
                    </div>
                ),
                fields: ["hasSameAmount", "amount", "price"],
            },
            {
                key: "inventory",
                title: (
                    <div className="flex items-center gap-2">
                        <OutlinedBasketIcon size={20}/>
                        <span>موجودی</span>
                    </div>
                ),
                fields: ["isActiveInventoryManagement", "minimumInventoryWarn", "inventory"],
            },
        ],
    },
    {
        render: CategoriesBox,
        fields: ["categories"]
    },
    {
        render: MachineryBox,
        fields: ["machinery"]
    },
    {
        render: ThumbnailBox,
        fields: ["thumbnail"]
    },
    {
        render: PicturesBox,
        fields: ["pictures"]
    },
    {
        render: SubmitBox,
        fields: []
    },
]


const formFields: FormFieldFunc<T> = (watch, setValue) => {

    return ([
        {
            name: "title",
            type: "input",
            label: "عنوان",
            isRequired: true,
            className: "col-span-full xl:col-span-1",
            dependency: () => {
                const title = watch("title")
                setValue("slug", slugify(title, {
                    lower: true,
                    trim: true,
                    remove: /[*+~.()'"%^&$#?؟×/!:@]/g
                }), {shouldValidate: true})
            },
        },
        {
            name: "slug",
            type: "input",
            label: "شناسه اینترنتی",
            isRequired: true,
            className: "col-span-full xl:col-span-1",
            description: "فقط حروف و اعداد فارسی و انگلیسی و علامت - مجاز می باشد",
        },
        {
            name: "names",
            type: "tag",
            label: "نام های کالا",
            className: "col-span-full xl:col-span-1",
            description: "بعد افزودن هر مورد کلید Enter را فشار دهید"
        },
        {
            name: "tags",
            type: "tag",
            label: "برچسب ها",
            className: "col-span-full xl:col-span-1",
            description: "بعد افزودن هر مورد کلید Enter را فشار دهید"
        },
        {
            name: "categories",
            type: "select",
            label: "دسته بندی",
            isMultiple: true,
            dynamic: {
                route: "product/category/sloStyle",
                filter: {"parent": {$not: "$null"}},
                per: 200,
            },
            withSection: true,
        },
        {
            name: "machinery",
            type: "select",
            label: "ماشین آلات",
            isMultiple: true,
            dynamic: {
                route: "product/machineModel/sloStyle",
                per: 200,
            },
            withSection: true,
        },
        {
            name: "thumbnail",
            type: "uploader",
            label: "تصویر اصلی",
            isRequired: false,
            description: "تا حجم 5 مگابایت",
            isDisabled: false,
            accept: {
                'image/png': ['.png', '.PNG'],
                'image/jpg': ['.jpg', '.JPG', '.jpeg', '.JPEG'],
            },
            minSize: 1000,
            maxFiles: 5242880,
            isMultiple: false,
            withPreview: true
        },
        {
            name: "pictures",
            type: "uploader",
            label: "گالری تصاویر",
            isRequired: false,
            description: "تا حجم 5 مگابایت",
            isDisabled: false,
            accept: {
                'image/png': ['.png', '.PNG'],
                'image/jpg': ['.jpg', '.JPG', '.jpeg', '.JPEG'],
            },
            minSize: 1000,
            maxFiles: 5242880,
            isMultiple: true,
            withPreview: true
        },
        {
            name: "intro",
            type: "editor",
            className: "col-span-full",
        },
        {
            name: "features",
            type: "array",
            description: "برای افزودن ویژگی، دکمه افزودن را کلیک کنید",
            className: "col-span-full",
            fields: (index) => [
                {
                    name: "category",
                    type: "select",
                    label: "نوع ویژگی",
                    dynamic: {
                        route: "product/featuresCategory/sloStyle",
                    },
                    isRequired: true,
                    isSearchable: true,
                    className: "col-span-full xl:col-span-1",
                },
                {
                    name: "value",
                    type: "select",
                    label: "مقدار ویژگی",
                    dynamic: {
                        route: "product/features/sloStyle",
                        filter: {
                            category: {$eq: watch(`features.${index}.category`)}
                        }
                    },
                    isRequired: true,
                    isSearchable: true,
                    withSection: true,
                    className: "col-span-full xl:col-span-1",
                },
            ],
        },
        {
            name: "technical",
            type: "array",
            description: "برای مشخص کردن مشخصات فنی، دکمه افزودن را کلیک کنید",
            className: "col-span-full",
            fields: (index) => [
                {
                    name: "title",
                    type: "input",
                    label: "عنوان مشخصه فنی",
                    isRequired: true,
                    className: "col-span-full xl:col-span-1",
                },
                {
                    name: "value",
                    type: "input",
                    label: "مقدار مشخصه فنی",
                    isMultiline: true,
                    isRequired: true,
                    className: "col-span-full xl:col-span-1",
                },
            ]
        },
        {
            name: "hasSameAmount",
            type: "switch",
            label: "قیمت های یکسان در دسته های قیمتی",
            className: "col-span-full xl:col-span-1",
            withoutCheckDependency: true,
            dependency: (value, name) => {
                const hasSameAmount = value
                const amount = Number((watch("amount") || 0).toString().replace(/,/g, ""))
                const price = watch("price")
                if (hasSameAmount) {
                    if (price?.length) {
                        for (let i = 0; i < price.length; i++) {
                            setValue(`price.${i}.amount`, amount)
                        }
                    }
                } else {
                    // setValue("amount", 0)
                    // setValue("price", [])
                }
            }
        },
        {
            name: "amount",
            type: "input",
            label: "قیمت",
            isNumeric: true,
            isRequired: true,
            className: "col-span-full xl:col-span-1",
            isDisabled: !watch("hasSameAmount"),
            dependency: (value, name) => {
                const hasSameAmount = watch("hasSameAmount")
                const amount = (value || 0).toString().replace(/,/g, "")
                const price = watch("price")
                if (price && hasSameAmount) {
                    for (let i = 0; i < price.length; i++) {
                        setValue(`price.${i}.amount`, amount)
                    }
                }
            }
        },
        {
            name: "price",
            type: "array",
            description: "برای مشخص کردن قیمت، دکمه افزودن را کلیک کنید",
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
                    className: "col-span-full xl:col-span-1",
                    dependency: async (value, name) => {
                        const axios = axiosCoreWithAuth()

                        const priceList = value
                        const amount = (watch(`price.${index}.amount`) || 0).toString().replace(/,/g, "")
                        const count = (1).toString()
                        const discount = (0).toString()

                        const data: CalculatePrice = await axios.get(`admin/product/calculatePrice?priceList=${priceList}&amount=${amount}&count=${count}&discount=${discount}`)
                        setValue(`price.${index}.info`, data)
                    },
                },
                {
                    name: "amount",
                    type: "input",
                    label: "قیمت",
                    isNumeric: true,
                    isRequired: true,
                    endContent: (
                        watch(`price.${index}.info`)?.primaryCurrency?.icon
                            ?
                            <span
                                className="text-primary h-6 w-6 flex justify-center items-center"
                                dangerouslySetInnerHTML={{__html: (watch(`price.${index}.info`)?.primaryCurrency?.icon?.content || "")}}
                            />
                            :
                            (watch(`price.${index}.info`)?.primaryCurrency?.iso || "~")
                    ),
                    isDisabled: !!watch("hasSameAmount"),
                    className: "col-span-full xl:col-span-1",
                    dependency: async (value, name) => {
                        const axios = axiosCoreWithAuth()

                        const priceList = watch(`price.${index}.priceList`)
                        const amount = (value || 0).toString().replace(/,/g, "")
                        const count = (1).toString()
                        const discount = (0).toString()

                        const data: CalculatePrice = await axios.get(`admin/product/calculatePrice?priceList=${priceList}&amount=${amount}&count=${count}&discount=${discount}`)
                        setValue(`price.${index}.info`, data)
                    },
                },
                {
                    name: "calc",
                    type: "custom",
                    className: "col-span-full",
                    children: (
                        <div className="flex flex-row flex-wrap gap-x-8 gap-y-2 truncate text-sm">
                            <div className="flex gap-2 items-center">
                                <div className="">
                                    قیمت خالص:
                                </div>
                                <div className="flex gap-1 font-bold">
                                    <NumericFormat
                                        value={watch(`price.${index}.info`)?.amount || 0}
                                        thousandSeparator=","
                                        decimalSeparator="."
                                        allowNegative={false}
                                        decimalScale={0}
                                        allowLeadingZeros={false}
                                        displayType="text"
                                    />
                                    <span className="text-xs font-bold text-primary">
                                        {(
                                            watch(`price.${index}.info`)?.secondaryCurrency?.icon
                                                ?
                                                <span
                                                    className="text-primary h-6 w-6 flex justify-center items-center"
                                                    dangerouslySetInnerHTML={{__html: (watch(`price.${index}.info`)?.secondaryCurrency?.icon?.content || "")}}
                                                />
                                                :
                                                (watch(`price.${index}.info`)?.secondaryCurrency?.iso || "~")
                                        )}
                                    </span>
                                </div>
                            </div>
                            <div className="flex gap-2 items-center">
                                <div className="">
                                    ارزش افزوده ({watch(`price.${index}.info`)?.vatPercent}%) (عوارض + مالیات):
                                </div>
                                <div className="flex gap-1 font-bold">
                                    <NumericFormat
                                        value={watch(`price.${index}.info`)?.vatAmount || 0}
                                        thousandSeparator=","
                                        decimalSeparator="."
                                        allowNegative={false}
                                        decimalScale={0}
                                        allowLeadingZeros={false}
                                        displayType="text"
                                    />
                                    <span className="text-xs font-bold text-primary">
                                        {(
                                            watch(`price.${index}.info`)?.secondaryCurrency?.icon
                                                ?
                                                <span
                                                    className="text-primary h-6 w-6 flex justify-center items-center"
                                                    dangerouslySetInnerHTML={{__html: (watch(`price.${index}.info`)?.secondaryCurrency?.icon?.content || "")}}
                                                />
                                                :
                                                (watch(`price.${index}.info`)?.secondaryCurrency?.iso || "~")
                                        )}
                                    </span>
                                </div>
                            </div>
                            <div className="flex gap-2 items-center">
                                <div className="">
                                    قیمت نهایی:
                                </div>
                                <div className="flex gap-1 font-bold">
                                    <NumericFormat
                                        value={watch(`price.${index}.info`)?.finalAmount || 0}
                                        thousandSeparator=","
                                        decimalSeparator="."
                                        allowNegative={false}
                                        decimalScale={0}
                                        allowLeadingZeros={false}
                                        displayType="text"
                                    />
                                    <span className="text-xs font-bold text-primary">
                                        {(
                                            watch(`price.${index}.info`)?.secondaryCurrency?.icon
                                                ?
                                                <span
                                                    className="text-primary h-6 w-6 flex justify-center items-center"
                                                    dangerouslySetInnerHTML={{__html: (watch(`price.${index}.info`)?.secondaryCurrency?.icon?.content || "")}}
                                                />
                                                :
                                                (watch(`price.${index}.info`)?.secondaryCurrency?.iso || "~")
                                        )}
                                    </span>
                                </div>
                            </div>
                        </div>
                    )
                },
            ],
            dependency: (value, name) => {
                const hasSameAmount = watch("hasSameAmount")
                const amount = Number((watch("amount") || 0).toString().replace(/,/g, ""))
                if (hasSameAmount) {
                    for (let i = 0; i < value?.length; i++) {
                        setValue(`price.${i}.amount`, amount)
                    }
                }
            }
        },
        {
            name: "isActiveInventoryManagement",
            type: "switch",
            label: "مدیریت موجودی محصول",
            className: "col-span-full",
            withoutCheckDependency: true,
            dependency: (value, name) => {
                if (!value) {
                    // @ts-ignore
                    setValue("inventory", [], {shouldValidate: true})
                    setValue("minimumInventoryWarn", 0)
                }
            }
        },
        {
            name: "minimumInventoryWarn",
            type: "input",
            label: "اعلان موجودی کم",
            isNumeric: true,
            isRequired: false,
            className: "col-span-full",
            description: "در صورتی که موجودی کل محصول از این عدد کمتر شود، در محصول لیبلی با این عنوان نمایش داده خواهد شد",
            isDisabled: !watch("isActiveInventoryManagement"),
        },
        {
            name: "inventory",
            type: "array",
            description: "برای مشخص کردن موجودی، دکمه افزودن را کلیک کنید",
            className: "col-span-full",
            isDisabled: !watch("isActiveInventoryManagement"),
            fields: (index) => [
                {
                    name: "warehouse",
                    type: "select",
                    label: "انبار",
                    dynamic: {
                        route: "warehouse/sloStyle",
                    },
                    isRequired: true,
                    isSearchable: true,
                    className: "col-span-full xl:col-span-1",
                },
                {
                    name: "inventory",
                    type: "input",
                    label: "تعداد موجود در این انبار",
                    isNumeric: true,
                    isRequired: true,
                    className: "col-span-full xl:col-span-1",
                },
            ],
        },
    ])
}


export const addProductContext = {
    apiRoute: "admin/product",
    form: {
        title: "کالا",
        schema: formSchema,
        fields: formFields,
        initial: formInitial,
        render: formRender,
        className:
            "grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 grid-rows-auto" + " " +
            "grid-areas-[info,detail,categories,machinery,thumbnail,pictures,submit]" + " " +
            "lg:grid-areas-[info_info,detail_detail,categories_machinery,thumbnail_pictures,submit_submit]" + " " +
            "xl:grid-areas-[info_info_submit,detail_detail_categories,detail_detail_machinery,detail_detail_thumbnail,detail_detail_pictures]"
    },
}
