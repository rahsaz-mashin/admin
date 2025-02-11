import {NextAuthConfig} from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import {axiosServerCore} from "@/lib/axiosServerCore";
import {Account} from "@/interfaces/Account.interface";



export interface LoginByPhoneOtpFormType {
    phone: string;
    token: string;
}

export interface LoginByEmailOtpFormType {
    email: string;
    token: string;
}

interface Session {
    accessToken: string;
    account: Account;
}

interface User {
    accessToken: string;
    account: Account;
}

interface JWT {
    accessToken: string;
    account: Account;
}

export default {
    providers: [
        CredentialsProvider({
            type: "credentials",
            id: "phoneOtp",
            name: "",
            credentials: {
                phone: {label: "Phone", type: "text"},
                token: {label: "Token", type: "text"},
            },
            async authorize(credentials, req) {
                try {
                    const data = credentials as LoginByPhoneOtpFormType
                    const result = await axiosServerCore().post("/auth/loginByPhoneOtp", data)
                    return result as any
                } catch (e: any) {

                }
                return null
            }
        }),
        CredentialsProvider({
            type: "credentials",
            id: "emailOtp",
            name: "",
            credentials: {
                email: {label: "Email", type: "text"},
                token: {label: "Token", type: "text"},
            },
            async authorize(credentials, req) {
                try {
                    const data = credentials as LoginByEmailOtpFormType
                    const result = await axiosServerCore().post("/auth/loginByEmailOtp", data)
                    return result as any
                } catch (e: any) {

                }
                return null
            }
        })
    ],
    trustHost: true,
    callbacks: {
        async session({token, session}: {token: JWT, session: Session}) {
            const accessToken = token.accessToken as string


            // update account
            // try {
            //     const response = await axiosServerCoreWithAuth(accessToken).get("/auth/getMe")
            //     const account = response.data
            //     return {accessToken, account, user: {}} as Session
            // } catch (e) {}

            return {accessToken: token.accessToken, account: token.account, user: {}} as Session
        },
        async jwt({token, user}: {token: JWT, user: User}) {
            return ({...token, ...user})
        },
        async signIn({user, credentials}: {user: User, credentials: LoginByPhoneOtpFormType | LoginByEmailOtpFormType}) {
            const account = user.account
            if (account.isRestricted || !account.isActive) {
                return false
            } else if (!!(credentials as LoginByPhoneOtpFormType)?.phone && !!account?.phone?.isRestricted) {
                return false
            } else if (!!(credentials as LoginByEmailOtpFormType)?.email && !!account?.email?.isRestricted) {
                return false
            }
            return true
        },
    },
    session: {
        strategy: "jwt",
        maxAge: 365 * 24 * 60 * 60,
    },
    pages: {
        signIn: "/gate",
        signOut: '/gate/signOut',
        error: "/gate/error",
        verifyRequest: '/gate/verify',
        newUser: '/gate/new',
    },
} as any satisfies NextAuthConfig