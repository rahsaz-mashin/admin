import React from "react";
import {LanguageSwitcher, ThemeSwitcher} from "@/stories/RahsazStore";
import {Menu} from "@/interfaces/Menu.interface";
import Link from "next/link";




export type NavigationProps = {
    menu: Menu[]
}

export const Navigation = ({menu}: NavigationProps) => {


    return (
        <div className="flex-1 select-none w-full relative py-4">
            <div className="flex justify-between items-center h-full flex-col">
                <ul className="flex flex-[1_1_0] w-full ps-4 flex-col overflow-x-hidden">
                    {menu?.map((v, i) => {
                        const isActive = i === 0
                        return (
                            <Link
                                key={v.id}
                                className={
                                    [
                                        "relative text-black transition-all duration-700 flex flex-col mt-[30px] mb-[-20px] rounded-s-[20px] text-md cursor-pointer w-full h-[85px] gap-2 min-h-[85px] items-center justify-center",
                                        isActive ? "bg-white after:!w-[30px] before:!w-[30px]" : "",
                                        "hover:bg-white hover:after:!w-[30px] hover:before:!w-[30px]",
                                        "after:absolute after:bottom-[-30px] after:end-0 after:h-[30px] after:w-[0px] after:bg-store-navigation-down after:transition-all after:duration-500",
                                        "before:absolute before:top-[-30px] before:end-0 before:h-[30px] before:w-[0px] before:bg-store-navigation-up before:transition-all before:duration-500"
                                    ].join(" ")
                                }
                                href={v.url}
                            >
                                <div className="w-6 h-6">
                                    <i
                                        dangerouslySetInnerHTML={{__html: v.icon?.content || ""}}
                                        className="w-full h-full"
                                    />
                                </div>
                                <span className="truncate w-full px-2 text-center">
                                    {v.title}
                                </span>
                            </Link>
                        )
                    })}
                </ul>
                <div className="flex flex-col gap-2 h-max">
                    <ThemeSwitcher/>
                    <LanguageSwitcher/>
                </div>
            </div>
        </div>
    );
};
