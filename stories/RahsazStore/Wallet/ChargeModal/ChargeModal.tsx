"use client"

import React, {useState} from "react";
import {Modal, ModalContent} from "@nextui-org/react";
import {UseDisclosureReturn} from "@nextui-org/use-disclosure";
import {WalletChargeType} from "@/stories/RahsazStore/Wallet/ChargeModal/ChargeType";
import {WalletChargeByCheque} from "@/stories/RahsazStore/Wallet/ChargeModal/ChargeByCheque";
import {WalletChargeByBank} from "@/stories/RahsazStore/Wallet/ChargeModal/ChargeByBank";
import {WalletChargeByOnline} from "@/stories/RahsazStore/Wallet/ChargeModal/ChargeByOnline";

export type WalletChargeModalProps = {
    state: UseDisclosureReturn
}


export const WalletChargeModal = (props: WalletChargeModalProps) => {
    const {state} = props

    const [chargeWay, setChargeWay] = useState<"online" | "bank" | "cheque" | null>(null)

    const onClose = () => {
        state.onClose()
        onBackToMain()
    }

    const onBackToMain = () => {
        setChargeWay(null)
    }

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
                {chargeWay === "cheque" && <WalletChargeByCheque onClose={onClose} onBackToMain={onBackToMain}/>}
                {chargeWay === "bank" && <WalletChargeByBank onClose={onClose} onBackToMain={onBackToMain}/>}
                {chargeWay === "online" && <WalletChargeByOnline onClose={onClose} onBackToMain={onBackToMain}/>}
            </ModalContent>
        </Modal>
    );
};


