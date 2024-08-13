import Image from 'next/image'
import Link from 'next/link'

import { BsArrowRight } from 'react-icons/bs'

export default function ProjectsSliderCard({ title, imagesUrl, liveUrl }) {
  return (
    <>
      {/* name tag */}
      <span className='absolute top-0 right-0 tracking-1 text-[12px] font-bold uppercase px-2 text-base bg-accent opacity-90 rounded-bl-lg'>
        {title}
      </span>

      {/* imagen | (h-0 pb-[60%] mantiene relacion de aspecto 5:3) */}
      <div className='w-full h-0 pb-[60%]'>
        <Image
          className='object-cover object-center'
          src={imagesUrl[1]} alt='project'
          width={500}
          height={300}/>
      </div>

      {/* gradient */}
      <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[var(--color-base-dark)] to-[var(--color-accent)] opacity-0 group-hover:opacity-80 transition-all duration-300'/>

      {/* content */}
      <section className='group text_shadow font-semibold absolute bottom-0 translate-y-full group-hover:-translate-y-20 lg:group-hover:-translate-y-25 transition-all duration-300'>
        <Link className='cursor-pointer flex_center gap-x-2 text-[13px] tracking-[0.2em]' href={liveUrl} target='_blank'>
          <h4 className='delay-100'>LIVE</h4>
          <h4 className='delay-150 translate-y-[500%] group-hover:translate-y-0 transition-all duration-300'>PROJECT</h4>
          <span className='text-accent'><BsArrowRight /></span>
        </Link>
      </section>
    </>
  )
}
