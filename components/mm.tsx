"use server"

import {Button} from "@nextui-org/react";
import {authSignOut} from "@/lib/auth.action";
import {signOut} from "@/auth";

export default async function LogOutBut() {
    return (
        // <form action={() => {
        //     authSignOut()
        // }}
        // >
            <Button
                type="submit"
            >
                خرووووووووج
            </Button>
        // </form>
    )
}