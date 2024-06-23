import {ProductBreadcrumbs} from "@/stories/RahsazStore/Product/Breadcrumbs";
import {ProductTitle} from "@/stories/RahsazStore/Product/Title";
import {ProductRateSummary} from "@/stories/RahsazStore/Product/RateSummary/RateSummary";
import {ProductOfferPack} from "@/stories/RahsazStore/Product/OfferPack/OfferPack";
import {ProductAvailableInStock} from "@/stories/RahsazStore/Product/AvailableInStock/AvailableInStock";
import {ProductAvailableInMarketPlace} from "@/stories/RahsazStore/Product/AvailableInMarketPlace";
import {ProductFreeDelivery} from "@/stories/RahsazStore/Product/FreeDelivery";
import {ProductWithGift} from "@/stories/RahsazStore/Product/WithGift";
import {ProductCampaign} from "@/stories/RahsazStore/Product/Campaign/Campaign";
import {ProductCustomFeatures} from "@/stories/RahsazStore/Product/CustomFeatures";
import {ProductFeaturesBox} from "@/stories/RahsazStore/Product/FeaturesBox";

export default function Page({params}: { params: { key: string } }) {

    const product = {
        id: 444,
        title: "کولر روغن موتور شانگهای دیزل هزار سوراخ دو سربوش",
        categories: [
            {
                id: 8585,
                key: "engine",
                title: "موتور",

            }
        ],
        rate: 4.3,
        rateCount: 38,

    }

    return (
        <section className="flex flex-col p-4 gap-4 w-1/3">
            <ProductBreadcrumbs/>
            <div className="flex flex-col gap-2">
                <ProductTitle title={product.title}/>
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
            <ProductCustomFeatures/>
            <ProductFeaturesBox/>
        </section>
    );
}
