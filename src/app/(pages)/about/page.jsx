'use client'

import { motion } from 'framer-motion'

import { fadeIn } from '@/utils'
import { Technologies } from '@/components'

export default function AboutPage() {
  return (
    <div className="page flex_center">
      <div className='flex w-full px-3 py-8 lg:w-[90%] xl:-[80%] md:pb-[5svh] lg:pb-0'>
        <section className='flex_center_column lg:justify-evenly lg:flex-row gap-[8vh] w-full lg:pb-0'>
          {/* title */}
          <motion.section
            className='card_styles p-8 lg:w-[50%] xl:mb-24 flex_center_column sm:items-start gap-[2vh]'
            variants={fadeIn('down', 0.5, 80, 0.5)}
            initial='hidden'
            animate='visible'
          >
            <h1 className="h1 text-center sm:text-start">
            Innovación Web <span className='text-accent'>Creativa.</span>
            </h1>
            <p className='text-center sm:text-start max-w-[600px] w-full'>
              Mi enfoque en el desarrollo web se centra en la creatividad e innovación. A través de proyectos personales, he explorado desde sitios web interactivos hasta tecnologías emergentes. El compromiso con el aprendizaje constante me impulsa a mejorar habilidades y participar en proyectos web de impacto.
            </p>
          </motion.section>

          {/* skills */}
          <motion.section
            className='flex_center_column gap-3'
            variants={fadeIn('up', 0.5, 80, 0.5)}
            initial='hidden'
            animate='visible'
          >
            <h1 className='h1 text-muted font-[300] tracking-tighter'>Skills</h1>
            <Technologies />
          </motion.section>
        </section>
      </div>
    </div>
  )
}
