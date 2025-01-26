"use client";

import React, {useEffect, useState} from "react";
import {Tab, Tabs} from "@nextui-org/tabs";
import {CartEmptyNextList} from "@/stories/RahsazStore/Cart/EmptyNextList";
import {Chip} from "@nextui-org/chip";
import {Cart, cartTypesEnum} from "@/interfaces/Cart.interface";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import {Control, UseFormSetValue, UseFormWatch} from "react-hook-form";
import {CartEmptyCurrentList} from "@/stories/RahsazStore/Cart/EmptyCurrentList";
import {CartCurrentList} from "@/stories/RahsazStore/Cart/CurrentList";
import {CartNextList} from "@/stories/RahsazStore/Cart/NextList";


export type CartTabsProps = {
    control: Control<Cart>;
    setValue: UseFormSetValue<Cart>;
    watch: UseFormWatch<Cart>;
}




export const CartTabs = (props: CartTabsProps) => {

    const {
        control,
        setValue,
        watch,
    } = props


    const searchParams = useSearchParams()
    const router = useRouter()
    const pathname = usePathname()


    const type = searchParams.get("type") as cartTypesEnum
    const uu = new URLSearchParams(searchParams)


    const products = watch("products")
    const nextList = watch("nextList")

    const productsCount = products?.length || 0
    const nextListCount = nextList?.length || 0



    return (
        <div>
            <Tabs
                fullWidth
                variant="light"
                color="primary"
                size="lg"
                classNames={{panel: "p-4", base: "sticky top-0 pt-4 pb-2 px-4 z-20 bg-white"}}
                selectedKey={type}
                onSelectionChange={(key) => {
                    uu.set("type", key.toString())
                    router.push(pathname + "?" + uu.toString())
                }}
            >
                <Tab
                    key="current"
                    title={(
                        <div className="flex items-center gap-2">
                            <span>سبد خرید</span>
                            <Chip
                                size="md"
                                radius="full"
                                variant="solid"
                                className="bg-black/20 text-white p-0 aspect-square"
                                classNames={{content: "flex justify-center items-center"}}
                            >
                                {productsCount}
                            </Chip>
                        </div>
                    )}
                    className="flex flex-col gap-4"
                >
                    {(productsCount === 0) && <CartEmptyCurrentList/>}
                    {(productsCount > 0) && <CartCurrentList list={products}/>}
                </Tab>
                <Tab
                    key="next"
                    title={(
                        <div className="flex items-center gap-2">
                            <span>خرید بعدی</span>
                            <Chip
                                size="md"
                                radius="full"
                                variant="solid"
                                className="bg-black/20 text-white p-0 aspect-square"
                                classNames={{content: "flex justify-center items-center"}}
                            >
                                {nextListCount}
                            </Chip>
                        </div>
                    )}
                    className="flex flex-col gap-4"
                >
                    {(nextListCount === 0) && <CartEmptyNextList/>}
                    {(nextListCount > 0) && <CartNextList list={nextList}/>}
                </Tab>
            </Tabs>

        </div>
    );
};

