"use client"

import React from "react";
import {ProductPriceBox} from "@/stories/RahsazStore/Product/PriceBox";
import {ProductTabContents} from "@/stories/RahsazStore/Product/TabContents";



export const FixedContent = () => {
    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-5 3xl:grid-cols-7 top-0 lg:h-full w-full absolute">
                <section
                    className="col-span-1 lg:col-span-2 lg:col-start-3 xl:col-span-3 xl:col-start-3 3xl:col-span-5 3xl:col-start-3 z-30 relative"
                >

                    <div className="absolute top-0 end-0">
                        <ProductTabContents/>
                    </div>
                    <div className="absolute bottom-0 w-full">
                        <ProductPriceBox/>
                    </div>
                </section>
            </div>
        </>
    );
};
