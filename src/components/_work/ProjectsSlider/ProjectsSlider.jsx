'use client'

import { useState, useEffect } from 'react'
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
  const [screenSize, setScreenSize] = useState(0)

  const chunkProjectsArr = (array, size) => {
    const chunkedArr = []
    let index = 0

    while (index < array.length) {
      chunkedArr.push(array.slice(index, size + index))
      index += size
    }

    return chunkedArr
  }

  useEffect(() => {
    setScreenSize(window.innerWidth)

    // crear un listener para el evento resize
    window.addEventListener('resize', () => {
      setScreenSize(window.innerWidth)
    })

    // remover el listener cuando el componente se desmonte
    return () => {
      window.removeEventListener('resize', () => {
        setScreenSize(window.innerWidth)
      })
    }
  }, [])

  return (
    <>
    {screenSize > 1500
      ? <Swiper
          className='h-auto w-auto max-w-[900px]'
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
                {chunk.map(({ id, imagesUrl, title }) => (
                  <section className='relative flex_center rounded-lg group overflow-hidden' key={id}>
                    <ProjectSliderCard title={title} imagesUrl={imagesUrl} />
                  </section>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      : <Swiper
        className='h-auto w-auto max-w-[400px]'
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
        {projectsData.map(({ id, imagesUrl, title }) => (
          <SwiperSlide key={id}>
            <section className='relative flex_center cursor-pointer rounded-lg group overflow-hidden'>
              <ProjectSliderCard title={title} imagesUrl={imagesUrl} />
            </section>
          </SwiperSlide>
        ))}
      </Swiper>
    }
    </>
  )
}
