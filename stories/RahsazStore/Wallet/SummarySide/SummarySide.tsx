"use client"

import React, {useContext} from "react";
import {WalletChart} from "@/stories/RahsazStore/Wallet/Chart";
import {WalletBalanceBox} from "@/stories/RahsazStore/Wallet/BalanceBox";
import {ContainerDimensionsContext} from "@/context/containerDimensions.context";
import {ScrollShadow} from "@nextui-org/react";
import {WalletTransactionDetail} from "@/stories/RahsazStore/Wallet/Detail";

export type SummarySideProps = {
    transactionId?: number;
}


export const SummarySide = (props: SummarySideProps) => {

    const {
        transactionId,
    } = props

    const containerDimensionsContext = useContext(ContainerDimensionsContext)
    const h = containerDimensionsContext?.dimensions?.height

    return (
        <div className="flex flex-col gap-3 sticky top-0 z-30" style={{height: `${h}px`}}>
            {(!transactionId) && (
                <ScrollShadow hideScrollBar>
                    <WalletChart/>
                    <WalletBalanceBox/>
                </ScrollShadow>
            )}
            {(!!transactionId) && (
 +               <ScrollShadow hideScrollBar>
                    <WalletTransactionDetail
                        id={transactionId}
                    />
                </ScrollShadow>
            )}

        </div>
    );
};


