/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: false
}

const withPWA = require('next-pwa')({
    dest: 'public',
    register: true,
    skipWaiting: true,
    runtimeCaching: require("next-pwa/cache"),
    cacheOnFrontEndNav: true,
    reloadOnOnline: true,
    fallbacks: {
        //image: "/static/images/fallback.png",
        document: "/offline",
        // font: '/static/font/fallback.woff2',
        // audio: ...,
        // video: ...,
    },
})

module.exports = withPWA(nextConfig)