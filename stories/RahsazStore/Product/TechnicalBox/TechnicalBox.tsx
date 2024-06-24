import React from "react";
import {Card, CardBody, CardHeader, CardFooter} from "@nextui-org/card";
import {Button} from "@nextui-org/react";


export type ProductTechnicalBoxProps = {}


export const ProductTechnicalBox = (
    {}
        :
        ProductTechnicalBoxProps
) => {




    return (
        <Card shadow="none" className="bg-gray-100">
            <CardHeader className="flex justify-between py-2">
                <h3 className="font-bold text-lg">مشخصات فنی</h3>
            </CardHeader>
            <CardBody className="text-start py-3 flex-col">
                -----
            </CardBody>
        </Card>
    );
};
