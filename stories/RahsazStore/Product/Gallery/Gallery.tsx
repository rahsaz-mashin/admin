"use client"

import {Breadcrumbs, BreadcrumbItem, Image, Card, CardBody, Button} from "@nextui-org/react";
import React, {useState} from "react";
import {SeparatorIcon} from "@/stories/Icons";
import {ProductCategory} from "@/interfaces/ProductCategory.interface";
import {FileStorage} from "@/interfaces/FileStorage.interface";
import NextImage from "next/image";
import {KeyboardArrowLeft, KeyboardArrowRight} from "@mui/icons-material";
import {useKeenSlider} from "keen-slider/react";
import { ProductBreadcrumbs } from "../Breadcrumbs";

export type ProductGalleryProps = {
    pictures?: FileStorage[];
    categories?: ProductCategory[];
}


export const ProductGallery = (props: ProductGalleryProps) => {

    const {
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

    return (

        <div
            className="select-none sticky top-0 w-full bg-primary/50 flex lg:hidden overflow-hidden"
        >
            <ProductBreadcrumbs
                categories={categories}
            />
            <div ref={sliderRef} className="keen-slider shadow-[inset_0_0px_15px_5px_#00000038]">
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
            {/*<Button*/}
            {/*    color="primary"*/}
            {/*    variant="shadow"*/}
            {/*    size="sm"*/}
            {/*    radius="full"*/}
            {/*    isIconOnly*/}
            {/*    className="absolute start-3 z-10 hidden lg:block"*/}
            {/*    onClick={(e) => {*/}
            {/*        // @ts-ignore*/}
            {/*        e.stopPropagation() || instanceRef.current?.prev()*/}
            {/*    }}*/}
            {/*    isDisabled={currentSlide === 0}*/}
            {/*>*/}
            {/*    <KeyboardArrowRight/>*/}
            {/*</Button>*/}
            {/*<Button*/}
            {/*    color="primary"*/}
            {/*    variant="shadow"*/}
            {/*    size="sm"*/}
            {/*    radius="full"*/}
            {/*    isIconOnly*/}
            {/*    className="absolute end-3 z-10 hidden lg:block"*/}
            {/*    onClick={(e) => {*/}
            {/*        // @ts-ignore*/}
            {/*        e.stopPropagation() || instanceRef.current?.next()*/}
            {/*    }}*/}
            {/*    isDisabled={currentSlide === (instanceRef.current?.track?.details?.slides?.length || 0) - 1}*/}
            {/*>*/}
            {/*    <KeyboardArrowLeft/>*/}
            {/*</Button>*/}
        </div>
    )
};
