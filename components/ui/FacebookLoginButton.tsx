// pages/login.tsx
import { useEffect, useState } from 'react'
import { Button } from './button'
import axios from 'axios'

interface WindowWithFB extends Window {
	FB?: {
		init: (params: {
			appId: string
			autoLogAppEvents: boolean
			xfbml: boolean
			version: string
		}) => void
		login: (callback?: (response: any) => void, options?: any) => void
		getLoginStatus: (callback: (response: any) => void) => void
		api: (path: string, callback: (response: any) => void) => void
	}
}

const initFacebookSDK = (appId: string) => {
	const windowWithFB = window as WindowWithFB

	return new Promise<void>(resolve => {
		const script = document.createElement('script')
		script.src = 'https://connect.facebook.net/en_US/sdk.js'
		script.async = true
		script.defer = true
		script.crossOrigin = 'anonymous'
		script.onload = () => {
			windowWithFB.FB?.init({
				appId: appId,
				autoLogAppEvents: true,
				xfbml: true,
				version: 'v11.0',
			})
			resolve()
		}
		document.head.appendChild(script)
	})
}

const Login: React.FC = () => {
	const [isSDKInitialized, setSDKInitialized] = useState(false)

	useEffect(() => {
		const initializeSDK = async () => {
			try {
				await initFacebookSDK('308882368546729')
				setSDKInitialized(true)
			} catch (error) {
				console.error('Ошибка инициализации Facebook SDK:', error)
			}
		}

		if (!isSDKInitialized) {
			initializeSDK()
		}
	}, [isSDKInitialized])

	const loginWithFacebook = async () => {
		try {
			// Проверяем, инициализирован ли Facebook SDK
			if (!isSDKInitialized) {
				console.error('Facebook SDK еще не инициализирован.')
				return
			}

			const windowWithFB = window as WindowWithFB

			// Проверяем статус входа перед вызовом FB.login
			windowWithFB.FB?.getLoginStatus(response => {
				if (response.status === 'connected') {
					console.log('Пользователь уже вошел через Facebook!', response)
					console.log(response.authResponse.accessToken)
					windowWithFB.FB?.api(
						`/${response.authResponse.userId}/accounts`,
						function (response) {
							if (response && !response.error) {
								console.log(response)
							}
						}
					)
					// Здесь можно отправить запрос на сервер для обработки токена доступа
				} else {
					// Вызываем FB.login только после успешной инициализации Facebook SDK
					windowWithFB.FB?.login(loginResponse => {
						if (loginResponse.authResponse) {
							console.log('Успешный вход через Facebook!', loginResponse)
							// Здесь можно отправить запрос на сервер для обработки токена доступа
						} else {
							console.log('Вход отменен.')
						}
					})
				}
			})
		} catch (error) {
			window.alert('Ошибка входа через Facebook:' + error)
		}
	}

	return (
		<div>
			<Button className='fb' onClick={loginWithFacebook}>
				Войти через Facebook
			</Button>
		</div>
	)
}

export default Login
