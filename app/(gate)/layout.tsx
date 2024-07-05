import {Metadata} from "next";
import React from "react";
import {Cover} from "@/stories/RahsazGate/Cover";


export const metadata: Metadata = {
    title: "احراز هویت مرکزی",
};


export default function Layout({children}: { children: React.ReactNode }) {


    return (
        <main className="flex w-full min-h-screen overflow-hidden flex-col h-full bg-primary">

            <Cover/>

        </main>
    );
}
