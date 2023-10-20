'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCube, Autoplay } from 'swiper/modules'
import { motion } from 'framer-motion'
import Image from 'next/image'

import 'swiper/css'
import 'swiper/css/effect-cube'

import { fadeIn } from '@/utils'

export default function ModalSlider({ imagesUrl }) {
  return (
    <Swiper
      className='h-full'
      spaceBetween={10}
      autoplay={{
        delay: 6000,
        disableOnInteraction: true,
      }}
      effect={'cube'}
      grabCursor={true}
      modules={[EffectCube, Autoplay]}
    >
      {imagesUrl.map((imageUrl, index) => (
        <SwiperSlide key={index}>
          <motion.section
            className='flex_center h-[100%] bg-dark'
            variants={fadeIn('up', 0.5, 40, 1)}
          >
            <Image
              className='h-full object-cover object-left-top'
              src={imageUrl}
              width={800}
              height={600}
              unoptimized={true}
            />
          </motion.section>
        </SwiperSlide>
      ))
      }
    </Swiper>
  )
}
