import { useRef } from 'react'
import { Banner } from 'src/components/Banner'

import constants from 'src/constants'
import api from 'src/lib/api'

export const getStaticProps = async () => {
  const res = await api.get('/announcements')

  return {
    props: {
      announcements: res.docs || [],
    },
    revalidate: 21600, // 6 hours
  }
}

const Home = () => {
  const aboutRef = useRef(null)
  const missionRef = useRef(null)
  const contactRef = useRef(null)
  const teamRef = useRef(null)
  const donateRef = useRef(null)
  const partnersRef = useRef(null)
  const storiesRef = useRef(null)

  const scrollTo = (section) => {
    switch (section) {
      case constants.pageSections.ABOUT:
        aboutRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
        break
      case constants.pageSections.MISSION:
        missionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
        break
      case constants.pageSections.CONTACT:
        contactRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
        break
      case constants.pageSections.TEAM:
        teamRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
        break
      case constants.pageSections.DONATE:
        donateRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
        break
      case constants.pageSections.PARTNERS:
        partnersRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
        break
      case constants.pageSections.STORIES:
        storiesRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
        break
      default:
        break
    }
  }

  return (
    <>
      {/* <Header scrollTo={scrollTo} /> */}
      <Banner />
      {/* <About aboutRef={aboutRef} />
      <Mission missionRef={missionRef} />
      <Contact contactRef={contactRef} />
      <Team teamRef={teamRef} />
      <Partners partnersRef={partnersRef} />
      <Donate donateRef={donateRef} /> */}
      {/* <div className='section-light-thin'>
              <Row  align='middle' justify='center' gutter={32}>
                <Col xl={24} lg={24} md={24} sm={24} xs={24}>
                  <h5>Extra info or social media links</h5>
                </Col>
                <Col>
                  <a
                    className='btn-header-link'
                    href='https://cru.ucalgary.ca/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <Facebook />
                  </a>
                </Col>
                <Col>
                  <a
                    className='btn-header-link'
                    href='https://cru.ucalgary.ca/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <Instagram />
                  </a>
                </Col>
              </Row>
            </div> */}
      {/* <Footer /> */}
    </>
  )
}

export default Home
