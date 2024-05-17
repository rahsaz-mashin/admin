"use client"

import React, {useState, useEffect, ReactNode} from "react";
import {setCookie, getCookie} from "cookies-next";
import dynamic from "next/dynamic";
import {Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader} from "@nextui-org/react";
import {useUserAgent} from "@/hooks/useUserAgent";
import {Spinner} from "@nextui-org/spinner";
import {rootConfig} from "@/config/root";

const Loading = () => <div className="animate-bounce font-bold text-white">
    <Spinner/>
</div>;

const SafariIOS = dynamic(() => import("./Guide/SafariIOS"), {loading: () => <Loading/>});
const FirefoxIOS = dynamic(() => import("./Guide/FirefoxIOS"), {loading: () => <Loading/>});
const ChromeIOS = dynamic(() => import("./Guide/ChromeIOS"), {loading: () => <Loading/>});
const Chrome = dynamic(() => import("./Guide/ChromeAndroid"), {loading: () => <Loading/>});
const Firefox = dynamic(() => import("./Guide/FirefoxAndroid"), {loading: () => <Loading/>});
const OtherBrowser = dynamic(() => import("./Guide/OtherBrowser"), {loading: () => <Loading/>});


type InstallAppModalPromptType =
    "safariIOS"
    | "firefoxIOS"
    | "chromeIOS"
    | "chromeAndroid"
    | "firefoxAndroid"
    | "other";
const COOKIE_NAME = "show-install-app-prompt";

export const InstallAppModal = () => {
    // const [displayPrompt, setDisplayPrompt] = useState<InstallAppModalPromptType>("");

    const {userAgent, isMobile, isStandalone, isIOS} = useUserAgent();
    const header: string = "نصب " + rootConfig.name
    const description: ReactNode = (
        <>
            برای کسب تجربه بهتر و جذاب تر به شما پیشنهاد می کنیم نرم افزار
            {" "}<b>{rootConfig.name}</b>{" "}
            را بر روی دستگاه خود نصب کنید!
        </>
    )

    const [installGuidePrompt, setInstallGuidePrompt] = useState<InstallAppModalPromptType>("other");
    const [showModal, setShowModal] = useState<boolean>(false);
    const closeModal = () => {
        setShowModal(false);
    }
    const doNotShowAgain = () => {
        const date = new Date();
        date.setMonth(date.getMonth() + 1);
        setCookie(COOKIE_NAME, "NOT_YET", {expires: date});
        setShowModal(false);
    }

    const handleInstall = () => {
        if (!!prompt) {
            prompt.prompt()
            prompt.userChoice.then((result: any) => {
                if (result.outcome === "accepted") {
                    console.log("Accepted")
                } else {
                    console.log("Canceled")
                }
            })
            setPrompt(null)
            setShowModal(false)
        }
    }

    const [prompt, setPrompt] = useState<any>(null);

    useEffect(() => {
        const handleBeforeInstallPrompt = (event: any) => {
            console.log("Handle")
            event.preventDefault()
            setPrompt(event)
            setShowModal(true)
        }

        if (getCookie(COOKIE_NAME) !== "NOT_YET" && !isStandalone) {
            if (!!userAgent && !["Safari", "Firefox", "FirefoxiOS"].includes(userAgent)) {
                window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt)
                return () => {
                    window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt)
                }
            } else {
                if (isMobile && isIOS && userAgent === "Safari") {
                    setInstallGuidePrompt("safariIOS");
                } else if (isMobile && isIOS && userAgent === "FirefoxiOS") {
                    setInstallGuidePrompt("firefoxIOS");
                } else if (isMobile && isIOS && userAgent === "ChromeiOS") {
                    setInstallGuidePrompt("chromeIOS");
                } else if (isMobile && userAgent === "Chrome") {
                    setInstallGuidePrompt("chromeAndroid");
                } else if (isMobile && userAgent === "Firefox") {
                    setInstallGuidePrompt("firefoxAndroid");
                } else {
                    setInstallGuidePrompt("other");
                }
            }
        }
    }, [isStandalone]);


    const Prompt = () => (
        <>
            {
                {
                    safariIOS: <SafariIOS closePrompt={closeModal} doNotShowAgain={doNotShowAgain}/>,
                    firefoxIOS: <FirefoxIOS closePrompt={closeModal} doNotShowAgain={doNotShowAgain}/>,
                    chromeIOS: <ChromeIOS closePrompt={closeModal} doNotShowAgain={doNotShowAgain}/>,

                    chromeAndroid: <Chrome closePrompt={closeModal} doNotShowAgain={doNotShowAgain}/>,
                    firefoxAndroid: <Firefox closePrompt={closeModal} doNotShowAgain={doNotShowAgain}/>,

                    other: <OtherBrowser closePrompt={closeModal} doNotShowAgain={doNotShowAgain}/>
                }[installGuidePrompt]
            }
        </>
    );
    if (!!installGuidePrompt) return <Prompt/>;


    return <>
        <Modal
            //
            backdrop="blur"
            isOpen={showModal}
            onClose={closeModal}
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
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" variant="shadow" onPress={handleInstall}>نصب می کنم</Button>
                    <Button onPress={doNotShowAgain}>تمایلی ندارم</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    </>


}
