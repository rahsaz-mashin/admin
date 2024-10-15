import React, {useContext, useState} from "react";
import {BreadcrumbItem, Breadcrumbs, Button} from "@nextui-org/react";
import {useRouter} from "next-nprogress-bar";
import {BackIcon, RefreshIcon, SeparatorIcon} from "@/stories/Icons";
import {AdminContext} from "@/context/admin.context";


export type HeaderProps = {}


export const Header = (props: HeaderProps) => {

    const {} = props

    const router = useRouter()

    const adminContext = useContext(AdminContext)
    const currentWorkspace = adminContext.getCurrentWorkspace()
    const breadCrumbs = adminContext.breadCrumbs()

    return (
        <header className="w-full h-24 truncate z-[9999999] select-none flex items-start gap-3 sticky top-0 bg-background">
            <div
                className="block md:hidden cursor-pointer text-primary hover:text-primary/80 transition group"
                onClick={() => adminContext.setOpenDrawer(true)}
            >
                <svg
                    width="43"
                    height="56"
                    viewBox="0 0 43 56"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g filter="url(#filter0_i_1903_1119)">
                        <path
                            d="M43 0H10.7697C-5.29471 12.2963 -3.38748 29.6311 16.4912 40.731L43 55.533V0Z"
                            fill="currentColor"
                        />
                    </g>
                    <path
                        d="M14 12H32V14H14V12ZM20 19H32V21H20V19ZM14 26H32V28H14V26Z"
                        fill="white"
                    />
                    <defs>
                        <filter
                            id="filter0_i_1903_1119"
                            x="-2"
                            y="0"
                            width="45"
                            height="55.533"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                        >
                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                            <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="BackgroundImageFix"
                                result="shape"
                            />
                            <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                            />
                            <feOffset dx="-2"/>
                            <feGaussianBlur stdDeviation="4"/>
                            <feComposite
                                in2="hardAlpha"
                                operator="arithmetic"
                                k2="-1"
                                k3="1"
                            />
                            <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"
                            />
                            <feBlend
                                mode="normal"
                                in2="shape"
                                result="effect1_innerShadow_1903_1119"
                            />
                        </filter>
                    </defs>
                </svg>
            </div>
            <div className="flex flex-col gap-2 w-full ps-0 pe-4 md:ps-4 py-2">
                <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                        <Button
                            onPress={() => router.back()}
                            isIconOnly
                            radius="full"
                            variant="light"
                            color="primary"
                        >
                            <BackIcon size={24}/>
                        </Button>
                        <h1 className="font-bold text-primary text-lg truncate">
                            {currentWorkspace?.title}
                        </h1>
                    </div>
                    <Button
                        onPress={() => location.reload()}
                        isIconOnly
                        radius="full"
                        variant="flat"
                        color="success"
                    >
                        <RefreshIcon size={24}/>
                    </Button>
                </div>
                {!!breadCrumbs?.length &&
                    (
                        <Breadcrumbs
                            underline="hover"
                            color="secondary"
                            className="ps-12  w-full "
                            classNames={{base: "inline-grid", list: "flex-nowrap w-full overflow-y-hidden pb-2"}}
                            separator={<SeparatorIcon size={20}/>}
                        >
                            {breadCrumbs.map(({title, url}, idx) => (
                                <BreadcrumbItem key={idx} href={url}>
                                    {title}
                                </BreadcrumbItem>
                            ))}
                        </Breadcrumbs>
                    )
                }
            </div>
        </header>
    );
};
