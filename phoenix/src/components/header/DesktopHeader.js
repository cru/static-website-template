import React from 'react'
import { Col, Row } from 'antd/lib/grid'

import { sections } from '../../constants'

export const DesktopHeader = (props) => {
  return (
    <Row align='middle' gutter={32} style={{ paddingTop: '1rem', paddingBottom: '1rem' }}>
      <Col xl={12} lg={18} md={20} sm={24} xs={24}>
        <Row align='middle' gutter={32}>
          <Col>
            <span
              className='btn-header'
              onClick={() => props.handleClick(sections.ABOUT)}
            >
              About
            </span>
          </Col>
          <Col>
            <span
              className='btn-header'
              onClick={() => props.handleClick(sections.MISSION)}
            >
              Mission
            </span>
          </Col>
          <Col>
            <span
              className='btn-header'
              onClick={() => props.handleClick(sections.CONTACT)}
            >
              Contact
            </span>
          </Col>
          <Col>
            <span className='btn-header' onClick={() => props.handleClick(sections.TEAM)}>
              Our Team
            </span>
          </Col>
          <Col>
            <span
              className='btn-header'
              onClick={() => props.handleClick(sections.PARTNERS)}
            >
              Partners
            </span>
          </Col>
          <Col>
            <span
              className='btn-header'
              onClick={() => props.handleClick(sections.DONATE)}
            >
              Donate
            </span>
          </Col>
          {/* <Col>
            <span
              className='btn-header'
              onClick={() => props.handleClick(sections.STORIES)}
            >
              Stories
            </span>
          </Col> */}
        </Row>
      </Col>
    </Row>
  )
}
