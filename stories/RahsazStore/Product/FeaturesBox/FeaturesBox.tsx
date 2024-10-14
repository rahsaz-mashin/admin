import React from "react";
import {Card, CardBody, CardHeader, } from "@nextui-org/card";
import {Button} from "@nextui-org/react";
import Link from "next/link";
import {ProductTechnical} from "@/interfaces/Product.interface";


export type ProductFeaturesBoxProps = {
    technical?: ProductTechnical[];
}


export const ProductFeaturesBox = (
    props: ProductFeaturesBoxProps
) => {
    const {
        technical
    } = props

    if(!technical?.length) return null

    return (
        <Card shadow="none" className="bg-gray-100" id="features">
            <Link href="#technical" className="outline-none">
                <CardHeader className="flex justify-between py-2">
                    <h3 className="font-bold text-lg">ویژگی ها</h3>
                    <Button
                        variant="light"
                        color="secondary"
                        size="sm"
                        className="text-sm font-bold"
                    >
                        اطلاعات بیشتر
                    </Button>
                </CardHeader>
            </Link>
            <CardBody className="text-start py-3 flex-col">
                {technical.map(({title, value}) => {
                    return (
                        <div className="flex items-center gap-2">
                            <span className="after:content-[':']">{title}</span>
                            <span>{value}</span>
                        </div>
                    )
                })}
            </CardBody>
        </Card>
    );
};
