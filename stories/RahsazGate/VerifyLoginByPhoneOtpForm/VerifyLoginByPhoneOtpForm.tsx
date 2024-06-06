"use client"

import React from "react";
import {Logo} from "@/stories/General";
import {Input} from "@nextui-org/input";
import {Button} from "@nextui-org/react";
import {EditSharp} from "@mui/icons-material";


export const VerifyLoginByPhoneOtpForm = () => {
    return (
        <>
            <form className="flex w-full flex-col gap-3 justify-center items-center h-full">
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
                    endContent={
                        <Button
                            color="secondary"
                            variant="light"
                            size="sm"
                            endContent={<EditSharp fontSize={"small"}/>}
                            className="text-secondary ms-2"
                        >
                            ویرایش
                        </Button>
                    }
                />
                <div className="flex gap-2">
                    <Input
                        fullWidth
                        size="lg"
                        dir="ltr"
                    />
                    <Input
                        fullWidth
                        size="lg"
                        dir="ltr"
                    />
                    <Input
                        fullWidth
                        size="lg"
                        dir="ltr"
                    />
                    <Input
                        fullWidth
                        size="lg"
                        dir="ltr"
                    />
                    <Input
                        fullWidth
                        size="lg"
                        dir="ltr"
                    />
                </div>
                <Button
                    fullWidth
                    size="lg"
                    variant="shadow"
                    color="primary"
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
