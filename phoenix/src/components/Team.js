import React from 'react'
import Slider from 'react-slick'
import { Col, Row } from 'antd/lib/grid'
import Divider from 'antd/lib/divider'

import { shuffle } from '../utils'
import { TeamMember } from './TeamMember'

export const Team = (props) => {
  const getCalgaryTeam = () => {
    const items = [
      <div key={'bouchard'}>
        <TeamMember
          fileName='calgary/bouchard'
          name='Dr. Jacques Bouchard'
          credentials='MD FRCSC'
          classes='team-img'
        />
      </div>,
      <div key={'cadotte'}>
        <TeamMember
          fileName='calgary/cadotte'
          name='Dr. David W. Cadotte'
          credentials='MD PhD FRCSC'
          classes='team-img'
        />
      </div>,
      <div key={'casha'}>
        <TeamMember
          fileName='calgary/casha'
          name='Dr. Steve Casha'
          credentials='MD PhD FRCSC'
          classes='team-img'
        />
      </div>,
      <div key={'cho'}>
        <TeamMember
          fileName='calgary/cho'
          name='Dr. Roger Cho'
          credentials='MD FRCSC'
          classes='team-img'
        />
      </div>,
      <div key={'duplessis'}>
        <TeamMember
          fileName='calgary/duplessis'
          name='Dr. Stephan du Plessis'
          credentials='MD FRCSC'
          classes='team-img'
        />
      </div>,
      <div key={'ferri-de-barros'}>
        <TeamMember
          fileName='calgary/ferri-de-barros'
          name='Dr. Fabio Ferri-de-Barros'
          credentials='MD MSc FRCSC'
          classes='team-img'
        />
      </div>,
      <div key={'hu'}>
        <TeamMember
          fileName='calgary/hu'
          name='Dr. Rick Hu'
          credentials='MD FRCSC'
          classes='team-img'
        />
      </div>,
      <div key={'jacobs'}>
        <TeamMember
          fileName='calgary/jacobs'
          name='Dr. W. Bradley Jacobs'
          credentials='MD FRCSC'
          classes='team-img'
        />
      </div>,
      <div key={'lewkonia'}>
        <TeamMember
          fileName='calgary/lewkonia'
          name='Dr. Peter Lewkonia'
          credentials='MD MSc FRCSC'
          classes='team-img'
        />
      </div>,
      <div key={'nicholls'}>
        <TeamMember
          fileName='calgary/nicholls'
          name='Dr. Fred Nicholls'
          credentials='MD MA FRCSC'
          classes='team-img'
        />
      </div>,
      <div key={'parsons'}>
        <TeamMember
          fileName='calgary/parsons'
          name='Dr. David Parsons'
          credentials='MD FRCSC'
          classes='team-img'
        />
      </div>,
      <div key={'salo'}>
        <TeamMember
          fileName='calgary/salo'
          name='Dr. Paul Salo'
          credentials='MD FRCSC'
          classes='team-img'
        />
      </div>,
      <div key={'soroceanu'}>
        <TeamMember
          fileName='calgary/soroceanu'
          name='Dr. Alex Soroceanu'
          credentials='MD CM MPH FRCSC'
          classes='team-img'
        />
      </div>,
      <div key={'swamy'}>
        <TeamMember
          fileName='calgary/swamy'
          name='Dr. Ganesh Swamy'
          credentials='MD PhD FRCSC'
          classes='team-img'
        />
      </div>,
      <div key={'thomas'}>
        <TeamMember
          fileName='calgary/thomas'
          name='Dr. Ken Thomas'
          credentials='MD MHSc FRCSC'
          classes='team-img'
        />
      </div>,
      <div key={'evaniew'}>
        <TeamMember
          fileName='calgary/evaniew'
          name='Dr. Nathan Evaniew'
          credentials='MD PhD FRCSC'
          classes='team-img'
        />
      </div>,
    ]

    return shuffle(items)
  }

  const getEdmontonTeam = () => {
    const items = [
      <div key={'fox'}>
        <TeamMember
          fileName='edmonton/fox'
          name='Dr. Richard Fox'
          credentials='MD, M.Sc. FRCSC'
          classes='team-img'
        />
      </div>,
      <div key={'nataraj'}>
        <TeamMember
          fileName='avatar'
          name='Dr. Andrew Nataraj'
          credentials='MD, M.Sc. FRCSC'
          classes='team-img'
        />
      </div>,
      <div key={'hockley'}>
        <TeamMember
          fileName='avatar'
          name='Dr. Aaron Hockley'
          credentials=' MD, FRCSC'
          classes='team-img'
        />
      </div>,
      <div key={'jack'}>
        <TeamMember
          fileName='edmonton/jack'
          name='Dr. Andrew Jack'
          credentials='MD, M.Sc. FRCSC'
          classes='team-img'
        />
      </div>,
      <div key={'mahood'}>
        <TeamMember
          fileName='edmonton/mahood'
          name='Dr. Jim Mahood'
          credentials='MD FRCSC'
          classes='team-img'
        />
      </div>,
      <div key={'huang'}>
        <TeamMember
          fileName='edmonton/huang'
          name='Dr. Eric M. Huang'
          credentials='MSc, MD, FRCSC'
          classes='team-img'
        />
      </div>,
      <div key={'kortbeek'}>
        <TeamMember
          fileName='edmonton/kortbeek'
          name='Dr. Frank Kortbeek'
          credentials='MD FRCSC'
          classes='team-img'
        />
      </div>,
      <div key={'sharifi'}>
        <TeamMember
          fileName='avatar'
          name='Dr. Babak Sharifi'
          credentials='MD FRCSC'
          classes='team-img'
        />
      </div>,
      <div key={'jiang'}>
        <TeamMember
          fileName='avatar'
          name='Dr. Harry Jiang'
          credentials='MD FRCSC'
          classes='team-img'
        />
      </div>,
      <div key={'manolescu'}>
        <TeamMember
          fileName='edmonton/manolescu'
          name='Dr. Andrei R. Manolescu'
          credentials='MD FRCSC'
          classes='team-img'
        />
      </div>,
      <div key={'lavoie'}>
        <TeamMember
          fileName='avatar'
          name='Dr. Mitch Lavoie'
          credentials='MD FRCSC'
          classes='team-img'
        />
      </div>,
    ]

    return shuffle(items)
  }

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 1000,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 2,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  }

  return (
    <div ref={props.teamRef} className='section section-light-bottom '>
      <Row justify='center' gutter={64}>
        <Col xxl={5} xl={6} md={8} sm={10} xs={12}>
          <TeamMember
            fileName='calgary/jacobs'
            name='Dr. W. Bradley Jacobs'
            credentials='President: Calgary Chapter'
            classes='hero-team-img'
          />
        </Col>
        <Col xxl={5} xl={6} md={8} sm={10} xs={12}>
          <TeamMember
            fileName='edmonton/kortbeek'
            name='Dr. Frank Kortbeek'
            credentials={
              <span>
                President: ASF
                <br /> President: Edmonton Chapter
              </span>
            }
            classes='hero-team-img'
          />
        </Col>
      </Row>
      <Row className='section-inner'>
        <Col span={24}>
          <h1 className='text-center'>Our Team</h1>
          <Row align='middle' justify='center'>
            <Col xl={11} lg={11} md={11} sm={24}>
              <h3 className='text-center'>Calgary</h3>
              <Slider {...settings} autoplaySpeed={3000}>
                {getCalgaryTeam()}
              </Slider>
            </Col>
            <Divider type='vertical' style={{ height: '100px' }} />
            <Col xl={11} lg={11} md={11} sm={24}>
              <h3 className='text-center'>Edmonton</h3>
              <Slider {...settings} autoplaySpeed={3100}>
                {getEdmontonTeam()}
              </Slider>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}
