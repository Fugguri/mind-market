/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		serverComponentsExternalPackages: ['@prisma/client', 'bcryptjs'],
		serverActions: {
			allowedForwardedHosts: ['localhost', 'web-mainmarket'],
			allowedOrigins: ['http://localhost:3001', 'https://web-mindmarket.ru'],
		},
	},
	images: {
		domains: [
			'uploadthing.com',
			'utfs.io',
			'localhost:8000',
			'avatars.githubusercontent.com',
			'web-mindmarket.ru',
		],
	},
}

module.exports = nextConfig
