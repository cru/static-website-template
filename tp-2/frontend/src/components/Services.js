import { useState } from 'react'
import { animated, useTransition } from '@react-spring/web'
import ScrollTrigger from 'react-scroll-trigger'
import Image from 'next/image'

import serviceImg1 from 'public/images/service1.png'
import serviceImg2 from 'public/images/service2.png'
import serviceImg3 from 'public/images/service3.png'

const Services = ({ scrollRef }) => {
  const [visible, setVisible] = useState(true)
  const transitions = useTransition(visible ? serviceItems : [], {
    from: {
      transform: 'translate3d(-50px, 0, 0)',
      opacity: 0,
    },
    enter: {
      transform: 'translate3d(0, 0, 0)',
      opacity: 1,
    },
    trail: 150,
  })

  return (
    <div ref={scrollRef} className='container section text-center'>
      <ScrollTrigger onEnter={() => setVisible(true)}>
        <h1 className='mb-6'>Services</h1>
        <div className='grid lg:grid-cols-2 gap-16'>
          {transitions((style, item) => (
            <animated.div style={style}>{item}</animated.div>
          ))}
        </div>
      </ScrollTrigger>
    </div>
  )
}

const serviceItems = [
  <div className='flex text-start bg-gray-100'>
    <Image
      src={serviceImg1}
      alt='empty'
      width={175}
      placeholder='blur'
      className='object-cover'
    />
    <div className='p-6'>
      <h3>Service 1</h3>
      <hr />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non.</p>
    </div>
  </div>,
  <div className='flex text-start bg-gray-100'>
    <Image
      src={serviceImg2}
      alt='empty'
      width={175}
      placeholder='blur'
      className='object-cover'
    />
    <div className='p-6'>
      <h3>Service 2</h3>
      <hr />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non.</p>
    </div>
  </div>,
  <div className='flex text-start bg-gray-100'>
    <Image
      src={serviceImg3}
      alt='empty'
      width={175}
      placeholder='blur'
      className='object-cover'
    />
    <div className='p-6'>
      <h3>Service 3</h3>
      <hr />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse finibus
        vehicula turpis, eu eleifend lorem scelerisque a. Quisque sed turpis.
      </p>
    </div>
  </div>,
]

export default Services
