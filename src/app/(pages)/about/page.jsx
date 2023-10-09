'use client'

import { useRouter } from 'next/navigation'

export default function AboutPage() {
  const router = useRouter()

  return (
    <div className="page flex_center flex flex-col gap-1 p-10">
      <section>
        <h1 className="text-4xl font-bold">About Page</h1>
      </section>

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
