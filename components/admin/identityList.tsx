import {ColumnType} from "@/stories/RahsazAdmin/TableList";
import {Chip} from "@nextui-org/react";
import {Identity, identityTypesEnum} from "@/interfaces/Identity.interface";
import {Verified} from "@mui/icons-material";
import {IdentityCategory} from "@/interfaces/IdentityCategory.interface";
import {IdentityGrade} from "@/interfaces/IdentityGrade.interface";
import {IdentityPhoneNumber} from "@/interfaces/IdentityPhoneNumber.interface";
import Link from "next/link";
import {Account} from "@/interfaces/Account.interface";


type T = Identity


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
        key: "title",
        title: "عنوان",
        minWidth: 200,
        align: "start",
        render: (value: string | null, ctx) => {
            return (
                <div className="flex flex-col gap-3 items-start justify-center">
                    <div className="flex flex-row gap-2 items-center">
                        {ctx.isVerified
                            ?
                            (<Verified className="text-blue-500 text-base"/>)
                            :
                            (<Verified className="text-gray-200 text-base"/>)
                        }
                        {ctx.identityType === identityTypesEnum.real && (
                            <span className="font-bold text-lg">
                                {ctx.firstName + " " + ctx.lastName}
                            </span>
                        )}
                        {ctx.identityType === identityTypesEnum.legal && (
                            <span className="font-bold text-lg">
                                {ctx.legalName}
                            </span>
                        )}
                        {ctx.identityType === identityTypesEnum.legal && (
                            <span className="font-light text-sm">
                                ({ctx.tradeMark})
                            </span>
                        )}
                    </div>
                    {ctx.identityType === identityTypesEnum.real
                        ?
                        (<Chip color="primary" size="sm" variant="flat">حقیقی</Chip>)
                        :
                        (<Chip color="secondary" size="sm" variant="flat">حقوقی</Chip>)
                    }
                </div>
            )
        },
    },
    {
        key: "grade",
        title: "سطح",
        width: 200,
        minWidth: 200,
        render: (value: IdentityGrade, ctx) => {
            return (
                <div className="flex gap-2 items-center">
                    {!value && (
                        <Chip size="md" variant="shadow" color="default">
                            نامشخص
                        </Chip>
                    )}
                    {!!value && (
                        <Chip
                            size="md"
                            variant="shadow"
                            color="primary"
                        >
                            {value?.title}
                        </Chip>
                    )}
                </div>
            )
        },
    },
    {
        key: "categories",
        title: "دسته بندی",
        width: 200,
        minWidth: 200,
        render: (value: IdentityCategory[], ctx) => {
            return (
                <div className="flex gap-2 items-center">
                    {!value?.length && (
                        <Chip size="md" variant="shadow" color="default">
                            نامشخص
                        </Chip>
                    )}
                    {value?.map((v, idx) => {
                        return (
                            <Chip
                                key={v.id}
                                size="md"
                                variant="shadow"
                                color="secondary"
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
        key: "phones",
        title: "تماس",
        minWidth: 220,
        width: 220,
        align: "start",
        render: (value: IdentityPhoneNumber[] | null, ctx) => {
            if (!value?.length) {
                return (
                    <Chip size="md" variant="shadow" color="default">
                        ثبت نشده
                    </Chip>
                )
            }
            return (
                <div className="flex flex-col items-start justify-center gap-2">
                    {value?.map((v, idx) => {
                        return (
                            <Link key={v.id} href={`tel:${v.value}`}>
                                <Chip
                                    key={v.id}
                                    size="lg"
                                    variant="shadow"
                                    color="primary"
                                    startContent={(
                                        <Chip
                                            size="sm"
                                            variant="flat"
                                            color="default"
                                            className="text-white"
                                            endContent=":"
                                        >
                                            {v.type?.title}
                                        </Chip>
                                    )}
                                    endContent={
                                        v.internal
                                            ?
                                            (
                                                <Chip
                                                    key={v.id}
                                                    size="sm"
                                                    variant="flat"
                                                    color="default"
                                                    className="text-white"
                                                >
                                                    داخلی:
                                                    {v.internal}
                                                </Chip>
                                            )
                                            :
                                            undefined
                                    }
                                >
                                <span dir="ltr">
                                    {v.value}
                                </span>
                                </Chip>
                            </Link>
                        )
                    })}
                </div>
            )
        },
    },
    {
        key: "account",
        title: "اکانت متصل",
        width: 200,
        minWidth: 200,
        render: (value: Account | null, ctx) => {
            return (
                <div className="flex gap-2 items-center">
                    {!value && (
                        <Chip size="md" variant="shadow" color="default">
                            متصل نیست
                        </Chip>
                    )}
                    {!!value && (
                        <Chip size="md" variant="shadow" color="success">
                            شناسه: {value?.id}
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