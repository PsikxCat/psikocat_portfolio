'use client'

import { useState, useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { TbWorldWww, TbCode } from 'react-icons/tb'
import Image from 'next/image'
import Link from 'next/link'

import '../details.css'
import { Overlay, Modal } from '@/components'
import { fadeIn } from '@/utils'

export default function ProjectCard({ data }) {
  const { id, imagesUrl, title, description, tags, liveUrl, codeUrl } = data
  const [isOverlayOpen, setIsOverlayOpen] = useState(false)
  const cardRef = useRef(null)

  const openOverlay = () => setIsOverlayOpen(true)
  const closeOverlay = () => setIsOverlayOpen(false)

  useEffect(() => {
    const card = cardRef.current
    if (!card) return

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      card.style.setProperty('--mouse-x', `${x}px`)
      card.style.setProperty('--mouse-y', `${y}px`)
    }

    card.addEventListener('mousemove', handleMouseMove)

    return () => {
      card.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <>
      {/* card */}
      <article className='details__card_wrapper flex_center gap-2 relative'>
        <motion.div
          ref={cardRef}
          className='details__card card_styles hover-effect cursor-pointer'
          onClick={openOverlay}
          variants={fadeIn('down', 0.5, 0, 0.5)}
          initial='hidden'
          animate='visible'
        >
          {/* image */}
          <section
            className='w-[100%] h-[45%] overflow-hidden bg-dark object-fill'
          >
            <Image
              className='w-full h-full rounded-tr-[20px] object-cover object-center'
              src={imagesUrl[2]}
              width={200}
              height={200}
            />
          </section>

          {/* info */}
          <section className='w-[100%] h-[55%] flex flex-col justify-between gap-y-2 p-3 pt-2'>
            {/* tags */}
            <motion.div
              className='w-full h-[10%] flex gap-2 px-1'
              variants={fadeIn('right', 1, 50, 0.5)}
            >
              {tags.map((tag, index) => (
                <span key={index}
                  className='flex_center h-[15px] text-[9px] font-semibold leading-none pt-[2px] uppercase tracking-tigh px-2 rounded-[50px]'
                  style={{ backgroundColor: tag.color }}
                >
                  {tag.name}
                </span>
              ))}
            </motion.div>

            {/* title */}
            <motion.div
              className='h-[15%] font-bold uppercase tracking-tigh text-accent px-1 pt-1'
              variants={fadeIn('right', 1.3, 50, 0.5)}
            >
              {title}
            </motion.div>

            {/* description */}
            <motion.div
              className='h-[75%] leading-tight overflow-y-scroll bg-zinc-500/10 px-[8px] py-2 rounded-[12px]'
              variants={fadeIn('right', 1.6, 30, 1)}
            >
              {description}
            </motion.div>
          </section>
        </motion.div>

        {/* rigth tab */}
        {/* <motion.section
          className='absolute -right-[31px] top-[40px] flex_center h-[30px] w-[30px]'
          variants={fadeIn('right', 2.5, 5, 1)}
        >
          <div className='details__card_tab_r flex_center hover:text-accent-2 cursor-pointer' onClick={openOverlay}>
            <TbArrowBigRightLines className='w-[20px] h-[20px]' />
          </div>
        </motion.section> */}

        {/* below tabs */}
        <section className='absolute -bottom-[31px] flex_center justify-evenly h-[30px] w-full'
        >
          <div className='details__card_tab_b flex_center'>
            <Link className='cursor-pointer hover:text-accent-2' href={liveUrl} target='_blank'>
              <TbWorldWww className='w-[20px] h-[20px]' />
            </Link>
          </div>
          <div className='details__card_tab_b flex_center'>
            <Link className='cursor-pointer hover:text-accent-2' href={codeUrl} target='_blank'>
              <TbCode className='w-[20px] h-[20px]' />
            </Link>
          </div>
        </section>
      </article>

      {/* modal only on 900 and above */}
      <div className='absolute hidden md:block'>
        <AnimatePresence key={id}>
          {isOverlayOpen && (
            <Overlay key={id} closeOverlay={closeOverlay}>
              <Modal data={data} closeOverlay={closeOverlay} />
            </Overlay>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}
