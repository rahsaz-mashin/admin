import {Metadata} from "next";
import React from "react";

export const metadata: Metadata = {
    icons: {
        icon: "/favicon.ico",
    },
};


export default function Layout({children, params: {locale}}: { children: React.ReactNode, params: {locale: string} }) {
    return (
        <main className="flex w-full min-h-screen flex-col h-full bg-gradient-to-b from-[#FFD4A5] to-[#FF921F]">
            <nav className="w-32 fixed h-full">
                menu
            </nav>
            <aside className="flex-1 flex flex-col md:pr-32 h-full">
                <header className="h-20 w-full flex items-center">
                    header
                </header>
                <section className="flex-1 bg-purple-50 m-3 p-2 rounded-3xl shadow-2xl mr-0">
                    content
                    {children}
                </section>
                <footer className="h-16 flex items-center">
                    footer
                </footer>
            </aside>
        </main>
    );
}
