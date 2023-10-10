'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function CardFlipCoin() {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div
      className='absolute hidden w-[clamp(10rem,12rem_+_4vw,60rem)] smd:flex -bottom-[30%] -right-[15%] lg:bottom-[35%] 2xl:-right-[10%]'
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div className='relative'>
        <motion.div
          animate={{ rotateY: isFlipped ? 90 : 0, opacity: isFlipped ? 0 : 1 }}
          transition={{ duration: 0.2, type: 'spring', damping: 20 }}
        >
          <Image
            className='absolute opacity-90'
            src={'/images/profile-pic.png'}
            alt="richard's photo"
            width={350}
            height={350}
            priority
          />
        </motion.div>

        <motion.div
          animate={{ rotateY: isFlipped ? 0 : 90, opacity: isFlipped ? 1 : 0 }}
          transition={{ duration: 0.2, type: 'spring', damping: 20 }}
        >
          <Image
            className='opacity-90'
            src={'/images/psikocat-logo.png'}
            alt="richard's photo"
            width={350}
            height={350}
          />
        </motion.div>
      </div>
    </div>
  )
}
