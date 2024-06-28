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
import {ProductTabContents} from "@/stories/RahsazStore/Product/TabContents";
import {ProductInfoBox} from "@/stories/RahsazStore/Product/InfoBox";

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
            <section className="col-span-2 relative">
                <div className="flex flex-col p-4 gap-3 relative">
                    <ProductInfoBox title={product.title}/>
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
                </div>
            </section>
            {/*<section className="col-span-1 lg:col-span-2 xl:col-span-3 3xl:col-span-5 relative">*/}
            {/*    <div className="bg-primary h-96">*/}
            {/*        /!*<div className="">*!/*/}
            {/*        /!*    <ProductTabContents/>*!/*/}
            {/*        /!*</div>*!/*/}
            {/*        /!*<div className="">*!/*/}
            {/*        /!*    <ProductPriceBox/>*!/*/}
            {/*        /!*</div>*!/*/}
            {/*    </div>*/}
            {/*</section>*/}
        </main>
    );
}
