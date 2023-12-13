const million = require('million/compiler');
/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = million.next(  {
        images: {
            domains: ["images.unsplash.com"],
        },
        env: {
            url: "http://127.0.0.1:5000",
        },
    },

  nextConfig
, { auto: { rsc: true } }
)