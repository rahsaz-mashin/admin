import {Metadata} from "next";
import React from "react";

export const metadata: Metadata = {
    title: "احراز هویت",
    icons: {
        icon: "/favicon.ico",
    },
};


export default function Layout({children}: { children: React.ReactNode }) {
    return (
        <section>
            لایوت گیت
            {children}
        </section>
    );
}
