import React from "react";
import {Tooltip} from "@nextui-org/tooltip";
import {usePathname, useRouter} from "next/navigation";

export type DrawerMainItemProps = {
    id: string;
    label: string;
    logo: React.ElementType;
    isActive?: boolean
}


export const DrawerMainItem = (
    {
        label,
        id,
        logo: Logo,
        isActive
    }: DrawerMainItemProps
) => {
    const router = useRouter()
    const pathname = usePathname()
    const m = pathname.split("/")

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
                onClick={() => {
                    m[2] = id
                    if (m.length === 4) m[3] = ""
                    router.push(m.join("/"))
                }}
                className={`cursor-pointer min-h-14 h-14 w-14 flex justify-center items-center transition-all ${isActive ? "opacity-100 scale-125" : "opacity-60"}`}>
                <Logo size={36}/>
            </li>
        </Tooltip>
    );
};
