import React from "react";
import {Card, CardHeader, CardBody} from "@nextui-org/card";
import {Button, Divider} from "@nextui-org/react";
import {MoreVert} from "@mui/icons-material";
import {CartProduct} from "@/stories/RahsazStore/Cart/Product";

export type CartCurrentListProps = {}


export const CartCurrentList = (
    {}
        :
        CartCurrentListProps
) => {


    return (
        <>
        <div className="text-sm text-gray-500 px-2 w-full">
            <span className="text-justify w-full block">هزینه این سفارش هنوز پرداخت نشده‌ و در صورت اتمام موجودی، کالاها از سبد حذف می‌شوند.</span>
        </div>
        <Card>
            <CardHeader className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                    <h6 className="">سبد خرید شما</h6>
                    <span className="">(9)</span>
                </div>
                <Button
                    size="sm"
                    variant="light"
                    radius="full"
                    isIconOnly
                >
                    <MoreVert/>
                </Button>
            </CardHeader>
            <Divider/>
            <CardBody className="flex flex-col justify-stretch items-stretch text-center gap-3 min-h-60">
                <ul className="flex flex-col">
                    <CartProduct/>
                    <Divider />
                    <CartProduct/>
                </ul>
            </CardBody>
        </Card>
        </>
    );
};

