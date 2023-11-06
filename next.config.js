/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		serverComponentsExternalPackages: ['@prisma/client', 'bcrypt'],
	},
	images: {
		domains: [
			'uploadthing.com',
			'utfs.io',
			'localhost:8000',
			'avatars.githubusercontent.com',
		],
	},
}

module.exports = nextConfig
