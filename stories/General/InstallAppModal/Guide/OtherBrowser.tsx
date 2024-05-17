import {Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader} from "@nextui-org/react";
import {useUserAgent} from "@/hooks/useUserAgent";
import {rootConfig} from "@/config/root";
import React, {ReactNode} from "react";
import {Snippet} from "@nextui-org/snippet";

interface Props {
    closePrompt: () => void;
    doNotShowAgain: () => void;
}

export default function OtherBrowser(props: Props) {
    const {closePrompt, doNotShowAgain} = props;
    const header = "نصب " + rootConfig.name
    const description: ReactNode = (
        <>
            برای کسب تجربه بهتر و جذاب تر به شما پیشنهاد می کنیم نرم افزار
            {" "}<b>{rootConfig.name}</b>{" "}
            را بر روی دستگاه خود نصب کنید!
        </>
    )

    const {userAgentString} = useUserAgent();

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
            <ModalContent>
                <ModalHeader>{header}</ModalHeader>
                <ModalBody>
                    <p className="text-justify">{description}</p>
                    <div className="flex flex-col gap-1 text-sm text-gray-500">
                        <div className="flex flex-wrap items-center gap-1">
                            <p>در صورت نیاز به راهنمایی جهت نصب نرم افزار از گوگل کمک بگیرید</p>
                        </div>
                        <div className="flex flex-col flex-wrap gap-1">
                            <b>اطلاعات مرورگر شما: </b>
                            <Snippet hideSymbol disableTooltip>
                              <span className="whitespace-pre-wrap">
                                {userAgentString}
                              </span>
                            </Snippet>
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
