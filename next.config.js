/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "glossary.korabli.su",
            }
        ],
    },
}

module.exports = nextConfig
