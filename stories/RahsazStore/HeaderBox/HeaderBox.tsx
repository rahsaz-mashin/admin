import React, {useState} from "react";
import {
    ScrollShadow,
    Card,
    CardBody, Button, CardFooter,
} from "@nextui-org/react";
import {ArrowRight, KeyboardArrowLeft, KeyboardArrowRight} from "@mui/icons-material";
import {useKeenSlider} from "keen-slider/react"
import {HeaderShortcut} from "@/interfaces/HeaderShortcut.interface";
import Link from "next/link";

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



export type HeaderBoxProps = {
    items: HeaderShortcut[];
}



export const HeaderBox = (props: HeaderBoxProps) => {

    const {items} = props


    const [currentSlide, setCurrentSlide] = useState(0)
    const [loaded, setLoaded] = useState(false)
    const [sliderRef, instanceRef] = useKeenSlider({
        loop: false,
        mode: "free",
        rtl: true,
        slides: {origin: "auto", spacing: 8, perView: "auto"},
        initial: 0,
        vertical: false,
        rubberband: false,
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel)
        },
        created() {
            setLoaded(true)
        },
    }, [])


    return (
        <div className="flex flex-[1_1_0] relative h-10 md:h-20 items-center justify-center overflow-hidden transition-width duration-500">
            <Card
                shadow="none"
                className="w-full h-full bg-primary md:bg-content1" radius="none"
                classNames={{base: "md:rounded-large"}}
            >
                <CardBody className="relative flex flex-row items-center justify-center overflow-hidden">
                    <div ref={sliderRef} className="keen-slider mx-0 lg:mx-9">
                        {items.map((v, i) => {
                            return (
                                <Button
                                    key={v.id}
                                    as={Link}
                                    href={v.url}
                                    color="primary"
                                    variant="light"
                                    size="md"
                                    className="keen-slider__slide flex-shrink-0 !w-fit bg-transparent h-8 rounded-none text-white active:opacity-80 font-light md:rounded-medium md:h-10 md:bg-transparent md:text-black md:hover:text-primary md:font-medium"
                                >
                                    {v.title}
                                </Button>
                            )
                        })}
                    </div>
                    <Button
                        color="primary"
                        variant="shadow"
                        size="sm"
                        radius="full"
                        isIconOnly
                        className="absolute start-3 z-10 hidden lg:block"
                        onClick={(e) => {
                            // @ts-ignore
                            e.stopPropagation() || instanceRef.current?.prev()
                        }}
                        isDisabled={currentSlide === 0}
                    >
                        <KeyboardArrowRight/>
                    </Button>
                    <Button
                        color="primary"
                        variant="shadow"
                        size="sm"
                        radius="full"
                        isIconOnly
                        className="absolute end-3 z-10 hidden lg:block"
                        onClick={(e) => {
                            // @ts-ignore
                            e.stopPropagation() || instanceRef.current?.next()
                        }}
                        isDisabled={currentSlide === (instanceRef.current?.track?.details?.slides?.length || 0) - 1}
                    >
                        <KeyboardArrowLeft/>
                    </Button>
                </CardBody>
            </Card>
        </div>
    );
};
