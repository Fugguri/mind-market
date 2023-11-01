// pages/login.tsx
import { useEffect, useState } from 'react'
import { Button } from './button'
import { WindowWithFB, initFacebookSDK } from '@/lib/facebook-sdk'

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
					console.log(response.authResponse.userID)
					console.log(response.authResponse)
					// Здесь можно отправить запрос на сервер для обработки токена доступа
					windowWithFB.FB?.api(
						`/${response.authResponse.userID}/accounts`,
						function (response) {
							if (response && !response.error) {
								console.log(response, response.error)
							}
						}
					)
				} else {
					// Вызываем FB.login только после успешной инициализации Facebook SDK
					windowWithFB.FB?.login(
						loginResponse => {
							if (loginResponse.authResponse) {
								console.log('Успешный вход через Facebook!', loginResponse)
								// Здесь можно отправить запрос на сервер для обработки токена доступа
							} else {
								console.log('Вход отменен.')
							}
						},
						{ scope: 'public_profile,email,instagram_basic,pages_show_list' }
					)
				}
			})
		} catch (error) {
			window.alert('Ошибка входа через Facebook:' + error)
		}
	}

	return (
		<Button variant='primary' onClick={loginWithFacebook}>
			Войти через Facebook
		</Button>
	)
}

export default Login
