import './styles.css'
import { SiteFrame } from '@/components'

export default function PagesLayout({ children }) {
  return (
    <>
      <SiteFrame />

      <section className='page-wrapper flex_center'>
        {children}
      </section>
    </>
  )
}
