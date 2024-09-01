"use server";

import {signIn, signOut} from "@/auth";
import {AuthError} from "next-auth";

export const authSignIn = async (data: any) => {
    try {
        await signIn("phoneOtp", {...data, redirect: true, redirectTo: "/"});
    } catch (e) {
        if (e instanceof AuthError) {
            switch (e.type) {
                case "CredentialsSignin":
                    return {ok: false, code: "INVALID_OTP", error: "کد یکبار مصرف اشتباه است"}
                case "AccessDenied":
                    return {ok: false, code: "AccessDenied", error: "دسترسی شما محدود شده است"}
                default:
                    return {ok: false, code: "UNKNOWN_ERROR", error: "خطایی رخ داد"}
            }
        }
        throw e
    }
}


export const authSignOut = async () => {
    "use server"
    await signOut()
}