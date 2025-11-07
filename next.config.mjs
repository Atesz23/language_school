/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/.cluj',
        destination: '/',
        permanent: true,
      },
      // Ha más hasonló linkeket is át akarsz irányítani, add hozzá ide:
      // {
      //   source: '/.mures',
      //   destination: '/',
      //   permanent: true,
      // },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'flagcdn.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;