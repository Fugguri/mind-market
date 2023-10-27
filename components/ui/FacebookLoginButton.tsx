// pages/login.tsx
import { useEffect, useState } from 'react'

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
	}
}

const initFacebookSDK = (appId: string) => {
	return new Promise<void>(resolve => {
		const script = document.createElement('script')
		script.src = 'https://connect.facebook.net/en_US/sdk.js'
		script.async = true
		script.defer = true
		script.crossOrigin = 'anonymous'
		script.onload = () => {
			window.FB.init({
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
				await initFacebookSDK(
					process.env.FACEBOOK_APP_ID || 'YOUR_DEFAULT_APP_ID'
				)
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
			const windowWithFB = window as WindowWithFB

			// Проверяем, инициализирован ли Facebook SDK
			if (!isSDKInitialized) {
				console.error('Facebook SDK еще не инициализирован.')
				return
			}

			// Проверяем статус входа перед вызовом FB.login
			windowWithFB.FB?.getLoginStatus(response => {
				if (response.status === 'connected') {
					console.log('Пользователь уже вошел через Facebook!', response)
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
			console.error('Ошибка входа через Facebook:', error)
		}
	}

	return (
		<div>
			<button onClick={loginWithFacebook}>Войти через Facebook</button>
		</div>
	)
}

export default Login
