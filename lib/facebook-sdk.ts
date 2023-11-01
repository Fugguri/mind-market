export interface WindowWithFB extends Window {
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

export const initFacebookSDK = (appId: string) => {
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
