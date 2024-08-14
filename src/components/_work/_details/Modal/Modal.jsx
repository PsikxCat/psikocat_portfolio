'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { IoCloseCircleOutline } from 'react-icons/io5'

import '../details.css'
import { ModalSlider } from '@/components'
import { fadeIn } from '@/utils'
import Link from 'next/link'

export default function Modal({ data, closeOverlay }) {
  const { imagesUrl, title, extended_description, tags, liveUrl, codeUrl } = data

  return (
    <motion.article
      className='details__modal_wrapper flex_center'
      onClick={(e) => e.stopPropagation()}
      variants={fadeIn('down', 0, 0, 0.5)}
      initial='hidden'
      animate='visible'
      exit='hidden'
    >
      <div className='details__modal card_styles'>
        <button className='absolute top-[10px] right-[10px] text-[28px] text-accent-2 cursor-pointer' onClick={closeOverlay}>
          <IoCloseCircleOutline />
        </button>

        {/* slider & links */}
        <section
          className='w-[65%]'
        >
          {/* slider */}
          <section className='h-[60%] bg-accent-2 rounded-br-[12px] overflow-hidden mb-2'>
            <ModalSlider imagesUrl={imagesUrl} />
          </section>

          {/* icons & links */}
          <section className='h-[40%] flex_center_column justify-evenly'>
            {/* icons */}
            <div className='flex_center w-full flex_center gap-5'>
              {tags.map((tag) => (
                <div key={tag.id} className='flex_center_column' >
                  {/* icon */}
                  <span className='flex_center h-[50px] w-[50px] rounded-full overflow-hidden'
                    style={{ backgroundColor: tag.color }}
                  >
                    <Image src={tag.imageUrl} width={35} height={35} />
                  </span>
                  {/* name */}
                  <span className='text-[12px] text-center font-semibold tracking-tight'>{tag.name}</span>
                </div>
              ))}
            </div>

            {/* links */}
            <div className='flex_center justify-evenly w-full text-[18px] tracking-wider font-semibold uppercase text-accent-2'>
            <Link href={liveUrl} target='_blank' rel='noopener noreferrer' className='cursor-pointer text_shadow'
            >
              Ir a projecto
            </Link>
            <Link href={codeUrl} target='_blank' rel='noopener noreferrer' className='cursor-pointer text_shadow'
            >
              Ver codigo
            </Link>
            </div>
          </section>
        </section>

        {/* info */}
        <motion.section
          className='w-[35%] p-5 pt-0'
          variants={fadeIn('left', 0.5, 40, 0.5)}
        >
          {/* title */}
          <div className='h-[15%] flex items-center p-2 uppercase tracking-wide text-accent font-bold text-[20px]'>{title}</div>
          {/* description */}
          <div className='h-[85%] text-[clamp(10px,1px_+_1.3vw,18px)] leading-tight overflow-y-scroll bg-zinc-500/10 p-4 rounded-[12px]'>
            {extended_description}
          </div>
        </motion.section>
      </div>
    </motion.article>
  )
}
