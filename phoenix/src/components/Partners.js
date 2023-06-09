import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'

import { shuffle } from '../utils'

export const Partners = (props) => {
  const [partners, setPartners] = useState([])

  useEffect(() => {
    const items = [
      <div key='spine'>
        <a href='https://calgaryspine.ca' target='_blank' rel='noopener noreferrer'>
          <picture>
            <source
              srcSet={'/images/partners/spine-program-logo.webp'}
              type='image/webp'
            />
            <img
              className='partner-img'
              src={'/images/partners/spine-program-logo.png'}
              alt='partner'
            />
          </picture>
        </a>
      </div>,
      <div key='uofa'>
        <a
          href='https://www.ualberta.ca/surgery/divisions/neurosurgery/fellowship.html'
          target='_blank'
          rel='noopener noreferrer'
        >
          <picture>
            <source srcSet={'/images/partners/uofa.webp'} type='image/webp' />
            <img
              className='partner-img'
              src={'/images/partners/uofa.png'}
              alt='partner'
            />
          </picture>
        </a>
      </div>,
    ]

    setPartners(shuffle(items))
  }, [])

  const settings = {
    // dots: true,
    arrows: false,
    // infinite: true,
    // autoplay: true,
    slidesToShow: 2,
    // slidesToScroll: 1,
    // speed: 1000,
    // autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  }

  return (
    <div
      ref={props.partnersRef}
      className='container section text-center'
      style={{ minHeight: '35vh' }}
    >
      <h1>Partners</h1>
      <Slider {...settings}>{partners}</Slider>
    </div>
  )
}
