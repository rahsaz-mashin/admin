"use client"

import React from "react";
import {Card, CardBody} from "@nextui-org/card";

export type CartSummaryBoxProps = {}


export const CartSummaryBox = (
    {}
        :
        CartSummaryBoxProps
) => {


    return (
        <Card shadow="sm" className="mb-5">
            <CardBody>
                <ul className="text-sm flex flex-col gap-1.5 text-black">
                    <li className="flex flex-row justify-between">
                        <span>
                            قیمت کالاها:
                        </span>
                        <span className="font-bold">
                            70,000,000
                            {" "}
                            تومانءء
                        </span>
                    </li>
                    <li className="flex flex-row justify-between">
                        <span>
                            هزینه ارسال:
                        </span>
                        <span className="font-bold">
                            پس کرایه
                        </span>
                    </li>
                    <li className="flex flex-row justify-between">
                        <span>
                            تخفیف کالاها:
                        </span>
                        <span className="font-bold">
                            10,000,000
                            {" "}
                            تومانءء
                        </span>
                    </li>
                    <li className="flex flex-row justify-between">
                        <span>
                            تخفیف روی سفارش:
                        </span>
                        <span className="font-bold">
                            2,000,000
                            {" "}
                            تومانءء
                        </span>
                    </li>
                    <li className="flex flex-row justify-between text-success">
                        <span>
                            مجموع سود شما از این خرید:
                        </span>
                        <span className="font-bold">
                            12,000,000
                            {" "}
                            تومانءء
                        </span>
                    </li>
                    <li className="flex flex-row justify-between">
                        <span>
                            قابل پرداخت:
                        </span>
                        <span className="font-bold">
                            58,000,000
                            {" "}
                            تومانءء
                        </span>
                    </li>
                </ul>
            </CardBody>
        </Card>
    );
};


