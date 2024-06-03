/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		serverComponentsExternalPackages: ['@prisma/client', 'bcryptjs'],
		serverActions: true,
		// {
		// 	allowedOrigins: [
		// 		'localhost:3000',
		// 		'127.0.0.1:8000',
		// 		'127.0.0.1:3001',
		// 		'web-mindmarket.ru',
		// 		'*',
		// 	],
		// },
	}, 
	webpack: (config, { isServer }) => {
		config.module.rules.push({
		  test: /\.html$/,
		  use: ['html-loader'],
		});
	
		return config;
	  },

	images: {
		domains: [
			'uploadthing.com',
			'utfs.io',
			'localhost:8000',
			'avatars.githubusercontent.com',
			'web-mindmarket.ru',
		],
		formats: ['image/avif', 'image/webp'],
		remotePatterns: [
			{
				protocol: 'https',
				hostname: '**',
				port: '',
			},
		],
	},
}

module.exports = nextConfig
