import {motion} from "framer-motion";
import React from "react";


export type DrawerMenuItemProps = {
    id: string;
    label: string;
    url?: string;
    icon?: React.ElementType;
    isActive?: boolean;
}



export const DrawerMenuItem = (
    {
        label,
        id,
        icon: Icon,
        isActive
    }: DrawerMenuItemProps
) => {


    return (
        <motion.li
            key={id}
            initial={isActive ? "hover" : "rest"} whileHover="hover" animate={isActive ? "hover" : "rest"}
            // variants={color}
            className={"group text-white rounded-lg active:scale-90 shrink select-none cursor-pointer transition-all relative h-11 gap-2 flex items-center" + (isActive ? " bg-black/20" : "")}
            // onClick={() => {
            //     router.push()
            // }}
        >
            <div
                className="flex justify-center w-9 h-9 p-1.5">
                {Icon && <Icon/>}
            </div>
            <span className="z-10">{label}</span>
        </motion.li>
    );
};
