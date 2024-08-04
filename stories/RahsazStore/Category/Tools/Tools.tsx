"use client"

import React from "react";
import {
    Button,
    Listbox, ListboxItem,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    useDisclosure
} from "@nextui-org/react";
import {SortOutlined, TuneOutlined} from "@mui/icons-material";
import {Chip} from "@nextui-org/chip";
import {UseDisclosureReturn} from "@nextui-org/use-disclosure";
import {IconWrapper} from "@/stories/General/IconWrapper/IconWrapper";
import {ItemCounter} from "@/stories/General/ItemCounter/ItemCounter";
import {Switch} from "@nextui-org/switch";
import {
    OutlinedAwardIcon,
    OutlinedBasketIcon,
    OutlinedCreditCardIcon,
    OutlinedCustomizationIcon, OutlinedMapIcon,
    OutlinedMarketIcon, OutlinedNotebookBookmarkIcon, OutlinedPackIcon
} from "@/stories/Icons";


export type CategoryToolsProps = {}


export const CategoryTools = (props: CategoryToolsProps) => {
    const sortingModal = useDisclosure({defaultOpen: false});
    const filteringModal = useDisclosure({defaultOpen: false});

    return (
        <>
            <div className="flex justify-between items-center p-5">
                <div className="flex gap-3">
                    <Button
                        color="secondary"
                        variant="flat"
                        radius="full"
                        onPress={() => sortingModal.onOpen()}

                        startContent={<SortOutlined/>}
                    >
                        مرتب سازی
                    </Button>
                    <Button
                        color="secondary"
                        variant="flat"
                        radius="full"
                        className="px-2"
                        onPress={() => filteringModal.onOpen()}

                        startContent={<TuneOutlined/>}
                        endContent={
                            <Chip
                                variant="solid"
                                className="bg-white text-secondary"
                            >
                                2 مورد
                            </Chip>
                        }
                    >
                        محدودسازی
                    </Button>
                </div>
                <div className="flex gap-3">

                </div>
            </div>
            <CategorySortingModal state={sortingModal}/>
            <CategoryFilteringModal state={filteringModal}/>
        </>
    )
}


export type CategorySortingModalProps = {
    state: UseDisclosureReturn;
}


