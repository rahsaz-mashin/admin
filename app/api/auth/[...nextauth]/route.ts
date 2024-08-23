// import NextAuth, {NextAuthOptions, Session, User,} from "next-auth"
//
// import CredentialsProvider from "next-auth/providers/credentials"
// import {axiosSSRNoAuth} from "@/lib/axiosSSR";
//
// export interface LoginByPhoneOtpForm {
//     phone: string;
//     token: string;
// }
//
// export interface LoginByEmailOtpForm {
//     email: string;
//     token: string;
// }
//
//
// export const authOptions: NextAuthOptions = {
//     providers: [
//         CredentialsProvider({
//             id: "phoneOtp",
//             name: "",
//             credentials: {
//                 phone: {label: "Phone", type: "text"},
//                 token: {label: "Token", type: "text"}
//             },
//             async authorize(credentials, req) {
//                 try {
//                     const data = credentials as LoginByPhoneOtpForm
//                     const response = await axiosSSRNoAuth.post("/auth/loginByPhoneOtp", data)
//                     return response.data
//                 } catch (e: any) {
//                     throw e.response.data
//                 }
//             }
//         })
//     ],
//     session: {
//         strategy: "jwt",
//         maxAge: 365 * 24 * 60 * 60,
//     },
//     pages: {
//         signIn: "/gate",
//         signOut: '/gate/signOut',
//         error: "/gate/error",
//         verifyRequest: '/gate/verify',
//         newUser: '/gate/new',
//     },
//     callbacks: {
//         async signIn({user, account, profile, email, credentials}) {
//             // user: response from authorize
//             // account: provider and ...
//
//
//             // console.log(user, account, profile, email, credentials, "^^^^^^^^^^^^")
//             return true
//             // const isAllowedToSignIn = true
//             // if (isAllowedToSignIn) {
//             //     return true
//             // } else {
//             //     // Return false to display a default error message
//             //     return false
//             //     // Or you can return a URL to redirect to:
//             //     // return '/unauthorized'
//             // }
//         },
//         async jwt({token, user, account, profile, trigger, session}: any) {
//             console.log("JWT", token, user, account, profile, trigger, session, "JWT")
//             if (trigger === "signIn" && user) {
//                 token.accessToken = user.accessToken
//                 token.account = user.account
//             }
//             return token
//         },
//         async session({ session, token, user }) {
//             console.log(session, token, user)
//             // Send properties to the client, like an access_token and user id from a provider.
//
//             console.log(session, "sessionsessionsessionsession")
//
//             session.accessToken = token.accessToken as string
//             session.account.id = token.id as number
//
//             return session
//         },
//     }
// }
// const handler = NextAuth(authOptions)
// export {handler as GET, handler as POST}
//
// // export default handler
//
//
//
