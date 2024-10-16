"use client"

import {Breadcrumbs, BreadcrumbItem} from "@nextui-org/react";
import React from "react";
import {SeparatorIcon} from "@/stories/Icons";
import {ProductCategory} from "@/interfaces/ProductCategory.interface";

export type BreadcrumbsProps = {
    categories?: ProductCategory[];
}


export const ProductBreadcrumbs = (props: BreadcrumbsProps) => {

    const {
        categories,
    } = props


    const items = [
        {
            key: "home",
            title: "راهساز ماشین",
            url: "/"
        },
    ]

    if (categories?.length) {
        if(categories[0]?.parent?.title) {
            items.push({
                key: categories[0]?.parent?.slug,
                title: categories[0]?.parent?.title,
                url: `/category/${categories[0]?.parent?.slug}`
            })
            items.push({
                key: categories[0]?.slug,
                title: categories[0]?.title,
                url: `/category/${categories[0]?.slug}`
            })
            items.push({
                key: "",
                title: "",
                url: ""
            })
        }
    }


    return (
        <div className="select-none absolute py-4 w-full z-20">
            <Breadcrumbs
                color="secondary"
                separator={<SeparatorIcon size={20}/>}
            >
                {items.map(({key, title, url}) => {
                    return (
                        <BreadcrumbItem
                            key={key}
                            className="font-bold"
                            href={url}
                        >
                            {title}
                        </BreadcrumbItem>
                    )
                })}
            </Breadcrumbs>
        </div>
    );
};
