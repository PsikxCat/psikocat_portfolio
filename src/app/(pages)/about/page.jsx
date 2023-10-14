'use client'

import { useRouter } from 'next/navigation'

import { Technologies } from '@/components'

export default function AboutPage() {
  const router = useRouter()

  return (
    <div className="page flex_center flex flex-col gap-1 p-10">
      <Technologies />

      <section>
        <button
          className="btn btn-primary"
          onClick={() => router.push('/home')}
        >
          Go to Home Page
        </button>
      </section>
    </div>
  )
}
