import React from "react";
import {StarRateIcon} from "@/stories/Icons";

export type ProductRateSummaryProps = {}


export const ProductRateSummary = (props: ProductRateSummaryProps) => {

    const {} = props

    return (
        <div className="flex items-center gap-1 text-sm select-none">
            <span>4/7</span>
            <span className="text-gray-400">(43)</span>
            <i className="text-yellow-400"><StarRateIcon size={20}/></i>
        </div>
    );
};
