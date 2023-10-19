'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

import { ProjectsSlider } from '@/components'
import { fadeIn } from '@/utils'

export default function WorkPage() {
  return (
    <div className="page flex_center">
      <div className='flex p-3 w-full lg:w-[90%] xl:-[80%] md:pb-[10svh] lg:pb-0'>
        <section className='flex_center_column lg:justify-between lg:flex-row gap-[3vh] w-full lg:pb-0'>
          {/* title */}
          <motion.section
            className='card_styles lg:w-[50%] p-9 md:mb-10 xl:mb-24 flex_center_column lg:items-start gap-[2vh]'
            variants={fadeIn('down', 0.5, 80, 0.5)}
            initial='hidden'
            animate='visible'
          >
            <h1 className="h1 text-center lg:text-start">
              Proyectos<span className='text-accent'>.</span>
            </h1>

            <p className='max-w-[600px] w-[90%] text-center lg:text-start'>
              Una selección de aplicaciones web que fusionan diseño, usabilidad y tecnología para comunicar de manera efectiva.
            </p>
          </motion.section>

          {/* works */}
          <motion.section
            className='w-[95%] lg:w-[60%] flex_center-column p-5'
            variants={fadeIn('up', 0.5, 80, 0.5)}
            initial='hidden'
            animate='visible'
            >
            {/* slider */}
            <div className=''>
              <ProjectsSlider />
            </div>

            {/* link to details page */}
            <div className='w-full flex_center pt-3'>
              <Link href='/work/details'>
                <p className='cursor-pointer flex_center font-medium text_shadow text-accent-2'>
                  Ver Detalles
                </p>
              </Link>
            </div>
          </motion.section>
        </section>
      </div>
    </div>
  )
}