export const CategorySortingModal = (props: CategorySortingModalProps) => {

    const {state} = props
    const onClose = () => {
        state.onClose()
    }

    const onDone = () => {
        onClose()
    }
    return (
        <Modal
            //
            backdrop="blur"
            isOpen={state.isOpen}
            onClose={onClose}
            placement="bottom-center"
            isDismissable
        >
            <ModalContent>
                <ModalHeader>
                    مرتب سازی
                </ModalHeader>
                <ModalBody>
                    <Listbox
                        variant="flat"
                        disallowEmptySelection
                        selectionMode="single"
                        // selectedKeys={selectedKeys}
                        // onSelectionChange={setSelectedKeys}
                        itemClasses={{base: "px-3 gap-3 h-12"}}
                    >
                        <ListboxItem key="text">پربازدیدترین</ListboxItem>
                        <ListboxItem key="number">جدیدترین</ListboxItem>
                        <ListboxItem key="date">پر فروش ترین</ListboxItem>
                        <ListboxItem key="single_date">ارزان ترین</ListboxItem>
                        <ListboxItem key="iteration">گران ترین</ListboxItem>
                        <ListboxItem key="iteration2">محبوب ترین</ListboxItem>
                    </Listbox>
                </ModalBody>
                <ModalFooter>
                    <Button
                        className="flex-1 md:flex-none"
                        variant="flat"
                        color="default"
                        onPress={onClose}
                    >
                        انصراف
                    </Button>
                    <Button
                        className="flex-1 md:flex-none"
                        variant="shadow"
                        color="primary"
                        // isDisabled={!type}
                        onPress={onDone}
                    >
                        اعمال
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}


export type CategoryFilteringModalProps = {
    state: UseDisclosureReturn;
}
export const CategoryFilteringModal = (props: CategoryFilteringModalProps) => {

    const {state} = props
    const onClose = () => {
        state.onClose()
    }
    return (
        <Modal
            //
            backdrop="blur"
            isOpen={state.isOpen}
            onClose={onClose}
            placement="bottom-center"
            isDismissable
        >
            <ModalContent>
                <ModalHeader>
                    محدود سازی
                </ModalHeader>
                <ModalBody>
                    <Listbox
                        aria-label="Filtering"
                        onAction={(key) => alert(key)}
                        className="p-0 gap-0 divide-y divide-default-300/50 dark:divide-default-100/80"
                        itemClasses={{
                            base: "px-3 gap-3 h-12",
                        }}
                    >
                        <ListboxItem
                            key="machine_brand"
                            endContent={<ItemCounter number={13}/>}
                            startContent={
                                <IconWrapper className="bg-success/10 text-success">
                                    <OutlinedNotebookBookmarkIcon size={24}/>
                                </IconWrapper>
                            }
                        >
                            مدل و برند ماشین
                        </ListboxItem>
                        <ListboxItem
                            key="manufactor"
                            endContent={<ItemCounter number={6}/>}
                            startContent={
                                <IconWrapper className="bg-red-500/10 text-red-500">
                                    <OutlinedPackIcon size={24}/>
                                </IconWrapper>
                            }
                        >
                            شرکت سازنده
                        </ListboxItem>
                        <ListboxItem
                            key="manufactor_country"
                            endContent={<ItemCounter number={4}/>}
                            startContent={
                                <IconWrapper className="bg-blue-500/10 text-blue-500">
                                    <OutlinedMapIcon size={24}/>
                                </IconWrapper>
                            }
                        >
                            کشور سازنده
                        </ListboxItem>
                        <ListboxItem
                            key="type"
                            endContent={<ItemCounter number={2}/>}
                            startContent={
                                <IconWrapper className="bg-yellow-500/10 text-yellow-500">
                                    <OutlinedCustomizationIcon size={24}/>
                                </IconWrapper>
                            }
                        >
                            نوع جنس
                        </ListboxItem>
                        <ListboxItem
                            key="price"
                            endContent={<ItemCounter />}
                            startContent={
                                <IconWrapper className="bg-purple-500/10 text-purple-500">
                                    <OutlinedCreditCardIcon size={24}/>
                                </IconWrapper>
                            }
                        >
                            محدوده قیمتی
                        </ListboxItem>
                        <ListboxItem
                            key="available_stock"
                            endContent={
                                <Switch
                                    classNames={{
                                        wrapper: "!mx-0"
                                    }}
                                />
                            }
                            startContent={
                                <IconWrapper className="bg-cyan-500/10 text-cyan-500">
                                    <OutlinedBasketIcon size={24}/>
                                </IconWrapper>
                            }
                        >
                            فقط کالاهای موجود
                        </ListboxItem>
                        <ListboxItem
                            key="rahsaz_stock"
                            endContent={
                                <Switch
                                    classNames={{
                                        wrapper: "!mx-0"
                                    }}
                                />
                            }
                            startContent={
                                <IconWrapper className="bg-warning/10 text-warning">
                                    <OutlinedAwardIcon size={24}/>
                                </IconWrapper>
                            }
                        >
                            فقط کالاهای موجود در انبار راهساز ماشین
                        </ListboxItem>
                    </Listbox>
                </ModalBody>
                <ModalFooter>
                    <Button
                        className="flex-1 md:flex-none"
                        variant="flat"
                        color="default"
                        onPress={onClose}
                    >
                        انصراف
                    </Button>
                    <Button
                        className="flex-1 md:flex-none"
                        variant="shadow"
                        color="primary"
                        // isDisabled={!type}
                        // onPress={next}
                    >
                        اعمال
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}