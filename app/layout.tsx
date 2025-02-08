import React from "react";
import "@/styles/globals.css";
import "keen-slider/keen-slider.min.css"
import {IRANSansX} from "@/lib/font";
import {Metadata, Viewport} from "next";
import {rootConfig} from "@/config/root";
import {Providers} from "./providers";
import {Logo} from "@/stories/General";


export const metadata: Metadata = {
    title: {
        default: rootConfig.name,
        template: `${rootConfig.name} | %s`,
    },
    description: rootConfig.description,
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

export default function RootLayout({children, params: {locale}}: {
    children: React.ReactNode,
    params: { locale: string }
}) {
    return (
        <html
            lang="fa-IR"
            dir="rtl"
            className="selection:bg-primary/25 selection:text-primary select-none h-full"
            suppressHydrationWarning
        >
        <body
            className={["min-h-screen bg-background overflow-hidden antialiased scroll-smooth h-full", IRANSansX.className].join(" ")}
        >
        <Providers themeProps={{attribute: "class", defaultTheme: "light"}}>
            <main className="relative flex flex-col h-full w-full print:hidden">
                {children}
            </main>
            <div className="hidden print:flex flex-col justify-center items-center h-screen w-screen">
                    <span className="text-center font-bold text-5xl text-primary">
                        سامانه راهساز ماشین
                    </span>
                <span className="text-lg">
                        چیزی برای پرینت پیدا نشد 🥺
                    </span>
                <div className="absolute opacity-25">
                    <Logo size={250}/>
                </div>
            </div>
        </Providers>
        </body>
        </html>
    );
}