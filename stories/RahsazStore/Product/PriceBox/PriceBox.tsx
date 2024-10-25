"use client"

import React, {useContext,} from "react";
import {Card, CardBody, CardHeader} from "@nextui-org/card";
import {ContainerDimensionsContext} from "@/context/containerDimensions.context";
import {ProductInventory, ProductPrice} from "@/interfaces/Product.interface";
import {ProductCounter} from "@/stories/RahsazStore/Product/Counter";
import {NumericFormat} from "react-number-format";


export type ProductPriceBoxProps = {
    mobile?: true;
    price?: ProductPrice[];
    inventory?: ProductInventory[];
    isActiveInventoryManagement?: boolean;
    minimumInventoryWarn?: number;
}


export const ProductPriceBox = (props: ProductPriceBoxProps) => {

    const {
        mobile,
        isActiveInventoryManagement,
        minimumInventoryWarn,
        inventory,
        price,
    } = props

    const containerDimensionsContext = useContext(ContainerDimensionsContext)

    const h = containerDimensionsContext?.dimensions?.height


    if (!price?.length) return null

    return (
        <div className="sticky" style={{top: mobile ? undefined : h ? (h - 120) : 0}}>
            <Card shadow="none" radius="none">
                <CardHeader className="flex flex-col p-4 pb-1">
                    <div className="flex items-center justify-between w-full select-none min-h-4">
                        {/*<Chip*/}
                        {/*    variant="solid"*/}
                        {/*    color="danger"*/}
                        {/*    size="sm"*/}
                        {/*>*/}
                        {/*    5%*/}
                        {/*</Chip>*/}
                        {/*<div className="font-bold text-base lg:text-xl flex items-center gap-0.5 text-gray-500">*/}
                        {/*    <span className="line-through">*/}
                        {/*        {"8800000"}*/}
                        {/*    </span>*/}
                        {/*    <span className="text-xs text-transparent">*/}
                        {/*        تومانءء*/}
                        {/*    </span>*/}
                        {/*</div>*/}
                    </div>
                    <div className="flex items-center justify-between w-full">
                        <h5 className="">قیمت برای شما:</h5>
                        <div className="font-bold text-xl lg:text-2xl flex items-center gap-0.5 text-black">
                            <span className="">
                                {price && <NumericFormat
                                    value={price[0].amount || 0}
                                    thousandSeparator=","
                                    decimalSeparator="."
                                    allowNegative={false}
                                    decimalScale={0}
                                    allowLeadingZeros={false}
                                    displayType="text"
                                />}
                            </span>
                            <span className="text-xs text-primary">
                                تومانءء
                            </span>
                        </div>
                    </div>
                </CardHeader>
                <CardBody className="text-start pt-1 gap-2 flex-row items-center select-none">
                    {/*<b className="flex-shrink-0">سطح های قیمتی:</b>*/}
                    {/*<div className="flex items-center gap-3 overflow-y-hidden px-0.5 hide-scrollbar select-none">*/}
                    {/*    {prices.map((v, i) => {*/}
                    {/*        return (*/}
                    {/*            <Chip*/}
                    {/*                key={i}*/}
                    {/*                color="primary"*/}
                    {/*                radius="sm"*/}
                    {/*                variant="flat"*/}
                    {/*                style={{"--pl-text": v.textColor, "--pl-bg": v.bgColor} as CSSProperties}*/}
                    {/*                className={"flex-shrink-0 text-[--pl-text] bg-[--pl-bg]"}*/}
                    {/*            >*/}
                    {/*                <div className="flex items-center gap-0.5 font-bold">*/}
                    {/*                    <span>{v.title}:</span>*/}
                    {/*                    <span>{v.price}</span>*/}
                    {/*                    <span className="text-xs font-normal">*/}
                    {/*                        تومانءء*/}
                    {/*                    </span>*/}
                    {/*                </div>*/}
                    {/*            </Chip>*/}
                    {/*        )*/}
                    {/*    })}*/}
                    {/*</div>*/}
                    <ProductCounter
                        mode="slider"
                        size="md"
                    />
                </CardBody>
            </Card>
        </div>
    );
};
