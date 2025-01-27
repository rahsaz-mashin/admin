"use client"

import React from "react";
import {Card, CardBody} from "@nextui-org/card";
import {WalletItem} from "@/stories/RahsazStore/Wallet/Item";
import {WalletTransaction, walletTransactionStatusesEnum} from "@/interfaces/WalletTransaction.interface";

export type WalletListProps = {
    list: WalletTransaction[];
}


export const WalletList = (props: WalletListProps) => {

    const {
        list
    } = props

    return (
        <Card shadow="sm" className="">
            <CardBody>
                <ul className="flex flex-col gap-2">
                    {list.map((v) => {
                        return (
                            <WalletItem
                                key={v.id}
                                id={v.id || 0}
                                status={v.status}
                                method={v.method}
                                amount={+v.amount}
                                issueDate={v.createdAt}
                            />
                        )
                    })}
                </ul>
            </CardBody>
        </Card>
    );
};


