'use client'

import { motion } from 'framer-motion'

import { CardFlipCoin } from '@/components'
import { fadeIn } from '@/utils'

export default function HomeCard() {
  return (
    <motion.section
      className='relative card_styles min-h-[300px] smd:min-w-[50px] flex_center_column lg:justify-start p-8 lg:w-[60%]'
      variants={fadeIn('down', 0.5, 80, 2)}
      initial='hidden'
      animate='visible'
    >
      {/* texto */}
      <div className='z-20'>
        <h1 className='lg:text-start mb-6 h1'>
          Creando Experiencias <br /> Digitales <span className='text-accent'>Memorables.</span>
        </h1>

        <p className='lg:text-start max-[1200px]:max-w-[500px]'>
          Mi objetivo es crear experiencias digitales que cautiven, conecten y dejen huella en un mundo digital en constante cambio.
        </p>
      </div>

      {/* imagen */}
      <motion.div
        variants={fadeIn('up', 2.5, 0, 4)}
        initial='hidden'
        animate='visible'
      >
        <CardFlipCoin />
      </motion.div>
    </motion.section>
  )
}
