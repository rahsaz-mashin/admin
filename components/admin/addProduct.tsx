import React from "react";
import {z} from "zod";
import {FormRender} from "@/stories/RahsazAdmin/FormHandler";
import {FormFieldType} from "@/stories/General/FormFieldsGenerator";
import {Product} from "@/interfaces/Product.interface";
import {Card} from "@nextui-org/card";
import {Button, CardBody} from "@nextui-org/react";


type T = Product


const formInitial: T = {
    id: undefined,
    title: "",
}


const formSchema = z.object({
    key: z.string({message: "کلید را وارد کنید"}).min(3, "کلید معتبر نیست"),
    title: z.string({message: "نام را وارد کنید"}).min(3, "نام معتبر نیست"),
});


const formRender: FormRender<T>[] = [
    {
        render: ({children, formState}) => {
            return (
                <Card
                    className="col-span-full lg:col-span-6 xl:col-span-8"
                    classNames={{body: "items-start text-start"}}
                    isDisabled={formState?.isLoading || formState?.isValidating || formState?.isSubmitting || formState?.disabled}
                >
                    <CardBody className="gap-5">
                        {children}
                    </CardBody>
                </Card>
            )
        },
        fields: ["title"]
    },
    {
        render: ({children, formState, watch, isEditing}) => {
            return (
                <Card
                    className="col-span-full lg:col-span-6 xl:col-span-4"
                    classNames={{body: "items-start text-start"}}
                    isDisabled={formState?.isLoading || formState?.isValidating || formState?.isSubmitting || formState?.disabled}
                >
                    <CardBody className="gap-5">
                        <div className="flex flex-col gap-1 text-sm">
                            <div className="flex flex-row gap-1 items-center">
                                <b>زمان ایجاد:</b>
                                <span dir="ltr">{watch("createdAt")?.toString() || "-"}</span>
                            </div>
                            <div className="flex flex-row gap-1 items-center">
                                <b>آخرین ویرایش:</b>
                                <span dir="ltr">{watch("updatedAt")?.toString() || "-"}</span>
                            </div>
                            <div className="flex flex-row gap-1 items-center">
                                <b>زمان تایید:</b>
                                <span dir="ltr">1403/08/23 12:22</span>
                            </div>
                        </div>
                        <div className="flex flex-row gap-3 w-full">
                            {isEditing && (
                                <Button
                                    type="button"
                                    variant="flat"
                                    color="default"
                                    size="lg"
                                    fullWidth
                                    isLoading={formState?.isValidating || formState?.isSubmitting}
                                    isDisabled={formState?.isLoading || formState?.isValidating || formState?.isSubmitting || formState?.disabled}
                                >
                                    انصراف
                                </Button>
                            )}
                            <Button
                                type="submit"
                                variant="shadow"
                                color="primary"
                                size="lg"
                                fullWidth
                                isLoading={formState?.isValidating || formState?.isSubmitting}
                                isDisabled={formState?.isLoading || formState?.isValidating || formState?.isSubmitting || formState?.disabled}
                            >
                                {isEditing ? "ویرایش و برگشت به لیست" : "ثبت و برگشت به لیست"}
                            </Button>
                            <Button
                                type="submit"
                                variant="shadow"
                                color="primary"
                                size="lg"
                                fullWidth
                                isLoading={formState?.isValidating || formState?.isSubmitting}
                                isDisabled={formState?.isLoading || formState?.isValidating || formState?.isSubmitting || formState?.disabled}
                            >
                                {isEditing ? "ویرایش و باقی ماندن" : "ثبت و باقی ماندن"}
                            </Button>
                        </div>
                    </CardBody>
                </Card>
            )
        },
        fields: ["description"]
    },

]


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
        name: "description",
        type: "input",
        label: "توضیحات",
        isRequired: true,
        isMultiline: true,
    },
]


export const addProductContext = {
    apiRoute: "branch",
    form: {
        title: "کالا",
        schema: formSchema,
        fields: formFields,
        initial: formInitial,
        render: formRender,
    },
}