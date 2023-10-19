'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, EffectCards } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/effect-cards'

import './ProjectsSlider.css'
import { projectsData } from '@/utils'
import { ProjectSliderCard } from '@/components'

export default function ProjectsSlider() {
  const chunkProjectsArr = (array, size) => {
    const chunkedArr = []
    let index = 0

    while (index < array.length) {
      chunkedArr.push(array.slice(index, size + index))
      index += size
    }

    return chunkedArr
  }

  return (
    <>
    <div className='hidden xl:block'>
      <Swiper
        className='h-auto w-auto max-w-[700px]'
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        navigation={{
          enabled: true,
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
      >
        {chunkProjectsArr(projectsData, 4).map((chunk, index) => (
          <SwiperSlide key={index}>
            <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer bg-dark rounded-lg transition-all duration-300'>
              {chunk.map(({ id, imagesUrl, title, liveUrl }) => (
                <section className='relative flex_center rounded-lg group overflow-hidden' key={id}>
                  <ProjectSliderCard title={title} imagesUrl={imagesUrl} liveUrl={liveUrl} />
                </section>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

    <div className='xl:hidden'>
      <Swiper
        className='h-auto w-auto max-w-[350px]'
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        navigation={{
          enabled: true,
          clickable: true,
        }}
        effect={'cards'}
        modules={[Pagination, Navigation, EffectCards]}
      >
        {projectsData.map(({ id, imagesUrl, title, liveUrl }) => (
          <SwiperSlide key={id}>
            <section className='relative flex_center cursor-pointer rounded-lg group overflow-hidden'>
              <ProjectSliderCard title={title} imagesUrl={imagesUrl} liveUrl={liveUrl} />
            </section>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </>
  )
}
