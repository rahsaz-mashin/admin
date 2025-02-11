import React, {useEffect, useState} from "react";
import {Tooltip} from "@heroui/tooltip";

// export type ClockProps = {
//     isLoading: boolean
// }


export const Clock = () => {

    const [time, setTime] = useState(new Date())

    useEffect(() => {
        setInterval(() => {
            setTime(new Date());
        }, 1000);
    }, [])

    return (
        <Tooltip
            content={new Intl.DateTimeFormat('fa-IR', {
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit"
            }).format(time)}
            color="foreground"
            placement="left"
        >
            <div
                className="h-12 w-12 select-none transition duration-1000 hover:scale-150 active:scale-90 bg-white flex justify-center items-center rounded-full relative shadow-2xl text-lg text-gray-500 text-center after:bg-gray-300 after:w-1 after:h-1 after:rounded-full after:absolute after:z-10 after:border-0.25 after:border-white">
                <div
                    className="absolute rounded w-[2px] h-2.5 bg-black origin-bottom top-3.5"
                    style={{transform: `rotateZ(${time.getHours() * 30}deg)`}}
                />
                <div
                    className="absolute rounded w-[2px] h-3 bg-gray-400 origin-bottom top-3"
                    style={{transform: `rotateZ(${time.getMinutes() * 6}deg)`}}
                />
                <div
                    className="absolute rounded w-[2px] h-4 bg-red-600 origin-bottom top-2"
                    style={{transform: `rotateZ(${time.getSeconds() * 6}deg)`}}
                />
                <div className="absolute w-full h-full z-20">
                    <div className="relative w-full h-full flex justify-center items-center text-[0.35rem] leading-none text-gray-800 font-black">
                        <span className="absolute p-0.5 top-[3px] right-[11px]">.</span>
                        <span className="absolute p-0.5 top-[10px] right-[4px]">.</span>
                        <span className="absolute p-0.5 top-[20px] right-[0px]">3</span>

                        <span className="absolute p-0.5 bottom-[10px] right-[4px]">.</span>
                        <span className="absolute p-0.5 bottom-[3px] right-[11px]">.</span>
                        <span className="absolute p-0.5 bottom-[0px]">6</span>

                        <span className="absolute p-0.5 bottom-[3px] left-[11px]">.</span>
                        <span className="absolute p-0.5 bottom-[10px] left-[4px]">.</span>
                        <span className="absolute p-0.5 bottom-[20px] left-[0px]">9</span>

                        <span className="absolute p-0.5 top-[10px] left-[4px]">.</span>
                        <span className="absolute p-0.5 top-[3px] left-[11px]">.</span>
                        <span className="absolute p-0.5 top-[0px]">12</span>
                    </div>
                </div>
            </div>
        </Tooltip>
    );
};
