/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: false
}

const withPWA = require('next-pwa')({
    dest: 'public',
    register: true,
    skipWaiting: true,
    runtimeCaching: require("next-pwa/cache")
})

module.exports = withPWA(nextConfig)