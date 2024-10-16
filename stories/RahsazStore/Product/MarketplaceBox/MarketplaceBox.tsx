import React from "react";
import {Card, CardBody, CardHeader, CardFooter} from "@nextui-org/card";
import {Button} from "@nextui-org/react";
import {OutlinedCardSearchIcon, OutlinedMarketIcon, VerifiedCheckIcon} from "@/stories/Icons";
import {Verified} from "@mui/icons-material";
import Link from "next/link";

export type ProductMarketplaceBoxProps = {}


export const ProductMarketplaceBox = (props: ProductMarketplaceBoxProps) => {


    const {} = props

    return null

    return (
        <div className="pt-4 px-4" id="marketplace">
            <Card shadow="none" className="bg-gray-100">
                <Link href="#marketplace" className="outline-none">
                    <CardHeader className="flex justify-between py-2">
                        <h3 className="font-bold text-lg">فروشنده</h3>
                        <Button
                            variant="light"
                            color="secondary"
                            size="sm"
                            className="text-sm font-bold"
                        >
                            3 فروشنده دیگر
                        </Button>
                    </CardHeader>
                </Link>
                <CardBody className="text-start py-3 flex-col gap-1">
                    <div className="flex items-center gap-2">
                        <i className="text-gray-800">
                            <OutlinedMarketIcon size={28}/>
                        </i>
                        <div className="flex items-center gap-1">
                            <i className="text-blue-500">
                                <VerifiedCheckIcon size={20}/>
                            </i>
                            <span>راهپارت ماشین</span>
                            <span className="text-success-700">(تایید شده)</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-1">
                        <span>عملکرد:</span>
                        <span className="text-success-700">عالی</span>
                    </div>
                </CardBody>
                <CardFooter className="justify-end">
                    <Button
                        variant="light"
                        color="default"
                        size="sm"
                        endContent={<OutlinedCardSearchIcon size={16}/>}
                        className="text-gray-500"
                    >
                        قیمت بهتری سراغ دارید؟
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
};
