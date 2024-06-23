import React from "react";
import {OutlinedUserIcon} from "@/stories/Icons";

export type ProductAvailableInMarketPlaceProps = {}


export const ProductAvailableInMarketPlace = (
    {}
        :
        ProductAvailableInMarketPlaceProps
) => {

    return (
        <div className="flex items-center gap-1 text-sm text-blue-400">
            <OutlinedUserIcon size={20}/>
            <span className="select-none">موجود در انبار فروشنده</span>
        </div>
    );
};
