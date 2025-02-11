"use client";

import React from "react";
import {Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger} from "@heroui/react";
import {OutlinedMoreIcon} from "@/stories/Icons";


export type DrawerUserMenuItemType = {
    key: string;
    title: string;
    color?: "default" | "primary" | "secondary" | "success" | "warning" | "danger";
    className?: string;
    onPress?: () => void;
}


export type DrawerUserMenuProps = {

}


export const DrawerUserMenu = () => {

    const items: DrawerUserMenuItemType[] = [

    ]


    return (
        <Dropdown backdrop="blur">
            <DropdownTrigger>
                <Button
                    isIconOnly
                    size="sm"
                    radius="full"
                    variant="light"
                    color="default"
                    className="text-white"
                >
                    <OutlinedMoreIcon size={28}/>
                </Button>
            </DropdownTrigger>
            <DropdownMenu
                aria-label="UserCenter Actions"
                dir="rtl"
                items={items}
                emptyContent={<>موردی پیدا نشد</>}
            >
                {(item) => (
                    <DropdownItem
                        key={item.key}
                        color={item?.color}
                        className={item?.className}
                        onPress={item?.onPress}
                    >
                        {item.title}
                    </DropdownItem>
                )}
            </DropdownMenu>
        </Dropdown>
    );
};
