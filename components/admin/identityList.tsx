import {ColumnType} from "@/stories/RahsazAdmin/TableList";
import {Chip, Image} from "@nextui-org/react";
import NextImage from "next/image";
import {Account} from "@/interfaces/Account.interface";
import {FileStorage} from "@/interfaces/FileStorage.interface";
import {AccountPhoneNumber} from "@/interfaces/AccountPhoneNumber.interface";
import {AccountPermissionGroup} from "@/interfaces/AccountPermissionGroup.interface";
import {AccountEmailAddress} from "@/interfaces/AccountEmailAddress.interface";


type T = Account


const tableColumns: ColumnType<T>[] = [
    {
        key: "actions",
        title: "ابزارها",
        align: "center",
        width: 160,
        minWidth: 160,
        toolsCell: {
            editable: true,
            editRoute: "edit",
            removable: true,
        },
    },
    {
        key: "id",
        title: "شناسه",
        align: "center",
        width: 100,
        minWidth: 100,
        allowsSorting: true,
    },
    {
        key: "avatar",
        title: "پروفایل",
        minWidth: 100,
        width: 100,
        align: "center",
        render: (value: FileStorage | null, ctx) => {
            return (
                <div className="flex flex-row gap-5 items-center justify-center">
                    <div className="w-24 h-24">
                        <Image
                            as={NextImage}
                            width={100}
                            height={100}
                            alt={value?.alt}
                            title={value?.title}
                            src={`${value ? (value.system.baseUrl + "/" + value?.path) : ""}`}
                            radius="full"
                            loading="eager"
                            className="object-fill !h-full !w-full"
                            classNames={{wrapper: "h-full w-full bg-contain bg-center"}}
                            fallbackSrc="/fallback.png"
                        />
                    </div>
                </div>
            )
        },
    },
    {
        key: "phone",
        title: "موبایل",
        minWidth: 220,
        width: 220,
        align: "center",
        render: (value: AccountPhoneNumber | null, ctx) => {
            return (
                <div className="flex flex-row items-center justify-center gap-2 truncate">
                    {value && (
                        <>
                            <div dir="ltr" className="select-all">
                                {value?.value}
                            </div>
                            {value?.isConfirmed && (
                                <Chip
                                    size="sm"
                                    color="success"
                                    variant="shadow"
                                    className="text-white"
                                >
                                    تایید شده
                                </Chip>
                            )}
                            {!value?.isConfirmed && (
                                <Chip
                                    size="sm"
                                    color="danger"
                                    variant="flat"
                                    className="text-white"
                                >
                                    تایید نشده
                                </Chip>
                            )}
                        </>
                    )}
                    {!value && (
                        <Chip
                            size="md"
                            color="default"
                            variant="solid"
                            className="text-white"
                        >
                            ثبت نشده
                        </Chip>
                    )}
                </div>
            )
        },
    },
    {
        key: "email",
        title: "ایمیل",
        minWidth: 220,
        width: 220,
        align: "center",
        render: (value: AccountEmailAddress | null, ctx) => {
            return (
                <div className="flex flex-row items-center justify-center gap-2 truncate">
                    {value && (
                        <>
                            <div dir="ltr" className="select-all">
                                {value?.value}
                            </div>
                            {value?.isConfirmed && (
                                <Chip
                                    size="sm"
                                    color="success"
                                    variant="shadow"
                                    className="text-white"
                                >
                                    تایید شده
                                </Chip>
                            )}
                            {!value?.isConfirmed && (
                                <Chip
                                    size="sm"
                                    color="danger"
                                    variant="flat"
                                    className="text-white"
                                >
                                    تایید نشده
                                </Chip>
                            )}
                        </>
                    )}
                    {!value && (
                        <Chip
                            size="md"
                            color="default"
                            variant="solid"
                            className="text-white"
                        >
                            ثبت نشده
                        </Chip>
                    )}
                </div>
            )
        },
    },
    {
        key: "permissions",
        title: "دسترسی ها",
        minWidth: 200,
        render: (value: AccountPermissionGroup[] | null, ctx) => {
            return (
                <div className="flex flex-row flex-wrap items-center justify-start gap-2 truncate">
                    {!value?.length && (
                        <Chip
                            size="md"
                            color="default"
                            variant="solid"
                            className="text-white"
                        >
                            بدون دسترسی
                        </Chip>
                    )}
                    {value?.map((v, idx) => {
                        return (
                            <Chip
                                key={idx}
                                size="md"
                                color="primary"
                                variant="solid"
                                className="text-white"
                            >
                                {v?.title}
                            </Chip>
                        )
                    })}
                </div>
            )
        },
    },
    {
        key: "isActive",
        title: "وضعیت",
        minWidth: 100,
        width: 100,
        align: "center",
        render: (value: boolean, ctx) => {
            return (
                <div className="flex flex-row items-center justify-center gap-2 truncate">
                    {value && (
                        <Chip
                            size="md"
                            color="success"
                            variant="shadow"
                            className="text-white"
                        >
                            فعال
                        </Chip>
                    )}
                    {!value && (
                        <Chip
                            size="md"
                            color="danger"
                            variant="shadow"
                            className="text-white"
                        >
                            غیرفعال
                        </Chip>
                    )}
                </div>
            )
        },
    },
]

export const identityListContext = {
    apiRoute: "admin/identity",
    table: {
        columns: tableColumns
    }
}