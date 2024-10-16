import React from "react";
import {OutlinedAwardIcon} from "@/stories/Icons";

export type ProductAvailableInStockProps = {

}


export const ProductAvailableInStock = (props: ProductAvailableInStockProps) => {

    const {} = props

    return (
        <div className="flex items-center gap-1 text-sm text-primary truncate">
            <OutlinedAwardIcon size={20}/>
            <span className="select-none truncate">موجود در راهساز ماشین</span>
        </div>
    );
};
