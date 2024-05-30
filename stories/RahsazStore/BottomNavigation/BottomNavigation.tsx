import React from "react";
import BottomNavBg from '@/stories/RahsazStore/BottomNavigation/bg.svg';
import {Button} from "@nextui-org/react";
import {CartNavigationIcon, HomeNavigationIcon} from "@/stories/Icons";
import {usePathname} from "next/navigation";
import Link from "next/link";


export type BottomNavigationProps = {}

export const BottomNavigation = ({}: BottomNavigationProps) => {
    const pathname = usePathname()
    const m = pathname.split("/")
    return (
        <div
            className="w-full fixed -bottom-0.5 flex md:hidden justify-center items-end text-white bg-center h-20"
            style={{backgroundImage: `url(/assets/images/bottom-nav-bg.svg)`}}
        >
            <div className="flex w-[360px] h-[63px] px-8 justify-between items-center">
                <Button
                    variant="light"
                    color="primary"
                    size="lg"
                    radius="full"
                    isIconOnly
                    href="/"
                    as={Link}
                >
                    <HomeNavigationIcon
                        size={32}
                        isActive={m[1] === ""}
                    />
                </Button>
                <Button
                    variant="light"
                    color="primary"
                    size="lg"
                    radius="full"
                    isIconOnly
                    href="/cart"
                    as={Link}
                >
                    <CartNavigationIcon
                        size={32}
                        isActive={m[1] === "cart"}
                    />
                </Button>
            </div>

        </div>
    );
};
