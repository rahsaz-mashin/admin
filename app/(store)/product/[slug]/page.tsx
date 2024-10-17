import {ProductMarketplaceBox} from "@/stories/RahsazStore/Product/MarketplaceBox/MarketplaceBox";
import {ProductRahsazBox} from "@/stories/RahsazStore/Product/RahsazBox";
import {ProductRelatedProductsBox} from "@/stories/RahsazStore/Product/RelatedProductsBox";
import {ProductIntroBox} from "@/stories/RahsazStore/Product/IntroBox";
import {ProductTechnicalMagBox} from "@/stories/RahsazStore/Product/TechnicalMagBox";
import {ProductRahsazOnlinePostsBox} from "@/stories/RahsazStore/Product/RahsazOnlinePostsBox";
import {ProductCommentsBox} from "@/stories/RahsazStore/Product/CommentsBox";
import {ProductQABox} from "@/stories/RahsazStore/Product/QABox";
import {ProductInfoBox} from "@/stories/RahsazStore/Product/InfoBox";
import {axiosServerCoreWithAuth} from "@/lib/axiosServerCore";
import {Product} from "@/interfaces/Product.interface";
import {auth} from "@/auth";
import {ProductTechnicalBox} from "@/stories/RahsazStore/Product/TechnicalBox";
import {Metadata} from "next";
import {rootConfig} from "@/config/root";
import React from "react";
import {ProductGallery} from "@/stories/RahsazStore/Product/Gallery/Gallery";
import {ProductFeaturesBox} from "@/stories/RahsazStore/Product/FeaturesBox";
import {ProductPriceBox} from "@/stories/RahsazStore/Product/PriceBox";


const getProduct = async (slug: string) => {
    const session = await auth()
    const axiosServer = axiosServerCoreWithAuth(session?.accessToken)
    return await axiosServer.get(`/product/${slug}`) as Product
}


export async function generateMetadata({params: {slug}}: { params: { slug: string } }): Promise<Metadata> {
    const product = await getProduct(slug)
    const description = product.intro?.replace(/<\/[^>]+(>|$)/g, "")
    return {
        title: product.title,
        description: description,
        keywords: [...product.tags, ...product.names],
        openGraph: {
            siteName: rootConfig.name,
            title: product.title,
            tags: [...product.tags, ...product.names],
            description: description,
            images: product.thumbnail ? [`${product.thumbnail?.system?.baseUrl}/${product.thumbnail?.path}`] : undefined
        },
        twitter: {
            site: rootConfig.name,
            title: product.title,
            description: description,
            images: product.thumbnail ? [`${product.thumbnail?.system?.baseUrl}/${product.thumbnail?.path}`] : undefined
        },
    }
}

export default async function Page({params: {slug}}: { params: { slug: string } }) {

    const product = await getProduct(slug)


    return (
        <main className="grid grid-cols-6">
            <section className="col-span-6 lg:col-span-3 xl:col-span-2 flex flex-col relative">
                <ProductGallery
                    title={product.title}
                    slug={product.slug}
                    pictures={product.pictures}
                    categories={product.categories}
                />
                <div
                    className="flex flex-col gap-0 relative bg-white shadow-[0px_0px_24px_8px_#00000069] lg:shadow-none"
                >
                    <ProductInfoBox
                        title={product.title}
                        slug={product.slug}
                    />
                    <ProductFeaturesBox
                        features={product.features}
                    />
                    <ProductTechnicalBox
                        summary
                        technical={product.technical}
                    />
                    <ProductMarketplaceBox
                    />
                    <ProductRahsazBox
                    />
                    <ProductRelatedProductsBox
                    />
                    <ProductIntroBox
                        intro={product.intro}
                    />
                    <ProductTechnicalBox
                        technical={product.technical}
                    />
                    <ProductTechnicalMagBox
                    />
                    <ProductRahsazOnlinePostsBox
                    />
                    <ProductCommentsBox
                    />
                    <ProductQABox
                    />
                    <div className="bg-white sticky bottom-0 z-30">
                        <ProductPriceBox
                            mobile
                            price={product.price}
                            inventory={product.inventory}
                            isActiveInventoryManagement={product.isActiveInventoryManagement}
                            minimumInventoryWarn={product.minimumInventoryWarn}
                        />
                        <div className="pb-24 md:pb-0"/>
                    </div>
                </div>

            </section>
            <section className="hidden lg:col-span-3 xl:col-span-4 bg-red-600 lg:flex flex-col">
                <div className="pt-0 px-4 bg-primary sticky top-0 z-30">
                    <div className="flex flex-col gap-2 w-full py-3">
                        تصویر
                    </div>
                </div>
                <ProductPriceBox/>
            </section>
        </main>
    );
}
