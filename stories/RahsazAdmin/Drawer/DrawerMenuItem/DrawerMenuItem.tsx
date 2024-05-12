import {motion} from "framer-motion";
import React from "react";
import {usePathname, useRouter} from "next/navigation";

export type DrawerMenuItemProps = {
    id: string;
    label: string;
    icon: React.ElementType;
    isActive?: boolean;
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


export const DrawerMenuItem = (
    {
        label,
        id,
        icon: Icon,
        isActive
    }: DrawerMenuItemProps
) => {
    const router = useRouter()
    const pathname = usePathname()
    const m = pathname.split("/")

    return (
        <motion.li
            key={id}
            initial={isActive ? "hover" : "rest"} whileHover="hover" animate={isActive ? "hover" : "rest"}
            variants={color}
            className="group active:scale-90 shrink select-none cursor-pointer transition-all relative h-11 gap-3 flex items-center"
            onClick={() => {
                if (m.length === 3) m.push(id)
                else m[3] = id
                router.push(m.join("/"))
            }}
        >
            <motion.svg
                width="220"
                height="44"
                viewBox="0 0 220 44"
                className="cursor-pointer absolute"
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
                className="bg-white z-10 flex justify-center shadow-[-4px_0px_2px_#00000025] transition-all duration-1000 text-gray-600 group-hover:text-black rounded-full w-9 h-9 p-1.5 mr-1 ">
                <Icon />
            </div>
            <span className="z-10">{label}</span>
        </motion.li>
    );
};
