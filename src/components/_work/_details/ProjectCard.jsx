'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

import './details.css'
import { fadeIn } from '@/utils'

export default function ProjectCard({ data, openOverlay }) {
  const { imagesUrl, title, description, tags } = data

  return (
    <article className='details__card_wrapper flex_center' onClick={openOverlay}>
      <motion.div
        className='details__card card_styles'
        whileHover={{ scale: 1.01, transition: { duration: 0.3 } }}
        variants={fadeIn('down', 0.5, 0, 0.5)}
        initial='hidden'
        animate='visible'
      >
        {/* image */}
        <motion.section
          className='w-[100%] h-[45%] overflow-hidden bg-dark object-fill' variants={fadeIn('up', 0.5, 40, 1)}
        >
          <Image
            className='w-full h-full rounded-tr-[20px] object-cover object-left-top'
            src={imagesUrl[2]}
            width={200}
            height={200}
            objectFit='cover'
          />
        </motion.section>

        {/* info */}
        <motion.section
          className='w-[100%] h-[55%] flex flex-col justify-between gap-y-2 p-3 pt-2' variants={fadeIn('up', 0.5, 40, 1)}
        >
          {/* tags */}
          <div className='w-full h-[20px] flex gap-2 px-1'>
            {tags.map((tag, index) => (
              <span key={index} className='flex_center text-xs text-[10px] font-semibold leading-none tracking-tighter px-2 rounded-[50px]' style={{ backgroundColor: tag.color }}>
                {tag.name}
              </span>
            ))}
          </div>

          {/* title & description */}
          <div className='font-bold uppercase tracking-tigh text-accent px-1 pt-1'>{title}</div>
          <div className='leading-tight overflow-y-scroll bg-zinc-500/10 px-[8px] py-2 rounded-[12px]'>{description}</div>
        </motion.section>
      </motion.div>
    </article>
  )
}
