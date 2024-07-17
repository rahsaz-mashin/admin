"use client";

import React from "react";
import {Tab, Tabs} from "@nextui-org/tabs";
import {CartEmptyCurrentList} from "@/stories/RahsazStore/Cart/EmptyCurrentList";
import {CartEmptyNextList} from "@/stories/RahsazStore/Cart/EmptyNextList";
import {CartCurrentList} from "@/stories/RahsazStore/Cart/CurrentList";
import {Chip} from "@nextui-org/chip";
import {CartDeliveryTypeBox} from "@/stories/RahsazStore/Cart/DeliveryTypeBox";

export type CartTabsProps = {}


export const CartTabs = (
    {}
        :
        CartTabsProps
) => {


    return (
        <div>
            <Tabs
                fullWidth
                aria-label="Options"
                variant="light"
                color="primary"
                size="lg"
                classNames={{panel: "py-2"}}
            >
                <Tab
                    key="current"
                    title={(
                        <div className="flex items-center gap-2">
                            <span>سبد خرید</span>
                            <Chip size="lg" radius="full" variant="solid" className="bg-black/20 text-white">9</Chip>
                        </div>
                    )}
                >
                    {/*<CartEmptyCurrentList/>*/}

                    <CartCurrentList/>
                    <CartDeliveryTypeBox/>
                </Tab>
                <Tab
                    key="next"
                    title={(
                        <div className="flex items-center gap-2">
                            <span>خرید بعدی</span>
                            <Chip size="lg" radius="full" variant="solid" className="bg-black/20 text-white">4</Chip>
                        </div>
                    )}
                >
                    <CartEmptyNextList/>
                </Tab>
            </Tabs>
        </div>
    );
};

