"use client"

import React, {useState} from "react";
import {StoryItem, StoryItemProps} from "@/stories/RahsazStore/Stories/StoryItem";
import {AnimatePresence, motion} from "framer-motion";
import {Image} from "@nextui-org/react";
import NextImage from "next/image";


export type StoriesProps = {}


const items: StoryItemProps[] = [
    {
        id: "1",
        cover: "https://dkstatics-public.digikala.com/digikala-content-x-profile/2fbff525e29363c4e05743df82c9ec7acba99599_1715614714.jpg?x-oss-process=image/resize,m_lfit,h_150,w_150/quality,q_80",
        type: "image",
        title: "پیش",
        subtitle: "موتوری و برقی",
        file: "https://api.zl50.ir/storage/images/1697958170 engine-piston-cross-section.jpg",
    },
    {
        id: "2",
        cover: "https://dkstatics-public.digikala.com/digikala-content-x-profile/680fc0ca21e1cd21cf4fb5472ff5e581785d1f15_1716559108.jpg?x-oss-process=image/resize,m_lfit,h_150,w_150/quality,q_80",
        type: "image",
        title: "کمپین فروش",
        subtitle: "موتوری و برقی",
        file: "https://api.zl50.ir/storage/images/1697958170 engine-piston-cross-section.jpg",
    },
    {
        id: "3",
        cover: "https://dkstatics-public.digikala.com/digikala-content-x-profile/347b9a7c62cb474b2b3f02503b721e4845164d23_1716228426.jpg?x-oss-process=image/resize,m_lfit,h_150,w_150/quality,q_80",
        type: "image",
        title: "راهساز آنلاین",
        subtitle: "آگهی رایگان بذارید",
        file: "https://api.zl50.ir/storage/images/1697958170 engine-piston-cross-section.jpg",
    },
    {
        id: "4",
        cover: "https://dkstatics-public.digikala.com/digikala-content-x-profile/2fbff525e29363c4e05743df82c9ec7acba99599_1715614714.jpg?x-oss-process=image/resize,m_lfit,h_150,w_150/quality,q_80",
        type: "image",
        title: "پیش",
        subtitle: "موتوری و برقی",
        file: "https://api.zl50.ir/storage/images/1697958170 engine-piston-cross-section.jpg",
    },
    {
        id: "5",
        cover: "https://dkstatics-public.digikala.com/digikala-content-x-profile/680fc0ca21e1cd21cf4fb5472ff5e581785d1f15_1716559108.jpg?x-oss-process=image/resize,m_lfit,h_150,w_150/quality,q_80",
        type: "image",
        title: "کمپین فروش",
        subtitle: "موتوری و برقی",
        file: "https://api.zl50.ir/storage/images/1697958170 engine-piston-cross-section.jpg",
    },
    {
        id: "6",
        cover: "https://dkstatics-public.digikala.com/digikala-content-x-profile/347b9a7c62cb474b2b3f02503b721e4845164d23_1716228426.jpg?x-oss-process=image/resize,m_lfit,h_150,w_150/quality,q_80",
        type: "image",
        title: "راهساز آنلاین",
        subtitle: "آگهی رایگان بذارید",
        file: "https://api.zl50.ir/storage/images/1697958170 engine-piston-cross-section.jpg",
    },
]

export const Stories = () => {
    const [openStory, setOpenStory] = useState<null | string>(null)
    const selected = items.find((v) => v.id === openStory)
    const handleOpenStory = (id: string) => () => {
        setOpenStory(id)

    }
    const handleCloseStory = () => {
        setOpenStory(null)
    }




    return (
        <>
            <div className="px-4 gap-4 w-full flex items-center overflow-y-hidden hide-scrollbar">
                {items.map((v, i) => {
                    return (
                        <StoryItem
                            key={v.id}
                            {...v}
                            handleOpenStory={handleOpenStory(v.id)}
                        />
                    )
                })}
            </div>
            <AnimatePresence>
                {selected && (
                    <motion.div
                        layoutId={selected.id}
                        onClick={handleCloseStory}
                        className="z-20 h-full fixed w-full top-0 start-0 bg-black cursor-pointer flex justify-center items-center"
                    >
                        <motion.div className="w-full md:w-[420px] h-full bg-blue-50 flex flex-col justify-between">
                            <div className="bg-red-600 w-full relative h-full">
                                <Image
                                    as={NextImage}
                                    width={420}
                                    height={500}
                                    radius="none"
                                    alt={selected.title}
                                    src={selected.file}
                                    loading="eager"
                                />
                            </div>
                            <div className="flex flex-col w-full items-start p-4">
                                <span
                                    className="font-black truncate text-lg w-full text-primary"
                                >
                                    {selected.title}
                                </span>
                                <span
                                    className="font-bold truncate text-sm w-full text-gray-500"
                                >
                                    {selected.subtitle}
                                </span>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
