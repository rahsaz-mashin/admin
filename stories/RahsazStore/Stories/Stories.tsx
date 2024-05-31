"use client"

import React, {useState} from "react";
import {Button} from "@nextui-org/react";
import {BackHistoryIcon, BackIcon, HamburgerMenuIcon} from "@/stories/Icons";
import {Input} from "@nextui-org/input";
import {SearchIcon} from "@storybook/icons";
import {Badge} from "@nextui-org/badge";
import {useRouter} from "next/navigation";
import {StoryItem, StoryItemProps} from "@/stories/RahsazStore/Stories/StoryItem";


export type StoriesProps = {}


const stories: StoryItemProps[] = [
    {
        id: "1",
        cover: "https://dkstatics-public.digikala.com/digikala-content-x-profile/2fbff525e29363c4e05743df82c9ec7acba99599_1715614714.jpg?x-oss-process=image/resize,m_lfit,h_150,w_150/quality,q_80",
        type: "image",
        title: "پیش",
        subtitle: "موتوری و برقی",
        file: "",
    },
    {
        id: "1",
        cover: "https://dkstatics-public.digikala.com/digikala-content-x-profile/680fc0ca21e1cd21cf4fb5472ff5e581785d1f15_1716559108.jpg?x-oss-process=image/resize,m_lfit,h_150,w_150/quality,q_80",
        type: "image",
        title: "کمپین فروش",
        subtitle: "موتوری و برقی",
        file: "",
    },
    {
        id: "1",
        cover: "https://dkstatics-public.digikala.com/digikala-content-x-profile/347b9a7c62cb474b2b3f02503b721e4845164d23_1716228426.jpg?x-oss-process=image/resize,m_lfit,h_150,w_150/quality,q_80",
        type: "image",
        title: "راهساز آنلاین",
        subtitle: "آگهی رایگان بذارید",
        file: "",
    },
    {
        id: "1",
        cover: "https://dkstatics-public.digikala.com/digikala-content-x-profile/2fbff525e29363c4e05743df82c9ec7acba99599_1715614714.jpg?x-oss-process=image/resize,m_lfit,h_150,w_150/quality,q_80",
        type: "image",
        title: "پیش",
        subtitle: "موتوری و برقی",
        file: "",
    },
    {
        id: "1",
        cover: "https://dkstatics-public.digikala.com/digikala-content-x-profile/680fc0ca21e1cd21cf4fb5472ff5e581785d1f15_1716559108.jpg?x-oss-process=image/resize,m_lfit,h_150,w_150/quality,q_80",
        type: "image",
        title: "کمپین فروش",
        subtitle: "موتوری و برقی",
        file: "",
    },
    {
        id: "1",
        cover: "https://dkstatics-public.digikala.com/digikala-content-x-profile/347b9a7c62cb474b2b3f02503b721e4845164d23_1716228426.jpg?x-oss-process=image/resize,m_lfit,h_150,w_150/quality,q_80",
        type: "image",
        title: "راهساز آنلاین",
        subtitle: "آگهی رایگان بذارید",
        file: "",
    },
]

export const Stories = () => {

    const router = useRouter()

    return (
        <>
            <div className="px-0 py-0 gap-4 w-full flex items-center overflow-y-hidden">
                {stories.map((v, i) => {
                    return (<StoryItem key={v.id} {...v}/>)
                })}
            </div>
        </>
    );
};
