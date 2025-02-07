const nextConfig = {
    reactStrictMode: true,
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
};

export default nextConfig;