import React from "react";
import {Card, CardBody, CardHeader, CardFooter} from "@nextui-org/card";
import {Button} from "@nextui-org/react";
import Link from "next/link";


export type ProductCommentsBoxProps = {}


export const ProductCommentsBox = (props: ProductCommentsBoxProps) => {

    const {

    } = props


    return (
        <div className="pt-4 px-4" id="comments">
            <Card shadow="none" className="bg-gray-100">
                <Link href="#comments" className="outline-none">
                    <CardHeader className="flex justify-between py-2">
                        <h3 className="font-bold text-lg">دیدگاه ها</h3>
                        <Button
                            variant="light"
                            color="secondary"
                            size="sm"
                            className="text-sm font-bold"
                        >
                            0 دیدگاه
                        </Button>
                    </CardHeader>
                </Link>
                <CardBody className="text-start py-3 flex-col">
                    دیدگاهی ثبت نشده است
                </CardBody>
            </Card>
        </div>
    );
};
