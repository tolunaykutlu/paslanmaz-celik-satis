/** @type {import('next').NextConfig} */
const nextConfig = {
  // Hata göstergesini devre dışı bırak
  devIndicators: {
    buildActivity: false,
    buildActivityPosition: 'bottom-right',
  },
  // Harici resimlere izin ver
  images: {
    domains: ['images.unsplash.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig; 