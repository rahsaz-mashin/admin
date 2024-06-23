"use client"

import {Breadcrumbs, BreadcrumbItem} from "@nextui-org/react";
import React from "react";
import {SeparatorIcon} from "@/stories/Icons";

export type BreadcrumbsProps = {

}


export const ProductBreadcrumbs = (
    {

    }: BreadcrumbsProps
) => {

    const items = [
        {
            key: "home",
            title: "راهساز ماشین"
        },
        {
            key: "category-engine",
            title: "موتور"
        },
        {
            key: "category-engine-old-shanghai",
            title: "شانگهای قدیم"
        },
    ]


    return (
        <div className="">
            <Breadcrumbs
                color="secondary"
                separator={<SeparatorIcon size={20}/>}
            >
                {items.map(({key, title}) => {
                    return (
                        <BreadcrumbItem
                            key={key}
                            className="font-bold"
                        >
                            {title}
                        </BreadcrumbItem>
                    )
                })}
            </Breadcrumbs>
        </div>
    );
};
