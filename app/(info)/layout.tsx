import {Metadata} from "next";
import React from "react";

export const metadata: Metadata = {
    title: "درباره",
    icons: {
        icon: "/favicon.ico",
    },
};


export default function Layout({children}: { children: React.ReactNode }) {
    return (
        <section>
            لایوت اینفو
            {children}
        </section>
    );
}
