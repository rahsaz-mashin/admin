import React from "react";
import {Card, CardBody, CardHeader, CardFooter} from "@nextui-org/card";
import {CardPaymentIcon, FastDeliveryIcon, ReverseProductIcon, SupportIcon, WalletIcon} from "@/stories/Icons";
import {Button} from "@nextui-org/react";
import Link from "next/link";


export type ProductRelatedProductsBoxProps = {

}


export const ProductRelatedProductsBox = (props: ProductRelatedProductsBoxProps) => {

    const {

    } = props

    // return null

    return (
        <div className="pt-4" id="related">
            <Card shadow="none" className="bg-transparent">
                <Link href="#related" className="outline-none">
                    <CardHeader className="flex justify-between py-2">
                        <h3 className="font-bold text-lg">کالاهای مشابه</h3>
                    </CardHeader>
                </Link>
                <CardBody className="text-start py-3 flex-col">

                </CardBody>
            </Card>
        </div>
    );
};
