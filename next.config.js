/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		serverComponentsExternalPackages: ['@prisma/client', 'bcryptjs'],
        serverActions: {
            allowedOrigins: [
                'localhost:3000',
                '127.0.0.1:8000',
                '127.0.0.1:3001',
                'web-mindmarket.ru',
                '*',
            ]
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
