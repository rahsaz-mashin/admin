"use client"

import React, {useEffect, useState} from "react";
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
import {MinorChooseLocation} from "@/stories/General/MinorChooseLocation";
import {axiosCoreWithAuth} from "@/lib/axios";
import {Control, useForm, UseFormWatch} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import {IdentityAddress} from "@/interfaces/IdentityAddess.interface";
import {MinorSelect} from "@/stories/General/MinorSelect";
import {MinorInput} from "@/stories/General/MinorInput";
import {DoneAll} from "@mui/icons-material";


export type CartAddAddressProps = {
    addressId?: number;
    isOpen: boolean;
    onOpenChange?: () => void;
    update: () => void;
}


type T = IdentityAddress


export const CartAddAddressModal = (props: CartAddAddressProps) => {
    const {isOpen, onOpenChange, addressId, update} = props

    const [step, setStep] = useState<"location" | "address" | "result">("location")

    const schema = z.object({
            title: z.string({message: "عنوان آدرس را وارد کنید"}),
            type: z.union([
                z.string({message: "نوع آدرس را انتخاب کنید"})
                    .regex(/^\d+$/, "نوع آدرس معتبر نیست")
                    .transform((val) => ({id: +val})),
                z.number({message: "نوع آدرس را انتخاب کنید"})
                    .int("نوع آدرس معتبر نیست")
                    .positive("نوع آدرس معتبر نیست")
                    .transform((val) => ({id: val})),
            ]),
            location: z.string({message: "موقعیت مکانی را انتخاب کنید"}).regex(/^(-?\d+(\.\d+)?),\s*(-?\d+(\.\d+)?)$/, {message: "موقعیت مکانی نامعتبر می باشد"}),
            country: z.union([
                z.string({message: "کشور را انتخاب کنید"})
                    .regex(/^\d+$/, "کشور معتبر نیست")
                    .transform((val) => ({id: +val})),
                z.number({message: "کشور را انتخاب کنید"})
                    .int("کشور معتبر نیست")
                    .positive("کشور معتبر نیست")
                    .transform((val) => ({id: val})),
            ]),
            province: z.union([
                z.string({message: "استان را انتخاب کنید"})
                    .regex(/^\d+$/, "استان معتبر نیست")
                    .transform((val) => ({id: +val})),
                z.number({message: "استان را انتخاب کنید"})
                    .int("استان معتبر نیست")
                    .positive("استان معتبر نیست")
                    .transform((val) => ({id: val})),
            ]),
            city: z.union([
                z.string({message: "شهر را انتخاب کنید"})
                    .regex(/^\d+$/, "شهر معتبر نیست")
                    .transform((val) => ({id: +val})),
                z.number({message: "شهر را انتخاب کنید"})
                    .int("شهر معتبر نیست")
                    .positive("شهر معتبر نیست")
                    .transform((val) => ({id: val})),
            ]),
            address: z.string({message: "آدرس را وارد کنید"}).min(5, "آدرس معتبر نیست"),
            zipCode: z.string({message: "کد پستی را وارد کنید"}).regex(/[0-9]+/, "کد پستی وارد شده معتبر نیست").nullable().optional().or(z.string().length(0)),
            postBox: z.string({message: "صندوق پستی را وارد کنید"}).regex(/[0-9]+/, "صندوق پستی وارد شده معتبر نیست").nullable().optional().or(z.string().length(0)),
            description: z.string({message: "توضیحات را وارد کنید"}).min(10, "توضیحات حداقل باید 10 کاراکتر باشد").nullable().optional().or(z.string().length(0)),
        },
        {message: "آدرس معتبر نیست"}
    )

    const initialValue: T = {
        identity: undefined,


        title: "",
        description: "",
        type: null,

        country: null,
        province: null,
        city: null,
        address: "",
        zipCode: "",
        postBox: "",
        location: null,

        isDefault: false,
    }


    const axios = axiosCoreWithAuth()

    const initialData = async () => {
        if (!addressId) return initialValue
        const res: T = await axios.get(`store/identity/address/${addressId}`)
        return {
            ...res,
            location: res.location ? Object.values(res.location).join() : null,
        }
    }


    useEffect(() => {
        setStep("location")
    }, [isOpen]);


    const onSubmit = async (data: T) => {
        if (!addressId) await axios.post(`store/identity/address`, data)
        else await axios.patch(`store/identity/address/${addressId}`, data)
        goToResult()
        update()
    }

    const {
        handleSubmit,
        control,
        reset,
        formState,
        watch,
        setValue,
        setFocus,
        trigger,
    } = useForm<T>({
        resolver: zodResolver(schema),
        defaultValues: initialData,
    });

    const getAddress = async () => {
        const axios = axiosCoreWithAuth()

        const location = watch("location")

        if (!location) return

        const params = {location}
        const data: any = await axios.get("neshan/getAddress", {params})

        setValue("address", data.address, {shouldValidate: true})
        setValue("country", data.countryId || "", {shouldValidate: true})
        setValue("province", data.provinceId || "", {shouldValidate: true})
        setValue("city", data.cityId || "", {shouldValidate: true})
    }

    useEffect(() => {
        getAddress()
    }, [watch("location")]);


    const goToEnterAddress = async () => {
        const isValid = await trigger("location", {})
        if (isValid) setStep("address")
    }

    const goToChooseLocation = () => {
        setStep("location")
    }

    const goToResult = () => {
        setStep("result")
    }

    return (
        <Modal
            scrollBehavior="inside"
            backdrop="blur"
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            isDismissable={false}
        >
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1 font-bold text-base">
                            {addressId ? "ویرایش آدرس" : "افزودن آدرس جدید"}
                        </ModalHeader>
                        {(step === "location") && (
                            <ChooseLocation
                                next={goToEnterAddress}
                                control={control}
                                watch={watch}
                                onSubmit={handleSubmit(onSubmit)}
                            />
                        )}
                        {(step === "address") && (
                            <EnterAddress
                                prev={goToChooseLocation}
                                control={control}
                                watch={watch}
                                onSubmit={handleSubmit(onSubmit)}
                            />
                        )}
                        {(step === "result") && (
                            <Result
                                done={onClose}
                            />
                        )}
                    </>
                )}
            </ModalContent>
        </Modal>
    );
};







