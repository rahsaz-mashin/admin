import withPWAInit from "@ducanh2912/next-pwa";



const withPWA = withPWAInit({
    dest: "public",
    register: true,
    cacheOnFrontEndNav: true,
    reloadOnOnline: true
});

export default withPWA({
    reactStrictMode: false,
    swcMinify: true,
    basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
    assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '',
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'storage.rahsazmashin.com',
                port: '',
                pathname: '/**',
            },
        ],
    },
});