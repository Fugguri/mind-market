import { currentProfile } from '@/lib/current-profile'

import EmptyPage from '@/components/mics/empty'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useModal } from '@/hooks/use-modal-store'
import { CreateProjectButton } from '@/components/navigation/project-search-bar'
import ProjectItem from '@/components/projects/project-item'
import { db } from '@/lib/db'
import PageTitleItem from '@/components/ui/page_title'

const ProjectsPage = async () => {
	const profile = await currentProfile()
	if (!profile) {
	}
	const projects = await db.project.findMany({
		where: {
			ownerId: profile?.id,
		},
		include: {
			Manager: true,
		},
	})

	return (
		<main className='h-full'>
			<div className='hidden mt-5 md:flex w-full  flex-col ml-l-5   inset-y-0'></div>

			<div className='h-full'>
				<div>
					<PageTitleItem title='Проекты' />
					<div className='hidden mt-5 md:flex w-full  flex-col ml-l-5   inset-y-0'></div>

					<div>
						<div className=' flex items-center align-middle mr-10 ml-10 rounded-[30px]'>
							<Input placeholder='Поиск проекта' />
							<div className='ml-3 mr-3 mb-1.5 h-10'>
								<CreateProjectButton />
							</div>
						</div>
						<div className=' items-center align-middle font-roboto ml-15'>
							<div className='m-10 p-10 bg-gray-600 rounded-[30px]'>
								{projects?.length != 0 ? (
									<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
									{/*<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-6 gap-6 pb-10'>*/}
										{projects?.map(project => (
											<div key={project.name}>
												{/* {project.name} */}
												<ProjectItem project={project} />
											</div>
										))}
									</div>
								) : (
									<div>
										<EmptyPage title='проектов' />
									</div>
								)}
							</div>
							<div className='flex m-10 p-10 align-middle items-center '>
								<br></br>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}
export default ProjectsPage
