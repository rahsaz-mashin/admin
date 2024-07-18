"use client"

import React, {useState} from "react";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
    Input,
    Autocomplete,
    AutocompleteItem,
    Checkbox
} from "@nextui-org/react";
import {Map} from "@neshan-maps-platform/ol"
import NeshanMap, {NeshanMapRef} from "@neshan-maps-platform/react-openlayers"

export type CartAddAddressProps = {
    isOpen: boolean;
    onOpenChange?: () => void;
}


export const CartAddAddress = (props: CartAddAddressProps) => {
    const {isOpen, onOpenChange} = props

    const [step, setStep] = useState<"location" | "address">("location")

    return (
        <Modal backdrop="blur" isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1 font-bold text-base">افزودن آدرس جدید</ModalHeader>
                        {(step === "location") && (
                            <ChooseLocation
                                submit={() => setStep("address")}
                            />
                        )}
                        {(step === "address") && (
                            <EnterAddress
                                back={() => setStep("location")}
                                submit={() => setStep("address")}
                            />
                        )}
                    </>
                )}
            </ModalContent>
        </Modal>
    );
};


const ChooseLocation = ({submit}: { submit: () => void }) => {
    return (
        <>
            <ModalBody>
                <span className="text-gray-500 text-sm font-light">
                    موقعیت مکانی خود را از روی نقشه انتخاب کنید:
                </span>
                <NeshanMap
                    mapKey="web.0cd8558bb31843c3a919ea52fcd093ce"
                    defaultType="neshan"
                    center={{ latitude: 24.7665394, longitude: 51.4749824 }}
                    style={{ height: "48vh", width: "100%" }}
                    // onInit={onInit}
                    zoom={13}
                >

                </NeshanMap>
            </ModalBody>
            <ModalFooter>
                <Button
                    fullWidth
                    color="primary"
                    variant="shadow"
                    onPress={submit}
                >
                    تایید و ادامه
                </Button>
            </ModalFooter>
        </>
    )
}

export const animals = [
    {label: "Cat", value: "cat", description: "The second most popular pet in the world"},
    {label: "Dog", value: "dog", description: "The most popular pet in the world"},
    {label: "Elephant", value: "elephant", description: "The largest land animal"},
    {label: "Lion", value: "lion", description: "The king of the jungle"},
    {label: "Tiger", value: "tiger", description: "The largest cat species"},
    {label: "Giraffe", value: "giraffe", description: "The tallest land animal"},
    {
        label: "Dolphin",
        value: "dolphin",
        description: "A widely distributed and diverse group of aquatic mammals",
    },
    {label: "Penguin", value: "penguin", description: "A group of aquatic flightless birds"},
    {label: "Zebra", value: "zebra", description: "A several species of African equids"},
    {
        label: "Shark",
        value: "shark",
        description: "A group of elasmobranch fish characterized by a cartilaginous skeleton",
    },
    {
        label: "Whale",
        value: "whale",
        description: "Diverse group of fully aquatic placental marine mammals",
    },
    {label: "Otter", value: "otter", description: "A carnivorous mammal in the subfamily Lutrinae"},
    {label: "Crocodile", value: "crocodile", description: "A large semiaquatic reptile"},
];
const EnterAddress = ({back, submit}: { back: () => void, submit: () => void }) => {
    return (
        <>
            <ModalBody>
                <span className="text-gray-500 text-sm font-light">
                    آدرس خود را بررسی کرده و در صورت نیاز آن را ویرایش کنید:
                </span>
                <Autocomplete
                    label="کشور"
                    variant="bordered"
                    color="primary"
                >
                    {animals.map((animal) => (
                        <AutocompleteItem key={animal.value} value={animal.value}>
                            {animal.label}
                        </AutocompleteItem>
                    ))}
                </Autocomplete>
                <Autocomplete
                    label="استان"
                    variant="bordered"
                    color="primary"
                >
                    {animals.map((animal) => (
                        <AutocompleteItem key={animal.value} value={animal.value}>
                            {animal.label}
                        </AutocompleteItem>
                    ))}
                </Autocomplete>
                <Autocomplete
                    label="شهرستان"
                    variant="bordered"
                    color="primary"
                >
                    {animals.map((animal) => (
                        <AutocompleteItem key={animal.value} value={animal.value}>
                            {animal.label}
                        </AutocompleteItem>
                    ))}
                </Autocomplete>
                <Input
                    label="آدرس دقیق"
                    variant="bordered"
                    color="primary"
                />
                <Input
                    label="کد پستی"
                    variant="bordered"
                    color="primary"
                />
                <Checkbox>
                    گیرنده سفارش خودم هستم
                </Checkbox>
                <Input
                    label="نام و نام خانوادگی گیرنده"
                    variant="bordered"
                    color="primary"
                />
                <Input
                    label="شماره موبایل گیرنده"
                    variant="bordered"
                    color="primary"
                />
            </ModalBody>
            <ModalFooter>
                <Button
                    fullWidth
                    color="default"
                    variant="solid"
                    onPress={back}
                >
                    بازگشت
                </Button>
                <Button
                    fullWidth
                    color="primary"
                    variant="shadow"
                    onPress={submit}
                >
                    ثبت آدرس
                </Button>
            </ModalFooter>
        </>
    )
}






