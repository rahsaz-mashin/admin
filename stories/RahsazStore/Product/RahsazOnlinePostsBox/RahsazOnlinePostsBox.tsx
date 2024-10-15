import React from "react";
import {Card, CardBody, CardHeader, CardFooter} from "@nextui-org/card";
import {Button} from "@nextui-org/react";
import Link from "next/link";


export type ProductRahsazOnlinePostsBoxProps = {

}


export const ProductRahsazOnlinePostsBox = (props: ProductRahsazOnlinePostsBoxProps) => {


    const {

    } = props

    return null

    return (
        <div className="pt-4" id="online">
            <Card shadow="none" className="bg-gray-100">
                <Link href="#online" className="outline-none">
                    <CardHeader className="flex justify-between py-2">
                        <h3 className="font-bold text-lg">مطالب مرتبط</h3>
                        <Button
                            variant="light"
                            color="secondary"
                            size="sm"
                            className="text-sm font-bold"
                        >
                            3 مطلب
                        </Button>
                    </CardHeader>
                </Link>
                <CardBody className="text-start py-3 flex-col">
                    -----
                </CardBody>
                <CardFooter className="justify-end">
                    <Button
                        variant="light"
                        color="default"
                        size="sm"
                        className="text-gray-500"
                    >
                        از راهساز آنلاین
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
};
