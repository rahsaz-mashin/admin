"use client"

import React, {ReactNode, useContext,} from "react";
import {Card, CardBody, CardFooter, Tooltip} from "@heroui/react";
import {AdminContext} from "@/context/admin.context";


export type SubMenuItemType = {
    id: string;
    label: string;
    description?: string;
    workspace: string;
    section: string;
    category: string;
    icon?: ReactNode;
    isEnable?: boolean;
    hidden?: boolean;
}

export const SubMenuItem = (props: SubMenuItemType) => {
    const adminContext = useContext(AdminContext)

    const {
        id,
        label,
        description,
        workspace,
        section,
        category,
        icon,
        isEnable,
        hidden
    } = props

    if (hidden) return null

    const tooltipContent = (
        <div className="px-1 py-2 max-w-52">
            <div className="text-sm font-bold">{label}</div>
            {!!description && <div className="text-tiny text-justify">{description}</div>}
        </div>
    )

    return (
        <Tooltip
            content={tooltipContent}
            color="foreground"
            placement="bottom"
            isKeyboardDismissDisabled
            isDismissable
            isDisabled={!isEnable}
        >
            <Card
                shadow="sm"
                isHoverable={isEnable}
                isPressable={isEnable}
                onClick={() => {
                    if (isEnable) adminContext.goToMenu(id, category, section, workspace)
                }}
                className="select-none group p-4 gap-3"
                isDisabled={!isEnable}
            >
                <CardBody
                    className="overflow-visible p-0 transition flex items-center text-blue-950 group-[&:not([data-disabled])]:group-hover:text-primary">
                    <div className="w-16 h-16 flex justify-center items-center">
                        {icon}
                    </div>
                </CardBody>
                <CardFooter className="text-small justify-between p-0">
                    <b className="truncate w-full text-center">{label}</b>
                </CardFooter>
            </Card>
        </Tooltip>
    );
};
