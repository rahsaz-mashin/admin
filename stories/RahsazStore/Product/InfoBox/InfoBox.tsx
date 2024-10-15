import React from "react";
import {ProductBreadcrumbs} from "@/stories/RahsazStore/Product/Breadcrumbs";
import {ProductTitle} from "@/stories/RahsazStore/Product/Title";
import {ProductRateSummary} from "@/stories/RahsazStore/Product/RateSummary";
import {ProductOfferPack} from "@/stories/RahsazStore/Product/OfferPack";
import {ProductAvailableInStock} from "@/stories/RahsazStore/Product/AvailableInStock";
import {ProductCampaign} from "@/stories/RahsazStore/Product/Campaign";
import {CardHeader} from "@nextui-org/card";
import {Button} from "@nextui-org/react";
import Link from "next/link";
import {ProductFeaturesBox} from "@/stories/RahsazStore/Product/FeaturesBox";
import {ProductFeaturesList} from "@/interfaces/Product.interface";
import {ProductCategory} from "@/interfaces/ProductCategory.interface";
import {ProductMachineModel} from "@/interfaces/ProductMachineModel.interface";


export type ProductInfoBoxProps = {
    title: string;
    slug: string;
    features?: ProductFeaturesList[];
    categories?: ProductCategory[];
    machinery?: ProductMachineModel[]
}


export const ProductInfoBox = (props: ProductInfoBoxProps) => {

    const {
        title,
        slug,
        features,
        categories,
        machinery,
    } = props

    return (
        <div className="pt-4" id="info">
            <ProductBreadcrumbs
                categories={categories}
            />
            <div className="flex flex-col gap-2 top-0 z-30 py-3 bg-white">
                <ProductTitle
                    title={title}
                    slug={slug}
                />
                <div className="flex items-center gap-3">
                    <ProductRateSummary/>
                    <ProductOfferPack/>
                    <ProductAvailableInStock/>
                    {/*<ProductAvailableInMarketPlace/>*/}
                    {/*<ProductFreeDelivery/>*/}
                    {/*<ProductWithGift/>*/}
                </div>
                {/*<ProductCampaign/>*/}
                <ProductFeaturesBox
                    features={features}
                />
            </div>
        </div>
    );
};
