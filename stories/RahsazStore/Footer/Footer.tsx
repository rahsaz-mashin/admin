"use client"

import React from "react";
import {Button} from "@nextui-org/react";



export const Footer = () => {

    return (
        <>
            <footer className="h-16 items-center gap-2 hidden md:flex flex-col md:flex-row">
                <b className="text-white w-fit min-w-fit">صفحات مفید:</b>
                <div className="flex items-center gap-2 overflow-y-hidden flex-shrink-0">
                    <Button
                        radius="none"
                        size="md"
                        className="bg-black/20 text-white h-9"
                    >
                        درباره ما
                    </Button>
                    <Button
                        radius="none"
                        size="md"
                        className="bg-black/20 text-white h-9"
                    >
                        تماس با ما
                    </Button>
                    <Button
                        radius="none"
                        size="md"
                        className="bg-black/20 text-white h-9"
                    >
                        راهنمای خرید
                    </Button>
                    <Button
                        radius="none"
                        size="md"
                        className="bg-black/20 text-white h-9"
                    >
                        راهنمای خرید
                    </Button>
                    <Button
                        radius="none"
                        size="md"
                        className="bg-black/20 text-white h-9"
                    >
                        قوانین و مقررات
                    </Button>
                    <Button
                        radius="none"
                        size="md"
                        className="bg-black/20 text-white h-9"
                    >
                        سوالات متداول
                    </Button>
                    <Button
                        radius="none"
                        size="md"
                        className="bg-black/20 text-white h-9"
                    >
                        انتقادات و پیشنهادات
                    </Button>
                </div>
            </footer>
        </>
    );
};
