"use client"

import React, {useState} from "react";
import {Button, Card, CardBody, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader} from "@nextui-org/react";
import {UseDisclosureReturn} from "@nextui-org/use-disclosure";
import {BoldDuotoneCreditCardIcon, BoldDuotoneReceiptIcon, BoldDuotoneTicketIcon} from "@/stories/Icons";
import clsx from "clsx";

export type WalletIncreaseTypeModalProps = {
    state: UseDisclosureReturn
}


export const WalletIncreaseTypeModal = (props: WalletIncreaseTypeModalProps) => {
    const {state} = props


    const [type, setType] = useState<string | null>(null)

    return (
        <Modal
            //
            backdrop="blur"
            isOpen={state.isOpen}
            onClose={state.onClose}
            placement="bottom-center"
            isDismissable
        >
            <ModalContent>
                <ModalHeader>
                    شارژ کیف پول
                </ModalHeader>
                <ModalBody className="flex flex-col gap-2">
                    <span className="text-gray-500 text-sm font-light">
                        روش شارژ کیف پول خود را وارد کنید:
                    </span>
                    <div className="flex gap-3 justify-center">
                        <Card
                            isHoverable
                            isPressable
                            shadow="none"
                            className={clsx("group", type ==="online" ? "isActive" : "")}
                            onPress={() => setType("online")}
                        >
                            <CardBody className="flex items-center justify-center flex-col transition text-gray-500 group-[.isActive]:text-primary group-[.isActive]:bg-primary/20 gap-3 w-28 h-28">
                                <BoldDuotoneCreditCardIcon size={36}/>
                                <span className="font-bold text-sm truncate">درگاه اینترنتی</span>
                            </CardBody>
                        </Card>
                        <Card
                            isHoverable
                            isPressable
                            shadow="none"
                            className={clsx("group", type ==="bank" ? "isActive" : "")}
                            onPress={() => setType("bank")}
                        >
                            <CardBody className="flex items-center justify-center flex-col transition text-gray-500 group-[.isActive]:text-primary group-[.isActive]:bg-primary/20 gap-3 w-28 h-28">
                                <BoldDuotoneReceiptIcon size={36}/>
                                <span className="font-bold text-sm truncate">واریز بانکی</span>
                            </CardBody>
                        </Card>
                        <Card
                            isHoverable
                            isPressable
                            shadow="none"
                            className={clsx("group", type ==="cheque" ? "isActive" : "")}
                            onPress={() => setType("cheque")}
                        >
                            <CardBody className="flex items-center justify-center flex-col transition text-gray-500 group-[.isActive]:text-primary group-[.isActive]:bg-primary/20 gap-3 w-28 h-28">
                                <BoldDuotoneTicketIcon size={36}/>
                                <span className="font-bold text-sm truncate">چک صیادی</span>
                            </CardBody>
                        </Card>
                    </div>
                </ModalBody>
                <ModalFooter
                    className=""
                >
                    <Button
                        className="flex-1 md:flex-grow-0"
                        variant="flat"
                        color="default"
                        onPress={() => state.onClose()}
                    >
                        انصراف
                    </Button>
                    <Button
                        className="flex-1 md:flex-grow-0"
                        variant="shadow"
                        color="primary"
                        isDisabled={!type}
                    >
                        ادامه
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};


