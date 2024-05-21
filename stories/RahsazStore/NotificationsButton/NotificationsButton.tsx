import React from "react";
import {
    Card,
    CardBody, Button,
} from "@nextui-org/react";
import {MyWalletIcon, NotificationsIcon} from "@/stories/Icons";


export const NotificationsButton = () => {
    return (
        <>
            <div className="flex relative h-20 min-w-20 items-center justify-center">
                <Card isHoverable isPressable shadow="lg" className="w-full h-full hover:text-primary transition-colors duration-500">
                    <CardBody className="flex flex-row gap-2 items-center justify-center">
                        <NotificationsIcon size={36} />
                    </CardBody>
                </Card>
            </div>
        </>
    );
};
