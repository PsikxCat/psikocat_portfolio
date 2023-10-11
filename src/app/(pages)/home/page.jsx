import { HomeCard, HomeLinks } from '@/components'

export default function HomePage() {
  return (
    <div className="page flex_center select-none">
      <section className='flex_center items-start justify-between p-3 lg:w-[90%] xl:-[80%] pb-[10svh] lg:pb-0'>
        {/* card */}
        <HomeCard />

        {/* links */}
        <HomeLinks />
      </section>
    </div>
  )
}
