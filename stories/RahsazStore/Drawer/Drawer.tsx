import React, {ReactNode} from "react";
import {LanguageSwitcher, ThemeSwitcher} from "@/stories/RahsazStore";
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
        <div className="z-10 fixed top-0 start-0 bg-primary w-full h-full">
            <div className="w-full h-full relative flex items-center">
                <div className="start-0 top-0 w-full h-full p-2">
                    <div className="relative flex w-full h-full">
                        <Button
                            variant="solid"
                            radius="full"
                            size="sm"
                            color="danger"
                            onPress={setClose}
                            isIconOnly
                            className="absolute end-0"
                        >
                            <Close />
                        </Button>
                    </div>
                </div>
                <div
                    onClick={isOpen ? setClose : undefined}
                    className={`absolute bg-white overflow-hidden shadow-[4px_4px_8px_rgba(0,0,0,0.28)] w-full transition-all duration-700 group md:h-full md:start-0 md:rounded-s-none ${isOpen ? "h-3/4 start-2/3 rounded-s-3xl is-active-drawer" : "h-full start-0 rounded-s-none"}`}
                >
                    <div className="absolute cursor-pointer top-0 start-0 h-full w-full bg-black/10 z-0 hidden group-[.is-active-drawer]:block group-[.is-active-drawer]:z-50"/>
                    {children}
                </div>
            </div>
        </div>
    );
};
