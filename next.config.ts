// import type { NextConfig } from "next";

// import { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   productionBrowserSourceMaps: false,
//   turbopack: {}
// };

// export default nextConfig;

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/ozon-next' : '',
}

module.exports = nextConfig