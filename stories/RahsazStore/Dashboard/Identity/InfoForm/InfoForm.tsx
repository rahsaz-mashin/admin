"use client"

import React, {useEffect} from "react";
import {Card, CardBody, CardHeader} from "@nextui-org/card";
import {Button, CardFooter} from "@nextui-org/react";
import {Control, SubmitHandler, useForm, useWatch} from "react-hook-form";
import {gendersEnum, identityTypesEnum} from "@/interfaces/Identity.interface";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {cn} from "@nextui-org/theme";
import {MinorInput} from "@/stories/General/MinorInput";
import {MinorSelect} from "@/stories/General/MinorSelect";
import {MinorRadioBox} from "@/stories/General/MinorRadioBox";
import {Session} from "next-auth";
import {CalendarDate, getLocalTimeZone, startOfYear, today} from "@internationalized/date";
import {axiosCoreWithAuth} from "@/lib/axios";


export type DashboardIdentityInfoFormProps = {
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

export const DashboardIdentityInfoForm = (props: DashboardIdentityInfoFormProps) => {

    const {session} = props

    const initialData: () => Promise<IdentityInfoFormType> = async () => {
        const identity = session.account?.identity

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


    return (
        <>
            <section className="h-full select-none bg-primary transition duration-500 hover:bg-primary-50 hover:text-primary cursor-pointer flex flex-col justify-center items-center gap-3 text-white">
                <h1 className="font-black text-2xl">شخصیت حقوقی</h1>
                <h6 className="font-medium text-base">
                    در صورتی که نماینده یا مالک شرکت هستید، اینجا کلیک کنید.
                </h6>
            </section>
            <section className="h-full bg-white">
                <div className="h-full p-4">
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
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 w-full">
                                {/*<MinorRadioBox*/}
                                {/*    control={control}*/}
                                {/*    name="identityType"*/}
                                {/*    label="نوع هویت"*/}
                                {/*    isRequired*/}
                                {/*    orientation="horizontal"*/}
                                {/*    items={[*/}
                                {/*        {*/}
                                {/*            key: identityTypesEnum.real,*/}
                                {/*            label: "حقیقی"*/}
                                {/*        },*/}
                                {/*        {*/}
                                {/*            key: identityTypesEnum.legal,*/}
                                {/*            label: "حقوقی"*/}
                                {/*        },*/}
                                {/*    ]}*/}
                                {/*    description={(*/}
                                {/*        <>*/}
                                {/*            در صورتی که نماینده یا مالک شرکت هستید، گزینه*/}
                                {/*            <b className="text-primary"> حقوقی </b>*/}
                                {/*            و در غیر اینصورت گزینه*/}
                                {/*            <b className="text-primary"> حقیقی </b>*/}
                                {/*            را انتخاب کنید.*/}
                                {/*        </>*/}
                                {/*    )}*/}
                                {/*    className="col-span-full"*/}
                                {/*    itemClassNames={{*/}
                                {/*        base: cn(*/}
                                {/*            "inline-flex m-0 bg-content2 items-center justify-between",*/}
                                {/*            "flex-row-reverse max-w-full flex-1 cursor-pointer rounded-xl gap-4 p-4 border-2 border-transparent",*/}
                                {/*            "hover:not[data-[selected=true]]:bg-content3",*/}
                                {/*            "data-[selected=true]:bg-primary/30",*/}
                                {/*        ),*/}
                                {/*    }}*/}
                                {/*/>*/}
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
            </section>
        </>
    );
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