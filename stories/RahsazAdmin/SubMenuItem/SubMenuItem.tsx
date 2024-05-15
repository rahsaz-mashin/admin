"use client"

import React, {useRef, useState} from "react";
import {Button, Card, CardBody, CardFooter} from "@nextui-org/react";
import {Tooltip} from "@nextui-org/tooltip";
import {CardHeader} from "@nextui-org/card";
import {CloseIcon, HelpOutlineIcon} from "@/stories/Icons";
import {usePathname, useRouter} from "next/navigation";
import {useRouteManager} from "@/hooks/useRouteManager";


export type SubMenuItemType = {
    id: string;
    label: string;
    description?: string;
    workspace: string;
    section: string;
    path: string[];
    icon?: React.ElementType;
}

export const SubMenuItem = ({id, label, description, workspace, section, path, icon: Icon}: SubMenuItemType) => {

    const iconRef = useRef<any>(null)

    const mouseEnter = () => {
        iconRef.current?.play()
    }

    const mouseLeave = () => {
        iconRef.current?.stop()
    }

    const [showHelp, setShowHelp] = useState(false)

    const router = useRouteManager(workspace, section)

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
        >
            <Card
                shadow="sm"
                onMouseEnter={mouseEnter}
                onMouseLeave={mouseLeave}
                isHoverable
                isPressable
                onPress={() => router.push(...path)}
                className="select-none"
            >
                <CardBody className="overflow-visible p-0 flex items-center">
                    <div className="w-20 h-20">
                        {!!Icon && (
                            <Icon iconRef={iconRef}/>
                        )}
                    </div>
                </CardBody>
                <CardFooter className="text-small justify-between">
                    <b className="truncate">{label}</b>
                    <Tooltip
                        content={tooltipContent}
                        color="foreground"
                        placement="bottom"
                        isOpen={showHelp}
                        isKeyboardDismissDisabled
                        isDismissable
                    >
                        <Button
                            as="div"
                            isIconOnly
                            size="sm"
                            color="secondary"
                            radius="full"
                            variant="light"
                            onPress={() => {
                                setShowHelp(true)
                                setTimeout(() => {
                                    setShowHelp(false)
                                }, 1000)
                            }}
                        >
                            <HelpOutlineIcon size={24}/>
                        </Button>
                    </Tooltip>
                </CardFooter>
            </Card>
        </Tooltip>
    );
};
