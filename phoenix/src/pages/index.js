import { useRef } from 'react'

import Banner from 'src/components/Banner'
import Contact from 'src/components/Contact'
import Donate from 'src/components/Donate'
import Footer from 'src/components/Footer'
import Mission from 'src/components/Mission'
import Services from 'src/components/Services'
import Socials from 'src/components/Socials'
import Stories from 'src/components/Stories'
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
    <div className='space-y-32'>
      {/* <Header scrollTo={scrollTo} /> */}
      <Banner />
      <Services scrollRef={aboutRef} />
      <Mission scrollRef={missionRef} />
      <Contact scrollRef={contactRef} />
      {/* <Team teamRef={teamRef} /> */}
      <Stories />
      <Donate donateRef={donateRef} />
      <Socials />
      <Footer />
    </div>
  )
}

export default Home
