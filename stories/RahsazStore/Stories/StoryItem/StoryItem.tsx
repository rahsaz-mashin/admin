import React from "react";
import {Image} from "@nextui-org/react";
import NextImage from "next/image";


export type StoryItemProps = {
    id: string;
    cover: string,
    title: string,
    subtitle: string,
    type: "image" | "video",
    file: "",
}



export const StoryItem = (
    {
        id,
        cover,
        title,
        subtitle,
        type,
        file
    }: StoryItemProps
) => {


    return (
        <div
            key={id}
            // initial={isActive ? "hover" : "rest"} whileHover="hover" animate={isActive ? "hover" : "rest"}
            // // variants={color}
            // className={"group text-white rounded-lg active:scale-90 shrink select-none cursor-pointer transition-all relative h-11 gap-2 flex items-center" + (isActive ? " bg-black/20" : "")}
            // onClick={() => {
            //     router.push()
            // }}
            className="group min-w-24 w-24 flex gap-1 flex-col justify-center items-center cursor-pointer transition duration-500 hover:scale-95 active:scale-90"
        >
            <div className="rounded-full bg-gradient-to-b from-[#FFD4A5] to-[#FF921F] p-0.5">
                <Image
                    as={NextImage}
                    width={96}
                    height={96}
                    alt={title}
                    src={cover}
                    radius="full"
                    loading="eager"
                    className="border-4 border-background"
                />
            </div>
            <span className="font-bold truncate text-sm text-center w-full">{title}</span>
            <span className="font-light truncate text-xs text-center w-full">{subtitle}</span>
        </div>
    );
};
