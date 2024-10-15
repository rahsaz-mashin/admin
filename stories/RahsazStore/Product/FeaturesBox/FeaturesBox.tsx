import React from "react";
import {Card, CardBody, CardHeader, CardFooter} from "@nextui-org/card";
import {OutlinedSettingIcon} from "@/stories/Icons";
import {ProductFeaturesList} from "@/interfaces/Product.interface";
import {ProductFeaturesCategory} from "@/interfaces/ProductFeaturesCategory.interface";
import {ProductFeatures} from "@/interfaces/ProductFeatures.interface";

export type ProductFeaturesBoxProps = {
    features?: ProductFeaturesList[];
}


export const ProductFeaturesBox = (props: ProductFeaturesBoxProps) => {

    const {
        features
    } = props

    if (!features?.length) return null

    return (
        <div className="items-center gap-3 grid grid-cols-1 xs:grid-cols-2 select-none">
            {features.map(({id, category, value}, i) => {
                return (
                    <div key={id} className="relative flex pt-2 group odd:ps-2 even:pe-2 cursor-pointer">
                        <div
                            className="bg-primary transition group-hover:bg-primary-400 h-12 w-12 absolute top-0 group-odd:start-0 group-even:end-0 z-10 group-odd:rounded-tr-lg group-even:rounded-tl-lg rounded-3xl text-white p-2"
                        >
                            <OutlinedSettingIcon/>
                        </div>
                        <Card

                            isHoverable
                            isPressable
                            disableRipple
                            radius="lg"
                            shadow="none"
                            className="border-2 border-primary rounded-[1.75rem] w-full"
                        >
                            <CardHeader className="font-bold py-2.5 ps-12">
                                {(category as ProductFeaturesCategory)?.title}
                            </CardHeader>
                            <CardFooter className="font-bold py-2.5 text-primary gap-1">
                                {(value as ProductFeatures)?.title}
                                {/*<span>({v.itemsCount})</span>*/}
                            </CardFooter>
                        </Card>
                    </div>
                )
            })}
        </div>
    );
};
