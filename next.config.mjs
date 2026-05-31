/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

// Deployed to GitHub Pages at https://shalithadeshan.github.io/portfolio-V3/,
// so production assets live under the /portfolio-V3 base path. In dev we serve
// from the root for convenience.
const basePath = isProd ? '/portfolio-V3' : '';

const nextConfig = {
    output: 'export',
    basePath,
    // Expose the base path to client code (e.g. for raw <img>/asset URLs).
    env: { NEXT_PUBLIC_BASE_PATH: basePath },
    images: {
        unoptimized: true,
    },
    trailingSlash: true,
};

export default nextConfig;
