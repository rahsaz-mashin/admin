"use client"

import React, {useState} from "react";
import {Button} from "@nextui-org/react";
import {BackHistoryIcon, BackIcon, HamburgerMenuIcon} from "@/stories/Icons";
import {Input} from "@nextui-org/input";
import {SearchIcon} from "@storybook/icons";
import {Badge} from "@nextui-org/badge";
import {useRouter} from "next/navigation";



export type StoriesProps = {

}


const stories = [
    {
        id: "1",
        image: "",

    }
]

export const Stories = () => {

    const router = useRouter()

    return (
        <>
            <div className="bg-red-600 px-2 py-2 gap-2 w-full flex items-center">


            </div>
        </>
    );
};
