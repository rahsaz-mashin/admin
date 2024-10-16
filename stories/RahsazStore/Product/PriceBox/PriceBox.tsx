"use client"

import React, {CSSProperties, useContext, useEffect} from "react";
import {Card, CardBody, CardHeader} from "@nextui-org/card";
import {Chip} from "@nextui-org/react";
import {ContainerDimensionsContext} from "@/context/containerDimensions.context";


export type ProductPriceBoxProps = {
    mobile?: true;
}


export const ProductPriceBox = (props: ProductPriceBoxProps) => {

    const {
        mobile
    } = props

    const containerDimensionsContext = useContext(ContainerDimensionsContext)


    const prices = [
        {
            key: "diamond",
            title: "الماسی",
            textColor: "rgb(178,224,250)",
            bgColor: "rgba(178,224,250,0.2)",
            price: "7000",
        },
        {
            key: "golden",
            title: "طلایی",
            textColor: "rgba(255,181,14,1.0)",
            bgColor: "rgba(255,181,14,0.2)",
            price: "7000",
        },
        {
            key: "contribute",
            title: "همکار",
            textColor: "rgb(255,14,50)",
            bgColor: "rgba(255,14,50,0.2)",
            price: "7000",
        },
        {
            key: "bronze",
            title: "برنزی",
            textColor: "rgb(255,111,40)",
            bgColor: "rgba(255,111,40,0.2)",
            price: "7000",
        },
        {
            key: "silver",
            title: "نقره ای",
            textColor: "rgb(206,206,206)",
            bgColor: "rgba(206,206,206,0.2)",
            price: "7000",
        },
    ]

    const activePrice = "diamond"

    const h = containerDimensionsContext?.dimensions?.height


    return (
        <div className="sticky" style={{top: mobile ? undefined : h ? (h - 120) : 0}}>
            <Card shadow="none" radius="none">
                <CardHeader className="flex flex-col pb-1">
                    <div className="flex items-center justify-between w-full select-none">
                        <Chip
                            variant="solid"
                            color="danger"
                            size="sm"
                        >
                            5%
                        </Chip>
                        <span className="font-bold text-xl flex items-center gap-0.5 text-gray-500">
                        <span className="line-through">
                            {"8800000"}
                        </span>
                        <span className="text-xs text-transparent">
                            تومانءء
                        </span>
                    </span>
                    </div>
                    <div className="flex items-center justify-between w-full">
                        <h5 className="">قیمت برای شما:</h5>
                        <span className="font-bold text-2xl flex items-center gap-0.5 text-black">
                        <span className="">
                            {"7000000"}
                        </span>
                        <span className="text-xs text-primary">
                            تومانءء
                        </span>
                    </span>
                    </div>
                </CardHeader>
                <CardBody className="text-start pt-1 gap-2 flex-row items-center select-none">
                    <b className="flex-shrink-0">سطح های قیمتی:</b>
                    <div className="flex items-center gap-3 overflow-y-hidden px-0.5 hide-scrollbar select-none">
                        {prices.map((v, i) => {
                            return (
                                <Chip
                                    key={i}
                                    color="primary"
                                    radius="sm"
                                    variant="flat"
                                    style={{"--pl-text": v.textColor, "--pl-bg": v.bgColor} as CSSProperties}
                                    className={"flex-shrink-0 text-[--pl-text] bg-[--pl-bg]"}
                                >
                                    <div className="flex items-center gap-0.5 font-bold">
                                        <span>{v.title}:</span>
                                        <span>{v.price}</span>
                                        <span className="text-xs font-normal">
                                            تومانءء
                                        </span>
                                    </div>
                                </Chip>
                            )
                        })}
                    </div>
                </CardBody>
            </Card>
        </div>
    );
};
