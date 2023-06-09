import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import { Col, Row } from 'antd/lib/grid'

import { shuffle } from '../utils'

export const Stories = (props) => {
  const [stories, setStories] = useState([])

  useEffect(() => {
    const items = [
      <div key={'1'}>
        <h4>Patient 1, 2016-2017</h4>
        <h5>University of Calgary, Canada</h5>
        <br />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mattis non nibh in
          ultrices. Orci varius natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus. Praesent ullamcorper porta urna quis rhoncus. Duis
          commodo tellus dictum orci ultricies elementum. Mauris pellentesque molestie
          velit, nec venenatis lacus mollis sed. Suspendisse et mauris eu erat
          pellentesque consectetur. Morbi in gravida nisi. Curabitur et facilisis diam,
          vel congue ex. Maecenas quis mauris porttitor, ullamcorper mi vel, lacinia ante.
          Phasellus quis imperdiet nisl, finibus tempor lectus. Mauris at lacinia quam, ac
          efficitur velit. Etiam ut condimentum ex. Suspendisse fermentum odio vel magna
          pharetra ornare.
        </p>
      </div>,
      <div key={'2'}>
        <h4>Patient 2, 2015-2016</h4>
        <h5>University of Alberta, Canada</h5>
        <br />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mi dolor, vehicula
          ac gravida ut, pulvinar ac orci. Nulla a sollicitudin lorem. In ac lacus auctor,
          aliquam ex non, mollis erat. Mauris finibus lorem sed tellus consectetur,
          lacinia aliquet diam.
        </p>
      </div>,
      <div key={'3'}>
        <h4>Patient 3, 2019-2020</h4>
        <h5>Foothills Medical Center, Canada</h5>
        <br />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer suscipit
          convallis sollicitudin. Duis in diam vehicula, venenatis sapien vel, ullamcorper
          neque. Nam placerat feugiat odio ut condimentum. Proin dignissim nisi et elit
          elementum faucibus. Nullam malesuada ligula at venenatis eleifend. Praesent non
          dui eget tellus consectetur molestie. Ut pulvinar vehicula risus, et rutrum quam
          ultrices non. Curabitur hendrerit lectus id leo scelerisque, nec varius felis.
        </p>
      </div>,
    ]

    setStories(shuffle(items))
  }, [])

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 10000,
    fade: true,
  }

  return (
    <div ref={props.storiesRef} className='section section-light-right'>
      <Row align='middle' className='align-middle container'>
        <Col span={12}>
          <picture>
            <source srcSet={'/images/banner_2.webp'} type='image/webp' />
            <img className='hero-img' src={'/images/banner_2.jpg'} alt='banner' />
          </picture>
        </Col>
        <Col span={12} style={{ paddingLeft: '3rem' }}>
          <h1>Patient Stories</h1>
          <Slider {...settings}>{stories}</Slider>
        </Col>
      </Row>
    </div>
  )
}
