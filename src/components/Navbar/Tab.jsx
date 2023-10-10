'use client'

import { useRouter, usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'

import './Tab.css'

export default function Tab({ name, path, icon }) {
  const router = useRouter()
  const pathname = usePathname()

  return (
    <motion.div
      className={`flex_center tab ${pathname === path && 'tab_active'}`}
      key={name}
      onClick={() => router.push(path)}
    >
      <Link className='tab_text' href={path}>
        <span className='hidden smd:flex'>{name}</span>
        <span className='smd:hidden'>{icon}</span>
      </Link>
    </motion.div>
  )
}
