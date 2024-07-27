
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
import {ProductInfoBox} from "@/stories/RahsazStore/Product/InfoBox";
import {CategoryMainSlideList} from "@/stories/RahsazStore/Category/MainSlideList";

export default function Page({params}: { params: { key: string } }) {



    return (
        <main className="grid grid-cols-6 gap-0">
            <section className="relative col-span-full">
                <CategoryMainSlideList/>
            </section>
        </main>
    );
}
