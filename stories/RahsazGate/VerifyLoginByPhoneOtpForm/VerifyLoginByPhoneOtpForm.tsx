"use client"

import React, {useState} from "react";
import {Logo} from "@/stories/General";
import {Input} from "@nextui-org/input";
import {Button} from "@nextui-org/react";
import {useRouter, useSearchParams} from "next/navigation";
import {RefCallBack, SubmitHandler, useForm, UseFormSetFocus} from "react-hook-form";
import {z} from "zod";
import {PatternFormat} from "react-number-format";
import {RefreshIcon} from "@/stories/Icons";
import {Tooltip} from "@nextui-org/tooltip";
import {toast} from "@/lib/toast";
import {axiosNoAuth} from "@/lib/axios";
import {LoginByEmailButton} from "@/stories/RahsazGate/LoginByEmailButton";
import {signIn} from "next-auth/react";


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

    const initialValues = {
        phoneNumber: searchParams?.get("phoneNumber") || ""
    }
    const [phoneNumber, setPhoneNumber] = useState(initialValues.phoneNumber)


    // =========================================================================================================================> initial form
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


    // =========================================================================================================================> initial inputs
    const {ref: phoneNumberFieldRef, ...phoneNumberField} = register("phoneNumber")
    const {ref: otp1FieldRef, ...otp1Field} = register("otp1")
    const {ref: otp2FieldRef, ...otp2Field} = register("otp2")
    const {ref: otp3FieldRef, ...otp3Field} = register("otp3")
    const {ref: otp4FieldRef, ...otp4Field} = register("otp4")
    const {ref: tokenFieldRef, ...tokenField} = register("token")


    // =========================================================================================================================> submit
    const onSubmit: SubmitHandler<VerifyLoginByPhoneOtpFormType> = async (_data) => {
        await submit(validate(_data))
    }

    const validate = (_data: VerifyLoginByPhoneOtpFormType) => {
        if (!phoneNumber) return alert("Unknown error!")
        // =====> validation & transformation <=====
        const shape = {
            phoneNumber: z.string().regex(/09[0-9]{2}[0-9]{3}[0-9]{4}/, "شماره وارد شده معتبر نیست"),
            token: z.string().regex(/[0-9]{4}/, "کد تایید نادرست است")
        }
        _data.token = `${_data.otp1}${_data.otp2}${_data.otp3}${_data.otp4}`
        _data.phoneNumber = phoneNumber

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
        const result = await signIn("phoneOtp", { ...data, callbackUrl: "/", redirect: false });
        console.log(result)
        if(result?.ok) {
            toast.success("با موفقیت وارد شدید")
            // TODO::go to first url
            // router.push(result?.url || "/")
        } else  {
            const err = result?.error || "خطای ناشناخته"
            toast.error(err)
            setError("token", {message: err})
        }
    }


    const onEdit = () => {
        router.replace("/gate/phone")
    }


    return (
        <>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex w-full flex-col gap-3 p-3 justify-between items-center h-80 min-h-fit"
            >
                <div className="flex w-full flex-col items-center gap-3 py-3">
                    <Logo size={48}/>
                </div>
                <div className="flex w-full flex-col items-center gap-3">
                    <Button
                        fullWidth
                        color="default"
                        variant="solid"
                        size="lg"
                        className="px-1.5"
                        as="div"
                        onPress={onEdit}
                        isDisabled={isSubmitSuccessful || isSubmitting}
                        endContent={
                            <Button
                                color="secondary"
                                variant="light"
                                size="sm"
                                className="text-secondary ms-2 min-w-fit font-bold px-2"
                                onPress={onEdit}
                                isDisabled={isSubmitSuccessful || isSubmitting}
                            >
                                ویرایش
                            </Button>
                        }
                    >
                        <div className="w-full text-left">
                            {phoneNumber || ""}
                        </div>
                    </Button>
                    <div className="flex flex-col w-full overflow-y-hidden">
                        <div className="flex items-center justify-between" dir="ltr">
                            <ResendToken
                                phoneNumber={phoneNumber || ""}
                                isDisabled={isSubmitSuccessful || isSubmitting}
                            />
                            <TokenFields
                                isDisabled={isSubmitSuccessful}
                                isReadOnly={isSubmitting}

                                otp1Field={otp1Field}
                                otp2Field={otp2Field}
                                otp3Field={otp3Field}
                                otp4Field={otp4Field}

                                otp1FieldRef={otp1FieldRef}
                                otp2FieldRef={otp2FieldRef}
                                otp3FieldRef={otp3FieldRef}
                                otp4FieldRef={otp4FieldRef}

                                setFocus={setFocus}
                                done={handleSubmit(onSubmit)}
                            />
                        </div>
                        {!!errors.token && (
                            <span className="text-danger-500 font-light text-sm p-1">{errors.token?.message}</span>
                        )}
                    </div>
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


export const ResendToken = ({isDisabled, phoneNumber}: { isDisabled: boolean; phoneNumber: string }) => {

    const [isLoading, setLoading] = useState(false)

    const allowSendAgain = true
    const onSendAgain = async () => {
        if (!allowSendAgain) {
            toast.error("برای ارسال مجدد کد یکبار مصرف کمی صبر کنید")
            return
        }
        setLoading(true)
        try {
            const {data: result} = await axiosNoAuth.post('/auth/phoneOtp', {phone: phoneNumber})
            // result.sendAgainAt
            toast.success("کد یکبار مصرف ارسال شد")
            setLoading(false)
            return
        } catch (e: any) {
            setLoading(false)
            throw ""
        }
    }

    return (
        <Tooltip
            content="ارسال مجدد کد"
        >
            <Button
                color="secondary"
                variant="light"
                size="lg"
                isIconOnly
                isDisabled={isDisabled || !allowSendAgain}
                isLoading={isLoading}
                onPress={onSendAgain}
            >
                <RefreshIcon size={20}/>
            </Button>
        </Tooltip>
    )
}


export type TokenFieldsProps = {
    isDisabled: boolean;
    isReadOnly: boolean;

    otp1Field: any;
    otp1FieldRef: RefCallBack;

    otp2Field: any;
    otp2FieldRef: RefCallBack;

    otp3Field: any;
    otp3FieldRef: RefCallBack;

    otp4Field: any;
    otp4FieldRef: RefCallBack;

    setFocus: UseFormSetFocus<VerifyLoginByPhoneOtpFormType>;
    done: any;
}


export const TokenFields = (props: TokenFieldsProps) => {

    const {
        isDisabled,
        isReadOnly,
        otp1Field,
        otp1FieldRef,
        otp2Field,
        otp2FieldRef,
        otp3Field,
        otp3FieldRef,
        otp4Field,
        otp4FieldRef,
        setFocus,
        done
    } = props

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
                done()
                break;
        }
    }


    return (
        <>
            {/*// @ts-ignore*/}
            <PatternFormat
                size="lg"
                dir="ltr"
                color="default"
                variant="flat"
                isDisabled={isDisabled}
                isReadOnly={isReadOnly}
                className="items-center w-12"
                classNames={{input: "text-center font-bold"}}
                onKeyUp={(e: any) => onKeyUpOtp(e, 1)}
                type="tel"
                format="#"
                allowEmptyFormatting
                mask=" "
                customInput={Input}
                {...otp1Field}
                getInputRef={otp1FieldRef}
            />
            <PatternFormat
                size="lg"
                dir="ltr"
                color="default"
                variant="flat"
                isDisabled={isDisabled}
                isReadOnly={isReadOnly}
                className="items-center w-12"
                classNames={{input: "text-center font-bold"}}
                onKeyUp={(e: any) => onKeyUpOtp(e, 2)}
                type="tel"
                format="#"
                allowEmptyFormatting
                mask=" "
                customInput={Input}
                {...otp2Field}
                getInputRef={otp2FieldRef}
            />
            <PatternFormat
                fullWidth
                size="lg"
                dir="ltr"
                color="default"
                variant="flat"
                isDisabled={isDisabled}
                isReadOnly={isReadOnly}
                className="items-center w-12"
                classNames={{input: "text-center font-bold"}}
                onKeyUp={(e: any) => onKeyUpOtp(e, 3)}
                type="tel"
                format="#"
                allowEmptyFormatting
                mask=" "
                customInput={Input}
                {...otp3Field}
                getInputRef={otp3FieldRef}
            />
            <PatternFormat
                fullWidth
                size="lg"
                dir="ltr"
                color="default"
                variant="flat"
                isDisabled={isDisabled}
                isReadOnly={isReadOnly}
                className="items-center w-12"
                classNames={{input: "text-center font-bold"}}
                onKeyUp={(e: any) => onKeyUpOtp(e, 4)}
                type="tel"
                format="#"
                allowEmptyFormatting
                mask=" "
                customInput={Input}
                {...otp4Field}
                getInputRef={otp4FieldRef}
            />
        </>
    )
}