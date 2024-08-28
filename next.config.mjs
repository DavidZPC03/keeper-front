import analyze from '@next/bundle-analyzer';

const withBundleAnalyzer = analyze({
    enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
        turbo: {
            useSwcCss: true,
        },
        // ppr: 'incremental',
    },
};

export default withBundleAnalyzer(nextConfig);
