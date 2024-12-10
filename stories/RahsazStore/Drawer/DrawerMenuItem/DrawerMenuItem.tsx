import {motion} from "framer-motion";
import React from "react";
import {useRouter} from "next-nprogress-bar";


export type DrawerMenuItemProps = {
    id: string;
    label: string;
    url?: string;
    icon?: string;
    isActive?: boolean;
}


export const DrawerMenuItem = (props: DrawerMenuItemProps) => {

    const {
        label,
        id,
        icon,
        isActive,
        url,
    } = props

    const router = useRouter()

    return (
        <motion.li
            key={id}
            initial={isActive ? "hover" : "rest"}
            animate={isActive ? "hover" : "rest"}
            whileHover="hover"
            className={"group text-white rounded-lg active:scale-90 shrink select-none cursor-pointer transition-all relative h-11 gap-2 flex items-center" + (isActive ? " bg-black/20" : "")}
            onClick={() => {
                if (url) router.push(url)
            }}
        >
            <div
                className="flex justify-center w-9 h-9 p-1.5"
            >
                <i
                    dangerouslySetInnerHTML={{__html: icon || ""}}
                    className="w-full h-full"
                />
            </div>
            <span className="z-10 truncate w-full">{label}</span>
        </motion.li>
    );
}//