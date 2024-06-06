"use client"

import React, {FormEvent} from "react";
import {Logo} from "@/stories/General";
import {Input} from "@nextui-org/input";
import {Button} from "@nextui-org/react";
import {SubmitHandler, useForm} from "react-hook-form";
import {PatternFormat} from 'react-number-format';


export type LoginByPhoneOtpFormType = {
    phoneNumber: string,
};


export const LoginByPhoneOtpForm = () => {
    const {register, handleSubmit, watch, formState: {errors}} = useForm<LoginByPhoneOtpFormType>();
    const onSubmit: SubmitHandler<LoginByPhoneOtpFormType> = (data) => {
        console.log(data)
        // const response = await fetch('/api/submit', {
        //     method: 'POST',
        //     body: formData,
        // })
        //
        // // Handle response if necessary
        // const data = await response.json()
        // ...
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}
                  className="flex w-full flex-col gap-3 justify-center items-center h-full">
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
                    labelPlacement="outside"
                    placeholder="09212728307"
                    {...register("phoneNumber")}
                    {...{
                        format: "09## ### ####",
                        allowEmptyFormatting: true,
                        mask: " ",
                        customInput: Input
                    }}
                />
                <Button
                    fullWidth
                    size="lg"
                    variant="shadow"
                    color="primary"
                    type="submit"
                >
                    ادامه
                </Button>
                <Button
                    fullWidth
                    size="md"
                    variant="light"
                    color="secondary"
                    className="font-bold"
                >
                    ورود با ایمیل
                </Button>
            </form>
        </>
    );
};
