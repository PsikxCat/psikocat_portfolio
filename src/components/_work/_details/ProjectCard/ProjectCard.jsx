'use client'

import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { TbWorldWww, TbCode, TbArrowBigRightLines } from 'react-icons/tb'
import Image from 'next/image'
import Link from 'next/link'

import '../details.css'
import { Overlay, Modal } from '@/components'
import { fadeIn } from '@/utils'

export default function ProjectCard({ data }) {
  const { id, imagesUrl, title, description, tags, liveUrl, codeUrl } = data
  const [isOverlayOpen, setIsOverlayOpen] = useState(false)
  const [screenSize, setScreenSize] = useState(0)

  useEffect(() => {
    setScreenSize(window.innerWidth)

    window.addEventListener('resize', () => {
      setScreenSize(window.innerWidth)
    })

    return () => {
      window.removeEventListener('resize', () => {
        setScreenSize(window.innerWidth)
      })
    }
  }, [])

  const openOverlay = () => screenSize >= 900 && setIsOverlayOpen(true)
  const closeOverlay = () => setIsOverlayOpen(false)

  return (
    <>
      {/* card */}
      <article className='details__card_wrapper flex_center gap-2'>
        <motion.div
          className='details__card card_styles'
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

          {/* rigth tab */}
          <section className='absolute -right-[31px] top-[40px] flex_center justify-evenly h-[30px] w-[30px]'>
            <div className='details__card_tab_r flex_center hover:text-accent-2' onClick={openOverlay}>
              <TbArrowBigRightLines className='w-[20px] h-[20px]' />
            </div>
          </section>
          {/* below tabs */}
          <section className='absolute -bottom-[31px] flex_center justify-evenly h-[30px] w-full'>
            <div className='details__card_tab_b flex_center hover:text-accent-2'>
              <Link href={liveUrl} target='_blank'>
                <TbWorldWww className='w-[20px] h-[20px]' />
              </Link>
            </div>
            <div className='details__card_tab_b flex_center hover:text-accent-2'>
              <Link href={codeUrl} target='_blank'>
                <TbCode className='w-[20px] h-[20px]' />
              </Link>
            </div>
          </section>
        </motion.div>
      </article>

      {/* modal only on 900 and above */}
      {screenSize >= 900 && (
        <AnimatePresence key={id}>
          {isOverlayOpen && (
            <Overlay key={id} closeOverlay={closeOverlay}>
              <Modal data={data} closeOverlay={closeOverlay} />
            </Overlay>
          )}
        </AnimatePresence>
      )}
    </>
  )
}
