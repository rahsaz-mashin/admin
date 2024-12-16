"use client"

import React from "react";
import {Card, CardBody, CardFooter} from "@nextui-org/react";
import {ProductCategory} from "@/interfaces/ProductCategory.interface";
import {ProductMachineBrand} from "@/interfaces/ProductMachineBrand.interface";
import Link from "next/link";


export type ProductCategoryShortcutProps = {
    categories: ProductCategory[];
    machineBrands: ProductMachineBrand[];
}


export const ProductCategoryShortcut = (props: ProductCategoryShortcutProps) => {

    const {
        categories,
        machineBrands
    } = props

    return (
        <>
            <div className="relative w-full flex justify-center">
                <div className="absolute -top-[50px] -start-[50px] fill-primary/25">
                    <svg
                        height="280"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        className="-rotate-[15deg]"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M2 6.63415C2 4.07478 4.07478 2 6.63415 2C9.19351 2 11.2683 4.07478 11.2683 6.63415C11.2683 9.19351 9.19351 11.2683 6.63415 11.2683C4.07478 11.2683 2 9.19351 2 6.63415Z"
                        />
                        <path
                            opacity="0.5"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12.7324 17.3661C12.7324 14.8067 14.8072 12.7319 17.3666 12.7319C19.9259 12.7319 22.0007 14.8067 22.0007 17.3661C22.0007 19.9254 19.9259 22.0002 17.3666 22.0002C14.8072 22.0002 12.7324 19.9254 12.7324 17.3661Z"
                        />
                        <path
                            d="M2 17.5C2 15.3787 2 14.318 2.65901 13.659C3.31802 13 4.37868 13 6.5 13C8.62132 13 9.68198 13 10.341 13.659C11 14.318 11 15.3787 11 17.5C11 19.6213 11 20.682 10.341 21.341C9.68198 22 8.62132 22 6.5 22C4.37868 22 3.31802 22 2.65901 21.341C2 20.682 2 19.6213 2 17.5Z"
                        />
                        <path
                            opacity="0.5"
                            d="M13 6.5C13 4.37868 13 3.31802 13.659 2.65901C14.318 2 15.3787 2 17.5 2C19.6213 2 20.682 2 21.341 2.65901C22 3.31802 22 4.37868 22 6.5C22 8.62132 22 9.68198 21.341 10.341C20.682 11 19.6213 11 17.5 11C15.3787 11 14.318 11 13.659 10.341C13 9.68198 13 8.62132 13 6.5Z"
                        />
                    </svg>
                </div>
                <div className="absolute -bottom-[70px] -end-[70px] fill-secondary/25">
                    <svg
                        height="320"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g opacity="0.5">
                            <path
                                d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
                            />
                        </g>
                        <path
                            d="M9.67217 17.5318L11.1967 14.8913C10.7001 14.7536 10.2553 14.4915 9.89804 14.1406L8.37377 16.7807C8.77077 17.0823 9.2065 17.3356 9.67217 17.5318Z"
                        />
                        <path
                            d="M6.0464 12.7499H9.09446C9.0328 12.5102 9 12.259 9 12.0001C9 11.741 9.03283 11.4896 9.09456 11.2499H6.04644C6.01579 11.4956 6 11.746 6 12.0001C6 12.254 6.01577 12.5042 6.0464 12.7499Z"
                        />
                        <path
                            d="M8.37388 7.21935L9.89814 9.85945C10.2555 9.50856 10.7003 9.24643 11.1968 9.10879L9.6723 6.46828C9.20662 6.66447 8.77089 6.91775 8.37388 7.21935Z"
                        />
                        <path
                            d="M12.8031 9.10877L14.3276 6.46826C14.7933 6.66445 15.2291 6.91772 15.6261 7.21931L14.1018 9.85941C13.7445 9.50852 13.2997 9.2464 12.8031 9.10877Z"
                        />
                        <path
                            d="M14.9055 12.7499C14.9672 12.5102 15 12.259 15 12.0001C15 11.741 14.9672 11.4896 14.9054 11.2499H17.9536C17.9842 11.4956 18 11.746 18 12.0001C18 12.254 17.9842 12.5042 17.9536 12.7499H14.9055Z"
                        />
                        <path
                            d="M12.8034 14.8913C13.3 14.7536 13.7447 14.4914 14.102 14.1405L15.6263 16.7806C15.2293 17.0822 14.7936 17.3355 14.3279 17.5317L12.8034 14.8913Z"
                        />
                    </svg>

                </div>
                <div
                    className="w-full flex flex-col justify-center items-center self-center max-w-6xl px-4 select-none"
                >
                    <h3 className="text-primary font-bold text-xl md:text-2xl text-center w-full py-1">
                        چی لازم داری؟
                    </h3>
                    <div
                        className="relative w-full gap-4 grid grid-cols-1 us:grid-cols-2 xs:grid-cols-3 md:grid-cols-4 lg:grid-cols-8"
                    >
                        {categories.map((v, i) => {
                            return (
                                <Card
                                    key={v.id}
                                    isPressable
                                    isHoverable
                                    shadow="none"
                                    radius="none"
                                    className="bg-transparent items-center hover:bg-transparent"
                                    as={Link}
                                    href={`/category/${v.slug}`}
                                >
                                    <CardBody className="flex items-center justify-center overflow-hidden w-14 h-14">
                                        {v.icon && (
                                            <i
                                                className="w-12 h-12"
                                                dangerouslySetInnerHTML={{__html: v.icon?.content}}
                                            />
                                        )}
                                    </CardBody>
                                    <CardFooter
                                        className="font-bold text-center truncate bg-primary text-white w-fit flex items-center justify-center py-1 px-1.5"
                                    >
                                        {v.title}
                                    </CardFooter>
                                </Card>
                            )
                        })}
                    </div>
                    {/**/}
                    <div className="mb-8"/>
                    {/**/}
                    <h3 className="text-secondary font-bold text-xl md:text-2xl text-center w-full py-1">
                        برند ماشینت چیه؟
                    </h3>
                    <div
                        className="w-full gap-4 grid grid-cols-1 us:grid-cols-2 xs:grid-cols-3 md:grid-cols-4 lg:grid-cols-8"
                    >
                        {machineBrands.map((v, i) => {
                            return (
                                <Card
                                    key={v.id}
                                    isPressable
                                    isHoverable
                                    shadow="none"
                                    radius="none"
                                    className="bg-transparent items-center hover:bg-transparent"
                                    as={Link}
                                    href={`/machine/${v.slug}`}
                                >
                                    <CardBody className="flex items-center justify-center overflow-hidden w-12 h-12">
                                        {v.icon && (
                                            <i
                                                className="w-12 h-12"
                                                dangerouslySetInnerHTML={{__html: v.icon?.content}}
                                            />
                                        )}
                                    </CardBody>
                                    <CardFooter
                                        className="font-bold text-center truncate bg-secondary text-white w-fit flex items-center justify-center py-1 px-1.5"
                                    >
                                        {v.title}
                                    </CardFooter>
                                </Card>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};
