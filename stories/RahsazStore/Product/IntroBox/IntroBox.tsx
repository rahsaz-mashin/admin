import React from "react";
import {Card, CardBody, CardHeader, CardFooter} from "@nextui-org/card";
import Link from "next/link";
import {ScrollShadow} from "@nextui-org/react";


export type ProductIntroBoxProps = {
    intro?: string | null;
}


export const ProductIntroBox = (props: ProductIntroBoxProps) => {

    const {
        intro
    } = props

    if (!intro) return null

    return (
        <div className="pt-4 px-4" id="intro">
            <Card shadow="none" className="bg-gray-100">
                <Link href="#intro" className="outline-none">
                    <CardHeader className="flex justify-between py-2">
                        <h3 className="font-bold text-lg">معرفی کلی</h3>
                    </CardHeader>
                </Link>
                <CardBody className="text-start py-3 flex-col">
                    <ScrollShadow hideScrollBar className="h-96">
                        <div className="text-justify" dangerouslySetInnerHTML={{__html: intro}}/>
                    </ScrollShadow>
                </CardBody>
            </Card>
        </div>
    );
};
