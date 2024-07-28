"use client"

import React, {useRef, useState} from "react";
import {useKeenSlider} from "keen-slider/react";
import {KeenSliderOptions, TrackDetails} from "keen-slider";
import clsx from "clsx";

export type CategoryMainSlideListProps = {}


export const CategoryMainSlideList = (props: CategoryMainSlideListProps) => {


    return (
        <div
            className="flex flex-col justify-center items-center w-full"
        >
            <div className="h-4 w-4 bg-red-600 absolute z-50"/>
            <div className="w-full">
                <Wheel
                    initIdx={0}
                    length={24}
                    height={24}
                />
            </div>
            <div className="w-full bg-primary h-20 shadow-inner">

            </div>
        </div>
    );
};


export default function Wheel(props: {
    initIdx?: number
    length: number
    height: number
}) {
    const wheelSize = 20
    const slides = props.length
    const slidesPerView = 9
    const [sliderState, setSliderState] = React.useState<TrackDetails | null>(
        null
    )
    const size = useRef(0)
    const options = useRef<KeenSliderOptions>({

        slides: {
            number: slides,
            origin: "center",
            perView: "auto",
            spacing: 0,
        },
        // breakpoints: {
        //     '(min-width: 320px)': {
        //         slides: {
        //             // number: slides,
        //             origin: "auto",
        //             perView: 13,
        //         },
        //     },
        // },

        vertical: false,

        initial: props.initIdx || 0,
        loop: true,
        drag: true,

        rubberband: false,
        mode: "free-snap",

        created: (s) => {
            size.current = s.size
        },
        updated: (s) => {
            size.current = s.size
        },
        detailsChanged: (s) => {
            setSliderState(s.track.details)
        },
        slideChanged(s) {
            setCurrentSlide(s.track.details.rel)
        },
    })
    const [currentSlide, setCurrentSlide] = useState(0)

    const [sliderRef, slider] = useKeenSlider<HTMLDivElement>(options.current)

    const [radius, setRadius] = React.useState(0)

    React.useEffect(() => {
        if (slider.current) setRadius(slider.current.size / 2)
    }, [slider])

    function slideValues() {
        if (!sliderState) return []
        const offset = 1 / 2 - 1 / slidesPerView / 2

        const values = []
        for (let i = 0; i < slides; i++) {
            const distance = sliderState
                ? (sliderState.slides[i].distance - offset) * slidesPerView
                : 0
            const rotate =
                Math.abs(distance) > wheelSize / 2
                    ? 180
                    : distance * (360 / wheelSize) * -1
            const style = {
                transform: `rotateY(${rotate}deg) translateZ(${-radius}px) translateY(${-radius / 16}px)`,
                WebkitTransform: `rotateY(${rotate}deg) translateZ(${-radius}px)`,
            }
            const value = i
            values.push({style, value})
        }
        return values
    }

    return (
        <div
            className="keen-slider block text-white h-full w-full overflow-visible"
            ref={sliderRef}
        >
            {/*<div className="flex items-center justify-center transform-style-3d perspective-1000 h-full w-full">*/}
            {/*    <div className="h-full w-full relative" style={{height: props.height + "px"}}>*/}
            {new Array(slides).fill(1).map(({style,}, idx) => {

                const lv1 = [currentSlide + 1, currentSlide - 1]


                // first slide
                if (currentSlide === 0) {
                    lv1[1] = slides - 1
                }
                // last slide
                if (currentSlide === slides - 1) {
                    lv1[0] = 0
                }
                const lv2 = [lv1[0] + 1, lv1[1] - 1]
                const lv3 = [lv1[0] + 2, lv1[1] - 2]
                const lv4 = [lv1[0] + 3, lv1[1] - 3]
                const lv5 = [lv1[0] + 4, lv1[1] - 4]

                const className = ["keen-slider__slide flex-shrink-0 flex flex-col gap-4 items-center justify-center !w-fit p-5"]
                if (currentSlide === idx) className.push("bg-yellow-400")
                else if (lv1.includes(idx)) className.push("opacity-80 bg-green-400")
                else if (lv2.includes(idx)) className.push("opacity-65 bg-blue-400")
                else if (lv3.includes(idx)) className.push("opacity-50 bg-red-400")
                else if (lv4.includes(idx)) className.push("opacity-35 bg-purple-400")
                // else if(lv4.includes(idx)) className.push("opacity-20")
                else className.push("opacity-20")

                return (
                    <div
                        key={idx}
                        // style={style}
                        className={className.join(" ")}
                    >
                        <div className="bg-orange-100 ring-4 ring-primary rounded-full h-24 w-24 flex-shrink-0">

                        </div>
                        <span className="font-black text-xl text-primary">
                            موتور
                        </span>
                        <span className="font-black text-xl text-primary">
                            {currentSlide}
                        </span>
                    </div>
                )
            })}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    )
}