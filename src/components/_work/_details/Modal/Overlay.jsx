'use client'

import { motion } from 'framer-motion'

import '../details.css'

export default function Overlay({ children, closeOverlay }) {
  const variants = {
    open: { backgroundColor: 'rgba(0, 0, 0, 0.7)' },
    closed: { backgroundColor: 'rgba(0, 0, 0, 0)' },
  }

  return (
    <motion.div
      className='details__overlay' onClick={closeOverlay}
      variants={variants}
      initial='closed'
      animate='open'
      exit='closed'
    >
      {children}
    </motion.div>
  )
}
