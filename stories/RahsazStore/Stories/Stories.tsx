"use client"

import React, {ReactNode, useEffect, useRef, useState} from "react";
import {StoryItem,} from "@/stories/RahsazStore/Stories/StoryItem";
import {Button, Image, Modal, ModalBody, ModalContent,} from "@nextui-org/react";
import {axiosCoreWithAuth} from "@/lib/axios";
import {
    KeyboardArrowLeft,
    KeyboardArrowRight
} from "@mui/icons-material";
import {useInfinityList} from "@/hooks/useInfinityList";
import {Story} from "@/interfaces/Story.interface";
import {Spinner} from "@nextui-org/spinner";
import NextImage from "next/image";
import {MimetypeAudioIcon, MimetypeImageIcon} from "@/stories/General/MinorUploader/Icons";
import ReactPlayer from "react-player";


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
                handleCloseStory={handleCloseStory}
            />
        </div>
    )


};


const ViewStory = (props: { id: number | null; handleCloseStory: () => void; }) => {

    const {
        id,
        handleCloseStory
    } = props

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
                    className="object-contain !h-fit !w-fit"
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
                    playing={isOpen}
                    loop
                    style={{objectFit: 'contain'}}
                />
            )
        }
    }

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
            className="max-w-none bg-black"

            classNames={{
                closeButton: "z-10 p-1.5 text-white hover:bg-white/10 active:bg-white/20"
            }}
            size="full"
        >
            <ModalContent className="shadow-none backdrop-blur-lg rounded-lg overflow-hidden p-0 max-h-none">
                <ModalBody className="p-0 justify-center items-center">
                    <div className="flex justify-center items-center max-w-full max-h-full">
                        {!story && <Spinner/>}
                        {!!story && preview}
                    </div>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}