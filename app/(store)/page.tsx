import Link from "next/link";
import React from "react";


export default function Page() {
    return (
        <section className="font-bold text-red-500 flex gap-4">
            <Link href="/gate">
                Gate
            </Link>
            <br/>
            <Link href="/admin">
                Admin
            </Link>
            <br/>
            <Link href="/info">
                Info
            </Link>
        </section>
    );
}
