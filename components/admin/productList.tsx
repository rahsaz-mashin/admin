import {Product} from "@/interfaces/Product.interface";
import {ColumnType} from "@/stories/RahsazAdmin/TableList";
import {Chip} from "@nextui-org/chip";
import {ProductCategory} from "@/interfaces/ProductCategory.interface";
import {ProductMachineModel} from "@/interfaces/ProductMachineModel.interface";


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
                <div className="flex flex-col gap-2">
                    <span>{value}</span>
                    <div className="flex flex-row gap-2 items-center">
                        <span className="font-medium">دیگر نام ها:</span>
                        {ctx?.names?.map((v, idx) => {
                            return (
                                <Chip key={idx} size="sm" variant="flat" color="secondary">
                                    {v}
                                </Chip>
                            )
                        })}
                    </div>
                </div>
            )
        },
    },
    {
        key: "categories",
        title: "دسته بندی",
        minWidth: 240,
        render: (value: ProductCategory[], ctx) => {
            return (
                <div className="flex gap-2 items-center">
                    {value?.map((v, idx) => {
                        return (
                            <Chip key={v.id} size="md" variant="shadow" color="primary">
                                {v.title}
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
        minWidth: 240,
        render: (value: ProductMachineModel[], ctx) => {
            return (
                <div className="flex gap-2 items-center">
                    {value?.map((v, idx) => {
                        return (
                            <Chip key={v.id} size="md" variant="shadow" color="primary">
                                {v.title}
                            </Chip>
                        )
                    })}
                </div>
            )
        },
    },
]

export const productListContext = {
    apiRoute: "product",
    table: {
        columns: tableColumns
    }
}