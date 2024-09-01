import NextAuth from "next-auth";
import authConfig from "@/auth.config";
import {
    apiAuthPrefix,
    authRoutes,
    publicRoutes,
    identityPrefix,
    DEFAULT_LOGIN_ROUTE,
    IDENTITY_ROUTE,
    DEFAULT_ROUTE_AFTER_LOGIN,
} from "@/routes";

const {auth} = NextAuth(authConfig)


// @ts-ignore
export default auth(async function middleware(req) {
    const isLoggedIn = !!req.auth
    const haveIdentity = !!req.auth && !!req.auth.account.identity



    const {nextUrl} = req

    const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix)
    const isPublicRoute = publicRoutes.includes(nextUrl.pathname)
    const isAuthRoute = authRoutes.includes(nextUrl.pathname)
    const isIdentityRoute = identityPrefix.includes(nextUrl.pathname)



    if(isApiAuthRoute) {
        return null
    }

    if(isLoggedIn && !isIdentityRoute && !haveIdentity) {
        return Response.redirect(new URL(IDENTITY_ROUTE, nextUrl))
    }

    if(isAuthRoute) {
        if(isLoggedIn) {
            return Response.redirect(new URL(DEFAULT_ROUTE_AFTER_LOGIN, nextUrl))
        }
        if(nextUrl.pathname === "/gate") {
            return Response.redirect(new URL(DEFAULT_LOGIN_ROUTE, nextUrl))
        }
        return null
    }

    if(!isLoggedIn && !isPublicRoute) {
        return Response.redirect(new URL(DEFAULT_LOGIN_ROUTE, nextUrl))
    }

    return null
})


export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico, sitemap.xml, robots.txt (metadata files)
         * - manifest.json
         * - serviceWorker files
         */
        '/((?!api|_next/static|_next/image|icons|screenshots|favicon.ico|sitemap.xml|robots.txt|sw.js|manifest.json|workbox).*)',
    ],
}