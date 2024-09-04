"use client"

import React, {LegacyRef, useContext, useEffect, useRef, useState} from "react";
import {Button} from "@nextui-org/react";
import {Control, SubmitHandler, useController, useForm, useWatch} from "react-hook-form";
import {gendersEnum, identityTypesEnum} from "@/interfaces/Identity.interface";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {MinorInput} from "@/stories/General/MinorInput";
import {MinorSelect} from "@/stories/General/MinorSelect";
import {Session} from "next-auth";
import {CalendarDate} from "@internationalized/date";
import {axiosCoreWithAuth} from "@/lib/axios";
import {motion} from "framer-motion";
import {useContainerDimensions} from "@/hooks/useContainerDimentions";
import {ContainerDimensionsContext} from "@/context/containerDimensions.context";
import {useMediaQuery} from "@/hooks/useMediaQuery";


export type DashboardIdentityProps = {
    session: Session
}

export type IdentityInfoFormType = {
    identityType?: identityTypesEnum;
    namePrefix?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    nameSuffix?: string | null;
    birthday?: Date | null;
    gender?: gendersEnum;

    legalName?: string | null;
    tradeMark?: string | null;
    registrationNumber?: string | null;

    nationalCode?: string | null;
    economicCode?: string | null;
};


const realIdentitySchema = z.object({
    identityType: z.literal(identityTypesEnum.real),
    firstName: z.string({message: "نام خود را وارد کنید"}).min(3, "نام معتبر نیست"),
    lastName: z.string({message: "نام خانوادگی خود را وارد کنید"}).min(3, "نام خانوادگی معتبر نیست"),
    birthday: z.date({message: "تاریخ تولد معتبر نیست"}).optional(),
    nationalCode: z.string({message: "کد ملی را وارد کنید"}).regex(/^\d{10}$/, "کد ملی معتبر نیست"),
    gender: z.nativeEnum(gendersEnum, {message: "جنسیت نامعتبر است"}).optional(),
});

const legalIdentitySchema = z.object({
    identityType: z.literal(identityTypesEnum.legal),
    legalName: z.string({message: "نام شرکت را وارد کنید"}).min(3, "نام شرکت معتبر نیست"),
    tradeMark: z.string({message: "عنوان تجاری شرکت را وارد کنید"}).min(3, "عنوان تجاری معتبر نیست"),
    registrationNumber: z.string({message: "شماره ثبت شرکت را وارد کنید"}).regex(/^\d{3,6}\s{0,3}$/, "شماره ثبت شرکت معتبر نیست"),
    nationalCode: z.string({message: "شناسه ملی شرکت را وارد کنید"}).regex(/^\d{11}$/, "شناسه ملی شرکت معتبر نیست"),
    economicCode: z.string({message: "کد اقتصادی شرکت را وارد کنید"}).regex(/^\d{12}$/, "کد اقتصادی شرکت معتبر نیست"),
});

const schema = z.discriminatedUnion(
    "identityType",
    [realIdentitySchema, legalIdentitySchema],
    {
        message: "هویت خود را انتخاب کنید",
        errorMap: (issue, ctx) => {
            if (issue.code === 'invalid_union_discriminator') {
                return {message: `هویت خود را به درستی انتخاب کنید`}
            }
            return {message: ctx.defaultError}
        },
    }
)

