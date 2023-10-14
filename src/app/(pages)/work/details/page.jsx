'use client'

import { useState } from 'react'

import { ProjectCard } from '@/components'
import { projectsData } from '@/utils'

export default function DetailsPage() {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false)

  const openOverlay = () => setIsOverlayOpen(true)
  const closeOverlay = () => setIsOverlayOpen(false)

  return (
    <div className='page flex_center'>
      <section className='work__container gap-8 py-7 smd:w-[90%] xl:-[80%] pb-[10svh] lg:pb-0'>
        {projectsData.map((project) => (
          <ProjectCard key={project.id} data={project} openOverlay={openOverlay} />
        ))}
      </section>
    </div>
  )
}
