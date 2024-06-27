import React from "react";
import {ProductBreadcrumbs} from "@/stories/RahsazStore/Product/Breadcrumbs";
import {ProductTitle} from "@/stories/RahsazStore/Product/Title";
import {ProductRateSummary} from "@/stories/RahsazStore/Product/RateSummary";
import {ProductOfferPack} from "@/stories/RahsazStore/Product/OfferPack";
import {ProductAvailableInStock} from "@/stories/RahsazStore/Product/AvailableInStock";
import {ProductCampaign} from "@/stories/RahsazStore/Product/Campaign";


export type ProductInfoBoxProps = {
    title: string
}


export const ProductInfoBox = (
    {title}
        :
        ProductInfoBoxProps
) => {


    return (
        <>
            <ProductBreadcrumbs/>
            <div className="flex flex-col gap-2 top-0 z-30 py-3 bg-white">
                <ProductTitle title={title}/>
                <div className="flex items-center gap-3">
                    <ProductRateSummary/>
                    <ProductOfferPack/>
                    <ProductAvailableInStock/>
                    {/*<ProductAvailableInMarketPlace/>*/}
                    {/*<ProductFreeDelivery/>*/}
                    {/*<ProductWithGift/>*/}
                </div>
                <ProductCampaign/>
            </div>
        </>
    );
};
