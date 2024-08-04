"use client"

import React, {useState} from "react";
import clsx from "clsx";
import {motion} from "framer-motion";

export type CategoryChooseCategoryProps = {}


export const CategoryChooseCategory = (props: CategoryChooseCategoryProps) => {

    return (
        <>
            <MainCategory/>
            <SubCategory/>
        </>
    );
};


export function MainCategory(props: {}) {

    const [current, setCurrent] = useState(0)
    const slides = [
        {
            title: "",
        },
        {
            title: "",
        },
        {
            title: "",
        },
        {
            title: "",
        },
        {
            title: "",
        },
        {
            title: "",
        },
        {
            title: "",
        },
        {
            title: "",
        },
        {
            title: "",
        },
        {
            title: "",
        },
        {
            title: "",
        },
        {
            title: "",
        },
        {
            title: "",
        },
    ]

    const slideCount = slides.length
    const firstSlide = 0
    const lastSlide = slides.length - 1


    const animate = (idx: number) => {
        const center = Math.floor(slideCount / 2)
        const fromCurrent = current - idx
        let pos = fromCurrent
        if (fromCurrent > center) {
            pos = pos - slideCount
        }
        if (fromCurrent < -1 * center) {
            pos = pos + slideCount
        }

        const fx = (x: number) => 1500 - Math.sqrt(((7000000 - Math.pow(x, 2)) / 3.2))

        const x = pos * 150
        const y = fx(x)
        const rotate = pos * 5
        const opacity = 1 /*pos === 0 ? 1 : 1 / Math.abs(pos*2)*/
        // let scale = (10/(Math.abs(pos) || 1)) * 0.2
        // if(scale > 1) scale = 1
        const scale = 1

        const result = {x, y, rotate, opacity,}
        console.log(result)
        return result
    }

    const whileHover = (idx: number) => {
        return {scale: 1.10}
    }

    const whileTap = (idx: number) => {
        return {scale: .90}
    }

    const handleNext = () => {
        setCurrent((v) => (v + 1 > lastSlide ? firstSlide : v + 1))
    }
    const handlePrev = () => {
        setCurrent((v) => (v - 1 < firstSlide ? lastSlide : v - 1))
    }

    const animateTo = (idx: number) => {
        setCurrent(idx)
    }


    return (
        <div
            className="w-full bg-white flex justify-center items-start h-80 relative [mask-image:linear-gradient(270deg,#000,#000,transparent_0,#000_50%,#000_50%,transparent)]"
        >
            {slides.map(({title}, idx) => {
                return (
                    <motion.div
                        key={idx}
                        className="absolute cursor-pointer select-none flex justify-center items-center flex-shrink-0 overflow-hidden flex-col gap-4 p-5"
                        animate={animate(idx)}
                        whileHover={whileHover(idx)}
                        whileTap={whileTap(idx)}
                        onClick={() => animateTo(idx)}
                        transition={{
                            type: "keyframes",
                            // duration: 0
                        }}
                    >
                        <div
                            className="bg-orange-100 shadow-[0_0_15px_5px] shadow-primary rounded-full h-28 w-28 flex justify-center items-center text-primary text-lg">
                            {idx}
                        </div>
                        <span className="font-black text-xl text-primary">
                                موتور
                            </span>
                    </motion.div>
                )
            })}
        </div>
    )
}


export function SubCategory(props: {}) {

    const [current, setCurrent] = useState(0)
    const slides = [
        {
            title: "",
        },
        {
            title: "",
        },
        {
            title: "",
        },
        {
            title: "",
        },
        {
            title: "",
        },
        {
            title: "",
        },
        {
            title: "",
        },
        {
            title: "",
        },
        {
            title: "",
        },
        {
            title: "",
        },
        {
            title: "",
        },
        {
            title: "",
        },
        {
            title: "",
        },
    ]

    const slideCount = slides.length
    const firstSlide = 0
    const lastSlide = slides.length - 1


    const animate = (idx: number) => {
        const center = Math.floor(slideCount / 2)
        const fromCurrent = current - idx
        let pos = fromCurrent
        if (fromCurrent > center) {
            pos = pos - slideCount
        }
        if (fromCurrent < -1 * center) {
            pos = pos + slideCount
        }

        const fx = (x: number) => 1500 - Math.sqrt(((7000000 - Math.pow(x, 2)) / 3.2))

        const x = pos * 150
        const y = fx(x)
        const rotate = pos * 5
        const opacity = 1 /*pos === 0 ? 1 : 1 / Math.abs(pos*2)*/
        // let scale = (10/(Math.abs(pos) || 1)) * 0.2
        // if(scale > 1) scale = 1
        const scale = 1

        const result = {x, y, rotate, opacity,}
        console.log(result)
        return result
    }

    const whileHover = (idx: number) => {
        return {scale: 1.10}
    }

    const whileTap = (idx: number) => {
        return {scale: .90}
    }

    const handleNext = () => {
        setCurrent((v) => (v + 1 > lastSlide ? firstSlide : v + 1))
    }
    const handlePrev = () => {
        setCurrent((v) => (v - 1 < firstSlide ? lastSlide : v - 1))
    }

    const animateTo = (idx: number) => {
        setCurrent(idx)
    }


    return (
        <>
            <div
                className="w-full bg-primary flex justify-center items-start h-40 relative"
            >
                {slides.map(({title}, idx) => {
                    const isActive = idx === current
                    return (
                        <motion.div
                            key={idx}
                            className="absolute cursor-pointer select-none flex justify-center items-center flex-shrink-0 overflow-hidden flex-col gap-4 p-5"
                            animate={animate(idx)}
                            whileHover={whileHover(idx)}
                            whileTap={whileTap(idx)}
                            onClick={() => animateTo(idx)}
                            transition={{
                                type: "keyframes",
                                // duration: 0
                            }}
                        >
                            <span className={clsx("text-lg text-white", isActive ? "font-bold" : "font-normal")}>
                                موتور
                            </span>
                        </motion.div>
                    )
                })}
            </div>
        </>
    )
}

