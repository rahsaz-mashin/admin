import React from "react";
import {RChar} from "@/stories/RahsazGate/Cover/RChar";
import {AChar} from "@/stories/RahsazGate/Cover/AChar";
import {HChar} from "@/stories/RahsazGate/Cover/HChar";
import {SChar} from "@/stories/RahsazGate/Cover/SChar";
import {ZChar} from "@/stories/RahsazGate/Cover/ZChar";
import {Stone} from "@/stories/RahsazGate/Cover/Stone";
import {Cactus} from "@/stories/RahsazGate/Cover/Cactus";


export const Cover = () => {
    return (
        <div className="w-full h-full flex gap-4 justify-center items-center flex-1" dir="ltr">
            <RChar/>
            <AChar/>
            <HChar/>
            <SChar/>
            <AChar/>
            <ZChar/>
            <Stone/>
            <Cactus/>
        </div>
    );
};
