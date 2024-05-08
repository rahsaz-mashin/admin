import {Metadata} from "next";
import React from "react";

export const metadata: Metadata = {
    icons: {
        icon: "/favicon.ico",
    },
};


export default function Layout({children, params: {locale}}: { children: React.ReactNode, params: {locale: string} }) {
    return (
        <section>
            ++{locale}--
            لایوت استور
            {children}
        </section>
    );
}
