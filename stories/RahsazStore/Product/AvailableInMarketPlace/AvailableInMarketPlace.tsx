import React from "react";
import {OutlinedUserIcon} from "@/stories/Icons";

export type ProductAvailableInMarketPlaceProps = {

}


export const ProductAvailableInMarketPlace = (props: ProductAvailableInMarketPlaceProps) => {

    const {} = props

    return (
        <div className="flex items-center gap-1 text-sm text-blue-400 truncate">
            <OutlinedUserIcon size={20}/>
            <span className="select-none truncate">موجود در انبار فروشنده</span>
        </div>
    );
};
