import React from "react";
import {undefined, z} from "zod";
import {FormRender} from "@/stories/RahsazAdmin/FormHandler";
import {FormFieldFunc} from "@/stories/General/FormFieldsGenerator";
import {Button, Card, CardBody} from "@nextui-org/react";
import moment from "jalali-moment";
import {CardHeader} from "@nextui-org/card";
import {Cart, cartTypesEnum} from "@/interfaces/Cart.interface";
import {axiosCoreWithAuth} from "@/lib/axios";
import {NumericFormat} from "react-number-format";
import {Order} from "@/interfaces/Order.interface";
import {CalculatePrice} from "@/interfaces/Product.interface";


type T = Order


const CustomerBox: FormRender<T>['render'] = ({children, formState, watch, isEditing}) => {
    return (
        <Card
            className="area-[customer] max-h-[600px]"
            classNames={{body: "items-start text-start"}}
            isDisabled={formState?.isLoading || formState?.isValidating || formState?.isSubmitting || formState?.disabled}
        >
            <CardHeader className="justify-between items-center">
                <h3 className="font-bold">
                    مشتری
                </h3>
            </CardHeader>
            <CardBody className="gap-2 flex-col items-center">
                {children}
            </CardBody>
        </Card>
    )
}

const ProductsBox: FormRender<T>['render'] = ({children, formState, watch, isEditing}) => {
    return (
        <Card
            className="area-[products] max-h-[600px]"
            classNames={{body: "items-start text-start"}}
            isDisabled={formState?.isLoading || formState?.isValidating || formState?.isSubmitting || formState?.disabled}
        >
            <CardHeader className="justify-between items-center">
                <h3 className="font-bold">
                    محصولات
                </h3>
            </CardHeader>
            <CardBody className="gap-2 flex-col items-center">
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
    account: null,
    products: [],
    type: cartTypesEnum.current,
}

const formSchema = z.object({
    avatar: z.object({id: z.number()}, {message: "تصویر را وارد کنید"})
        .nullable().optional(),
    phone: z.object({
        value: z.string().regex(/\+98 9[0-9]{2} [0-9]{3} [0-9]{4}|\+989\d{2}\d{3}\d{4}/, "شماره وارد شده معتبر نیست")
            .transform((val) => val.replaceAll(" ", ""))
            .nullable().optional().or(z.string().length(0)),
        isConfirmed: z.boolean().nullable().optional(),
    }).transform((v) => (!v.value ? null : v)),
    email: z.object({
        value: z.string().email("ایمیل وارد شده معتبر نیست").nullable().optional().or(z.string().length(0)),
        isConfirmed: z.boolean().nullable().optional(),
    }).transform((v) => (!v.value ? null : v)),
    permissions: z.union([
        z.string({message: "دسترسی ها معتبر نیست"})
            .regex(/^(\d+(,\d+)*)$/, {message: "دسترسی ها معتبر نیست"})
            .transform((ids) => ids?.toString().split(",")),
        z.number({message: "دسترسی ها معتبر نیست"})
            .int({message: "دسترسی ها معتبر نیست"})
            .positive({message: "دسترسی ها معتبر نیست"})
            .array(),
    ]).transform((ids) => ids?.map((id) => ({id: +id})) || []),
    isActive: z.boolean({message: "وضعیت را مشخص کنید"}),
    identity: z.union(
        [
            z.string({message: "هویت را انتخاب کنید"})
                .regex(/^\d+$/, "هویت معتبر نیست")
                .transform((val) => ({id: +val})),
            z.number({message: "هویت را انتخاب کنید"})
                .int("هویت معتبر نیست")
                .positive("هویت معتبر نیست")
                .transform((val) => ({id: val})),
        ]
    ).nullable().optional(),
});

const formRender: FormRender<T>[] = [
    {
        render: CustomerBox,
        fields: ["account", "priceList"]
    },
    {
        render: ProductsBox,
        fields: ["products"]
    },
    {
        render: SubmitBox,
        fields: []
    },
]


const formFields: FormFieldFunc<T> = (watch, setValue) => {

    return ([
        {
            name: "account",
            type: "select",
            label: "مشتری",
            dynamic: {
                route: "admin/account/sloStyle",
            },
            isRequired: true,
            isSearchable: true,
            className: "col-span-full",
        },
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
                const priceList = Number(value)

                if (!priceList) return

                for (let i = 0; i < watch(`products`).length; i++) {

                    const product = Number(watch(`products.${i}.product`))
                    if (!product) {
                        setValue(`products.${i}.amount`, 0)
                        return
                    }

                    const data: any = await axios.get(`admin/product/price/${product}?priceList=${priceList}`)
                    setValue(`products.${i}.amount`, (data?.amount || 0))
                    setValue(`products.${i}.discount`, (data?.discount || 0))
                }


            },
        },
        {
            name: "products",
            type: "array",
            description: "برای مشخص کردن قیمت، دکمه افزودن را کلیک کنید",
            className: "col-span-full w-full",
            itemClassName: "grid-cols-4",
            fields: (index) => [
                {
                    name: "product",
                    type: "select",
                    label: "محصول",
                    dynamic: {
                        route: "admin/product/sloStyle",
                    },
                    isRequired: true,
                    isSearchable: true,
                    className: "col-span-full lg:col-span-2 xl:col-span-1",
                    dependency: async (value, name) => {
                        const priceList = watch('priceList')
                        const product = Number(value)

                        if (!product) {
                            setValue(`products.${index}.amount`, 0)
                            setValue(`products.${index}.count`, 1)
                            return
                        }

                        const axios = axiosCoreWithAuth()
                        const data: any = await axios.get(`admin/product/price/${product}?priceList=${priceList}`)
                        setValue(`products.${index}.amount`, (data?.amount || 0))
                        setValue(`products.${index}.count`, 1)
                        setValue(`products.${index}.discount`, (data?.discount || 0))
                    },
                },
                {
                    name: "count",
                    type: "input",
                    label: "تعداد",
                    isNumeric: true,
                    isRequired: true,
                    className: "col-span-full lg:col-span-2 xl:col-span-1",
                    dependency: async (value, name) => {
                        const axios = axiosCoreWithAuth()

                        const priceList = watch('priceList')
                        const amount = (watch(`products.${index}.amount`) || 0).toString().replace(/,/g, "")
                        const count = (value || 0).toString().replace(/,/g, "")
                        const discount = (watch(`products.${index}.discount`) || 0).toString().replace(/,/g, "")

                        const data: CalculatePrice = await axios.get(`admin/product/calculatePrice?priceList=${priceList}&amount=${amount}&count=${count}&discount=${discount}`)
                        setValue(`products.${index}.info`, data)
                    },
                },
                {
                    name: "amount",
                    type: "input",
                    label: "قیمت هر واحد",
                    isNumeric: true,
                    isRequired: true,
                    endContent: (
                        watch(`products.${index}.info`)?.primaryCurrency?.icon
                            ?
                            <span
                                className="text-primary h-6 w-6 flex justify-center items-center"
                                dangerouslySetInnerHTML={{__html: (watch(`products.${index}.info`)?.primaryCurrency?.icon?.content || "")}}
                            />
                            :
                            (watch(`products.${index}.info`)?.primaryCurrency?.iso || "~")
                    ),
                    className: "col-span-full lg:col-span-2 xl:col-span-1",
                    dependency: async (value, name) => {
                        const axios = axiosCoreWithAuth()

                        const priceList = watch('priceList')
                        const amount = (value || 0).toString().replace(/,/g, "")
                        const count = (watch(`products.${index}.count`) || 0).toString().replace(/,/g, "")
                        const discount = (watch(`products.${index}.discount`) || 0).toString().replace(/,/g, "")

                        const data: CalculatePrice = await axios.get(`admin/product/calculatePrice?priceList=${priceList}&amount=${amount}&count=${count}&discount=${discount}`)
                        setValue(`products.${index}.info`, data)
                    },
                },
                {
                    name: "discount",
                    type: "input",
                    label: "تخفیف هر واحد",
                    isNumeric: true,
                    isRequired: true,
                    endContent: (
                        watch(`products.${index}.info`)?.primaryCurrency?.icon
                            ?
                            <span
                                className="text-primary h-6 w-6 flex justify-center items-center"
                                dangerouslySetInnerHTML={{__html: (watch(`products.${index}.info`)?.primaryCurrency?.icon?.content || "")}}
                            />
                            :
                            (watch(`products.${index}.info`)?.primaryCurrency?.iso || "~")
                    ),
                    className: "col-span-full lg:col-span-2 xl:col-span-1",
                    dependency: async (value, name) => {
                        const axios = axiosCoreWithAuth()

                        const priceList = watch('priceList')
                        const amount = (watch(`products.${index}.amount`) || 0).toString().replace(/,/g, "")
                        const count = (watch(`products.${index}.count`) || 0).toString().replace(/,/g, "")
                        const discount = (value || 0).toString().replace(/,/g, "")

                        const data: CalculatePrice = await axios.get(`admin/product/calculatePrice?priceList=${priceList}&amount=${amount}&count=${count}&discount=${discount}`)
                        setValue(`products.${index}.info`, data)
                    },
                },
                {
                    name: "calc",
                    type: "custom",
                    className: "col-span-full",
                    children: (
                        <div className="flex flex-row flex-wrap gap-x-8 gap-y-4 truncate text-sm">
                            <div className="flex gap-2 items-center">
                                <div className="">
                                    قیمت خالص:
                                </div>
                                <div className="flex gap-1 font-bold">
                                    <NumericFormat
                                        value={watch(`products.${index}.info`)?.amount || 0}
                                        thousandSeparator=","
                                        decimalSeparator="."
                                        allowNegative={false}
                                        decimalScale={0}
                                        allowLeadingZeros={false}
                                        displayType="text"
                                    />
                                    <span className="text-xs font-bold text-primary">
                                        {(
                                            watch(`products.${index}.info`)?.secondaryCurrency?.icon
                                                ?
                                                <span
                                                    className="text-primary h-6 w-6 flex justify-center items-center"
                                                    dangerouslySetInnerHTML={{__html: (watch(`products.${index}.info`)?.secondaryCurrency?.icon?.content || "")}}
                                                />
                                                :
                                                (watch(`products.${index}.info`)?.secondaryCurrency?.iso || "~")
                                        )}
                                    </span>
                                </div>
                            </div>
                            <div className="flex gap-2 items-center">
                                <div className="">
                                    ارزش افزوده (عوارض + مالیات):
                                </div>
                                <div className="flex gap-1 font-bold">
                                    <NumericFormat
                                        value={watch(`products.${index}.info`)?.vatAmount || 0}
                                        thousandSeparator=","
                                        decimalSeparator="."
                                        allowNegative={false}
                                        decimalScale={0}
                                        allowLeadingZeros={false}
                                        displayType="text"
                                    />
                                    <span className="text-xs font-bold text-primary">
                                        {(
                                            watch(`products.${index}.info`)?.secondaryCurrency?.icon
                                                ?
                                                <span
                                                    className="text-primary h-6 w-6 flex justify-center items-center"
                                                    dangerouslySetInnerHTML={{__html: (watch(`products.${index}.info`)?.secondaryCurrency?.icon?.content || "")}}
                                                />
                                                :
                                                (watch(`products.${index}.info`)?.secondaryCurrency?.iso || "~")
                                        )}
                                    </span>
                                </div>
                            </div>
                            <div className="flex gap-2 items-center">
                                <div className="">
                                    تخفیف:
                                </div>
                                <div className="flex gap-1 font-bold">
                                    <NumericFormat
                                        value={watch(`products.${index}.info`)?.discountAmount || 0}
                                        thousandSeparator=","
                                        decimalSeparator="."
                                        allowNegative={false}
                                        decimalScale={0}
                                        allowLeadingZeros={false}
                                        displayType="text"
                                    />
                                    <span className="text-xs font-bold text-primary">
                                        {(
                                            watch(`products.${index}.info`)?.secondaryCurrency?.icon
                                                ?
                                                <span
                                                    className="text-primary h-6 w-6 flex justify-center items-center"
                                                    dangerouslySetInnerHTML={{__html: (watch(`products.${index}.info`)?.secondaryCurrency?.icon?.content || "")}}
                                                />
                                                :
                                                (watch(`products.${index}.info`)?.secondaryCurrency?.iso || "~")
                                        )}
                                    </span>
                                </div>
                            </div>
                            <div className="flex gap-2 items-center">
                                <div className="">
                                    قیمت نهایی هر واحد:
                                </div>
                                <div className="flex gap-1 font-bold">
                                    <NumericFormat
                                        value={(watch(`products.${index}.info`)?.finalAmount || 0)}
                                        thousandSeparator=","
                                        decimalSeparator="."
                                        allowNegative={false}
                                        decimalScale={0}
                                        allowLeadingZeros={false}
                                        displayType="text"
                                    />
                                    <span className="text-xs font-bold text-primary">
                                        {(
                                            watch(`products.${index}.info`)?.secondaryCurrency?.icon
                                                ?
                                                <span
                                                    className="text-primary h-6 w-6 flex justify-center items-center"
                                                    dangerouslySetInnerHTML={{__html: (watch(`products.${index}.info`)?.secondaryCurrency?.icon?.content || "")}}
                                                />
                                                :
                                                (watch(`products.${index}.info`)?.secondaryCurrency?.iso || "~")
                                        )}
                                    </span>
                                </div>
                            </div>
                            <div className="flex gap-2 items-center">
                                <div className="">
                                    جمع کل:
                                </div>
                                <div className="flex gap-1 font-bold">
                                    <NumericFormat
                                        value={(watch(`products.${index}.info`)?.totalAmount || 0)}
                                        thousandSeparator=","
                                        decimalSeparator="."
                                        allowNegative={false}
                                        decimalScale={0}
                                        allowLeadingZeros={false}
                                        displayType="text"
                                    />
                                    <span className="text-xs font-bold text-primary">
                                        {(
                                            watch(`products.${index}.info`)?.secondaryCurrency?.icon
                                                ?
                                                <span
                                                    className="text-primary h-6 w-6 flex justify-center items-center"
                                                    dangerouslySetInnerHTML={{__html: (watch(`products.${index}.info`)?.secondaryCurrency?.icon?.content || "")}}
                                                />
                                                :
                                                (watch(`products.${index}.info`)?.secondaryCurrency?.iso || "~")
                                        )}
                                    </span>
                                </div>
                            </div>
                        </div>
                    )
                },
            ],
        },
    ])
}


export const addOrderContext = {
    apiRoute: "admin/order",
    form: {
        title: "سفارش",
        schema: formSchema,
        fields: formFields,
        initial: formInitial,
        render: formRender,
        className:
            "grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 grid-rows-auto" + " " +
            "grid-areas-[customer,products,submit]" + " " +
            "lg:grid-areas-[customer_customer,products_products,submit_submit]" + " " +
            "xl:grid-areas-[customer_customer_submit,products_products_products]"
    },
}
