import React from "react";
import {OutlinedAwardIcon} from "@/stories/Icons";

export type ProductAvailableInStockProps = {}


export const ProductAvailableInStock = (
    {}
        :
        ProductAvailableInStockProps
) => {

    return (
        <div className="flex items-center gap-1 text-sm text-primary">
            <OutlinedAwardIcon size={20}/>
            <span className="select-none">موجود در راهساز ماشین</span>
        </div>
    );
};
