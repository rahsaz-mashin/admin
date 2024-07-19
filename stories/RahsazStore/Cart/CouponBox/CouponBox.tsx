"use client"

import React, {useState} from "react";
import {Card, CardHeader, CardBody} from "@nextui-org/card";
import clsx from "clsx";
import {Button} from "@nextui-org/react";
import {Input} from "@nextui-org/input";

export type CartCouponBoxProps = {}


export const CartCouponBox = (
    {}
        :
        CartCouponBoxProps
) => {


    return (
        <Card shadow="none" radius="none">
            <CardHeader
                className="text-white bg-primary py-2 w-fit font-light text-base rounded-tr-2xl relative after:absolute after:bg-primary after:-end-12 after:h-full after:w-12 after:rounded-tl-[10rem]"
            >
                کد تخفیف
            </CardHeader>
            <CardBody className="border border-primary rounded-2xl rounded-tr-none gap-2 text-start">
                <span className="text-gray-500 text-sm font-light">
                    در صورتیکه کد تخفیف دارید می توانید آن را وارد کنید!
                </span>
                <div className="flex gap-2 items-center">
                    <Input
                        dir="ltr"
                        size="lg"
                    />
                    <Button
                        color="primary"
                        variant="shadow"
                        size="lg"
                    >
                        اعمال
                    </Button>
                </div>
            </CardBody>
        </Card>
    );
};


export type CartPaymentWayItemProps = {
    title: string;
    description: string;
    icon: string;
    isSelected: boolean;
    handleSwitch: () => void
}


export const CartPaymentWayItem = (props: CartPaymentWayItemProps) => {
    const {title, description, icon, isSelected, handleSwitch} = props
    return (
        <Card
            shadow="sm"
            isHoverable
            isPressable
            onPress={() => handleSwitch()}
            className={clsx("flex flex-row flex-shrink-0 justify-start items-center p-4 group gap-4 text-sm bg-white hover:bg-primary/20 transition h-36 rounded-xl cursor-pointer text-gray-500 text-center", isSelected ? "bg-primary/20 isSelected" : "")}
        >
            <i dangerouslySetInnerHTML={{__html: icon}}/>
            <div className="flex flex-col gap-1 items-start">
                <span
                    className="font-bold transition group-[.isSelected]:text-primary group-hover:text-primary"
                >
                {title}
            </span>
                <span className="font-light">
                    {description}
                </span>
            </div>
        </Card>
    )
}
