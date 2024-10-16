import React from "react";
import {Card, CardBody, CardHeader, CardFooter} from "@nextui-org/card";
import {Button} from "@nextui-org/react";
import Link from "next/link";


export type ProductTechnicalMagBoxProps = {

}


export const ProductTechnicalMagBox = (props: ProductTechnicalMagBoxProps) => {


    const {

    } = props

    return null

    return (
        <div className="pt-4 px-4" id="mag">
            <Card shadow="none" className="bg-gray-100">
                <Link href="#mag" className="outline-none">
                    <CardHeader className="flex justify-between py-2">
                        <h3 className="font-bold text-lg">نقشه فنی</h3>
                    </CardHeader>
                </Link>
                <CardBody className="text-start py-3 flex-col">
                    -----
                </CardBody>
                <CardFooter className="justify-end">
                    <Button
                        variant="light"
                        color="default"
                        size="sm"
                        className="text-gray-500"
                    >
                        از راهساز مگ
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
};
