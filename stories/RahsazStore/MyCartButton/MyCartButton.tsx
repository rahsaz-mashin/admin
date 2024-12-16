import React from "react";
import {
    Card,
    CardBody
} from "@nextui-org/react";
import {MyCartIcon} from "@/stories/Icons";
import Link from "next/link";


export const MyCartButton = () => {
    return (
        <>
            <div className="relative h-20 min-w-20 items-center justify-center overflow-hidden hidden lg:flex">
                <Card
                    isHoverable
                    isPressable
                    shadow="none"
                    className="w-full h-full hover:text-primary transition-colors duration-500"
                    radius="lg"
                    as={Link}
                    href="/cart"
                >
                    <CardBody className="flex flex-row gap-4 px-4 items-center justify-center overflow-y-hidden">
                        <MyCartIcon size={36}/>
                        <div className="xl:flex flex-col items-start hidden">
                            <span className="font-bold text-sm flex items-center text-black gap-1">
                                خالی است!
                            </span>
                            {/*<span className="font-bold flex items-center text-black gap-1">*/}
                            {/*    0*/}
                            {/*    {" "}*/}
                            {/*    <div className="text-primary text-xs">تومانءء</div>*/}
                            {/*</span>*/}
                            <h4 className="text-gray-500 text-xs">سبد خرید من</h4>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </>
    );
};
