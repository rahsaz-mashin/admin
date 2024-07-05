import React from "react";
import {motion} from "framer-motion";


export type StoneProps = {
    primary?: string,
    secondary?: string,
    shadow?: string,
    background?: string,
    className?: string,
    size?: number,
    x?: number,
    y?: number,
}


export const Stone = (props: StoneProps) => {
    const {
        primary = "#000000",
        secondary = "#ffffff",
        shadow = "#505050",
        background = "#ff921f",
        className = "",
        size = 1,
        x = 0,
        y = 0,
    } = props

    return (
        <motion.svg
            initial={{x: 0, y: 0}}
            animate={{x: x, y: y}}
            transition={{type: "spring", duration: 1}}
            height={5 * size}
            className={className}
            viewBox="0 0 23 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M22.8467 8.58635C22.2067 5.19635 18.6967 1.13635 13.7267 0.16635C11.0367 -0.35365 7.73671 0.326349 5.04671 2.47635C2.75671 4.28635 0.866711 7.52635 0.516711 8.17635C-0.513289 10.0463 -0.243289 12.2063 3.55671 15.0163C7.58671 17.9963 16.1867 16.3363 18.6167 15.4263C21.0367 14.5163 23.4967 11.9763 22.8567 8.58635H22.8467ZM16.0867 13.9763C12.7067 15.3363 8.78671 15.8863 5.12671 14.9563C1.45671 14.0363 0.616711 11.1763 0.616711 10.4163C0.616711 9.39635 0.716712 8.34635 2.42671 5.87635C4.43671 2.99635 7.22671 1.27635 9.06671 0.65635C10.2067 0.26635 14.2867 -0.0336506 16.6567 2.11635C19.0267 4.26635 20.1667 6.19635 20.2967 8.14635C20.4267 10.0963 19.4667 12.6163 16.0867 13.9763Z"
                fill={primary}
            />
            <path
                d="M15.9966 11.4163C13.6766 12.5763 11.1266 12.8563 7.52658 12.5363C3.92658 12.2063 2.24658 9.59634 2.24658 8.67634C2.24658 7.53634 2.70658 3.78634 8.42658 1.09634C9.53658 0.576342 12.1166 0.526342 13.9966 1.55634C15.8866 2.58634 17.8766 4.29634 18.3666 6.41634C18.8466 8.54634 18.3166 10.2563 15.9966 11.4163Z"
                fill={secondary}
            />
        </motion.svg>
    );
};
