/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  transpilePackages: ['lucide-react'],
  experimental: {
    missingSuspenseWithCSRBailout: false,
  }
};

export default nextConfig;
