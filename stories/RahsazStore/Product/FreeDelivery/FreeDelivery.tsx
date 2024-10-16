import React from "react";
import {OutlinedGiftIcon} from "@/stories/Icons";

export type ProductFreeDeliveryProps = {

}


export const ProductFreeDelivery = (props: ProductFreeDeliveryProps) => {

    const {} = props

    return (
        <div className="flex items-center gap-1 text-sm text-yellow-400">
            <OutlinedGiftIcon size={20}/>
            <span className="select-none">ارسال رایگان</span>
        </div>
    );
};
