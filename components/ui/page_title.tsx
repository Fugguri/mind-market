'use client'

interface PageTitleItemProps {
	title: string
}

const PageTitleItem = ({ title }: PageTitleItemProps) => {
	return (
		<div>
			<p className='m-3 font-bold dark:text-neutral-500'>{title}</p>
		</div>
	)
}

export default PageTitleItem
