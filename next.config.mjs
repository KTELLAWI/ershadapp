/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains:["backend.tellawi.rest","tellawi.rest"]
    // remotePatterns: [
	  //   {
    //     protocol: process.env.NEXT_PUBLIC_PROTOCOL || 'http',
    //     hostname: "tellawi.rest",
    //     port: process.env.NEXT_PUBLIC_PORT || '5000',
    //   },
    //   {
    //     protocol: process.env.NEXT_PUBLIC_PROTOCOL || 'http',
    //     hostname: "18.153.95.90", // Add IP address here
    //     port: process.env.NEXT_PUBLIC_PORT || '5000', // Ensure the correct port is used
    //   },      {
    //     protocol: process.env.NEXT_PUBLIC_PROTOCOL || 'http',
    //     hostname: "backend.tellawi.rest", // Add IP address here
    //     port: process.env.NEXT_PUBLIC_PORT || '5000', // Ensure the correct port is used
    //   },
    // ],
  },
};

export default nextConfig;
