"use client"

import React, {ReactNode, useEffect, useRef, useState} from "react";
import {StoryItem,} from "@/stories/RahsazStore/Stories/StoryItem";
import {Button, CardBody, Image, Modal, ModalBody, ModalContent, ModalFooter,} from "@nextui-org/react";
import {axiosCoreWithAuth} from "@/lib/axios";
import {
    KeyboardArrowLeft,
    KeyboardArrowRight
} from "@mui/icons-material";
import {useInfinityList} from "@/hooks/useInfinityList";
import {Story} from "@/interfaces/Story.interface";
import {Spinner} from "@nextui-org/spinner";
import NextImage from "next/image";
import ReactPlayer from "react-player";
import {Card} from "@nextui-org/card";
import {useRouter} from "next/navigation";



export const Stories = () => {
    const [openStory, setOpenStory] = useState<number | null>(null)
    const handleOpenStory = (id: number) => () => {
        setOpenStory(id)
    }
    const handleCloseStory = () => {
        setOpenStory(null)
    }


    const scrollRef = useRef<HTMLDivElement | null>(null);

    const scrollLeft = () => {
        if (scrollRef.current) {
            const element = scrollRef.current;
            element.scrollLeft = element.scrollLeft - 100;
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            const element = scrollRef.current;
            element.scrollLeft = element.scrollLeft + 100;
        }
    };

    const [prevHidden, setPrevHidden] = useState(true)
    const [nextHidden, setNextHidden] = useState(true)

    const handleScroll = (e?: React.UIEvent<HTMLDivElement>) => {
        const scrollLeft = (e?.target as HTMLDivElement)?.scrollLeft || 0
        const clientWidth = scrollRef.current?.clientWidth || 0
        const scrollWidth = scrollRef.current?.scrollWidth || 0

        if (scrollLeft === 0 && scrollLeft === (clientWidth - scrollWidth)) {
            setPrevHidden(true)
            setNextHidden(true)
        } else if (scrollLeft === 0) {
            setPrevHidden(true)
            setNextHidden(false)
        } else if (scrollLeft === (clientWidth - scrollWidth)) {
            setPrevHidden(false)
            setNextHidden(true)
        } else {
            setPrevHidden(false)
            setNextHidden(false)
        }
    }

    useEffect(() => {
        handleScroll()
    }, [])

    const {
        list,
        hasMore,
        isLoading,
        onLoadMore,
        error: loaderError,
    } = useInfinityList<Story>({
        route: "store/story/list",
        search: "",
        isEnable: true,
    });


    const items = list.length > 0 ? list : new Array(20).fill({})



    const idx = items.findIndex((v) => (v.id === openStory))
    const haveNext = !!(items?.[idx + 1])
    const havePrev = !!(items?.[idx - 1])

    const next = () => {
        setOpenStory(items?.[idx + 1]?.id)
    }
    const prev = () => {
        setOpenStory(items?.[idx - 1]?.id)
    }




    return (
        <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="px-4 gap-6 w-full flex items-center overflow-y-hidden scroll-smooth hide-scrollbar"
        >
            <Button
                color="primary"
                variant="faded"
                size="md"
                radius="full"
                isIconOnly
                className="absolute start-3 z-10 hidden lg:block data-[disabled]:hidden"
                onPress={() => {
                    scrollRight()
                }}
                isDisabled={prevHidden}
            >
                <KeyboardArrowRight fontSize="large"/>
            </Button>
            {items.map((v, i) => {
                return (
                    <StoryItem
                        key={i}
                        {...v}
                        handleOpenStory={handleOpenStory(v.id)}
                    />
                )
            })}
            <Button
                color="primary"
                variant="faded"
                size="md"
                radius="full"
                isIconOnly
                className="absolute end-3 z-10 hidden lg:block data-[disabled]:hidden"
                onPress={() => {
                    scrollLeft()
                }}
                isDisabled={nextHidden}
            >
                <KeyboardArrowLeft fontSize="large"/>
            </Button>
            <ViewStory
                id={openStory}
                haveNext={haveNext}
                next={next}
                havePrev={havePrev}
                prev={prev}
                handleCloseStory={handleCloseStory}
            />
        </div>
    )


};


type ViewStoryProps = {
    id: number | null;
    handleCloseStory: () => void;
    haveNext: boolean;
    next: () => void;
    havePrev: boolean;
    prev: () => void;
}

