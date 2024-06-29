import React from "react";
import {Card, CardBody, CardHeader, CardFooter} from "@nextui-org/card";
import {CardPaymentIcon, FastDeliveryIcon, ReverseProductIcon, SupportIcon, WalletIcon} from "@/stories/Icons";
import {Button} from "@nextui-org/react";


export type ProductRelatedProductsBoxProps = {}


export const ProductRelatedProductsBox = (
    {}
        :
        ProductRelatedProductsBoxProps
) => {



    return (
        <Card shadow="none" className="bg-transparent">
            <CardHeader className="flex justify-between py-2">
                <h3 className="font-bold text-lg">کالاهای مشابه</h3>
            </CardHeader>
            <CardBody className="text-start py-3 flex-col">

            </CardBody>
        </Card>
    );
};
