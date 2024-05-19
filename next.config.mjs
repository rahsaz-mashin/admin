import withPWAInit from "next-pwa";

const withPWA = withPWAInit({
    dest: "public",
    register: true,
    skipWaiting: true,
    cacheOnFrontEndNav: true,
    reloadOnOnline: true,
    // runtimeCaching: true,
    // workboxOptions: {
    //     runtimeCaching: [
    //         // Your runtimeCaching array
    //     ],
    // },
    // fallbacks: {
    //     document: "/~offline",
    // }
});

export default withPWA({
    reactStrictMode: false,
    output: 'standalone',
    swcMinify: true
});