'use client'

import { useRouter } from 'next/navigation'

export default function HomePage() {
  const router = useRouter()

  return (
    <div className="page flex_center flex flex-col gap-1 p-10">
      {/* HomePage */}

      <div className="h-[200px] w-[100px] bg-dark border flex_center"
        onClick={() => router.push('/about')}
      >about</div>
      <div className="h-[200px] w-[100px] bg-green-500/20 border"></div>
      <div className="h-[200px] w-[100px] bg-green-500/20 border"></div>
      <div className="h-[200px] w-[100px] bg-green-500/20 border"></div>
    </div>
  )
}
