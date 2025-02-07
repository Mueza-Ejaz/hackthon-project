/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.sanity.io'], // Add Sanity's CDN hostname
  },

  i18n: {
    locales: ["en", "fr", "es"], // Supported languages
    defaultLocale: "en", // Default language
  },
};

export default nextConfig;
