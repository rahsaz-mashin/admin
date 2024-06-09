"use client"

import React from "react";
import {Logo} from "@/stories/General";
import {Input} from "@nextui-org/input";
import {Button} from "@nextui-org/react";
import {SubmitHandler, useForm} from "react-hook-form";
import {useRouter, useSearchParams} from "next/navigation";
import {PatternFormat} from "react-number-format";
import {z} from 'zod'

export type LoginByPhoneOtpFormType = {
    phoneNumber: string;
};

export const LoginByPhoneOtpForm = () => {
    const router = useRouter()
    const searchParams = useSearchParams()

    const {
        register,
        handleSubmit,
        setError,
        reset,
        formState: {errors, isLoading, isSubmitting, isValidating, isSubmitSuccessful}
    } = useForm<LoginByPhoneOtpFormType>();

    const onSubmit: SubmitHandler<LoginByPhoneOtpFormType> = async (_data) => {
        return new Promise((resolve, reject) => {
            // =====> validation & transformation <=====
            const shape = {
                phoneNumber: z.string().regex(/09[0-9]{2} [0-9]{3} [0-9]{4}/, "شماره وارد شده معتبر نیست").transform((val) => val.replaceAll(" ", "")),
            }
            const {success, data, error} = z.object(shape).safeParse(_data);
            if (!success) {
                const issues = error.issues
                for (let i = 0; i < issues.length; i++) {
                    setError(issues[i].path.join(".") as any, {message: issues[i].message})
                }
                return reject()
            }

            // =====> send request <=====
            router.push("/gate/phone?phoneNumber=" + data.phoneNumber)
            setTimeout(() => {
                router.push("/gate/phone/verify?phoneNumber=" + data.phoneNumber)
                return resolve(true)
            }, 5000)
        })
    }
    const {ref: phoneNumberFieldRef, ...phoneNumberField} = register("phoneNumber")


    return (
        <>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex w-full flex-col gap-3 justify-center items-center h-full"
            >
                <div className="flex w-full flex-col items-center gap-3 py-8">
                    <Logo size={52}/>
                    <h1 className="font-bold text-primary">
                        احراز هویت مرکزی سامانه راهساز ماشین
                    </h1>
                </div>
                <PatternFormat
                    fullWidth
                    size="lg"
                    dir="ltr"
                    label="شماره موبایل خود را وارد کنید"
                    placeholder="09212728307"
                    labelPlacement="outside"
                    isDisabled={isSubmitSuccessful}
                    isReadOnly={isSubmitting}
                    value={searchParams.get("phoneNumber")?.substring(2)}
                    {...phoneNumberField}
                    getInputRef={phoneNumberFieldRef}
                    isInvalid={!!errors.phoneNumber}
                    errorMessage={errors.phoneNumber?.message}
                    {...{
                        format: "09## ### ####",
                        allowEmptyFormatting: true,
                        mask: " ",
                        customInput: Input,
                    }}
                    type="tel"
                />
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
                <Button
                    fullWidth
                    size="md"
                    variant="light"
                    color="secondary"
                    className="font-bold"
                    isDisabled={isSubmitSuccessful || isSubmitting}
                >
                    ورود با ایمیل
                </Button>
            </form>
        </>
    );
};
