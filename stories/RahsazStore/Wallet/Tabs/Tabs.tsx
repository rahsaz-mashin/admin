"use client";

import React, {Key, useEffect, useState} from "react";
import {Tab, Tabs} from "@nextui-org/tabs";
import {Chip} from "@nextui-org/chip";
import {WalletEmptyList} from "@/stories/RahsazStore/Wallet/EmptyList";
import {axiosCoreWithAuth} from "@/lib/axios";
import {PaginationResponse} from "@/types/PaginationResponse";
import {WalletTransaction} from "@/interfaces/WalletTransaction.interface";
import useSWR from "swr";
import {Spinner} from "@nextui-org/react";
import {convertFilterToQueryString} from "@/lib/convertFilterObjectToQuery";
import {WalletList} from "@/stories/RahsazStore/Wallet/List";

export type WalletTabsProps = {}

type CountType = {
    all: number;
    increase: number;
    decrease: number;
}

export const WalletTabs = (props: WalletTabsProps) => {

    const {} = props

    const [type, setType] = useState<Key>("all")
    const [count, setCount] = useState<CountType>({
        all: 0,
        increase: 0,
        decrease: 0,
    })
    const axios = axiosCoreWithAuth()
    const getCount = async () => {
        const d: CountType = await axios.get("/store/wallet/transaction/count")
        setCount(d)
    }

    useEffect(() => {
        getCount()
    }, []);

    let filtering = {}
    if (type === "increase") {
        filtering = {order: {$eq: null}}
    }
    if (type === "decrease") {
        filtering = {payment: {$eq: null}}
    }
    const _filtering = convertFilterToQueryString(filtering)


    const {
        data,
        error,
        isLoading,
        isValidating,
        mutate,
    } = useSWR<PaginationResponse<WalletTransaction>>(`/store/wallet/transaction/list?${_filtering}`)


    return (
        <div className="flex flex-col gap-3">
            <Tabs
                fullWidth
                aria-label="Options"
                variant="light"
                color="primary"
                size="lg"
                classNames={{panel: "p-4", base: "sticky top-0 pt-4 pb-0 px-4 z-10 bg-white"}}
                selectedKey={type}
                onSelectionChange={setType}
                defaultSelectedKey="all"
            >
                <Tab
                    key="all"
                    title={(
                        <div className="flex items-center gap-2">
                            <span>همه</span>
                            <Chip
                                size="md"
                                radius="full"
                                variant="solid"
                                className="bg-black/20 text-white p-0 aspect-square"
                                classNames={{content: "flex justify-center items-center"}}
                            >
                                {count.all}
                            </Chip>
                        </div>
                    )}
                    className="flex flex-col gap-4"
                />
                <Tab
                    key="increase"
                    title={(
                        <div className="flex items-center gap-2">
                            <span>افزایش</span>
                            <Chip
                                size="md"
                                radius="full"
                                variant="solid"
                                className="bg-black/20 text-white p-0 aspect-square"
                                classNames={{content: "flex justify-center items-center"}}
                            >
                                {count.increase}
                            </Chip>
                        </div>
                    )}
                    className="flex flex-col gap-4"
                />
                <Tab
                    key="decrease"
                    title={(
                        <div className="flex items-center gap-2">
                            <span>کاهش</span>
                            <Chip
                                size="md"
                                radius="full"
                                variant="solid"
                                className="bg-black/20 text-white p-0 aspect-square"
                                classNames={{content: "flex justify-center items-center"}}
                            >
                                {count.decrease}
                            </Chip>
                        </div>
                    )}
                    className="flex flex-col gap-4"
                />
            </Tabs>
            <div className="p-4">
                {isLoading && (<div className="flex justify-center items-center py-8"><Spinner/></div>)}
                {(!data?.data?.length) && <WalletEmptyList/>}
                {(!!data?.data?.length) && <WalletList list={data?.data}/>}
            </div>
        </div>
    );
};

