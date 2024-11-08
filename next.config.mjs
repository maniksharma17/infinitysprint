/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'infinitysprint.s3.ap-south-1.amazonaws.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'chapterone.in',
        port: '',
        pathname: '/cdn/shop/files/**',
      },
      {
        protocol: 'https',
        hostname: 'viper.ac.in',
        port: '',
        pathname: '/images/**',
      },
      {
        protocol: 'https',
        hostname: 'bvrit.ac.in',
        port: '',
        pathname: '/wp-content/uploads/**',
      },
      
      {
        protocol: 'https',
        hostname: 'www.ecommerce-nation.com',
        port: '',
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'mma.prnewswire.com',
        port: '',
        pathname: '/media/**',
      },
      {
        protocol: 'https',
        hostname: 'wordpress.org',
        port: '',
        pathname: '/five-for-the-future/files/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.vox-cdn.com',
        port: '',
        pathname: '/thumbor/**',
      },
    ],
  },
};

export default nextConfig;
