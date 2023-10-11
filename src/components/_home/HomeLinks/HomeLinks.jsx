'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

import { fadeIn } from '@/utils'

export default function HomeLinks() {
  return (
    <section className='nav hidden lg:flex'>
      <div className='h2 flex_center_column items-end p-3 gap-y-6 tracking-tight font-[200]'>
        <motion.div
          variants={fadeIn('right', 1, 80, 1.5)}
          initial='hidden'
          animate='visible'
        >
          <Link className='text_shadow' href='/work'>portfolio</Link>
        </motion.div>

        <motion.div
          variants={fadeIn('right', 1.2, 60, 1.3)}
          initial='hidden'
          animate='visible'
        >
          <Link className='text_shadow' href='/about'>sobre mi</Link>
        </motion.div>

        <motion.div
          variants={fadeIn('right', 1.4, 40, 1.1)}
          initial='hidden'
          animate='visible'
        >
          <Link className='text_shadow' href='/contact'>contacto</Link>
        </motion.div>
      </div>
    </section>
  )
}
