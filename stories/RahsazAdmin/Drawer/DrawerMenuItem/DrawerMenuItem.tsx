"use client";


import {motion} from "framer-motion";
import React, {ReactNode, useContext} from "react";
import {AdminContext} from "@/context/admin.context";

export type DrawerMenuItemProps = {
    id: string;
    label: string;
    icon?: ReactNode;
    isActive?: boolean;
    isEnable?: boolean;
}


const draw = {
    rest: {
        pathLength: 0.5,
        opacity: 1,
        stroke: "#9ca3af",
        fill: "#f9f9f9",
    },
    hover: (i: number) => {
        return {
            pathLength: 1.01,
            opacity: 1,
            stroke: "#ff921f",
            fill: "#ff921f",
            transition: {
                pathLength: {type: "spring", duration: 2, bounce: 0},
                opacity: {duration: 0.01},
                stroke: {duration: 1},
                fill: {duration: 0.2},
            }
        };
    }
};

const color = {
    rest: {
        color: "rgb(75 85 99)",
    },
    hover: (i: number) => {
        return {
            color: "#fff",
            transition: {
                color: {duration: 0.1},
            }
        };
    }
};


export const DrawerMenuItem = (props: DrawerMenuItemProps) => {
    const {
        label,
        id,
        icon,
        isActive,
        isEnable,
    } = props

    const adminContext = useContext(AdminContext)

    return (
        <motion.li
            key={id}
            initial={(isEnable && isActive) ? "hover" : "rest"}
            whileHover={isEnable ? "hover" : undefined}
            animate={(isEnable && isActive) ? "hover" : "rest"}
            variants={color}
            data-disabled={!isEnable || undefined}
            className="group shrink select-none transition-all relative h-11 gap-3 flex items-center cursor-pointer active:scale-90 data-[disabled]:opacity-60 data-[disabled]:cursor-default data-[disabled]:active:scale-100"
            onClick={() => {
                if (isEnable) adminContext.setActiveSection(id)
            }}
        >
            <motion.svg
                width="220"
                height="44"
                viewBox="0 0 220 44"
                className="absolute"
            >
                <motion.rect
                    width="216"
                    height="40"
                    x="2"
                    y="2"
                    rx="20"
                    strokeWidth={3}
                    variants={draw}
                    custom={1}
                />
            </motion.svg>
            <div
                className="bg-white z-10 flex justify-center items-center shadow-[-4px_0px_2px_#00000025] transition-all duration-1000 text-gray-800 rounded-full w-9 h-9 p-1.5 mr-1"
            >
                {icon}
            </div>
            <span className="z-10">
                {label}
            </span>
        </motion.li>
    );
};
