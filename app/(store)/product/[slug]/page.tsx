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
import {axiosServerCoreWithAuth} from "@/lib/axiosServerCore";
import {Product} from "@/interfaces/Product.interface";
import {auth} from "@/auth";




export default async function Page({params: {slug}}: { params: { slug: string } }) {

    const session = await auth()
    const axiosServer = axiosServerCoreWithAuth(session?.accessToken)
    const product: Product = await axiosServer.get(`/product/${slug}`)



    return (
        <main className="grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-5 3xl:grid-cols-7">
            <section className="col-span-2 relative">
                <div className="flex flex-col p-4 gap-3 relative">
                    <ProductInfoBox title={product.title}/>
                    <ProductCustomFeatures features={product.features}/>
                    <ProductFeaturesBox technical={product.technical}/>
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
        </main>
    );
}
