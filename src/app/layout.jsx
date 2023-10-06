import { Kumbh_Sans } from 'next/font/google'

import '@/app/globals.css'

const kumbh = Kumbh_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Richard Arévalo',
  description: 'Portafolio de Richard Arévalo - Desarrollador Frontend',
  twitterUsername: 'psiko_cat',
  icons: {
    favicon: '/public/favicon.ico',
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${kumbh.className}`}>
        <div className='main_wrapper'>
          {children}
        </div>
      </body>
    </html>
  )
}
