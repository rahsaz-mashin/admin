import React from "react";
import {OutlinedGiftIcon, OutlinedWalletIcon} from "@/stories/Icons";

export type ProductWithGiftProps = {}


export const ProductWithGift = (
    {}
        :
        ProductWithGiftProps
) => {

    return (
        <div className="flex items-center gap-1 text-sm text-orange-600">
            <OutlinedWalletIcon size={20}/>
            <span className="select-none">هدیه نقدی</span>
        </div>
    );
};
