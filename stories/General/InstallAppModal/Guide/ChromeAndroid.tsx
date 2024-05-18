import React, {ReactElement, ReactNode} from "react";

import {Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader} from "@nextui-org/react";
import {InstallMobile, KeyboardDoubleArrowUp, MoreVert} from "@mui/icons-material";
import {rootConfig} from "@/config/root";

interface Props {
    closePrompt: () => void;
    doNotShowAgain: () => void;
}

export default function ChromeAndroid(props: Props) {
    const {closePrompt, doNotShowAgain} = props;
    const header: string = "نصب " + rootConfig.name
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
            isDismissable={false}
            hideCloseButton
            classNames={{wrapper: "z-[102]", backdrop: "z-[102]", closeButton: "right-auto left-1"}}
            title={header}
        >
            <KeyboardDoubleArrowUp
                fontSize="large"
                className="absolute right-[10px] top-[10px] z-[103] animate-bounce text-primary"
            />
            <ModalContent>
                <ModalHeader>{header}</ModalHeader>
                <ModalBody>
                    <p className="text-justify">{description}</p>
                    <div className="flex flex-col gap-1 text-sm text-gray-500">
                        <div className="flex flex-wrap items-center gap-1">
                            <p>بر روی</p>
                            <MoreVert className="text-primary"/>
                            <p>کلیک کنید</p>
                        </div>
                        <div className="flex flex-wrap items-center gap-1">
                            <p>به پایین اسکرول کنید و</p>
                            <div dir="ltr"
                                 className="flex items-center justify-between gap-2 rounded-lg bg-gray-50 p-1 text-gray-900">
                                <InstallMobile className="text-primary"/>
                                <p>Install app</p>
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
