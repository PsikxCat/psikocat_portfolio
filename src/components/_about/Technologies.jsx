import Image from 'next/image'

import { techsData } from '@/utils'

export default function Technologies() {
  const techs = Object.values(techsData)

  return (
    <div className='grid grid-cols-2 md:grid-cols-4 gap-5 bg-white/5 p-4 rounded-md'>
    {techs.map((item) => (
          <div className='flex_center_column' key={item.id}>
          <div className='h-[40px] w-[40px] flex_center rounded-md' style={{ backgroundColor: item.color }}>
            <Image src={item.imageUrl} alt={item.name} width={30} height={30}/>
          </div>
          <h6 className='text-[10px] uppercase tracking-tighter font-light'>{item.name}</h6>
        </div>
    ))}
    </div>

  )
}
