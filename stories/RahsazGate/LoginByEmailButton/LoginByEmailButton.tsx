"use client"

import React from "react";
import {Button} from "@nextui-org/react";
import {toast} from "@/lib/toast";


export const LoginByEmailButton = ({isDisabled}: { isDisabled: boolean }) => {

    const onByEmail = () => {
        toast.info("در دست توسعه...")
        // router.push("/gate/email")
    }

    return (
        <Button
            fullWidth
            size="md"
            variant="light"
            color="secondary"
            className="font-bold"
            isDisabled={isDisabled}
            onPress={onByEmail}
        >
            ورود با ایمیل
        </Button>
    )
}
