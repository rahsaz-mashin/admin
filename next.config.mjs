import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
    dest: "public",
    register: true,
    skipWaiting: true,
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
                hostname: 'dkstatics-public.digikala.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'www.arshiarahsazmachine.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'api.arshiarahsazmachine.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'zl50.ir',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'api.zl50.ir',
                port: '',
                pathname: '/**',
            },
        ],
    }
});