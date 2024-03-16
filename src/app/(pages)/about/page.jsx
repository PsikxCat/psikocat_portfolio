'use client'

import { motion } from 'framer-motion'

import { fadeIn } from '@/utils'
import { Chatbot, Technologies } from '@/components'

export default function AboutPage() {
  return (
    <div className="page flex_center">
      <div className='flex flex-col items-center gap-y-[5vh] w-full px-3 py-8 lg:w-[90%] xl:-[80%] md:pb-[5svh] lg:pb-0'>
        {/* title & skills */}
        <section className='flex_center_column lg:justify-evenly lg:min-h-[600px] lg:flex-row gap-y-[5vh] w-full lg:pb-0'>
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
            <h1 className='h1 text-muted font-[300] tracking-tighter'>Skills<span className='text-accent'>.</span></h1>
            <Technologies />
          </motion.section>
        </section>

        {/* story */}
        <section className='w-[80%] hidden sm:flex flex-col gap-4 py-8'>
          <h1 className='h1'>Mi historia<span className='text-accent'>.</span></h1>

          <div className='p-5 rounded-xl flex flex-col gap-4 bg-black/70'>
            <p className='text-left'>Mi trayectoria hacia el desarrollo web es una historia de adaptación y crecimiento.</p>
            <p className='text-left'>Desde mis primeros emprendimientos, he buscado desafíos que fomentaran tanto mi desarrollo profesional como personal. Inicié mi viaje empresarial con una tienda/taller de estampación de camisetas, donde no solo adquirí habilidades técnicas en diseño utilizando herramientas como Photoshop, CorelDraw y Adobe Illustrator, sino que también aprendí la importancia de satisfacer las necesidades del cliente y ofrecer soluciones personalizadas que reflejaran su identidad única.</p>
            <p className='text-left'>Posteriormente, mi trayectoria me llevó al servicio técnico de una tienda especializada en la venta y reparación de computadoras, donde desarrollé sólidas habilidades en resolución de problemas técnicos y comunicación efectiva con los clientes. Sin embargo, la crisis sanitaria global impactó mis negocios, obligándome a replantear mi futuro.</p>
            <p className='text-left'> Fue entonces cuando el estudio del desarrollo web, que hasta entonces había sido un pasatiempo, se convirtió en una opción viable para generar ingresos. Decidí sumergirme por completo en esta disciplina, aprovechando mi creatividad y capacidad para resolver problemas. Durante los últimos dos años, he dedicado tiempo y esfuerzo para perfeccionar mis habilidades en este campo, convirtiéndolo en una verdadera pasión.</p>
          </div>

        </section>

        <Chatbot />
      </div>
    </div>
  )
}
