"use client";

import React from "react";
import {Tab, Tabs} from "@nextui-org/tabs";
import {Chip} from "@nextui-org/chip";
import {WalletList} from "@/stories/RahsazStore/Wallet/List";
import {WalletEmptyList} from "@/stories/RahsazStore/Wallet/EmptyList";

export type WalletTabsProps = {}


export const WalletTabs = (props: WalletTabsProps) => {


    return (
        <div>
            <Tabs
                fullWidth
                aria-label="Options"
                variant="light"
                color="primary"
                size="lg"
                classNames={{panel: "p-4", base: "sticky top-0 pt-4 pb-0 px-4 z-10 bg-white"}}
                // selectedKey={"all"}
                defaultSelectedKey="all"
            >
                <Tab
                    key="all"
                    title={(
                        <div className="flex items-center gap-2">
                            <span>همه</span>
                            <Chip size="lg" radius="full" variant="solid" className="bg-black/20 text-white">5</Chip>
                        </div>
                    )}
                    className="flex flex-col gap-4"
                >
                    <WalletEmptyList/>
                    <WalletList/>
                </Tab>
                <Tab
                    key="increase"
                    title={(
                        <div className="flex items-center gap-2">
                            <span>افزایش</span>
                            <Chip size="lg" radius="full" variant="solid" className="bg-black/20 text-white">3</Chip>
                        </div>
                    )}
                    className="flex flex-col gap-4"
                >
                    <WalletEmptyList/>
                </Tab>
                <Tab
                    key="decrease"
                    title={(
                        <div className="flex items-center gap-2">
                            <span>کاهش</span>
                            <Chip size="lg" radius="full" variant="solid" className="bg-black/20 text-white">2</Chip>
                        </div>
                    )}
                    className="flex flex-col gap-4"
                >
                    <WalletEmptyList />
                </Tab>
            </Tabs>
        </div>
    );
};

