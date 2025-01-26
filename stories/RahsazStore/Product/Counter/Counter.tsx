import React, {useEffect, useRef, useState} from "react";
import {
    Button,
    Card,
    CardBody,
    CardFooter,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    useDisclosure
} from "@nextui-org/react";
import {AddRounded, DeleteOutlined, KeyboardArrowLeft, KeyboardArrowRight, RemoveRounded} from "@mui/icons-material";
import {useKeenSlider} from "keen-slider/react";
import {MinorInput} from "@/stories/General/MinorInput";
import {Control, useForm} from "react-hook-form";
import {axiosCoreWithAuth} from "@/lib/axios";
import {SolidAddToCartIcon, SolidCallIcon, SolidNotifyMeIcon} from "@/stories/Icons";
import {MinorCheckBox} from "@/stories/General/MinorCheckBox";
import Link from "next/link";


export type ProductCounterProps = {
    mode?: "slider" | "normal";
    size?: "sm" | "md" | "lg";
    minimum?: number;
    maximum?: number;
    withoutPrice?: boolean;
    notAvailable?: boolean;

    count: number;
    onCountChange?: (v: number) => void;
    onRemove?: () => void;
}


type T = {
    count: number;
}

export const ProductCounter = (props: ProductCounterProps) => {

    const {
        mode = "normal",
        size = "md",
        minimum = 0,
        maximum,
        withoutPrice,
        notAvailable,
        count,

        onCountChange,
        onRemove,
    } = props

    const setCount = (c: number) => {
        let r = c
        if (r < minimum) r = minimum
        if (maximum && r > maximum) r = maximum
        setValue("count", r)
    }
    const increase = (unit: number = 1) => {
        const c = parseInt(((watch("count") || minimum).toString()).replaceAll(",", ""))
        setCount(c + unit)
    }
    const decrease = (unit: number = 1) => {
        const c = parseInt(((watch("count") || minimum).toString()).replaceAll(",", ""))
        setCount(c - unit)
    }

    const remove = () => {
        if (onRemove) {
            onRemove()
        } else {
            setValue("count", 0)
        }
    }

    const initialData = {
        count: count
    }


    const {
        handleSubmit,
        control,
        reset,
        formState,
        watch,
        setValue,
    } = useForm<T>({
        defaultValues: initialData,
    });


    const isFirst = useRef(true)
    useEffect(() => {
        const c = parseInt(((watch("count") || minimum).toString()).replaceAll(",", ""))
        let d = c
        if (c < minimum) d = minimum
        if (maximum && c > maximum) d = maximum
        if (!isFirst.current) {
            if (onCountChange) onCountChange(d)
            else setValue("count", d)
            isFirst.current = false
        }
    }, [watch("count")])


    if (withoutPrice) {
        return (
            <CallForBuy
                size={size}
            />
        )
    }

    if (notAvailable) {
        return (
            <NotAvailable
                size={size}
            />
        )
    }


    if (watch("count") === 0) {
        return (
            <div className="flex flex-col gap-1 items-start">
                <div className="flex gap-1 items-center">
                    <Button
                        color="primary"
                        variant="shadow"
                        size={size}
                        startContent={<SolidAddToCartIcon/>}
                        onPress={(e) => increase()}
                    >
                        افزودن به سبد خرید
                    </Button>
                </div>
            </div>
        )
    }


    if (mode === "slider") {
        return (
            <SliderCounter
                control={control}
                size={size}
                increase={increase}
                decrease={decrease}
                count={watch("count")}
                setCount={setCount}
                remove={remove}
                minimum={minimum}
                maximum={maximum}
            />
        )
    }

    return (
        <NormalCounter
            control={control}
            size={size}
            increase={increase}
            decrease={decrease}
            count={watch("count")}
            setCount={setCount}
            remove={remove}
            minimum={minimum}
            maximum={maximum}
        />
    );
};


export type NotAvailablePropsType = {
    size: "sm" | "md" | "lg";
}


const NotAvailable = (props: NotAvailablePropsType) => {

    const {
        size,
    } = props

    const {isOpen, onOpen, onClose} = useDisclosure();


    const axios = axiosCoreWithAuth()
    const initialData = {
        method: []
    }
    const {
        handleSubmit,
        control,
        reset,
        formState,
        watch,
        setValue,
    } = useForm<any>({
        defaultValues: initialData,
    });


    const confirm = async () => {
        alert("hey ")
    }


    const closeHandler = () => {
        onClose()
        reset()
    }


    const methods = [
        {
            label: "ارسال ایمیل",
            key: "email",
        },
        {
            label: "ارسال پیامک",
            key: "message",
        },
        {
            label: "سیستم پیام شخصی راهساز ماشین",
            key: "notification",
        }
    ]

    return (
        <>
            <div className="flex flex-col gap-1 items-start">
                <div className="flex gap-1 items-center">
                    <Button
                        color="default"
                        variant="solid"
                        size={size}
                        startContent={<SolidNotifyMeIcon/>}
                        onPress={onOpen}
                    >
                        موجود شد خبرم کن
                    </Button>
                </div>
            </div>
            <Modal
                //
                backdrop="blur"
                isOpen={isOpen}
                onClose={closeHandler}
                placement="center"
                isDismissable
            >
                <ModalContent>
                    <ModalHeader>
                        اطلاع رسانی موجودشدن کالا
                    </ModalHeader>
                    <ModalBody>
                        <span className="font-light">
                            اگر کالا موجود شد، چطور به شما اطلاع دهیم؟
                        </span>
                        <MinorCheckBox
                            name="method"
                            control={control}
                            items={methods}
                            mode="group"
                            isReadOnly={formState.isValidating || formState.isLoading || formState.isSubmitting}
                        />
                    </ModalBody>
                    <ModalFooter>
                        <Button
                            variant="shadow"
                            color="primary"
                            isLoading={formState.isValidating || formState.isLoading || formState.isSubmitting}
                            isDisabled={!watch("method")?.length || formState?.isLoading || formState?.isValidating || formState?.isSubmitting || formState?.disabled}
                            onPress={confirm}
                        >
                            ثبت
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )

}

