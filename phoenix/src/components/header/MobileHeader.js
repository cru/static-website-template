import React, { Fragment, useState } from 'react'
import { Col, Row } from 'antd/lib/grid'
import Drawer from 'antd/lib/drawer'
import { MenuOutlined, CloseOutlined } from '@ant-design/icons'

import { sections } from '../../constants'

export const MobileHeader = (props) => {
  const [showDrawer, setShowDrawer] = useState(false)

  const handleClick = (section) => {
    setShowDrawer(false)
    props.handleClick(section)
  }

  const toggleDrawer = () => {
    setShowDrawer(!showDrawer)
  }

  return (
    <Fragment>
      <Row
        align='middle'
        gutter={32}
        style={{ paddingTop: '1rem', paddingBottom: '1rem' }}
      >
        <Col span={24}>
          <Row justify='end'>
            <Col>
              <MenuOutlined className='btn-header' onClick={toggleDrawer} />
            </Col>
          </Row>
        </Col>
      </Row>
      <Drawer
        visible={showDrawer}
        onClose={toggleDrawer}
        placement='right'
        title={<h3 style={{ margin: 0 }}>Navigation</h3>}
        headerStyle={{ backgroundColor: '#ecbe7a' }}
        bodyStyle={{ backgroundColor: '#f1f1f1' }}
        closeIcon={<CloseOutlined style={{ color: '#2a2a2a' }} />}
      >
        <span className='btn-header-mobile' onClick={() => handleClick(sections.ABOUT)}>
          About
        </span>
        <br />
        <br />
        <span className='btn-header-mobile' onClick={() => handleClick(sections.MISSION)}>
          Mission
        </span>
        <br />
        <br />
        <span className='btn-header-mobile' onClick={() => handleClick(sections.CONTACT)}>
          Contact
        </span>
        <br />
        <br />
        <span className='btn-header-mobile' onClick={() => handleClick(sections.TEAM)}>
          Our Team
        </span>
        <br />
        <br />
        <span
          className='btn-header-mobile'
          onClick={() => handleClick(sections.PARTNERS)}
        >
          Partners
        </span>
        <br />
        <br />
        <span className='btn-header-mobile' onClick={() => handleClick(sections.DONATE)}>
          Donate
        </span>
        <br />
        <br />
        {/* <span className='btn-header-mobile' onClick={() => handleClick(sections.STORIES)}>
          Stories
        </span>
        <br />
        <br /> */}
      </Drawer>
    </Fragment>
  )
}
