import React from "react";
import {
    Card,
    CardBody, Button,
} from "@nextui-org/react";
import {MyWalletIcon} from "@/stories/Icons";


export const MyWalletButton = () => {
    return (
        <>
            <div className="flex relative h-20 items-center justify-center">
                <Card isHoverable isPressable shadow="lg" className="w-full h-full hover:text-primary transition-colors duration-500">
                    <CardBody className="flex flex-row gap-3 items-center overflow-y-hidden">
                        <MyWalletIcon size={36}/>
                        <div className="lg:flex flex-col items-start hidden">
                            <span className="font-bold flex items-center text-black">
                                2,000,000
                                {" "}
                                <div className="text-primary text-xs">تومانءء</div>
                            </span>
                            <h4 className="text-gray-500 text-xs">کیف پول من</h4>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </>
    );
};
