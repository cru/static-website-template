import { useRef } from 'react'

import Banner from 'src/components/Banner'
import Contact from 'src/components/Contact'
import Donate from 'src/components/Donate'
import Footer from 'src/components/Footer'
import Mission from 'src/components/Mission'
import Services from 'src/components/Services'
import Socials from 'src/components/Socials'
import Stories from 'src/components/Stories'
import Team from 'src/components/Team'
import constants from 'src/constants'
import api from 'src/lib/api'
import utils from 'src/lib/cms-utils'

export const getStaticProps = async () => {
  const announceRes = await api.get('/announcements')
  const teamRes = await api.get('/people')
  const people = []

  for (let i = 0; i < teamRes.docs?.length; i++) {
    const portrait = teamRes.docs[i].portrait

    if (portrait) {
      const src = `${process.env.NEXT_PUBLIC_CMS_URL}${portrait.url}`
      const { base64, img } = await utils.getImage(src)

      people.push({
        ...teamRes.docs[i],
        imageProps: {
          src: src,
          alt: portrait.name,
          placeholder: 'blur',
          blurDataURL: base64,
        },
      })
    } else {
      people.push({ ...teamRes.docs[i] })
    }
  }

  return {
    props: {
      announcements: announceRes.docs || [],
      people: people,
    },
    revalidate: parseInt(process.env.NEXT_PUBLIC_REGENERATION_TIME),
  }
}

const Home = ({ announcements, people }) => {
  const servicesRef = useRef(null)
  const missionRef = useRef(null)
  const contactRef = useRef(null)
  const teamRef = useRef(null)
  const donateRef = useRef(null)

  const storiesRef = useRef(null)

  const scrollTo = (section) => {
    switch (section) {
      case constants.pageSections.SERVICES:
        servicesRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
        break
      case constants.pageSections.MISSION:
        missionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
        break
      case constants.pageSections.CONTACT:
        contactRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
        break
      case constants.pageSections.DONATE:
        donateRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
        break
      case constants.pageSections.STORIES:
        storiesRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
        break
      case constants.pageSections.TEAM:
        teamRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
        break
      default:
        break
    }
  }

  return (
    <div className='space-y-32'>
      {/* <Header scrollTo={scrollTo} /> */}
      <Banner />
      <Services forwardRef={servicesRef} />
      <Mission forwardRef={missionRef} />
      <Contact forwardRef={contactRef} />
      <Stories forwardRef={storiesRef} />
      <Team forwardRef={teamRef} team={people} />
      <Donate forwardRef={donateRef} />
      <Socials />
      <Footer />
    </div>
  )
}

export default Home