export const DashboardIdentity = (props: DashboardIdentityProps) => {

    const {session} = props
    const identity = session.account?.identity
    const isFirst = !identity
    const initialData: () => Promise<IdentityInfoFormType> = async () => {
        let result: IdentityInfoFormType
        if (identity) {
            result = {
                identityType: identity.identityType,
                namePrefix: identity.namePrefix,
                firstName: identity.firstName,
                lastName: identity.lastName,
                nameSuffix: identity.nameSuffix,
                birthday: identity.birthday,
                gender: identity.gender,

                legalName: identity.legalName,
                tradeMark: identity.tradeMark,
                registrationNumber: identity.registrationNumber,

                nationalCode: identity.nationalCode,
                economicCode: identity.economicCode,
            }
        } else {
            result = {
                identityType: identityTypesEnum.real,
                namePrefix: undefined,
                firstName: undefined,
                lastName: undefined,
                nameSuffix: undefined,
                birthday: undefined,
                gender: undefined,

                legalName: undefined,
                tradeMark: undefined,
                registrationNumber: undefined,

                nationalCode: undefined,
                economicCode: undefined,
            }
        }
        return result
    }

    const {
        register,
        handleSubmit,
        control,
        reset,
        setValue,
    } = useForm<IdentityInfoFormType>({
        resolver: zodResolver(schema),
        defaultValues: initialData,
    });

    const onSubmit: SubmitHandler<IdentityInfoFormType> = async (data) => {
        await axiosCoreWithAuth().patch("/auth", data)
    }

    useEffect(() => {
        register("identityType")

        register("namePrefix")
        register("firstName")
        register("lastName")
        register("nameSuffix")

        register("birthday")
        register("gender")

        register("legalName")
        register("tradeMark")
        register("registrationNumber")

        register("nationalCode")
        register("economicCode")
    }, [])

    const identityType = useWatch({control, name: "identityType"})

    useEffect(() => {
        reset({identityType: identityType}, {keepDefaultValues: true})
    }, [identityType]);


    const typesVariants = {
        desktop: {
            real: {
                x: 0,
            },
            legal: {
                x: "100%",
            },
        },
        mobile: {
            real: {
                x: 0,
            },
            legal: {
                x: 0,
            },
        },
    };

    const formVariants = {
        desktop: {
            real: {
                x: 0,
            },
            legal: {
                x: "-100%",
            },
        },
        mobile: {
            real: {
                x: 0,
            },
            legal: {
                x: 0,
            },
        },
    };


    const containerDimensionsContext = useContext(ContainerDimensionsContext);
    const isDesktopScreen = useMediaQuery('(min-width: 1024px)');

    return (
        <>
            <div className="relative min-h-full">
                <motion.section
                    variants={isDesktopScreen ? typesVariants.desktop : typesVariants.mobile}
                    initial={identityType}
                    animate={identityType}
                    transition={{duration: 1}}
                    onClick={() => {
                        if (isFirst) setValue("identityType", identityType === identityTypesEnum.real ? identityTypesEnum.legal : identityTypesEnum.real)
                    }}
                    style={{height: (containerDimensionsContext?.dimensions?.height || 0) + "px"}}
                    className="sticky top-0 left-0 w-full shadow-[inset_#00000036_0_0_20px_10px] lg:shadow-none lg:w-1/2 max-h-24 lg:max-h-none z-20 lg:z-0 flex float-left bg-primary text-white select-none cursor-pointer flex-col items-center gap-1 justify-center p-4"
                >
                    <h1 className="font-bold lg:font-black text-lg lg:text-2xl">
                        {identityType === identityTypesEnum.real && "شخصیت حقیقی"}
                        {identityType === identityTypesEnum.legal && "شخصیت حقوقی"}
                    </h1>
                    {isFirst && (
                        <h6 className="font-light lg:font-medium text-sm lg:text-base text-center">
                            {identityType === identityTypesEnum.real && "در صورتی که مالک یا نماینده شرکت هستید، جهت تغییر به شخصیت حقوقی اینجا را کلیک کنید."}
                            {identityType === identityTypesEnum.legal && "در صورتی که نماینده یا مالک شرکت  نیستید، برای تغییر به شخصیت حقیقی اینجا را کلیک کنید."}
                        </h6>
                    )}
                </motion.section>
                <motion.section
                    variants={isDesktopScreen ? formVariants.desktop : formVariants.mobile}
                    initial={identityType}
                    animate={identityType}
                    transition={{duration: 1}}
                    className="w-full lg:w-1/2 h-full bg-white p-4 flex flex-col gap-5 shadow-none lg:shadow-[#00000036_0_0_20px_20px]"
                >
                    <div className="h-full">
                        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
                            <div className="relative w-full flex flex-col gap-1">
                                <h1 className="font-black text-black text-base">
                                    مشخصات هویتی
                                </h1>
                                <span className="font-light text-gray-500 text-base">
                                اطلاعات هویتی خود را کامل کنید.
                            </span>
                            </div>
                            <div className="flex gap-2 w-full">
                                <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 w-full">
                                    {identityType === identityTypesEnum.real && <RealIdentity control={control}/>}
                                    {identityType === identityTypesEnum.legal && <LegalIdentity control={control}/>}
                                </div>
                            </div>
                            <div className="w-full">
                                <Button
                                    type="submit"
                                    variant="shadow"
                                    color="primary"
                                    size="lg"
                                >
                                    تایید و ثبت
                                </Button>
                            </div>
                        </form>
                    </div>
                </motion.section>
            </div>
        </>
    )
};


const RealIdentity = ({control}: { control: Control<any, any> }) => {
    return (
        <>
            <MinorInput
                control={control}
                name="firstName"
                label="نام"
                isRequired
            />
            <MinorInput
                control={control}
                name="lastName"
                label="نام خانوادگی"
                isRequired
            />
            <MinorInput
                control={control}
                name="birthday"
                label="تاریخ تولد"
                isDateInput
                withPicker
                hourCycle={24}
                granularity="day"
                // showMonthAndYearPickers
                minValue={new CalendarDate(1921, 3, 21)}
                maxValue={new CalendarDate(2010, 3, 21)}
                placeholderValue={new CalendarDate(2000, 3, 21)}
            />
            <MinorInput
                control={control}
                name="nationalCode"
                label="کد ملی"
                isNumeric
                pattern="##########"
                isRequired
            />
            <MinorSelect
                control={control}
                name="gender"
                label="جنسیت"
                items={[
                    {
                        key: gendersEnum.male,
                        label: "مرد",
                    },
                    {
                        key: gendersEnum.female,
                        label: "زن",
                    },
                    {
                        key: gendersEnum.others,
                        label: "سایر",
                    },
                    {
                        key: gendersEnum.unspecific,
                        label: "نامشخص",
                    },
                ]}
            />
        </>
    )
}


const LegalIdentity = ({control}: { control: Control<any, any> }) => {
    return (
        <>
            <MinorInput
                control={control}
                name="legalName"
                label="نام شرکت"
                className="col-span-full"
                isRequired
            />
            <MinorInput
                control={control}
                name="tradeMark"
                label="نام تجاری"
                isRequired
            />
            <MinorInput
                control={control}
                name="registrationNumber"
                label="شماره ثبت"
                isNumeric
                pattern="######"
                isRequired
            />
            <MinorInput
                control={control}
                name="economicCode"
                label="کد اقتصادی"
                isNumeric
                pattern="############"
                isRequired
            />
            <MinorInput
                control={control}
                name="nationalCode"
                label="شناسه ملی"
                isNumeric
                pattern="###########"
                isRequired
            />
        </>
    )
}