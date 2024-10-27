import React from "react";
import {z} from "zod";
import {FormRender} from "@/stories/RahsazAdmin/FormHandler";
import {FormFieldFunc} from "@/stories/General/FormFieldsGenerator";
import {Button, Card, CardBody} from "@nextui-org/react";
import moment from "jalali-moment";
import {Account} from "@/interfaces/Account.interface";
import {Snippet} from "@nextui-org/snippet";
import {CardHeader} from "@nextui-org/card";
import {BoldDuotonePermissionGroupIcon} from "@/stories/RahsazAdmin/Icons";


type T = Account


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

    isActive: true,

    identity: null,
    email: null,
    phone: null,
    avatar: null,

    permissions: [],

    token: undefined,

    isRestricted: false,
    restrictedAt: null,
    restrictedBy: null,
    restrictionExpireAt: null,
    restrictionText: null,
}


const formSchema = z.object({});

const formRender: FormRender<T>[] = [
    {
        render: GeneralBox,
        fields: ["avatar", "token"]
    },
    {
        render: EmailBox,
        fields: ["email.value", "email.isConfirmed"]
    },
    {
        render: PhoneBox,
        fields: ["phone.value", "phone.isConfirmed"]
    },
    {
        render: PermissionsBox,
        fields: ["permissions", "isActive"]
    },
    {
        render: SubmitBox,
        fields: []
    },
]


const formFields: FormFieldFunc<T> = (watch, setValue) => {

    return ([
        {
            name: "avatar",
            type: "uploader",
            label: "تصویر پروفایل",
            isRequired: false,
            description: "تا حجم 5 مگابایت",
            isDisabled: false,
            accept: {
                'image/png': ['.png', '.PNG'],
                'image/jpg': ['.jpg', '.JPG', '.jpeg', '.JPEG'],
            },
            minSize: 1000,
            maxFiles: 5242880,
            isAvatar: true,
            className: "col-span-full",
        },
        {
            name: "token",
            type: "custom",
            className: "col-span-full",
            children: !watch("token") ? null : (
                <Snippet
                    size="lg"
                    fullWidth
                    dir="ltr"
                    tooltipProps={{
                        content: "کپی شود"
                    }}
                    hideSymbol
                >
                    {watch("token")}
                </Snippet>
            ),
        },
        {
            name: "email.value",
            type: "input",
            isLtr: true,
            label: "ایمیل",
            isRequired: true,
            className: "col-span-full",
        },
        {
            name: "email.isConfirmed",
            type: "switch",
            label: "تایید شده",
            isRequired: true,
            className: "col-span-full xl:col-span-1",
        },
        {
            name: "phone.value",
            type: "input",
            label: "شماره موبایل",
            isRequired: true,
            isNumeric: true,
            pattern: "#### ### ####",
            className: "col-span-full",
        },
        {
            name: "phone.isConfirmed",
            type: "switch",
            label: "تایید شده",
            isRequired: true,
            className: "col-span-full xl:col-span-1",
        },
        {
            name: "permissions",
            type: "select",
            label: "گروه دسترسی",
            dynamic: {
                route: "account/permissionGroup/sloStyle",
            },
            isRequired: true,
            isMultiple: true,
            className: "col-span-full",
        },
        {
            name: "isActive",
            type: "switch",
            label: "فعال",
            isRequired: true,
            className: "col-span-full",
        },
    ])
}


export const addAccountContext = {
    apiRoute: "admin/account",
    form: {
        title: "کاربر",
        schema: formSchema,
        fields: formFields,
        initial: formInitial,
        render: formRender,
        className:
            "grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 grid-rows-auto" + " " +
            "grid-areas-[general,phone,email,permissions,submit]" + " " +
            "lg:grid-areas-[general_general,phone_email,permissions_permissions,submit_submit]" + " " +
            "xl:grid-areas-[general_general_submit,email_phone_permissions]"
    },
}
