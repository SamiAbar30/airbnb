/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['links.papareact.com']
  },
  env:{
    mapbox_key:'pk.eyJ1Ijoic2FtaS1hYmFyLW1hcGJveDEiLCJhIjoiY2xhdm42MDd2MDZ5ODNvbGlpc2VxdGs2dCJ9.bKiPuf9z0Z4rvKjUFT2G1A'
  },
  reactStrictMode: true,
}

module.exports = nextConfig
