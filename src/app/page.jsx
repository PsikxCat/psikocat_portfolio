'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { motion } from 'framer-motion'

// parametros fadeIn: direction, delay, distance, duration
import { fadeIn } from '@/utils'
import { ParticlesContainer } from '@/components'

export default function RootPage() {
  const router = useRouter()

  useEffect(() => {
    const redirectTimeout = setTimeout(() => {
      router.push('/home')
    }, 3000)

    return () => clearTimeout(redirectTimeout)
  }, [router])

  return (
    <div className='flex_center absolute inset-0 bg-dark'>
      <main className='flex_center flex-col text-center mb-[15vh]'>
        <motion.div
          className='absolute inset-0'
          variants={fadeIn('down', 1.3, 0, 1)}
          initial='hidden'
          animate='visible'
        >
          <ParticlesContainer />
        </motion.div>

        <motion.h2
          className='font-semibold leading-none text-3xl'
          variants={fadeIn('down', 0, 0, 1)}
          initial='hidden'
          animate='visible'
        >
          richard arévalo
        </motion.h2>

        <motion.p
          className='font-light leading-none'
          variants={fadeIn('up', 0.5, 50, 1)}
          initial='hidden'
          animate='visible'
        >
          portfolio
        </motion.p>
      </main>
    </div>
  )
}
