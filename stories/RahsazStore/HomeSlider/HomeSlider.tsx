"use client"

import React, {ReactNode, useState} from "react";
import {Button, Image,} from "@nextui-org/react";
import {useKeenSlider} from "keen-slider/react";
import {CircularProgress, Progress} from "@nextui-org/progress";
import {KeyboardArrowLeft, KeyboardArrowRight} from "@mui/icons-material";
import {AnimatePresence, motion} from "framer-motion";
import {AlarmIcon} from "@/stories/Icons";
import moment from "moment";
import jMoment from "jalali-moment";
import {Slider} from "@/interfaces/Slider.interface";
import NextImage from "next/image";
import {FileStorage} from "@/interfaces/FileStorage.interface";
import ReactPlayer from "react-player";

// export type HomeSliderItems = {
//     id: string;
//     title: string;
//     subtitle: string;
//     description?: string;
//     startAt?: string;
//     endAt?: string;
//
//     type: "image";
//     image: string;
// }
//
// const sliders: HomeSliderItems[] = [
//     {
//         id: "1",
//         title: "داستان راهساز ماشین",
//         subtitle: "داستان به وجود آمدن راهساز ماشین را در اینجا بخوانید ...",
//         type: "image",
//         image: "https://api.zl50.ir/storage/images/1697958170 engine-piston-cross-section.jpg",
//     },
//     {
//         id: "2",
//         title: "پیش فروش لوازم برقی",
//         subtitle: "آغاز اولین پیش فروش راهساز ماشین به مدت محدود",
//         description: `<div style="color: gold;"><b><u>فقط</u></b> ویژه مشتریان طلایی</div>`,
//         startAt: moment().add(4, "days").toISOString(),
//         endAt: moment().add(16, "days").toISOString(),
//         type: "image",
//         image: "https://api.zl50.ir/storage/images/1697958170 engine-piston-cross-section.jpg",
//     },
//     {
//         id: "3",
//         title: "کمپین فروش قطعات موتور",
//         subtitle: "قطعات و لوازم موتور به مدت محدود",
//         startAt: moment().subtract(2, "days").toISOString(),
//         endAt: moment().add(16, "days").toISOString(),
//         type: "image",
//         image: "https://api.zl50.ir/storage/images/1697958170 engine-piston-cross-section.jpg",
//     },
//     {
//         id: "4",
//         title: "واگذاری نماینده فروش راهساز ماشین",
//         subtitle: "نمایندگی فروش راهساز ماشین به مدت محدود واگذار می شود",
//         description: `<div style="color: dodgerblue;">اطلاع از شرایط نماینده فروش</div>`,
//         type: "image",
//         image: "https://api.zl50.ir/storage/images/1697958170 engine-piston-cross-section.jpg",
//     },
//     {
//         id: "5",
//         title: "راهساز آنلاین، سرویس جدید راهساز ماشین",
//         subtitle: "سرویس تولید محتوا و درج آگهی راهساز ماشین رونمایی شد",
//         type: "image",
//         image: "https://api.zl50.ir/storage/images/1697958170 engine-piston-cross-section.jpg",
//     },
//
// ]


export type HomeSliderProps = {
    items: Slider[];
}


const duration = 10000
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


