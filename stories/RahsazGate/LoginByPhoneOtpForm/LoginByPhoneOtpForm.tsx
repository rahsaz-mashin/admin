"use client"

import React, {useEffect, useState} from "react";
import {Logo} from "@/stories/General";
import {Input} from "@nextui-org/input";
import {Button} from "@nextui-org/react";
import {SubmitHandler, useForm} from "react-hook-form";
import {useRouter, useSearchParams} from "next/navigation";
import {PatternFormat} from "react-number-format";
import {z} from 'zod'
import {toast} from "@/lib/toast";
import {axiosNoAuth} from "@/lib/axios";
import {LoginByEmailButton} from "@/stories/RahsazGate/LoginByEmailButton";

export type LoginByPhoneOtpFormType = {
    phoneNumber: string;
};

export const LoginByPhoneOtpForm = () => {
    const router = useRouter()
    const searchParams = useSearchParams()


    const initialValues = {
        phoneNumber: searchParams.get("phoneNumber")?.substring(2) || ""
    }



    // =========================================================================================================================> initial form
    const {
        register,
        handleSubmit,
        setError,
        setValue,
        reset,
        formState: {errors, isLoading, isSubmitting, isValidating, isSubmitSuccessful}
    } = useForm<LoginByPhoneOtpFormType>();



    // =========================================================================================================================> initial inputs
    const {ref: phoneNumberFieldRef, ...phoneNumberField} = register("phoneNumber")






    // =========================================================================================================================> submit
    const onSubmit: SubmitHandler<LoginByPhoneOtpFormType> = async (_data) => {
        await submit(validate(_data))
    }

    const validate = (_data: LoginByPhoneOtpFormType) => {
        const shape = {
            phoneNumber: z.string().regex(/09[0-9]{2} [0-9]{3} [0-9]{4}/, "شماره وارد شده معتبر نیست").transform((val) => val.replaceAll(" ", "")),
        }
        const {success, data, error} = z.object(shape).safeParse(_data);
        if (!success) {
            const issues = error.issues
            for (let i = 0; i < issues.length; i++) {
                setError(issues[i].path.join(".") as any, {message: issues[i].message})
            }
            throw {
                field: issues[0].path.join("."),
                message: issues[0].message
            }
        }
        return data
    }


    const submit = async (data: any) => {
        router.replace("/gate/phone?phoneNumber=" + data.phoneNumber)
        try {
            const {data: result} = await axiosNoAuth.post('/auth/phoneOtp', {phone: data.phoneNumber})
            router.push("/gate/phone/verify?phoneNumber=" + `0${result.phone.replace("+98", "")}`)
            // result.sendAgainAt
            toast.success("کد یکبار مصرف ارسال شد")
            return
        } catch (e: any) {
            throw ""
        }
    }



    return (
        <>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex w-full flex-col gap-3 p-3 justify-between items-center h-80 min-h-fit"
            >
                <div className="flex w-full flex-col items-center gap-3">
                    <Logo size={48}/>
                </div>
                <div className="flex w-full flex-col items-center gap-3">
                    {/*// @ts-ignore*/}
                    <PatternFormat
                        fullWidth
                        size="lg"
                        dir="ltr"
                        color="default"
                        variant="flat"
                        label="شماره موبایل خود را وارد کنید"
                        placeholder="09212728307"
                        defaultValue={initialValues.phoneNumber}
                        labelPlacement="outside"
                        isDisabled={isSubmitSuccessful}
                        isReadOnly={isSubmitting}
                        {...phoneNumberField}
                        getInputRef={phoneNumberFieldRef}
                        isInvalid={!!errors.phoneNumber}
                        errorMessage={errors.phoneNumber?.message}
                        format="09## ### ####"
                        allowEmptyFormatting
                        mask=" "
                        customInput={Input}
                        type="tel"
                    />
                </div>
                <div className="flex w-full flex-col items-center gap-3">
                    <Button
                        fullWidth
                        size="lg"
                        variant="shadow"
                        color="primary"
                        type="submit"
                        isDisabled={isSubmitSuccessful}
                        isLoading={isSubmitting}
                    >
                        ادامه
                    </Button>
                   <LoginByEmailButton
                       isDisabled={isSubmitSuccessful || isSubmitting}
                   />
                </div>
            </form>
        </>
    );
};





