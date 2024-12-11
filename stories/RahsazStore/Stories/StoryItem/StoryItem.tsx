import React from "react";
import {Image} from "@nextui-org/react";
import NextImage from "next/image";
import {motion} from "framer-motion";
import {Skeleton} from "@nextui-org/skeleton";
import {Story} from "@/interfaces/Story.interface";
import {FileStorage} from "@/interfaces/FileStorage.interface";
import {Product} from "@/interfaces/Product.interface";


export type StoryItemProps = Story & {
    handleOpenStory?: () => void
}


export const StoryItem = (props: StoryItemProps) => {

    const {
        id,
        title,
        description,
        file,
        thumbnail,
        product,
        expiredAt,

        handleOpenStory
    } = props

    const isLoaded = !!id


    return (
        <motion.div
            layoutId={id?.toString()}
            onClick={handleOpenStory}
            className="min-w-24 w-24 flex gap-2 flex-col justify-center items-center cursor-pointer transition duration-200 hover:scale-95 active:scale-90 select-none"
        >
            <Skeleton
                className="flex rounded-full w-24 h-24"
                classNames={{content: "w-full"}}
                isLoaded={isLoaded}
            >
                <motion.div className="rounded-full bg-gradient-to-b from-[#FFD4A5] to-[#FF921F] p-0.5">
                    <Image
                        as={NextImage}
                        width={96}
                        height={96}
                        alt={title}
                        src={thumbnail ? `${thumbnail?.system.baseUrl}/${thumbnail?.path}` : ""}
                        radius="full"
                        loading="eager"
                        className="border-4 border-background"
                    />
                </motion.div>
            </Skeleton>
            <Skeleton
                className="flex rounded-md w-full h-9"
                classNames={{content: "w-full"}}
                isLoaded={isLoaded}
            >
                <span
                    className="font-bold text-sm text-center w-full h-full flex justify-start items-center"
                >
                    {title}
                </span>
            </Skeleton>
            {/*<Skeleton*/}
            {/*    className="flex rounded-md w-full h-4"*/}
            {/*    classNames={{content: "w-full"}}*/}
            {/*    isLoaded={isLoaded}*/}
            {/*>*/}
            {/*    <span*/}
            {/*        className="font-light truncate text-xs text-center w-full h-full flex justify-start items-center"*/}
            {/*    >*/}
            {/*        {description}*/}
            {/*    </span>*/}
            {/*</Skeleton>*/}
        </motion.div>
    );
};
