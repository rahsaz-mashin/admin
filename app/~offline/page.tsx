"use client"

import React from "react";
import {ErrorIcon} from "@/stories/LottieIcons";
import {Button} from "@nextui-org/react";
import {Home, Refresh} from "@mui/icons-material";
import {useRouter} from "next/navigation";

export default function Page() {
    const router = useRouter()
    return (
        <div className="w-screen h-screen flex-col flex gap-4 px-4 justify-center items-center overflow-x-hidden">
            <div className="h-20 w-full min-h-20"/>
            <div className="w-64 h-64">
                <ErrorIcon autoplay loop/>
            </div>
            <h1 className="font-bold text-2xl text-gray-600">شما آفلاین هستید!</h1>
            <span className="text-center">لطفا اتصال خود را به اینترنت بررسی کرده و مجدد تلاش کنید!</span>
            <div className="flex gap-3 flex-col xs:flex-row">
                <Button onPress={() => router.refresh()}>
                    <Refresh/>
                    بررسی اتصال
                </Button>
                <Button color="primary" onPress={() => router.push("/")}>
                    <Home/>
                    صفحه اصلی
                </Button>
            </div>
            <div className="h-20 w-full min-h-20"/>
        </div>
    );
}
