export { default } from 'next-auth/middleware'

export const config = {
	matcher: ['/profile', '/settings/:path*', '/profile/:path*', '/chats/:path*'],
}
