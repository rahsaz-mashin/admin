import React from "react";
import {StarRateIcon} from "@/stories/Icons";
import Link from "next/link";
import {ProductRateSummary} from "@/stories/RahsazStore/Product/RateSummary";

export type ProductTitleProps = {
    title: string;
    slug: string;
}


export const ProductTitle = (props: ProductTitleProps) => {

    const {
        title,
        slug,
    } = props

    return (
        <Link href={`/product/${slug}`} className="outline-none flex items-center justify-between flex-wrap gap-2">
            <h1 className="font-bold text-lg text-justify">{title}</h1>
            <ProductRateSummary/>
        </Link>
    );
};
