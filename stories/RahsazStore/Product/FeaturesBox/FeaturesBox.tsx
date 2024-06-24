import React from "react";
import {Card, CardBody, CardHeader, CardFooter} from "@nextui-org/card";
import {Button} from "@nextui-org/react";


export type ProductFeaturesBoxProps = {}


export const ProductFeaturesBox = (
    {}
        :
        ProductFeaturesBoxProps
) => {


    return (
        <Card shadow="none" className="bg-gray-100">
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
            <CardBody className="text-start py-3 flex-col">
                <div className="flex items-center gap-2">
                    <span>قطر میله درونی:</span>
                    <span>3 میلی متر</span>
                </div>
                <div className="flex items-center gap-2">
                    <span>قطر میله بیرونی:</span>
                    <span>9 میلی متر</span>
                </div>
                <div className="flex items-center gap-2">
                    <span>طول میله درونی:</span>
                    <span>46 میلی متر</span>
                </div>
                <div className="flex items-center gap-2">
                    <span>طول میله بیرونی:</span>
                    <span>85 میلی متر</span>
                </div>
            </CardBody>
        </Card>
    );
};
