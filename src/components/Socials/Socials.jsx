import Link from 'next/link'

import { RiGithubLine, RiLinkedinLine, RiInstagramLine } from 'react-icons/ri'
import { FaXTwitter } from 'react-icons/fa6'

export default function Socials() {
  return (
    <>
      <Link className='hover:text-accent transition-all duration-200'
        href={'https://github.com/psikxcat'}
        target='_blank'
      >
        <RiGithubLine />
      </Link>

      <Link className='hover:text-accent transition-all duration-200'
        href={'https://twitter.com/psiko_cat'}
        target='_blank'
      >
        <FaXTwitter />
      </Link>

      <Link className='hover:text-accent transition-all duration-200'
        href={'https://www.instagram.com/psiko_cat/'}
        target='_blank'
      >
        <RiInstagramLine />
      </Link>

      <Link className='hover:text-accent transition-all duration-200'
        href={'https://www.linkedin.com/in/arevalorichard/'}
        target='_blank'
      >
        <RiLinkedinLine />
      </Link>
    </>
  )
}
