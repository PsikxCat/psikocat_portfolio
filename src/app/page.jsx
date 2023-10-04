'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { motion } from 'framer-motion'

import { fadeIn } from '@/utils'

export default function RootPage() {
  const router = useRouter()

  useEffect(() => {
    const redirectTimeout = setTimeout(() => {
      router.push('/home')
    }, 2300)

    return () => clearTimeout(redirectTimeout)
  }, [router])

  return (
    <div className='flex-center absolute inset-0 bg-black'>
      <main className='flex-center flex-col text-center mb-[15vh]'>
        <motion.h2
          className='font-semibold leading-none'
          variants={fadeIn('down', 0, 0, 1)}
          initial='hidden'
          animate='visible'
        >
          Richard Arevalo
        </motion.h2>

        <motion.p
          className='font-light leading-none'
          variants={fadeIn('up', 0.5, 50, 1)}
          initial='hidden'
          animate='visible'
        >
          Portfolio
        </motion.p>
      </main>
    </div>
  )
}
