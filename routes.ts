/**
 * An array of routes that are accessible to the public
 * These routes do not require authentication
 * @type {string[]}
 */
export const publicRoutes = [
    "/",
    "/product"
]


/**
 * An array of routes that are used for authentication
 * These routes will redirect logged-in users to dashboard
 * @type {string[]}
 */
export const authRoutes = [
    "/gate",
    "/gate/phone",
    "/gate/phone/verify",
    "/gate/email",
    "/gate/email/verify",
]





/**
 * The prefix for API authentication routes
 * Routes start with this prefix are used for API authentication purposes
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth"

export const adminPrefix = "/admin"

export const identityPrefix = "/dashboard/identity"


export const IDENTITY_ROUTE = "/dashboard/identity"
export const DEFAULT_ROUTE_AFTER_LOGIN = "/"
export const DEFAULT_LOGIN_ROUTE = "/gate/phone"



