import React from "react";
import {Card, CardHeader, CardBody} from "@nextui-org/card";
import {Button, Divider} from "@nextui-org/react";

export type CartPendingOrdersProps = {}


export const CartPendingOrders = (
    {}
        :
        CartPendingOrdersProps
) => {

    const orders = [
        {
            id: 1078,
            price: 10578000,

        }
    ]


    return (
        <Card shadow="sm">
            <CardHeader className="font-bold text-sm text-gray-500">
                شما 2 سفارش در انتظار پرداخت دارید:
            </CardHeader>
            <CardBody>
                <ul className="flex flex-col gap-4">
                    <PendingOrderItem/>
                    <Divider/>
                    <PendingOrderItem/>
                </ul>
            </CardBody>
        </Card>
    );
};


export const PendingOrderItem = () => {
    return (
        <li className="flex flex-col gap-2 text-sm text-gray-500 text-start">
            <div className="flex justify-between gap-4">
                <div className="flex items-center gap-1">
                    <span className="truncate">شماره سفارش:</span>
                    <span className="text-primary">1078</span>
                </div>
                <div className="flex items-center gap-1">
                    <span className="truncate">مبلغ:</span>
                    <span className="text-primary">11,448,000تومانءء</span>
                </div>
            </div>
            <div className="text-red-500 text-justify">
                سفارش شما در صورت عدم پرداخت، تا 21 ساعت دیگر لغو خواهد شد
            </div>
            <div className="flex gap-2 justify-end">
                <Button
                    size="sm"
                    color="default"
                    variant="solid"
                >
                    جزئیات
                </Button>
                <Button
                    size="sm"
                    color="primary"
                    variant="shadow"
                >
                    پرداخت
                </Button>
            </div>
        </li>
    )
}