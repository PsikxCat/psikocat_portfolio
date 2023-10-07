'use client'

import { motion } from 'framer-motion'

const variants = {
  initial: { y: '100%', height: '100%' },
  animate: { y: '0%', height: '0%' },
}

export default function Transition() {
  return (
    <>
      <motion.div className='fixed left-0 right-0 bottom-full ml-[40px] max-[800px]:ml-[20px] w-[calc(100vw-80px)] max-[800px]:w-[calc(100vw-40px)] h-screen z-50 bg-dark'
        variants={variants}
        initial='initial'
        animate='animate'
        transition={{ delay: 0, duration: 0.3, ease: 'easeInOut' }}
      />

      <motion.div className='fixed left-0 rigth-0 bottom-full ml-[40px] max-[800px]:ml-[20px] w-[calc(100vw-80px)] max-[800px]:w-[calc(100vw-40px)] h-screen z-40 bg-stone-700'
        variants={variants}
        initial='initial'
        animate='animate'
        transition={{ delay: 0.2, duration: 0.3, ease: 'easeInOut' }}
      />

      <motion.div className='fixed left-0 rigth-0 bottom-full ml-[40px] max-[800px]:ml-[20px] w-[calc(100vw-80px)] max-[800px]:w-[calc(100vw-40px)] h-screen z-30 bg-dark'
        variants={variants}
        initial='initial'
        animate='animate'
        transition={{ delay: 0.5, duration: 0.4, ease: 'easeInOut' }}
      />
    </>
  )
}
