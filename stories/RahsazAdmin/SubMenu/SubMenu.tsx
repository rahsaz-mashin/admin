"use client"

import React from "react";
import {SubMenuItem} from "@/stories/RahsazAdmin/SubMenu/SubMenuItem";
import {getCategoryList} from "@/data/admin";


export type SubMenuType = {
    workspace: string;
    section: string;
    category?: string;
}

export const SubMenu = (props: SubMenuType) => {

    const { workspace, section } = props
    const categoriesList = getCategoryList(workspace, section)

    if (!categoriesList?.length) return null
    return (
        <div className="grid gap-4 -mt-4">
            {categoriesList.map((category) => {
                    return (
                        <section
                            key={category.key}
                            className="flex flex-col"
                        >
                            <h3
                                data-disabled={!category.isEnable || undefined}
                                className="-mx-4 px-4 py-2 truncate text-base font-medium sm:text-md md:font-semibold lg:font-bold lg:text-lg bg-background sticky top-24 z-20 text-gray-600 data-[disabled]:opacity-60"
                            >
                                {category.title}
                            </h3>
                            {category.sub?.length && (
                                <div
                                    className="grid pt-2.5 pb-2.5 grid-cols-1 us:grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 4xl:grid-cols-8 5xl:grid-cols-10 8xl:grid-cols-12 gap-4"
                                >
                                    {category.sub.map((menu) => {
                                            return (
                                                <SubMenuItem
                                                    key={menu.key}
                                                    id={menu.key}
                                                    label={menu.title}
                                                    description={menu.description}
                                                    icon={menu.icon}
                                                    workspace={workspace}
                                                    section={section}
                                                    category={category.key}
                                                    isEnable={menu.isEnable}
                                                />
                                            )
                                        }
                                    )}
                                </div>
                            )}
                        </section>
                    )
                }
            )}
        </div>
    );
};
