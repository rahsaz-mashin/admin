import React from "react";
import {OutlinedPackIcon} from "@/stories/Icons";

export type ProductOfferPackProps = {

}


export const ProductOfferPack = (props: ProductOfferPackProps) => {

    const {} = props

    return (
        <div className="flex items-center gap-1 text-sm text-blue-500 truncate">
            <span className="font-bold select-none truncate">بسته پیشنهادی</span>
            <OutlinedPackIcon size={20}/>
        </div>
    );
};
