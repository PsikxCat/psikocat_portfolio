import '@/styles/globals.css'

export default function PagesLayout({ children }) {
  return (
    <>
      <div className='frame'>
        <div className='frame_fillTop'/>
        <div className='frame_fillBottom'/>
        <div className='frame_t1'/>
        <div className='frame_b1'/>
        <div className='frame_l'/>
        <div className='frame_r'/>
      </div>

      <section className='page-wrapper'>
        {children}
      </section>
    </>
  )
}
