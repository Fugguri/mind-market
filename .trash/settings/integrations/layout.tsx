import PageTitleItem from '@/components/ui/page_title'

const IntegrationsLayuot = ({ children }: { children: React.ReactNode }) => {
	return (
		<div>
			<PageTitleItem title='Интеграции' />

			{children}
		</div>
	)
}

export default IntegrationsLayuot
