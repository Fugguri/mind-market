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
		login: () => Promise<any>
	}
	fbAsyncInit?: () => void
}

const Login: React.FC = () => {
	const [isSDKInitialized, setSDKInitialized] = useState(false)

	useEffect(() => {
		const initFacebookSDK = async () => {
			try {
				await new Promise<void>((resolve, reject) => {
					const windowWithFB = window as WindowWithFB
					windowWithFB.fbAsyncInit = function () {
						windowWithFB.FB?.init({
							appId: process.env.FACEBOOK_APP_ID || 'YOUR_DEFAULT_APP_ID',
							autoLogAppEvents: true,
							xfbml: true,
							version: 'v11.0',
						})
						resolve()
					}
					;(function (d, s, id) {
						var js: HTMLScriptElement,
							fjs = d.getElementsByTagName(s)[0]
						if (d.getElementById(id)) return
						js = d.createElement(s) as HTMLScriptElement
						js.id = id
						js.src = 'https://connect.facebook.net/en_US/sdk.js'
						fjs.parentNode?.insertBefore(js, fjs)
					})(document, 'script', 'facebook-jssdk')
				})

				setSDKInitialized(true)
			} catch (error) {
				console.error('Ошибка инициализации Facebook SDK:', error)
			}
		}

		initFacebookSDK()
	}, [])

	const loginWithFacebook = async () => {
		if (!isSDKInitialized) {
			console.error('Facebook SDK еще не инициализирован.')
			return
		}

		try {
			const windowWithFB = window as WindowWithFB
			const response = await windowWithFB.FB?.login()

			if (response?.authResponse) {
				console.log('Успешный вход через Facebook!', response)
				// Здесь можно отправить запрос на сервер для обработки токена доступа
			} else {
				console.log('Вход отменен.')
			}
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
