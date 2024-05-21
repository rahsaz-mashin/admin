import React from "react";
import {
    ScrollShadow,
    Card,
    CardBody, Button,
} from "@nextui-org/react";


export const TopShortcut = () => {

    return (
        <div className="flex relative max-w-96 h-20 items-center justify-center">
            <Card isHoverable shadow="lg" className="w-full h-full">
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
                    {/*<Button*/}
                    {/*    color="primary"*/}
                    {/*    variant="light"*/}
                    {/*    size="md"*/}
                    {/*    className="text-black flex-shrink-0 hover:text-primary font-medium"*/}
                    {/*>*/}
                    {/*    دریافت نمایندگی*/}
                    {/*</Button>*/}
                </CardBody>
            </Card>
        </div>
    );
};
