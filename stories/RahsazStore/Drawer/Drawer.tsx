import React, {ReactNode} from "react";
import {CallWidget, LanguageSwitcher, ThemeSwitcher} from "@/stories/RahsazStore";
import {Button, Card, CardBody} from "@nextui-org/react";
import {HamburgerMenuIcon} from "@/stories/Icons";
import {Input} from "@nextui-org/input";
import {SearchIcon} from "@storybook/icons";
import {Close} from "@mui/icons-material";

export type DrawerProps = {
    isOpen: boolean;
    setClose: () => void;
    children: ReactNode;
}
export const Drawer = ({isOpen, setClose, children}: DrawerProps) => {

    return (
        <div className="z-10 fixed bg-primary w-full h-full">
            <div className="w-full h-full absolute inset-0">
                <div className="w-full h-full relative flex items-center">
                    <div className="start-0 top-0 w-full h-full p-3">
                        <div className="relative flex w-full h-full flex-col justify-between items-center">
                            <Button
                                variant="flat"
                                radius="full"
                                size="sm"
                                color="default"
                                onPress={setClose}
                                isIconOnly
                                className="absolute end-0 text-danger"
                            >
                                <Close/>
                            </Button>
                            <div/>
                            <div className="flex flex-col justify-center items-center gap-3">
                                <CallWidget />
                                <div className="flex gap-3 justify-center items-center">
                                    <LanguageSwitcher/>
                                    <ThemeSwitcher/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        onClick={isOpen ? setClose : undefined}
                        className={`absolute bg-white overflow-hidden shadow-[4px_4px_8px_rgba(0,0,0,0.28)] w-full transition-all duration-700 group md:h-full md:start-0 md:rounded-s-none ${isOpen ? "h-3/4 start-2/3 rounded-s-3xl is-active-drawer" : "h-full start-0 rounded-s-none"}`}
                    >
                        <div
                            className="absolute cursor-pointer top-0 start-0 h-full w-full bg-black/10 z-0 hidden group-[.is-active-drawer]:block group-[.is-active-drawer]:z-30"/>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};
