/** @type {import('next').NextConfig} */
const defaultRuntimeCaching = require("next-pwa/cache");


const nextConfig = {
    reactStrictMode: false,
    output: 'standalone'
}

const withPWA = require('next-pwa')({
    dest: 'public',
    register: true,
    skipWaiting: true,
    scope: ".",
    runtimeCaching: [
        // {
        //     urlPattern: /\/~offline/,
        //     method: "GET",
        //     handler: "StaleWhileRevalidate",
        //     options: {
        //         cacheName: "offline-mode",
        //         expiration: {
        //             maxEntries: 64,
        //             maxAgeSeconds: 24 * 60 * 60, // 24 hours
        //         },
        //     },
        // },
        ...defaultRuntimeCaching
    ],
    cacheOnFrontEndNav: true,
    reloadOnOnline: true,
    fallbacks: {
        //image: "/static/images/fallback.png",
        document: "/~offline",
        // font: '/static/font/fallback.woff2',
        // audio: ...,
        // video: ...,
    },
})

module.exports = withPWA(nextConfig)