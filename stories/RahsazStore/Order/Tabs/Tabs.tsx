"use client";

import React from "react";
import {Tab, Tabs} from "@nextui-org/tabs";
import {Chip} from "@nextui-org/chip";
import {OrderList} from "@/stories/RahsazStore/Order/OrderList";
import {OrderEmptyList} from "@/stories/RahsazStore/Order/EmptyList";

export type OrderTabsProps = {}


export const OrderTabs = (props: OrderTabsProps) => {


    return (
        <div>
            <Tabs
                fullWidth
                aria-label="Options"
                variant="light"
                color="primary"
                size="lg"
                classNames={{panel: "p-4", base: "sticky top-0 pt-4 pb-0 px-4 z-10 bg-white"}}
                selectedKey={"current"}
            >
                <Tab
                    key="current"
                    title={(
                        <div className="flex items-center gap-2">
                            <span>جاری</span>
                            <Chip size="lg" radius="full" variant="solid" className="bg-black/20 text-white">4</Chip>
                        </div>
                    )}
                    className="flex flex-col gap-4"
                >
                    <OrderEmptyList status="current"/>
                    <OrderList/>
                </Tab>
                <Tab
                    key="delivered"
                    title={(
                        <div className="flex items-center gap-2">
                            <span>تحویل شده</span>
                            <Chip size="lg" radius="full" variant="solid" className="bg-black/20 text-white">4</Chip>
                        </div>
                    )}
                    className="flex flex-col gap-4"
                >
                    <OrderEmptyList status="delivered"/>
                </Tab>
                <Tab
                    key="returned"
                    title={(
                        <div className="flex items-center gap-2">
                            <span>مرجوع شده</span>
                            <Chip size="lg" radius="full" variant="solid" className="bg-black/20 text-white">4</Chip>
                        </div>
                    )}
                    className="flex flex-col gap-4"
                >
                    <OrderEmptyList status="returned"/>
                </Tab>
                <Tab
                    key="canceled"
                    title={(
                        <div className="flex items-center gap-2">
                            <span>لغو شده</span>
                            <Chip size="lg" radius="full" variant="solid" className="bg-black/20 text-white">4</Chip>
                        </div>
                    )}
                    className="flex flex-col gap-4"
                >
                    <OrderEmptyList status="canceled"/>
                </Tab>
            </Tabs>
        </div>
    );
};

