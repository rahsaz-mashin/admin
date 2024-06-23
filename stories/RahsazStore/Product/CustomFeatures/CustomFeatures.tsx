import React from "react";
import {Card, CardBody, CardHeader, CardFooter} from "@nextui-org/card";
import {OutlinedSettingIcon} from "@/stories/Icons";

export type ProductCustomFeaturesProps = {}


export const ProductCustomFeatures = (
    {}
        :
        ProductCustomFeaturesProps
) => {

    const items = [
        {
            id: 123,
            key: "quality",
            title: "جنس",
            current: {
                id: 475,
                key: "main",
                title: "اصلی"
            },
            itemsCount: 4,
        },
        {
            id: 456,
            key: "country",
            title: "کشور سازنده",
            current: {
                id: 478,
                key: "japan",
                title: "ژاپن"
            },
            itemsCount: 8,
        },
        {
            id: 985,
            key: "manufacture",
            title: "برند",
            current: {
                id: 472,
                key: "pmsco",
                title: "PMSCO"
            },
            itemsCount: 3,
        },
    ]

    return (
        <div className="items-center gap-5 grid grid-cols-1 md:grid-cols-2 select-none">
            {items.map((v, i) => {
                return (
                    <div key={v.key} className="relative flex pt-2 group odd:ps-2 even:pe-2 cursor-pointer">
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
                                {v.current.title}
                            </CardHeader>
                            <CardFooter className="font-bold py-2.5 text-primary gap-1">
                                {v.title}
                                <span>({v.itemsCount})</span>
                            </CardFooter>
                        </Card>
                    </div>
                )
            })}
        </div>
    );
};
