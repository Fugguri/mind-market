export { default } from 'next-auth/middleware'

export const config = {
	matcher: ['/project', '/project/:path*', '/profile/:path*', '/chats/:path*'],
}
