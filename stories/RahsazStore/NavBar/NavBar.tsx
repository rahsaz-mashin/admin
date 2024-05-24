import React, {useState} from "react";
import {Button} from "@nextui-org/react";
import {HamburgerMenuIcon} from "@/stories/Icons";
import {Input} from "@nextui-org/input";
import {SearchIcon} from "@storybook/icons";
import {Drawer} from "@/stories/RahsazStore/Drawer";


export type NavBarProps = {
    setDrawerOpen: () => void;
}

export const NavBar = ({setDrawerOpen}: NavBarProps) => {


    return (
        <>
            <div className="bg-white shadow-2xl px-3 py-3 gap-3 w-full flex items-center md:hidden">
                <Button
                    variant="light"
                    color="primary"
                    size="lg"
                    isIconOnly
                    onPress={() => setDrawerOpen()}
                >
                    <HamburgerMenuIcon size={32}/>
                </Button>

                <div className="flex-1">
                    <Input
                        type="search"
                        placeholder="جستجو در راهساز ماشین..."
                        size="lg"
                        isClearable
                        startContent={<i className="text-default-500 cursor-pointer"><SearchIcon size={24}/></i>}
                        classNames={{
                            input: "placeholder:text-default-500 dark:placeholder:text-white/60"
                        }}
                    />
                </div>
            </div>

        </>
    );
};
