"use client"

import React from "react";
import {Card, CardHeader, CardBody} from "@nextui-org/card";
import {Button, CardFooter, Chip, Divider, Image} from "@nextui-org/react";
import NextImage from "next/image";
import {ArrowLeftIcon} from "@storybook/icons";
import {ProductCounter} from "@/stories/RahsazStore/Product/Counter";
import {Product} from "@/interfaces/Product.interface";
import {NumericFormat} from "react-number-format";
import {ProductFeatures} from "@/interfaces/ProductFeatures.interface";
import {ProductFeaturesCategory} from "@/interfaces/ProductFeaturesCategory.interface";
import {toast} from "@/lib/toast";
import {axiosCoreWithAuth} from "@/lib/axios";

export type CartProductItemProductProps = {
    readonly id?: number;
    product: Product;
    count: number;
    amount: number;
    isNextList?: false;
}

export type CartProductItemNextListProps = {
    readonly id?: number;
    product: Product;
    isNextList: true;
}

export type CartProductItemProps = CartProductItemProductProps | CartProductItemNextListProps

export const CartProductItem = (props: CartProductItemProps) => {

    const {
        id: cartProductId,
        product,
        isNextList,
    } = props

    const {
        id,
        title,
        slug,
        names,
        intro,
        thumbnail,
        machinery,
        categories,
        features,
    } = product


    const axios = axiosCoreWithAuth()

    const onCountChange = async (count: number) => {
        try {
            await axios.patch(`/store/cart/product/countChange/${cartProductId}`, {count})
        } catch (e) {
            toast.error("برای تغییر تعداد کالا، خطایی رخ داد")
        }
    }

    const onRemove = async () => {
        try {
            await axios.delete(`/store/cart/product/remove/${cartProductId}`)
        } catch (e) {
            if (isNextList) toast.error("برای حذف کالا از لیست خرید بعدی، خطایی رخ داد")
            else toast.error("برای حذف کالا از سبد، خطایی رخ داد")
        }
    }

    const onMoveToNext = async () => {
        try {
            await axios.patch(`/store/cart/product/moveToNext/${cartProductId}`)
        } catch (e) {
            toast.error("برای انتقال کالا از سبد، خطایی رخ داد")
        }
    }

    const onMoveToCart = async () => {
        try {
            await axios.patch(`/store/cart/product/moveToCart/${cartProductId}`)
        } catch (e) {
            toast.error("برای انتقال کالا از لیست خرید بعدی، خطایی رخ داد")
        }
    }

    return (
        <li>
            <Card className="w-full" shadow="none">
                <CardBody className="flex flex-row gap-2 text-start">
                    <div className="flex-0 flex flex-col flex-shrink-0 items-center gap-2 w-36 relative">
                        {/* image */}
                        <div className="w-36 h-36">
                            <Image
                                as={NextImage}
                                width={300}
                                height={300}
                                alt={thumbnail?.alt}
                                title={thumbnail?.title}
                                src={`${thumbnail ? (thumbnail.system.baseUrl + "/" + thumbnail?.path) : ""}`}
                                radius="md"
                                loading="eager"
                                className="object-fill !h-full !w-full"
                                classNames={{wrapper: "h-full w-full bg-contain bg-center"}}
                                fallbackSrc="/fallback.png"
                            />
                        </div>
                        {/* price */}

                        {!isNextList && (
                            <div className="flex flex-col">
                                <div className="font-semibold flex gap-0.5 items-end">
                                <span className="text-xl">
                                    <NumericFormat
                                        value={props.amount}
                                        thousandSeparator=","
                                        decimalSeparator="."
                                        allowNegative={false}
                                        decimalScale={0}
                                        allowLeadingZeros={false}
                                        displayType="text"
                                    />
                                </span>
                                    <span className="text-sm text-primary">
                                    تومانءء
                                </span>
                                </div>
                            </div>
                        )}

                    </div>
                    <div className="flex flex-col flex-1 gap-2">
                        <h3 className="font-bold text-justify text-lg">
                            {title}
                        </h3>
                        {names && (
                            <div className="flex gap-1 text-sm text-gray-500 truncate">
                                <span className="font-bold">نام های دیگر:</span>
                                <div className="flex gap-1.5">
                                    {names.map((name, key) => (
                                        <>
                                            <span key={key} className="hover:text-blue-500">{name}</span>
                                            {(key === (names.length - 1) ? "" : "،")}
                                        </>
                                    ))}
                                </div>
                            </div>
                        )}
                        {features && (
                            <div className="flex gap-2 items-center flex-wrap">
                                {features?.map((v, idx) => {
                                    const {id, category, value} = v
                                    return (
                                        <Chip
                                            key={v.id}
                                            size="md"
                                            variant="flat"
                                            color="primary"
                                            startContent={(
                                                <Chip
                                                    size="sm"
                                                    variant="light"
                                                    color="default"
                                                    className="font-bold after:content-[':']"
                                                >
                                                    {(category as ProductFeaturesCategory)?.title}
                                                </Chip>
                                            )}
                                        >
                                            {(value as ProductFeatures)?.title}
                                        </Chip>
                                    )
                                })}
                            </div>
                        )}
                        {machinery && (
                            <div className="flex gap-2 items-center flex-wrap">
                                {machinery?.map((v, idx) => {
                                    return (
                                        <Chip
                                            key={v.id}
                                            size="md"
                                            variant="flat"
                                            color="secondary"
                                            startContent={(
                                                <Chip
                                                    size="sm"
                                                    variant="light"
                                                    color="default"
                                                    className="font-bold after:content-[':']"
                                                >
                                                    {v.brand?.title}
                                                </Chip>
                                            )}
                                        >
                                            {v?.title}
                                        </Chip>
                                    )
                                })}
                            </div>
                        )}
                    </div>
                </CardBody>
                <CardFooter className="flex items-center justify-between">
                    {isNextList && (
                        <ProductCounter
                            mode="normal"
                            size="md"
                            // minimum={0}
                            // maximum={10}
                            count={0}
                            // notAvailable
                            // withoutPrice

                            onRemove={onRemove}
                        />
                    )}
                    {!isNextList && (
                        <ProductCounter
                            mode="normal"
                            size="md"
                            // minimum={0}
                            // maximum={10}
                            count={props.count}
                            // notAvailable
                            // withoutPrice
                            onCountChange={onCountChange}
                            onRemove={onRemove}
                        />
                    )}
                    {isNextList && (
                        <Button
                            color="secondary"
                            variant="light"
                            size="sm"
                            endContent={<ArrowLeftIcon/>}
                            onPress={onMoveToCart}
                        >
                            انتقال به سبد خرید
                        </Button>
                    )}
                    {!isNextList && (
                        <Button
                            color="secondary"
                            variant="light"
                            size="sm"
                            endContent={<ArrowLeftIcon/>}
                            onPress={onMoveToNext}
                        >
                            انتقال به خرید بعدی
                        </Button>
                    )}
                </CardFooter>
            </Card>
        </li>
    );
};