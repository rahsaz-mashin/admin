import {Product, ProductFeaturesList} from "@/interfaces/Product.interface";
import {ColumnType} from "@/stories/RahsazAdmin/TableList";
import {Chip, Image} from "@nextui-org/react";
import {ProductCategory} from "@/interfaces/ProductCategory.interface";
import {ProductMachineModel} from "@/interfaces/ProductMachineModel.interface";
import {ProductFeaturesCategory} from "@/interfaces/ProductFeaturesCategory.interface";
import {ProductFeatures} from "@/interfaces/ProductFeatures.interface";
import NextImage from "next/image";


type T = Product


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
        minWidth: 280,
        render: (value, ctx) => {
            return (
                <div className="flex flex-row gap-5 items-center">
                    <div className="w-24 h-24">
                        <Image
                            as={NextImage}
                            width={100}
                            height={100}
                            alt={ctx.thumbnail?.alt}
                            title={ctx.thumbnail?.title}
                            src={`${ctx.thumbnail ? (ctx.thumbnail.system.baseUrl + "/" + ctx.thumbnail?.path) : ""}`}
                            radius="md"
                            loading="eager"
                            className="object-fill !h-full !w-full"
                            classNames={{wrapper: "h-full w-full bg-contain bg-center"}}
                            fallbackSrc="/fallback.png"
                        />
                    </div>
                    <div className="flex flex-col gap-3">
                        <span className="font-bold text-base">{value}</span>
                        <div className="flex flex-row gap-2 items-center">
                            <span className="font-medium truncate">دیگر نام ها:</span>
                            {!ctx?.names?.length && "-"}
                            {ctx?.names?.map((v, idx) => {
                                return (
                                    <Chip key={idx} size="sm" variant="flat" color="secondary">
                                        {v}
                                    </Chip>
                                )
                            })}
                        </div>
                        <div className="flex flex-row gap-2 items-center">
                            <span className="font-medium truncate">برچسب ها:</span>
                            {!ctx?.tags?.length && "-"}
                            {ctx?.tags?.map((v, idx) => {
                                return (
                                    <Chip key={idx} size="sm" variant="flat" color="primary">
                                        {v}
                                    </Chip>
                                )
                            })}
                        </div>
                    </div>
                </div>
            )
        },
    },
    {
        key: "categories",
        title: "دسته بندی",
        width: 200,
        minWidth: 200,
        render: (value: ProductCategory[], ctx) => {
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
                                startContent={(
                                    <Chip size="sm" variant="light" color="default"
                                          className="text-white after:content-[':']">
                                        {v.parent?.title}
                                    </Chip>
                                )}
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
        key: "machinery",
        title: "ماشین آلات",
        width: 200,
        minWidth: 200,
        render: (value: ProductMachineModel[], ctx) => {
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
                                startContent={(
                                    <Chip size="sm" variant="light" color="default"
                                          className="text-white after:content-[':']">
                                        {v.brand?.title}
                                    </Chip>
                                )}
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
        key: "features",
        title: "ویژگی ها",
        width: 200,
        minWidth: 200,
        render: (value: ProductFeaturesList[], ctx) => {
            return (
                <div className="flex gap-2 items-center">
                    {!value?.length && (
                        <Chip size="md" variant="shadow" color="default">
                            بدون ویژگی
                        </Chip>
                    )}
                    {value?.map((v, idx) => {
                        return (
                            <Chip
                                key={v.id}
                                size="md"
                                variant="shadow"
                                color="primary"
                                startContent={(
                                    <Chip size="sm" variant="light" color="default"
                                          className="text-white after:content-[':']">
                                        {(v.category as ProductFeaturesCategory)?.title}
                                    </Chip>
                                )}
                            >
                                {(v.value as ProductFeatures)?.title}
                            </Chip>
                        )
                    })}
                </div>
            )
        },
    },
]

export const productListContext = {
    apiRoute: "admin/product",
    table: {
        columns: tableColumns
    }
}