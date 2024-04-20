export { default } from 'next-auth/middleware'

export const config = {
	matcher: [
		'/platform/profile',
		'/platform/settings/:path*',
		'/platform/profile/:path*',
		'/platform/chats/:path*',
	],
}