const duration = 10000
const durationPart = 50
const ViewStory = (props: ViewStoryProps) => {

    const {
        id,
        handleCloseStory,
        haveNext,
        next,
        havePrev,
        prev,
    } = props


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
                // const v = o + (durationPart / duration)
                // if (v > 1) {
                //     if (slider.slides.length === slider.track.details.rel + 1) slider.moveToIdx(0)
                //     else slider.next()
                // }
                return v
            })
        }, durationPart)
    }


    const isOpen = !!id

    const axios = axiosCoreWithAuth()
    const [story, setStory] = useState<Story | null>(null)
    const getStory = async () => {
        if (!isOpen) return
        const ss: Story = await axios.get(`store/story/${id}`)
        setStory(ss)
    }

    useEffect(() => {
        getStory()
    }, [id]);

    const closeStory = () => {
        handleCloseStory()
        setStory(null)
    }

    const file = story?.file


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
                    title={file.title}
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
                    title={file.title}
                    width="400px"
                    height="100%"
                    controls={false}
                    playing={!!story?.id}
                    pip={false}
                    stopOnUnmount={true}
                    loop
                    playsinline
                    style={{objectFit: 'contain'}}
                />
            )
        }
    }

    const router = useRouter()
    return (
        <Modal
            //
            backdrop="blur"
            isOpen={isOpen}
            onClose={closeStory}
            scrollBehavior="inside"
            placement="top-center"
            // hideCloseButton
            isDismissable
            className="bg-black/50 backdrop-blur-lg max-w-none"

            classNames={{
                closeButton: "z-10 p-1.5 text-white hover:bg-white/10 active:bg-white/20"
            }}
            size="full"
            onClick={() => {
                closeStory()
            }}
        >
            <ModalContent className="shadow-none rounded-lg overflow-hidden p-0 max-h-none">
                <ModalBody className="p-0 justify-center items-center">
                    <div className="relative flex justify-center items-center max-w-full h-full max-h-full">
                        {!story && <Spinner/>}
                        {!!story && preview}
                        {!!story && (
                            <div
                                className="absolute bottom-0 z-20 text-white w-full py-4 px-3 bg-gradient-to-b from-transparent to-black flex flex-col gap-3"
                            >
                                {!!story?.product && (
                                    <Card
                                        isHoverable
                                        isPressable
                                        onPress={() => {
                                            router.push(`/product/${story?.product?.slug}`)
                                        }}
                                    >
                                        <CardBody className="flex-row gap-4">
                                            <div className="w-16 h-16">
                                                <Image
                                                    as={NextImage}
                                                    width={100}
                                                    height={100}
                                                    alt={story?.product?.thumbnail?.alt}
                                                    title={story?.product?.thumbnail?.title}
                                                    src={`${story?.product?.thumbnail ? (story?.product?.thumbnail.system.baseUrl + "/" + story?.product?.thumbnail?.path) : ""}`}
                                                    radius="md"
                                                    loading="eager"
                                                    className="object-fill !h-full !w-full"
                                                    classNames={{wrapper: "h-full w-full bg-contain bg-center"}}
                                                    fallbackSrc="/fallback.png"
                                                />
                                            </div>
                                            <div className="flex flex-col gap-3 flex-1 justify-center items-start">
                                                <span
                                                    className="font-bold text-base text-black"
                                                >
                                                    {story?.product?.title}
                                                </span>
                                            </div>
                                        </CardBody>
                                    </Card>
                                )}
                                <div
                                    className="flex flex-col gap-1"
                                >
                                    <h4 className="font-bold text-lg">
                                        {story?.title}
                                    </h4>
                                    <h6 className="font-light text-sm">
                                        {story?.description}
                                    </h6>
                                </div>
                            </div>
                        )}
                        {!!story && (
                            <div className="absolute top-0 h-full w-full z-10"/>
                        )}
                    </div>
                    {!!story && (
                        <div className="absolute h-[calc(100%-6rem)] w-full z-[11] flex justify-center items-center">
                            {havePrev && (
                                <div
                                    className="w-28 h-full absolute start-0 text-primary flex justify-center items-center cursor-pointer transition"
                                    onClick={(e) => {
                                        e.preventDefault()
                                        e.stopPropagation()
                                        prev()
                                    }}
                                >
                                    <KeyboardArrowRight fontSize="large"/>
                                </div>
                            )}
                            {haveNext && (
                                <div
                                    className="w-28 h-full absolute end-0 text-primary flex justify-center items-center cursor-pointer transition"
                                    onClick={(e) => {
                                        e.preventDefault()
                                        e.stopPropagation()
                                        next()
                                    }}
                                >
                                    <KeyboardArrowLeft fontSize="large"/>
                                </div>
                            )}
                        </div>
                    )}
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}