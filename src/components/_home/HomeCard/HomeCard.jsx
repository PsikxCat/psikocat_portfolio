import { CardFlipCoin } from '@/components'

export default function HomeCard() {
  return (
    <section className='relative smd:card_styles min-h-[300px] smd:min-w-[50px] flex_center_column lg:justify-start p-8 lg:w-[60%]'>
      {/* texto */}
      <div className='z-20'>
        <h1 className='lg:text-start mb-6 h1'>
          Creando Experiencias <br /> Digitales <span className='text-accent'>Memorables.</span>
        </h1>

        <p className='lg:text-start max-[1200px]:max-w-[500px]'>
          Mi objetivo es crear experiencias digitales que cautiven, conecten y dejen huella en un mundo digital en constante cambio.
        </p>
      </div>

      {/* imagen */}
      <CardFlipCoin />
    </section>
  )
}
