import React, {ReactNode, useContext} from "react";
import {Tooltip} from "@heroui/tooltip";
import {AdminContext} from "@/context/admin.context";
import {Logo as RahsazStoreLogo} from "@/stories/Logo";


export type DrawerWorkspaceItemProps = {
    id: string;
    label: string;
    icon?: ReactNode;
    isActive?: boolean;
    isEnable?: boolean;
}


export const DrawerWorkspaceItem = (props: DrawerWorkspaceItemProps) => {

    const {
        id,
        label,
        icon,
        isActive,
        isEnable,
    } = props

    const adminContext = useContext(AdminContext)

    return (
        <Tooltip
            key={id}
            color="foreground"
            placement="left"
            showArrow
            content={label}
            className="select-none"
            radius="sm"
            isDisabled={!isEnable}
        >
            <li
                onClick={() => {
                    if(isEnable) adminContext.setActiveWorkspace(id)
                }}
                className={` min-h-14 h-14 w-14 flex justify-center items-center transition-all ${isActive ? "!opacity-100 scale-125" : ""} ${isEnable ? "opacity-60 cursor-pointer" : "opacity-20"}`}
            >
                {icon || <RahsazStoreLogo size={36} noAnimation/>}
            </li>
        </Tooltip>
    );
};
