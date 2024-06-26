import React, {CSSProperties} from "react";
import {Card, CardBody, CardHeader, CardFooter} from "@nextui-org/card";
import {Chip} from "@nextui-org/chip";
import {
    OutlinedBasketIcon,
    OutlinedBookmarkIcon, OutlinedCommentIcon, OutlinedDialogIcon,
    OutlinedDocumentIcon, OutlinedMapIcon,
    OutlinedMirrorLeftIcon, OutlinedNotebookBookmarkIcon, OutlinedNotesIcon,
    OutlinedRibbonStarIcon, OutlinedRulerPenIcon,
    OutlinedShopIcon
} from "@/stories/Icons";


export type ProductTabContentsProps = {}


export const ProductTabContents = (
    {}
        :
        ProductTabContentsProps
) => {

    const items = [
        {
            key: "info",
            title: "مشخصات کالا",
            icon: OutlinedBookmarkIcon
        },
        {
            key: "features",
            title: "ویژگی های مختصر",
            icon: OutlinedDocumentIcon
        },
        {
            key: "marketplace",
            title: "فروشنده",
            icon: OutlinedShopIcon
        },
        {
            key: "rahsaz",
            title: "راهساز ماشین",
            icon: OutlinedRibbonStarIcon
        },
        {
            key: "related",
            title: "کالاهای مشابه",
            icon: OutlinedMirrorLeftIcon
        },
        {
            key: "intro",
            title: "معرفی کلی",
            icon: OutlinedNotebookBookmarkIcon
        },
        {
            key: "technical",
            title: "مشخصات فنی",
            icon: OutlinedRulerPenIcon
        },
        {
            key: "mag",
            title: "نقشه فنی",
            icon: OutlinedMapIcon
        },
        {
            key: "online",
            title: "مطالب مرتبط",
            icon: OutlinedNotesIcon
        },
        {
            key: "comments",
            title: "دیدگاه ها",
            icon: OutlinedCommentIcon
        },
        {
            key: "qa",
            title: "پرسش و پاسخ",
            icon: OutlinedDialogIcon
        },
        {
            key: "peoples",
            title: "کالاهای خریداری شده دیگران",
            icon: OutlinedBasketIcon
        },
    ]


    return (
        <ul className="flex flex-col gap-2 items-end select-none">
            {items.map((v, i) => {
                return (
                    <li key={i} className="flex items-center ">
                        <span
                            className="bg-primary px-2 h-10 w-fit shadow text-white font-light rounded-full text-sm flex items-center justify-center"
                        >
                            {v.title}
                        </span>
                        <div className="text-primary -mx-2">
                            <svg
                                width="34"
                                height="13"
                                viewBox="0 0 34 13"
                                fill="currentColor"
                                 xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M25.7571 0.585787C26.5382 -0.195262 27.8045 -0.195263 28.5856 0.585786L32.8282 4.82843C33.6093 5.60948 33.6093 6.87581 32.8282 7.65686L28.5856 11.8995C27.8045 12.6806 26.5382 12.6806 25.7571 11.8995L22.0992 8.24157H11.3848L7.65686 11.9695C6.87581 12.7506 5.60948 12.7506 4.82843 11.9695L0.585787 7.72686C-0.195262 6.94581 -0.195263 5.67948 0.585786 4.89843L4.82843 0.655787C5.60948 -0.125262 6.87581 -0.125263 7.65686 0.655786L11.2426 4.24157H22.1014L25.7571 0.585787Z"
                                />
                            </svg>

                        </div>
                        <span
                            className="bg-primary px-2 h-10 w-10 shadow text-white rounded-full aspect-square flex items-center justify-center"
                        >
                            <v.icon/>
                        </span>
                    </li>
                )
            })}
        </ul>
    );
};
