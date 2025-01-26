"use client"

import React from "react";
import {Card, CardBody} from "@nextui-org/card";
import {NumericFormat} from "react-number-format";
import {Control, UseFormSetValue, UseFormWatch} from "react-hook-form";
import {Cart} from "@/interfaces/Cart.interface";

export type CartSummaryBoxProps = {
    control: Control<Cart>;
    setValue: UseFormSetValue<Cart>;
    watch: UseFormWatch<Cart>;
}

export const CartSummaryBox = (props: CartSummaryBoxProps) => {

    const {
        control,
        setValue,
        watch,
    } = props

    return (
        <div id="summary" className="flex-shrink-0 p-4">
            <Card shadow="sm" className="mb-5">
                <CardBody>
                    <ul className="text-sm flex flex-col gap-1.5 text-black">
                        <li className="flex flex-row justify-between">
                            <span>
                                قیمت کالاها:
                            </span>
                            <div className="font-bold">
                                <NumericFormat
                                    value={0}
                                    thousandSeparator=","
                                    decimalSeparator="."
                                    allowNegative={false}
                                    decimalScale={0}
                                    allowLeadingZeros={false}
                                    displayType="text"
                                />
                                {" "}
                                <span className="text-sm">
                                    تومانءء
                                </span>
                            </div>
                        </li>
                        <li className="flex flex-row justify-between">
                            <span>
                                هزینه ارسال:
                            </span>
                            <div className="font-bold">
                                <NumericFormat
                                    value={0}
                                    thousandSeparator=","
                                    decimalSeparator="."
                                    allowNegative={false}
                                    decimalScale={0}
                                    allowLeadingZeros={false}
                                    displayType="text"
                                />
                                {" "}
                                <span className="text-sm">
                                    تومانءء
                                </span>
                            </div>
                        </li>
                        <li className="flex flex-row justify-between">
                            <span>
                                تخفیف کالاها:
                            </span>
                            <div className="font-bold">
                                <NumericFormat
                                    value={0}
                                    thousandSeparator=","
                                    decimalSeparator="."
                                    allowNegative={false}
                                    decimalScale={0}
                                    allowLeadingZeros={false}
                                    displayType="text"
                                />
                                {" "}
                                <span className="text-sm">
                                    تومانءء
                                </span>
                            </div>
                        </li>
                        <li className="flex flex-row justify-between">
                            <span>
                                تخفیف روی سفارش:
                            </span>
                            <div className="font-bold">
                                <NumericFormat
                                    value={0}
                                    thousandSeparator=","
                                    decimalSeparator="."
                                    allowNegative={false}
                                    decimalScale={0}
                                    allowLeadingZeros={false}
                                    displayType="text"
                                />
                                {" "}
                                <span className="text-sm">
                                    تومانءء
                                </span>
                            </div>
                        </li>
                        <li className="flex flex-row justify-between text-success">
                            <span>
                                مجموع سود شما از این خرید:
                            </span>
                            <div className="font-bold">
                                <NumericFormat
                                    value={0}
                                    thousandSeparator=","
                                    decimalSeparator="."
                                    allowNegative={false}
                                    decimalScale={0}
                                    allowLeadingZeros={false}
                                    displayType="text"
                                />
                                {" "}
                                <span className="text-sm">
                                    تومانءء
                                </span>
                            </div>
                        </li>
                        <li className="flex flex-row justify-between">
                            <span>
                                قابل پرداخت:
                            </span>
                            <div className="font-bold">
                                <NumericFormat
                                    value={0}
                                    thousandSeparator=","
                                    decimalSeparator="."
                                    allowNegative={false}
                                    decimalScale={0}
                                    allowLeadingZeros={false}
                                    displayType="text"
                                />
                                {" "}
                                <span className="text-sm">
                                    تومانءء
                                </span>
                            </div>
                        </li>
                    </ul>
                </CardBody>
            </Card>
        </div>
    );
};


