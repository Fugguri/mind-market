import PageTitleItem from '@/components/ui/page_title'
import { currentProfile } from '@/lib/current-profile'

const IntegrationsLayuot = async ({
	children,
}: {
	children: React.ReactNode
}) => {
	const profile = await currentProfile()

	if (!profile) {
		return
	}

	return (
		<div className='h-full'>
			<PageTitleItem title='Интеграции' />
			<main className='h-full align-middle items-center '>{children}</main>
		</div>
	)
}

export default IntegrationsLayuot
