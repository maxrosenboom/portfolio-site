/** @type {import('next').NextConfig} */
const nextConfig = {
    // Configure the output to use "export"
    // This tells Next.js to generate static HTML files for export
    output: 'export',
    images: {
        unoptimized: true,
    },
  };
  
  module.exports = nextConfig;