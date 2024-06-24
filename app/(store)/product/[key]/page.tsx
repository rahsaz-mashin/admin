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
import {ProductMarketplaceBox} from "@/stories/RahsazStore/Product/MarketplaceBox/MarketplaceBox";
import {ProductRahsazBox} from "@/stories/RahsazStore/Product/RahsazBox";
import {ProductRelatedProductsBox} from "@/stories/RahsazStore/Product/RelatedProductsBox";
import {ProductIntroBox} from "@/stories/RahsazStore/Product/IntroBox";
import {ProductTechnicalBox} from "@/stories/RahsazStore/Product/TechnicalBox/TechnicalBox";
import {ProductTechnicalMagBox} from "@/stories/RahsazStore/Product/TechnicalMagBox";
import {ProductRahsazOnlinePostsBox} from "@/stories/RahsazStore/Product/RahsazOnlinePostsBox";
import {ProductCommentsBox} from "@/stories/RahsazStore/Product/CommentsBox";
import {ProductQABox} from "@/stories/RahsazStore/Product/QABox";
import {ProductPriceBox} from "@/stories/RahsazStore/Product/PriceBox";

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
        <main className="grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-5 3xl:grid-cols-7">
            <section className="flex flex-col p-4 gap-3 col-span-2">
                <ProductBreadcrumbs/>
                <div className="flex flex-col gap-2 sticky top-0 z-30 py-3 bg-white">
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
                <ProductMarketplaceBox/>
                <ProductRahsazBox/>
                <ProductRelatedProductsBox/>
                <ProductIntroBox/>
                <ProductTechnicalBox/>
                <ProductTechnicalMagBox/>
                <ProductRahsazOnlinePostsBox/>
                <ProductCommentsBox/>
                <ProductQABox/>
            </section>
            <section className="relative col-span-1 lg:col-span-2 xl:col-span-3 3xl:col-span-5">
                <div className="static bg-purple-600 w-full h-full">
ffff
                </div>
            </section>
        </main>
);
}
