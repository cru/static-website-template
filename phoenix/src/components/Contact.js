import { useState } from 'react'
import { animated, useTransition } from '@react-spring/web'
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline'
import ScrollTrigger from 'react-scroll-trigger'

const Contact = ({ scrollRef }) => {
  const [visible, setVisible] = useState(false)
  const transitions = useTransition(visible ? contactItems : [], {
    from: {
      transform: 'translate3d(0, 50px, 0)',
      opacity: 0,
    },
    enter: {
      transform: 'translate3d(0, 0, 0)',
      opacity: 1,
    },
    trail: 150,
  })

  return (
    <div ref={scrollRef} className='container section text-center '>
      <ScrollTrigger onEnter={() => setVisible(true)}>
        <div className='space-y-12'>
          <h1>Contact Us</h1>
          <div className='grid lg:grid-cols-3 gap-16'>
            {transitions((style, item) => (
              <animated.div style={style}>{item}</animated.div>
            ))}
          </div>
        </div>
      </ScrollTrigger>
    </div>
  )
}

const contactItems = [
  <div className='text-center space-y-2'>
    <h4>Email</h4>
    <EnvelopeIcon className='h-12 w-12 m-auto text-brand' />
    <a href='mailto:email@domain.ca' className='block'>
      email@domain.ca
    </a>
  </div>,
  <div className='text-center space-y-2'>
    <h4>Phone/Fax</h4>
    <PhoneIcon className='h-12 w-12 m-auto text-brand' />
    <span className='block'>Phone: 403-283-4449</span>
  </div>,
  <div className='text-center space-y-2'>
    <h4>Address</h4>
    <MapPinIcon className='h-12 w-12 m-auto text-brand' />
    <span>123 Willow Street Havenbrook, Anytown 56789 Dreamland</span>
  </div>,
]

export default Contact
