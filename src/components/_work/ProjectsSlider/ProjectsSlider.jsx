'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'
import { BsArrowRight } from 'react-icons/bs'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import './ProjectsSlider.css'
import { projectsData } from '@/utils'

export default function ProjectsSlider() {
  const [screenSize, setScreenSize] = useState(0)

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

  return (<>
  { screenSize > 1500
    // Swiper grid 2x2
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
        { projectsData.slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer hover:bg-white/5 rounded-lg transition-all duration-300'>
                {slide.images.map((image, index) => (
                  <section className='relative flex_center rounded-lg group overflow-hidden' key={index}>
                    {/* name tag */}
                    <p className='absolute top-0 right-0 tracking-1 px-2 text-white bg-accent opacity-80 rounded-bl-lg'>
                      {image.name}
                    </p>

                    {/* img */}
                    <Image className='object-cover w-full h-full' src={image.image} alt='project' width={500} height={300}/>

                    {/* gradient */}
                    <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[var(--color-base-dark)] to-[var(--color-accent)] opacity-0 group-hover:opacity-80 transition-all duration-300'/>

                    {/* link to live */}
                    <section className='flex_center absolute bottom-0 translate-y-full group-hover:-translate-y-8 lg:group-hover:-translate-y-12 transition-all duration-300 flex-center gap-x-2 text-[13px] tracking-[0.2em]'>
                      <h4 className='delay-100'>
                        LIVE
                      </h4>

                      <h4 className='delay-150 translate-y-[500%] group-hover:translate-y-0 transition-all duration-300'>
                        PROJECT
                      </h4>

                      <span >
                        <BsArrowRight />
                      </span>
                    </section>
                  </section>
                ))}
              </div>
            </SwiperSlide>
        ))}
      </Swiper>
    // Swiper individual slides
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
        modules={[Pagination, Navigation]}
      >
        { projectsData.slides.map((slide, index) => (
          <div className='flex_center' key={index}>
            {slide.images.map((image, index) => (
              <SwiperSlide key={index}>
                <section className='relative flex_center cursor-pointer rounded-lg group overflow-hidden'>
                  {/* name tag */}
                  <p className='absolute top-0 right-0 tracking-1 px-2 text-white bg-accent opacity-80 rounded-bl-lg'>
                    {image.name}
                  </p>

                  {/* img */}
                  <Image className='object-cover w-full h-full' src={image.image} alt='project' width={500} height={300}/>

                  {/* gradient */}
                  <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[var(--color-base-dark)] to-[var(--color-accent)] opacity-0 group-hover:opacity-80 transition-all duration-300'/>

                  {/* content */}
                  <section className='flex_center absolute bottom-0 translate-y-full group-hover:-translate-y-8 lg:group-hover:-translate-y-12 transition-all duration-300 flex-center gap-x-2 text-[13px] tracking-[0.2em]'>
                    <h4 className='delay-100'>
                      LIVE
                    </h4>

                    <h4 className='delay-150 translate-y-[500%] group-hover:translate-y-0 transition-all duration-300'>
                      PROJECT
                    </h4>

                    <span >
                      <BsArrowRight />
                    </span>
                  </section>
                </section>
              </SwiperSlide>
            ))}
          </div>
        ))}
      </Swiper>
  }
  </>)
}
