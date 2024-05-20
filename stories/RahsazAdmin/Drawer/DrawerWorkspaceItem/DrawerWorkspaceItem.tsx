import React from "react";
import {Tooltip} from "@nextui-org/tooltip";
import {useRouteManager} from "@/hooks/useRouteManager";

export type DrawerWorkspaceItemProps = {
    id: string;
    label: string;
    logo: React.ElementType;
    isActive?: boolean
}


export const DrawerWorkspaceItem = (
    {
        id,
        label,
        logo: Logo,
        isActive
    }: DrawerWorkspaceItemProps
) => {

    const workspace = id
    const section = ""
    const router = useRouteManager(workspace, section)

    return (
        <Tooltip
            key={id}
            color="foreground"
            placement="left"
            showArrow
            content={label}
            className="select-none"
            radius="sm"
        >
            <li
                onClick={() => router.push()}
                className={`cursor-pointer min-h-14 h-14 w-14 flex justify-center items-center transition-all ${isActive ? "opacity-100 scale-125" : "opacity-60"}`}
            >
                <Logo size={36}/>
            </li>
        </Tooltip>
    );
};
