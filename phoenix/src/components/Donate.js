import React from 'react'
import { Col, Row } from 'antd/lib/grid'
import Divider from 'antd/lib/divider'
import Button from 'antd/lib/button'

export const Donate = (props) => {
  return (
    <div ref={props.donateRef} className='section section-light-left'>
      <Row align='middle' className='align-middle container'>
        <Col xl={12} lg={12} md={24} className='section-light-left-content'>
          <Row gutter={[32, 32]}>
            <Col span={8} className='text-center'>
              <h2>$20</h2>
              <Divider />
              {/* <span>
                can help Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                vestibulum mi id mi euismod, eu pulvinar.
              </span> */}
            </Col>
            <Col span={8} className='text-center'>
              <h2>$50</h2>
              <Divider />
              {/* <span>
                can help Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                eu ipsum a.
              </span> */}
            </Col>
            <Col span={8} className='text-center'>
              <h2>$100</h2>
              <Divider />
              {/* <span>
                can help Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                nisi magna, fermentum in leo id, sodales convallis nulla.
              </span> */}
            </Col>
          </Row>
          <h5>
            Donations are used to support innovative research projects within the Province
            of Alberta that aim to improve our understanding and management of spinal
            disorders
          </h5>
          <Row style={{ marginTop: '4rem' }}>
            <Col span={24} className='text-center'>
              <Button
                type='primary'
                size='large'
                shape='round'
                href='https://www.canadahelps.org/en/charities/alberta-spine-foundation/'
                target='_blank'
                style={{ paddingTop: 0 }}
              >
                Donate Now
              </Button>
            </Col>
          </Row>
        </Col>
        <Col xl={12} lg={12} md={24} className='hero-panel'>
          <h1 className='align-middle text-center'>How Your Money Helps</h1>
        </Col>
      </Row>
    </div>
  )
}