type ChooseLocationPropsType = {
    next: () => void;
    control: Control<T, any>;
    watch: UseFormWatch<T>;
    onSubmit: () => void;
}


const ChooseLocation = (props: ChooseLocationPropsType) => {


    const {
        next,
        control,
        watch,
        onSubmit,
    } = props


    return (
        <>
            <ModalBody>
                <span className="text-gray-500 text-sm font-light">
                    موقعیت مکانی خود را از روی نقشه انتخاب کنید:
                </span>
                <MinorChooseLocation
                    name="location"
                    control={control}
                />
            </ModalBody>
            <ModalFooter>
                <Button
                    fullWidth
                    color="primary"
                    variant="shadow"
                    onPress={next}
                >
                    تایید و ادامه
                </Button>
            </ModalFooter>
        </>
    )
}







type EnterAddressPropsType = {
    prev: () => void;
    control: Control<T, any>;
    watch: UseFormWatch<T>;
    onSubmit: () => void;
}

const EnterAddress = (props: EnterAddressPropsType) => {

    const {
        prev,
        control,
        watch,
        onSubmit,
    } = props


    return (
        <>
            <ModalBody>
                <span className="text-gray-500 text-sm font-light">
                    آدرس خود را بررسی کرده و در صورت نیاز آن را ویرایش کنید:
                </span>
                <MinorSelect
                    name="country"
                    control={control}
                    label="کشور"
                    isRequired
                    isSearchable
                    dynamic={{
                        route: "addressCountry/sloStyle",
                    }}
                />
                <MinorSelect
                    name="province"
                    control={control}
                    label="استان"
                    isRequired
                    isSearchable
                    dynamic={{
                        route: "addressProvince/sloStyle",
                        filter: {
                            country: {$eq: watch(`country`)}
                        },
                    }}
                />
                <MinorSelect
                    name="city"
                    control={control}
                    label="شهر"
                    isRequired
                    isSearchable
                    dynamic={{
                        route: "addressCity/sloStyle",
                        filter: {
                            province: {$eq: watch(`province`)}
                        },
                    }}
                />
                <MinorInput
                    name="address"
                    control={control}
                    label="آدرس کامل"
                    isRequired
                />
                <MinorInput
                    name="zipCode"
                    control={control}
                    label="کد پستی"
                    isNumeric
                    thousandsGroupDisabled
                />
                <MinorInput
                    name="postBox"
                    control={control}
                    label="صندوق پستی"
                    isNumeric
                    thousandsGroupDisabled
                />
                <hr/>
                <MinorInput
                    name="title"
                    control={control}
                    label="عنوان"
                    isRequired
                />
                <MinorSelect
                    name="type"
                    control={control}
                    label="نوع"
                    isRequired
                    isSearchable
                    dynamic={{
                        route: "identity/addressType/sloStyle",
                    }}
                />
                <MinorInput
                    name="description"
                    control={control}
                    label="توضیحات"
                    isMultiline
                />

            </ModalBody>
            <ModalFooter>
                <Button
                    fullWidth
                    color="default"
                    variant="solid"
                    onPress={prev}
                >
                    بازگشت
                </Button>
                <Button
                    fullWidth
                    color="primary"
                    variant="shadow"
                    onPress={onSubmit}
                >
                    ثبت آدرس
                </Button>
            </ModalFooter>
        </>
    )
}








type ResultPropsType = {
    done: () => void;
}

export const Result = (props: ResultPropsType) => {

    const {
        done,
    } = props

    return (
        <>
            <ModalBody className="flex flex-col gap-4 justify-center">
                <div className="text-success flex flex-col items-center gap-2">
                    <DoneAll className="h-16 w-16"/>
                    <span className="font-bold">
                        آدرس شما با موفقیت ثبت شد.
                    </span>
                </div>
            </ModalBody>
            <ModalFooter>
                <Button
                    className="flex-1 md:flex-none"
                    variant="flat"
                    color="default"
                    onPress={done}
                >
                    باشه
                </Button>
            </ModalFooter>
        </>
    );
};



