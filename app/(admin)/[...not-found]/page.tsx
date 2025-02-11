"use client"


import {NotFoundIcon} from "@/stories/LottieIcons";
import {Button} from "@heroui/react";
import {Home} from "@mui/icons-material";
import React from "react";
import {useRouter} from "next-nprogress-bar";

export default function Page() {
    const router = useRouter()
    return (
        <div className="w-full h-full flex-col flex gap-4 px-4 justify-center items-center overflow-x-hidden">
            <div className="h-20 w-full min-h-20"/>
            <div className="w-64 h-64">
                <NotFoundIcon autoplay loop/>
            </div>
            <h1 className="font-bold text-2xl text-gray-600">این صفحه پیدا نشد 😓</h1>
            <span className="text-center">ممکن است آدرس را اشتباه وارد کرده باشید و یا حذف یا تغییر کرده باشد.</span>
            <div className="flex gap-3 flex-col xs:flex-row">
                <Button color="primary" onPress={() => router.push("/admin")}>
                    <Home/>
                    صفحه اصلی پنل مدیریت
                </Button>
            </div>
            <div className="h-20 w-full min-h-20"/>
        </div>
    )
}