import {Product} from "@/interfaces/Product.interface";
import {ColumnType} from "@/stories/RahsazAdmin/TableList";


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
        minWidth: 160,
    },
]

export const productListContext = {
    apiRoute: "product",
    table: {
        columns: tableColumns
    }
}