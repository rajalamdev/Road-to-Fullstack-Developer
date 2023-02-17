/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  env: {
    PUBLIC_API_URL: 'https://strapi-production-ba85.up.railway.app',
  },
  images: {
    domains: ['strapi-production-ba85.up.railway.appundefined', 'res.cloudinary.com', 'localhost', 'i.imgur.com'],
  },
}

