import React from "react";
import {
    ScrollShadow,
    Card,
    CardBody, Button,
} from "@nextui-org/react";


export const TopShortcut = () => {

    return (
        <div className="flex flex-[1_1_0] relative h-20 items-center justify-center overflow-hidden">
            <Card isHoverable shadow="none" className="w-full h-full" radius="lg">
                <CardBody className="flex flex-row gap-2 items-center overflow-y-hidden">
                    <Button
                        color="primary"
                        variant="light"
                        size="md"
                        className="text-black flex-shrink-0 hover:text-primary font-medium w-max"
                    >
                        در راهساز ماشین
                    </Button>
                    <Button
                        color="primary"
                        variant="light"
                        size="md"
                        className="text-black flex-shrink-0 hover:text-primary font-medium"
                    >
                        نحوه خرید
                    </Button>
                    <Button
                        color="primary"
                        variant="light"
                        size="md"
                        className="text-black flex-shrink-0 hover:text-primary font-medium"
                    >
                        دریافت نمایندگی
                    </Button>
                    <Button
                        color="primary"
                        variant="light"
                        size="md"
                        className="text-black flex-shrink-0 hover:text-primary font-medium"
                    >
                        سوالات متداول
                    </Button>
                    <Button
                        color="primary"
                        variant="light"
                        size="md"
                        className="text-black flex-shrink-0 hover:text-primary font-medium"
                    >
                        نقشه های فنی
                    </Button>
                    <Button
                        color="primary"
                        variant="light"
                        size="md"
                        className="text-black flex-shrink-0 hover:text-primary font-medium"
                    >
                        درج آگهی
                    </Button>
                    <Button
                        color="primary"
                        variant="light"
                        size="md"
                        className="text-black flex-shrink-0 hover:text-primary font-medium"
                    >
                        پیش فروش
                    </Button>
                    <Button
                        color="primary"
                        variant="light"
                        size="md"
                        className="text-black flex-shrink-0 hover:text-primary font-medium"
                    >
                        کمپین های فروش
                    </Button>
                </CardBody>
            </Card>
        </div>
    );
};
