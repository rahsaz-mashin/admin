"use client"

import React from "react";
import {Button} from "@nextui-org/react";
import {FooterShortcut} from "@/interfaces/FooterShortcut.interface";
import Link from "next/link";




export type FooterBoxProps = {
    items: FooterShortcut[];
}
export const Footer = (props: FooterBoxProps) => {

    const {items} = props

    return (
        <>
            <footer className="h-16 items-center gap-2 hidden md:flex flex-col md:flex-row">
                <b className="text-white w-fit min-w-fit">صفحات مفید:</b>
                <div className="flex items-center gap-2 overflow-y-hidden flex-shrink-0">
                    {items.map((v, i) => {
                        return (
                            <Button
                                key={v.id}
                                as={Link}
                                href={v.url}
                                radius="none"
                                size="md"
                                className="bg-black/20 text-white h-9"
                            >
                                {v.title}
                            </Button>
                        )
                    })}
                </div>
            </footer>
        </>
    );
};
