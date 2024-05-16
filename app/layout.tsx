import "@/styles/globals.css";
import {Metadata, Viewport} from "next";
import {rootConfig} from "@/config/root";
import {IRANSansX} from "@/lib/font";
import {Providers} from "./providers";


import React from "react";

export const metadata: Metadata = {
    title: {
        default: rootConfig.name,
        template: `${rootConfig.name} | %s`,
    },
    description: rootConfig.description,
    icons: {
        icon: "/favicon.ico",
    },
    manifest: "/manifest.json"
};

export const viewport: Viewport = {
    themeColor: [
        {media: "(prefers-color-scheme: light)", color: "white"},
        {media: "(prefers-color-scheme: dark)", color: "black"},
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
        <html lang="fa-IR" dir="rtl" suppressHydrationWarning>
            <body
                className={["min-h-screen bg-background overflow-hidden antialiased scroll-smooth", IRANSansX.className].join(" ")}>
                <Providers themeProps={{attribute: "class", defaultTheme: "light"}}>
                    <main className="relative flex flex-col h-full w-full">
                        {children}
                    </main>
                </Providers>
            </body>
        </html>
    );
}
