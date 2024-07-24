"use client"

import React from "react";
import {Card, CardBody} from "@nextui-org/card";
import {WalletItem} from "@/stories/RahsazStore/Wallet/Item";

export type WalletListProps = {}


export const WalletList = (props: WalletListProps) => {


    return (
        <Card shadow="sm" className="">
            <CardBody>
                <ul className="flex flex-col gap-2">
                    <WalletItem
                        isConfirmed
                        type="cheque"
                    />
                    <WalletItem
                        isConfirmed
                        type="order"
                    />
                    <WalletItem
                        type="cheque"
                    />
                    <WalletItem
                        isRejected
                        type="bank"
                    />

                </ul>
            </CardBody>
        </Card>
    );
};


