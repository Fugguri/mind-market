import Image from 'next/image'

interface EmptyPageProps {
	title: string
}

const EmptyPage = (props: EmptyPageProps) => {
	return (
		<div className='pt-10 flex flex-col items-center justify-center space-y-3'>
			<div className='relative w-60 h-60'>
				<Image
					width='600'
					height='300'
					className='grayscale'
					alt='Empty'
					src='/empty.jpg'
				/>
			</div>
			<div className='dark:text-muted-foreground'>
				<p>Тут еще нет {props.title}</p>
			</div>
		</div>
	)
}

export default EmptyPage
