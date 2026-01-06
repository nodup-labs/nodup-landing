import './server-localstorage-shim';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // For local development, basePath is '/'
  // This file will be overwritten during deployment with the appropriate basePath
  images: {
    domains: ["images.unsplash.com", "flowbite.s3.amazonaws.com"],
  },
};

export default nextConfig;
