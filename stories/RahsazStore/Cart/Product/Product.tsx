"use client"

import React from "react";
import {Card, CardHeader, CardBody} from "@nextui-org/card";
import {Button, CardFooter, Divider, Image} from "@nextui-org/react";
import NextImage from "next/image";
import {ArrowLeftIcon} from "@storybook/icons";
import {ProductCounter} from "@/stories/RahsazStore/Product/Counter";

export type CartProductProps = {}


export const CartProduct = (
    {}
        :
        CartProductProps
) => {


    return (
        <li>
            <Card shadow="none" radius="none">
                <CardBody className="flex flex-row gap-2 text-start">
                    <div className="flex-0 flex flex-col flex-shrink-0 items-center gap-2 w-32 relative">
                        <Image
                            as={NextImage}
                            // fill
                            src="https://dkstatics-public.digikala.com/digikala-content-x-profile/2fbff525e29363c4e05743df82c9ec7acba99599_1715614714.jpg?x-oss-process=image/resize,m_lfit,h_150,w_150/quality,q_80"
                            alt="NextUI hero Image"
                            width={200}
                            height={200}
                            // classNames={{wrapper: "h-40 w-40"}}
                            // classNames={{s}}
                        />
                        <div className="flex flex-col">
                            <div className="text-red-500 font-light">
                                <span className="">10,000تومانءء</span>
                                {" "}
                                <span>تخفیف</span>
                            </div>
                            <div className="font-semibold">
                                <span className="text-xl">70,000,000</span>
                                <span className="text-sm text-primary">تومانءء</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col flex-1 gap-2">
                        <h3 className="font-bold text-justify text-lg">
                            کولر روغن موتور شانگهای دیزل هزار سوراخ دو سربوش
                        </h3>
                        <ul className="flex flex-col text-gray-500 text-sm font-bold">
                            <li className="flex gap-1">
                                <span>ساخت:</span>
                                <span>ژاپن</span>
                            </li>
                            <li className="flex gap-1">
                                <span>مدل:</span>
                                <span>اصل</span>
                            </li>
                        </ul>
                    </div>
                </CardBody>
                <CardFooter className="flex items-center justify-between">
                    <ProductCounter/>
                    <Button
                        color="secondary"
                        variant="light"
                        size="sm"
                        endContent={<ArrowLeftIcon/>}
                    >
                        انتقال به خرید بعدی
                    </Button>
                </CardFooter>
            </Card>
        </li>
    );
};