import type {Metadata, Viewport} from "next";
import "./globals.css";
import {Providers} from "@/app/providers";
import {IRANSansX} from "@/lib/font";
import React from "react";

export const metadata: Metadata = {
    title: {
        default: "راهساز ادمین",
        template: `راهساز ادمین | %s`,
    },
    description: "پنل مدیریت راهساز ماشین",
    icons: {
        icon: "/favicon.ico",
    },
};

export const viewport: Viewport = {
    themeColor: [
        {media: "(prefers-color-scheme: light)", color: "#FF921F"},
        {media: "(prefers-color-scheme: dark)", color: "#FF921F"},
    ],
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
}

export default function RootLayout(props: Readonly<{ children: React.ReactNode; }>) {

    const {children} = props

    return (
        <html
            lang="fa-IR"
            dir="rtl"
            className="selection:bg-primary/25 selection:text-primary select-none h-full"
            suppressHydrationWarning
        >
            <body
                className={`"min-h-screen bg-background overflow-hidden antialiased scroll-smooth h-full" ${IRANSansX.className}`}
            >
                <Providers>
                    {children}
                </Providers>
            </body>
        </html>
    );
}
