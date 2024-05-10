import React from "react";
import {Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger} from "@nextui-org/react";
import {OutlinedMoreIcon} from "@/stories/Icons";


export type DrawerUserMenuItemType = {
    id: string;
    label: string;
}


export type DrawerUserMenuProps = {
    items: DrawerUserMenuItemType[];
}



export const DrawerUserMenu = (
    {
        items
    }: DrawerUserMenuProps
) => {


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
            <DropdownMenu aria-label="UserCenter Actions" dir="rtl" items={items}>
                {(item) => (
                    <DropdownItem
                        key={item.id}
                        color={item.id === "logout" ? "danger" : "default"}
                        className={item.id === "logout" ? "text-danger" : ""}
                        // showDivider={item.id !== "logout"}
                    >
                        {item.label}
                    </DropdownItem>
                )}
            </DropdownMenu>
        </Dropdown>
    );
};
