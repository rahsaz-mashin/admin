"use client"

import React, {ReactNode, useEffect, useState} from "react";
import {
    Button,
    Card,
    CardBody,
    CardFooter,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader, useDisclosure
} from "@nextui-org/react";
import {HomeShortcut} from "@/interfaces/HomeShortcut.interface";
import {UseDisclosureReturn} from "@nextui-org/use-disclosure";
import {CategorySortingModalProps} from "@/stories/RahsazStore/Category/Tools";
import {axiosCoreWithAuth} from "@/lib/axios";
import {PaginationResponse} from "@/types/PaginationResponse";
import {Spinner} from "@nextui-org/spinner";
import Link from "next/link";


export type ShortcutsProps = {
    items: HomeShortcut[]
}


export const Shortcuts = (props: ShortcutsProps) => {

    const {
        items
    } = props

    const listModal = useDisclosure({defaultOpen: false});

    if (!items.length) return null


    return (
        <>
            <div
                className="w-full flex justify-center items-center self-center max-w-6xl px-4 select-none"
            >
                <div
                    className="w-full gap-4 grid grid-cols-1 us:grid-cols-2 xs:grid-cols-3 md:grid-cols-4 lg:grid-cols-8">
                    {items.map((v, i) => {
                        return (
                            <Card
                                key={v.id}
                                isPressable
                                isHoverable
                                shadow="lg"
                                as={Link}
                                href={v.url}
                                className="h-full"
                            >
                                <CardBody className="flex items-center justify-center">
                                    <i className="w-12 h-12" dangerouslySetInnerHTML={{__html: v.icon?.content || ""}}/>
                                </CardBody>
                                <CardFooter
                                    className="font-bold text-center truncate bg-primary text-white flex items-center justify-center p-1.5"
                                >
                                    {v.title}
                                </CardFooter>
                            </Card>
                        )
                    })}
                    <Card key="others" isPressable isHoverable shadow="lg" onPress={() => listModal.onOpen()}>
                        <CardBody className="flex items-center justify-center text-gray-300">
                            <svg
                                width="53"
                                height="53"
                                viewBox="0 0 53 53"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M13.9453 6.202C12.2229 6.00949 10.4438 6.00949 8.72139 6.202C7.42427 6.34697 6.37311 7.3679 6.21953 8.68109C6.01341 10.4433 6.01341 12.2236 6.21953 13.9859C6.37311 15.2991 7.42427 16.32 8.72139 16.465C10.4438 16.6575 12.2229 16.6575 13.9453 16.465C15.2424 16.32 16.2936 15.2991 16.4472 13.9859C16.6533 12.2236 16.6533 10.4433 16.4472 8.68109C16.2936 7.3679 15.2424 6.34697 13.9453 6.202Z"
                                />
                                <path
                                    d="M29.112 6.202C27.3896 6.00949 25.6104 6.00949 23.888 6.202C22.5909 6.34697 21.5398 7.3679 21.3862 8.68109C21.1801 10.4433 21.1801 12.2236 21.3862 13.9859C21.5398 15.2991 22.5909 16.32 23.888 16.465C25.6104 16.6575 27.3896 16.6575 29.112 16.465C30.4091 16.32 31.4602 15.2991 31.6138 13.9859C31.8199 12.2236 31.8199 10.4433 31.6138 8.68109C31.4602 7.3679 30.4091 6.34697 29.112 6.202Z"
                                />
                                <path
                                    d="M44.2786 6.202C42.5562 6.00949 40.7771 6.00949 39.0547 6.202C37.7576 6.34697 36.7064 7.3679 36.5528 8.68109C36.3467 10.4433 36.3467 12.2236 36.5528 13.9859C36.7064 15.2991 37.7576 16.32 39.0547 16.465C40.7771 16.6575 42.5562 16.6575 44.2786 16.465C45.5758 16.32 46.6269 15.2991 46.7805 13.9859C46.9866 12.2236 46.9866 10.4433 46.7805 8.68109C46.6269 7.3679 45.5758 6.34697 44.2786 6.202Z"
                                />
                                <path
                                    d="M13.9453 21.3687C12.2229 21.1762 10.4438 21.1762 8.72139 21.3687C7.42427 21.5136 6.37311 22.5346 6.21953 23.8478C6.01341 25.61 6.01341 27.3903 6.21953 29.1525C6.37311 30.4657 7.42427 31.4867 8.72139 31.6316C10.4438 31.8241 12.2229 31.8241 13.9453 31.6316C15.2424 31.4867 16.2936 30.4657 16.4472 29.1525C16.6533 27.3903 16.6533 25.61 16.4472 23.8478C16.2936 22.5346 15.2424 21.5136 13.9453 21.3687Z"
                                />
                                <path
                                    d="M29.112 21.3687C27.3896 21.1762 25.6104 21.1762 23.888 21.3687C22.5909 21.5136 21.5398 22.5346 21.3862 23.8478C21.1801 25.61 21.1801 27.3903 21.3862 29.1525C21.5398 30.4657 22.5909 31.4867 23.888 31.6316C25.6104 31.8241 27.3896 31.8241 29.112 31.6316C30.4091 31.4867 31.4602 30.4657 31.6138 29.1525C31.8199 27.3903 31.8199 25.61 31.6138 23.8478C31.4602 22.5346 30.4091 21.5136 29.112 21.3687Z"
                                />
                                <path
                                    d="M44.2786 21.3687C42.5562 21.1762 40.7771 21.1762 39.0547 21.3687C37.7576 21.5136 36.7064 22.5346 36.5528 23.8478C36.3467 25.61 36.3467 27.3903 36.5528 29.1525C36.7064 30.4657 37.7576 31.4867 39.0547 31.6316C40.7771 31.8241 42.5562 31.8241 44.2786 31.6316C45.5758 31.4867 46.6269 30.4657 46.7805 29.1525C46.9866 27.3903 46.9866 25.61 46.7805 23.8478C46.6269 22.5346 45.5758 21.5136 44.2786 21.3687Z"
                                />
                                <path
                                    d="M13.9453 36.5353C12.2229 36.3428 10.4438 36.3428 8.72139 36.5353C7.42427 36.6803 6.37311 37.7012 6.21953 39.0144C6.01341 40.7767 6.01341 42.557 6.21953 44.3192C6.37311 45.6324 7.42427 46.6533 8.72139 46.7983C10.4438 46.9908 12.2229 46.9908 13.9453 46.7983C15.2424 46.6533 16.2936 45.6324 16.4472 44.3192C16.6533 42.557 16.6533 40.7767 16.4472 39.0144C16.2936 37.7012 15.2424 36.6803 13.9453 36.5353Z"
                                />
                                <path
                                    d="M29.112 36.5353C27.3896 36.3428 25.6104 36.3428 23.888 36.5353C22.5909 36.6803 21.5398 37.7012 21.3862 39.0144C21.1801 40.7767 21.1801 42.557 21.3862 44.3192C21.5398 45.6324 22.5909 46.6533 23.888 46.7983C25.6104 46.9908 27.3896 46.9908 29.112 46.7983C30.4091 46.6533 31.4602 45.6324 31.6138 44.3192C31.8199 42.557 31.8199 40.7767 31.6138 39.0144C31.4602 37.7012 30.4091 36.6803 29.112 36.5353Z"
                                />
                                <path
                                    d="M44.2786 36.5353C42.5562 36.3428 40.7771 36.3428 39.0547 36.5353C37.7576 36.6803 36.7064 37.7012 36.5528 39.0144C36.3467 40.7767 36.3467 42.557 36.5528 44.3192C36.7064 45.6324 37.7576 46.6533 39.0547 46.7983C40.7771 46.9908 42.5562 46.9908 44.2786 46.7983C45.5758 46.6533 46.6269 45.6324 46.7805 44.3192C46.9866 42.557 46.9866 40.7767 46.7805 39.0144C46.6269 37.7012 45.5758 36.6803 44.2786 36.5353Z"
                                />
                            </svg>
                        </CardBody>
                        <CardFooter
                            className="font-bold text-center truncate bg-gray-300 text-white flex items-center justify-center p-1.5">
                            سایر امکانات
                        </CardFooter>
                    </Card>
                    <AllShortcutsModal state={listModal}/>
                </div>
            </div>
        </>
    );
};

