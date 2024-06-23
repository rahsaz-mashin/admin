import React from "react";
import {StarRateIcon} from "@/stories/Icons";

export type ProductTitleProps = {
    title: string
}


export const ProductTitle = (
    {
        title
    }: ProductTitleProps
) => {


    return (
        <h1 className="font-bold text-lg">{title}</h1>
    );
};
