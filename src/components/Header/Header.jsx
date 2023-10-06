import { Socials } from '@/components'

export default function Header() {
  return (
    <header className='header'>
      <section className='header_title'>
        <span className='font-[500]'>richard</span>

        <div className='h-0 absolute bottom-0 -right-[23%]'>
          <span className='absolute right-0 font-extralight'>
            arévalo<span className='text-accent font-semibold'>.</span>
          </span>
        </div>
      </section>

      <section className='header_icons space-x-3'>
        <Socials />
      </section>
    </header>
  )
}
