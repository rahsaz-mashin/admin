"use client"

import React from "react";
import {Button} from "@nextui-org/react";
import Link from "next/link";

export type CartSubmitBoxProps = {}


export const CartSubmitBox = (
    {}
        :
        CartSubmitBoxProps
) => {


    return (
        <div className="flex flex-col gap-3">
            <div className="flex flex-row justify-between">
                <span>
                    قابل پرداخت:
                </span>
                <span className="font-bold">
                    58,000,000
                    {" "}
                    <span className="text-primary text-sm">
                        تومانءء
                    </span>
                </span>
            </div>
            <Button
                color="primary"
                variant="shadow"
                size="lg"
            >
                پرداخت
            </Button>
        </div>
    );
};


