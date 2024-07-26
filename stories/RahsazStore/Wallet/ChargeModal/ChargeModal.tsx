"use client"

import React, {useEffect, useState} from "react";
import {Modal, ModalContent} from "@nextui-org/react";
import {UseDisclosureReturn} from "@nextui-org/use-disclosure";
import {WalletChargeType} from "@/stories/RahsazStore/Wallet/ChargeModal/ChargeType";
import {WalletChargeByCheque} from "@/stories/RahsazStore/Wallet/ChargeModal/ChargeByCheque";
import {WalletChargeByBank} from "@/stories/RahsazStore/Wallet/ChargeModal/ChargeByBank";
import {WalletChargeByOnline} from "@/stories/RahsazStore/Wallet/ChargeModal/ChargeByOnline";

export type WalletChargeModalProps = {
    state: UseDisclosureReturn;
    // chargeWay: "cheque" | "bank" | "online" | null;
    // setChargeWay: React.Dispatch<React.SetStateAction<"cheque" | "bank" | "online" | null>>;
    // result?: any
}


export const WalletChargeModal = (props: WalletChargeModalProps) => {
    const {state} = props

    const [chargeWay, setChargeWay] = useState<"online" | "bank" | "cheque" | null>(null)
    const [result, setResult] = useState<any>()

    const onClose = () => {
        onBackToMain()
        state.onClose()
    }

    const onBackToMain = () => {
        setChargeWay(null)
        setResult(undefined)
    }

    useEffect(() => {
        setChargeWay("cheque")
        setResult({success: true, time: new Date().toISOString(), reference: "4789562", trackingCode: "4789562"})
        state.onOpen()
    }, []);

    return (
        <Modal
            //
            backdrop="blur"
            isOpen={state.isOpen}
            onClose={onClose}
            placement="bottom-center"
            isDismissable
        >
            <ModalContent>
                {!chargeWay && <WalletChargeType onClose={onClose} setChargeWay={setChargeWay}/>}
                {chargeWay === "cheque" && (
                    <WalletChargeByCheque
                        onClose={onClose}
                        onBackToMain={onBackToMain}
                        result={result}
                    />
                )}
                {chargeWay === "bank" && (
                    <WalletChargeByBank
                        onClose={onClose}
                        onBackToMain={onBackToMain}
                        result={result}
                    />
                )}
                {chargeWay === "online" && (
                    <WalletChargeByOnline
                        onClose={onClose}
                        onBackToMain={onBackToMain}
                        result={result}
                    />
                )}
            </ModalContent>
        </Modal>
    );
};


