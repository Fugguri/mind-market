
import { currentProfile } from '@/lib/current-profile'
import PageTitleItem from '@/components/ui/page_title'

const CrmLayuot = async ({ children }: { children: React.ReactNode }) => {
	const profile = await currentProfile()

	if (!profile) {
		return 
	}

	return (
		<div className='h-full'>
			<main className='h-full align-middle items-center '>
				<PageTitleItem title='СРМ' />

				{children}
			</main>
		</div>
	)
}

export default CrmLayuot
