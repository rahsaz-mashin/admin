"use client"

import React, {useState, useEffect, ReactNode} from "react";
import {setCookie, getCookie} from "cookies-next";
import dynamic from "next/dynamic";
import {Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader} from "@nextui-org/react";
import {useUserAgent} from "@/hooks/useUserAgent";
import {Spinner} from "@nextui-org/spinner";
import {rootConfig} from "@/config/root";

const Loading = () => <div className="animate-bounce font-bold text-white">
    {/*<Spinner/>*/}
</div>;

const SafariIOS = dynamic(() => import("./Guide/SafariIOS"), {loading: () => <Loading/>});
const FirefoxIOS = dynamic(() => import("./Guide/FirefoxIOS"), {loading: () => <Loading/>});
const ChromeIOS = dynamic(() => import("./Guide/ChromeIOS"), {loading: () => <Loading/>});
const ChromeAndroid = dynamic(() => import("./Guide/ChromeAndroid"), {loading: () => <Loading/>});
const FirefoxAndroid = dynamic(() => import("./Guide/FirefoxAndroid"), {loading: () => <Loading/>});
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

    const [showGuideModal, setShowGuideModal] = useState<boolean>(false);
    const [canInstall, setCanInstall] = useState<boolean>(false);
    const [showInstallModal, setShowInstallModal] = useState<boolean>(false);
    const closeModal = () => {
        setShowInstallModal(false);
        setShowGuideModal(false);
    }
    const doNotShowAgain = () => {
        const date = new Date();
        date.setMonth(date.getMonth() + 1);
        setCookie(COOKIE_NAME, "NOT_YET", {expires: date});
        setShowInstallModal(false);
        setShowGuideModal(false);
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
            setShowInstallModal(false)
        }
    }

    const [prompt, setPrompt] = useState<any>(null);

    useEffect(() => {
        const handleBeforeInstallPrompt = (event: any) => {
            console.log("bfpmt")
            event.preventDefault()
            setPrompt(event)
            setShowInstallModal(true)
            setShowGuideModal(false)
            setCanInstall(true)
        }
        if (getCookie(COOKIE_NAME) !== "NOT_YET" && !isStandalone) {
            console.log("bbbbb", isStandalone)
            console.log({userAgent, isMobile, isStandalone, isIOS})
            window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt)
            return () => {
                window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt)
            }
        }
    }, [isStandalone]);


    useEffect(() => {
        setTimeout(() => {
            setShowGuideModal(true)
        }, 5000)
    }, []);


    if(getCookie(COOKIE_NAME) !== "NOT_YET" && !isStandalone && !canInstall && showGuideModal) {
        if (isMobile && isIOS && userAgent === "Safari") {
            return <SafariIOS closePrompt={closeModal} doNotShowAgain={doNotShowAgain}/>
        } else if (isMobile && isIOS && userAgent === "FirefoxiOS") {
            return <FirefoxIOS closePrompt={closeModal} doNotShowAgain={doNotShowAgain}/>
        } else if (isMobile && isIOS && userAgent === "ChromeiOS") {
            return <ChromeIOS closePrompt={closeModal} doNotShowAgain={doNotShowAgain}/>
        } else if (isMobile && userAgent === "Chrome") {
            return <ChromeAndroid closePrompt={closeModal} doNotShowAgain={doNotShowAgain}/>
        } else if (isMobile && userAgent === "Firefox") {
            return <FirefoxAndroid closePrompt={closeModal} doNotShowAgain={doNotShowAgain}/>
        } else {
            return <OtherBrowser closePrompt={closeModal} doNotShowAgain={doNotShowAgain}/>
        }
    }


    return <>
        <Modal
            //
            backdrop="blur"
            isOpen={showInstallModal}
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
