// import type { NextConfig } from "next";

// import { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   productionBrowserSourceMaps: false,
//   turbopack: {}
// };

// export default nextConfig;

const nextConfig = {
 
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  
}

module.exports = nextConfig