'use client'

import Image from 'next/image'
import { IoCloseCircleOutline } from 'react-icons/io5'

import '../details.css'
import { ModalSlider } from '@/components'

export default function Modal({ data, closeOverlay }) {
  const { imagesUrl, title, extended_description, tags } = data

  return (
    <article className='details__modal_wrapper flex_center' onClick={(e) => e.stopPropagation()}>
      <div className='details__modal card_styles'>
        <button className='absolute top-[10px] right-[10px] text-[28px] text-accent-2 cursor-pointer' onClick={closeOverlay}>
          <IoCloseCircleOutline />
        </button>

        {/* slider & links */}
        <section className='w-[65%]'>
          {/* slider */}
          <section className='h-[63%] bg-accent-2 rounded-br-[12px] overflow-hidden'>
            <ModalSlider imagesUrl={imagesUrl} />
          </section>

          {/* icons & links */}
          <section className='h-[37%] flex_center_column justify-evenly mt-2'>
            {/* icons */}
            <div className='h-auto w-full flex_center gap-5'>
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
            <div className='flex_center justify-evenly h-[75px] w-full text-[18px] tracking-wider font-semibold uppercase text-accent-2'>
              <span className='cursor-pointer text_shadow'>Live Project</span>
              <span className='cursor-pointer text_shadow'>View Code</span>
            </div>
          </section>
        </section>

        {/* info */}
        <section className='w-[35%] p-5 pt-0'>
          {/* title */}
          <div className='h-[15%] flex items-center p-2 uppercase tracking-wide text-accent font-bold text-[20px]'>{title}</div>
          {/* description */}
          <div className='h-[85%] text-[clamp(10px,1px_+_1.3vw,18px)] leading-tight overflow-y-scroll bg-zinc-500/10 p-4 rounded-[12px]'>
            {extended_description}
          </div>
        </section>
      </div>
    </article>
  )
}
