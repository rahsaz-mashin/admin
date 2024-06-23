"use client"

import React, {useState} from "react";
import {Logo} from "@/stories/General";
import {Input} from "@nextui-org/input";
import {Button} from "@nextui-org/react";
import {EditSharp} from "@mui/icons-material";
import {useRouter, useSearchParams} from "next/navigation";
import {SubmitHandler, useForm} from "react-hook-form";
import {z} from "zod";
import Link from "next/link";
import {PatternFormat} from "react-number-format";

export type VerifyLoginByPhoneOtpFormType = {
    phoneNumber: string;
    otp1: string;
    otp2: string;
    otp3: string;
    otp4: string;
    otp5: string;
    token: string;
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
        setValue,
        getValues,
        formState: {errors, isLoading, isSubmitting, isValidating, isSubmitSuccessful}
    } = useForm<VerifyLoginByPhoneOtpFormType>();

    const [token, setToken] = useState("*****")
    const onSubmit: SubmitHandler<VerifyLoginByPhoneOtpFormType> = async (_data) => {
        return new Promise((resolve, reject) => {
            // =====> validation & transformation <=====
            const shape = {
                phoneNumber: z.string().regex(/09[0-9]{2}[0-9]{3}[0-9]{4}/, "شماره وارد شده معتبر نیست"),
                token: z.string().regex(/[0-9]{5}/, "کد تایید نادرست است")
            }
            _data.token = token
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
            setTimeout(() => {
                // router.push("/gate/phone/verify?phoneNumber=" + data.phoneNumber)
                return resolve(true)
            }, 5000)
        })
    }
    const {ref: phoneNumberFieldRef, ...phoneNumberField} = register("phoneNumber")
    const {ref: otp1FieldRef, ...otp1Field} = register("otp1")
    const {ref: otp2FieldRef, ...otp2Field} = register("otp2")
    const {ref: otp3FieldRef, ...otp3Field} = register("otp3")
    const {ref: otp4FieldRef, ...otp4Field} = register("otp4")
    const {ref: otp5FieldRef, ...otp5Field} = register("otp5")
    const {ref: tokenFieldRef, ...tokenField} = register("token")


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
                setValue("otp1", value)
                setFocus("otp2")
                break;
            case 2:
                setValue("otp2", value)
                setFocus("otp3")
                break;
            case 3:
                setValue("otp3", value)
                setFocus("otp4")
                break;
            case 4:
                setValue("otp4", value)
                setFocus("otp5")
                break;
            case 5:
                setValue("otp5", value)
                handleSubmit(onSubmit)()
                break;
        }
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
                    isDisabled={isSubmitSuccessful}
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
                            className="text-secondary ms-2 min-w-fit font-bold p-1"
                            onClick={() => router.replace("/gate/phone?phoneNumber=" + searchParams.get("phoneNumber"))}
                        >
                            ویرایش
                        </Button>
                    }
                    type="tel"
                />
                <div className="flex flex-col w-full">
                    <div className="flex gap-2 items-center" dir="ltr">
                        <PatternFormat
                            fullWidth
                            size="lg"
                            dir="ltr"
                            color="primary"
                            variant="faded"
                            isDisabled={isSubmitSuccessful}
                            isReadOnly={isSubmitting}
                            className="items-center"
                            classNames={{input: "text-center font-bold", inputWrapper: "w-12"}}
                            onKeyUp={(e: any) => onKeyUpOtp(e, 1)}
                            maxLength={1}
                            type="tel"
                            {...{
                                format: "#",
                                allowEmptyFormatting: true,
                                mask: "",
                                customInput: Input,
                            }}
                            {...otp1Field}
                            onChange={(e) => {
                                otp1Field.onChange(e)
                                const t = token.split("")
                                t[0] = e.target.value
                                setToken(t.join(""))
                                tokenField.onChange({...e, target: {...e.target, value: t.join("")}})
                            }}
                            getInputRef={otp1FieldRef}
                        />
                        <PatternFormat
                            fullWidth
                            size="lg"
                            dir="ltr"
                            color="primary"
                            variant="faded"
                            isDisabled={isSubmitSuccessful}
                            isReadOnly={isSubmitting}
                            className="items-center"
                            classNames={{input: "text-center font-bold", inputWrapper: "w-12"}}
                            onKeyUp={(e: any) => onKeyUpOtp(e, 2)}
                            maxLength={1}
                            type="tel"
                            {...{
                                format: "#",
                                allowEmptyFormatting: true,
                                mask: "",
                                customInput: Input,
                            }}
                            {...otp2Field}
                            onChange={(e) => {
                                otp2Field.onChange(e)
                                const t = token.split("")
                                t[1] = e.target.value
                                setToken(t.join(""))
                                setValue("token", t.join(""))
                            }}
                            getInputRef={otp2FieldRef}
                        />
                        <PatternFormat
                            fullWidth
                            size="lg"
                            dir="ltr"
                            color="primary"
                            variant="faded"
                            isDisabled={isSubmitSuccessful}
                            isReadOnly={isSubmitting}
                            className="items-center"
                            classNames={{input: "text-center font-bold", inputWrapper: "w-12"}}
                            onKeyUp={(e: any) => onKeyUpOtp(e, 3)}
                            maxLength={1}
                            type="tel"
                            {...{
                                format: "#",
                                allowEmptyFormatting: true,
                                mask: "",
                                customInput: Input,
                            }}
                            {...otp3Field}
                            onChange={(e) => {
                                otp3Field.onChange(e)
                                const t = token.split("")
                                t[2] = e.target.value
                                setToken(t.join(""))
                                setValue("token", t.join(""))
                            }}
                            getInputRef={otp3FieldRef}
                        />
                        <PatternFormat
                            fullWidth
                            size="lg"
                            dir="ltr"
                            color="primary"
                            variant="faded"
                            isDisabled={isSubmitSuccessful}
                            isReadOnly={isSubmitting}
                            className="items-center"
                            classNames={{input: "text-center font-bold", inputWrapper: "w-12"}}
                            onKeyUp={(e: any) => onKeyUpOtp(e, 4)}
                            maxLength={1}
                            type="tel"
                            {...{
                                format: "#",
                                allowEmptyFormatting: true,
                                mask: "",
                                customInput: Input,
                            }}
                            {...otp4Field}
                            onChange={(e) => {
                                otp4Field.onChange(e)
                                const t = token.split("")
                                t[3] = e.target.value
                                setToken(t.join(""))
                                setValue("token", t.join(""))
                            }}
                            getInputRef={otp4FieldRef}
                        />
                        <PatternFormat
                            fullWidth
                            size="lg"
                            dir="ltr"
                            color="primary"
                            variant="faded"
                            isDisabled={isSubmitSuccessful}
                            isReadOnly={isSubmitting}
                            className="items-center"
                            classNames={{input: "text-center font-bold", inputWrapper: "w-12"}}
                            onKeyUp={(e: any) => onKeyUpOtp(e, 5)}
                            maxLength={1}
                            type="tel"
                            {...{
                                format: "#",
                                allowEmptyFormatting: true,
                                mask: "",
                                customInput: Input,
                            }}
                            {...otp5Field}
                            onChange={(e) => {
                                otp5Field.onChange(e)
                                const t = token.split("")
                                t[4] = e.target.value
                                setToken(t.join(""))
                                setValue("token", t.join(""))
                            }}
                            getInputRef={otp5FieldRef}
                        />
                    </div>
                    {!!errors.token &&
                        <span className="text-danger-500 font-light text-sm">{errors.token?.message}</span>}
                    <div className="h-2"/>
                    <Button
                        color="secondary"
                        variant="light"
                        size="md"
                        className="text-secondary"
                        isDisabled={isSubmitSuccessful}
                        // onClick={() => router.replace("/gate/phone?phoneNumber=" + searchParams.get("phoneNumber"))}
                    >
                        ارسال مجدد کد (45)
                    </Button>
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
