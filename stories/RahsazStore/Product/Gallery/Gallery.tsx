"use client"

import {Breadcrumbs, BreadcrumbItem, Image} from "@nextui-org/react";
import React from "react";
import {SeparatorIcon} from "@/stories/Icons";
import {ProductCategory} from "@/interfaces/ProductCategory.interface";
import {FileStorage} from "@/interfaces/FileStorage.interface";
import NextImage from "next/image";

export type ProductGalleryProps = {
    pictures?: FileStorage[];
}


export const ProductGallery = (props: ProductGalleryProps) => {

    const {
        pictures,
    } = props


    return (
        <div className="select-none w-[calc(100%+2rem)] bg-primary/50 shadow-[inset_0_0px_15px_5px_#00000038] -mx-4 flex lg:hidden">
            {pictures?.map((v, idx) => {
                return (
                    <div className="w-24 h-24">
                        <Image
                            as={NextImage}
                            width={100}
                            height={100}
                            alt={v?.alt}
                            title={v?.title}
                            src={`${v ? (v.system.baseUrl + "/" + v?.path) : ""}`}
                            radius="none"
                            loading="eager"
                            className="object-fill !h-full !w-full"
                            classNames={{wrapper: "h-full w-full bg-contain bg-center"}}
                            fallbackSrc="/fallback.png"
                        />
                    </div>
                )
            })}
        </div>
    )
};
