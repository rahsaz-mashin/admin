import React, {useState} from "react";
import {Button} from "@nextui-org/react";
import {Input} from "@nextui-org/input";
import {AddRounded, DeleteOutlined, KeyboardArrowLeft, KeyboardArrowRight, RemoveRounded} from "@mui/icons-material";
import {useKeenSlider} from "keen-slider/react";
import {OutlineCartIcon} from "@/stories/RahsazAdmin/Icons";


export type ProductCounterProps = {
    mode?: "slider" | "normal";
    size?: "sm" | "md" | "lg";
}


export const ProductCounter = (props: ProductCounterProps) => {

    const {
        mode = "normal",
        size = "md",
    } = props

    const [count, setCount] = useState(0)

    if (mode === "slider") {
        return (
            <SliderCounter
                size={size}
                maxOrder={10}
                current={count - 1}
                setCurrent={(i) => setCount(i + 1)}
            />
        )
    }

    return (
        <div className="flex gap-1 items-center">
            <Button
                color="primary"
                variant="light"
                isIconOnly
            >
                <AddRounded/>
            </Button>
            <Input
                color="primary"
                variant="faded"
                className="w-10"
                classNames={{input: "text-center font-bold text-lg", inputWrapper: "px-0"}}
                value="5"
            />
            <Button
                color="primary"
                variant="light"
                isIconOnly
            >
                <RemoveRounded/>
            </Button>
            <Button
                color="default"
                variant="flat"
                isIconOnly
            >
                <DeleteOutlined/>
            </Button>
        </div>
    );
};


type SliderCounter = {
    size: "sm" | "md" | "lg";
    maxOrder: number;
    current: number;
    setCurrent: (d: number) => void;
}

const SliderCounter = (props: SliderCounter) => {

    const {
        size,
        maxOrder,
        current,
        setCurrent,
    } = props

    const [loaded, setLoaded] = useState(false)
    const [sliderRef, instanceRef] = useKeenSlider({
        loop: true,
        mode: "snap",
        rtl: true,
        slides: {origin: "center", spacing: 0, perView: "auto"},
        initial: 0,
        vertical: false,
        rubberband: false,
        slideChanged(slider) {
            setCurrent(slider.track.details.rel)
        },
        created() {
            setLoaded(true)
        },
    }, [])

    let sizeClassName = "rounded-medium min-w-10 w-10 h-10 max-w-44 text-base"
    if (size === "sm") {
        sizeClassName = "rounded-small min-w-8 w-8 h-8 max-w-28 text-sm"
    }
    if (size === "md") {
        sizeClassName = "rounded-medium min-w-10 w-10 h-10 max-w-44 text-lg"
    }
    if (size === "lg") {
        sizeClassName = "rounded-large min-w-12 w-12 h-12 max-w-60 text-xl"
    }

    const distance = (idx: number) => {
        const center = Math.floor(maxOrder / 2)
        const fromCurrent = current - idx
        let pos = fromCurrent
        if (fromCurrent > center) {
            pos = pos - maxOrder
        }
        if (fromCurrent < -1 * center) {
            pos = pos + maxOrder
        }
        return Math.abs(pos)
    }

    if (current === -1) {
        return (
            <div className="flex gap-1 items-center">
                <Button
                    color="primary"
                    variant="shadow"
                    size={size}
                    startContent={<OutlineCartIcon/>}
                    onPress={(e) => {
                        setCurrent(0)
                    }}
                >
                    افزودن به سبد خرید
                </Button>
            </div>
        )
    }

    return (
        <div className="flex gap-1 items-center">
            <Button
                color="danger"
                variant="flat"
                size={size}
                isIconOnly
                onPress={() => {
                    setCurrent(-1)
                }}
            >
                <DeleteOutlined/>
            </Button>
            <Button
                color="primary"
                variant="light"
                size={size}
                isIconOnly
                onClick={(e) => {
                    // @ts-ignore
                    e.stopPropagation() || instanceRef.current?.prev()
                }}
            >
                <KeyboardArrowRight/>
            </Button>
            <div
                ref={sliderRef}
                className={["keen-slider flex-1 border-2 border-primary font-bold", sizeClassName].join(" ")}
            >
                {Array.from({length: maxOrder}, (_, i) => (i + 1))?.map((v, idx) => {
                    return (
                        <div
                            key={idx}
                            data-distance={distance(idx)}
                            className="keen-slider__slide group min-w-8 flex justify-center items-center"
                        >
                            <span
                                className="transition-[color,scale] duration-500 group-data-[distance='0']:text-primary group-data-[distance='0']:scale-[1] group-data-[distance='1']:text-gray-500 group-data-[distance='1']:scale-[0.85] group-data-[distance='2']:text-gray-400 group-data-[distance='2']:scale-[0.7] group-data-[distance='3']:text-gray-300 group-data-[distance='3']:scale-[0.55] group-data-[distance='4']:text-gray-200 group-data-[distance='4']:scale-[0.4]"
                            >
                                {v}
                            </span>
                        </div>
                    )
                })}
            </div>
            <Button
                color="primary"
                variant="light"
                size={size}
                isIconOnly
                onClick={(e) => {
                    // @ts-ignore
                    e.stopPropagation() || instanceRef.current?.next()
                }}
            >
                <KeyboardArrowLeft/>
            </Button>
        </div>
    )
}