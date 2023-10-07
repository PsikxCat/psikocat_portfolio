'use client'
import { motion } from 'framer-motion'

import { Socials } from '@/components'
import { fadeIn } from '@/utils'

export default function Header() {
  return (
    <header className='header'>
      {/* titulo */}
      <section className='header_title'>
        <motion.span
          className='font-[500]'
          variants={fadeIn('right', 0.5, 0, 2.5)}
          initial='hidden'
          animate='visible'
        >
          richard
        </motion.span>

        <div className='h-0 absolute bottom-0 -right-[23%]'>
          <motion.span
            className='absolute right-0 font-extralight'
            variants={fadeIn('left', 1, 50, 2)}
            initial='hidden'
            animate='visible'
          >
            arévalo<span className='text-accent font-semibold'>.</span>
          </motion.span>
        </div>
      </section>
      {/* socials */}
      <section className='header_icons space-x-3'>
        <Socials />
      </section>
    </header>
  )
}
