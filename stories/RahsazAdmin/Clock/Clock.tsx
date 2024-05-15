import React, {useEffect, useState} from "react";
import {Spinner} from "@nextui-org/spinner";

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
        <div className="h-12 w-12 bg-white flex justify-center items-center rounded-full relative shadow-2xl text-lg text-gray-500 text-center after:bg-gray-400 after:w-1.5 after:h-1.5 after:rounded-full after:absolute after:z-10 after:border-1 after:border-white">
            <div
                className="absolute w-[1px] h-3 bg-slate-950 origin-bottom top-3"
                style={{
                    transform: `rotateZ(${time.getHours() * 30}deg)`
                }}
            />
            <div
                className="absolute w-[1px] h-3 bg-gray-600 origin-bottom top-3"
                style={{
                    transform: `rotateZ(${time.getMinutes() * 6}deg)`
                }}
            />
            <div
                className="absolute w-[1px] h-4 bg-red-600 origin-bottom top-2"
                style={{
                    transform: `rotateZ(${time.getSeconds() * 6}deg)`
                }}
            />
            {/*<span className="absolute text-gray-800 font-bold top-2">12</span>*/}
            {/*<span className="one">1</span>*/}
            {/*<span className="two">2</span>*/}
            {/*<span className="absolute text-gray-800 font-bold right-3">3</span>*/}
            {/*<span className="four">4</span>*/}
            {/*<span className="five">5</span>*/}
            {/*<span className="absolute text-gray-800 font-bold bottom-2">6</span>*/}
            {/*<span className="seven">7</span>*/}
            {/*<span className="eight">8</span>*/}
            {/*<span className="absolute text-gray-800 font-bold left-3">9</span>*/}
            {/*<span className="ten">10</span>*/}
            {/*<span className="eleven">11</span>*/}
        </div>
    );
};
