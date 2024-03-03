import { redirectToSignIn } from '@clerk/nextjs'
import { currentProfile } from '@/lib/current-profile'
import PageTitleItem from '@/components/ui/page_title'

const CrmLayuot = async ({ children }: { children: React.ReactNode }) => {
	const profile = await currentProfile()

	if (!profile) {
		return redirectToSignIn
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