export type AllShortcutsModalProps = {
    state: UseDisclosureReturn;
}

export const AllShortcutsModal = (props: AllShortcutsModalProps) => {

    const {state} = props

    const [data, setData] = useState<HomeShortcut[]>([])
    const [isLoading, setLoading] = useState(false)

    const axios = axiosCoreWithAuth()
    const getList = async () => {
        setLoading(true)
        const data: PaginationResponse<HomeShortcut> = await axios.get(`store/homeShortcuts/list`)
        setData(data?.data)
        setLoading(false)
    }

    useEffect(() => {
        getList()
    }, [state.isOpen]);

    return (
        <Modal
            //
            backdrop="blur"
            isOpen={state.isOpen}
            onClose={state.onClose}
            placement="center"
            isDismissable
        >
            <ModalContent>
                <ModalHeader>امکانات راهساز ماشین</ModalHeader>
                <ModalBody>
                    {isLoading && (
                        <div className="w-full flex justify-center items-center p-3">
                            <Spinner/>
                        </div>
                    )}
                    <div
                        className="w-full gap-4 grid grid-cols-1 us:grid-cols-2 xs:grid-cols-3"
                    >
                        {data.map((v, i) => {
                            return (
                                <Card
                                    key={v.id}
                                    isPressable
                                    isHoverable
                                    shadow="lg"
                                    as={Link}
                                    href={v.url}
                                    className="h-full"
                                >
                                    <CardBody className="flex items-center justify-center">
                                        <i
                                            className="w-12 h-12"
                                           dangerouslySetInnerHTML={{__html: v.icon?.content || ""}}
                                        />
                                    </CardBody>
                                    <CardFooter
                                        className="font-bold text-center truncate bg-primary text-white flex items-center justify-center p-1.5"
                                    >
                                        {v.title}
                                    </CardFooter>
                                </Card>
                            )
                        })}
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button
                        onPress={state.onClose}
                    >
                        باشه!
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}