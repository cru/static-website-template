import React from 'react'
import { Col, Row } from 'antd/lib/grid'

export const Footer = () => {
  return (
    <div className='footer text-center'>
      <div style={{ marginTop: '2rem' }}>
        <Row justify='center' align='middle' gutter={16}>
          <Col xl={3}>
            <picture>
              <source srcSet={'/images/partners/asf-logo.webp'} type='image/webp' />
              <img
                src='/images/partners/asf-logo.png'
                className='logo-img-small'
                alt='asf'
              />
            </picture>
          </Col>
          <Col xl={3}>
            <picture>
              <source srcSet={'/images/partners/cru-logo.webp'} type='image/webp' />
              <img
                src='/images/partners/cru-logo.png'
                className='logo-img-small'
                alt='cru'
              />
            </picture>
          </Col>
        </Row>
      </div>
    </div>
  )
}
