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
                classNames={{panel: "p-4", base: "sticky top-0 pt-4 pb-2 px-4 z-20 bg-white"}}
                selectedKey={"current"}
            >
                <Tab
                    key="current"
                    title={(
                        <div className="flex items-center gap-2">
                            <span>سبد خرید</span>
                            <Chip size="lg" radius="full" variant="solid" className="bg-black/20 text-white">9</Chip>
                        </div>
                    )}
                    className="flex flex-col gap-4"
                >
                    {/*<CartEmptyCurrentList/>*/}
                    <CartCurrentList/>
                </Tab>
                <Tab
                    key="next"
                    title={(
                        <div className="flex items-center gap-2">
                            <span>خرید بعدی</span>
                            <Chip size="lg" radius="full" variant="solid" className="bg-black/20 text-white">4</Chip>
                        </div>
                    )}
                    className="flex flex-col gap-4"
                >
                    <CartEmptyNextList/>
                </Tab>
            </Tabs>
        </div>
    );
};

