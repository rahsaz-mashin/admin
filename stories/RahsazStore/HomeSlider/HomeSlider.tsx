"use client"

import React, {useEffect, useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import {Button, Image} from "@nextui-org/react";
import NextImage from "next/image";
import {useKeenSlider} from "keen-slider/react";
import {Spinner} from "@nextui-org/spinner";
import {CircularProgress} from "@nextui-org/progress";
import {Timeout} from "@mui/utils/useTimeout";


export type HomeSliderItems = {
    id: string;
    title: string;
    subtitle: string;
    type: "image";
    image: string;
}

const sliders: HomeSliderItems[] = [
    {
        id: "1",
        title: "داستان راهساز ماشین",
        subtitle: "داستان به وجود آمدن راهساز ماشین را در اینجا بخوانید ...",
        type: "image",
        image: "https://api.zl50.ir/storage/images/1697958170 engine-piston-cross-section.jpg",
    },
    {
        id: "2",
        title: "پیش فروش لوازم برقی",
        subtitle: "آغاز اولین پیش فروش راهساز ماشین به مدت محدود",
        type: "image",
        image: "https://api.zl50.ir/storage/images/1697958170 engine-piston-cross-section.jpg",
    },
    {
        id: "3",
        title: "کمپین فروش قطعات موتور",
        subtitle: "قطعات و لوازم موتور به مدت محدود",
        type: "image",
        image: "https://api.zl50.ir/storage/images/1697958170 engine-piston-cross-section.jpg",
    },
    {
        id: "4",
        title: "واگذاری نماینده فروش راهساز ماشین",
        subtitle: "نمایندگی فروش راهساز ماشین به مدت محدود واگذار می شود",
        type: "image",
        image: "https://api.zl50.ir/storage/images/1697958170 engine-piston-cross-section.jpg",
    },
    {
        id: "5",
        title: "راهساز آنلاین، سرویس جدید راهساز ماشین",
        subtitle: "سرویس تولید محتوا و درج آگهی راهساز ماشین رونمایی شد",
        type: "image",
        image: "https://api.zl50.ir/storage/images/1697958170 engine-piston-cross-section.jpg",
    },

]


export type HomeSliderProps = {}


const WheelControls = (slider: any) => {
    let touchTimeout: string | number | NodeJS.Timeout | undefined
    let position: { x: any; y: any; }
    let wheelActive: boolean

    function dispatch(e: any, name: any) {
        position.x -= e.deltaX
        position.y -= e.deltaY
        slider.container.dispatchEvent(
            new CustomEvent(name, {
                detail: {
                    x: position.x,
                    y: position.y,
                },
            })
        )
    }

    function wheelStart(e: any) {
        position = {
            x: e.pageX,
            y: e.pageY,
        }
        dispatch(e, "ksDragStart")
    }

    function wheel(e: any) {
        dispatch(e, "ksDrag")
    }

    function wheelEnd(e: any) {
        dispatch(e, "ksDragEnd")
    }

    function eventWheel(e: any) {
        e.preventDefault()
        if (!wheelActive) {
            wheelStart(e)
            wheelActive = true
        }
        wheel(e)
        clearTimeout(touchTimeout)
        touchTimeout = setTimeout(() => {
            wheelActive = false
            wheelEnd(e)
        }, 50)
    }

    slider.on("created", () => {
        slider.container.addEventListener("wheel", eventWheel, {
            passive: false,
        })
    })
}


const duration = 5000
const durationPart = 50

const AutoSwitch = (setProgress: React.Dispatch<React.SetStateAction<number>>) => (slider: any) => {
    let timeout: NodeJS.Timeout
    let mouseOver = false

    function clearNextTimeout() {
        clearTimeout(timeout)
    }

    function nextTimeout() {
        clearTimeout(timeout)
        if (mouseOver) return
        timeout = setInterval(() => {
            setProgress((o: number) => {
                const v = o + (durationPart / duration)
                if (v > 1) {
                    if (slider.slides.length === slider.track.details.rel + 1) slider.moveToIdx(0)
                    else slider.next()
                }
                return v
            })
        }, durationPart)
    }

    slider.on("created", () => {
        slider.container.addEventListener("mouseover", () => {
            mouseOver = true
            clearNextTimeout()
        })
        slider.container.addEventListener("mouseout", () => {
            mouseOver = false
            nextTimeout()
        })
        nextTimeout()
    })
    slider.on("slideChanged", (e: any) => {
        setProgress(0)
    })
    slider.on("dragStarted", clearNextTimeout)
    slider.on("animationEnded", nextTimeout)
    slider.on("updated", nextTimeout)
}


export const HomeSlider = () => {

    const [progress, setProgress] = useState(0)
    const [currentSlide, setCurrentSlide] = useState(0)
    const [loaded, setLoaded] = useState(false)
    const [sliderRef, instanceRef] = useKeenSlider({
        loop: false,
        mode: "snap",
        rtl: true,
        slides: {spacing: 0, perView: 1},
        initial: 0,
        vertical: false,
        rubberband: false,
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel)
        },
        created() {
            setLoaded(true)
        },
    }, [WheelControls, AutoSwitch(setProgress)])


    return (
        <>
            <div className="w-full h-96 select-none p-0 md:px-4">
                <div className="w-full h-full relative">
                    <div className="flex h-[56px] md:h-[60px]">
                        <div
                            className="bg-primary transition-width truncate flex flex-col px-2.5 py-1.5 flex-[1_1_0] flex-shrink-0 max-w-96 lg:max-w-[560px] xl:max-w-[720px] 3xl:max-w-[820px]"
                        >
                            <h6 className="font-bold text-lg md:text-xl text-white truncate">
                                {sliders[currentSlide].title}
                            </h6>
                            <span className="font-light text-xs md:text-sm text-white truncate">
                                {sliders[currentSlide].subtitle}
                            </span>
                        </div>
                        <svg
                            viewBox="0 0 36 36"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-primary -ms-[8px] z-[5]"
                        >
                            <path
                                d="M17.7705 8.82712C21.3725 3.31939 27.5095 0 34.0904 0H60.5V36H0L17.7705 8.82712Z"
                            />
                        </svg>
                        <svg
                            viewBox="0 0 48 36"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-primary-400 -ms-[56px] z-[4]"
                        >
                            <path
                                d="M17.7705 8.82712C21.3725 3.31939 27.5095 0 34.0904 0H60.5V36H0L17.7705 8.82712Z"
                            />
                        </svg>
                        <svg
                            viewBox="0 0 48 36"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-primary-300 -ms-[56px] z-[3]"
                        >
                            <path
                                d="M17.7705 8.82712C21.3725 3.31939 27.5095 0 34.0904 0H60.5V36H0L17.7705 8.82712Z"
                            />
                        </svg>
                        <svg
                            viewBox="0 0 48 36"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-primary-200 -ms-[56px] z-[2]"
                        >
                            <path
                                d="M17.7705 8.82712C21.3725 3.31939 27.5095 0 34.0904 0H60.5V36H0L17.7705 8.82712Z"
                            />
                        </svg>
                    </div>
                    <div className="relative bg-blue-600 h-full w-full">
                        <div className="absolute top-0 end-0 p-2">
                            <CircularProgress
                                size="sm"
                                strokeWidth={4}
                                value={progress * 100}
                                disableAnimation
                            />
                        </div>
                        <div className="absolute bottom-0 end-2 flex gap-1.5 justify-center items-end">
                            <div className="text-white font-bold text-xl">
                                {sliders.length}
                            </div>
                            <div className="text-white font-bold text-xl">
                                /
                            </div>
                            <div className="text-primary font-black text-3xl drop-shadow-[1px_1px_0px_black]">
                                {currentSlide + 1}
                            </div>
                        </div>
                        <div ref={sliderRef} className="keen-slider w-full h-full">
                            {sliders.map((v, i) => {
                                const {id, title, subtitle, type, image} = v
                                return (
                                    <div
                                        key={id}
                                        className="keen-slider__slide w-full h-full flex justify-center items-center"
                                    >
                                        {id}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
