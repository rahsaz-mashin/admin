import {NextAuthConfig, Session} from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import {axiosServerCore} from "@/lib/axiosServerCore";
import {Account} from "@/interfaces/Account.interface";


declare module "next-auth" {
    /**
     * Returned by `auth`, `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
     */
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

}

export interface LoginByPhoneOtpForm {
    phone: string;
    token: string;
}

export interface LoginByEmailOtpForm {
    email: string;
    token: string;
}

export default {
    providers: [
        CredentialsProvider({
            type: "credentials",
            id: "phoneOtp",
            name: "",
            credentials: {
                phoneNumber: {label: "Phone", type: "text"},
                token: {label: "Token", type: "text"},
            },
            async authorize(credentials, req) {
                try {
                    const data = credentials as LoginByPhoneOtpForm
                    return await axiosServerCore().post("/auth/loginByPhoneOtp", data)
                } catch (e: any) {
                    return null
                }
            }
        }),
    ],
    trustHost: true,
    callbacks: {
        async session({token, session, trigger}) {
            const accessToken = token.accessToken as string

            // update account
            // try {
            //     const response = await axiosServerCoreWithAuth(accessToken).get("/auth/getMe")
            //     const account = response.data
            //     return {accessToken, account, user: {}} as Session
            // } catch (e) {}

            return {accessToken: token.accessToken, account: token.account, user: {}} as Session
        },
        async jwt({token, user, trigger}) {
            return ({...token, ...user})
        },
        async signIn({user, credentials}) {
            const account = user.account
            if (account.isRestricted || !account.isActive) {
                return false
            } else if (!!credentials?.phoneNumber && !!account?.phone?.isRestricted) {
                return false
            } else if (!!credentials?.emailAddress && !!account?.email?.isRestricted) {
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
} satisfies NextAuthConfig