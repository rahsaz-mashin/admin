"use client"

import React, {useEffect, useState} from "react";
import {Card, CardBody} from "@nextui-org/card";
import {Button, useDisclosure} from "@nextui-org/react";
import {WalletChargeModal} from "@/stories/RahsazStore/Wallet/ChargeModal";
import {axiosCoreWithAuth} from "@/lib/axios";
import {NumericFormat} from "react-number-format";

export type WalletBalanceBoxProps = {}


export const WalletBalanceBox = (props: WalletBalanceBoxProps) => {
    const increaseTypeModal = useDisclosure({defaultOpen: false});

    const [balance, setBalance] = useState(0)

    const axios = axiosCoreWithAuth()

    const getBalance = async () => {
        const data: { balance: number } = await axios.get(`store/wallet/balance`)
        setBalance(data.balance)
    }
    useEffect(() => {
        getBalance()
    }, []);


    return (
        <Card
            shadow="none"
            radius="md"
            className="w-full shrink-0 select-none hidden lg:block"
        >
            <CardBody className="flex flex-col text-center justify-center gap-2 p-4">
                <span className="font-light">
                    موجودی کیف پول شما
                </span>
                <h6 className="font-bold text-primary text-lg flex gap-1 justify-center items-center">
                    <span>
                        <NumericFormat
                            value={balance}
                            thousandSeparator=","
                            decimalSeparator="."
                            allowNegative={false}
                            decimalScale={0}
                            allowLeadingZeros={false}
                            displayType="text"
                        />
                    </span>
                    <span className="text-sm">
                        تومانءء
                    </span>
                </h6>
                <Button
                    size="lg"
                    variant="shadow"
                    color="primary"
                    onPress={() => increaseTypeModal.onOpen()}
                >
                    شارژ کیف پول
                </Button>
                <WalletChargeModal
                    state={increaseTypeModal}
                />
            </CardBody>
        </Card>
    );
};


