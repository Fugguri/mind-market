import { JWT } from 'next-auth/jwt'
import { DefaultSession } from 'next-auth'

declare module 'next-auth' {
	interface Session {
		user?: {
			id: string
		} & DefaultSession['user']
	}
}

declare module 'next-auth/jwt' {
	/** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
	interface JWT {
		/** OpenID ID Token */
		idToken?: string
	}
}
