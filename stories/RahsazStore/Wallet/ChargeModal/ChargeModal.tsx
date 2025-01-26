"use client"

import React, {useEffect, useState} from "react";
import {Modal, ModalContent} from "@nextui-org/react";
import {UseDisclosureReturn} from "@nextui-org/use-disclosure";
import {WalletChargeType} from "@/stories/RahsazStore/Wallet/ChargeModal/ChargeType";
import {WalletChargeByCheque} from "@/stories/RahsazStore/Wallet/ChargeModal/ChargeByCheque";
import {WalletChargeByBank} from "@/stories/RahsazStore/Wallet/ChargeModal/ChargeByBank";
import {WalletChargeByOnline} from "@/stories/RahsazStore/Wallet/ChargeModal/ChargeByOnline";
import {usePathname, useRouter, useSearchParams} from "next/navigation";

export type WalletChargeModalProps = {
    state: UseDisclosureReturn;
}


export const WalletChargeModal = (props: WalletChargeModalProps) => {
    const {state} = props

    const searchParams = useSearchParams()
    const router = useRouter()
    const pathname = usePathname()

    const [chargeWay, setChargeWay] = useState<"online" | "bank" | "cheque" | null>(null)
    const [result, setResult] = useState<any>()

    const onClose = () => {
        onBackToMain()
        state.onClose()
        router.replace(pathname)
    }

    const onBackToMain = () => {
        setChargeWay(null)
        setResult(undefined)
    }

    useEffect(() => {
        const way = searchParams.get("way")
        if(!!way && ["online", "bank", "cheque"].includes(way)) state.onOpen()
        if (way === "online") setChargeWay("online")
        else if (way === "bank") setChargeWay("bank")
        else if (way === "cheque") setChargeWay("cheque")
        // setResult({success: true, time: new Date().toISOString(), reference: "4789562", trackingCode: "4789562"})
    }, [searchParams]);



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
                {(chargeWay === "cheque") && (
                    <WalletChargeByCheque
                        onClose={onClose}
                        onBackToMain={onBackToMain}
                        result={result}
                    />
                )}
                {(chargeWay === "bank") && (
                    <WalletChargeByBank
                        onClose={onClose}
                        onBackToMain={onBackToMain}
                        result={result}
                    />
                )}
                {(chargeWay === "online") && (
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


