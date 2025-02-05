import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
    dest: "public",
    register: true,
    cacheOnFrontEndNav: true,
    reloadOnOnline: true
});

export default withPWA({
    reactStrictMode: false,
    output: 'standalone',
    swcMinify: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'storage.rahsazmashin.com',
                port: '',
                pathname: '/**',
            },
        ],
    }
});