import React, {ReactNode} from "react";
import {CallWidget, LanguageSwitcher, ThemeSwitcher} from "@/stories/RahsazStore";
import {Button} from "@nextui-org/react";
import {Close} from "@mui/icons-material";
import {DrawerMenuItem} from "@/stories/RahsazStore/Drawer/DrawerMenuItem";
import {Menu} from "@/interfaces/Menu.interface";



export type DrawerProps = {
    isOpen: boolean;
    setClose: () => void;
    menu: Menu[];
    children: ReactNode;
}
export const Drawer = ({isOpen, setClose, children, menu}: DrawerProps) => {


    return (
        <div className="z-10 fixed bg-primary w-full h-full group" data-isopen={isOpen || undefined}>
            <div className="w-full h-full absolute inset-0">
                <div className="w-full h-full relative flex items-center">
                    <div className="start-0 top-0 w-full h-full p-3">
                        <div className="relative flex w-full h-full gap-3 flex-col justify-between">
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
                            <div className="w-56 flex-1 overflow-x-hidden">
                                <ul className="flex gap-1.5 flex-col">
                                    {menu.map((v, i) => {
                                        return (
                                            <DrawerMenuItem
                                                key={i}
                                                id={v.id!.toString()}
                                                label={v.title}
                                                icon={v.icon?.content}
                                                url={v.url}
                                            />
                                        )
                                    })}
                                </ul>
                            </div>
                            <div className="flex flex-col justify-center items-center gap-3">
                                <CallWidget/>
                                <div className="flex gap-3 justify-center items-center">
                                    <LanguageSwitcher/>
                                    <ThemeSwitcher/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        onClick={isOpen ? setClose : undefined}
                        className={`absolute bg-white overflow-hidden shadow-[4px_4px_8px_rgba(0,0,0,0.28)] z-10 w-full transition-all duration-700 md:h-full md:start-0 md:top-0 md:rounded-s-none ${isOpen ? "h-[calc(100%-250px)] start-3/4 top-14 rounded-s-3xl" : "h-full start-0 top-0 rounded-s-none"}`}
                    >
                        {children}
                        <div
                            className="bg-black/25 backdrop-blur-sm absolute top-0 left-0 h-full w-full z-30 hidden group-data-[isopen]:block cursor-pointer"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}//
//