"use client"

import {Button, Image} from "@nextui-org/react";
import React, {useState} from "react";
import {ProductCategory} from "@/interfaces/ProductCategory.interface";
import {FileStorage} from "@/interfaces/FileStorage.interface";
import NextImage from "next/image";
import {useKeenSlider} from "keen-slider/react";
import { ProductBreadcrumbs } from "../Breadcrumbs";
import {Share} from "@mui/icons-material";
import {rootConfig} from "@/config/root";
import {slug} from "github-slugger";

export type ProductGalleryProps = {
    title: string;
    slug: string;
    pictures?: FileStorage[];
    categories?: ProductCategory[];
}


export const ProductGallery = (props: ProductGalleryProps) => {

    const {
        title,
        slug,
        pictures,
        categories,
    } = props

    const [currentSlide, setCurrentSlide] = useState(0)
    const [loaded, setLoaded] = useState(false)
    const [sliderRef, instanceRef] = useKeenSlider({
        loop: true,
        mode: "snap",
        rtl: true,
        slides: {origin: "center", spacing: 0, perView: 1},
        initial: 0,
        vertical: false,
        rubberband: false,
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel)
        },
        created() {
            setLoaded(true)
        },
    }, [])


    const handleShare = async () => {
        if (navigator?.share) {
            try {
                await navigator.share({
                    title: "در راهساز ماشین ببینید:\n",
                    url: `${rootConfig.baseUrl}/product/${slug}`,
                    text: title,
                })
            } catch (e) {

            }
        }
    }

    return (

        <div
            className="select-none sticky w-full bg-white flex lg:hidden overflow-hidden"
        >
            <ProductBreadcrumbs
                categories={categories}
            />
            <div ref={sliderRef} className="keen-slider mt-8 shadow-[inset_0_0px_15px_5px_#00000038]">
                {pictures?.map((v, idx) => {
                    return (
                        <div key={idx} className="w-full h-60 keen-slider__slide bg-white">
                            <Image
                                as={NextImage}
                                width={512}
                                height={512}
                                alt={v?.alt}
                                title={v?.title}
                                src={`${v ? (v.system.baseUrl + "/" + v?.path) : ""}`}
                                radius="none"
                                loading="eager"
                                className="object-contain !h-full !w-full"
                                classNames={{wrapper: "h-full w-full bg-contain bg-center !max-w-none"}}
                                fallbackSrc="/fallback.png"
                            />
                        </div>
                    )
                })}
            </div>
            <Button
                color="primary"
                variant="light"
                size="md"
                radius="full"
                isIconOnly
                className="absolute start-4 bottom-4 z-10"
                onPress={handleShare}
            >
                <Share/>
            </Button>
        </div>
    )
};
