import NextAuth from "next-auth";
import authConfig from "@/auth.config";
import {
    apiAuthPrefix,
    authRoutes,
    publicRoutes,
    identityPrefix,
    DEFAULT_LOGIN_ROUTE,
    IDENTITY_ROUTE,
    DEFAULT_ROUTE_AFTER_LOGIN, adminPrefix,
} from "@/routes";

const {auth} = NextAuth(authConfig)


// @ts-ignore
export default auth(async function middleware(req) {
    const isLoggedIn = !!req.auth

    const {nextUrl} = req

    if(!isLoggedIn) {
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
        '/((?!api|_next/static|_next/image|static|fallback|icons|screenshots|favicon.ico|logo.svg|light-logo.svg|dark-logo.svg|sitemap.xml|robots.txt|sw.js|swe-worker-development.js|manifest.json|workbox).*)',
    ],
}