import React from "react";
import {Card, CardBody, CardHeader, CardFooter} from "@nextui-org/card";


export type ProductPriceBoxProps = {}


export const ProductPriceBox = (
    {}
        :
        ProductPriceBoxProps
) => {




    return (
        <Card shadow="none" className="bg-gray-100 absolute bottom-0">
            <CardHeader className="flex justify-between py-2">
                <h3 className="font-bold text-lg">قیمت</h3>
            </CardHeader>
            <CardBody className="text-start py-3 flex-col">
                -----
            </CardBody>
        </Card>
    );
};