export type CallForBuyPropsType = {
    size: "sm" | "md" | "lg";
}

const CallForBuy = (props: CallForBuyPropsType) => {

    const {
        size,
    } = props

    return (
        <>
            <div className="flex flex-col gap-1 items-start">
                <div className="flex gap-1 items-center">
                    <Button
                        color="success"
                        variant="solid"
                        size={size}
                        startContent={<SolidCallIcon/>}
                        className="text-white"
                        as={Link}
                        href="tel:05133445566"
                    >
                        تماس بگیرید
                    </Button>
                </div>
            </div>
        </>
    )

}


export type CounterPropsType = {
    size: "sm" | "md" | "lg";

    increase: (u?: number) => void;
    decrease: (u?: number) => void;

    count: number;
    setCount: (c: number) => void;

    remove: () => void;

    control: Control<T>
    minimum: number;
    maximum?: number;

    error?: string | null;
}


const NormalCounter = (props: CounterPropsType) => {

    const {
        size,
        increase,
        decrease,

        count,
        setCount,

        remove,
        control,
        minimum,
        maximum,
        error,
    } = props


    return (
        <div className="flex flex-col gap-1 items-start">
            <div className="flex gap-1 items-center">
                <Button
                    color="primary"
                    variant="light"
                    isIconOnly
                    size={size}
                    onPress={() => increase()}
                >
                    <AddRounded/>
                </Button>
                <MinorInput
                    name="count"
                    control={control}
                    isNumeric
                    size={size}
                    allowNegative={false}
                    decimalScale={0}
                    allowLeadingZeros={false}
                    minValue={1}
                    variant="faded"
                    color="primary"
                    classNames={{
                        input: "text-center font-bold text-lg field-sizing-content p-1",
                        inputWrapper: "px-0 " + (size === "sm" ? "min-w-8" : size === "md" ? "min-w-10" : "min-w-12")
                    }}
                />
                <Button
                    color="primary"
                    variant="light"
                    isIconOnly
                    size={size}
                    onPress={() => decrease()}
                >
                    <RemoveRounded/>
                </Button>
                <Button
                    color="danger"
                    variant="flat"
                    isIconOnly
                    size={size}
                    onPress={remove}
                >
                    <DeleteOutlined/>
                </Button>
            </div>
            <div className="text-danger text-sm font-light empty:hidden">
                {error}
            </div>
        </div>
    )
}


const SliderCounter = (props: CounterPropsType) => {

    const {
        size,
        increase,
        decrease,

        count,
        setCount,
        remove,
        control,
        minimum,
        maximum = 999,
        error,
    } = props

    const [loaded, setLoaded] = useState(false)
    const [sliderRef, instanceRef] = useKeenSlider({
        mode: "snap",
        rtl: true,
        slides: {origin: "center", spacing: 0, perView: "auto"},
        loop: {
            min: 0,
            max: maximum,
        },
        range: {
            align: true,
            min: 0,
            max: maximum,
        },
        initial: 0,
        vertical: false,
        rubberband: false,
        slideChanged(slider) {
            setCount(slider.track.details.rel + minimum)
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


    const current = (count - minimum)
    const distance = (idx: number) => {
        const center = Math.floor(maximum / 2)

        const fromCurrent = current - idx
        let pos = fromCurrent
        if (fromCurrent > center) {
            pos = pos - maximum
        }
        if (fromCurrent < -1 * center) {
            pos = pos + maximum
        }
        return Math.abs(pos)
    }


    return (
        <div className="flex gap-1 items-center">
            <div className="flex items-center">
                <Button
                    color="primary"
                    variant="solid"
                    size={size}
                    isIconOnly
                    onClick={(e) => {
                        // @ts-ignore
                        e.stopPropagation() || instanceRef.current?.prev()
                    }}
                    disableAnimation
                    className="rounded-e-none"
                >
                    <KeyboardArrowRight/>
                </Button>
                <div className="bg-primary flex-1">
                    <div
                        ref={sliderRef}
                        className={["keen-slider bg-white border-primary border-2 font-bold", sizeClassName].join(" ")}
                    >
                        {Array.from({length: maximum}, (_, i) => (i + 1))?.map((v, idx) => {
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
                </div>
                <Button
                    color="primary"
                    variant="solid"
                    size={size}
                    isIconOnly
                    onClick={(e) => {
                        // @ts-ignore
                        e.stopPropagation() || instanceRef.current?.next()
                    }}
                    disableAnimation
                    className="rounded-s-none"
                >
                    <KeyboardArrowLeft/>
                </Button>
            </div>

            <Button
                color="danger"
                variant="flat"
                isIconOnly
                size={size}
                onPress={remove}
            >
                <DeleteOutlined/>
            </Button>
        </div>
    )
}
//