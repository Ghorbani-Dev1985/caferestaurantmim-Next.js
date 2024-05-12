/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
     appDir: true,
    },
    images: {
        remotePatterns: [
            {
              protocol: "https",
              hostname: "cafemimapi.liara.run",
            },
          ],
    },
};

export default nextConfig;