export const HomeSlider = (props: HomeSliderProps) => {

    const {
        items,
    } = props

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
    }, [AutoSwitch(setProgress)])


    const current = items[currentSlide]

    let haveTimer = false
    let isStarted = false
    let isEnded = false
    // if (!!current.startAt || !!current.endAt) {
    //     haveTimer = true
    //     if (moment(current.startAt).diff(moment()) > 0) {
    //         isStarted = false
    //         isEnded = false
    //     } else if (moment(current.endAt).diff(moment()) > 0) {
    //         isStarted = true
    //         isEnded = false
    //     } else {
    //         isStarted = true
    //         isEnded = true
    //     }
    // }


    return (
        <>
            <div className="w-full select-none p-0 md:px-4">
                <div className="w-full h-full relative">
                    <div className="flex h-[56px] md:h-[60px]">
                        <div
                            className="bg-primary transition-width truncate flex flex-col px-2.5 py-1.5 flex-[1_1_0] flex-shrink-0 max-w-96 lg:max-w-[560px] xl:max-w-[720px] 3xl:max-w-[820px]"
                        >
                            <h6 className="font-bold text-lg md:text-xl text-white truncate">
                                {current?.title}
                            </h6>
                            {current?.subtitle && (
                                <span className="font-light text-xs md:text-sm text-white truncate">
                                    {current?.subtitle || ""}
                                </span>
                            )}
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
                    <div className="relative h-full w-full overflow-hidden z-10">
                        <AnimatePresence>
                            {!!current?.description && (
                                <motion.div
                                    initial={{bottom: "-60px"}}
                                    animate={{bottom: 0}}
                                    exit={{bottom: "-60px"}}
                                    className="absolute end-0 z-[1] bg-gradient-to-b px-24 from-transparent to-black/50 text-center h-16 w-full flex justify-center items-center text-primary"
                                >
                                    <p
                                        className="truncate"
                                        dangerouslySetInnerHTML={{__html: current?.description || ""}}
                                    />
                                </motion.div>
                            )}
                        </AnimatePresence>
                        <div className="absolute top-0 end-0 p-2 z-10">
                            <CircularProgress
                                size="sm"
                                strokeWidth={4}
                                value={progress * 100}
                                disableAnimation
                                aria-label="progess auto switch"
                            />
                        </div>
                        <AnimatePresence>
                            {/*
                            {haveTimer && (
                                <motion.div
                                    initial={{opacity: 0}}
                                    animate={{opacity: 1}}
                                    exit={{opacity: 0}}
                                    className="absolute p-2 z-10"
                                >
                                    <div className="relative -rotate-90 h-10 origin-top-right start-10">
                                         
                                        {!isStarted && !isEnded && (
                                            <div className="flex flex-row items-center gap-1">
                                                <Button
                                                    color="primary"
                                                    variant="shadow"
                                                    size="md"
                                                    radius="lg"
                                                    isIconOnly
                                                    // onClick={(e) => {
                                                    //     // @ts-ignore
                                                    //     e.stopPropagation() || instanceRef.current?.prev()
                                                    // }}
                                                    // isDisabled={currentSlide === 0}
                                                >
                                                    <AlarmIcon size={28}/>
                                                </Button>
                                                <div className="flex justify-center font-medium gap-1 px-1 text-white">
                                                    <span>فقط</span>
                                                    <b className="font-black">{jMoment(current.startAt).locale('fa').toNow(true)}</b>
                                                    <span>مانده تا شروع</span>
                                                </div>
                                            </div>
                                        )}
                                        
                                        {isStarted && !isEnded && (
                                            <div className="flex flex-col w-60 items-start gap-1">
                                                <div className="flex justify-center font-medium gap-1 px-1 text-white">
                                                    <span>فقط</span>
                                                    <b className="font-black">{jMoment(current.startAt).locale('fa').toNow(true)}</b>
                                                    <span>مانده تا پایان</span>
                                                </div>
                                                <Progress
                                                    size="md"
                                                    color={
                                                        moment(current.endAt).diff(moment(), 'minutes') / moment(current.endAt).diff(moment(current.startAt), 'minutes') > 0.9 ? "danger"
                                                            : moment(current.endAt).diff(moment(), 'minutes') / moment(current.endAt).diff(moment(current.startAt), 'minutes') > 0.5 ? "primary"
                                                                : "success"
                                                    }
                                                    value={moment(current.endAt).diff(moment(), 'minutes') / moment(current.endAt).diff(moment(current.startAt), 'minutes')}
                                                    minValue={0}
                                                    maxValue={1}
                                                    aria-label="progess bar to end"
                                                />
                                            </div>
                                        )}
                                        
                                        {!isStarted && isEnded && (
                                            <div className="flex flex-row items-end h-full gap-1">
                                                <div className="flex justify-center font-medium gap-1 px-1 text-white">
                                                    <span>مشکلی پیش آمده است</span>
                                                </div>
                                            </div>
                                        )}
                                      
                                        {isStarted && isEnded && (
                                            <div className="flex flex-row items-end h-full gap-1">
                                                <div className="flex justify-center font-medium gap-1 px-1 text-white">
                                                    <span>پایان یافته است</span>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            )}
*/}
                        </AnimatePresence>
                        <div className="absolute z-10 bottom-0 end-2 flex gap-1.5 justify-center items-end">
                            <div className="text-white font-bold text-xl">
                                {items.length}
                            </div>
                            <div className="text-white font-bold text-xl">
                                /
                            </div>
                            <div className="text-primary font-black text-3xl drop-shadow-[1px_1px_0px_black]">
                                {currentSlide + 1}
                            </div>
                        </div>
                        {(loaded && instanceRef.current) && (
                            <div
                                className="absolute z-10 top-0 end-0 p-2 h-full w-12 flex flex-col gap-1.5 justify-center items-center"
                            >
                                {
                                    // @ts-ignore
                                    [...new Array(instanceRef.current.track.details.slides.length).keys()].map((idx) => {
                                        if (currentSlide === idx) {
                                            return (
                                                <span
                                                    key={idx}
                                                    onClick={() => {
                                                        instanceRef.current?.moveToIdx(idx)
                                                    }}
                                                    className="rounded-full cursor-pointer transition-all duration-500 bg-primary aspect-square w-3"
                                                />
                                            )
                                        } else if (Math.abs(currentSlide - idx) <= 1) {
                                            return (
                                                <span
                                                    key={idx}
                                                    onClick={() => {
                                                        instanceRef.current?.moveToIdx(idx)
                                                    }}
                                                    className="rounded-full cursor-pointer transition-all duration-500 bg-white/70 aspect-square w-2"
                                                />
                                            )
                                        }
                                        return (
                                            <span
                                                key={idx}
                                                onClick={() => {
                                                    instanceRef.current?.moveToIdx(idx)
                                                }}
                                                className="rounded-full cursor-pointer transition-all duration-500 bg-white/40 aspect-square w-1.5"
                                            />
                                        )
                                    })
                                }
                            </div>
                        )}
                        {(loaded && instanceRef.current) && (
                            <div
                                className="absolute z-10 bottom-0 start-0 flex gap-1.5 justify-center items-center text-white"
                            >
                                <div className="relative">
                                    <svg
                                        width="90"
                                        height="40"
                                        viewBox="0 0 90 40"
                                        fill="currentColor"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M22.7379 5.40857C24.9569 2.03273 28.7257 0 32.7655 0H90V40H0L22.7379 5.40857Z"
                                        />
                                    </svg>
                                    <div
                                        className="absolute top-0 end-0 w-full h-full flex justify-center items-center pe-5">
                                        <Button
                                            color="primary"
                                            variant="light"
                                            size="sm"
                                            radius="md"
                                            className="z-10"
                                            isIconOnly
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
                                            variant="light"
                                            size="sm"
                                            radius="md"
                                            className="z-10"
                                            isIconOnly
                                            onClick={(e) => {
                                                // @ts-ignore
                                                e.stopPropagation() || instanceRef.current?.next()
                                            }}
                                            isDisabled={currentSlide === (instanceRef.current?.track?.details?.slides?.length || 0) - 1}
                                        >
                                            <KeyboardArrowLeft/>
                                        </Button>
                                    </div>
                                </div>

                            </div>
                        )}
                        <div ref={sliderRef} className="keen-slider w-full h-96">
                            {items.map((v, i) => {
                                const {
                                    id,
                                    layoutMode,
                                    blurBackground,
                                    background,
                                    thumbnail,
                                    title,
                                    file1,
                                    file2,
                                    file3,
                                    file4
                                } = v
                                return (
                                    <div
                                        key={id}
                                        className="keen-slider__slide w-full h-full flex gap-4 justify-center items-center relative after:absolute after:top-0 after:left-0 after:w-full after:h-full after:z-[4] after:contents-['']"
                                    >
                                        {file1 && (<ShowSlide file={file1}/>)}
                                        {background && (
                                            <div
                                                data-blur={blurBackground || undefined}
                                                className="absolute top-0 h-full w-full z-[2] data-[blur]:blur-xl"
                                            >
                                                <Image
                                                    as={NextImage}
                                                    width={1024}
                                                    height={1024}
                                                    alt={title}
                                                    title={title}
                                                    src={`${background.system.baseUrl}/${background.path}`}
                                                    radius="none"
                                                    loading="eager"
                                                    className="object-cover !h-full !w-full"
                                                    classNames={{wrapper: "h-full !max-w-none"}}
                                                />
                                            </div>
                                        )}
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


const ShowSlide = ({file}: { file: FileStorage }) => {

    const imageMimetype = ['image/jpeg', 'image/jpg', 'image/png', 'image/bmp', 'image/webp', 'image/svg+xml']
    const videoMimetype = ['video/x-msvideo', 'video/mpeg', 'video/mp4', 'video/ogg', 'video/webm']
    let preview: ReactNode = null


    if (file) {
        if (imageMimetype.includes(file.mimetype)) {
            preview = (
                <Image
                    as={NextImage}
                    width={1024}
                    height={1024}
                    alt={file.alt}
                    title={file.title + " " + file.mimetype}
                    src={`${file.system.baseUrl}/${file.path}`}
                    radius="none"
                    loading="eager"
                    className="object-contain !h-full !w-fit"
                    classNames={{wrapper: "h-full"}}
                />
            )
        }
        if (videoMimetype.includes(file.mimetype)) {
            preview = (
                <ReactPlayer
                    url={`${file.system.baseUrl}/${file.path}`}
                    title={file.title + " " + file.mimetype}
                    width="400px"
                    height="100%"
                    controls={false}
                    playing
                    pip={false}
                    volume={0}
                    muted
                    stopOnUnmount={true}
                    loop
                    playsinline
                    style={{objectFit: 'contain'}}
                />
            )
        }
    }

    return (
        <div className="z-[3] h-full w-full flex justify-center items-center">
            {preview}
        </div>
    )

}



