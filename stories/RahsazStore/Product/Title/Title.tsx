import React from "react";
import {StarRateIcon} from "@/stories/Icons";
import Link from "next/link";

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
        <Link href={`/product/${slug}`} className="outline-none">
            <h1 className="font-bold text-lg">{title}</h1>
        </Link>
    );
};
