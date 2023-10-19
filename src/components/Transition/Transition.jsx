'use client'

import { motion } from 'framer-motion'

const variants = {
  initial: { y: '100%', height: '100%' },
  animate: { y: '0%', height: '0%' },
}

const layerStyles = 'fixed left-0 right-0 bottom-full ml-[20px] md:ml-[40px] w-[calc(100vw-40px)] md:w-[calc(100vw-80px)] h-screen'

export default function Transition() {
  return (
    <>
      <motion.div className={`${layerStyles} z-50 bg-darker`}
        variants={variants}
        initial='initial'
        animate='animate'
        transition={{ delay: 0, duration: 0.3, ease: 'easeInOut' }}
      />

      <motion.div className={`${layerStyles} z-40 bg-stone-900`}
        variants={variants}
        initial='initial'
        animate='animate'
        transition={{ delay: 0.2, duration: 0.3, ease: 'easeInOut' }}
      />

      <motion.div className={`${layerStyles} z-30 bg-stone-950`}
        variants={variants}
        initial='initial'
        animate='animate'
        transition={{ delay: 0.4, duration: 0.3, ease: 'easeInOut' }}
      />
    </>
  )
}
