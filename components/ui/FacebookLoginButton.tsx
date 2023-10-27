// pages/login.tsx
import { useEffect } from 'react'

interface WindowWithFB extends Window {
	FB?: {
		init: (params: {
			appId: string
			autoLogAppEvents: boolean
			xfbml: boolean
			version: string
		}) => void
		login: () => Promise<any>
		// Другие методы и свойства, которые вы планируете использовать
	}
	fbAsyncInit?: () => void
}

const Login: React.FC = () => {
	useEffect(() => {
		const windowWithFB = window as WindowWithFB

		windowWithFB.fbAsyncInit = function () {
			windowWithFB.FB?.init({
				appId: 'ВАШ_APP_ID',
				autoLogAppEvents: true,
				xfbml: true,
				version: 'v11.0',
			})
		}
		;(function (d, s, id) {
			var js: HTMLScriptElement,
				fjs = d.getElementsByTagName(s)[0]
			if (d.getElementById(id)) return
			js = d.createElement(s) as HTMLScriptElement // Приводим к HTMLScriptElement
			js.id = id
			js.src = 'https://connect.facebook.net/en_US/sdk.js'
			fjs.parentNode?.insertBefore(js, fjs)
		})(document, 'script', 'facebook-jssdk')
	}, [])

	const loginWithFacebook = async () => {
		try {
			const windowWithFB = window as WindowWithFB
			const response = await windowWithFB.FB?.login()

			if (response?.authResponse) {
				// Здесь можно отправить запрос на сервер для обработки токена доступа
				console.log('Успешный вход через Facebook!', response)
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
