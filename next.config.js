/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  // experimental:{appDir: true}
  experimental: {
    // concurrentFeatures: true
    appDir: true,
    // webpack: (config) => {
    //   config.experiments = { ...config.experiments, topLevelAwait: true };
    //   return config;
    // },
    topLevelAwait: true,
  }
   
}

module.exports = nextConfig
