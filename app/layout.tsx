import React from "react";
import "@/styles/globals.css";
import {Metadata, Viewport} from "next";
import {rootConfig} from "@/config/root";
import {IRANSansX} from "@/lib/font";
import {Providers} from "./providers";
import {InstallAppModal} from "@/stories/General/InstallAppModal/InstallAppModal";


export const metadata: Metadata = {
    title: {
        default: rootConfig.name,
        template: `${rootConfig.name} | %s`,
    },
    description: rootConfig.description,
    icons: {
        icon: "/favicon.ico",
    },
    manifest: "/manifest.json",
    appleWebApp: {
        capable: true,
        statusBarStyle: "default",
        title: rootConfig.name,
        // startUpImage: [],
    },
    formatDetection: {
        telephone: false,
    },
    openGraph: {
        type: "website",
        siteName: rootConfig.name,
        title: {
            default: rootConfig.name,
            template: `${rootConfig.name} | %s`,
        },
        description: rootConfig.description,
    },
    twitter: {
        card: "summary",
        title: {
            default: rootConfig.name,
            template: `${rootConfig.name} | %s`,
        },
        description: rootConfig.description,
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

export default function RootLayout({children, params: {locale}}: {
    children: React.ReactNode,
    params: { locale: string }
}) {
    return (
        <html lang="fa-IR" dir="rtl" suppressHydrationWarning>
        <body
            className={["min-h-screen bg-background overflow-hidden antialiased scroll-smooth", IRANSansX.className].join(" ")}
        >
        <Providers themeProps={{attribute: "class", defaultTheme: "light"}}>
            <main className="relative flex flex-col h-full w-full">
                {children}
            </main>
            <InstallAppModal/>
        </Providers>
        </body>
        </html>
    );
}