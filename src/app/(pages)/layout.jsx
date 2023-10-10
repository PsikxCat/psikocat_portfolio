'use client'

import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

import './styles.css'
import { Navbar, SiteFrame, Transition } from '@/components'

export default function PagesLayout({ children }) {
  const pathname = usePathname()

  return (
    <div className=''>
      <motion.div key={pathname}>
        <Transition />
      </motion.div>

      <SiteFrame />

      <section className='page_wrapper flex_center'>
        {children}
      </section>

      <Navbar />
    </div>
  )
}
