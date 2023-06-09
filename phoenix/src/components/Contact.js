import React, { useState } from 'react'
import { Transition, animated } from '@react-spring/web'
import { Col, Row } from 'antd/lib/grid'
import { Mail, Phone, MapPin } from 'react-feather'
import ScrollTrigger from 'react-scroll-trigger'

import { isMobile } from '../constants'

export const Contact = (props) => {
  const [visible, setVisible] = useState(false)
  const AnimatedCol = animated(Col)
  const contactItems = [
    <div key='email'>
      <h4>Email</h4>
      <span className='color-primary hero-icon'>
        <Mail size={48} />
      </span>
      <span>
        <b>Patti Sullivan</b> <br />
        <a href='mailto:patti.sullivan@ucalgary.ca'>patti.sullivan@ucalgary.ca</a>
        <br />
        or <a href='mailto:pbaker@ucalgary.ca'>pbaker@ucalgary.ca</a>
      </span>
    </div>,
    <div key='phone'>
      <h4>Phone/Fax</h4>
      <span className='color-primary hero-icon'>
        <Phone size={48} />
      </span>
      <span>
        <b>Patti Sullivan</b> <br />
        Phone: 403-283-4449
        <br />
        Fax: 403-283-5559{' '}
      </span>
    </div>,
    <div key='address'>
      <h4>Address</h4>
      <span className='color-primary hero-icon'>
        <MapPin size={48} />
      </span>
      <span>
        12th Fl., <br />
        1403 - 29 Street NW, <br />
        Calgary T2N 2T9
      </span>
    </div>,
  ]

  return (
    <div
      ref={props.contactRef}
      className='container section text-center'
      style={{ minHeight: isMobile ? '55vh' : '30vh' }}
    >
      <ScrollTrigger onEnter={() => setTimeout(() => setVisible(true), 200)}>
        <h1>Contact Us</h1>
        {visible && (
          <Row justify='center' gutter={[32, 32]}>
            <Transition
              native
              config={{ mass: 2 }}
              items={contactItems}
              keys={(item) => item.key}
              from={{
                transform: 'translate3d(0, 50px, 0)',
                opacity: '0',
              }}
              enter={{
                transform: 'translate3d(0, 0, 0)',
                opacity: '1',
              }}
              trail={100}
            >
              {(styles, item) => (
                <AnimatedCol xl={8} lg={8} md={8} sm={12} xs={12} style={styles}>
                  {item}
                </AnimatedCol>
              )}
            </Transition>
          </Row>
        )}
      </ScrollTrigger>
    </div>
  )
}
