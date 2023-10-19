import { ProjectCard } from '@/components'
import { projectsData } from '@/utils'

export default function DetailsPage() {
  return (
    <div className='page flex_center'>
      <section className='work__container pt-7 px-3 md:pr-8 smd:w-[90%] xl:-[80%] lg:pb-0'>
        {projectsData.map((project) => (
          <ProjectCard key={project.id} data={project} />
        ))}
        <div className='h-[1px]'/>
      </section>
    </div>
  )
}
