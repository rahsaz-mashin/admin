import React from "react";
import {Image} from "@nextui-org/react";
import NextImage from "next/image";
import {motion} from "framer-motion";




export type StoryItemProps = {
    id: string;
    cover: string,
    title: string,
    subtitle: string,
    type: "image" | "video",
    file: string,
}



export const StoryItem = (
    {
        id,
        cover,
        title,
        subtitle,
        type,
        file,
        handleOpenStory
    }: StoryItemProps & {handleOpenStory: () => void}
) => {


    return (
        <motion.div
            layoutId={id}
            onClick={handleOpenStory}
            className="min-w-24 w-24 flex gap-1 flex-col justify-center items-center cursor-pointer transition duration-200 hover:scale-95 active:scale-90 select-none"
        >
            <motion.div className="rounded-full bg-gradient-to-b from-[#FFD4A5] to-[#FF921F] p-0.5">
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
            </motion.div>
            <motion.span className="font-bold truncate text-sm text-center w-full">{title}</motion.span>
            <motion.span className="font-light truncate text-xs text-center w-full">{subtitle}</motion.span>
        </motion.div>
    );
};
