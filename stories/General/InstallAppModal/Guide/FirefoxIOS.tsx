import React, {ReactNode} from "react";

import {AiOutlinePlusSquare} from "react-icons/ai";
import {FaBars} from "react-icons/fa";
import {FiShare} from "react-icons/fi";
import {Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader} from "@nextui-org/react";
import {KeyboardDoubleArrowDown} from "@mui/icons-material";
import {rootConfig} from "@/config/root";

interface Props {
    closePrompt: () => void;
    doNotShowAgain: () => void;
}

export default function FirefoxIOS(props: Props) {
    const {closePrompt, doNotShowAgain} = props;
    const header = "نصب " + rootConfig.name
    const description: ReactNode = (
        <>
            برای کسب تجربه بهتر و جذاب تر به شما پیشنهاد می کنیم نرم افزار
            {" "}<b>{rootConfig.name}</b>{" "}
            را بر روی دستگاه خود نصب کنید!
        </>
    )

    return (
        <Modal
            //
            backdrop="blur"
            isOpen={true}
            onClose={closePrompt}
            className="z-[102]"
            dir="rtl"
            placement="center"
            classNames={{wrapper: "z-[102]", backdrop: "z-[102]", closeButton: "right-auto left-1"}}
            title={header}
        >
            <KeyboardDoubleArrowDown fontSize="large"
                                     className="absolute bottom-[10px] right-[5px] z-[103] animate-bounce text-primary"/>
            <ModalContent>
                <ModalHeader>{header}</ModalHeader>
                <ModalBody>
                    <p className="text-justify">{description}</p>
                    <div className="flex flex-col gap-1 text-sm text-gray-500">
                        <div className="flex flex-wrap items-center gap-1">
                            <p>بر روی</p>
                            <FaBars className="text-2xl text-primary"/>
                            <p>کلیک کنید</p>
                        </div>
                        <div className="flex flex-wrap items-center gap-1">
                            <p>به پایین اسکرول کنید و</p>
                            <div
                                dir="ltr"
                                className="flex items-center justify-between gap-2 rounded-lg bg-gray-50 p-1 text-gray-900"
                            >
                                <FiShare className="text-2xl text-primary"/>
                                <p>Share</p>
                            </div>
                            را بزنید
                        </div>
                        <div className="flex flex-wrap items-center gap-1">
                            <p>سپس </p>
                            <div dir="ltr"
                                 className="flex items-center justify-between gap-2 rounded-lg bg-gray-50 p-1 text-gray-900">
                                <AiOutlinePlusSquare className="text-2xl text-primary"/>
                                <p>Add to Home Screen</p>
                            </div>
                            را بزنید
                        </div>
                        <div className="flex flex-wrap items-center gap-1">
                            <p>مراحل نصب را ادامه دهید</p>
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button onPress={doNotShowAgain}>تمایلی ندارم</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}
