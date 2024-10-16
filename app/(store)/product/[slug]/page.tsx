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
import {Metadata, ResolvingMetadata} from "next";
import {rootConfig} from "@/config/root";
import React from "react";


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
        <main className="grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-5 3xl:grid-cols-7">
            <section className="col-span-2 relative">
                <div className="flex flex-col px-4 pb-4 gap-0 relative">
                    <ProductInfoBox
                        title={product.title}
                        slug={product.slug}
                        features={product.features}
                        categories={product.categories}
                        pictures={product.pictures}
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
                </div>
                <div className="pb-24 md:pb-0"/>
            </section>
        </main>
    );
}
