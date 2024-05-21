import React from "react";
import {
    Card,
    CardBody
} from "@nextui-org/react";
import {MyCartIcon} from "@/stories/Icons";


export const MyCartButton = () => {
    return (
        <>
            <div className="flex relative h-20 min-w-20 items-center justify-center">
                <Card isHoverable isPressable shadow="lg" className="w-full h-full hover:text-primary transition-colors duration-500">
                    <CardBody className="flex flex-row gap-2 items-center overflow-y-hidden">
                        <MyCartIcon size={36} />
                        <div className="lg:flex flex-col items-start hidden">
                            <span className="font-bold flex items-center text-black">
                                800,000
                                {" "}
                                <div className="text-primary text-xs">تومانءء</div>
                            </span>
                            <h4 className="text-gray-500 text-xs">سبد خرید من</h4>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </>
    );
};
