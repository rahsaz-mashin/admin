import React from "react";
import {Card, CardBody, CardHeader, CardFooter} from "@nextui-org/card";
import {Button} from "@nextui-org/react";


export type ProductCommentsBoxProps = {}


export const ProductCommentsBox = (
    {}
        :
        ProductCommentsBoxProps
) => {




    return (
        <Card shadow="none" className="bg-gray-100">
            <CardHeader className="flex justify-between py-2">
                <h3 className="font-bold text-lg">دیدگاه ها</h3>
                <Button
                    variant="light"
                    color="secondary"
                    size="sm"
                    className="text-sm font-bold"
                >
                    65 دیدگاه
                </Button>
            </CardHeader>
            <CardBody className="text-start py-3 flex-col">
                -----
            </CardBody>
        </Card>
    );
};
