'use client'

import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

import { navLinks, fadeIn } from '@/utils'
import { Tab } from '@/components'

export default function Navbar() {
  const pathname = usePathname()

  return (
    <section className={`fixed flex_center items-end md:items-center md:justify-end bottom-[21px] md:bottom-[30px] md:right-[45px] z-[150] w-[calc(100vw-40px)] md:w-[33px] h-[33px] md:h-[calc(100svh_-_calc(30px_+_2vw)_-_30px)] font-[400] ${pathname === '/home' ? 'lg:hidden' : ''}`}>
      <motion.nav
        className="flex_center md:flex-col w-[calc(100%-10px)] max-w-[600px] h-[90%] max-h-[600px] 2xl:max-h-[800px] gap-1"
        variants={fadeIn('up', 1, 10, 1)}
        initial='hidden'
        animate='visible'
      >
        {/* sombra trasera pestanas horizontal */}
        <div className='absolute md:hidden bottom-0 w-[calc(100%-2px)] h-[25px] bg-gradient-to-t from-[var(--color-base-darker)] via-[var(--color-base-darker)] to-transparent -z-10'/>

        {/* pestanas */}
        {navLinks.map(({ name, path, icon }) => (
          <Tab name={name} path={path} icon={icon} key={name} />
        ))}
      </motion.nav>
    </section>
  )
}
