import { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google";

export interface LoginByPhoneOtpForm {
    phone: string;
    token: string;
}

export interface LoginByEmailOtpForm {
    email: string;
    token: string;
}

export const nextAuthOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            id: "phoneOtp",
            name: "",
            credentials: {
                phone: { label: "Phone", type: "text" },
                token: { label: "Token", type: "text" }
            },
            async authorize(credentials, req) {
                const data = credentials as LoginByPhoneOtpForm
                console.log(data, "ggggg")
                // const response = await axiosSSR.post("/auth/loginByPhoneOtp", data)
                // if (response.status >= 400) return null
                // return response.data
                return null
            }
        }),
        CredentialsProvider({
            id: "emailOtp",
            name: "",
            credentials: {
                email: { label: "Email", type: "text" },
                token: { label: "Token", type: "text" }
            },
            async authorize(credentials, req) {
                const data = credentials as LoginByEmailOtpForm
                // const response = await axiosSSR.post("/auth/loginByPhoneOtp", data)
                // if (response.status >= 400) return null
                // return response.data
                return null
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
        }),
    ],
    session: {
        strategy: "jwt",
        maxAge: (365 * 24 * 60 * 60),
    },
    pages: {
        signIn: "/auth",
        error: "/auth/error"
    },
    callbacks: {
        async jwt({ token, user, trigger, session }: any) {
            if (trigger === "update" && session?.user) {
                // const t = token as Session
                // token.user = { ...token.email, ...session.user }
            }
            return ({ ...token, ...user })
        },
        // async session({ session, token, user }: any) {
        //     const t = token as any as Session
        //     session.user = t.user;
        //     session.accessToken = t.accessToken;
        //     return session;
        // },
    }
}
