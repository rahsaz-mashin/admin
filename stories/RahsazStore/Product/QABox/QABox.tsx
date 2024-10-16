import React from "react";
import {Card, CardBody, CardHeader, CardFooter} from "@nextui-org/card";
import {Button} from "@nextui-org/react";
import Link from "next/link";


export type ProductQABoxProps = {}


export const ProductQABox = (props: ProductQABoxProps) => {

    const {

    } = props


    return (
        <div className="pt-4 px-4" id="qa">
            <Card shadow="none" className="bg-gray-100">
                <Link href="#qa" className="outline-none">
                    <CardHeader className="flex justify-between py-2">
                        <h3 className="font-bold text-lg">پرسش و پاسخ</h3>
                        <Button
                            variant="light"
                            color="secondary"
                            size="sm"
                            className="text-sm font-bold"
                        >
                            0 پرسش و پاسخ
                        </Button>
                    </CardHeader>
                </Link>
                <CardBody className="text-start py-3 flex-col">
                    پرسش و پاسخی ثبت نشده است
                </CardBody>
            </Card>
        </div>
    );
};
