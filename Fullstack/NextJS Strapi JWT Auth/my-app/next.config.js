/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  env: {
    PUBLIC_API_URL: 'http://localhost:1337',
  },
  images: {
    domains: ['strapi-production-ba85.up.railway.appundefined', 'res.cloudinary.com', 'localhost'],
  },
}

