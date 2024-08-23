"use client"

import {useSession} from "next-auth/react";

export default function Page() {

    const { data: session } = useSession();

    return (
        <div>
            <h1>Admin</h1>
            <pre>{JSON.stringify(session)}</pre>
        </div>
    );
}
