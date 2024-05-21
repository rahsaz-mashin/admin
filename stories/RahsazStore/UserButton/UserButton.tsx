import React from "react";
import {
    Card,
    CardBody
} from "@nextui-org/react";
import { UserIcon} from "@/stories/Icons";


export const UserButton = () => {
    return (
        <>
            <div className="flex relative h-20 min-w-20 items-center justify-center overflow-hidden">
                <Card isHoverable isPressable shadow="none" className="w-full h-full hover:text-primary transition-colors duration-500" radius="lg">
                    <CardBody className="flex flex-row gap-2 items-center justify-center overflow-y-hidden">
                        <UserIcon size={36}/>
                    </CardBody>
                </Card>
            </div>
        </>
    );
};
