import { HomeCard, HomeLinks } from '@/components'

export default function HomePage() {
  return (
    <div className="page flex_center select-none">
      <div className='flex_center_column items-start justify-between lg:flex-row p-3 lg:w-[90%] xl:-[80%]'>
        {/* card */}
        <HomeCard />

        {/* links */}
        <HomeLinks />
      </div>
    </div>
  )
}
