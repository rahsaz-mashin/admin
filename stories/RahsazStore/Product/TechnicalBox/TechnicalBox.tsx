"use client"

import React from "react";
import {Card, CardBody, CardHeader,} from "@nextui-org/card";
import {Button} from "@nextui-org/react";
import Link from "next/link";
import {ProductTechnical} from "@/interfaces/Product.interface";
import {useRouter} from "next/navigation";


export type ProductTechnicalBoxProps = {
    technical?: ProductTechnical[];
    summary?: boolean;
}


export const ProductTechnicalBox = (props: ProductTechnicalBoxProps) => {
    const {
        summary,
        technical
    } = props

    const router = useRouter()

    if (!technical?.length) return null


    return (
        <div className="pt-4" id={summary ? "summary-tech" : "technical"}>
            <Card shadow="none" className="bg-gray-100">
                <Link href={summary ? "#summary-tech" : "#technical"} className="outline-none">
                    <CardHeader className="flex justify-between">
                        <h3 className="font-bold text-lg">
                            {(summary && technical.length > 3) ? "مشخصات مختصر" : "مشخصات فنی"}
                        </h3>
                        {summary && technical.length > 3 && (
                            <Button
                                variant="light"
                                color="secondary"
                                size="sm"
                                className="text-sm font-bold"
                                onPress={() => router.push("#technical")}
                            >
                                اطلاعات بیشتر
                            </Button>
                        )}
                    </CardHeader>
                </Link>
                <CardBody className="text-start py-3 flex-col">
                    {technical.slice(0, summary ? 3 : technical.length).map(({title, value}, idx) => {
                        return (
                            <div key={idx} className="flex items-center gap-2">
                                <span className="after:content-[':']">{title}</span>
                                <span>{value}</span>
                            </div>
                        )
                    })}
                </CardBody>
            </Card>
        </div>
    );
};
