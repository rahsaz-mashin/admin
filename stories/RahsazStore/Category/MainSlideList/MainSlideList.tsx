"use client"

import React, {useRef} from "react";
import {useKeenSlider} from "keen-slider/react";
import {KeenSliderOptions, TrackDetails} from "keen-slider";

export type CategoryMainSlideListProps = {}


export const CategoryMainSlideList = (props: CategoryMainSlideListProps) => {


    return (
        <div
            className="flex justify-center items-center w-full"
        >
            <div className="h-60 w-full">
                <Wheel
                    initIdx={1}
                    length={24}
                    height={24}
                />
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
            perView: 7,
        },

        vertical: false,

        initial: props.initIdx || 0,
        loop: true,
        drag: true,

        created: (s) => {
            size.current = s.size
        },
        updated: (s) => {
            size.current = s.size
        },
        detailsChanged: (s) => {
            setSliderState(s.track.details)
        },
        rubberband: false,
        mode: "free-snap",
    })

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
                transform: `rotateY(${rotate}deg) translateZ(${-radius}px) translateY(${-radius/16}px)`,
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
            <div className="flex items-center justify-center transform-style-3d perspective-1000 h-full w-full">
                <div className="h-full w-full relative" style={{height: props.height + "px"}}>
                    {slideValues().map(({style, value}, idx) => (
                        <div
                            key={idx}
                            style={style}
                            className="flex flex-col gap-4 items-center justify-center h-full w-full absolute backface-hidden"
                        >
                            <div className="bg-orange-100 shadow-[0_0_24px_2px_#ff921f] rounded-full h-24 w-24 flex-shrink-0">

                            </div>
                            <span className="font-black text-xl text-primary">
                                موتور
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}