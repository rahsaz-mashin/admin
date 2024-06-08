"use client"

import React from "react";
import {Logo} from "@/stories/General";
import {Input} from "@nextui-org/input";
import {Button} from "@nextui-org/react";
import {EditSharp} from "@mui/icons-material";
import {useRouter, useSearchParams} from "next/navigation";
import {SubmitHandler, useForm} from "react-hook-form";
import {z} from "zod";
import Link from "next/link";
import { PatternFormat } from "react-number-format";

export type VerifyLoginByPhoneOtpFormType = {
    phoneNumber: string;
    otp1: string;
    otp2: string;
    otp3: string;
    otp4: string;
    otp5: string;
};

export const VerifyLoginByPhoneOtpForm = () => {
    const router = useRouter()
    const searchParams = useSearchParams()

    const {
        register,
        handleSubmit,
        setError,
        reset,
        setFocus,
        formState: {errors, isLoading, isSubmitting, isValidating, isSubmitSuccessful}
    } = useForm<VerifyLoginByPhoneOtpFormType>();

    const onSubmit: SubmitHandler<VerifyLoginByPhoneOtpFormType> = async (_data) => {
        return new Promise((resolve, reject) => {
            // =====> validation & transformation <=====
            const shape = {
                phoneNumber: z.string().regex(/09[0-9]{2} [0-9]{3} [0-9]{4}/, "شماره اشتباهه").transform((val) => val.replaceAll(" ", "")),
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
            // router.push("/gate/phone?phoneNumber=" + data.phoneNumber)
            // setTimeout(() => {
            //     router.push("/gate/phone/verify?phoneNumber=" + data.phoneNumber)
            //     return resolve(true)
            // }, 5000)
        })
    }
    const {ref: phoneNumberFieldRef, ...phoneNumberField} = register("phoneNumber")
    const {ref: otp1FieldRef, ...otp1Field} = register("otp1")
    const {ref: otp2FieldRef, ...otp2Field} = register("otp2")
    const {ref: otp3FieldRef, ...otp3Field} = register("otp3")
    const {ref: otp4FieldRef, ...otp4Field} = register("otp4")
    const {ref: otp5FieldRef, ...otp5Field} = register("otp5")



    const onKeyUpOtp = (e: any, i: number) => {
        const value = e.target.value;
        const key = e.key.toLowerCase();
        if (key == "backspace" || key == "delete" && value === "") {
            switch (i) {
                case 1:
                    setFocus("otp1")
                    break;
                case 2:
                    setFocus("otp1")
                    break;
                case 3:
                    setFocus("otp2")
                    break;
                case 4:
                    setFocus("otp3")
                    break;
                case 5:
                    setFocus("otp4")
                    break;
            }
            return;
        }
        switch (i) {
            case 1:
                setFocus("otp2")
                break;
            case 2:
                setFocus("otp3")
                break;
            case 3:
                setFocus("otp4")
                break;
            case 4:
                setFocus("otp5")
                break;
            case 5:
                alert("ok ok")
                break;
        }
    }
    const onKeyDownOtp = (e: any, i: number) => {
        // const value = e.target.value;
        // const key = e.key.toLowerCase();
        //
        // console.log("down", value, key, i)
        //
        // if (key == "backspace" || key == "delete") {
        //     // target.value = "";
        //     // const prev = target.previousElementSibling;
        //     // if (prev) {
        //     //     prev.focus();
        //     // }
        //     return;
        // }
    }
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
                <Input
                    fullWidth
                    size="lg"
                    dir="ltr"
                    label=" "
                    labelPlacement="outside"
                    placeholder="09212728307"
                    color="primary"
                    variant="faded"
                    isReadOnly
                    value={searchParams.get("phoneNumber") || ""}
                    {...phoneNumberField}
                    ref={phoneNumberFieldRef}
                    isInvalid={!!errors.phoneNumber}
                    errorMessage={errors.phoneNumber?.message}
                    endContent={
                        <Button
                            color="secondary"
                            variant="light"
                            size="sm"
                            endContent={<EditSharp fontSize="small"/>}
                            className="text-secondary ms-2"
                            onClick={() => router.replace("/gate/phone?phoneNumber=" + searchParams.get("phoneNumber"))}
                        >
                            ویرایش
                        </Button>
                    }
                    type="tel"
                />
                <div className="flex gap-2" dir="ltr">
                    <PatternFormat
                        fullWidth
                        size="lg"
                        dir="ltr"
                        color="primary"
                        variant="faded"
                        classNames={{input: "text-center font-bold", inputWrapper: "w-12"}}
                        onKeyUp={(e: any) => onKeyUpOtp(e, 1)}
                        // onKeyDown={(e) => onKeyDownOtp(e, 1)}
                        maxLength={1}
                        type="tel"
                        {...{
                            format: "#",
                            allowEmptyFormatting: true,
                            mask: "",
                            customInput: Input,
                        }}
                        {...otp1Field}
                        getInputRef={otp1FieldRef}
                    />
                    <PatternFormat
                        fullWidth
                        size="lg"
                        dir="ltr"
                        color="primary"
                        variant="faded"
                        classNames={{input: "text-center font-bold", inputWrapper: "w-12"}}
                        onKeyUp={(e: any) => onKeyUpOtp(e, 2)}
                        // onKeyDown={(e) => onKeyDownOtp(e, 2)}
                        maxLength={1}
                        type="tel"
                        {...{
                            format: "#",
                            allowEmptyFormatting: true,
                            mask: "",
                            customInput: Input,
                        }}
                        {...otp2Field}
                        getInputRef={otp2FieldRef}
                    />
                    <PatternFormat
                        fullWidth
                        size="lg"
                        dir="ltr"
                        color="primary"
                        variant="faded"
                        classNames={{input: "text-center font-bold", inputWrapper: "w-12"}}
                        onKeyUp={(e: any) => onKeyUpOtp(e, 3)}
                        // onKeyDown={(e) => onKeyDownOtp(e, 3)}
                        maxLength={1}
                        type="tel"
                        {...{
                            format: "#",
                            allowEmptyFormatting: true,
                            mask: "",
                            customInput: Input,
                        }}
                        {...otp3Field}
                        getInputRef={otp3FieldRef}
                    />
                    <PatternFormat
                        fullWidth
                        size="lg"
                        dir="ltr"
                        color="primary"
                        variant="faded"
                        classNames={{input: "text-center font-bold", inputWrapper: "w-12"}}
                        onKeyUp={(e: any) => onKeyUpOtp(e, 4)}
                        // onKeyDown={(e) => onKeyDownOtp(e, 4)}
                        maxLength={1}
                        type="tel"
                        {...{
                            format: "#",
                            allowEmptyFormatting: true,
                            mask: "",
                            customInput: Input,
                        }}
                        {...otp4Field}
                        getInputRef={otp4FieldRef}
                    />
                    <PatternFormat
                        fullWidth
                        size="lg"
                        dir="ltr"
                        color="primary"
                        variant="faded"
                        classNames={{input: "text-center font-bold", inputWrapper: "w-12"}}
                        onKeyUp={(e: any) => onKeyUpOtp(e, 5)}
                        // onKeyDown={(e) => onKeyDownOtp(e, 5)}
                        maxLength={1}
                        type="tel"
                        {...{
                            format: "#",
                            allowEmptyFormatting: true,
                            mask: "",
                            customInput: Input,
                        }}
                        {...otp5Field}
                        getInputRef={otp5FieldRef}
                    />
                </div>
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
