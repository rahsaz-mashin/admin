import React, {CSSProperties} from "react";
import {Card, CardBody, CardHeader, CardFooter} from "@nextui-org/card";
import {Chip} from "@nextui-org/chip";


export type ProductTabContentsProps = {}


export const ProductTabContents = (
    {}
        :
        ProductTabContentsProps
) => {

    const items = [
        {
            key: "info",
            title: "مشخصات کالا"
        },
        {
            key: "features",
            title: "ویژگی های مختصر"
        },
        {
            key: "marketplace",
            title: "فروشنده"
        },
        {
            key: "rahsaz",
            title: "راهساز ماشین"
        },
        {
            key: "related",
            title: "کالاهای مشابه"
        },
        {
            key: "intro",
            title: "معرفی کلی"
        },
        {
            key: "technical",
            title: "مشخصات فنی"
        },
        {
            key: "mag",
            title: "نقشه فنی"
        },
        {
            key: "online",
            title: "مطالب مرتبط"
        },
        {
            key: "comments",
            title: "دیدگاه ها"
        },
        {
            key: "qa",
            title: "پرسش و پاسخ"
        },
        {
            key: "peoples",
            title: "کالاهای خریداری شده دیگران"
        },
    ]


    return (
        <ul className="flex flex-col gap-2 items-end select-none">
            {items.map((v, i) => {
                return (
                    <li key={i} className="flex items-center opacity-25">
                        <span
                            className="bg-primary px-2 h-8 w-fit shadow text-white font-light rounded-full text-sm flex items-center justify-center"
                        >
                            {v.title}
                        </span>
                        <div className="bg-primary h-1 w-4"/>
                        <span
                            className="bg-primary px-2 h-8 w-8 shadow text-white rounded-full aspect-square flex items-center justify-center"
                        >
                            .
                        </span>
                    </li>
                )
            })}
        </ul>
    );
};
