"use client"

import React from "react";
import {Card, CardBody} from "@nextui-org/card";
import {OrderItem} from "@/stories/RahsazStore/Order/OrderItem";
import {Divider} from "@nextui-org/react";

export type OrderListProps = {}


export const OrderList = (props: OrderListProps) => {


    return (
        <Card shadow="sm" className="">
            <CardBody>
                <ul className="flex flex-col gap-1">
                    <OrderItem
                        status="current"
                        step="waitingForPayment"
                    />
                    <Divider/>
                    <OrderItem
                        status="current"
                        step="reserved"
                    />
                    <Divider/>
                    <OrderItem
                        status="current"
                        step="waitingForConfirm"
                    />
                    <Divider/>
                    <OrderItem
                        status="current"
                        step="processing"
                    />
                    <Divider/>
                    <OrderItem
                        status="current"
                        step="readyForDelivery"
                    />
                    <Divider/>
                    <OrderItem
                        status="current"
                        step="sent"
                    />
                    <Divider/>
                    <OrderItem
                        status="delivered"
                        step="completed"
                    />
                    <Divider/>
                    <OrderItem
                        status="return"
                        step="waitingForConfirm"
                    />
                    <Divider/>
                    <OrderItem
                        status="return"
                        step="processing"
                    />
                    <Divider/>
                    <OrderItem
                        status="return"
                        step="completed"
                    />
                    <Divider/>
                    <OrderItem
                        status="canceled"
                        step="completed"
                    />
                </ul>
            </CardBody>
        </Card>
    );
};


