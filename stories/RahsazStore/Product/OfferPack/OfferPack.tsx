import React from "react";
import {OutlinedPackIcon} from "@/stories/Icons";

export type ProductOfferPackProps = {}


export const ProductOfferPack = (
    {}
        :
        ProductOfferPackProps
) => {

    return (
        <div className="flex items-center gap-1 text-sm text-blue-500">
            <span className="font-bold select-none">بسته پیشنهادی</span>
            <OutlinedPackIcon size={20}/>
        </div>
    );
};
