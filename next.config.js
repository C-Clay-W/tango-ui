/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true, // 忽略 ESLint 检查
  },
  typescript: {
    ignoreBuildErrors: true, // 忽略 TypeScript 错误
  },
};

module.exports = nextConfig;
