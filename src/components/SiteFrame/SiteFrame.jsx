import { Header } from '@/components'

export default function SiteFrame() {
  return (
    <>
      <div className='frame'>
        <div className='frame_fillTop'/>
        <div className='frame_fillBottom'/>
        <div className='frame_t1'/>
        <div className='frame_b1'/>
        <div className='frame_b2'/>
        <div className='frame_l'/>
        <div className='frame_r'/>
        <div className='frame_fill_l'></div>
        <div className='frame_fill_r'></div>

        <span className='frame_text_left'>psikocat</span>
        <span className='frame_text_right'>portfolio</span>
      </div>

      <Header />
    </>
  )
}
