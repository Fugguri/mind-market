import { signIn } from 'next-auth/react'
import { AuthOptions, User } from 'next-auth'

import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'
import { db } from '@/lib/db'
import { randomUUID } from 'crypto'
import { hash, compare } from 'bcrypt'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const authConfig: AuthOptions = {
	// Configure one or more authentication providers

	session: {
		strategy: 'jwt',
	},
	adapter: PrismaAdapter(prisma),

	providers: [
		CredentialsProvider({
			name: 'email',
			credentials: {
				email: {
					label: ' email ',
					type: 'email',
					placeholder: 'hello@example.com',
					required: true,
				},
				password: {
					label: 'Пароль',
					type: 'password',
					placeholder: 'password',
					required: true,
				},
			},
			async authorize(credentials) {
				if (!credentials?.email || !credentials.password) return null
				console.log(credentials)

				const user = await db.user.findUnique({
					where: {
						email: credentials?.email?.toString(),
					},
				})
				console.log(user)
				if (!user) {
					const hashedPassword = await hash(credentials.password, 12)
					const newProfile = await db.user.create({
						data: {
							userId: randomUUID(),
							imageUrl: '',
							name: 'default name',
							email: credentials.email,
							password: hashedPassword,
						},
					})
					const { password, ...profileWithoutPass } = newProfile

					return profileWithoutPass as User
				}

				const isPasswordValid = await compare(
					credentials?.password,
					user.password ? user.password : 'fdsf'
				)
				if (isPasswordValid) {
					const { password, ...profileWithoutPass } = user

					return profileWithoutPass as User
				}
				if (!isPasswordValid) {
					return null
				}
				return null
			},
		}),
		// GoogleProvider({
		// 	clientId: process.env.GOOGLE_ID!,
		// 	clientSecret: process.env.GOOGLE_SECRET!,
		// }),
		// GithubProvider({
		// 	clientId: process.env.GITHUB_ID!,
		// 	clientSecret: process.env.GITHUB_SECRET!,
		// }),
		// ...add more providers here
	],

	theme: {
		colorScheme: 'auto', // "auto" | "dark" | "light"
		brandColor: '#7CFC00', // Hex color code
		logo: '/logo.png', // Absolute URL to Image
		buttonText: '#7CFC00', // Hex color code
	},
}
