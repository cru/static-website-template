import Image from 'next/image'

import cruLogo from 'public/images/cru-logo.png'

const Footer = () => {
  return (
    <footer className='flex flex-col h-24 w-full items-center justify-center border-t gap-1'>
      <a
        className='flex items-center justify-center gap-1'
        href='https://cru.ucalgary.ca'
        target='_blank'
        rel='noopener noreferrer'
      >
        Built by
        <Image src={cruLogo} alt='CRU Logo' width={75} height={24} placeholder='blur' />
      </a>
      <small>
        Interest in your own custom website? Contact us at{' '}
        <a href='mailto:cru@ucalgary.ca'>cru@ucalgary.ca</a>
      </small>
    </footer>
  )
}

export default Footer
