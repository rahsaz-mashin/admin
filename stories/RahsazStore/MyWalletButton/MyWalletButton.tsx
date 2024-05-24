import React from "react";
import {
    Card,
    CardBody, Button,
} from "@nextui-org/react";
import {MyWalletIcon} from "@/stories/Icons";


export const MyWalletButton = () => {
    return (
        <>
            <div className="relative h-20 min-w-20 items-center justify-center hidden xl:flex">
                {/*<div className="absolute bg-white -bottom-4 w-full h-8 after:absolute after:bottom-0 after:start-[-30px] after:h-[30px] after:store-header-start after:transition-all after:duration-500 after:!w-[30px]"></div>*/}

                <Card
                    isPressable
                    shadow="none"
                    className="w-full h-full hover:text-primary transition-colors duration-500 "
                    radius="lg"
                >
                    <CardBody className="flex flex-row gap-4 px-4 items-center justify-center overflow-y-hidden">
                        <MyWalletIcon size={36}/>
                        <div className="xl:flex flex-col items-start hidden">
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
