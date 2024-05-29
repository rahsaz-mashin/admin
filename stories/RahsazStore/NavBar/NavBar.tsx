import React, {useState} from "react";
import {Button} from "@nextui-org/react";
import {BackHistoryIcon, BackIcon, HamburgerMenuIcon} from "@/stories/Icons";
import {Input} from "@nextui-org/input";
import {SearchIcon} from "@storybook/icons";
import {Badge} from "@nextui-org/badge";
import {useRouter} from "next/navigation";



export type NavBarProps = {
    setDrawerOpen: () => void;
}

export const NavBar = ({setDrawerOpen}: NavBarProps) => {

    const router = useRouter()

    return (
        <>
            <div className="bg-white shadow-2xl px-2 py-2 gap-2 w-full flex items-center md:hidden">
                <Badge
                    content=""
                    color="success"
                    variant="shadow"
                    shape="circle"
                    size="md"
                    showOutline={false}
                    placement="top-right"
                    className="animate-pulse"
                >
                    <Button
                        variant="light"
                        color="primary"
                        size="lg"
                        isIconOnly
                        onPress={() => setDrawerOpen()}

                    >
                        <HamburgerMenuIcon size={32}/>
                    </Button>
                </Badge>
                {/*<Button*/}
                {/*    variant="light"*/}
                {/*    color="secondary"*/}
                {/*    size="lg"*/}
                {/*    isIconOnly*/}
                {/*    onPress={() => router.back()}*/}
                {/*>*/}
                {/*    <BackHistoryIcon size={32}/>*/}
                {/*</Button>*/}
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
