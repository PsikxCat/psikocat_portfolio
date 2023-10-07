'use client'

import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

import './styles.css'
import { SiteFrame, Transition } from '@/components'

export default function PagesLayout({ children }) {
  const pathname = usePathname()

  return (
    <>
      <motion.div key={pathname}>
        <Transition />
      </motion.div>

      <SiteFrame />

      <section className='page-wrapper flex_center'>
        {children}
      </section>
    </>
  )
}
