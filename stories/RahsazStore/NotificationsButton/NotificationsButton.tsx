import React from "react";
import {
    Card,
    CardBody, Button,
} from "@nextui-org/react";
import {MyWalletIcon, NotificationsIcon} from "@/stories/Icons";
import Link from "next/link";


export const NotificationsButton = () => {
    return (
        <>
            <div className="relative h-20 min-w-20 items-center justify-center overflow-hidden hidden 2xl:flex">
                <Card
                    isPressable
                    shadow="none"
                    className="w-full h-full hover:text-primary transition-colors duration-500"
                    radius="lg"
                    as={Link}
                    href="/dashboard/notifications"
                >
                    <CardBody className="flex flex-row gap-2 items-center justify-center overflow-y-hidden">
                        <NotificationsIcon size={36} />
                    </CardBody>
                </Card>
            </div>
        </>
    );
};
