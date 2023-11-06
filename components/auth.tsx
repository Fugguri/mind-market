'use client'

import { signIn, signOut } from 'next-auth/react'
import { Button } from '@/components/ui/button'

export const LoginButton = () => {
	return <Button onClick={() => signIn()}> Войти </Button>
}

export const LogOutButton = () => {
	return <Button onClick={() => signOut()}> Выйти </Button>
}
